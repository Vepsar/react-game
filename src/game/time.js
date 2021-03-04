import { useConfig } from "../game/config";
// import { useEffect, useState } from "react";

export default function Time(){
    const config = useConfig();
    
    return <div className='timer'>
        TIME
        <br/>
        {config.timer}
    </div>
}