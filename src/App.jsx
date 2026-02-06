import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Authentication from './pages/Authentication'
import AdminDashboard from './pages/AdminDashboard'
import StudentDashboard from './pages/StudentDashboard'
import PageNotFound from './pages/PageNotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Authentication />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
