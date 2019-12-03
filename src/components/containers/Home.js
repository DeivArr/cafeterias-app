import React, {Component} from 'react'
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { Container, Row, Col, Jumbotron, InputGroup, FormControl, Table, Button, Nav } from 'react-bootstrap';
import ListOfDishesForToday from '../childComponents/ListOfDishesForToday';

class Home extends Component{

    componentDidMount(){
        this.props.getCafeterias(), 
        this.props.getDishes();
    }

    refreshMenu = (date) => {
        this.props.setDateForCalendar(date);
        this.props.getMenuFromToday(date, this.props.storedDishes);
    }

    render(){
        return(
            <div>
                <br />
                <Container>
                    <Row>
                        <Col md = {12}>
                            <Jumbotron>
                                <p>Look for a dish in an specific date, it will return the dishes bigger than the selected date</p>
                                <span>Date: <DatePicker selected={this.props.startDateCalendar} onChange = {this.refreshMenu.bind(this)} /> </span>
                                <br /><br />
                                <ListOfDishesForToday listOfDishes = {this.props.storedDishes} onAddDish = {this.props.onAddDishToArray}/>
                            </Jumbotron>
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
        storedDishes: state.dishes
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCafeterias: () => dispatch(actionTypes.fetchCafeteriasFromAPI()),
        setDateForCalendar: (date) => dispatch( {type: actionTypes.SET_DATA_FOR_CALENDAR, dateFromCalendar: date}),
        getDishes: () => dispatch(actionTypes.fetchDishesFromAPI()),
        getMenuFromToday: (date, dishesToSort) => dispatch(actionTypes.fetchDishesFromAPIByDate(date, dishesToSort))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
