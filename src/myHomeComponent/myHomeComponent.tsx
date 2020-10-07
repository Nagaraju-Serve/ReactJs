import React from 'react';
import styles from './myHomeComponent.module.scss';

const myHomeComponent: React.FC = () => (
  <div className={styles.myHomeComponent} data-testid="myHomeComponent">
    myHomeComponent Component
  </div>
);

export default myHomeComponent;
