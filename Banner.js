import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants';
import './Banner.css';


function Banner() {
    const [movie, setMovie] = useState()
    const [loader, setloader] = useState(false)
    useEffect(() => {
        setloader(true)
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {


            setMovie(response.data.results[Math.floor(Math.random() * 20)])
            setloader(false)

            // console.log("banner", response.data.results);

        })

    }, [])
    return (

        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title || movie.name : ""}</h1>

                <div className="buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description" >{movie ? movie.overview : ""}</h1>

            </div>
            <div className="fade_end"></div>


        </div>
    )
}

export default Banner
