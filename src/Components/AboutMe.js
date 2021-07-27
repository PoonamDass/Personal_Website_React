import PoonamImg from "../Images/Poonam.png"

const AboutMe = () => {
    return(
        <section className="homeSection">
            
                    
            <div className="child-container-1">
                <h2>Welcome</h2>
                <p >My name is Poonam Dass and I am passionate about developing tools and programs for working class communities and ensuring data is accessible and user friendly to a wide and diverse net of audiences. </p>
                <p > Interests include: Good eats, problem-solving, math, and soccer</p>
            </div>

            <div className="child-container">
                <img class="Poonam-img" src={PoonamImg} alt="Poonam Dass"/>
            </div>

            
        </section>
    )
}

export default AboutMe