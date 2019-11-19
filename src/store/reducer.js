import * as actionTypes from './actions';

const initialState = {
    cafeterias: [],
    startDate: new Date(),
    dishes: [],
    dishesToStoreInCafeteria: [],
    error: null
}

const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case actionTypes.SET_DATA_FOR_CALENDAR: 
            return { ...state, startDate: action.dateFromCalendar}
        case "FetchData":
            return { ...state, cafeterias: action.cafeteriasStoredInAPI }
        case "FetchDishes":
            return { ...state, dishes: action.dishesStoredInAPI }
        case  actionTypes.ADD_DISH_TO_ARRAY: 
            return { 
                    ...state, 
                    dishesToStoreInCafeteria: state.dishesToStoreInCafeteria.concat(action.dishElement)
                }
        case "ERROR":
            return { ...state, error: action.msg }
        default:
            return state
    }
}

export default reducer;