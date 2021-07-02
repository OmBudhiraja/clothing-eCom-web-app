import React from 'react'
import './index.scss'

interface Props {
    handleChange: ()=> void;
    label?: string;
}

const FormInput: React.FC<Props & any> = ({handleChange, label, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" required onChange={handleChange} {...otherProps} />
            {label ? (
                <label className={`form-input-label ${otherProps.value.length ? 'shrink': ''}`} >
                    {label}
                </label>
            ): null}
        </div>
    )
}

export default FormInput
