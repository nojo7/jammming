import React from "react";
import styles from './Playlist.module.css';
import Button from "../Button/Button";

const Playlist = () => {

    return (
        <div className="playlist">
            <input type="text" />
            <Button text='Save To Spotify' variant='secondary' />
        </div>
    );
};

export default Playlist;