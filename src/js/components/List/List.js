import React, { useState } from 'react'
import { connect } from 'react-redux'

import ListItem from './ListItem'
import ListAddForm from './ListAddForm';

import { removeContact, addContact } from '../../actions'

const List = props => {
    const [search, setSearch] = useState('')
    const [formState, switchFormState] = useState(false)
    
    return (
        <>
        <h2>Contact list: </h2>
        <input 
            type="text" 
            name="search" 
            className="searchInput"
            onChange={e => setSearch(e.target.value.toLowerCase())}
            value={search}
            placeholder="Search..."
        />
        <ul>
            {props.list
                .filter(item => {
                    for(let key in item)
                        if(item[key].toLowerCase().indexOf(search) > -1)
                            return true
                })
                .map((item, idx) => 
                <ListItem key={idx} cb={() => props.removeContact(idx)} item={item} idx={idx}/>)
            }
        </ul>
        <br/>

        <span onClick={() => switchFormState(!formState)}>{formState ? '[decline]': '[add]'}</span>

        {formState && <ListAddForm done={(data) => {
            switchFormState(false)
            props.addContact(data)
        }}/>}
        </>
    )
}

const mapStateToProps = state => ({
    list: state.list
})

const mapDispatchToProps = dispatch => ({
    removeContact: idx => dispatch(removeContact(idx)),
    addContact: data => dispatch(addContact(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)