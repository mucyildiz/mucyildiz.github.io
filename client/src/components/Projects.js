import SectionHeader from './SectionHeader';
import './Projects.css';

function Projects() {
  return (
    <div id='projects-container'>
      <SectionHeader sectionName='Projects' />
      <div id='projects'>
        <div className='project'>
          <h2 className='project-name'>Create Spotify Playlists</h2>
          <div className='desc'>A Spotify Playlist Creator that takes in a mood
            as input and creates a playlist based on that mood
            curated to the user's individual music taste.
          </div>
        </div>
        <div className='project'>
          <h2 className='project-name'>Covid State Herd Immunity</h2>
          <div className='desc'>
            Web Application that I used to predict when each state would gain
            herd immunity against the Coronavirus. Data is viewable in both map 
            and sortable table form.
          </div>
        </div>
        <div className='project'>
          <h2 className='project-name'>German Enigma Machine</h2>
          <div className='desc'>
            Python implementation of the German Enigma Encryption Machine
            used in World War II and featured in the movie "The Imitation Game".
          </div>
        </div>
      <div className='tech'>
        <ul>
          <li>Express.js</li>
          <li>Passport.js</li>
          <li>Spotify API</li>
          <li>Spotify OAuth</li>
          <li>React.js</li>
          <li>Heroku</li>
        </ul>
      </div>
      <div className='tech'>
        <ul>
          <li>React.js</li>
          <li>reactsimplemaps</li>
          <li>NBC News Immunization Data API</li>
        </ul>
      </div>
      <div className='tech'>
        <ul>
          <li>Python</li>
          <li>Object Oriented Programming</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Projects;