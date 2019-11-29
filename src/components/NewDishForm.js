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

    e.target.value = true;
}

const NewDishForm = (props) => {
    
    const [dishAlergen, setAllergen] = useState({Cheese: false, Eggs: false, Milk: false, Nuts: false});
    const [dishClass, setClasses] = useState({AnimalProtein: false, Fruit: false, Lactose: false, Vegan: false});
    const [dishName, setDishName] = useState('');
    const [dishType, setDishType] = useState('');
    const [dishDate, setDate] = useState('');
    const [dishCafeteria, setCafeteria] = useState('');

    const clickChangeAllergic = (e) => {
        
        setAllergen({
            ...dishAlergen,
            targetName: !(dishAlergen.Cheese)
        });

        setTimeout(() => {
            console.log(targetName);
            console.log(dishAlergen.Cheese);
        }, 4000);
    }
    
    const onCafeteriaSelect = (e) => {
        setCafeteria(e.target.value);
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Dish Name</Form.Label>
                    <Form.Control onChange = {(e) => {setDishName(e.target.value)}} placeholder="Insert Dish Name" />
                </Form.Group>

                Restaurant: <ListOfCafeterias onCafeteriaSelect = {onCafeteriaSelect} list = {props.storedCafeterias} />
                <br /><br />
                <span>Date: <DatePicker onSelect = {(date) => {setDate(date.getDate + '-' + date.getMonth() + '-' + date.getFullYear())}} selected={props.startDateCalendar} onChange = {props.setDateForCalendar} /> </span>
                <br /><br />
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Dish Type:&nbsp;</Form.Label>
                    <select onChange = {(e) => { setDishType(e.target.value) }} >
                        <option key = "Main Dish" >Main Dish</option>
                        <option key = "Entrance">Entrance</option>
                        <option key = "Drinks">Drinks</option>
                        <option key = "Dessert">Dessert</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Allergens &nbsp;</Form.Label>
                    <Button name = "Cheese" onClick = {clickChangeAllergic} className = "btn btn-light" >Cheese</Button>
                    <Button value = {dishAlergen.Eggs} onClick = {setActiveButton} className = "btn btn-light" >Eggs</Button>
                    <Button value = {dishAlergen.Milk} onClick = {setActiveButton} className = "btn btn-light" >Milk</Button>
                    <Button value = {dishAlergen.Nuts} onClick = {setActiveButton} className = "btn btn-light" >Nuts</Button>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Classes &nbsp;</Form.Label>
                    <Button value = {dishClass.AnimalProtein} onClick = {setActiveButton} className = "btn btn-light" >Animal Protein</Button>
                    <Button value = {dishClass.Fruit} onClick = {setActiveButton} className = "btn btn-light" >Fruit</Button>
                    <Button value = {dishClass.Lactose} onClick = {setActiveButton} className = "btn btn-light" >Lactose</Button>
                    <Button value = {dishClass.Vegan} onClick = {setActiveButton} className = "btn btn-light" >Vegan</Button>
                </Form.Group>
                <Button variant="primary" onClick = {() => {props.onAddDishToArray({ Name: dishName, Cafeteria: dishCafeteria, Alergen: dishAlergen, Class: dishClass, Date: dishDate, Type:dishType})}}>
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default NewDishForm;