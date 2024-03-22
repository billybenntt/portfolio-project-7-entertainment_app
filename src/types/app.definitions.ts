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


export interface chartData {
    date: string
    count: number
}


// EVENT LISTENERS
export type UpdateFormEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
export type SubmitFormEvent = React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>;


export type JobState = {
    isLoading: boolean
    isEditing: boolean
    singleJob: {
        position: string
        company: string
        jobLocation: string
        jobType: string
        jobTypeOptions: Array<string>
        status: string
        statusOptions: Array<string>
        editJobID: string
    }
}

export type AllJobsState = {
    isLoading: boolean
    jobs: Array<JobType>
    totalJobs: number
    numOfPages: number
    page: number
    stats: {
        interview: number
        pending: number
        declined: number
    }
    chartData: Array<chartData>
    searchOptions: {
        search: string
        searchStatus: string
        searchType: string
        sort: string
        sortOptions: Array<string>
    }
}




