import React, { Component } from 'react'

const styles = {
    center: {
        width: "75%",
        height: "75%",
        position: "absolute",
        top:"0",
        bottom: "0",
        left: "0",
        right: "0",
        padding: "50px",
        margin: "auto",
        textAlign: "center",
    },
    headLine: {
        fontFamily:"Georgia,serif",
        color:"#7e7e7e",
        fontVariant: "small-caps", 
        textTransform: "none",
        fontWeight: "100",
        marginBottom: "0",
    },
    paragraph: {
        paddingTop: "20px",
        fontFamily: "'Helvetica Neue', 'Lucida Grande', Helvetica, Arial, Verdana, sans-serif",
        fontSize: "26px",
        marginTop: ".5em",
        color: "#d3d3d3",
    }
}
export default class background extends Component {
    render() {
        return (
            <div style={styles.center}> 
                <h1 style={styles.headLine}> About me</h1>
                <h3 style={styles.headLine}> Computer engineering</h3>
                <p style={styles.paragraph}>
                My name is Sebastián Alejandro Henríquez Ramírez, I currently live in Viña del Mar, Chile, 
                I just graduated as a computer engineer and I would like to work as a software developer, 
                I am currently self-taught since looking for work has been complicated by the current pandemic passing,  
                I would like to specialize in the front-end area or using javascript specializing in react, 
                although I would also like to learn everything that software development entails so that in 
                the future I can work as a full stack
                </p>

                <h3 style={styles.headLine}> Interests</h3>
                <p style={styles.paragraph}>
                Javascript • React 
                </p>
                
                <h3 style={styles.headLine}>Editor</h3>
                <p style={styles.paragraph}>
                VSCode
                </p>
            </div>
        )
    }
}

