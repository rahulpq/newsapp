import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country: '',
    pageSize: 30,
    category:'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,

  }
   capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props);
    console.log("hello i am a constructor");
    this.state={
      articles:[],
      loading:false,
      page:1,
    }
    document.title= `${this.capitalizeFirstLetter(this.props.category)} -News Monkey`
  }
  async updateNews(){
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbdd1c92200244b3aa74d74a32d07371&page=1&pageSize=${this.props.pageSize}`;
    console.log("cdm");
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    });

  }
  async componentDidMount(){
    // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbdd1c92200244b3aa74d74a32d07371&page=1&pageSize=${this.props.pageSize}`;
    // console.log("cdm");
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData= await data.json();
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // });
    this.updateNews();
  }
  handlePrevPage= async()=>{
    // console.log("previous clicked");
    // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbdd1c92200244b3aa74d74a32d07371&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // console.log("cdm");
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData= await data.json();
    // console.log(parsedData);
    // this.setState(
    //   {page:this.state.page-1,
    //   articles:parsedData.articles,
    //   loading:false
    // });
    this.setState({page:this.state.page-1})
    this.updateNews();
  }
  handleNextpage= async()=>{
    console.log("next clicked")
    if(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
  else
    {
            // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbdd1c92200244b3aa74d74a32d07371&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            // console.log("cdm");
            // this.setState({loading:true});
            // let data= await fetch(url);
            // let parsedData= await data.json();
            // console.log(parsedData);
            // this.setState(
            // {page:this.state.page + 1,
            // articles:parsedData.articles,
            // loading:false});
            this.setState({page:this.state.page+1})
            this.updateNews();
          }
  }
    render() {
     
    return (
      <div className="container my-3">
        <h1 className="text-center my-3"style={{padding:'10px',color: 'indianred'}}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spiner/>}
        <div className="row">
       {!this.state.loading && this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url} >
         <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publisher={element.source.name} author={element.author} date={element.publishedAt}/>
         </div>
       })}
        </div>
       <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-dark"onClick={this.handlePrevPage}> &larr; Previous</button>
          <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark"onClick={this.handleNextpage}> &rarr; Next</button>
        </div>
      </div>
    )
  }
}

export default News