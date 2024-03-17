import React from "react";


//  BASE TYPES
export interface JobType {
    _id: string
    company: string,
    position: string,
    status: string,
    jobType: string,
    jobLocation: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string
}

// COMPONENT PROPS

export interface FormRowProps {
    type?: string
    labelText?: string
    handleChange: (value: UpdateFormEvent) => void;
    name: string,
    value: string | number
}






// EVENT LISTENERS
export type UpdateFormEvent = React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLSelectElement>
export type SubmitFormEvent = React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>;
