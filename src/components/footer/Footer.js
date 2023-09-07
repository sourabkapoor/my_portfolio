import React from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Footer.styles.scss"

export default function Footer() {

  return (
    <div className="footerMain">
      <div>{new Date().getFullYear()} © All Rights Reserved.</div>
      <span className="inline">Build with <FavoriteBorderIcon /> by Sourab</span>
      <div>Say Hello!</div>
    </div>
  );
}