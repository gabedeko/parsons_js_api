import React from 'react'

import Header from '../components/header' 
import Main from '../components/main' 
import PopUp from '../components/popUp' 

//Profile Page
const Profile = props => {

    //Declause useState for submitted user
    const [data, setUser] = React.useState({submittedUser: '', setSubmittedUser: []});

    //When form is submitted run functions within onSubmit
    function onSubmit(formState) {
        //console.log('Your form entry' + formState.user_id);
        parentToChild(formState.user_id);
        sendDataRoot(formState.user_id);
    }

    //send data from profile to Main
    const parentToChild = val => {
        setUser({
            submittedUser: val
        });
    }

    //send data from popPup to Root(app.js)
    function sendDataRoot(val) {    
        props.onSubmitRoot(val);
    
        //console.log('you said ', formData);    
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