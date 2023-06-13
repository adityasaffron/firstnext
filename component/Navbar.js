import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
          <Link href="/" passHref>
          Home
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/catalog" passHref>
            Catelog
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/contact" passHref>
            Contact
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/login" passHref>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
