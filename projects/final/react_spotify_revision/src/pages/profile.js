import React from 'react'

import Header from '../components/header' 
import Main from '../components/main' 
import PopUp from '../components/popUp' 

const Profile = props => {

    
    const [data, setUser] = React.useState({submittedUser: '', setSubmittedUser: []});

    //console.log("this is from the profile page " + props.selectedValue);

    //console.log('the session token is ' + props.sessionToken);

    function onSubmit(formState) {
        console.log('Your form entry' + formState.user_id);
        
        parentToChild(formState.user_id);
        sendDataRoot(formState.user_id);
    }

    const parentToChild = val => {
        setUser({
            submittedUser: val
        });
    }

    function sendDataRoot(val) {    
        props.onSubmitRoot(val);
    
        //console.log('you said ', formData);
        // ... submit to API or something
    
      }
        
    return (
        
        <div id="profile">
            <PopUp onSubmit={onSubmit} />
            <Header />
            <Main 
                submittedUser={data.submittedUser}
                sessionToken={props.sessionToken}
                setUser={props.setUser}
            />
        </div>
    )
}

export default Profile;