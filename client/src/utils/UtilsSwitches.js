import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch(props) {
    const [checked, setChecked] = useState(false);

    const handleChange = val => {
        setChecked(val)
    }

    return (
        <div style={{ textAlign: "left" }}>
            <ReactSwitch
                checked={checked}
                onChange={handleChange}
            />
            {props.switchName}
        </div>
    );
}

export default ToggleSwitch;