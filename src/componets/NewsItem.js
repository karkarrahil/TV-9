import React from 'react'

const NewsItem = ({ source, urlToImage, title, description, date, author, url }) => {
    let cardBody = {
        height: "200px",
    };
    return (
        <div>
            <>
                <div
                    className="card my-3 mx-2  h-75 shadow-sm border-2 border-warning"
                    style={{ width: "18rem" }}
                >
                    <img
                        src={urlToImage}
                        style={{ height: "180px" }}
                        className="card-img-top"
                        alt="..."
                    />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

                        {source}
                    </span>
                    <div className="card-body p-2" style={cardBody}>
                        <h5 className="card-title" style={{ fontSize: "18px" }}>
                            {title}
                        </h5>
                        <hr />
                        <p className="card-text">{description}</p>
                        <p>This results was publish at {new Date(date).toGMTString()}</p>
                        <h6 className=" text-muted">
                            {/* props.date.slice(0, 10) + props.date.slice(20) */}
                            DATE:{date.slice(0, 10) + date.slice(20)}
                        </h6>
                        <h5>Author:{author}</h5>
                        <a
                            href={url}
                            className="btn btn-primary"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            Read more
                        </a>
                    </div>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {source}
           
                    </span>
                </div>
            </>
        </div>
    )
}

export default NewsItem
