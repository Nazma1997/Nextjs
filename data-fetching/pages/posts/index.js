import Link from "next/link"


export default function PostList({posts}){
  return(
    <div>
      <h1>All The Post</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h1>{post.id} . {post.title}</h1>
          </Link>

        </div>
      ))}
    </div>
  )
};



export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data =  await response.json()

  return{
    props:{
      posts: data
    }
  }
}