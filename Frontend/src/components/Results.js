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
      <img className="logo" src={require(`../images/logo/${data.organization}_logo.svg`)} alt="logo" width="60px" height="60px" />
      <a className="link" href={data.link} target="_blank" rel="noopener noreferrer">
        <div className="flex wrap">
        <div dangerouslySetInnerHTML={{ __html: data.web_title }} />
        <div><font color="f8a61e">{data.organization}</font></div>
        </div>
      </a>
    </div>

    <div className="m10-0"><b>Link</b> <a href={data.link} target="_blank" rel="noopener noreferrer">{data.link}</a></div>
    <div className="m10-0" ><b>Contents</b><div dangerouslySetInnerHTML={{ __html: data.content.slice(0, 600) }} /></div>
    <div className="m10-0"><b>Document title</b> <div dangerouslySetInnerHTML={{ __html: data.doc_title }} /></div>
    <div className="m10-0"><b>Relevance</b> {data._score}</div>

    <div className="flex justify-center align-center">
      <div><div className="btn card-btn"><i className="card-icon fas fa-book" />{data.date.slice(0, 10)}</div></div>
      <div><div className="btn card-btn"><i className="card-icon fas fa-plane-arrival" />{data.accident_date.slice(0, 10)}</div></div>
      <div><div className="btn card-btn"><i className="card-icon fas fa-user-edit" />{data.author}</div></div>
      <div><div className="btn card-btn"><i className="card-icon fas fa-plane" />{data.aircraft_type}</div></div>
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
        and: ['full_searchbar', 'filt_pub_date', 'filt_agency', 'filt_aircraft', 'filt_contlen', 'filt_tags'],
      }}
      pagination={false}
      size={12}
      URLParams={true}
      innerClass={{
        list: 'result-list-container',
        pagination: 'result-list-pagination',
        resultsInfo: 'result-list-info'
      }}
      onNoResults="No results found ..."
      loader='Loading results ...'
      sortOptions={[
        {
          label: 'Best Match',
          dataField: '_score',
          sortBy: 'desc',
        },
        {
          label: 'Agency (A to Z)',
          dataField: 'organization.keyword',
          sortBy: 'asc',
        },
        {
          label: 'Aircraft type',
          dataField: 'aircraft_type.keyword',
          sortBy: 'asc',
        },
        {
          label: 'Publication data',
          dataField: 'date',
          sortBy: 'desc',
        },
        {
          label: 'Accident data',
          dataField: 'accident_date',
          sortBy: 'desc',
        },
      ]}
    />
  </div>
);

export default Results;
