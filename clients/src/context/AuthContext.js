import {createContext , useReducer} from "react"
import AuthReducer from "./AuthReducer"



const INITIAL_STATE = {
    user : {
        "_id": "63ce1762640698cabfa69b0e",
        "username": "sahil2",
        "email": "sahil2@gmail.com",
        "password": "$2b$10$f8Pb2mcAvu49qcdPyereA.StPSJhtSVxd0JgBDvT8X2CHvGg/QzjC",
        "profilePicture": "",
        "coverPicture": "",
        "followings": ["63ce146f27830b65e2f7db45", "63ce14fd95c78f11c62c8b86", "63d68efee06ec0cbfec9813a", "63d68f14e06ec0cbfec9813c", "63ce0f0b185c5919c63ebdc6"],
        "followers": [],
        "isAdmin": false,
        "createdAt": "2023-01-23T05:13:06.465Z",
        "updatedAt": "2023-01-23T05:13:06.465Z",
        "__v": 0
      },
    // user:null,
    isFetching:false,
    error:false,
    
    
}


export const AuthContext = createContext(INITIAL_STATE);


export const AuthContextProvider = ({children})=>{

    // useReducer same as useState but -> it update state
    // It allows for custom state logic.
    // If we have multiple state we can use this
    // it take 2 thing =>(reducer function, initial state);
    const [state,dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    const url = "http://localhost:3001/api/";
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <AuthContext.Provider
            value={{
                user:state.user,
                isFetching:state.isFetching,
                error:state.error,
                dispatch,
                url,PF,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

