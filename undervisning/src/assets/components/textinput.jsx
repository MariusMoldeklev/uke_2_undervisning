import { useState } from "react";

export function TextInput() {
    const [value, setValue] = useState("")

    function handleUpdate(newValue){
        console.log(newValue)
        setValue(newValue)

    }

    return (
        <input type="text" onChange={(event)=> handleUpdate(event.target.value)} />
    )
}

