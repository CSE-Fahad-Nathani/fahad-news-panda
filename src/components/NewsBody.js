import React from 'react'
import './NewsBody.css';
import Card from './Card';

export default function NewsBody({itemsPerPage, articles, currentPage , setCurrentPage}) {

  const firstIndex = currentPage * itemsPerPage;
  const endIndex = firstIndex + itemsPerPage;

  // const currentPageData = Object.values(articles).slice(firstIndex, endIndex);
  const currentPageData = (articles).slice(firstIndex, endIndex);
  // const totalPages = Math.ceil(Object.values(articles).length/itemsPerPage)
  const totalPages = Math.ceil(articles.length / itemsPerPage);


  const NextBtn=()=>{
    if(currentPage<totalPages - 1){
      setCurrentPage(x => x+1)
      console.log(currentPage)
    }
  }
  const PrevBtn=()=>{
    if(currentPage > 0){
      setCurrentPage(x => x - 1)
    }
  }
  console.log(`Current Page: ${currentPage}`);
console.log(`First Index: ${firstIndex}, End Index: ${endIndex}`);
console.log(`Total Pages: ${totalPages}`);
console.log(`Articles Length: ${articles.length}`);

  return (
    <div className='NewsBody'>
        <div className="bodyHeading">
            <blockquote className="blockquote text-center">
                <h1 
                className="mb-0 m-2"
                style={{ontFamily: 'math',
                    fontWeight: 700,
                    letterSpacing: '12px',
                    wordSpacing: '12px'
                }}
                >NEWS PANDA</h1>
                <footer className="blockquote-footer ">Stay Informed, the<cite title="Source Title"> Panda Way.</cite></footer>
            </blockquote>
        </div>

        <div className="body1"> 
        {
        currentPageData.map((article, index)=>(
          <Card
            key = {index}
            title={article.title}
            description={article.description}
            url={article.url}
            imageUrl={article.urlToImage || "https://unsplash.it/600/400?random"}
          />
        ))}
        </div>

        <div className="bodyBtns">
            <button type="button" onClick={PrevBtn}
            className="btn btn-outline-warning px-4"
            // onClick={()=> setCurrentPage((x)=> Math.max(x-1, 1))}
            disabled={currentPage === 1}
            >Previous</button>
            <button type="button" onClick={NextBtn}
            className="btn btn-outline-dark px-4"
            // onClick={setCurrentPage((x)=> x + 1 )}
            >Next</button>
        </div>
      
    </div>
  )
}
