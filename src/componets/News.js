import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'



function News({ category, title,setProgress,API_KEY}) {
    const [item, setItem] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        let url = `
    https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}&page=${page}`;
        // let Data = await fetch(url);
        // let NewsData = await Data.json().catch((err)=>console.log('it is falidation'));
        // console.log(NewsData);
        // this.setState({ News: NewsData.results ,status: NewsData.status});

        fetch(url)
            .then((Data) => {
                setProgress(10)
                return Data.json();
            })
            .then((data) => {
                setProgress(50);
                return setItem(
                    data.articles
                    );

                },
                )
                .catch((err) => {
                    console.log("sorry failed to fetch data");
                });
                
                
            }, [page, category,setProgress,API_KEY])
           setTimeout(() => {
            setProgress(100);
           }, 1000.5);

    const nextPage = async () => {
        setPage(page + 1);
        let url = `
        https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}&page=${page}`;
        let Data = await fetch(url);
        let data = await Data.json();
        
        setItem(data.articles)
    }
    const previousPage = async () => {
        setPage(page - 1);
        let url = `
        https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}&page=${page}`;
        let Data = await fetch(url);
        let data = await Data.json();
        setItem(data.articles)
    }

    document.title =  title;    
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row mx-auto">
                    <h2 className="text-white text-center">Top news</h2>
                    {item && item.map((items) => {
                        return (
                            <div className="col-md-3  mx-5" key={items.url}>
                                <NewsItem urlToImage={items.urlToImage ? items.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0gxr62hAYQXkN48CYpPUBLKTghv-CLMI0Q&usqp=CAU'} title={items.title} description={items.description} url={items.url} date={items.publishedAt} author={items.author ? items.author : 'not found'} source={items.source.name} />
                            </div>
                        )
                    })}
                </div>
                <div className=" d-flex gap-2 align-items-center justify-content-center">
                    <button className="btn btn-primary" type="button" disabled={page === 1} onClick={previousPage}>Previous</button>
                    <button className="btn btn-primary" type="button" onClick={nextPage} disabled={item && item.length <= 19}>Next</button>
                </div>
            </div>
        </>
    )
}

export default News
