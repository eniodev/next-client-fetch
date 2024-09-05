import Image from "next/image";
import localFont from "next/font/local";
import useSWR from 'swr'
import { Product } from "@/product";
import { Card } from "./components/Card";

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function Home() {
  const { data, error } = useSWR('/api/products', fetcher);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="grid grid-cols-3 gap-8 row-start-2 items-center sm:items-start">
        {data && (
          data.products.map((product: Product) => (
            <Card {...product} />
          ))
        )
      }
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
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
  );
}
