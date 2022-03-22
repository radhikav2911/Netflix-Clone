
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants';
import './MovieRow.css'
import YouTube from 'react-youtube';
function MovieRow(props) {
    const [row, setRow] = useState([])
    const [urlId, seturlId] = useState("")
    useEffect(() => {
        axios.get(props.url).then((response) => {
            //console.log("rows", response.data.results[0]);
            setRow(response.data.results)
        })

    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            //https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const handleMovietrailer = (id) => {
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            //console.log(response, "trailer");
            if (response.data.genres.length !== 0) {
                seturlId(response.data.genres.id[0])
            }
        })
    }

    return (

        <div className="row">
            <h1 className="row-title">{props.title}</h1>
            <div className="movie_cards">
                {row.map((obj) =>
                    <div key={obj.id}>
                        <img onClick={() => { handleMovietrailer(obj.id) }} className={props.subField ? "subField" : "movie_card"} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                        <h4 className='movie-name'>{obj.title || obj.name}</h4>
                    </div>
                )}
            </div>
            {urlId && <YouTube videoId={urlId.id} opts={opts} />}
        </div>
    )
}

export default MovieRow
