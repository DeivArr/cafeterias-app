import React, {Component} from 'react'
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { Container, Row, Col, Jumbotron, InputGroup, FormControl, Table, Button, Nav } from 'react-bootstrap';
import EditDishForm from '../childComponents/EditDishForm';

class UpdateDish extends Component{
    componentDidMount(){
        this.props.getCafeterias(), 
        this.props.getDishes();
        setTimeout(() => {
            var actualDate = new Date;
            this.props.getMenuFromToday(actualDate, this.props.storedDishes);
        }, 1000)
    }

    onEditDish = (dish) =>{

    }

    refreshMenu = (date) => {
        this.props.setDateForCalendar(date);
        this.props.getMenuFromToday(date, this.props.storedDishes);
    }

    render()
    {
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
                                <ListOfDishesForToday visibleButton = {true} textInButton = {'Edit'} listOfDishes = {this.props.dishesAlreadySorted} onHandleDish = {this.onEditDish}/>
                            </Jumbotron>
                            <br /><br />
                            <Jumbotron>
                                <EditDishForm 
                                startDateCalendar={this.props.startDateCalendar} 
                                setDateForCalendar = {this.props.setDateForCalendar}
                                onAddDishToArray = {this.props.onAddDishToArray} 
                                storedCafeterias = {this.props.storedCafeterias} />
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
        storedDishes: state.dishes, 
        dishesAlreadySorted: state.dishesSortedByDate
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCafeterias: () => dispatch(actionTypes.fetchCafeteriasFromAPI()),
        setDateForCalendar: (date) => dispatch( {type: actionTypes.SET_DATA_FOR_CALENDAR, dateFromCalendar: date}),
        getDishes: () => dispatch(actionTypes.fetchDishesFromAPI()),
        getMenuFromToday: (date, dishesToSort) => dispatch(actionTypes.sortDishesByDate(date, dishesToSort))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDish);