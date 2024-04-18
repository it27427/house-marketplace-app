import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from '@/pages/Explore';
import Offers from '@/pages/Offers';
import Profile from '@/pages/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
      </Routes>
    </Router>
  );
};

export default App;
