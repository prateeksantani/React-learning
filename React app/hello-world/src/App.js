import './App.css';
import Greet from './components/Greet';
import Msg from './components/Message';
import Contact from './components/Contact'
import Welcome from './components/Welcome_Class';
import Email from './components/Not-jsx-javascript';
import Techjob from './components/FindJob';
import Skills from './components/Skills';
import Project from './components/Project'
import Tutor from './components/Tutor';
import Childrenprop from './components/Childrenprop';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
    <Greet/>
    <Email>
    </Email>
    <Msg name="Prateek" adrs ="Vegas Villa">
    </Msg>
    <Contact name="Prateek" Mobile = "8896577062"/>
    <Contact name="Lakshman Santani" Mobile = "+91735535990"><h1>Father</h1></Contact>
    <Welcome name =  "Prateek"/>
    <Techjob profile = "Frontend" salary = "12Lpa"></Techjob>
    <Skills framework = "Next.js" library="React.js"></Skills>
    <Tutor t1="Gulrej" subject="Networking"/>
    <Project p1={{name:"Bliss", type :"Gatsby"}}  
    days={{learn:"100"}} status="complete"/>
    <Childrenprop>
      <p>Leave the package outside</p>
      </Childrenprop>
      <Counter/>
    </div>

   
  );
}

export default App;
