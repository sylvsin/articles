import './App.css';

import React, {
  useEffect,
  useState,
} from 'react';

export interface IArticle {
  id: number;
  category: string;
  title: string;
  description: string;
  no_of_ratings: number;
  avg_rating: number;
}

export const TOKEN = "Token c4700a6e4a06bf26c8563b9b517c4aba84902379";

const App: React.FC = () => {

  const [articleRecord, setArticleRecord] = useState<Record<string, IArticle[]>>({}); // <Category, Article[]>

  useEffect(() => {
    fetch(" http://127.0.0.1:8000/api/articles", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token c4700a6e4a06bf26c8563b9b517c4aba84902379'   
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      const data:IArticle[] = resp
      setArticleRecord(data.reduce((rec, article)=>{  //reduce() is a function for object like map() is for array. 
        const category = article.category
        if(!(category in rec)){
          rec[article.category] = []
        }
        rec[category] = [...rec[category], article]
        return {...rec}
      }, {} as Record<string, IArticle[]>))
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Articles</h1>
      </header>
      <div className="articles">
        <div className="sidebar">
          <h2>Categories</h2>

          {Object.keys(articleRecord).map(cat=>(  //CategoryList
              // <p key={cat} onClick={ () => articleCatClicked(cat) }>
              <p key={cat}>
                {cat} 
              </p>
          ))}
        </div>
        <div className="main">
          <h2>Title</h2>
          <h2 className="details">Details</h2>
          <h2>Rate it</h2>
        </div>
      </div>
    </div>
  );
}

export default App;