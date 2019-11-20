import React, {Component} from 'react'
import ListOfCafeterias from  './ListOfCafeterias';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Jumbotron, InputGroup, FormControl, Table, Button } from 'react-bootstrap';
import { FaSearchengin } from 'react-icons/fa';
import TableOfDishes from './TableOfDishes';
import AddedDishes from './AddedDishes';

class Home extends Component{
    componentDidMount(){
        this.props.getCafeterias(), 
        this.props.getDishes();
    }

    render(){
        return(
            <div>
                <br />
                <Container>
                    <Row>
                        <Col md = {12}>
                            <Jumbotron>
                                Restaurant: <ListOfCafeterias list = {this.props.storedCafeterias} />
                                <br /><br />
                                <span>Date: <DatePicker selected={this.props.startDateCalendar} onChange = {this.props.setDateForCalendar} /> </span>
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
                                <TableOfDishes listOfDishes = {this.props.storedDishes} onAddDish = {this.props.onAddDishToArray} />
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {12} className = "text-right">
                            <Button variant="success" > Save </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {12}>
                            <br />
                            <AddedDishes listOfAddedDishes = {this.props.addedDishes} />
                            <br />
                        </Col>
                    </Row>
                </Container>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storedCafeterias: state.cafeterias,
        startDateCalendar: state.startDate,
        storedDishes: state.dishes,
        addedDishes: state.dishesToStoreInCafeteria
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCafeterias: () => dispatch(actionTypes.fetchCafeteriasFromAPI()),
        setDateForCalendar: (date) => dispatch( {type: actionTypes.SET_DATA_FOR_CALENDAR, dateFromCalendar: date}),
        getDishes: () => dispatch(actionTypes.fetchDishesFromAPI()),
        onAddDishToArray: (dish) => dispatch({type: actionTypes.ADD_DISH_TO_ARRAY, dishElement: dish})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
