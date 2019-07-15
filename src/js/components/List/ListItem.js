import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({cb, item, idx}) => {
    return (
        <li>
            <Link to={'/list/'+idx}>
                {`Item ${idx}: ${item.name} ${item.lastName}`}
            </Link>

            <span onClick={cb}> [delete]</span>
        </li>
    )
}

export default ListItem