import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import TruckFeatures from '../components/TruckFeatures/TruckFeatures';
import TruckReviews from '../components/TruckReviews/TruckReviews';

 const HomePage = lazy(() => import('../pages/HomePage'));
 const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
 const TruckDetailsPage = lazy(() =>
   import('../pages/TruckDetailsPage/TruckDetailsPage')
 );
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const App = () => {
  return (
  <>
    <Routes>
    <Route path="/" element={<Layout />}>
         <Route index element={<HomePage />} />
         <Route path="catalog" element={<CatalogPage />}/>
         <Route path="catalog/:id" element={<TruckDetailsPage />}>
           <Route path="features" element={<TruckFeatures/>}/>
           <Route path="reviews" element={<TruckReviews/>}/>
         </Route>
         <Route path="*" element={<NotFoundPage />} />
        </Route>
        </Routes>
    </>
  );
};

export default App;
