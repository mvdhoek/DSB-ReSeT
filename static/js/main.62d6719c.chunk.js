(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},175:function(e,t,a){var r={"./AAIB UK_logo.svg":176,"./ATSB_logo.svg":177,"./BFU_logo.svg":178,"./DSB_logo.svg":64,"./JTSB_logo.svg":179,"./NTSB_logo.svg":180};function n(e){var t=l(e);return a(t)}function l(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=l,e.exports=n,n.id=175},176:function(e,t,a){e.exports=a.p+"static/media/AAIB UK_logo.cd104377.svg"},177:function(e,t,a){e.exports=a.p+"static/media/ATSB_logo.be88b965.svg"},178:function(e,t,a){e.exports=a.p+"static/media/BFU_logo.974c3c51.svg"},179:function(e,t,a){e.exports=a.p+"static/media/JTSB_logo.45ca97cf.svg"},180:function(e,t,a){e.exports=a.p+"static/media/NTSB_logo.658c95be.svg"},181:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(66),c=a.n(l),i=(a(99),a(23)),s=a(24),o=a(27),m=a(25),d=a(28),f=a(7),u=(a(100),"https://fd1562cdd62049108cedb5398847a332.eu-central-1.aws.cloud.es.io:9243"),g="safety_reports",b={typography:{fontFamily:"Raleway, Helvetica, sans-serif"},colors:{primaryColor:"#4a97b5",titleColor:"white"},secondaryColor:"#f8a61e"},h=function(e){e.currentTopics,e.setTopics;var t=e.visible;return n.a.createElement("div",{className:"flex column filters-container ".concat(t?"":"hidden")},"Search Filters",n.a.createElement("div",{className:"child m10"},n.a.createElement(f.c,{componentId:"filt_agency",dataField:"organization.keyword",title:"Publication by authority",size:30,sortBy:"asc",showCount:!0,placeholder:"Select authority",showFilter:!0,filterLabel:"Authority",URLParams:!0,loader:"Loading authorities...",queryFormat:"or",showSearch:!0})),n.a.createElement("div",{className:"child m10"},n.a.createElement(f.b,{componentId:"filt_pub_date",dataField:"date",title:"Publication date range",placeholder:{start:"Start Date",end:"End Date"},focused:!1,numberOfMonths:4,queryFormat:"date",autoFocusEnd:!0,showFilter:!0,filterLabel:"Pub. date between",URLParams:!0,react:{and:["full_searchbar","filt_contlen","filt_aircraft","filt_tags","filt_agency"]}})),n.a.createElement("div",{className:"child m10"},n.a.createElement(f.c,{componentId:"filt_aircraft",dataField:"aircraft_type.keyword",title:"Select aircraft type",size:30,sortBy:"asc",showCount:!0,placeholder:"Select aircraft type",showFilter:!0,filterLabel:"Aircraft type",URLParams:!0,loader:"Loading aircraft...",queryFormat:"or",showSearch:!0,react:{and:["full_searchbar","filt_contlen","filt_tags","filt_pub_date","filt_agency"]}})),n.a.createElement("div",{className:"child m10"},n.a.createElement(f.d,{componentId:"filt_contlen",dataField:"content_length",title:"Content length",range:{start:0,end:12e5},rangeLabels:{start:"0",end:"1,200,000"},showFilter:!0,stepValue:1e4,showHistogram:!0,interval:5e4,URLParams:!1,filterLabel:"Content length",tooltipTrigger:"hover",react:{and:["full_searchbar","filt_tags","filt_aircraft","filt_pub_date","filt_agency"]}})),n.a.createElement("div",{className:"child m10"},n.a.createElement(f.h,{componentId:"filt_tags",dataField:"aircraft_type.keyword",title:"Popular tags",size:50,showCount:!0,multiSelect:!0,queryFormat:"or",showFilter:!0,filterLabel:"Tags",URLParams:!1,sortBy:"count",loader:"Loading ...",react:{and:["full_searchbar","filt_contlen","filt_aircraft","filt_pub_date","filt_agency"]}})))},p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).toggleVisibility=function(){var e=!a.state.visible;a.setState({visible:e})},a.state={visible:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar ".concat(this.state.visible?"active":"")},n.a.createElement("div",{className:"title-icon"},n.a.createElement("a",{className:"title-icon",href:"./"},n.a.createElement("i",{className:"fa fa-search"}))," ",n.a.createElement("a",{className:"title-icon",href:"./"},n.a.createElement("i",{className:"fa fa-plane"}))),n.a.createElement("br",null),n.a.createElement("div",{className:"title"},"Safety ",n.a.createElement("font",{color:"4a97b5"},"Re"),"port ",n.a.createElement("font",{color:"4a97b5"},"Se"),"arch ",n.a.createElement("font",{color:"4a97b5"},"T"),"ool"),n.a.createElement("br",null),n.a.createElement("div",{className:"title"},n.a.createElement("font",{color:"4a97b5",size:"8"},"ReSeT")),n.a.createElement("br",null),n.a.createElement("div",{className:"btn toggle-btn",onClick:this.toggleVisibility},"Toggle Filters"),n.a.createElement(h,Object.assign({},this.props,{visible:this.state.visible})),n.a.createElement("div",{className:"btm-text"},n.a.createElement("a",{className:"btm-links",href:"https://www.onderzoeksraad.nl",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"logo",src:a(64),alt:"logo",width:"20px",height:"20px"}))),n.a.createElement("br",null),n.a.createElement("div",{className:"btm-text"},"\xa9 Copyright 2019 Onderzoeksraad voor Veiligheid. Some rights reserved. ",n.a.createElement("i",{className:"fab fa-creative-commons"}),n.a.createElement("i",{className:"fab fa-creative-commons-by"}),n.a.createElement("i",{className:"fab fa-creative-commons-nc-eu"}),n.a.createElement("i",{className:"fab fa-creative-commons-sa"})),n.a.createElement("br",null),n.a.createElement("div",{className:"btm-links"},n.a.createElement("a",{className:"btm-links",href:"https://twitter.com/onderzoeksraad",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-twitter"}))),n.a.createElement("div",{className:"btm-links"},n.a.createElement("a",{className:"btm-links",href:"https://www.youtube.com/channel/UC8YTCQ5-kR3aqaUwyUk1Sig",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-youtube"}))),n.a.createElement("div",{className:"btm-links"},n.a.createElement("a",{className:"btm-links",href:"https://www.linkedin.com/company/onderzoeksraad-voor-veiligheid/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-linkedin"}))))}}]),t}(r.Component),_=function(e,t){return n.a.createElement("div",{className:"flex justify-end"},e," results found in ",t,"ms")};var E=function(e){return n.a.createElement("div",{className:"result-item",key:e._id},n.a.createElement("div",{className:"flex justify-center align-center result-card-header"},n.a.createElement("img",{className:"logo",src:a(175)("./".concat(e.organization,"_logo.svg")),alt:"logo",width:"60px",height:"60px"}),n.a.createElement("a",{className:"link",href:e.link,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"flex wrap"},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.web_title}}),n.a.createElement("div",null,n.a.createElement("font",{color:"f8a61e"},e.organization))))),n.a.createElement("div",{className:"m10-0"},n.a.createElement("b",null,"Link")," ",n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.link)),n.a.createElement("div",{className:"m10-0"},n.a.createElement("b",null,"Contents"),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content.slice(0,600)}})),n.a.createElement("div",{className:"m10-0"},n.a.createElement("b",null,"Document title")," ",n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.doc_title}})),n.a.createElement("div",{className:"flex justify-center align-center"},n.a.createElement("div",null,n.a.createElement("div",{className:"btn card-btn"},n.a.createElement("i",{className:"card-icon fas fa-book"}),e.date)),n.a.createElement("div",null,n.a.createElement("div",{className:"btn card-btn"},n.a.createElement("i",{className:"card-icon fas fa-plane-arrival"}),e.accident_date.slice(0,10))),n.a.createElement("div",null,n.a.createElement("div",{className:"btn card-btn"},n.a.createElement("i",{className:"card-icon fas fa-user-edit"}),e.author)),n.a.createElement("div",null,n.a.createElement("div",{className:"btn card-btn"},n.a.createElement("i",{className:"card-icon fas fa-plane"}),e.aircraft_type))),n.a.createElement("a",{href:(t=e._id,"".concat(u,"/").concat(g,'/_search?pretty&source_content_type=application/json&source={"_source":{"includes":["web_title","doc_title","organization.keyword","date","link"],"excludes":[]},"query":{"more_like_this":{"fields":["content"],"like":[{"_id":"').concat(t,'"}],"min_term_freq":20,"max_query_terms":1000}}}')),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"btn card-btn"},n.a.createElement("i",{className:"card-icon fas fa-project-diagram"})," ")));var t},v=function(){return n.a.createElement("div",{className:"result-list"},n.a.createElement(f.g,{className:"m1"}),n.a.createElement(f.f,{componentId:"results",dataField:"web_title",renderItem:E,onResultStats:_,react:{and:["full_searchbar","filt_pub_date","filt_agency","filt_aircraft","filt_contlen","filt_tags"]},pagination:!1,size:12,URLParams:!0,innerClass:{list:"result-list-container",pagination:"result-list-pagination",resultsInfo:"result-list-info"},onNoResults:"No results found ...",loader:"Loading results ...",sortOptions:[{label:"Best Match",dataField:"_score",sortBy:"desc"},{label:"Agency (A to Z)",dataField:"organization.keyword",sortBy:"asc"},{label:"Aircraft type",dataField:"aircraft_type.keyword",sortBy:"asc"},{label:"Publication date (desc)",dataField:"date",sortBy:"desc"},{label:"Publication date (asc)",dataField:"date",sortBy:"asc"},{label:"Accident date (desc)",dataField:"accident_date",sortBy:"desc"},{label:"Accident date (asc)",dataField:"accident_date",sortBy:"asc"}]}))},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).setTopics=function(e){a.setState({currentTopics:e||[]})},a.toggleTopic=function(e){var t=a.state.currentTopics,r=t.includes(e)?t.filter(function(t){return t!==e}):t.concat(e);a.setState({currentTopics:r})},a.state={currentTopics:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"container"},n.a.createElement(f.e,{app:g,url:u,credentials:"elastic:tcmwLXu5GSiTgma0MNqLhEtM",theme:b},n.a.createElement("div",{className:"flex row-reverse app-container"},n.a.createElement(p,null),n.a.createElement("div",{className:"results-container"},n.a.createElement(f.a,{componentId:"full_searchbar",filterLabel:"Search",dataField:["content","author","doc_title","web_title"],fieldWeights:[2,1,1,2],placeholder:"Search reports ...",autosuggest:!1,iconPosition:"left",URLParams:!0,highlight:!0,customHighlight:function(e){return{highlight:{pre_tags:["<mark>"],post_tags:["</mark>"],fields:{content:{},web_title:{},doc_title:{}},fragment_size:300,number_of_fragments:1}}},queryFormat:"or",fuzziness:1,debounce:1e3,className:"data-search-container results-container",innerClass:{input:"search-input"},showClear:!0}),n.a.createElement(v,{currentTopics:this.state.currentTopics,toggleTopic:this.toggleTopic})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){e.exports=a.p+"static/media/DSB_logo.ac97f64d.svg"},94:function(e,t,a){e.exports=a(181)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.62d6719c.chunk.js.map