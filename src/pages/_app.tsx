import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ptPT } from "~/utils/localization";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps} localization={ptPT}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
