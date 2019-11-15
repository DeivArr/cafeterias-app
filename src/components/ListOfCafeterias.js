import React from 'react'

const ListOfCafeterias = (props) => {
    return (
        <select>
            { props.list.map( cafeteria => (
                <option key = {cafeteria.name}> {cafeteria.name} </option>
            ))}
        </select>
    )
}

export default ListOfCafeterias;