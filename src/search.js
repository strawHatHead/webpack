'user strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import imgs from './images/3.jpg';

class Search extends React.Component{
    render () {
        return (<div className="search">
            search pages
            工业也米娜sdf
            <img src={imgs} />
        </div>)
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);