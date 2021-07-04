import PoonamImg from "../Images/Poonam.png"

const AboutMe = () => {
    return(
        <section className="homeSection">
            <div className="grid ">
                <div className= "row align-center">
                    <h2 className="col-md-4 align-self-center">Welcome</h2>
                </div>
                <div className="row">
                    <p className="col-md-4 align-self-center">My name is Poonam Dass and I am passionate about developing tools and programs for working class communities and ensuring data is accessible and user friendly to a wide and diverse net of audiences. </p>
                    <img class="Poonam-img col-md-4 align-self-center" src={PoonamImg} alt="Poonam Dass"/>
                </div>
                <div className="row">
                    <p className="col-md-4 align-self-center"> Interests include: Good eats, problem-solving, math, and soccer</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe