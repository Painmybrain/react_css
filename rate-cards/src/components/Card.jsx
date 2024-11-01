import { useState } from 'react';
import styles from './Card.module.css'

function Card({ props }) {
  const [clicked, setClicked] = useState('card_container');
  const { name, price, speed, description } = props;

  function getClicked() {
    setClicked('card_container_selected')
  }


  return (
    <div
      onClick={getClicked}
      className={styles[clicked]}>
      <div className={styles.card_name}>{name}</div>
      <div className={styles.card_price}>{price}</div>
      <div className={styles.card_speed}>{speed}</div>
      <div className={styles.card_description}>{description}</div>
    </div>

  )
}

export default Card