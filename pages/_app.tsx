import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import localFont from "next/font/local";

export const vazirmatn = localFont({
  src: [
    {
      path: "../public/fonts/Vazirmatn-FD-NL-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
