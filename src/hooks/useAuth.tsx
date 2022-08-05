import { useState, useEffect, useContext, createContext } from 'react';
import { User, AuthChangeEvent, Session } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import axios from 'axios';

import { supabase } from 'services/api/supabase';
import { ERROR_MESSAGES, APP_ROUTES } from 'constants/index';

export type UserRoles = 'user' | 'admin';
export type UserPermissions = 'foodtruck.manage' | 'foodtruck.read';

export type AuthError = {
  title: string;
  description: string;
};

export type UserProfileData = {
  roles: UserRoles[];
  permissions: UserPermissions[];
  is_subscribed: boolean;
};

export type UserData = {
  user: (User & UserProfileData) | null;
  error: AuthError | null;
  loading: boolean;
};

export type UserCredentials = {
  email: string;
  password: string;
};

export type NewUserCredentials = {
  // name: string;
  email: string;
  password: string;
};

type AuthContextData = {
  user: (User & UserProfileData) | null;
  session: Session | null;
  loading: boolean;
  signIn: (credentials: UserCredentials) => void;
  signUp: (credentials: NewUserCredentials) => void;
  setUserProfile: (credentials: NewUserCredentials) => void;
  signOut: () => void;
  error: AuthError | null;
  fetcher: (url: string, data: any) => Promise<any>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<(User & UserProfileData) | null>(
    //@ts-ignore
    supabase.auth.user()
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (!router.asPath.includes('#access_token')) {
      sessionStorage.removeItem('AUTH');
    }

    const auth = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        setLoading(!!user);
        setUser(supabase.auth.user());
        setSession(session);
        setLoading(!!user);
        getUserProfile();

        if (user) {
          router.push('/');
        }

        // if (event === 'SIGNED_IN') {

        // }

        if (event === 'SIGNED_OUT') {
          setUser(null);
          setSession(null);
          router.push('/auth/sign-in');
        }
      }
    );

    const handleRouteChange = () => setHasError(false);

    router.events.on('routeChangeStart', handleRouteChange);

    const getUserProfile = async () => {
      const sessionUser = supabase.auth.user();

      if (sessionUser) {
        const { data: user_profile } = await supabase
          .from('user_profile')
          .select('*')
          .eq('user_id', sessionUser.id)
          .single();

        setUser({
          ...sessionUser,
          ...user_profile,
        });

        setLoading(false);
      }
    };

    getUserProfile();

    return () => {
      //@ts-ignore
      router.events.off('routeChangeStart');
      auth.data && auth.data.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios.post('/api/auth/set-supabase-cookie', {
      event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
      session: supabase.auth.session(),
    });
  }, [user]);

  const signIn = async (credentials: UserCredentials) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({
        email: credentials.email,
        password: credentials.password,
      });
      if (error)
        setError({
          title: ERROR_MESSAGES.INVALID_CREDENTIALS.TITLE,
          description: ERROR_MESSAGES.INVALID_CREDENTIALS.DESCRIPTION,
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.push('/');
      setLoading(false);
    }
  };

  const signUp = async (credentials: NewUserCredentials) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        setError({
          title: ERROR_MESSAGES.INVALID_CREDENTIALS.TITLE,
          description: ERROR_MESSAGES.INVALID_CREDENTIALS.DESCRIPTION,
        });
        setLoading(false);
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.push('/auth/confirmation_email_sent');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setUserProfile = async (credentials: NewUserCredentials) => {
    setLoading(true);

    const profileData = {
      user_id: user?.id,
      // name: credentials.name,
      roles: ['user', 'admin'],
      permissions: ['foodtruck.read'],
      is_subscribed: false,
    };

    try {
      const { error } = await supabase.from('user_profile').upsert(profileData);

      if (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setUser(null);
      setLoading(false);
    }
  };

  const fetcher = (url: string, data: any) => {
    const options: RequestInit | undefined = {
      headers: new Headers({
        'Content-Type': 'application/json',
        token: session?.access_token ? session.access_token : '',
      }),
      credentials: 'same-origin',
    };
    if (data) {
      options.method = 'POST';
      options.body = JSON.stringify(data);
    }

    return fetch(url, options).then((res) => {
      if (!res.ok) {
        // global error handling
      }
      return res.json();
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        loading: loading,
        session: session,
        error: error,
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
        fetcher: fetcher,
        setUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider.');
  }

  return context;
}

const isBrowser = () => typeof window !== 'undefined';

//@ts-ignore
const ProtectRoute = ({ router, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, loading } = useAuth();

  const unprotectedRoutes = [
    APP_ROUTES.LOGIN_PAGE,
    APP_ROUTES.SIGN_UP,
    APP_ROUTES.FORGOT_PASSWORD,
    APP_ROUTES.RESET_PASSWORD,
    APP_ROUTES.CONFIRMATION_EMAIL_SENT,
  ];

  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !user && pathIsProtected) {
    router.push(APP_ROUTES.LOGIN_PAGE);
  }

  return children;
};

export { AuthProvider, useAuth, AuthContext, ProtectRoute };
