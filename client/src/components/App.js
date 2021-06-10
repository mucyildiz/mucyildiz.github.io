import PageHeader from './PageHeader'
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Hello! Welcome to my portfolio :)');
    console.log("I hope it's clear I spent a lot of time on it.");
    console.log("It was a lot of fun to make and I hope you enjoy it.");
    console.log("I am currently looking for work so if you are looking to hire an entry level developer who loves to code, feel free to contact me!");
    console.log("Best, Mucahit Yildiz");
  }, [])
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
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App;