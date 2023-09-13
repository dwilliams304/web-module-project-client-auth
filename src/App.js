import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import LoginForm from './componenets/LoginForm';
import FriendsList from './componenets/FriendsList';
import AddFriend from './componenets/AddFriend';

function App() {
  const handleChange = e => {
    const {name, value} = e.target;
  }
  const handleSubmit = e => {
    e.preventDefault();
  }


  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <LoginForm handleChange={handleChange} handleSubmit={handleSubmit}/>
        }/>

        <Route exact path='/login' element={
          <LoginForm handleChange={handleChange} handleSubmit={handleSubmit}/>
        }/>

        <Route exact path='/friends' element={<FriendsList />} />
        <Route exact path='/friends/add' element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
