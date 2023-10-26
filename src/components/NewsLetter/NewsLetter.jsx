import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
      <div className="news-letter">
          <h1> Get Exclusive Offers On Your Email</h1>
          <p>subscribe to our newsletter and stay updated</p>
          <div className="subscription">
              <input type="email" placeholder='Your Email address' />
              <button> Subscribe</button>
          </div>
      </div>
  );
}

export default NewsLetter