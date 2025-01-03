import React from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.styles.scss"

export default function Footer() {

  return (
    <div className="footerMain">
      <div className="connect">
        {"Let’s kickstart something awesome!"}
        <a href="mailto:sourabkapoor@yahoo.com" target='_blank' rel="noreferrer"><EmailIcon /></a>
        <a href="https://www.linkedin.com/in/sourab-kapoor-b210ab1b2/" target='_blank' rel="noreferrer"><LinkedInIcon /></a>
      </div>

      <span className="inline">Build with <FavoriteBorderIcon /> by Sourab</span>
      <div>{new Date().getFullYear()} © All Rights Reserved.</div>
    </div>
  );
}