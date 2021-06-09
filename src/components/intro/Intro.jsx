import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
export default function Intro() {


    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ["Developer.", "Designer."],

        })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assests/Man.png" alt="" />
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hi there, I'm</h2>
                    <h1> Fadi Habeeb</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                    <div className="iconWrapper">
                        <a href="https://www.linkedin.com/in/fadi-habeeb/" target="_blank" rel="noreferrer"> <LinkedInIcon className="icon" /></a>
                        <a href="https://github.com/fadihabeeb" target="_blank" rel="noreferrer"> <GitHubIcon className="icon" /></a>
                        <a href="https://www.facebook.com/fadi.habeib" target="_blank" rel="noreferrer"> <FacebookIcon className="icon" /></a>
                        <a href="https://www.instagram.com/fadihabeeb/" target="_blank" rel="noreferrer"> <InstagramIcon className="icon" /></a>

                        {/* 
                        <InstagramIcon className="icon" />
                        <LinkedInIcon className="icon" />
                        <GitHubIcon className="icon" /> */}

                    </div>
                </div>
                <div className="arrow">
                    <a href="#about">
                        <img src="assests/whiteArrow.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
