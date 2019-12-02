import React from 'react';
import { Table } from 'react-bootstrap';
import { FaHamburger, FaAllergies, FaEnvira as HojaType } from 'react-icons/fa';
import { MdClass, MdDateRange } from 'react-icons/md';

const TableOfDishes = (props) => {
    return (
        <div className = "table-scroll">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Dish</th>
                        <th>Type</th>
                        <th>Allergen</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    { props.listOfDishes.map( dish => (
                        <tr key = {dish.id}>
                            <td>
                                { dish.Name }
                            </td>
                            <td>
                                { dish.Type }
                            </td>
                            <td>
                                <div className="list-group listGroupInline">
                                    { (dish.Alergen.Cheese) ? <span className="list-group-item list-group-item-warning"> Cheese </span> : '' }  
                                    { (dish.Alergen.Eggs) ? <span className="list-group-item list-group-item-primary"> Eggs</span> : '' }
                                </div>
                                <div className="list-group listGroupInline">
                                    { (dish.Alergen.Milk) ? <span className="list-group-item list-group-item-secondary"> Milk</span> : '' }
                                    { (dish.Alergen.Nuts) ? <span className="list-group-item list-group-item-success"> Nuts</span> : '' }
                                </div>
                            </td>
                            <td>
                                <div className="list-group listGroupInline">
                                    { (dish.Class.AnimalProtein) ?  <span className="list-group-item list-group-item-warning"> AnimalProtein </span> : '' }  
                                    { (dish.Class.Fruit) ? <span className="list-group-item list-group-item-danger"> Fruit </span> : '' }
                                </div>
                                <div className="list-group listGroupInline">
                                    { (dish.Class.Lactose) ? <span className="list-group-item list-group-item-secondary"> Lactose </span> : '' }   
                                    { (dish.Class.Vegan) ? <span className="list-group-item list-group-item-success"> Vegan </span> : '' }   
                                </div>
                            </td>
                            <td>
                                <button type = "button" key = { dish.id } onClick = { () => {props.onAddDish(dish), console.log(dish)} } className = "btn btn-primary" >Add</button>
                            </td>
                        </tr>
                    ))} 
                </tbody>
            </Table>
        </div>
    )
}

export default TableOfDishes;