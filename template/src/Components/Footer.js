import React from "react";
import { SocialMedia } from "./SocialMedia";
import { Copywrite } from "./Copywrite";

export function Footer(){
    return(
        <div className="footer">
            <SocialMedia/>
            <Copywrite/>
        </div>
    );
}