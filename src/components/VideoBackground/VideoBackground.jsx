import React from 'react';
import "./VideoBackground.css";
import useMovieTrailer from '../../hooks/useMovieTrailer';
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
    useMovieTrailer(id);

    const trailerVideo = useSelector((store) => store.movies.movieTrailer);
    if (!trailerVideo) return null;

    return (
        <div className="video-background-container">
            <div className="video-wrapper">
                <iframe
                    className="trailer-video-iframe"
                    src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoBackground;
