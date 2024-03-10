import moment from 'moment'
import JobInfo from './JobInfo.jsx'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Wrapper from '../styles/wrappers/Job.jsx'
import { deleteJob, setEditJob } from '../store/features/job/jobSlice.jsx'

function Job (props) {

  const { _id: id, position, company, jobLocation, jobType, createdAt, status } = props
  const date = moment(createdAt).format('MMM Do, YYYY')
  const dispatch = useDispatch()

  const handleEdit = () => {
    const editPayload = {
      editJobID: id,
      position,
      company,
      jobLocation,
      jobType,
      status
    }
    dispatch(setEditJob(editPayload))
  }

  const handleDelete = () => {
    dispatch(deleteJob(id))
  }

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <JobInfo text={jobLocation} icon={<FaLocationArrow/>}/>
          <JobInfo text={date} icon={<FaCalendar/>}/>
          <JobInfo text={jobType} icon={<FaBriefcase/>}/>
          <div className={`status ${status}`}>
            {status}
          </div>
        </div>
        <footer>
          <div className="actions">
            <Link to="/add-job" className="btn edit-btn" onClick={handleEdit}>
              Edit
            </Link>
            <button className="btn delete-btn" type="button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Job
