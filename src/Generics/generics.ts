/* Generic Function */
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

console.log(getFirst([10, 20, 30]));
console.log(getFirst(["HTML", "CSS", "React"]));
console.log(getFirst([]));

/* Generic Interface */
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

/* Product Type */
type Product = {
  id: number;
  title: string;
  price: number;
};

/* Product Data */

const products: Product[] = [
  { id: 1, title: "Laptop", price: 50000 },
  { id: 2, title: "Mobile", price: 20000 },
];

/* API Response */

const response: ApiResponse<Product[]> = {
  data: products,
  status: 200,
  message: "Products fetched successfully",
};

console.log(response);
