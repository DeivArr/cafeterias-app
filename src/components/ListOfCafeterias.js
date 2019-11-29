import React, { useRef } from 'react'

const ListOfCafeterias = (props) => {

    return (
        <select onChange = {props.onCafeteriaSelect} >
            { props.list.map( cafeteria => (
                <option key = {cafeteria.name}> {cafeteria.name} </option>
            ))}
        </select>
    )
}

export default ListOfCafeterias;