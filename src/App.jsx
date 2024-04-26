import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORT-COMPONENTS
import Footer from '@/components/Footer';
import PrivateRoute from '@/components/PrivateRoute';

// IMPORT-PAGES
import Explore from '@/pages/Explore';
import Offers from '@/pages/Offers';
import Profile from '@/pages/Profile';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import ForgotPassword from '@/pages/ForgotPassword';
import NotFound from '@/pages/NotFound';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Router>
        <Footer />

        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
};

export default App;
