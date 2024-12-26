import Header from '../Header/Header';
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <>
       <Header/>
    <Suspense fallback={<Loader/>}>
    <Outlet/>
    </Suspense>
    </>
  );
};

export default Layout;
