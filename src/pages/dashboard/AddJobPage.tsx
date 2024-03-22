import {useEffect} from 'react'
import {toast} from 'react-toastify'
import {FormRow, FormRowSelect} from '@/components'
import Wrapper from '@/styles/wrappers/DashboardFormPage.tsx'
import {handleChange, clearValues, editJob, createJob} from '@/store/features/job/jobSlice.ts'
import {useAppSelector, useAppDispatch} from '@/store/hooks.ts';
import {UpdateFormEvent, SubmitFormEvent} from "@/types/app.definitions.ts";

// ADD JOB PAGE

function AddJobPage() {

    const {user} = useAppSelector(store => store.user)
    const dispatch = useAppDispatch()


    const {
        isLoading, isEditing, singleJob
    } = useAppSelector(store => store.job)

    const {jobLocation, jobType, editJobID, company, jobTypeOptions, status, statusOptions, position} = singleJob


    const handleClear = () => {
        dispatch(clearValues())
    }

    const handleJobInput = (e: UpdateFormEvent) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        dispatch(handleChange({inputName, inputValue}))
    }

    const handleSubmit = (e: SubmitFormEvent) => {
        e.preventDefault()

        // NO INPUT SUBMIT
        if (!position || !company || !jobLocation) {
            toast.error('Please fill out all the fields')
            return
        }

        // EDIT SUBMIT
        if (isEditing) {
            const editPayload = {
                jobId: editJobID,
                job: {
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                }
            }
            dispatch(editJob(editPayload))
            return
        }

        // ADD JOB SUBMIT - DEFAULT
        dispatch(createJob({position, company, jobLocation, jobType, status}))
    }

    // EFFECT UPDATE LOCATION
    useEffect(() => {
        if (!isEditing) {
            dispatch(handleChange({inputName: 'jobLocation', inputValue: user.location}))
        }
    }, [dispatch, isEditing, user.location])

    return (
        <Wrapper>
            <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
            <div className="form-center">

                <FormRow type="text"
                    name="position"
                    value={position}
                    handleChange={handleJobInput}/>

                <FormRow type="text"
                    name="company"
                    value={company}
                    handleChange={handleJobInput}/>

                <FormRow type="text"
                    name="jobLocation"
                    value={jobLocation}
                    labelText="Job Location"
                    handleChange={handleJobInput}/>

                <FormRowSelect name="status"
                    value={status}
                    itemList={statusOptions}
                    handleChange={handleJobInput}/>

                <FormRowSelect name="jobType"
                    labelText="Job Type"
                    value={jobType}
                    itemList={jobTypeOptions}
                    handleChange={handleJobInput}/>


                <div className="btn-container">
                    <button type="button"
                        className="btn btn-block clear-btn"
                        onClick={handleClear}>
                        Clear
                    </button>
                    <button type="button"
                        className="btn btn-block submit-btn"
                        onClick={handleSubmit}
                        disabled={isLoading}>
                        Submit
                    </button>
                </div>

            </div>
        </Wrapper>
    )
}

export default AddJobPage
