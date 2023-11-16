import React, { Fragment, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { useQuery } from '@tanstack/react-query'

function App() {



  // useEffect(() => {
  //   fetchApi()
  // }, [])
  // console.log('ok', process.env.REACT_API_URL_BACKEND)


  // const fetchApi = async () => {
  //   const res = await axios.get(`http://localhost:3001/api/product/getAll`)
  //   return res.data
  // }
  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
  // console.log('query', query)
  return (
    <div>

      <Router>
        <Routes>
          {
            routes.map((route) => {
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              return (
                <Route key={route.path} path={route.path} element={

                  <Layout>
                    <Page />
                  </Layout>


                } />
              )
            })
          }
        </Routes>
      </Router>
    </div>
  )
}
export default App