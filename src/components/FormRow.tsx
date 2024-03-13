function FormRow(props) {

    const {type, name, value, handleChange, labelText} = props

    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText ? labelText : name}
            </label>
            <input type={type}
                id={name}
                className="form-input"
                value={value}
                name={name}
                onChange={handleChange}/>
        </div>
    )
}

export default FormRow
