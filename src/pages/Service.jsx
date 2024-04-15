import React from 'react'
import img1 from "../../src/img/Four Seasons, Westlake Village Indian Wedding _ Payal & Harish.jpeg"
import img2 from "../../src/img/Carousel  Birthday Party Ideas _ Photo 26 of 26.jpeg"
import img3 from "../../src/img/Four Seasons, Westlake Village Indian Wedding _ Payal & Harish.jpeg"
import img4 from "../../src/img/Unique 13th Birthday Party Ideas Your Just-Turned Teenager Will Love.jpeg"
import './App.css'
import { useNavigate } from 'react-router-dom'
export const Service = () => {
  const navigate = useNavigate();
 function WeddingformRedirect(){
navigate('/weddingform')
 }
 function bachlorformRedirect(){
navigate("/bachlorform")
 }
 function birthdayformRedirect(){
navigate("/birthdayform")
 }
 function youcostumRedirect(){
navigate("/youcostum")
 }


  return (
<>
<div className ="h-screen bg-pink-200">
      <h1 className="heading">Services </h1>
      <button className="more-details-btn"><a href="detials.html">More Details</a></button>
      <div className="container">
        <div className="card__container">
          <article className="card__article">
            <img src={img1} alt="" />
            <div className="card__data">
              <span className="card__description">Love is just a word until someone comes along and gives it meaning</span>
              <h2 className="card__title">Wedding And Engagement</h2>
              <button className="card__button" onClick={()=>{WeddingformRedirect()}}>Book Now</button>
            </div>
          </article>

          <article className="card__article">
          <img src={img2} alt="" />

            <div className="card__data">
              <span className="card__description">Wishing you the biggest slice of happy today</span>
              <h2 className="card__title">Birthday and Anniversary</h2>
              <button className="card__button" onClick={()=>{birthdayformRedirect()}}>Book Now</button>
            </div>
          </article>

          <article className="card__article">
          <img src={img3} alt="" />
            <div className="card__data">
              <span className="card__description">Raising a glass to our favorite couple.</span>
              <h2 className="card__title">Bachelorette</h2>
              <button className="card__button" onClick={()=>{bachlorformRedirect()}}>Book Now</button>
            </div>
          </article>
          <article className="card__article">
          <img src={img4} alt="" />
            <div className="card__data">
              <span className="card__description">Great minds discuss ideas; average minds discuss events; small minds discuss people.</span>
              <h2 className="card__title">Costomised event</h2>
              <button className="card__button" onClick={()=>{youcostumRedirect()}}>Book Now</button>
            </div>
          </article>
        </div>
      </div>
      </div>

</>
  )
}
