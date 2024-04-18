import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORT-COMPONENTS
import Footer from '@/components/Footer';

// IMPORT-PAGES
import Explore from '@/pages/Explore';
import Offers from '@/pages/Offers';
import Profile from '@/pages/Profile';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import ForgotPassword from '@/pages/ForgotPassword';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <>
      <Footer />

      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
