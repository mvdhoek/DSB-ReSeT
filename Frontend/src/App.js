import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';

import './App.css';
import theme from './theme';
import Header from './components/Header'
import Results from './components/Results';

/* Define variables */
var ES_IP = "http://172.16.1.96:9200";
var ES_INDEX = 'safety_reports'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentTopics: [],
		};
	}

	/* setTopics will set topics passed to it -> pass to header */
	setTopics = (currentTopics) => {
		this.setState({
			currentTopics: currentTopics || [],
		});
	}

	/* toggleTopic will remove a topic from state if already present and add if not present */
	toggleTopic = (topic) => {
		const { currentTopics } = this.state;
		const nextState = currentTopics.includes(topic)
			? currentTopics.filter(item => item !== topic)
			: currentTopics.concat(topic);
		this.setState({
			currentTopics: nextState,
		});
	}

	/* to do: field score, fuzziness, datafield to be included in search, correct <mark> results, autosugges is slow for large fields */


	render() {
		return (
			<section className="container">
				<ReactiveBase
					app={ES_INDEX}
					url={ES_IP}
					theme={theme}
				>
					{/* DataSearch components*/}
					<div className="flex row-reverse app-container">
						<Header />
						<div className="results-container">
							<DataSearch
								componentId="full_searchbar"
								filterLabel="Search"
								/* Define the data fields that the search engine will look for in the Elasticsearch index*/
								dataField={['content', 'author', 'doc_title', 'web_title']}
								fieldWeights={[2, 1, 1, 2]}
								placeholder="Search reports ..."
								autosuggest={false}
								iconPosition="left"
								URLParams={true}
								highlight={true}
								customHighlight={(props) => ({
									highlight: {
										pre_tags: ['<mark>'],
										post_tags: ['</mark>'],
										fields: {
											"content": {},
											"web_title": {},
											"doc_title": {},
										},
										fragment_size: 300,
										number_of_fragments: 1,
									},
								})}
								queryFormat="or"
								fuzziness={1}
								debounce={1000}
								className="data-search-container results-container"
								innerClass={{
									input: 'search-input',
								}}
								showClear={true}
							/>

							<Results currentTopics={this.state.currentTopics} toggleTopic={this.toggleTopic} />
							
						</div>
					</div>


				</ReactiveBase>
			</section>
		);
	}
}

export default App;
