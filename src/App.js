import React from 'react';
import './App.css';
import { Route, Routes, Link} from 'react-router-dom';
import PrivateRoute from './componenets/PrivateRoute';
import LoginForm from './componenets/LoginForm';
import FriendsList from './componenets/FriendsList';
import AddFriend from './componenets/AddFriend';
import Logout from './componenets/Logout';

function App() {
  const auth = localStorage.getItem('token');

  return (
    <div className="App">
      <header className='nav-bar'>
        <h2 className='nav-header'>Friends!!!</h2>
        <Link className='nav-link' to="login">Login</Link>
        <Link className='nav-link' to="friends">Friends List</Link>
        <Link className='nav-link' to="friends/add">Add Friends</Link>
        <Link className='nav-link' to="logout">Logout</Link>
      </header>
      <Routes>
        <Route exact path='/' element={<LoginForm />}/>
        <Route exact path='/login' element={<LoginForm />}/>
        <Route exact path='/friends' element={<PrivateRoute />}>
          <Route exact path='/friends' element={<FriendsList />} /> {/** Requires authorization to access */}
        </Route>
        <Route exact path='/friends/add' element={<PrivateRoute />}>
          <Route exact path='/friends/add' element={<AddFriend />} /> {/** Requires authorization to access */}
        </Route>
        <Route exact path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
