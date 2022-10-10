

export default function NewsList({newses}){
  return(
    <div>
       <h1>All News list</h1>
       {
        newses.map(news => {
          return(
            <div key={news.id}>
              <h3>{news.id} . {news.title} === {news.desc}</h3>
            </div>
          )
        })
       }
    </div>
  )
}


export async function getServerSideProps(){
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()

  return{
    props:{
      newses: data
    }
  }
}