import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './HeaderLayout.module.css';
export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = () => {
  const router = useRouter();
  const [navBg, setNavBg] = React.useState('mainNav');
  React.useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setNavBg('mainNav');
        break;
      case '/kim':
        setNavBg('styles.mainNav');
        break;
      case '/projecten':
        setNavBg('styles.mainNav');
        break;
      case '/contact':
        setNavBg('styles.mainNav');
        break;
      case '/posters':
        setNavBg('styles.mainNav');
        break;
      default:
        setNavBg('mainNav');
    }
  }, [router]);

  return (
    <nav>
      <div className={navBg}>
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
