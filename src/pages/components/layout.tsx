import Image from "next/image";
import localFont from "next/font/local";
import ThemeSwitch from "./theme-switch";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
  <div
    className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
  >
    <header className="w-full flex justify-between">
      <h1 className="text-lg font-bold">Fetch store.</h1>
      <ThemeSwitch />
    </header>
    <main className="flex flex-col w-full min-h-screen">
      {children}
    </main>
    <footer className="clear-start row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/"
          alt="File icon"
          width={16}
          height={16}
        />
        WIP
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Next →
      </a>
    </footer>
  </div>
  )
}

export default Layout;