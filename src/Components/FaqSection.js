import {useState, useEffect} from "react"
import "../Styles/Faq.css"
const FaqSection = () => {
  const [reveal, setReveal] = useState(false)

  const handleClick = () => {
      setReveal(!reveal)
  }

  return (
    <section id="faqSection">
      <h1>Frequently Asked Questions</h1>
      <div class="row d-flex justify-content-center">
        <div class="col-sm-8">
          <div class="card">
            <div class="card-body d-flex flex-column align-items-center">
              <h5 class="card-title">What is my favorite meme?</h5>
              <button onClick={handleClick} type="button" class="card-title btn btn-primary btn-small mb-3">
                {reveal ?  "Close" : "Reveal"}
              </button>
                {reveal ? <img className="w-50 mb-3"src="https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-videoSixteenByNineJumbo1600-v2.jpg" alt="meme" /> : ""}
            </div>  
          </div>
        </div>
        <div class="col-sm-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Would I rather fight ten chicken-sized horses or 1 horse sized
                chicken?
              </h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">What is my favorite quote?</h5>
              <p class="card-text">People are like onions, they have layers - Shrek the Ogre</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      
    </section>
  );
};

export default FaqSection;
