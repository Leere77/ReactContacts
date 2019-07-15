import React, { useState } from 'react'

const inputShape = [
    {
        type: 'text',
        name: "name",
        required: true,
        maxLength: 25,
        pattern: /^[\w\d]+$/,
        title: 'Name'
    },
    {
        type: 'text',
        name: "lastName",
        required: true,
        maxLength: 25,
        pattern: /^[\w\d]+$/,
        title: 'Last name'
    },
    {
        type: 'text',
        name: "data",
        required: false,
        maxLength: 25,
        pattern: /^[\w\d]+$/,
        title: 'Other data'
    }
]

const ListAddForm = ({done}) => {
    const [formData, formUpdate] = useState({})
    const [error, errorSet] = useState({})

    const inputHandler = (e, input) => {
        errorSet({...error, [input.name]: {
            length: e.target.value.length > input.maxLength,
            pattern: !e.target.value.match(input.pattern) && !!e.target.value.length,
            required: e.target.value.length < 1 && input.required
        }})

        formUpdate({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = () => {
        let required = inputShape.filter(input => (!formData.hasOwnProperty(input.name) && input.required) ? true : false)
        let errors = false

        for(let key in error) {
            if(error[key].length || error[key].pattern || error[key].required) {
                errors = true
                break;
            }
        }

        if(!required.length && !errors)
            done(formData)
        else {
            console.log(error)
            if(required.length) {
                let obj = {}

                required.forEach(item => obj[item.name] = '')
                formUpdate(Object.assign(formData, obj))

                required.forEach(item => obj[item.name] = {
                    length: false,
                    pattern: false,
                    required: true
                })
                errorSet(Object.assign(error, obj))
            }
            console.log(error, formData)
        }
    }

    return (
        <form className="form">
            {inputShape.map(input => (
                <React.Fragment key={input.name}>
                    <label htmlFor={input.name}>{input.title}</label> <br/>
                    <input 
                        type={input.type}
                        name={input.name}
                        className="form__input"
                        onChange={e => inputHandler(e, input)}
                    /> 
                    {input.required && <span>[required]</span>}
                    {error[input.name] && error[input.name].pattern && <span>[wrong characters]</span>}
                    {error[input.name] && error[input.name].length && <span>[max length: {input.maxLength}]</span>}
                    <br/>
                </React.Fragment>
            ))
            }
            <span onClick={e => submitHandler()}>[submit]</span>
        </form>
    )
}

export default ListAddForm