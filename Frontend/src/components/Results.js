import React from 'react';
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch';

/*import DSBlogo from '../images/logo/DSB_logo.svg'
import NTSBlogo from '../images/logo/NTSB_logo.svg';*/

const onResultStats = (results, time) => (
  <div className="flex justify-end">
    {results} results found in {time}ms
  </div>
);


/* Slice data.content to only show first n characters: slice(0,n) */
const onData = (data) => (
  <div className="result-item" key={data.web_title}>

    <div className="flex justify-center align-center result-card-header">
      <img className="logo" src={require('../images/logo/'+`${data.organization}`+'_logo.svg')} alt="logo" width="60px" height="60px" />
      <a className="link" href={data.link} target="_blank" rel="noopener noreferrer">
        <div className="flex wrap">
          <div>{data.web_title}</div>
          <div><font color="f8a61e">{data.organization}</font></div>
        </div>
      </a>
    </div>

    <div className="m10-0"><b>Link</b> <a href={data.link} target="_blank" rel="noopener noreferrer">{data.link}</a></div>
    <div className="m10-0"><b>Contents</b> {data.content.slice(0, 600)}</div>
    <div className="m10-0"><b>Document title</b> {data.doc_title}</div>

    <div className="flex">
      <div><div className="btn card-btn"><i className="card-icon fas fa-calendar" />{data.date.slice(0, 10)}</div></div>
      <div><div className="btn card-btn"><i className="card-icon fas fa-edit" />{data.author}</div></div>
      <div><div className="btn card-btn"><i className="card-icon fas fa-plane" />{data.accident_date.slice(0,10)}</div></div>
    </div>

  </div>
);

const Results = () => (
  <div className="result-list">
    <SelectedFilters className="m1" />
    <ReactiveList
      componentId="results"
      dataField="web_title"
      onData={onData}
      onResultStats={onResultStats}
      react={{
        and: ['full_searchbar', 'filt_pub_date', 'filt_agency'],
      }}
      pagination={true}
      size={12}
      URLParams={true}
      innerClass={{
        list: 'result-list-container',
        pagination: 'result-list-pagination',
        resultsInfo: 'result-list-info'
      }}
      onNoResults="No results found ..."
      loader='Loading results ...'
      defaultQuery={dateQuery}
    />
  </div>
);

/* By default, the reactivelist shows all reports from the last year. TO BE DONE: sorting by date */
const dateQuery=function() {
  return {
    "range": {
      "date": {
        "gte": "now-1y",
        "lt": "now"
      }
    }
  }
}

export default Results;
