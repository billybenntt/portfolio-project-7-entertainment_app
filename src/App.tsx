import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register, ProtectedRoute } from '@/pages'
import { SharedLayout, AddJobPage, StatsPage, ProfilePage, AllJobsPage } from '@/pages/dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/*DASHBOARD PAGE MAIN PROTECTED ROUTE 1*/}
        <Route path="/" element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>}>

          {/*ROUTE 1 - NESTED SUB ROUTES*/}
          <Route index element={<StatsPage />} />
          <Route path="/all-jobs" element={<AllJobsPage />} />
          <Route path="/add-job" element={<AddJobPage />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Route>


        {/*REGISTER PAGE ROUTE 2*/}
        <Route path="register" element={<Register />} />

        {/*LANDING PAGE ROUTE 3 */}
        <Route path="landing" element={<Landing />} />

        {/*ERROR PAGE ROUTE 4*/}
        <Route path="*" element={<Error />} />

      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={1500}
        pauseOnHover={false}
        pauseOnFocusLoss={false} />
    </BrowserRouter>
  )
}

export default App
