import { Outlet, Link } from 'react-router-dom';
import React from 'react';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/array">Array</Link>
          </li>
          <li>
            <Link to="/stack">Stack</Link>
          </li>
          <li>
            <Link to="/queue">Queue</Link>
          </li>
          <li>
            <Link to="/set">Set</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <style jsx>{`
        nav {
          background-color: #f1f1f1;
          overflow: hidden;
          padding: 0.5rem;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        li {
          padding: 0.5rem;
        }

        a {
          display: block;
          color: #000;
          text-align: center;
          padding: 0.5rem;
          text-decoration: none;
        }

        @media screen and (max-width: 768px) {
          ul {
            justify-content: center;
          }

          li {
            padding: 0.5rem 1rem;
          }
        }

        @media screen and (max-width: 480px) {
          li {
            flex-basis: 100%;
          }

          a {
            padding: 1rem 0;
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
