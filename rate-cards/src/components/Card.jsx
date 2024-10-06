import styles from './Card.module.css'

function Card({ props }) {
  const { name, price, speed, description } = props;
  return (

    <div className={styles.card_container}>
      <div className={styles.card_name}>{name}</div>
      <div className={styles.card_price}>{price}</div>
      <div className={styles.card_speed}>{speed}</div>
      <div className={styles.card_description}>{description}</div>
    </div>

  )
}

export default Card