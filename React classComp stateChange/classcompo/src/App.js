import React from 'react';
import Message from './component/Message';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home'; 
import ListRendering from './pages/ListRendering';
import Text from './component/Text';
import Counter from './component/Counter';
import Destructuring from './component/Destructuring';
import Destructuring2 from './component/Destructuring2';
import FunctionClick from './component/FunctionClick';
import EventBinding from './component/EventBinding';
import ConditionalRen from './component/ConditionalRen';
import ChildComp from './component/ChildComp';
import childimg from './assets/cute-happy-smiling-child-isolated-white_1308-32243.avif';
import NameList from './component/NameList';
import ListMap from './component/ListMap';
import PureComp from './component/PureComp';
import ErrorBounddary from './component/ErrorBounddary';
import Hover from './component/Hover';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes */}
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Text />
              <Counter />
              <Destructuring name="Bruce Wayne" heroName="Batman" name2="Clark Kent" heroName2="Superman" />
              <Destructuring2 name="Peter Parker" heroName="Spiderman" />
              <Message />
              <FunctionClick />
              <EventBinding />
              <ConditionalRen />
              <ChildComp>
                <h5>Child image</h5>
                <img src={childimg} alt="child" width="100px" height="100px" />
              </ChildComp>
              <NameList />
              <ListMap />
              <PureComp />
              <ErrorBounddary heroname="Batman"/>
              <Hover></Hover>
              </React.Fragment>
          } />
          {/* New about route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<ListRendering />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
