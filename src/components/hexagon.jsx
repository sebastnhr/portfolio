import React, { Component } from 'react'

export default class hexagon extends Component {

    changeData = e => {
        e.preventDefault()
        const {changeDatas, title, level, experience, where} = this.props
        changeDatas(title, level, experience, where)
    }

    render() {
        const { backgroundImages } = this.props

        return (
            <li className="hex" onClick={this.changeData.bind(this)}>
                <div className="hexIn ">
                    <a className="hexLink">
                    <   img src={ backgroundImages } alt="" />
                    </a>
                </div>
            </li>
        )
    }
}
