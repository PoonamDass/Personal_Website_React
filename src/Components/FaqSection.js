import {useState} from "react"
import "../Styles/Faq.css"
const FaqSection = () => {
  const [reveal, setReveal] = useState(false)
  const [reveal2, setReveal2] = useState(false)
  const [mouseOver, setMouseOver] = useState(false)

  const handleClick = () => {
      setReveal(!reveal)
  }

  const handleClick2 = () => {
    setReveal2(!reveal2)
  }

  return (
    <section id="faqSection">
      <h1>Frequently Asked Questions</h1>
      <div class="row d-flex justify-content-center">
        <div class="col-sm-8">
          <div class="card " >
            <div class="card-body d-flex flex-column align-items-center card-bg">
              <h5 class="card-title">What is my favorite meme?</h5>
              <button onClick={handleClick} type="button" class="card-title btn btn-primary btn-small mb-3">
                {reveal ?  "Close" : "Reveal"}
              </button>
                {reveal ? <img className="w-50 mb-3"src="https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-videoSixteenByNineJumbo1600-v2.jpg" alt="meme" /> : ""}
            </div>  
          </div>
        </div>
        <div class="col-sm-8">
          <div class="card ">
            <div class="card-body card-bg">
              <h5 class="card-title">
                Any special talents?
              </h5>
                <button onMouseEnter={() => setMouseOver(true)} type="button" class="card-title btn btn-primary btn-small mb-3">
                  {mouseOver ?  "Revealed" : "Hover to Reveal"}
                </button>
                { mouseOver ?
              <p class="card-text" >
              I am an international super spy, just kidding. You can find me knitting baby yodas when I am not coding. I also like to write op-eds related to police accountability and immigrant rights. 
              Here is a piece I wrote for my school's newspaper on <a href="http://www.roosevelthouse.hunter.cuny.edu/?forum-post=policing-new-york-city-subway" target="_blank"  rel="noreferrer">policing the NYC subways</a>
              </p> : "" }
            </div>
          </div>
          <div class="col-sm-12">
          <div class="card last-card">
            <div class="card-body card-bg">
              <h5 class="card-title">What is my favorite quote?</h5>
              <button onClick={handleClick2} type="button" class="card-title btn btn-primary btn-small mb-3">
                {reveal2 ?  "Close" : "Reveal"}
              </button>

              {reveal2 ?
              <div>
                <p class="card-text">Ogres (aka people) are like onions, they have layers - Shrek the Ogre</p>
                  <img src="https://media4.giphy.com/media/pyQV6sy5qOALu/giphy.gif" alt="Shrek gif" /> 
              </div>
                : "" }

            </div>
          </div>
        </div>
        </div>
      </div>

      
    </section>
  );
};

export default FaqSection;
