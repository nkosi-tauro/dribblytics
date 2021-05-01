import React from 'react'
import BackImage from '../assets/backImg.jpg'
import './landingStyles.css'

function Landing() {
    return (
        <div className="landing-Page">
            <div style={{"background-image": `url(${BackImage})`,"height": "500px", "background-size": "cover", "background-repeat": "no-repeat"}}>
                <h2 className="landh2"><span>Dribblytics:<span class='spacer'></span><br /><span class='spacer'></span>Basketball Analytics Made Simple</span></h2>
            </div>
            <div>
                <footer>Test</footer>
            </div>
        </div>
    )
}

export default Landing
