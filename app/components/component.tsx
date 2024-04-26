"use client"

import {useState} from "react";

function Component() {
    const [title, setTitle] = useState("title")



    return (
        <div>
            <h1>{title}</h1>
            <input type="text" onChange={(e) => setTitle(e.target.value)}/>
        </div>
    )
}

export default Component
