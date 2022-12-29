import Layout from "../components/Layout";
import "../styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";

interface IProps {
  Component: any;
  pageProps: AppProps;
  userData: { user_id: number; log_date: string };
}

/**
   *
  TODO:
  1. Refactor how currentDate is used. Suggestion: Date needs to be in it's onw layout

   */

export default function App({
  Component,
  pageProps,
  userData,
}: IProps): JSX.Element {
  const user_id = userData.user_id;

  // must pass these props to every component because every component needs to know user_id and date
  // date can't be changed inside each component. Need to pass date as props to components
  const essential_props = { user_id };

  return (
    <Layout>
      <Component {...pageProps} {...essential_props} />
    </Layout>
  );
}

App.getInitialProps = async (ctx) => {
  const authid = "78y2q6efgyucbu3rfb";

  const res = await axios.get(
    `${String(process.env.BACKEND_URL)}/user/${authid}`
  );

  return {
    userData: res.data,
  };
};
