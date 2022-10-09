import Link from "next/link"


export default function TodoList({todos}){
  return(
    <div>
       <h1>All Todos List</h1>
       {todos.map(todo => (
        <div key={todo.id}>
          <Link href={`/todos/${todo.id}`}passHref>
          <h2>{todo.id} . {todo.title}</h2>
          </Link>
        </div>
       ))}
    </div>
  )
};


export async function getStaticProps(){
  const response =  await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()


  return{
    props:{
      todos: data
    }
  }

}