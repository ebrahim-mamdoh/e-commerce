import React from 'react';
import style from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <div className={style.notFoundContainer}> {/* Updated */}
        <div className={style.error}>
          <span>4</span>
          <span>
            <div className={style.circle}></div>
          </span>
          <span>4</span>
        </div>
        <h1 className={style.message}>Oops! Page not found</h1>
        <p className={style.description}>
          It looks like the page you're looking for doesn't exist. Let's get you back on track!
        </p>
        <Link to="/" className={style.homeLink}>Go Home</Link>
      </div>
    </>
  );
}

export default NotFoundPage;
