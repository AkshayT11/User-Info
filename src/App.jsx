import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListofUser from './components/ListofUser'
import DisplayList from './components/DisplayList'
import AddUserForm from './components/AddUserForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListofUser/>} />
        <Route path='/display/:id' element={<DisplayList/>} />
        <Route path='/adduser' element={<AddUserForm/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
