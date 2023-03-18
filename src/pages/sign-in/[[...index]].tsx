import { SignIn } from "@clerk/nextjs";
import classNames from "classnames";
import Button from "~/components/Button";
import Layout from "~/components/Layout";
import { base, headings } from "~/utils/fonts";

const SignInPage = () => (
  <Layout noMap>
    <div className="flex w-full pt-16">
      <div className="md:basis-1/3 md:border-r md:px-16">
        <SignIn
          appearance={{
            variables: {
              colorPrimary: "rgb(20,83,45)",
              colorBackground: "transparent",
            },
            elements: {
              card: "shadow-none",
            },
          }}
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
        />
      </div>
      <div className="md:basis-2/3 md:px-8">
        <h1
          className={classNames(
            "mb-6 font-headings text-xl font-bold text-green-900 md:text-7xl",
            headings.variable
          )}
        >
          Registra-te como produtor
        </h1>
        <p className={classNames("font-base md:w-2/3", base.variable)}>
          Learn from fucking criticism. Don’t get hung up on things that don’t
          fucking work. You need to sit down and{" "}
        </p>
        <Button
          label="Vender na FeiraOnline"
          className="my-8"
          onClick={() => console.log("todo...")}
        />
      </div>
    </div>
  </Layout>
);

export default SignInPage;
