import React from 'react';

import styles from '../styles/components/DevForm.module.scss'

function DevForm() {

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.inputBlock}>
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          name="github_username"
          id="github_username"
          required
        />
      </div>

      <div className={styles.inputBlock}>
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputBlock}>
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            required
          />
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            required
          />
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export {DevForm};
