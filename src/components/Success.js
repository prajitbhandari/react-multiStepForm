import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';

class Success extends Component{
    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        return(
            <div>
                <AppBar color="primary" position="static">
                <h1>Success</h1>
                </AppBar>
                <h3>Thank You for your Submission!!!</h3>
                <p>You will get email with further instructions</p>
            </div>
        );
    }
}

export default Success;