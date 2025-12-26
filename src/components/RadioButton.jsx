import React from "react";

export function RadioButton({name, value, checked, label, onChange}) {
    return (
        <label style={{marginRight: 16}}>
            <input
                name={name}
                type="radio"
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span>{label}</span>
        </label>
    );
}
