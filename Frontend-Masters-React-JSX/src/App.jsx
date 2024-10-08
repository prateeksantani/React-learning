import React from 'react';
import ReactDOM from "react-dom/client";
import Pet from "./Pet";
import SearchParams from './SearchParams';
import Details from './Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions :  {
    queries : {
      staleTime : Infinity,
      cacheTime : Infinity,
    }
  }
})

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet,{name : "Luna", animal : "Dog", breed : "Doberman"}),
//     React.createElement(Pet, {name :"Judge", animal: "Dog", breed: "Rotweiller" }),
//     React.createElement(Pet ,{name : "Galaxy-Destroyer" , breed : "Pitbull"}),
//   ]);
// };

//rewrite this in jsx


const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<SearchParams />} />
        </Routes>

        {/* <Pet name="Luna" animal="Dog" breed="Doberman"/>
      <Pet name="Judge" animal="Dog" breed="Rotweiller"/>
      <Pet name="Galaxy-Destroyer" breed="Pitbull"/> */}
      </QueryClientProvider>
    </BrowserRouter>
  );

}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);
