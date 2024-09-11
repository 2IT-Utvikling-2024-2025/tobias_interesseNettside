import { useState } from 'react'
import { useEffect } from "react"

export default function LoggingExample() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])

    function handleClick() {
        setCount(count + 1)
    }


    return(
        <>
            <button onClick={handleClick}>
                Count is {count}
            </button>
        </>
    )
}