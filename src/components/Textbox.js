import React from "react";

export default ({value, setValue}) => {

    return (
        <div>
            <div class="ui input">
                <input 
                class="form-control form-control-lg" 
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