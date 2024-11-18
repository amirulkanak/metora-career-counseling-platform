import { NavLink } from 'react-router-dom';
import mentoraLogo from '../assets/images/mentora-logo.png';

const Navbar = () => {
  return (
    <nav className="max-width-wrapper mt-5 flex items-center justify-between">
      {/* Logo */}
      <NavLink to={'/'} className="w-40">
        <img src={mentoraLogo} alt="Mentora Logo" />
      </NavLink>

      {/* Links */}
      <ul className="text-base text-clr-shark font-normal md:flex items-center justify-between gap-4">
        <NavLink to={'/'} className="">
          Home
        </NavLink>
        <NavLink to={'/404'}>404</NavLink>
        <NavLink
          to={'/auth/login'}
          className="btn bg-clr-alabaster hover:bg-eminence-700 hover:text-clr-alabaster">
          Login
        </NavLink>
        <NavLink
          to={'/auth/register'}
          className="btn bg-eminence-700 hover:bg-eminence-600 text-clr-alabaster">
          Register
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
