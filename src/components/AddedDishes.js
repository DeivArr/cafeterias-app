import React from 'react';
import { Table } from 'react-bootstrap';

const AddedDishes = (props) => {
    return (
        <div>
            { props.listOfAddedDishes.map(dish => (
                <div className = "card">
                    <div className="card-body">
                        <h5 className="card-title"> Name: { dish.Name } </h5> 
                        <h6 className="card-subtitle mb-2 text-muted">Dish Type: { dish.Type }</h6>
                        <p className="card-text">Cafeteria: { dish.Cafeteria }</p>
                        <p className="card-text">Allergens: </p>
                        <Table>
                            <tbody>
                                <tr>
                                    { (dish.Alergen.Cheese) ? <td> <span className="list-group-item list-group-item-warning"> Cheese </span></td> : '' }
                                    { (dish.Alergen.Eggs) ? <td> <span className="list-group-item list-group-item-primary"> Eggs</span></td> : '' }
                                    { (dish.Alergen.Milk) ? <td> <span className="list-group-item list-group-item-secondary"> Milk</span></td> : '' }
                                </tr>
                                <tr>
                                    { (dish.Alergen.Nuts) ? <td> <span className="list-group-item list-group-item-success"> Nuts</span></td> : '' }
                                </tr>
                            </tbody>
                        </Table>
                        <p className="card-text">Classes: </p>
                        <Table>
                            <tbody>
                                <tr>
                                    { (dish.Class.AnimalProtein) ? <td>  <span className="list-group-item list-group-item-warning"> AnimalProtein </span></td> : '' }
                                    { (dish.Class.Fruit) ? <td> <span className="list-group-item list-group-item-danger"> Fruit </span></td> : '' }
                                </tr>
                                <tr>
                                    { (dish.Class.Lactose) ? <td> <span className="list-group-item list-group-item-secondary"> Lactose </span></td> : '' }  
                                    { (dish.Class.Vegan) ? <td> <span className="list-group-item list-group-item-success"> Vegan </span></td> : '' }
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default AddedDishes;