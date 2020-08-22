import React from "react";

export default ({value, setValue}) => {

    return (
        <div>
            <div className="ui input">
                <input 
                className="form-control form-control-lg" 
                type="text" 
                style={{width:"150px"}}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
                value={value}
                />
            </div>
        </div>
    )
}