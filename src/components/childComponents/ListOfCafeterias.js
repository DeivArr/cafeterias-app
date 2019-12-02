import React, {useEffect, useRef } from 'react';

const ListOfCafeterias = (props) => {

    return (
        <select ref = {props.dishCafeteriaRef} >
            {props.list.map( cafeteria => (
                <option value = {cafeteria.name} key = {cafeteria.name}> {cafeteria.name} </option>
            ))}
        </select>
    )
}

export default ListOfCafeterias;