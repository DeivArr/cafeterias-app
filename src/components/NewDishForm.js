import React, {useRef, useState} from 'react'
import { Form } from 'react-bootstrap';
import ListOfCafeterias from './ListOfCafeterias';
import DatePicker from 'react-datepicker';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

const setActiveButton = (e) =>{
    if(e.target.className === "btn btn-danger")
        e.target.className = "btn btn-light"
    else
        e.target.className = "btn btn-danger"
}

const [allergen, setAllergen] = useState({});
const [classes, setClasses] = useState({});

const [dishObject, setDishObject] = useState({});

const NewDishForm = (props) => {

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Dish Name</Form.Label>
                    <Form.Control placeholder="Insert Dish Name" />
                </Form.Group>

                Restaurant: <ListOfCafeterias list = {props.storedCafeterias} />
                <br /><br />
                <span>Date: <DatePicker selected={props.startDateCalendar} onChange = {props.setDateForCalendar} /> </span>
                <br /><br />
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Dish Type</Form.Label>
                    <select>
                        <option key = "Main Dish" >Main Dish</option>
                        <option key = "Entrance">Entrance</option>
                        <option key = "Drinks">Drinks</option>
                        <option key = "Dessert">Dessert</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Allergens &nbsp;</Form.Label>
                    <Button onClick = {setActiveButton} className = "btn btn-light" >Cheese</Button>
                    <Button onClick = {setActiveButton} className = "btn btn-light" >Eggs</Button>
                    <Button onClick = {setActiveButton} className = "btn btn-light" >Milk</Button>
                    <Button onClick = {setActiveButton} className = "btn btn-light" >Nuts</Button>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Classes &nbsp;</Form.Label>
                    <Button onClick = {setActiveButton} className = "btn btn-light" >Animal Protein</Button>
                    <Button onClick = {setActiveButton} className = "btn btn-light" >Fruit</Button>
                    <Button onClick = {setActiveButton} className = "btn btn-light" >Lactose</Button>
                    <Button onClick = {setActiveButton} className = "btn btn-light" >Vegan</Button>
                </Form.Group>
                <Button variant="primary" onClick = {}  >
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default NewDishForm;