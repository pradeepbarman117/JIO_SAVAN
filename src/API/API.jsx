import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Music_App from "../COMPONENTS/Music_App";


const API_DATA = createContext()


const API = () => {

    const [apiData,setApiData] = useState()
    let inputVal = 'udit narayan'
    useEffect(()=>{
        let url = `https://saavn.me/search/songs?query=${inputVal}&page=1&limit=2000`;
        axios.get(url).then(res=>{
            setApiData(res.data)
        });
    },[])
    
    return(
        <>
            <API_DATA.Provider value={{...apiData}} >
                <Music_App/>
            </API_DATA.Provider>
        </>
    );
};

export default API;
export {API_DATA}