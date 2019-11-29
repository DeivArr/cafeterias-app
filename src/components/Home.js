import React, {Component} from 'react'
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Jumbotron, InputGroup, FormControl, Table, Button, Nav } from 'react-bootstrap';
import AddedDishes from './AddedDishes';
import ExistingDishForm from './ExistingDishForm';
import NewDishForm from './NewDishForm';

class Home extends Component{
    state = {
        showExistingDishes: true
    }

    componentDidMount(){
        this.props.getCafeterias(), 
        this.props.getDishes();
    }

    toggleTab(param){
        this.setState({ showExistingDishes: param })
    }

    render(){
        return(
            <div>
                <br />
                <Container>
                    <Row>
                        <Col md = {12}>
                            <Jumbotron>
                                <Nav variant="tabs" defaultActiveKey="/home">
                                    <Nav.Item>
                                        <Nav.Link className = "nav-link active" onClick = {this.toggleTab.bind(this, true)} eventKey="home">New</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link onClick = {this.toggleTab.bind(this, false)} eventKey="link-1">Existing</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <br />
                                <div style = {{display: this.state.showExistingDishes ? 'block': 'none'}}>
                                    <NewDishForm 
                                        startDateCalendar={this.props.startDateCalendar} 
                                        setDateForCalendar = {this.props.setDateForCalendar}
                                        onAddDishToArray = {this.props.onAddDishToArray} 
                                        storedCafeterias = {this.props.storedCafeterias} />
                                </div>
                                <div style = {{display: !this.state.showExistingDishes ? 'block': 'none'}}>
                                    <ExistingDishForm 
                                        storedCafeterias = {this.props.storedCafeterias} 
                                        startDateCalendar={this.props.startDateCalendar} 
                                        storedDishes = {this.props.storedDishes} 
                                        onAddDishToArray = {this.props.onAddDishToArray} 
                                        setDateForCalendar = {this.props.setDateForCalendar} />
                                </div>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {12} className = "text-right">
                            <Button variant="success" onClick = { this.props.saveDishes.bind(this, this.props.addedDishes) } > Save </Button>
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
        onAddDishToArray: (dish) => dispatch({type: actionTypes.ADD_DISH_TO_ARRAY, dishElement: dish}),
        saveDishes: (dishes) => dispatch(actionTypes.saveDishesInAPI(dishes)),
        deleteDish: (dishId) => dispatch(actionTypes.deleteDishFomAPI(dishId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
