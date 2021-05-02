import "../styles/styles.scss";

interface myAppProps {
  Component: any,
  pageProps: any
}

function MyApp({ Component, pageProps }:myAppProps) {
  return <Component {...pageProps} />
}

export default MyApp
