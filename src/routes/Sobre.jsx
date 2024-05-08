import {} from 'react';
import '../css/estilo.css';
import styles from '../css/sobre.module.css'
import foguete from '../assets/foguete.svg'
import idea from '../assets/idea.svg'
import completecircle from '../assets/completecircle.svg'

function Sobre() {
  return (
    <>
      <section className={styles.sobre}>
        <div className={styles.header}>
          <div className={styles.tituloSobre}>
            <h1><a className='azul'>Quem</a> somos nós?</h1>
          </div>
          
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

      <div className={styles.cards}>
        <div className={styles.card}>
            <img src={foguete} alt="foguetada" className={styles.image} />
            <p className={styles.cardTitle}>Lorem Ipsum is simply</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className={styles.card} >
            <img src={idea} alt="foguetada" className={styles.image}/>
            <p className={styles.cardTitle}>Lorem Ipsum is simply</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className={styles.card}>
            <img src={completecircle} alt="foguetada" className={styles.image}/>
            <p className={styles.cardTitle}>Lorem Ipsum is simply</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
      </div>
        
        
      </section>


    </>
  );
}
export default Sobre;
