import React from "react";
import {RadioButton} from "./RadioButton";

export class RadioButtonPanel extends React.Component {
    handleChange = (e) => {
        const nextValue = e.target.value;
        if (this.props.onChange) {
            this.props.onChange(nextValue);
        }
    };

    render() {
        const {value, name = "type", options = []} = this.props;

        return (
            <div className="row" style={{marginTop: 10}}>
                {options.map((opt) => (
                    <RadioButton
                        key={opt.value}
                        name={name}
                        value={opt.value}
                        label={opt.label}
                        checked={value === opt.value}
                        onChange={this.handleChange}
                    />
                ))}
            </div>
        );
    }
}
