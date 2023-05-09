import React from 'react';
import "./Footer.css";
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import RepeatIcon from '@mui/icons-material/Repeat';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import TuneIcon from '@mui/icons-material/Tune';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>My fav song</h4>
          <p>Atharva</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid4x4Icon container spacing={2}>
          <Grid4x4Icon item>
            <PlaylistPlayIcon />
          </Grid4x4Icon>
          <Grid4x4Icon item>
            <VolumeDownIcon />
          </Grid4x4Icon>
          <Grid4x4Icon item xs>
            <TuneIcon />
          </Grid4x4Icon>
        </Grid4x4Icon>
      </div>
    </div>
  );
}

export default Footer;