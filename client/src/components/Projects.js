import SectionHeader from './SectionHeader';
import './Projects.css';

function Projects() {
  return (
    <div id='projects-container'>
      <SectionHeader sectionName='Projects' />
      <div id='projects'>
        <div className='project'>
          <a href='http://createspotifyplaylists.herokuapp.com/' target="_blank" rel="noreferrer">
            <h2 className='project-name'>Create Spotify Playlists</h2>
          </a>
          <div className='desc'>A Spotify Playlist Creator that takes in a mood
            as input and creates a playlist based on that mood
            curated to the user's individual music taste.
          </div>
          <div className='tech'>
              <li>Express.js</li>
              <li>Passport.js</li>
              <li>Spotify API</li>
              <li>Spotify OAuth</li>
              <li>React.js</li>
              <li>Heroku</li>
              <li>Merriam Webster API</li>
          </div>
        </div>
        <div className='project'>
          <a href='https://mucyildiz.github.io/StateHerdImmunityProjections/' target="_blank" rel="noreferrer">
            <h2 className='project-name'>Covid State Herd Immunity</h2>
          </a>
          <div className='desc'>
            Web Application that I used to predict when each state would gain
            herd immunity against the Coronavirus. Data is viewable in both map 
            and sortable table form.
          </div>
          <div className='tech'>
              <li>React.js</li>
              <li>reactsimplemaps</li>
              <li>NBC News Immunization Data API</li>
          </div>
        </div>
        <div className='project'>
          <a href='https://github.com/mucyildiz/Vidmob-Calculator' target="_blank" rel="noreferrer">
            <h2 className='project-name'>Calculator</h2>
          </a>
          <div className='desc'>
            Calculator made for take home test for job interview. Fully functional for addition, subtraction, multiplication, division,
            and parentheses.
          </div>
          <div className='tech'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Jest for testing</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;