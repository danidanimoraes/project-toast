import React from 'react';

import Button from '../Button';


import styles from './ToastPlayground.module.css';

import  { ToastContext } from '../ToastProvider';
import { useEscapeKey } from '../../hooks/useEscapeKey';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const {  add , reset} = React.useContext(ToastContext);
  
  /* se a stack mudar: 
    provider é rerenderizado 
    -> reset é novo 
    -> passado novo valor pro hook 
    -> vai remover e add listener de novo :/

    solution: useCallback em volta do reset*/
  useEscapeKey(reset);

  const handleChangeMessage = (e) => {
    setMessage(e.target.value)
  };

  const handleChangeVariant = (e) => {
    setVariant(e.target.value);
  }

  const handleClickButton = () => {
    add(variant, message)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>  

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={handleChangeMessage}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.radioWrapper}`}
          >
              {VARIANT_OPTIONS.map((item) => {
                return (
                    <label htmlFor={`variant-${item}`} key={item}>
                      <input
                      id={`variant-${item}`}
                      type="radio"
                      name="variant"
                      value={item}
                      checked={variant === item}
                      onChange={handleChangeVariant}
                    />
                    {item}
                  </label>
               )
              })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={handleClickButton}>Pop Toast!</Button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ToastPlayground;
