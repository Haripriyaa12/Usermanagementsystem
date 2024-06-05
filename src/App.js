import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Homepage from './Components/Homepage';

import Aboutpage from './Components/Aboutpage';

import Contactpage from './Components/Contactpage';

import Navbar from './Layout/Navbar';

import PageNotFound from './Components/PageNotFound';

//For routing b/w components

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AddUser from './User/AddUser';

import EditUser from './User/EditUser';

import ViewUser from './User/ViewUser';



function App() {

  return (

    <Router>

      <div>

        <Navbar />

        <Routes>

          <Route exact path="/" element={<Homepage />} />

          <Route exact path="/about" element={<Aboutpage />} />

          <Route exact path="/contact" element={<Contactpage />} />

          <Route path="*" element={<PageNotFound />} />

          <Route exact path="/users/add" element={<AddUser />} />

          <Route exact path="/users/edit/:userId" element={<EditUser />} />

          {/* //Dynamic Routing (Edit user) */}

          <Route exact path="/users/view/:userId" element={<ViewUser />} />

        </Routes>

      </div>

    </Router>

  );

}



export default App;
