import React from 'react'
import { connect } from 'react-redux'

import { enterPassword } from '../actions'

const SecWrapper = (Component) => {
    class SecWrapper extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                password: null,
                wrong: false
            }
        }

        enterHandler = () => {
            this.props.enterPassword(this.state.password)
            this.setState({wrong: true})
        }

        render() {
            if(this.props.auth)
                return <Component {...this.props}/>
            else {
                return (
                    <div className="seqBlock">
                        <h2>Enter password:</h2>
                        <input
                            type="text"
                            className="form__input"
                            onChange={e => this.setState({password: e.target.value})}
                        />
                        {this.state.wrong && !this.props.auth && <span>[wrong password]</span>}
                        <br/>
                        <span onClick={this.enterHandler}>[enter]</span>
                    </div>
                )
            }
        }
    }

    const mapStateToProps = state => ({auth: state.auth})
    const mapDispatchToProps = dispatch => ({enterPassword: pass => dispatch(enterPassword(pass))})

    return connect(mapStateToProps, mapDispatchToProps)(SecWrapper)
}

export default SecWrapper

