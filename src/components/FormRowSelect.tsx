import {FormRowSelectProps} from "@/types/app";


function FormRowSelect(props: FormRowSelectProps) {

    const {name, labelText, value, itemList, handleChange} = props

    return (
        <div className="form-row">

            <label htmlFor="status" className="form-label">
                {labelText || name}
            </label>

            <select name={name} id={name} value={value} onChange={handleChange} className="form-select">

                {/* Options */}
                {itemList.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default FormRowSelect
