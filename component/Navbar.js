import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
          <Link href="/" passHref>
            <span className={styles.navbarLink}>Home</span>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/catalog" passHref>
            <span className={styles.navbarLink}>Catalog</span>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/contact" passHref>
            <span className={styles.navbarLink}>Contact</span>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/login" passHref>
            <span className={styles.navbarLink}>Login/Register</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
