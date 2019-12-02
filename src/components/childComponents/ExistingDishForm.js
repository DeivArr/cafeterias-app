import React, {useRef} from 'react'
import ListOfCafeterias from  './ListOfCafeterias';
import TableOfDishes from './TableOfDishes';
import DatePicker from 'react-datepicker';
import {InputGroup, FormControl} from 'react-bootstrap';
import { FaSearchengin } from 'react-icons/fa';

const ExistingDishForm = (props) => {
    const refCafeteriasParam = useRef('');

    return (
        <div>
            Restaurant: <ListOfCafeterias list = {props.storedCafeterias} />
            <br /><br />
            <span>Date: <DatePicker selected={props.startDateCalendar} onChange = {props.setDateForCalendar} /> </span>
            <br /><br />
            <TableOfDishes listOfDishes = {props.storedDishes} onAddDish = {props.onAddDishToArray} />
        </div>
    )
}

export default ExistingDishForm;