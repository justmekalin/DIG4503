import React from 'react';
import YearSearch from './components/YearSearch';
import Welcome from './components/Title';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "table": []
    };

  }

  // Update the internal state.table
  // (This is called from YearSearch.)
  setResultsTable = (processed) => {
    this.setState({"table": processed});
  }

  // Render the results table
  createResultsTable() {

    return (
      <table>
        <tbody>
        {
          this.state.table.map((entry, index) => {
             return( 
              <tr key={index}>
                <td>{entry.title}</td>
                <td>{entry.year}</td>
              </tr>
             );
          })
        }
        </tbody>
      </table>
    );

  }

  render() {
    return (
      <div>
   <Welcome />
        <YearSearch callback={this.setResultsTable} />
        {this.createResultsTable()}
      </div>
    );
  }
  
}

export default App;