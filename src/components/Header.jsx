import React, { useState } from 'react';
import Nav from './Nav';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { signOut } from '../actions/authActions';
import Swal from 'sweetalert2';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { value: '/home', content: 'Home', id: 'Home', active: true, roles:['default', 'logged'] },
    { value: '/cities', content: 'Cities', id: 'Cities', active: false, roles:['default', 'logged'] },
    { value: '/signin', content: 'Sign In', id: 'Sign In', active: false, roles:['default']  },
    { value: '/signup', content: 'Sign Up', id: 'Sign Up', active: false, roles:['default']  },
  ];
  const { user } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch()

  function logout() {
    Swal.fire({
      title: 'Are you sure?',
  text: 'Do you want to log out?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#FF9925',
  cancelButtonColor: '#FF0022',
  confirmButtonText: 'Yes, log out',
  cancelButtonText: 'Cancel',
  customClass: {
    popup: 'custom-sweetalert-popup', // Clase personalizada para el cuadro de diálogo
  },
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success('Thank you. Okay, bye-bye now. Bye-bye. Bye. Okay. Are they all gone? Is every -- is everybody gone? hehehe, Huh? Good. Oh, my gosh, my cheeks are killing me. I can not keep smiling like this anymore. I am exhausted. I think I need a break. A little break. Okay. Phew!', {
          autoClose: 5000,
        });
        dispatch(signOut());
      }
    });
  }

  return (
    <header className='flex h-[20vh] items-center px-5 justify-between bg-slate-800 bg-opacity-50 sm:h-[11vh]'>
      <section className='flex justify-between items-center w-full'>
        <div className='flex items-center capitalize sm:uppercase'>
          <h1
            className='font-semibold sm:text-xl lg:text-2xl text-orange-400'
            style={{
            textShadow:
              '0 0 10px rgba(0, 0, 0, 1), 0 0 15px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1)',
            animation: 'shine 2s linear infinite',
          }}
          >
            <em>My Tinerary</em>
          </h1>
          <Logo />
        </div>
        <div className='sm:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)} 
            className='text-xl text-white'
          >
            ☰
          </button>
        </div>
        <Nav links={links} menuOpen={menuOpen} />
        <div>
          {user?.photourl && (
            <div onClick={logout} className="cursor-pointer">
            <img src={user.photourl} alt="user photourl" className="w-10 h-10 rounded-full ml-2 transition-all duration-500" />
          </div>
          )}
          {/* {user ? (
            <button onClick={logout} className="text-xl text-gray-300 hover:text-orange-300 transition-all duration-500 ml-2">
              Logout
            </button>
          ) : null} */}
        </div>
      </section>
    </header>
  );
};

export default Header;