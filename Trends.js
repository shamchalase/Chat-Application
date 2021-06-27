import React from 'react'
import {FaSearch} from "react-icons/fa";
import TrendKeyword from './TrendKeyword';
const Trends = () => {
    return (
        <div className="trends">
            <div className="trends__search"> 
                <input type="text" className="trends__control" placeholder="Search Twitter" />
                <div className="trend__icon"><FaSearch className="search"/></div>
               
            </div>
            <TrendKeyword />
        </div>
    )
}

export default Trends;
