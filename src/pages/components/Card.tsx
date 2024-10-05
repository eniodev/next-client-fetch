'use client'
import type { Product } from "@/product";
import Image from "next/image";

const mockImage = 'https://fujifilm-x.b-cdn.net/wp-content/uploads/2023/08/x-t4_thum.jpg?width=480&height=480';

const Card = (product:  Product) => {
  return (
    <div>
      <Image width={480} height={480} src={mockImage} alt={product.url} />
      <div className="mt-2">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
      </div>
    </div>
  )
}

export default Card;