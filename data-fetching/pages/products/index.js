import Link from "next/link"



export default function ProductList({products}){
  return(
    <div>
      <h1>All Products List</h1>
      {
        products.map(product => (
          <div key={product.id}>
           <Link href={`/products/${product.id}`} passHref>
           <h2>{product.id}.{product.name} Price:{product.price}</h2>
           </Link>
            <hr/>
          </div>
        ))
      }

    </div>
  )
}


export async function getStaticProps(){
  const response = await fetch('http://localhost:4000/products')
  const data = await response.json()

  return{
    props:{
      products: data
    },
    revalidate:10
  }
}