import React from "react";
import {Button} from "@material-ui/core";

export const LoginPage = ()=>{
    function login(){
        window.location.assign("https://zoom.us/oauth/authorize?response_type=code&client_id=jrkdYQG2RoOknfmcVDiefw&redirect_uri=http%3A%2F%2Flocalhost%3A9000%2F.netlify%2Ffunctions%2FzoomCallback")
    }

    return <>
        <Button onClick={login}>Login to Zoom</Button>
    </>
}