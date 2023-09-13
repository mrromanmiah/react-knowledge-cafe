import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  return (
    <>

      <Header></Header>
      <div className='flex items-center mx-4 p-4'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
