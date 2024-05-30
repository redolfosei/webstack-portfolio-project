import SearchBar from "../../components/searchBar/SearchBar";
import "./HomePage.scss"

import React from "react"

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Renting or Hiring should not be stressful. Find real homes to rent or Buy
            your dream house.
          </h1>

          <p>
            Cut or the stress of roaming and uneccessary agent fees. RSF Ghana
            is here to help you find your homePage without any stress and saving
            you from charges. You definately agree with us, that renting or
            buying shouldnt be tough in this century and age.
          </p>

          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>

            <div className="box">
              <h1>1</h1>
              <h2>Award Gains</h2>
            </div>

            <div className="box">
              <h1>100+</h1>
              <h2>Property Available</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" alt="backgroundImage" />
      </div>
    </div>
  )
}

export default HomePage
