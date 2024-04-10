import React from 'react'
import { useRouter } from "next/router";
const PostId = ({post}) => {
  const router = useRouter()
  if(router.isFallback){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <h1>{post.id}</h1>
    <h1>{post.title}</h1>
    <h3>{post.body}</h3>
    </>
  )
}

export default PostId

export async function getStaticPaths(){
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();
  // const paths=data.map((post)=>{
  //   return{
  //     params:{
  //       postId: `${post.id}`
  //     }
  //   }
  // })
  return{
    paths:[
      {
        params:{postId:'1'}
      },
      {
        params:{postId:'2'}
      },
      {
        params:{postId:'3'}
      },
      {
        params:{postId:'4'}
      }
    ],            //OR
    // paths,
    fallback:true
  }
}

export async function getStaticProps(context) {
    const {params}=context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)    
    const data = await response.json()

    if(!data.id){
      return {
        notFound: true
      }
    }
    return {
        props:{
            post:data
        }
    }
}