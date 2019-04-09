import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormPersonalDetails extends Component{
    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {values,handleChange}=this.props;

        return(
            <div>
                <AppBar color="primary" position="static">
                <h1>Enter PersonalDetails</h1>
                </AppBar>
                
                <TextField 
                    label="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                />
                <br/>
                 <TextField 
                    label="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                /><br/>
                 <TextField 
                    label="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                /><br/>

                <Button variant="contained" color="primary"
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                >Continue
                </Button>
                
                <Button variant="contained" color="primary"
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                >
                 Back
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
export default FormPersonalDetails;