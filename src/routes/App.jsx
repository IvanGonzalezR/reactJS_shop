import React from 'react'
import '@styles/global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@containers/Layout';
import { CreateNewPassword } from '@pages/CreateNewPassword';
import { RecoveryPassword } from '@pages/RecoveryPassword';
import { Home } from '@pages/Home';
import { NotFound } from '@pages/NotFound';
import { Login } from '@pages/Login';
import { CreateAccount } from '@pages/CreateAccount';
import { SendEmail } from '@pages/SendEmail';
import { MyAccount } from '@pages/MyAccount';
import { Checkout } from '@pages/Checkout';
import { Orders } from '@pages/Orders';
import { AppContext } from '@context/AppContext'
import { useInitialState } from '@hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/recovery-password' element={<RecoveryPassword />} />
              <Route exact path='/send-email' element={<SendEmail />} />
              <Route exact path='/new-password' element={<CreateNewPassword />} />
              <Route exact path='/account' element={<MyAccount />} />
              <Route exact path='/signup' element={<CreateAccount />} />
              <Route exact path='/checkout' element={<Checkout />} />
              <Route exact path='/orders' element={<Orders />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App