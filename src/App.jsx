import './index.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Jobs from './components/jobs/jobs';
import PageNotFound from './components/pagenotfound/notfound';
import ProtectRoute from './components/protectedRoute/protectRoute';
import JobDetail from './components/jobdetail/jobDetaile';

const App = ()=>{


  return (

      <>

          <Routes>

            <Route path='/' element={<ProtectRoute Component={Home}/>}></Route>
            <Route path='/jobs' element={<ProtectRoute Component={Jobs}/>}></Route>
            <Route path='/jobs/:id' element={<ProtectRoute Component={JobDetail}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/*' element={<PageNotFound/>}></Route>

          </Routes>

      </>

  )
}

export default App;