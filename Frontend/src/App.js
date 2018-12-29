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
								placeholder="Search reports ..."
								autosuggest={true}
								iconPosition="left"
								URLParams={true}
								highlight={true}
								/*customHighlight={(props) => ({
									highlight: {
										pre_tags: ['<mark>'],
										post_tags: ['</mark>'],
										fields: {
											"content": {},
											"link": {},
											"author": {},
										},
										fragment_size: 1000,
										number_of_fragments: 4,
									},
								})}*/
								queryFormat="or"
								fuzziness={"AUTO"}
								className="data-search-container results-container"
								innerClass={{
									input: 'search-input',
								}}
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
