


export default function UserList({users}){
  return(
    <div>
      <h1>All User List</h1>
      {users.map(user => {
        return(
          <div key={user.id}>
            <p>{user.name}</p>
            <p>User name:{user.username}</p>
            <p>{user.email}</p>

          </div>
        )
      })}
    </div>
  )
};


export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  // console.log(data)

  return{
    props:{
      users:data,
    },
  }
}