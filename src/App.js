import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Footer from './component/layout/Footer'
import Alert from './component/layout/Alert'
import Navbar from './component/layout/Navbar'
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar/>
            <main className='container mx-auto px-3 pb-12'>
              <Alert/>
              <Routes>
                <Route path ='/' element={<Home/>}/>
                <Route path ='/about' element={<About/>}/>
                <Route path ='/notfound' element={<NotFound/>}/>
                <Route path ='/*' element={<NotFound/>}/>
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider> 
    
  );
}

export default App;
