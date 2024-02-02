"use client"

import { Drawer } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import '../Style/Header.css';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window?.scrollY > 200;
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='main-nav' >
      <nav className={`nav ${scrolling ? 'scrolled' : ''}`}>
        <div className="brand">Dnyaneshwar Sawant</div>
        <div className="linksContainer">
          <Link
            className={`nav-links ${pathname === '/' ? 'active-link' : ''}`}
            href="/"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            className={`nav-links ${pathname === '/pages/about' ? 'active-link' : ''
              }`}
            href="/pages/about"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            className={`nav-links ${pathname === '/pages/project' ? 'active-link' : ''
              }`}
            href="/pages/project"
            onClick={onClose}
          >
            Projects
          </Link>
          <Link
            className={`nav-links ${pathname === '/pages/skills' ? 'active-link' : ''
              }`}
            href="/pages/skills"
            onClick={onClose}
          >
            Skills
          </Link>
          <Link
            className={`nav-links ${pathname === '/pages/contact' ? 'active-link' : ''
              }`}
            href="/pages/contact"
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
        <div className="menuButton" onClick={showDrawer}>
          <CgMenuGridO />
        </div>
      </nav>

      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        title="Dnyaneshwar Portfolio"
        width={'100%'}
      >
        <div className="drawer-linksContainer">
          <Link className="nav-links" href="/" onClick={onClose}>
            Home
          </Link>
          <Link className="nav-links" href="/pages/about" onClick={onClose}>
            About
          </Link>
          <Link className="nav-links" href="/pages/project" onClick={onClose}>
            Projects
          </Link>
          <Link className="nav-links" href="/pages/skills" onClick={onClose}>
            Skills
          </Link>
          <Link className="nav-links" href="/pages/contact" onClick={onClose}>
            Contact
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;