import { useState, useEffect } from "react";

import { data } from "./data";



function Language() {
    const [activeCategory, setActiveCategroy] = useState("Database");

    const change = (type) => {
        setActiveCategroy(type);
        console.log("type", type);
    }



    return (
        <>

            {data && Object.keys(data).map(k =>
                <button key={k} className={((k == activeCategory) && "active ") + "btn btn-primary"} onClick={() => change(k)}>{k}</button>

            )}

            {data && data[activeCategory].map((row) => (
                <>
                    <p key={row.name}>{row.name}</p>
                    <img className="programming-language" src={row.image} />
                </>

            ))}



        </>
    )
}

export default Language;