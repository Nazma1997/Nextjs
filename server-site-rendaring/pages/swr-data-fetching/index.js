import useSWR from 'swr'

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/post')
  const data = await response.json()
  return data
}



 function PostSWR(){
  const {data, error} = useSWR('swr-data-fetching', fetcher)

  console.log(data)
  if(error) return "An error "
  if(!data) return "Loading......"

  return(
    <div>
      <h1>Data fetching with SWR</h1>
      <h3> ID: {data.id}</h3>
       <h3>Name : {data.name}</h3>
      <h3>Title : {data.title}</h3>
    </div>
  )
}

export default PostSWR;