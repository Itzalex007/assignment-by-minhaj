import "../styles/globals.css";
import { FormProvider } from "../context/FormContext";

export default function App({ Component, pageProps }) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}
