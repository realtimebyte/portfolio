import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { navLinks} from '@config';


const Menu = (props: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef();
  const buttonRef =  useRef();
  const navRef = useRef();

  const toggleMenu = () => {};
  return (
    <div>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <button
          onClick={toggleMenu}
          menuOpen={menuOpen}
          ref={buttonRef}
          aria-label="Menu">
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </button>

        <div aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav ref={navRef}>
            {navLinks && (
              <ol>
                {navLinks.map(({url, name}, i) => (
                  <li key={i}>
                    <Link to={url} onClick={() => setMenuOpen(false)}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ol>
            )}

            <a href="/resume.pdf" className="resume-link">
              Resume
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
};

export default Menu;
