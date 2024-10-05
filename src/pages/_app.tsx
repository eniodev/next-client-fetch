import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Layout } from "./components";

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>;
}
