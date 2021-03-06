import AuthLayout from 'layouts/AuthLayout';
import SwitchCustom from 'components/Switch';

export default function Home() {
  return (
    <>
      <SwitchCustom />
      <AuthLayout
        to="/sign-up"
        linkLabel="I don't have an account"
        title="Welcome back!"
        position="right"
      >
        <form action=""></form>
      </AuthLayout>
    </>
  );
}
