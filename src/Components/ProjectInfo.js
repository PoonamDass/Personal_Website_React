import EmojiGif from "../Images/emoji.gif"
import TextBasedGif from "../Images/textbased.gif"
import "../Styles/Project.css"
const ProjectInfo = () => {
    return (
      
        <section>
        <div id="flex-container2">

            <img id="project-image1" src={TextBasedGif} alt="Text Based Adventure" />
            <div className="text-container">
                <h2>Text Based Adventure</h2>
                <p>Skills:JavaScript</p>
                <p>Inspired by my favorite childhood show "The Twilight Zone", this command line based game prompts users to make fairly simple decisions, but there is a caveat to each choice. Enter the "Twilight Zone" via the link below to test your luck!</p>
                <a class="project-links" href="https://github.com/PoonamDass/FSW-Text-Based-Adventure">Github Repo</a>
            </div>
        

            <img id="project-image2" src={EmojiGif} alt="Emoji Story Game" />
            <div className="text-container">
                <h2>Emoji Story Generator</h2>
                <p>Skills: JavaScript, CSS, HTML</p>
                <p>A user is able to generate random emojis and make meaning of them by writing a descriptive story. They are able to view past stories as well as the number of stories they've written.</p>
                <a class="project-links" href="https://github.com/PoonamDass/fsw-mid-module-two-practice-assessment">Github Repo</a>

            </div>

         </div>

        </section>
        
   
    )
}

export default ProjectInfo