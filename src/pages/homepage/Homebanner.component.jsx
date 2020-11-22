import React, { Component } from 'react'

import './homepage.styles.scss'
import banner from '../../images/uc-shop/banner.jpg'
class Homebanner extends Component {
    render() {
        return (
            <header class="bg-image" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}>
                <div className="container-overlay">
                    <div class="container">
                        <h1>Gaming Store Nepal</h1>
                        <h2>Pubg UCs  |  Free Fire Diamonds   |  Gift Cards</h2>
                        <a href="#/" class="btn btn-transparent">Shop Now.</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Homebanner;
