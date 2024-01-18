import React from "react";
function Hello (){
  
    return(

<div id="hero" className="hero route bg-image object-cover" style={{backgroundImage: "url(assets/img/hero-bgggg.jpg)"}}>
    <div className="overlay-itro"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          <p className="display-6 color-d">Hello, world!</p>
          <h1 className="hero-title mb-4">I am Daniel HAGENIMANA</h1>
          <p className="hero-subtitle"><span className="typed" data-typed-items="Entreprenuer,Business Adviser,Project Manager,Business Developer"></span></p>
         <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> 
        </div>
      </div>
    </div>
</div>
    )

}export default Hello;