

export default function Todo({todo}){
  return(
    <div>
        <h1>{todo.id} . {todo.title}</h1>
        <h3>Show Single Todo</h3>
    </div>
  )
}

export async function getStaticPaths(){
  const response =  await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()

  const paths = data.map(todo => {
    
    return{
      params:{
         todoId: `${todo.id}`
      }
    }
  })

  return{
    paths,
    fallback: false
  }
}



export async function getStaticProps({params}){
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
  const data = await response.json()
  
  
  return{
    props:{
      todo: data
    }
  }
}