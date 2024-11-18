import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import mentoraLogo from '../assets/images/mentora-logo.png';
import { LiaAlignLeftSolid } from 'react-icons/lia';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="max-width-wrapper relative mt-5 flex items-center justify-between py-5 lg:py-0">
      {/* Logo */}
      <NavLink to={'/'} className="w-40">
        <img src={mentoraLogo} alt="Mentora Logo" />
      </NavLink>

      <div>
        <button
          onClick={() => setOpen(!open)}
          className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-eminence-500 focus:ring-2 lg:hidden shadow-btn border-clr-minsk border`}>
          <LiaAlignLeftSolid className="text-4xl" />
        </button>

        <div
          className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-eminence-300 lg:bg-transparent px-6 py-5 lg:px-0 lg:py-0 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
            !open && 'hidden'
          } `}>
          {/* Links */}
          <ul className="text-base text-clr-shark font-normal flex flex-col lg:flex-row items-center justify-between gap-4">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
