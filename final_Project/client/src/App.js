import React from 'react';

import Welcome from './components/Title';
import ResultTable from './components/ResultTable';


class App extends React.Component {


  render() {
    return (
      <div>
   <Welcome />
   <ResultTable />
        
      </div>
    );
  }
  
}

export default App;