import { SignUp } from "@clerk/nextjs";
import Layout from "~/components/Layout";

const SignUpPage = () => (
  <Layout>
    <div className="absolute z-30 flex h-screen w-screen items-center justify-center bg-white/10 backdrop-blur-lg">
      <SignUp
        appearance={{ variables: { colorPrimary: "rgb(20,83,45)" } }}
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/"
      />
    </div>
    <div className="h-96"></div>
  </Layout>
);

export default SignUpPage;
