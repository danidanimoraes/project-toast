import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};


function Toast({variant, text, onDismiss}) {
  const IconToRender = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconToRender size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {variant} -
        </VisuallyHidden>
        {text}
      </p>
      <button className={styles.closeButton} onClick={onDismiss}>
        <X size={24} aria-label="Dismiss message" aria-live="off"/>
      </button>
    </div>
  );
}

export default Toast;
