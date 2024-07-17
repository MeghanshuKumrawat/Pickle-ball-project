import React from 'react'
import Header from '../components/Header'

const Contact = () => {
  return (
    <div class="contact-container">
      <Header />

      <div class="about-content">
        <h2>Contact Us</h2>
      </div>
      <div class="container">
        <div class="contact-form">
          <input type="text" name="" id="" placeholder="Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="text" name="" id="" placeholder="Phone" />
          <input type="text" name="" id="" placeholder="Address" />
          <input type="text" name="" id="" placeholder="Subject" />
          <textarea placeholder="Type Your Message here" rows="3"></textarea>
        </div>
        <div class="my-5">
          <a href="#" class="btn-submit my-5">Submit</a>
        </div>
      </div>
    </div>
  )
}

export default Contact