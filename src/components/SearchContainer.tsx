import {FormRowSelect, FormRow} from '@/components'
import Wrapper from '@/styles/wrappers/DashboardFormPage.tsx'
import {handleChange, clearFilters} from '@/store/features/allJobs/allJobsSlice.ts'
import {useAppDispatch, useAppSelector} from '@/store/hooks.ts';
import {SubmitFormEvent, UpdateFormEvent} from "@/types/app.definitions.ts";

function SearchContainer() {

    const dispatch = useAppDispatch()

    const {jobTypeOptions, statusOptions} = useAppSelector(store => store.job.singleJob)
    const {isLoading, searchOptions} = useAppSelector(store => store.allJobs)
    const {search, searchStatus, searchType, sort, sortOptions} = searchOptions


    const handleSearch = (event: UpdateFormEvent): void  => {
        const inputName = event.target.name
        const inputValue = event.target.value
        dispatch(handleChange({inputName, inputValue}))
    }

    const handleClear = (event: SubmitFormEvent) => {
        event.preventDefault()
        dispatch(clearFilters())
    }

    return (
        <Wrapper>
            <form className="form">
                <h4>Search Form</h4>
                <div className="form-center">
                    {/*Search */}
                    <FormRow type="text"
                        name="search"
                        value={search}
                        handleChange={handleSearch}/>

                    {/*Status Options*/}
                    <FormRowSelect labelText="status"
                        name="searchStatus"
                        itemList={['all', ...statusOptions]}
                        value={searchStatus}
                        handleChange={handleSearch}/>

                    {/*Type Options*/}
                    <FormRowSelect labelText="Type"
                        name="searchType"
                        itemList={['all', ...jobTypeOptions]}
                        value={searchType}
                        handleChange={handleSearch}/>


                    {/* Sort  Options*/}
                    <FormRowSelect
                        name="sort"
                        itemList={sortOptions}
                        value={sort}
                        handleChange={handleSearch}/>


                    <button className="btn btn-block btn-danger"
                        onClick={handleClear}
                        disabled={isLoading}>
                        Clear Filters
                    </button>

                </div>

            </form>
        </Wrapper>
    )
}

export default SearchContainer
