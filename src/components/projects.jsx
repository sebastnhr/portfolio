import React, { Component } from 'react'

const styles = {
    center: {
        width: "50%",
        margin: "0 auto",
        textAlign: "center",
        paddingTop: "5%"
    },
    headLine:{
        fontFamily:"Georgia,serif",
        color:"#7e7e7e",
        fontVariant: "small-caps", 
        textTransform: "none",
        fontWeight: "100",
        marginBottom: "0",
        fontSize: "50px",
    },
}

export default class Projects extends Component {
    render() {
        return (
            <div style={styles.center}>
                <h1 style={styles.headLine}>Coming soon...</h1>
            </div>
        )
    }
}
