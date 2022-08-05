import { useAuth } from 'hooks/useAuth';
import { Button } from 'components';

function Home() {
  const { signOut, user } = useAuth();

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

export default Home;
