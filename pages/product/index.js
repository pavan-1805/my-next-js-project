import Link from "next/link";
import React from "react";

const Product = ({productId=100}) => {
  return (
    <>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <div>Product Page</div>
      <h1>
        <Link href={"/product/1"}>
          <a>Product 1</a>
        </Link>
      </h1>
      <h1>
         <Link href={"/product/2"} replace>  
          <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h1>
      <h1>
        <Link href={"/product/300"}>
          <a>Product 300</a>
        </Link>
      </h1>
    </>
  );
};

export default Product;
