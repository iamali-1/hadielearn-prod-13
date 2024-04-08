import AuthProvider from "@/context/authContext";
import "@/styles/globals.scss";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

import { Toaster } from "react-hot-toast";
NProgress.configure({ showSpinner: false });

// Bind NProgress to Router events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Toaster />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
