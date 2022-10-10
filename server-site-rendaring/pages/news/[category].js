export default function NewsListByCategory({newses,category}){
  return(
    <div>
            <h1>Showing news for {category}</h1>
            {
              newses.map(news => {
                return(
                  <div key={news.id}>
                    <h2>{news.id} {news.title} {news.desc}</h2>
                  </div>
                )
              })
            }
    </div>
  )
}


export async function getServerSideProps({params}){
  const response = await fetch(`http://localhost:4000/news?category=${params.category}`)

  const data = await response.json()

  return{
    props:{
      newses: data,
      category:params.category
    }
  }
}