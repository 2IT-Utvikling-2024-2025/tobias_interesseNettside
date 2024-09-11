import { useState } from 'react'
import { useEffect } from "react"

export default function ColorChanger() {
    const [color, setColor] = useState('')

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return(
        <>
            <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Skriv en farge eller hex-verdi"
            ></input>
        </>
    )
}