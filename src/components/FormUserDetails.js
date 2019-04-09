import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




class FormUserDetails extends Component{
    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const {values,handleChange}=this.props;

        return(
            <div>
                <AppBar color="primary" position="static">
                <h1>Enter UserName</h1>
                </AppBar>
                
                <TextField 
                    label="FirstName"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br/>
                 <TextField 
                    label="LastName"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                /><br/>
                 <TextField 
                    label="E-mail"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                /><br/>
                
                <Button variant="contained" color="primary"
                    label="continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                >
                 Continue
                </Button>

            </div>
        );
    }
}

const styles={
 button:{
     margin :15
 }
}
export default FormUserDetails;