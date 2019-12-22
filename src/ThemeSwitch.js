import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'


class ThemeSwitch extends Component {
    static contextTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }


    hanleSwitchColor (color) {
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color)
        }
    }

    render () {
        return (
            <div>
                <button style={{ color: this.props.themeColor }}
                onClick={this.hanleSwitchColor.bind(this, 'red')}>Red</button>
                <button style={{ color: this.props.themeColor }}
                onClick={this.hanleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSwitchColor:(color)=>{
            dispatch({type:'CHANGE_COLOR', themeColor: color})
        }
    }
}
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch