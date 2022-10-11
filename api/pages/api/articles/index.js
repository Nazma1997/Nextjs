import { articles } from "../../../data/comments";

export default function handler(req, res){
  if(req.method === 'GET'){
    res.status(200).json(articles)
  }
  else if(req.method === "POST"){
    const article = req.body.article
    const newArticle = {
      id: Date.now(),
      text: article
    }
    articles.push(newArticle)
    res.status(201).json(newArticle)
  }
}