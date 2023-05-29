import React,{useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News=(props)=>{

  const[articles,setArticle] = useState([]);
  const[loading,setLoading] = useState(false);
  const[page,setpage] = useState(1);
  const[totalResults,setTotalResults] = useState(0);
 

  const capitalizeFirstLowercaseRest = str => {
      return  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();  
  }
 
  const updateNews=async()=>{
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData); 
    setArticle(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
     props.setprogress(100);
  }

  const fetchData=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticle(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
 
  useEffect(()=>{
     document.title = `${capitalizeFirstLowercaseRest(props.category)} - NewsApp`;
    updateNews();
   // eslint-disable-next-line    
  },[])
    

    return (
       <>
         <h1 className="text-center mb-5" style={{marginTop:"100px"}}>NewsApp - Top <span style={{color:"brown"}}>{`${ capitalizeFirstLowercaseRest(props.category)}`}</span> Headlines</h1>
        {loading && <Spinner/>}
            

       <InfiniteScroll
           dataLength={articles.length}  
           next={fetchData}
           hasMore={articles.length!==totalResults}
           loader={<Spinner/>}>
         <div className="container">
              <div className="row">
                 {articles.map((element)=>{
        
                  return <div className="col-md-4" key={element.url}>
                      <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl= {element.urlToImage} newsUrl ={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
                 })}
               </div>
          </div> 
        </InfiniteScroll> 
             
        </>
    );
  
 



}
News.defaultProps={
  country: "in",
  pageSize : 6,
  category : "health"
}

News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category : PropTypes.string
}
export default News;
