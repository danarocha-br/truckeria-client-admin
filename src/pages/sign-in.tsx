import AuthLayout from 'layouts/AuthLayout';

export default function SignIn() {
  return (
    <>
      <AuthLayout
        to="/sign-up"
        linkLabel="I don't have an account"
        title="Welcome back!"
      >
        <form action=""></form>
      </AuthLayout>
    </>
  );
}
