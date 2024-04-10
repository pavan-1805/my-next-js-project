import { useRouter } from "next/router";
import React from "react";

const Reviewid = () => {
  const router = useRouter();
  console.log(router);
  const { productId, reviewId } = router.query;
  return <div>Product: {productId} Review: {reviewId} </div>;
};

export default Reviewid;
