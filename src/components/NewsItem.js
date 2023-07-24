import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
     return (
      <div className="my-3">
       <div className="card" >
  <img src={!imageUrl?"https://dims.apnews.com/dims4/default/2672d95/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb3%2F1a%2F86d11530048f279c3d3816f561e7%2F797c4dec86e34be084fd3396ffa641c9":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>   
        </div>
    )
  }
}
 
export default NewsItem