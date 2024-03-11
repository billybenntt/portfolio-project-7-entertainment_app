import {IconStats, IconAllData, IconAddData, IconUserProfile} from '../assets/icons';

const links = [
    {
        id: 1,
        text: 'stats',
        path: '/',
        icon: <IconStats/>
    },
    {
        id: 2,
        text: 'all jobs',
        path: 'all-jobs',
        icon: <IconAllData/>
    },
    {
        id: 3,
        text: 'add job',
        path: 'add-job',
        icon: <IconAddData/>
    },
    {
        id: 4,
        text: 'profile',
        path: 'profile',
        icon: <IconUserProfile/>
    }
]

export default links
