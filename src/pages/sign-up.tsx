import AuthLayout from 'layouts/AuthLayout';

export default function SignIn() {
  return (
    <>
      <AuthLayout
        to="/sign-in"
        linkLabel="I already an account"
        title="Welcome!"
        position="right"
      >
        <form action=""></form>
      </AuthLayout>
    </>
  );
}
