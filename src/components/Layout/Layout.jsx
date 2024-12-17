import { NavLink,Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <> 
        <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li> <NavLink to="/catalog">Catalog</NavLink></li>
    <li> <NavLink to="/favorites">Favorites</NavLink></li>
  </ul>
  <main>
  <Outlet/>
  </main>
  </>
    )
}

export default Layout