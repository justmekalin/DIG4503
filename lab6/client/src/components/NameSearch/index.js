import React from 'react';

class NameSearch extends React.Component {
     readName(event) {
        event.preventDefault();

        let element = document.querySelector('#name');
//get information from /name
        fetch('/name/' + element.value)
          .then(res => {
            return res.json();
          })
          .then(processed => {
            let reporting = document.querySelector('#reportingArea');

            if (processed.error) {
              reporting.innerHTML = processed.error;
            } else {
              reporting.innerHTML = processed.name;
            }
          });

        element.value = '';
      }

    render () {
        return (
            <div>
                <NameSearch />
                <h3>Name:</h3>
            <form onSubmit={this.readName}>
            <input id="name" type="text" />
            <button>Submit</button>
            </form>
              </div>
        );
    }
}

export default NameSearch;