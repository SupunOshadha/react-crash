// eslint-disable-next-line no-unused-vars
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
)
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;








{/* crash course of JSX
import React from 'react'

const person = "Saman";
const num1 = 54;
const num2 = 44;
const names = ["supun","priya","Namal"];
const loggedIn = true;
const styles = {

  color : 'red',
  fontSize : '25px',
}
const App = () => {
  return (
    <>
      <div classNameName='text-center'>Block</div>
      <ul>
        {names.map((name)=>(
          <li key={name.id}>{name}</li>
        ))}      
      </ul>
      <p style={styles}>Hello! {person}</p>
      <p classNameName='text-blue-500 font-sans bg-orange-400 max-w-32 rounded-lg p-4 m' >{`sum is ${num1+num2}`}</p>
      {loggedIn ? <h1>Hello Member</h1>: <h1>Hello Member</h1>}

    </>
    
  )
}

export default App */}