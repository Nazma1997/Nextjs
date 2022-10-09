import { useRouter } from "next/router";




export default function Post({post}){
  const router = useRouter()

  if(router.isFallback){
    return <h1>Loading.....</h1>
  }
  return(
    <div>
     <h2>{post.id} . {post.title}</h2>
     <h3>{post.body}</h3>
    </div>
  )
};

export async function getStaticPaths(){
  return{
    paths:[
      {
        params:{postId: '1'}
      },
      {
        params:{postId: '2'}
      },
      {
        params:{postId: '3'}
      },
     
    ],
    fallback: true,
  }
}


export async function getStaticProps(context){
  const {params} = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await response.json()


  //404 page 
  if(!data.id){
    return{
      notFound: true
    }
  }

  return{
    props:{
      post:data
    }
  }
}