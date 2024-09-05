import type { Product } from "@/product"

export const Card = (product:  Product) => {
  return (
    <div>
    <img src={product.image} alt={product.url} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
        </div>
    </div>
  )
}