import { useRouter } from 'next/router'
import React from 'react'

const Doc = () => {
    const router = useRouter()
    const {params}=router.query
    console.log(params);
  return (
    <div>Doc</div>
  )
}

export default Doc