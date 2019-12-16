import React from 'react';
import Card1 from './Card1';

const ArticleHighlightsData = [
  {
    articleName: "Lorem Ipsom ladidsu siatisa",
    articleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspmqDKUqM91ZDWUpqmSlcZcUbsBfy0u6Ek7-Webet6v-YfuG8&s",
    author: "Syana Indara",
    postDate: "Jan 24",
    minRead: "10"
  },
  {
    articleName: "Lorem Porem ich meine Link",
    articleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspmqDKUqM91ZDWUpqmSlcZcUbsBfy0u6Ek7-Webet6v-YfuG8&s",
    author: "Jan Phosre",
    postDate: "Mar 20",
    minRead: "4"
  },
  {
    articleName: "How to train your Dragoon",
    articleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspmqDKUqM91ZDWUpqmSlcZcUbsBfy0u6Ek7-Webet6v-YfuG8&s",
    author: "Ragna Crimson",
    postDate: "Nov 22",
    minRead: "5"
  },
]

export default function ArticleHighlights(){
  return(
    <>
      {
        ArticleHighlightsData.map(articleData => (
          <Card1
            articleName = {articleData.articleName}
            articleImage = {articleData.articleImage}
            author = {articleData.author}
            postDate = {articleData.postDate}
            minRead = {articleData.minRead}
          />
        ))
      }
    </>
  )
}

// {
//   Students.map(Student => (
//     <h1>{Student.name}</h1>
//   ))
// }