import { FormRowSelect, FormRow } from './index.jsx'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from '../styles/wrappers/DashboardFormPage.jsx'
import { handleChange, clearFilters } from '../store/features/allJobs/allJobsSlice.jsx'



function SearchContainer() {

  const dispatch = useDispatch()

  const { jobType, jobTypeOptions, statusOptions } = useSelector(store => store.job)
  const {
    isLoading, search, searchStatus, searchType, sort, sortOptions
  } = useSelector(store => store.allJobs)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(clearFilters())
  }

  const handleSearch = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value

    if (isLoading) return

    dispatch(handleChange({ inputName, inputValue }))

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
            handleChange={handleSearch} />

          {/*Status Options*/}
          <FormRowSelect labelText="status"
            name="searchStatus"
            itemList={['all', ...statusOptions]}
            value={searchStatus}
            handleChange={handleSearch} />

          {/*Type Options*/}
          <FormRowSelect labelText="Type"
            name="searchType"
            itemList={['all', ...jobTypeOptions]}
            value={searchType}
            handleChange={handleSearch} />


          {/* Sort  Options*/}
          <FormRowSelect
            name="sort"
            itemList={sortOptions}
            value={sort}
            handleChange={handleSearch} />


          <button className="btn btn-block btn-danger"
            onClick={handleSubmit}
            disabled={isLoading}>
            Clear Filters
          </button>

        </div>

      </form>
    </Wrapper>
  )
}

export default SearchContainer
