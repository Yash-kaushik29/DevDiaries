import Navbar from "@/components/navbar";
import { SnackbarProvider } from "notistack";
import { closeSnackbar } from "notistack";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        action={(snackbarId) => (
          <button onClick={() => closeSnackbar(snackbarId)} style={{background: 'none', border: 'none'}} >X</button>
        )}
      >
        <Navbar />
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
}
