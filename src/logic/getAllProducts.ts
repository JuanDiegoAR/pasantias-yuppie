export const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data of all products: ", error);
  }
};
