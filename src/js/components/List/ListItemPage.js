import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeContact } from '../../actions'

const ListItemPage = ({ list, remove, ...props }) => {
    const [deleted, commitDelete] = useState(false)
    const { id } = props.match.params
    const contact = list[id]

    if (!contact) return <Redirect to="/list" />

    const deleteHandler = () => {
        remove(id)
        commitDelete(true)
    }

    return (
        <>
            {deleted && <Redirect to="/list" />}
            <h2>Contact info: </h2>
            {Object.keys(contact).map(key => {
                return (
                    <React.Fragment key={key}>
                        <h3>{`${key}: `}</h3>
                        <span>{contact[key]}</span>
                        <br />
                    </React.Fragment>
                )
            })}
            <br />
            <span onClick={deleteHandler}>[delete]</span>
            <br />
            <Link to="/list">[back]</Link>
        </>
    )
}

const mapStateToProps = state => ({ list: state.list })

const mapDispatchToProps = dispatch => ({
    remove: idx => {
        dispatch(removeContact(idx))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListItemPage)
