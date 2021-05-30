import "./intro.scss"
import { init } from 'ityped'
import {useEffect, useRef} from "react"
export default function Intro() {


    const textRef = useRef();

    useEffect(() =>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ["Developer", "Designer"],
            
        })
    },[])

    return (
        <div className="intro" id="intro">
        <div className="left">
        <dev className="imgContainer">
            <img src="assests/Man.png" alt=""/>
        </dev>

        </div>
        <div className="right">
        <div className="wrapper">
            <h2> Hi there, I'm</h2>
            <h1> Fadi Habeeb</h1>
            <h3>Software <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
            <img src="assests/down.png" alt=""/>
        </a>
        </div>
        </div>
    )
}
