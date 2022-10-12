import { articles } from "../../../data/comments"



export default function handler(req,res){
    const {articleId} = req.query
  
    if(req.method === 'GET'){
      const article = articles.find(article => article.id === parseInt(articleId))
      res.status(200).json(article)
    }

    else if(req.method === 'DELETE'){
      const deletedArticle = articles.find(article => article.id === parseInt(articleId))

      const index = articles.findIndex(article => article.id === parseInt(articleId))

      articles.splice(index, 1)
      res.status(200).json(deletedArticle)
    }
}