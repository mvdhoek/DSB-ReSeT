import React from 'react';
import PropTypes from 'prop-types';
import {
    MultiDropdownList,
    SingleDropdownRange,
    RangeSlider,
    DateRange
} from '@appbaseio/reactivesearch';

const SearchFilters = ({ currentTopics, setTopics, visible }) => (
    <div className={`flex column filters-container ${!visible ? 'hidden' : ''}`}>
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
    </div>
);

SearchFilters.propTypes = {
    currentTopics: PropTypes.arrayOf(PropTypes.string),
    setTopics: PropTypes.func,
    visible: PropTypes.bool,
};

export default SearchFilters;