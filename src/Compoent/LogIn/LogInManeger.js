import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';


export const initializeLogInFreamWork = () => {
    firebase.initializeApp(firebaseConfig);
}


//sing in with google
export const handelGoogleSingIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const { displayName, email } = result.user;
            const singedInUser = { displayName, email }
         return singedInUser
            // history.replace(from)
        }).catch((error) => {
            const newUser = { ...newUserInfo }
            newUser.error = error.message;
            // setNewUserInf(newUser
            return newUser
        });
}


//sing in with facebook
const handelFacebookSingIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then((result) => {
            const { displayName, email } = result.user;
            const singedInUser = { displayName, email }
            setLogedInUser(singedInUser)
            history.replace(from)

        })
        .catch((error) => {
            const newUser = { ...newUserInfo }
            newUser.error = error.message;
            setNewUserInfo(newUser)

        });
}


//careat user with email
export const createUserWithEmailAndPassword = () => {
    firebase.auth().createUserWithEmailAndPassword(newUserInfo.email, newUserInfo.password)
            .then((userCredential) => {
                const newUser = { ...newUserInfo }
                newUser.error = "";
                newUser.success = true;
                setLogedInUser(newUser)
                history.replace(from)
                updateUserInfo(newUserInfo.displayName)
            })
            .catch((error) => {
                const newUser = { ...newUserInfo }
                newUser.error = error.message;
                newUser.success = false;
                setNewUserInfo(newUser)               
            }) 
}

export const signInWithEmailAndPassword = () =>{
    firebase.auth().signInWithEmailAndPassword(newUserInfo.email, newUserInfo.password)
            .then((userCredential) => { 
                const newUser = { ...newUserInfo }
                newUser.error = "";
                newUser.success = true; 
                setLogedInUser(newUser)            
                history.replace(from) 
                console.log(userCredential);             
                             
            })
            .catch((error) => {
                const newUser = { ...newUserInfo }
                newUser.success = false;
                newUser.error = error.message;
                setNewUserInfo(newUser)
            });
}


 ///upadte user info
 const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,     
    }).then(() => {  
     console.log("user Info Update Seccessfully");
    }).catch( error => {
      console.log(error);
    });
  }