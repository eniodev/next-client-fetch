import Image from "next/image";
import localFont from "next/font/local";
import useSWR from 'swr'
import { Product } from "@/product";
import { Card } from "./components/Card";
import { useEffect, useRef, useState } from "react";

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
  const [filteredItems, setFilteredItems] = useState<Product[]>([])
  const searchRef = useRef<HTMLInputElement>(null);
  const sortingCriteriaRef = useRef<HTMLSelectElement>(null);
  
  const searchItems = async () => {
    if(searchRef.current && searchRef.current.value!=="") {
      const searchValue = searchRef.current.value.trim();
      const _filteredItems = await data.products
            .filter((item: Product) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      setFilteredItems(_filteredItems);
    }
    else if(sortingCriteriaRef!.current!.value==="All")
      setFilteredItems(data.products)
    else
      sortItemsBy()
  }
  
  const sortItemsBy = async () => {
    switch(sortingCriteriaRef!.current!.value)
    {
      case "asc":
        const itemsByLowest = data.products.toSorted((a: Product, b: Product) => b.price - a.price);
        setFilteredItems(itemsByLowest);
        break
      case "desc":
        const itemsByHight = data.products.toSorted((a: Product, b: Product) => a.price - b.price);
        setFilteredItems(itemsByHight);
        break
      default:
        setFilteredItems(data.products)
    }
  }
  
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="">
        <h1 className="text-lg font-bold">Fetch store.</h1>
      </header>
      <main className="flex flex-col w-full min-h-screen">
        <div className="flex mb-20">
          <input 
            className="w-full gap-52 pl-2 bg-transparent border-[0.1px] focus:outline-none"
            type="search" 
            placeholder="Looking for?" 
            ref={searchRef}
            onChange={searchItems}
            />
            <select name="price-filter" 
                    className="bg-transparent ml-5 focus:outline-none"
                    onChange={sortItemsBy}
                    ref={sortingCriteriaRef}>
            <option value="">All</option>
            <option value="desc">Lowest Price</option>
            <option value="asc">Highest Price</option>
            </select>
        </div>
        <div className="grid grid-cols-3 gap-8 row-start-2 items-center sm:items-start">
          {filteredItems.length ? (
            filteredItems.map((product: Product) => (
              <Card {...product} />
            ))
            ):
            <p className="col-span-3 row-span-3 text-sm text-center">Nothing to see here...</p>
          }
        </div>
      </main>
      <footer className="clear-start row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
