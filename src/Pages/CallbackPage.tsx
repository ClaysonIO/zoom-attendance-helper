import axios from 'axios';
import React, {useEffect} from 'react';
import {useHistory, useLocation, useParams} from "react-router-dom";
import {IToken} from "../Utilities/Interfaces/IToken";

export const CallbackPage = ()=>{
    const {search} = useLocation<any>();
    const history = useHistory();

    console.log("CODE", search)

    useEffect(()=>{
        axios.get(`http://localhost:9000/.netlify/functions/zoomCallback${search}`)
            .then(response=>{
                const token: IToken = response.data;
                window.localStorage.setItem("token", JSON.stringify(token))
                history.push('/history')
            })
            .catch(err=>{
                history.push('/')
            })
    })

    return (<div>Loading...</div>)
}