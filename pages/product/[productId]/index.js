import React from 'react'
import { useRouter } from 'next/router'
const ProductDetailsPage = () => {
    const router = useRouter()
    const productId = router.query.productId
    console.log(productId);

  return (
    <div>Product Details Page {productId}</div>
  )
}

export default ProductDetailsPage