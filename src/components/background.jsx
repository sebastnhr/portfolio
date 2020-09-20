import React, { Component } from 'react'

import Hexagon from './hexagon'

import '../styles/hexagon.css'

const styles = {
    center: {
        width: "50%",
        margin: "0 auto",
        paddingTop: "5%"
    },
    centerHexagon: {
        width: "100%",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "'Helvetica Neue', 'Lucida Grande', Helvetica, Arial, Verdana, sans-serif",
        color: "#d3d3d3",
        marginTop: "5%",
        marginBottom: "5%"
    },
    programmerBox: ({displayProgrammer}) => ({
        marginTop: "25px",
        color: "#fff",
        display: displayProgrammer,
        marginBottom: "20px"
    }),
    databaseBox: ({displayDatabase}) => ({
        marginTop: "25px",
        color: "#fff",
        display: displayDatabase,
        marginBottom: "20px"
    }),
    frameworkBox: ({displayFramework}) => ({
        marginTop: "25px",
        color: "#fff",
        display: displayFramework,
        marginBottom: "20px"
    }),
    h1: ({displayTitle}) => ({
        textAlign: "center",
        color: "#fff",
        display: displayTitle
    }),
    table: {
        borderCollapse: "collapse",
        width: "100%"
    },
    th: {
        padding: "8px",
        textAlign: "center",
        borderBottom: "1px solid #ddd"
    },
    td: {
        padding: "8px",
        textAlign: "left",
        borderBottom: "1px solid #ddd"
    }
}

export default class background extends Component {
    
    state = {
        title: "",
        level: "", 
        experience: "", 
        where: "",
        displayProgrammer: "none",
        displayDatabase: "none",
        displayFramework: "none",
        displayTitle: "block"
    }

    programmerBackground = (title, level, experience, where) =>{
        this.setState({title: title})
        this.setState({level: level})
        this.setState({experience: experience})
        this.setState({where: where})
        this.setState({displayProgrammer: "block"})
        this.setState({displayDatabase: "none"})
        this.setState({displayFramework: "none"})
        this.setState({displayTitle: "none"})
    }

    
    databaseBackground = (title, level, experience, where) =>{
        this.setState({title: title})
        this.setState({level: level})
        this.setState({experience: experience})
        this.setState({where: where})
        this.setState({displayProgrammer: "none"})
        this.setState({displayDatabase: "block"})
        this.setState({displayFramework: "none"})
        this.setState({displayTitle: "none"})
    }

    
    frameworkBackground = (title, level, experience, where) =>{
        this.setState({title: title})
        this.setState({level: level})
        this.setState({experience: experience})
        this.setState({where: where})
        this.setState({displayProgrammer: "none"})
        this.setState({displayDatabase: "none"})
        this.setState({displayFramework: "block"})
        this.setState({displayTitle: "none"})
    }

    render() {
        const programmer = [
            ["https://www.loopeando.com/wp-content/uploads/2016/11/html5.jpg", "HTML", "Medium / Advanced (with work experience)", "university studies (computer engineering) and work practice", "Self-taught stadiums, practice in maintenance and website support"],
            ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpvhydjS93WkwqgBEWYCSDoKvxOLp4Dk21EQ&usqp=CAU", "CSS", "Medium (with work experience)", "university studies (computer engineering) and self-taught practice", "Creation of basic designs, division of HTML tags and execution of exercises in a self-taught way"],
            ["https://cybmeta.com/wp-content/uploads/2016/01/icon.javascript.png", "Javascript", "Medium (without work experience)", "University studies and self-study", "Self-taught exercises, career studies (read only and implementation in web pages), implementation with react"], 
            ["https://kinsta.com/es/wp-content/uploads/sites/8/2018/05/qu%C3%A9-es-php-1-1024x512.png", "PHP", "Medium (with work experience)", "university studies (computer engineering) and work practice", "Practice in website maintenance and support and creating a page using codeigniter (Project in progress)"],
            ["https://lhcampus.es/wp-content/uploads/2018/01/c.jpg", "C#", "Medium (without work experience)", "university studies (computer engineering) and self-taught in unity", "knowledge from university studies for creating web pages and implementation in unity"],
            ["https://revistadigital.inesem.es/informatica-y-tics/files/2016/02/Java-Inesem.jpg", "Java", "Medium (without work experience)", "University studies (computer engineering)", "Creation of web pages and desktop applications"],
        ]   
 
        const database = [
            ["https://cms-assets.tutsplus.com/uploads/users/34/posts/21944/preview_image/php-my-admin.png", "PhpMyAdmin", "Medium / Advanced (with work experience)", "University studies (computer engineering) and Work practice", "Joint use with php and work practice in web page maintenance"],
            ["https://ep.gnt.md/wp-content/uploads/2019/02/Como-cambiar-la-IP-de-vinculacion-de-MySQL-Server-en-Linux-www.tecnoblog.info_-1024x576.jpg", "Mysql", "Basic / Medium (without work experience)", "university studies (computer engineering)", "mostly used to make database entity-relationship diagrams, I have knowledge to create databases, but very little user experience"],
            ["https://miro.medium.com/max/402/1*KTDZHTVaVbvbyhIf2PmBAw.png", "SQL Server", "Medium (without work experience)", "university studies (computer engineering)", "Database creation and use of SQL, I have only used it with visual studio"],

        ]

        const framework = [
            ["https://reactjs.org/logo-og.png", "React js", "Medium (without work experience)", "self-study",  "Creation of web pages (Used to create this web portfolio)"],
            ["https://cms-assets.tutsplus.com/uploads/users/12/posts/13113/preview_image/codeIgniter.jpg", "Codeigniter", "Medium (with work experience)", "University studies and self-taught", "Creation of web pages using php and phpmyadmin (Project in progress)"],
            ["https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png", "Bootstrap", "Medium (without work experience)", "self-study",  "Implementation in web pages, I have experience in react and codeigniter"],
            ["https://i.pinimg.com/564x/ed/40/c8/ed40c83717615279071e7737c1f0d2db.jpg", "Unity", "Medium (without work experience)", "University studies and self-taught", "Creation of 2D games (Movements, AI, Scenarios, scene changes, layouts, among other things)"],
        ]

        var programmers=[];
        for(var i=0;i<programmer.length;i++){
             // push the component to programmers!
             programmers.push(<Hexagon backgroundImages = { programmer[i][0] } 
                title = { programmer[i][1] } 
                level = { programmer[i][2] } 
                where = { programmer[i][3] } 
                experience = { programmer[i][4] }
                changeDatas = { this.programmerBackground }
            />);
        }

        var databases=[];
        for(var i=0;i<database.length;i++){
             // push the component to databases!
             databases.push(<Hexagon backgroundImages = { database[i][0] } 
                title = { database[i][1] } 
                level = { database[i][2] } 
                where = { database[i][3] } 
                experience = { database[i][4] }
                changeDatas = { this.databaseBackground }
            />);
        }

        var frameworks=[];
        for(var i=0;i<framework.length;i++){
             // push the component to frameworks!
             frameworks.push(<Hexagon backgroundImages = { framework[i][0] } 
                title = { framework[i][1] } 
                level = { framework[i][2] } 
                where = { framework[i][3] } 
                experience = { framework[i][4] }
                changeDatas = { this.frameworkBackground }
            />);
        }

        const { displayTitle, displayProgrammer, displayDatabase, displayFramework } = this.state
        return (
            <div style={styles.center} >
                <div style={styles.h1({displayTitle})}>
                    <h1>Press someone hexagon!</h1>
                </div>
                <div style={styles.centerHexagon} >
                    <h3>Technologies</h3>
                    <ul id="hexGrid">
                        {programmers}
                    </ul>
                    <div style={styles.programmerBox({displayProgrammer})}>
                        <table style={styles.table}>
                            <thead>
                                <tr className="title">
                                    <th style={styles.th} colSpan="2">{this.state.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={styles.td}>Level:</td>
                                    <td style={styles.td} className="level">{this.state.level}</td>
                                </tr>
                                <tr>
                                    <td style={styles.td}>Where: </td>
                                    <td style={styles.td} className="where">{this.state.where}</td>
                                </tr>
                                <tr>
                                    <td style={styles.td}>Experience</td>
                                    <td style={styles.td} className="experience">{this.state.experience}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={styles.centerHexagon} >
                    <h3>Database</h3>
                    <ul id="hexGrid">
                        {databases}
                    </ul>
                    <div style={styles.databaseBox({displayDatabase})}>
                        <table style={styles.table}>
                            <thead>
                                <tr className="title">
                                    <th style={styles.th} colSpan="2">{this.state.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={styles.td}>Level:</td>
                                    <td style={styles.td} className="level">{this.state.level}</td>
                                </tr>
                                <tr>
                                    <td style={styles.td}>Where: </td>
                                    <td style={styles.td} className="where">{this.state.where}</td>
                                </tr>
                                <tr>
                                    <td style={styles.td}>Experience</td>
                                    <td style={styles.td} className="experience">{this.state.experience}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={styles.centerHexagon} >
                    <h3>Frameworks/Library - Extras</h3>
                    <ul id="hexGrid">
                        {frameworks}
                    </ul>
                    <div style={styles.frameworkBox({displayFramework})}>
                        <table style={styles.table}>
                            <thead>
                                <tr className="title">
                                    <th style={styles.th} colSpan="2">{this.state.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={styles.td}>Level:</td>
                                    <td style={styles.td} className="level">{this.state.level}</td>
                                </tr>
                                <tr>
                                    <td style={styles.td}>Where: </td>
                                    <td style={styles.td} className="where">{this.state.where}</td>
                                </tr>
                                <tr>
                                    <td style={styles.td}>Experience</td>
                                    <td style={styles.td} className="experience">{this.state.experience}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
