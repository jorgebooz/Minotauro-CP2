import {} from 'react';
import '../css/estilo.css'
import styles from '../css/home.module.css'
import jordan from "../assets/jordan.svg"
import colecoes from '../assets/colecoes.svg'

function Home() {
  return (
    <>
      <div className={styles.homeMain}>

        <div className="jordan">
          <img src={jordan} alt="Jordan" className={styles.homeImage}/>

          <a href="/produtos" className={styles.btn}>
            MAIS PRODUTOS &#8594;
          </a>       
        </div>

        <img src={colecoes} alt="colecoes" className={styles.homeImage}/>

      </div>
    </>
  );
}

export default Home;
