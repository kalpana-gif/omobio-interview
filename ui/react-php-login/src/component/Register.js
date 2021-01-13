import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


class Login extends Component {


    constructor(props) {
        super(props);
        this.state={
            mail:'',
            pwd:''
        }

        this.RegClicked= this.RegClicked.bind(this);
        this.handleChangemail= this.handleChangemail.bind(this);
        this.handleChangepwd= this.handleChangepwd.bind(this);
    }


    RegClicked() {

    }

    async handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData();

        formData.append( 'mail', this.state.mail );
        formData.append( 'pwd', this.state.pwd );

        console.log(formData)

        const url= "http://localhost:80/omobio/index.php";
        axios.post(url,formData).then( res=>console.log(res.data) )

    }
    handleChangemail(event) {
        this.setState( {mail: event.target.value});

    }
    handleChangepwd(event) {
        this.setState( {pwd: event.target.value} );
    }

    render() {


        return (

            <div>
                <Form className=" text-center mb-6 " style={{marginTop: "5em",padding:" 40px 500px 60px"}} onSubmit={this.handleSubmit} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" id="mail" onChange={this.handleChangemail}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id="pwd" onChange={this.handleChangepwd}/>
                    </Form.Group>
                    <Button variant="dark" type="submit" id="regbtn"  >
                        Register
                    </Button>
                </Form>
            </div>





        );
    }
}

export default Login;
