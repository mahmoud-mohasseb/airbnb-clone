import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import "./Search.css"

const Information =(props)=>{

// console.log(props.handleSelect);
// console.log(props.startDate);
    return(
<div className='search'>
<DateRangePicker ranges={props.ranges} onChange={props.onChange} />
            <h2>
                Number of guests <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />

            <Button onClick={props.onClick}>Search Airbnb</Button>
            </div>
    )
}
export default Information