import {UpdateFormEvent} from "@/types/app.definitions.ts";


interface IProps {
    type?: string
    itemList: string[]
    labelText?: string
    handleChange: (value: UpdateFormEvent) => void;
    name: string,
    value: string | number
}


function FormRowSelect(props: IProps) {

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
