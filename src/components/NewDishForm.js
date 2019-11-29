import React, {useRef, useState, useEffect} from 'react'
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
    const [dishAlergen, setAllergen] = useState({ Cheese: false, Eggs: false, Milk: false, Nuts: false} );
    const [dishClass, setClasses] = useState({AnimalProtein: false, Fruit: false, Lactose: false, Vegan: false});
    const [dishName, setDishName] = useState('');
    const [dishType, setDishType] = useState('');
    const [dishDate, setDate] = useState('');
    const [dishCafeteria, setDishCafeteria] = useState('');
    const dishTypeRef = useRef('');
    const dishCafeteriaRef = useRef('');

    // useEffect(() => {
    //     console.log(dishType);
    // }, [dishType]);

    useEffect(() => {
        let date = new Date;
        setDishName('');
        setDate(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
        setDishType(dishTypeRef.current[0].value);
        setTimeout(() => {
            setDishCafeteria(dishCafeteriaRef.current[0].value);
        }, 2000);
    }, []);

    const onSelectChangeAllergic = (e) => {
        
        setAllergen({
            ...dishAlergen,
            [e.target.name]: !(Object.values(dishAlergen)[e.target.value])
        });

        setActiveButton(e);
    }

    const onSelectChangeClass = (e) => {
        
        setClasses({
            ...dishClass,
            [e.target.name]: !(Object.values(dishClass)[e.target.value])
        });

        setActiveButton(e);
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

                Restaurant:
                <select onChange = {onCafeteriaSelect} ref = {dishCafeteriaRef} >
                    <ListOfCafeterias list = {props.storedCafeterias} />
                </select>
                 
                <br /><br />
                <span>Date: <DatePicker onSelect = {(date) => {setDate(date.getDate + '-' + date.getMonth() + '-' + date.getFullYear())}} selected={props.startDateCalendar} onChange = {props.setDateForCalendar} /> </span>
                <br /><br />
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Dish Type:&nbsp;</Form.Label>
                    <select ref = {dishTypeRef} onChange = {(e) => { setDishType(e.target.value) }} >
                        <option value = "Main Dish" key = "Main Dish" >Main Dish</option>
                        <option value = "Entrance" key = "Entrance">Entrance</option>
                        <option value = "Drinks" key = "Drinks">Drinks</option>
                        <option value = "Dessert" key = "Dessert">Dessert</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Allergens &nbsp;</Form.Label>
                    <Button value = {0} name = "Cheese" onClick = {onSelectChangeAllergic} className = "btn btn-light" >Cheese</Button>
                    <Button value = {1} name = "Eggs" onClick = {onSelectChangeAllergic} className = "btn btn-light" >Eggs</Button>
                    <Button value = {2} name = "Milk" onClick = {onSelectChangeAllergic} className = "btn btn-light" >Milk</Button>
                    <Button value = {3} name = "Nuts" onClick = {onSelectChangeAllergic} className = "btn btn-light" >Nuts</Button>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Classes &nbsp;</Form.Label>
                    <Button value = {0} name = "AnimalProtein" onClick = {onSelectChangeClass} className = "btn btn-light" >Animal Protein</Button>
                    <Button value = {1} name = "Fruit" onClick = {onSelectChangeClass} className = "btn btn-light" >Fruit</Button>
                    <Button value = {2} name = "Lactose" onClick = {onSelectChangeClass} className = "btn btn-light" >Lactose</Button>
                    <Button value = {3} name = "Vegan" onClick = {onSelectChangeClass} className = "btn btn-light" >Vegan</Button>
                </Form.Group>
                <Button variant="primary" onClick = {() => {props.onAddDishToArray({ Name: dishName, Cafeteria: dishCafeteria, Alergen: {...dishAlergen}, Class: {...dishClass}, Date: dishDate, Type:dishType})}}>
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default NewDishForm;