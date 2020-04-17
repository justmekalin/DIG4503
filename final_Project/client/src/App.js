import React from 'react';
import './App.css'
import Welcome from './components/Title';
import ResultTable from './components/ResultTable';
import Banner from './components/Banner';


class App extends React.Component {


  render() {
    return (
      <div>
        <Banner/>
         <Welcome />
        <ResultTable />
        
      </div>
    );
  }
  
}

export default App;