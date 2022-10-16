import React from "react";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list({
    category_slug: ['test-category']});

  return {
    props: {
      products,
    },
  };
}


export default function FilteredCategory({ products }) {
  return (
    <React.Fragment>
      <h1>This collection is filtered, showing products that are within the collection "test categroy"</h1>

      <ProductList products={products} />
    </React.Fragment>
  );
}
