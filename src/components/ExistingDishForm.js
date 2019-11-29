import React from 'react'
import ListOfCafeterias from  './ListOfCafeterias';
import TableOfDishes from './TableOfDishes';
import DatePicker from 'react-datepicker';
import {InputGroup, FormControl} from 'react-bootstrap';
import { FaSearchengin } from 'react-icons/fa';

const ExistingDishForm = (props) => {
    return (
        <div>
            Restaurant: <ListOfCafeterias list = {props.storedCafeterias} />
            <br /><br />
            <span>Date: <DatePicker selected={props.startDateCalendar} onChange = {props.setDateForCalendar} /> </span>
            <br /><br />
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text><FaSearchengin /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Search for a dish"
                aria-label="dish"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <br />
            <TableOfDishes listOfDishes = {props.storedDishes} onAddDish = {props.onAddDishToArray} />
        </div>
    )
}

export default ExistingDishForm;