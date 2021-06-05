import PageHeader from './PageHeader'
import Introduction from './Introduction';
import './App.css';

function App() {
  return (
    <div id='app-container'>
      <PageHeader />
      <div id='content'>
        <Introduction />
      </div>
    </div>
  )
}

export default App;