import React, {useEffect, useRef } from 'react'

const ListOfCafeterias = (props) => {

    return (
        <React.Fragment>
            { props.list.map( cafeteria => (
                <option value = {cafeteria.name} key = {cafeteria.name}> {cafeteria.name} </option>
            ))}
        </React.Fragment>
    )
}

export default ListOfCafeterias;