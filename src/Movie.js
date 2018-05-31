import React/*, {Component}*/ from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';


//     render(){
//         //console.log(this.props.title);

//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <MoviePoster poster={this.props.poster} />
//             </div>
//         );

//     }
// }

// class MoviePoster extends Component{

//     static propTypes={
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         return(
//             <img src={this.props.poster} alt="영화 포스터"/>
//         );

//     }

// }

function Movie({title, poster,genres,synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
               <MoviePoster poster={poster} /> <br/>
            </div>

            <div className="Movie__Column">
                <h1>{title}</h1>

                <div className="Movie__Geners">
                    {genres.map((genre, index)=><MovieGenre genre={genre} key={index}/>)} <br/>
                </div>
                <p className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    );
}

Movie.propTypes={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
}


function MoviePoster({poster}){
    return(
        <img className="Movie__Poster" src={poster} alt="영화 포스터" />
    );
}

MoviePoster.propTypes={
    poster:PropTypes.string.isRequired
}

function MovieGenre({genre})
{
    return(
        <span className="Movie__Gener" >{genre}</span>
    );
}

MovieGenre.propTypes={
    genre:PropTypes.string.isRequired
}

export default Movie;

