import React from "react";
import styles from './Playlist.module.css';
import Tracklist from "../Tracklist/Tracklist";
import Button from "../Button/Button";

const Playlist = () => {

    return (
        <div className={styles.playlist}>
            <input className={styles.playlistName} type="text" placeholder='Name Your Playlist...'/>
            <Tracklist />
            <div className={styles.playlistButton}>
                <Button text='Save To Spotify' variant='playlist' />
            </div>
        </div>
    );
};

export default Playlist;