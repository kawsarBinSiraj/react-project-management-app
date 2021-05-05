import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Index'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Provider } from 'react-redux';
import store from './store/Index';

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Provider store={store}>
          <div id="app">
            <Header />
            <Sidebar />
            <div id="dashboard">
              <Routes />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
