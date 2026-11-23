
type Product = {
    id:number;
    title:string;
    price:number;
    category:string;
}

/* 1. Omit - Remove a property */
type NewProduct = Omit<Product, "id">;

const newProduct: NewProduct = {
  title: "Laptop",
  price: 50000,
  category: "Electronics"
};
console.log("New Product:", newProduct);



/* 2. Pick - Select specific properties */
type ProductPreview = Pick<Product, "id" | "title">;

const preview: ProductPreview = {
  id: 1,
  title: "Laptop"
};

console.log("Product Preview:", preview);


/* 3. Partial */
type ProductUpdate = Partial<Product>;

const updateProduct: ProductUpdate = {
  price: 45000
};

console.log("Product Update:", updateProduct);



/* 4. Record*/
type PriorityCount = Record<"High" | "Medium" | "Low", number>;

const priority: PriorityCount = {
  High: 5,
  Medium: 10,
  Low: 3
};
console.log("Priority Count:", priority);


/* 5. Readonly */
const readonlyProduct: Readonly<Product> = {
  id: 2,
  title: "Mobile",
  price: 20000,
  category: "Electronics"
};
console.log("Readonly Product:", readonlyProduct);
