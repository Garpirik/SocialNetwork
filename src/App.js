import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store, { addPost, updateNewPostText } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { render } from '@testing-library/react';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Profile from './components/Profile/Profile';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

/* eslint-disable */
const App = (props) =>{
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar/>
      
      <div className='app-wrapper-content'>
      <Routes>
    {/* <Route path = '/' element={<Profile   />} /> */}
    <Route path = '/profile/:userId?' element ={<ProfileContainer />} />
    <Route path='/dialogs/*' element={<DialogsContainer state={store}  />}/>
      <Route path = '/users/*' element={<UsersContainer />}/>
      <Route path='/login' element={<LoginPage/>}/>
      
      </Routes>
      {/* <Dialogs/> */}
        {/* <Profile/> */}
        {/* profile profileData={props.state.profileData} store={props.store}  dispatch={props.dispatch}  */}
      </div>
    
  </div>
  </BrowserRouter>
  );
}




export default App;
  