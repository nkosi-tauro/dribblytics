import React from 'react'
import BackImage from '../assets/backImg.jpg'
import './landingStyles.css'
import { useSpring, animated } from 'react-spring'

function Landing() {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 500 })
    return (
        <div className="landing-Page">
            <div style={{"backgroundImage": `url(${BackImage})`,"height": "500px", "backgroundSize": "cover", "backgroundRepeat": "no-repeat"}}>
                <animated.h2 className="landh2" style={props}><span>Dribblytics:<span class='spacer'></span><br /><span class='spacer'></span>Basketball Analytics Made Simple</span></animated.h2>
            </div>
            <div>
                <footer class="text-center p-4 text-xl bold">DRIBBLYTICS🏀</footer>
            </div>
        </div>
    )
}

export default Landing
