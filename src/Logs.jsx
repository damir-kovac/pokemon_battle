import { useEffect, useRef } from "react";

const Logs = ({log, health1, health2}) =>{

    const logs = useRef();

    useEffect(()=>{
        logs.current.scrollTop = logs.current.scrollHeight;
    });

    return(
        <div className="logs_container">
            <h4> Logs </h4>
            <div className="logs text_container" ref={logs}>
                {log.map((message, index)=>
                    <p key={index}>{message}</p>
                )}
            </div>
        </div>
    )
}

export default Logs;