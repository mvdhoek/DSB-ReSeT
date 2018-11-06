import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';

import logo from './DSB_logo.svg';
import './App.css';
import theme from './theme';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="ovvdocumenten"
	  url="http://172.16.1.96:9200"
          theme={theme}
        >
          <nav className="navbar">
            <div className="title">Safety <font color="4a97b5">Re</font>commendations <font color="4a97b5">Se</font>arch <font color="4a97b5">T</font>ool - <font color="4a97b5">ReSeT</font></div>
          </nav>

	// Adding the DataSearch here
	  <div className="flex row-reverse app-container">
	    <div className="results-container">
	      <DataSearch
	          componentId="searchbar"
		  filterLabel="Search"
		  dataField={['attachment.author', 'attachment.title', 'attachment.keywords', 'filename']}
		  placeholder="Search recommendations ..."
		  autosuggest={false}
		  iconPosition="left"
		  URLParams
		  className="data-search-container results-container"
		  innerClass={{
		      input: 'search-input',
		  }}
	      />
	      <Results />
	    </div>
	  </div>

        </ReactiveBase>
      </section>
    );
  }
}
export default App;
