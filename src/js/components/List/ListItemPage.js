import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeContact } from '../../actions'

const ListItemPage = ({list, removeContact, ...props}) => {
    const contact = list[props.match.params.id]
    return (<>
            <h2>Contact info: </h2>
            {Object.keys(contact).map(key => {
                return (
                <React.Fragment key={key}>
                    <h3>{key}:</h3>
                    <span>{contact[key]}</span>
                    <br/>
                </React.Fragment>
                )
            })}
            <br/>
            <Link to="/list">[back]</Link>
        </>
    )
}

const mapStateToProps = state => ({
    list: state.list
})

const mapDispatchToProps = dispatch => ({
    removeContact: idx => {
        dispatch(removeContact(idx))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItemPage)