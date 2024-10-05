import useSWR from 'swr'
import { Product } from "@/product";
import { Card }  from "./components";
import { useEffect, useRef, useState } from "react";

const fetcher = (...args: any) => fetch(args).then((res) => res.json());

export default function Home() {
  const searchRef = useRef<HTMLInputElement>(null);
  const sortingCriteriaRef = useRef<HTMLSelectElement>(null);
  const [filteredItems, setFilteredItems] = useState<Product[]>([])
  
  const { data, isLoading, error } = useSWR('/api/products', fetcher);
  
  useEffect(() => {
    if (data) {
      setFilteredItems(data.products);
    }
  }, [data]);
  
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
      <>
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
            <p className="col-span-3 row-span-3 text-sm text-center">
              { isLoading ? "Loading..." : "Nothing to see here.." }
            </p>
          }
        </div>
      </>
  );
}