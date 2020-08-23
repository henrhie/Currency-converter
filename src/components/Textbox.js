import React from "react";
import "./Textbox.css"

export default ({value, setValue, autofocus, label}) => {

    return (
        <div>
            <div className="ui input">
                <input 
                name={label}
                className="form-control form-control-lg custom-input" 
                type="text" 
                style={{width:"150px"}}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
                value={value}
                autofocus={autofocus ? autofocus : ""}
                />
            </div>
        </div>
    )
}