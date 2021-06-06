import PageHeader from './PageHeader'
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import './App.css';

function App() {
  return (
    <div id='app-container'>
      <PageHeader />
      <div id='content'>
        <Introduction />
        <AboutMe />
      </div>
    </div>
  )
}

export default App;