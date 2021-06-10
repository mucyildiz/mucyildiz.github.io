import SectionHeader from './SectionHeader';
import './Education.css';

function Education() {
  return (
    <div id='education-container'>
      <SectionHeader sectionName='Education' />
      <div id='education'>
        <div id='degree'>
          <div id='school-name'>
            <div id='umass'>University of Massachusetts Amherst</div>
            <div>September 2017 - May 2021</div>
          </div>
          <div>Bachelors of Science in Mathematics</div>
          <div>Concentrations in Computing and Data Science</div>
          <div>Major GPA: 3.6</div>
        </div>
      </div>
      <div id='courses'>
          <h2>Relevant Coursework</h2>
          <div id='classes'>
            <ul>
              <li>Analysis of Algorithms</li>
              <li>Data Structures</li>
              <li>Discrete Structures</li>
            </ul>
            <ul>
              <li>Databases (SQL)</li>
              <li>Python Data Analysis</li>
              <li>Regression Analysis</li>
            </ul>
            <ul>
              <li>Combinatorics</li>
              <li>Advanced Calculus</li>
              <li>Applied Linear Algebra</li>
            </ul>
            <ul>
              <li>Scientific Computing</li>
              <li>Statistics</li>
              <li>Differential Equations</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Education;