//import React from "react"; // if you are using class instead of function

import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />//if you remove the title, it will show the default title
    </div>
  );
}

// class App extends React.Component { // if you are using class instead of function
//   render() {
//     return <h1>Hello World</h1>
//   }
// }

export default App;
