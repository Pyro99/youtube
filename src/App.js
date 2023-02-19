import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import {createBrowserRouter } from 'react-router-dom';
import Watch from './components/Watch';
import MainContainer from './components/MainContainer';

export const appRouter = createBrowserRouter([{
  path: "/",
  element : <App />,
  children :[{
    path: "/",
    element : <MainContainer />
  },
  {
    path:"watch",
    element :<Watch />
  }

]}]);


function App() {
  return (
    <Provider store={store}> 
    <div>
      <Header />
      <Body />
    </div>
    </Provider>
  );
}


export default App;

// Header
// body
//  sidebar
//  main container
//   button list
//   video container
