import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

//region 전 소스
// const movieTitles=[
//   "Matrix",
//   "Old boy",
//   "Full metal jacket",
//   "Truman show"
// ];

// const movieImages=[
//   "https://images-na.ssl-images-amazon.com/images/I/91uXCp8oxaL._RI_SX200_.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
//   "https://ia.media-imdb.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
//   "http://imgmovie.naver.com/mdi/mi/0190/A9099-00.jpg"
// ];
//endregion

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()

  // Update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()
  //    shouldComponentUpdate()를 통해 old Prop와 new Prop를 비교하여 다르면 true하여 update 해야 한다고 판단.

  // state는 fn이 아닌 prop (Component class의 속성이지.)
  //    component안의 state가 변하면 render를 호출한다.


  state={}
  
  _renderMovies (){    
    const movies = this.state.movies.map((movie)=>{
      return <Movie 
        key={movie.id}
        title={movie.title} 
        poster={movie.large_cover_image} 
        genres = {movie.genres}
        synopsis={movie.synopsis}
        />
    });

    return movies;
  }

  render() {  
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>      
        {movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }

  _fetchMovies=async()=>{
    let responseJson=
      await fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count?sort_by=download_count")
      .then(response=>response.json())
      .catch((error)=>console.log(error));

    return responseJson.data.movies;
  }

  _setMovies=async ()=>{
    let result = await this._fetchMovies();
    //result = result.data.movies;
    console.log(result );

    this.setState({
      movies:result
    });
  }

  componentDidMount() {
    this._setMovies();
  }
}



export default App;
