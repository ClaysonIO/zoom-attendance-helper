import React from "react";
import {Button} from "@material-ui/core";

export const LoginPage = ()=>{
    function login(){
        const client_id = "jrkdYQG2RoOknfmcVDiefw";
        const redirectUri = "http%3A%2F%2Flocalhost%3A3000%2Fcallback";
        window.location.assign(`https://zoom.us/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirectUri}`)
    }

    return <>
        <Button onClick={login}>Login to Zoom</Button>
    </>
}