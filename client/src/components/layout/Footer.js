import React from "react";
import HiddenLang from "../components/HiddenLang";
import '../App.css';

function Footer() {

  const footerStyle = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    color: "black",
    textAlign: "center"
  }

  const linkStyle = {
    marginLeft: "10px",
    color: "black",
    textDecoration: "none"
  }


  return (
  <>
  <HiddenLang />
  <footer style={footerStyle}>
    <a   
        href="https://github.com/Suji-GitH"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}>
        <GitHubIcon id="gitSocial" />
    </a>
    <a   
        href="https://www.linkedin.com/in/s-r-8550a01a5/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}>    
         <LinkedInIcon id="linkSocial" />
    </a>
    <a   
        href={require("../assets/Resume/Resume.pdf")}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}>    
        <PictureAsPdfIcon id="pdfResume"/>
    </a>

    <p>
      &copy; {new Date().getFullYear()} COPYRIGHT 
    </p>
  </footer>
  </>
  );
}

export default Footer;
