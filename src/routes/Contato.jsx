import {} from 'react';
import '../css/estilo.css';
import styles from '../css/contato.module.css'

function Contato() {
  return (
    <>
    <div className={`${styles.container} ${styles.bgImage}`}>
      <div className={styles.main}>
          <div className={`${styles.contatoTop} ${styles.azul}`}>
              <h1>PORTAL</h1>
              <h1>DO CLIENTE</h1>
              <p>Como podemos <a>te ajudar?</a></p>
          </div>
              
              <div className={styles.contatoCard}>
                  <p className={styles.titulo}>MEUS PEDIDOS</p>
                  <p className={styles.cardText}><a class="azul">ᐳ</a>Acompanhar meus pedidos</p>
                  <p className={styles.cardText}><a class="azul">ᐳ</a>Histórico de pedidos</p>
              </div>
              <div className={styles.contatoCard}>
                  <p className={styles.titulo}>TROCAS & CANCELAMENTO</p>
                  <p className={styles.cardText}><a class="azul">ᐳ</a>Cancelar um pedido</p>
                  <p className={styles.cardText}><a class="azul">ᐳ</a>Trocar um pedido</p>
              </div>
              <div className={styles.contatoCard}>
                  <p className={styles.titulo}>MEUS DADOS</p>
                  <p className={styles.cardText}><a class="azul">ᐳ</a>Cancelar um pedido</p>
                  <p className={styles.cardText}><a class="azul">ᐳ</a>Trocar um pedido</p>
              </div>
      </div>
      
    </div>
      
    </>
  );
}
export default Contato;