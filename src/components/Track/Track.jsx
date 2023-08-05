import React from "react";
import styles from './Track.module.css';

const Track = ({title, artist, album}) => {

    return (
        <div className="track">
            <h3>{title}</h3>
            <p>{artist} | {album}</p>
            <button> + || - </button>
        </div>
    );
};

export default Track;