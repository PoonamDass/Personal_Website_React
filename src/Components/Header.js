import MacolmX from "../Images/malcolmX.png"
import Zapatistas from "../Images/zapatistas.png"
import Seeds from "../Images/seeds.png"
import noBorders from "../Images/noBorders.png"
import {useState} from "react"
const Header = () => {

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([
      {artist: "Josh MacPhee",image: MacolmX},
      {artist: "Lesly Yobany Mendoza", image: Zapatistas},
      {artist: "Dylan A.T. Miner", image: Seeds},
      {artist: "Jesus Barraza", image: noBorders}])

  const handleNext = () => {
      if (index + 1 === images.length){
          setIndex(0)
      } else {
          setIndex(index + 1)
      }
  }

  const handlePrevious = () => {
      if (index - 1 === -1) {
          setIndex(images.length - 1)
      } else {
          setIndex(index -1 )
      }
  }
     return(
        <>
        <ul className="header-images">
            <li >
                <img className="header-img" src={MacolmX} alt="Malcolm X quote"/>
                <p><i>Artist: Josh MacPhee</i></p>
            </li> 
            <li >
                <img className="header-img" src={Zapatistas} alt="Wolf"/>
                <p><i>Artist: Lesly Yobany Mendoza</i></p>

            </li>
            <li >
                <img className="header-img" src={Seeds} alt="They tried to bury us quote"/>
                <p><i>Artist: Dylan A.T. Miner</i></p>
            </li>
            <li >
                <img className="header-img" src={noBorders} alt="noBorders quote"/>
                <p><i>Artist: Jesus Barraza</i></p>
            </li>

            <li className="middle">
                <p className="text"> All artwork displayed is by Justseeds Artists' Cooperative, please click to view more 
                of their radical artwork</p>
                <div className="just-seeds-button"><a href="https://justseeds.org/" target="_blank" rel="noreferrer"> View</a></div>
            </li>
        </ul>

        <div className="mobile">
            <img src={images[index].image} alt="artwork" />
            <p>Artist: {images[index].artist}</p>
            <details>
                <summary>Details</summary>
                All artwork displayed is by Justseeds Artists' Cooperative, <a href="https://justseeds.org/" target="_blank" rel="noreferrer"> view</a> more 
                of their radical artwork
            </details>
         
            <button onClick={handlePrevious} class="btn btn-secondary"><span>&#8592;</span></button>
            <button onClick={handleNext} class="btn btn-secondary"><span>&#8594;</span></button>
        </div>

        </>

    )
}

export default Header

