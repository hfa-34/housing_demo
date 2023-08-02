import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import SimpleLayout from "./components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <SimpleLayout>
    <Component {...pageProps} />
  </SimpleLayout>;
};

export default api.withTRPC(MyApp);
