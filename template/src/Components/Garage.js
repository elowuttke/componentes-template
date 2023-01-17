import React from "react";
import { Car } from "./Car";

export function Garage(){
    return (
        <div className="garage">
            <h1>Garagem da Elô</h1>
            <Car/>
            <Car/>
            <Car/>
        </div>
    );
}