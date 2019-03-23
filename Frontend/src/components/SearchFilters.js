import React from 'react';
import PropTypes from 'prop-types';
import {
    MultiDropdownList,
    RangeSlider,
    DateRange,
    TagCloud
} from '@appbaseio/reactivesearch';

const SearchFilters = ({ currentTopics, setTopics, visible }) => (
    <div className={`flex column filters-container ${!visible ? 'hidden' : ''}`}>

        Search Filters
        <div className="child m10">

            <MultiDropdownList
                componentId="filt_agency"
                dataField="organization.keyword"
                title="Publication by authority"
                size={30}
                sortBy="asc"
                showCount={true}
                placeholder="Select authority"
                showFilter={true}
                filterLabel="Authority"
                URLParams={true}
                loader="Loading authorities..."
                queryFormat="or"
                showSearch={true}
            />

        </div>

        <div className="child m10">

            <DateRange
                componentId="filt_pub_date"
                dataField="date"
                title="Publication date range"
                placeholder={{
                    start: 'Start Date',
                    end: 'End Date'
                }}
                focused={false}
                numberOfMonths={4}
                queryFormat="date"
                autoFocusEnd={true}
                showFilter={true}
                filterLabel="Pub. date between"
                URLParams={true}
            />
        </div>

        <div className="child m10">

            <MultiDropdownList
                componentId="filt_aircraft"
                dataField="aircraft_type.keyword"
                title="Select aircraft type"
                size={30}
                sortBy="asc"
                showCount={true}
                placeholder="Select aircraft type"
                showFilter={true}
                filterLabel="Aircraft type"
                URLParams={true}
                loader="Loading aircraft..."
                queryFormat="or"
                showSearch={true}
            />

        </div>

        <div className="child m10">
            <RangeSlider
                componentId="filt_contlen"
                dataField="content_length"
                title="Content length"
                range={{
                    "start": 0,
                    "end": 1200000
                }}
                rangeLabels={{
                    "start": "0",
                    "end": "1,200,000"
                }}
                showFilter={true}
                stepValue={10000}
                showHistogram={true}
                interval={50000}
                URLParams={false}
                filterLabel="Content length"
            />
        </div>
        
        <div className="child m10">
            <TagCloud
                componentId="filt_tags"
                dataField="aircraft_type.keyword"
                title="Popular tags"
                size={120}
                showCount={true}
                multiSelect={true}
                queryFormat="and"
                showFilter={true}
                filterLabel="Tags"
                URLParams={false}
                loader="Loading ..."
            />
        </div>

    </div>
);

SearchFilters.propTypes = {
    currentTopics: PropTypes.arrayOf(PropTypes.string),
    setTopics: PropTypes.func,
    visible: PropTypes.bool,
};

export default SearchFilters;
