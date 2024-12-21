import { useState } from "react";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function FilterableProductTable() {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onInStockChange={setInStockOnly}
        onFilterTextChange={setFilterText}
      />
      <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={PRODUCTS} />
    </div>
  );
}
