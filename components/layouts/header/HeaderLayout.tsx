import Link from 'next/link';
import React from 'react';
import styles from './HeaderLayout.module.css';

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = () => {
  return (
    <nav>
      <div className={styles.mainNav}>
        <Link href="/">
          <a className={styles.iconLogoIcon2} />
        </Link>
        <Link href="/kim">
          <a className={styles.balloon}>KIM</a>
        </Link>
        <Link href="/projecten">
          <a className={styles.balloon}>WORK</a>
        </Link>
        <Link href="/contact">
          <a className={styles.balloon}>MEET</a>
        </Link>
        <Link href="/posters">
          <a className={styles.balloon}>MORE</a>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderLayout;
