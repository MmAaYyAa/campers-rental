
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import CamperDetailsPage from '../pages/CamperDetailsPage';
import Favorites from '../pages/Favorites';
import NotFoundPage from '../pages/NotFoundPage';

const  App = () => {
  return (
    <>
    
    <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
    
    </>
  );
};

export default App;
