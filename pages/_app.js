import "../styles/index.css";
import "../styles/globals.css";
import { AppProvider } from "../components/utils/AppProvider";
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
