import axios from "axios"



export const loginCall = async (userCredentials, dispatch,url)=>{
    dispatch({type:"LOGIN_START"})
    try{
        const res = await axios.post(`${url}auth/login`, userCredentials);
        dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    }catch(err){
        dispatch({type:"LOGIN_FAIL", payload:err});

    }
} 


export const registerCall = async (userCredentials, dispatch,url)=>{
    dispatch({type:"LOGIN_START"})
    try{
        const res = await axios.post(`${url}auth/login`, userCredentials);
        dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    }catch(err){
        dispatch({type:"LOGIN_FAIL", payload:err});

    }
} 