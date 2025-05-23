export const getCategoryProducts = async (category: string) => {
  try {
    if (category === "all") {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const result = await response.json();

      return result;
    } else {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const result = await response.json();

      return result;
    }
  } catch (error) {
    console.error("Error fetching data of products of category: ", error);
  }
};
