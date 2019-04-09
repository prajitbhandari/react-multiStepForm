import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

class Confirm extends Component{
    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {values:{firstName,lastName,email,occupation,city,bio}}=this.props;

        return(
            <div>
                <AppBar color="primary" position="static">
                <h1>Confirm User Data</h1>
                </AppBar>
                 <div className="confirm-list">
                    <ul>
                        <li> <span>FirstName:</span> <br/><br/>{firstName}<br/><br/> </li>
                        <li> <span>lastName:</span> <br/><br/>{lastName}<br/><br/> </li>
                        <li> <span>Email:</span> <br/><br/>{email}<br/> <br/></li>
                        <li> <span>Occupation:</span> <br/><br/>{occupation}<br/><br/> </li>
                        <li> <span>City:</span> <br/><br/>{city}<br/><br/></li>
                        <li> <span>Bio:</span> <br/> <br/>{bio}<br/><br/></li>
                    </ul>
                 </div>
                
                <Button variant="contained" color="primary"
                    label="confirm & continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                >
                 Continue
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
export default Confirm;