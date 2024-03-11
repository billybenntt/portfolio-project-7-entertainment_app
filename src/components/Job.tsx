import moment from 'moment'
import JobInfo from './JobInfo.tsx'
import {Link} from 'react-router-dom'
import Wrapper from '../styles/wrappers/Job.tsx'
import {deleteJob, setEditJob} from '../store/features/job/jobSlice.ts'
import {useAppDispatch} from '../store/hooks.ts';
import {IconJobType, IconJobLocation, IconJobDate} from '../assets/icons'


function Job(props) {

    const {_id: id, position, company, jobLocation, jobType, createdAt, status} = props
    const date = moment(createdAt).format('MMM Do, YYYY')
    const dispatch = useAppDispatch()

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
                    <JobInfo text={jobLocation} icon={<IconJobLocation/>}/>
                    <JobInfo text={date} icon={<IconJobDate/>}/>
                    <JobInfo text={jobType} icon={<IconJobType/>}/>
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
