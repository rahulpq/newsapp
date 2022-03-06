import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title,description,imageUrl,newsUrl,author,date,publisher}=this.props;
    return (
      <div>
        <div className="card">
        <img src={!imageUrl?"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/2/2022_2$largeimg_1145397006.JPG":imageUrl}className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}   <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{zIndex:1,left:'90%'}}> {publisher}</span>
        </h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted"> {!author?"Anonymous":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="noreferrer" className="btn btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
