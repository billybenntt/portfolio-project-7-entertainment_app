import {useState} from 'react'
import {FormRow} from '@/components/'
import Wrapper from '@/styles/wrappers/DashboardFormPage.tsx'
import {toast} from 'react-toastify'
import {updateUser} from '@/store/features/user/userSlice.ts'
import {useAppSelector, useAppDispatch} from '@/store/hooks.ts';
import {SubmitFormEvent, UpdateFormEvent} from '@/types/app'

function ProfilePage() {


    // GLOBAL STATE
    const {isLoading, user} = useAppSelector(store => store.user)
    const dispatch = useAppDispatch()

    // COMPONENT STATE
    const [userData, setUserData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        lastName: user?.lastName || '',
        location: user?.location || '',
    })

    // DESTRUCTURE STATE
    const {name, email, lastName, location} = userData

    // EVENT HANDLER (INPUT)
    const handleChange = (e: UpdateFormEvent) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        setUserData({...userData, [inputName]: inputValue})
    }

    // EVENT HANDLER (SUBMIT FORM)
    const handleSubmit = (e: SubmitFormEvent) => {
        e.preventDefault()
        if (!name || !email || !lastName || !location) {
            toast.error('Fill all the fields')

        }

        dispatch(updateUser(userData))
    }

    return (
        <Wrapper>
            <form className="form" onSubmit={handleSubmit}>
                <h3>Profile</h3>
                <div className="form-center">
                    <FormRow type="text" name="name" value={name} handleChange={handleChange}/>
                    <FormRow type="text" name="lastName" value={lastName} handleChange={handleChange} labelText="Last Name"/>
                    <FormRow type="text" name="email" value={email} handleChange={handleChange}/>
                    <FormRow type="text" name="location" value={location} handleChange={handleChange}/>
                    <button className="btn" type="submit">
                        {isLoading ? 'Please Wait...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}

export default ProfilePage
