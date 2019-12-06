import axios from 'axios';
export const GET_DATA_CAFETERIAS = 'GET_DATA_CAFETERIAS';
export const SET_DATA_FOR_CALENDAR = 'SET_DATA_FOR_CALENDAR';
export const ADD_DISH_TO_ARRAY = 'ADD_DISH_TO_ARRAY';
export const SAVE_DISH_IN_API = "SAVE_DISH_IN_API";
export const DELETE_DISH_FROM_API = "DELETE_DISH_FROM_API";
export const DISHES_SORTED_BY_DATE = "DISHES_SORTED_BY_DATE";

export const saveDishesInAPI = ( dishes ) => {
    return (dispatch) => {
        dishes.map(dish => (
            axios.post('https://cafeterias-app.firebaseio.com/dishes.json', dish )
            .then( response => {
                dispatch({type: SAVE_DISH_IN_API});
            } )
            .catch( error => {
                console.log(error);
            } )
        ))
    };
};

export const deleteDishFomAPI = ( dishId ) => {
    return (dispatch) => {
        dishes.map(dish => (
            axios.delete(`https://cafeterias-app.firebaseio.com/dishes/${dishId}.json`)
            .then( response => {
                dispatch({type: DELETE_DISH_FROM_API});
            } )
            .catch( error => {
                console.log(error);
            } )
        ))
    };
};

export const fetchCafeteriasFromAPI = () => {

    return (dispatch) => {
        return fetch('https://cafeterias-app.firebaseio.com/cafeterias.json')
            .then(response => response.json())
            .then(result => 
                {
                    const cafeteriasArray = [];
                    const cafeteriasData = result;
                    for(const key in cafeteriasData)
                    {
                        if(cafeteriasData[key] != null)
                            cafeteriasArray.push({name: cafeteriasData[key].name})
                    }
                    dispatch({ type: "FetchData", cafeteriasStoredInAPI: cafeteriasArray })
                }
            )
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }
}

export const fetchDishesFromAPI = () => {

    return (dispatch) => {
        return fetch('https://cafeterias-app.firebaseio.com/dishes.json')
            .then(response => response.json())
            .then(result => 
                {
                    const dishesArray = [];
                    const dishesData = result;
                    for(const key in dishesData)
                    {
                        if(dishesData[key] != null)
                            //dishesArray.push({Name: dishesData[key].Name, Date: dishesData[key].Date, Type: dishesData[key].Type})
                            dishesArray.push({id: key, Cafeteria: dishesData[key].Cafeteria, Name: dishesData[key].Name, Alergen: dishesData[key].Alergen, Class: dishesData[key].Class, Date: dishesData[key].Date, Type: dishesData[key].Type})
                    }
                    dispatch({ type: "FetchDishes", dishesStoredInAPI: dishesArray })
                }
            )
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }
}

export const sortDishesByDate = (date, dishesToSortByDate) => {

    return (dispatch) => {
        var dishesArray = [];
        
        dishesToSortByDate.map((dish) => {
            var parts = JSON.stringify(dish.Date).replace(/["]/g, '').split('-');
            var myDate = new Date(parts[0], parts[1] - 1, parts[2]);
            
            if(myDate >= date) 
            {
                dishesArray.push(dish);
            }
        })

        dispatch({ type: DISHES_SORTED_BY_DATE, dishesAlreadySorted: dishesArray })
    }
}
