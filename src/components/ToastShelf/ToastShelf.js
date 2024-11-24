import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({items, onCloseItem}) {
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {items.map((item, index) => {
        return (
        <li className={styles.toastWrapper} key={`items-${index}`}>
        <Toast variant={item.variant} text={item.message} onDismiss={() => onCloseItem(index)}/>
      </li>)
      })}
    </ol>
  );
}

export default ToastShelf;
