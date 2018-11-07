import React from 'react';
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch';

import logo from '../DSB_logo.svg';

const onResultStats = (results, time) => (
  <div className="flex justify-end">
    {results} results found in {time}ms
  </div>
);

/*const onData = (data) => (
  <div className="result-item" key={data.attachment.title}>
    {data.attachment.title}
    {data.attachment.author}
    {data.filename}
  </div>
);
*/

/* To get logo or icon from results, use results.<fieldname> in <img ... > */
/* for the contents field, only show the first 1000 characters: slice(0,1000) */
const onData = (data) => (
	<div className="result-item" key={data.attachment.title}>
		<div className="flex justify-center align-center result-card-header">
			<img className="logo" src={logo} alt="logo" width="80" height="80" />
			<a className="link" href={data.filename} target="_blank" rel="noopener noreferrer">
				<div className="flex wrap">
					<div>{data.attachment.title}</div>
					<div><font color="f8a61e">{data.attachment.author}</font></div>
				</div>
			</a>
		</div>

		<div className="m10-0"><b>Filename</b> {data.filename}</div>
		
		<div className="m10-0"><b>Contents</b> {data.content.slice(0,1000)}</div>

		<div className="flex">
			<div><div className="btn card-btn"><i className="card-icon fas fa-star" />{data.attachment.date}</div></div>
			<div><div className="btn card-btn"><i className="card-icon fas fa-code-branch" />{data.attachment.author}</div></div>
		</div>
	</div>
);

const Results = () => (
  <div className="result-list">
    <SelectedFilters className="m1" />
    <ReactiveList
      componentId="results"
      dataField="attachment.title"
      onData={onData}
      onResultStats={onResultStats}
      react={{
        and: ['searchbar'],
      }}
      pagination
      innerClass={{
        list: 'result-list-container',
        pagination: 'result-list-pagination',
        resultsInfo: 'result-list-info',
        poweredBy: 'powered-by',
      }}
      size={10}
      URLParams
      onNoResults="No results found ..."
    />
  </div>
);
export default Results;
