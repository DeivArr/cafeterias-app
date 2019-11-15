export const GET_DATA_CAFETERIAS = 'GET_DATA_CAFETERIAS';
export const SET_DATA_FOR_CALENDAR = 'SET_DATA_FOR_CALENDAR';
export const ADD_DISH_TO_ARRAY = 'ADD_DISH_TO_ARRAY';

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