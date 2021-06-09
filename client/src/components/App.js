import PageHeader from './PageHeader'
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import './App.css';

function App() {
  return (
    <div id='app-container'>
      <PageHeader />
      <div id='content'>
        <Introduction />
        <div id='main-content'>
          <AboutMe />
          <Projects />
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default App;