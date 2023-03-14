import { SignIn } from "@clerk/nextjs";
import Layout from "~/components/Layout";

const SignInPage = () => (
  <Layout>
    <div className="absolute z-30 flex h-screen w-screen items-center justify-center bg-white/10 backdrop-blur-lg">
      <SignIn
        appearance={{ variables: { colorPrimary: "rgb(20,83,45)" } }}
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
      />
    </div>
    <div className="h-96"></div>
  </Layout>
);

export default SignInPage;