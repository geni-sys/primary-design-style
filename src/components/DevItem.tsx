import React from 'react';

import styles from '../styles/components/DevItem.module.scss';

function DevItem() {
  return (
    <li className={styles.devItem}>
      <header>
        <img src='https://github.com/eliasallex.png' alt="elias alexandre" />
        <div className={styles.userInfo}>
          <strong>elias alexandre</strong>
          <span>ReactJS, Python, Typescript</span>
        </div>
      </header>
      <p>
      Programmer. Focused on technologies around the JS language.
      </p>
      <a href="https://github.com/eliasallex">Acessar perfil no Github</a>
    </li>
  );
}

export  {DevItem};
