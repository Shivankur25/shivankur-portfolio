import React, {  useState   } from "react"
import { Link } from 'react-router-dom'
import Loader from "react-loaders";
import LogoS from '../../assests/images/logo-s.png'
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Logo from './Logo'


const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['h', 'i', 'v', 'a', 'n', 'k', 'u', 'r',',']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
      ]
      
   
    return (
        
        <>
        <div className="containeer home-page">
            <div className="text-zone">
                <h1><span className={letterClass}>H</span>
                    <span className={`${letterClass}  _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoS} alt="Devloper" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray} idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray} idx={24}
                    />

                </h1>
                <h2>Frontend Developer || JAVA Coder  || React.js  </h2>
                <Link to="/contact" className="flat-button">Contact Me </Link>
            </div>
            <Logo/>
        </div>

        <Loader type="pacman"/>
        </>
    )
}

export default Home;
