import NextLink from 'next/link';
import React, { useState, useEffect, useContext } from 'react';

import styles from './Navbar.module.css';

// import { NavLink, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { logout } from '../../actions/auth';
// import { getLinksFirstPostId } from '../../api/post';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import { Button } from 'rixun-ui';

//const Navbar = ({ auth: { isAuthenticated, user, loading }, logout }) => {
const Navbar = () => {
  // const [darkMode, setDarkMode] = useContext(ThemeContext);
  const [civicLink, setCivicLink] = useState('');
  const [wagoLink, setWagoLink] = useState('');  
  const [frogoLink, setFrogoLink] = useState('');
  const [ef9Link, setEF9Link] = useState('');

  // useEffect(() => {
  //   async function fetchData() {
  //     setCivicLink(await getLinksFirstPostId('Civic'));
  //     setWagoLink(await getLinksFirstPostId('Wago'));
  //     setFrogoLink(await getLinksFirstPostId('Frogo'));
  //     setEF9Link(await getLinksFirstPostId('EF9'));
  //   }
  //   fetchData();
  // }, []);

  const darkModeBtn = (
    // <div className={`themeBtnContainer ${darkMode ? 'themeBtnDarkmode' : ''} ${darkMode ? 'themeBtn-active' : ''}`} onClick={() => setDarkMode(!darkMode)}>
    //   <div className='themeBtn-button'>
    //     <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-moon themeBtn-icon'>
    //       <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
    //     </svg>
    //     <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-sun themeBtn-icon'>
    //       <circle cx='12' cy='12' r='5'></circle><line x1='12' y1='1' x2='12' y2='3'></line><line x1='12' y1='21' x2='12' y2='23'></line><line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line><line x1='18.36' y1='18.36' x2='19.78' y2='19.78'>
    //         </line><line x1='1' y1='12' x2='3' y2='12'></line><line x1='21' y1='12' x2='23' y2='12'></line><line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line><line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
    //     </svg>
    //   </div>
    // </div>
    <>
      <p>DARK THEME</p>
    </>
  );

  // const guestLinks = (
  //   <ul className='navbar-list'>
  //     <li className='navbar-item'>
  //       <Link to='/login' className='navbar-link'>
  //         <Button
  //           name='Log in'
  //           className='btn btn-success'
  //         />
  //       </Link>
  //     </li>
  //     <li className='navbar-item'>
  //       <Link to='/register' className='navbar-link'>
  //         <Button
  //           name='Sign up'
  //           className='btn btn-primary'
  //         />
  //       </Link>
  //     </li>
  //     <li className='navbar-item-themebtn'>
  //       <div className='navbar-link'>
  //         {darkModeBtn}
  //       </div>
  //     </li>
  //   </ul>
  // );

  // const userLinks = (
  //   <ul className='navbar-list'>
  //     <li className='navbar-item'>
  //       <Link to='/profile' className='navbar-link'>
  //         <Button
  //           name='Profile'
  //           className='btn btn-success'
  //         />
  //       </Link>
  //     </li>
  //     <li className='navbar-item'>
  //       <Link to='/' className='navbar-link'>
  //         <Button
  //           name='Logout'
  //           className='btn btn-primary'
  //           onClick={logout}
  //         />
  //       </Link>
  //     </li>
  //     <li className='navbar-item'>
  //       <div className='navbar-link'>
  //         {darkModeBtn}
  //       </div>
  //     </li>
  //   </ul>
  // );

  // const adminLinks = (
  //   <ul className='navbar-list'>
  //     <li className='navbar-item'>
  //       <Link to='/create-post' className='navbar-link'>
  //         <Button
  //           name='Create a Post'
  //           className='btn btn-success'
  //         />
  //       </Link>
  //     </li>
  //     <li className='navbar-item'>
  //       <Link to='/' className='navbar-link'>
  //         <Button
  //           name='Logout'
  //           className='btn btn-primary'
  //           onClick={logout}
  //         />
  //       </Link>
  //     </li>
  //     <li className='navbar-item'>
  //       <div className='navbar-link'>
  //         {darkModeBtn}
  //       </div>
  //     </li>
  //   </ul>
  // );

  return (
    <>
      <div className={styles.coverImgContainer}></div>
      <nav className={styles.navbar}>
        {/* <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button> */}
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <NextLink href='/'>
              {/* <i className='fas fa-home fa-2x'></i> */}
              <p>HOME</p>
            </NextLink>
          </li>
        </ul>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <NextLink href={`/viewpost/Civic/${civicLink}`}>
              Civic
            </NextLink>
          </li>
          <li className={styles.navbarItem}>
            <NextLink href={`/viewpost/Wago/${wagoLink}`}>
              Wago
            </NextLink>
          </li>
          <li className={styles.navbarItem}>
            <NextLink href={`/viewpost/Frogo/${frogoLink}`}>
              Frogo
            </NextLink>
          </li>
          <li className={styles.navbarItem}>
            <NextLink href={`/viewpost/EF9/${ef9Link}`}>
              EF9
            </NextLink>
          </li>
        </ul>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItemThemebtn}>
            <div className={styles.navbarLink}>
              {darkModeBtn}
            </div>
          </li>
        </ul>
        {/* {!loading && <>{isAuthenticated ? userLinks : guestLinks}</>} */}
        {/* {!loading && (
          <>
            {' '}
            {isAuthenticated && user.userType === 'admin' ? adminLinks
              : isAuthenticated && user.userType === 'user' ? userLinks
              : guestLinks}{' '}
          </>
        )} */}
      </nav>
    </>
  )
};

// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { logout })(Navbar);

export default Navbar;