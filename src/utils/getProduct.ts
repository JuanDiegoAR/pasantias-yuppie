import { Product } from "../interfaces";

export const getProduct = async (productId: string) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const product: Product = await response.json();

  return product;
};
