import {useState} from 'react'

export default function Articles(){
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState('')

  const loadArticles = async ()=> {
    const response = await fetch('/api/articles')
    const data = await response.json()
    setArticles(data)
  } 

  const submitComment = async()=> {
    const response = await fetch('api/articles', {
      method: 'POST',
      body: JSON.stringify({article}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    // console.log(data)
  }


  const deleteArticle = async (articleId) =>{
    const response = await fetch(`/api/articles/${articleId}`, {
      method: 'DELETE',
    })

    const data = await response.json()
    // console.log(data)
    loadArticles()
  }
  
  return(
    <div>
       <input type='text' value={article} onChange={(e) => setArticle(e.target.value)}></input>
       <button onClick={submitComment}>Submit Article</button>
       <button onClick={loadArticles}>Load Articles</button>
       {
        articles.map(article => {
          return(
            <div key={article.id}>
            <h2>{article.id} {article.text}</h2>
            <button onClick={() => deleteArticle(article.id)}>Delete</button>
          </div>
          )
        })
       }
    </div>
  )
}