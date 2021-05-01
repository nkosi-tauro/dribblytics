import React from 'react'
import BackImage from '../assets/backImg.jpg'

function Landing() {
    return (
        <div>
            <div className="landing Page" style={{"background-image": `url(${BackImage})`,"height": "500px", "background-size": "cover", "background-repeat": "no-repeat"}}>
                <h1>Land here</h1>
            </div>
            <div>
                <footer>Test</footer>
            </div>
        </div>
    )
}

export default Landing
