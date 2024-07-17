import React from 'react'
import Header from '../components/Header'
import './about.css'


const About = () => {
  return (
    <div class="about-container">
        <Header />

        <div class="about-content">
            <h2>About Carmen Sanz</h2>
        </div>
        <div class="container">

            <div class="row">
                <div class="col-6">
                    <p>Pickleball changed my life and I believe it can also change yours. My purpose is to grow the sport I love and bring it to as many people as possible. 
                    </p>
                </div>
                <div class="col-6">
                    <img src="assets/about1.png" alt="" srcset="" />
                </div>
                <div class="col-6">
                    <img src="assets/about2.png" alt="" srcset="" />
                    
                </div>
                <div class="col-6">
                    <p>Every person deserves to experience all that Pickleball has in store for them. Come and meet me at the court. I want to leave a mark on you that hooks you up to a powerful source of happiness.
                    </p>
                </div>
            </div>
            <h3 class="text-center">Are you ready to experience the pickelball revolution?</h3>
            <a href="#" class="btn-primary btn">Join Now !!</a>
        </div>
    </div>
  )
}

export default About