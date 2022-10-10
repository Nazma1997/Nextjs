import {useRouter} from 'next/router';



export default function Product(props){
  const router = useRouter()
  if(router.isFallback){
   return <h1>Loading...............</h1>
  } 

  const {id, name, price,description} = props.product
  return(
    <div>
      <h1>{id}. {name}  Price:{price}</h1>
      <h3>{description}</h3>

    </div>
  )
}

export async function getStaticPaths(){
  return{
    paths:[
      {
        params: {productId: "1"}
      }
    ],
    fallback:true,
    
  }
}




export async function getStaticProps({params}){
  const response = await fetch(`http://localhost:4000/products/${params.productId}`)

  const data = await response.json()

  //404 page
   if(!data.id){
    return{
      notFound:true
    }
   }

  return{
    props:{
      product: data
    }
  }

}