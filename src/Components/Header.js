import MacolmX from "../Images/malcolmX.png"
import Zapatistas from "../Images/zapatistas.png"
import Seeds from "../Images/seeds.png"
import noBorders from "../Images/noBorders.png"

const Header = () => {
    return(
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
                <div className="just-seeds-button"><a href="https://justseeds.org/" target="_blank"> View</a></div>
            </li>
        </ul>
    )
}

export default Header

