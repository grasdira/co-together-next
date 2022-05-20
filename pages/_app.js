import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;
export default appWithTranslation(App);

// the top-level component which will be common across all the different pages.
// restart the development server when adding pages/_app.js
// global CSS import here
