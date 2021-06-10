import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
// import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import "./app.scss"
import React, { useState, useEffect,useRef } from 'react';
import Menu from "./components/menu/Menu";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/PacmanLoader";
import { init } from 'ityped'


const override = css`
  background-color: #252525;
  display: flex;
  flex-direction: column;
  overflow: hidden;               

  height: 350px;
  width: 800px;
  overflow: hidden;
`;



function App() {
  // const [menuOpen, setMenuOpen] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const [menuOpen, setMenuOpen] = useState(false);

  const delay = 3;

  useEffect(
    () => {
      let timer1 = setTimeout(() => setLoading(false), delay * 1000);
      return () => {
        setLoading(false)
      };
    },
    []
  );

  const textRef = useRef();

  useEffect(() => {
      init(textRef.current, {
          showCursor: true,
          backDelay: 200,
          strings: ["Loading...."],
          typeSpeed:  50,

      })
  }, [])


  return (

    <div className="app">

      <div className="sweet-loading">.

        <ClipLoader color={color} loading={loading} css={override} size={150} />
        <div className="loading" ref={textRef}>   </div>

      </div>


      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
      
        <Intro />
        <About />
        {/* <Portfolio /> */}
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
