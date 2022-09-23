import preloader from "../../../Assets/Images/Preloader.gif";
import React from "react";

export const Preloader = () => {
    return <div style={{ backgroundColor: 'blue' }}>
        <img src={preloader}/>
    </div>
}