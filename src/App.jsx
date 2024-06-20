
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (

    <BrowserRouter>
      <NavBar />
      <div className='flex flex-col flex-auto relative z-0 mx-56 mt-8'>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/products/:category' element={<ItemListContainer />} />
          <Route path='/products/detail/:id' element={<ItemDetailContainer />} />
        </Routes>
      </div>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
