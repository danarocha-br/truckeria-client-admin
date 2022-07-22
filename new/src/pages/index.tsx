import { useRouter } from 'next/router';

import { useAuth, ProtectRoute } from 'hooks/useAuth';
import { Button } from 'truckeria-design';
import { useEffect } from 'react';

function Home() {
  const { signOut, user, loading } = useAuth();

  const router = useRouter();
  console.log(user);

  // useEffect(() => {

  //   if (user && !loading) {
  //     router.push('/');
  //   } else {
  //     router.push('/auth/sign-in');
  //   }
  // }, []);


  return (
    <div>
      hello dashboard
      <Button label="Sign out" onClick={signOut} />
    </div>
  );
}

export default Home
