import React from 'react';
import { Table } from 'react-bootstrap';

const ListOfDishesForToday = (props) => {
    return (
        <div className = "table-scroll">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Dish</th>
                        <th>Type</th>
                        <th>Allergen</th>
                        <th>Classes</th>
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
                        </tr>
                    ))} 
                </tbody>
            </Table>
        </div>
    )
}

export default ListOfDishesForToday;