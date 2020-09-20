import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import emailjs from 'emailjs-com';

import ContactLogo from '../images/contact.png'

const styles = {
    center: {
        width: "50%",
        margin: "0 auto",
        textAlign: "center",
        paddingTop: "5%",
        color: "#d3d3d3",
        paddingBottom: "15px"
    },
    paragraph: {
        paddingTop: "20px",
        fontFamily: "Georgia,serif",
        marginTop: ".5em",
        fontSize: "20px",
        color: "#d3d3d3",
    }
}

export default class contact extends Component {

    sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('sebastn24', 'template_gwa2ixn', e.target, 'user_LbQBrfayK4pO9Bh4TUtXL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        e.target.reset()
    }
    render() {
        return (
            <div className="container" style={styles.center}>
                <img src={ContactLogo} width="200" alt="" style={{marginBottom: "-20px"}}/>
                <div style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}>
                    <p style={styles.paragraph}> 
                    Thanks for taking the time to check my portfolio, send me an email if you need anything 
                    </p>
                </div>
                <Form onSubmit={this.sendEmail}>
                    <div className="row" >
                        <div className="col-lg-6">
                            <FormGroup>
                                <Label for="exampleName">Full name</Label>
                                <Input type="text" name="name" id="name" placeholder="Sebastián Henríquez" onChange={this.handleChange} required="true"/>
                            </FormGroup>
                        </div>
                        <div className="col-lg-6">
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="example@gmail.com" onChange={this.handleChange} required="true"/>
                            </FormGroup>
                        </div>
                    </div>
                    <FormGroup>
                        <Label for="exampleText">Your message</Label>
                        <Input type="textarea" name="message" id="message" placeholder="Write the reason beacouse you need contact with me" onChange={this.handleChange} required="true"/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}
