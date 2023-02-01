
// userCredential -> mail, password etc...
// userCredentials -> which we are going to make requests
export const LoginStart = (userCredentials)=>{
    return {
        type:"LOGIN_START",
    }
}

// after login we have {USER} 
export const LoginSuccess = (user)=>{
    return {
        type:"LOGIN_SUCCESS",
        payload:user,
    }
}
export const LoginFailure = (error)=>{
    return {
        type:"LOGIN_FAILURE",
        payload:error,
    }
}

