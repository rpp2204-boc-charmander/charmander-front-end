import Layout from "../components/Layout";
import "../styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";

interface IProps {
  Component: any;
  pageProps: AppProps;
  userData: { user_id: number; log_date: string };
}

export default function App({
  Component,
  pageProps,
  userData,
}: IProps): JSX.Element {
  const user_id = userData.user_id;

  const essential_props = { user_id };

  return (
    <Layout>
      <Component {...pageProps} {...essential_props} />
    </Layout>
  );
}

App.getInitialProps = async (ctx: any) => {
  // hard coding this user to test page components
  const authid = "78y2q6efgyucbu3rfb";

  const res = await axios.get(
    `${String(process.env.BACKEND_URL)}/user/${authid}`
  );

  return {
    userData: res.data,
  };
};
