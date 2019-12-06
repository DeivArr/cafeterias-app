import * as actionTypes from './actions';

const initialState = {
    cafeterias: [],
    startDate: new Date(),
    dishes: [],
    dishesToStoreInCafeteria: [],
    error: null,
    dishesSortedByDate: []
}

const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case actionTypes.DELETE_DISH_FROM_API: 
            return state;

        case actionTypes.SAVE_DISH_IN_API: 
            return { ...state, dishesToStoreInCafeteria: [] }

        case actionTypes.SET_DATA_FOR_CALENDAR: 
            return { ...state, startDate: action.dateFromCalendar}

        case "FetchData":
            return { ...state, cafeterias: action.cafeteriasStoredInAPI }

        case "FetchDishes":
            return { ...state, dishes: action.dishesStoredInAPI }

        case actionTypes.DISHES_SORTED_BY_DATE:
            return { ...state, dishesSortedByDate: action.dishesAlreadySorted }

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