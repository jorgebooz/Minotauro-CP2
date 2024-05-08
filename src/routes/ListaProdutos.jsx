import React, { useState, useEffect } from 'react';
import '../css/estilo.css';
import styles from '../css/produto.module.css'
import pencil from '../assets/pencil.png';
import trash from '../assets/trash-can.png';

function Produto() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch('dados.json');
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            const jsonData = await response.json();
            const produtos = jsonData.produto; 
            setDatabase(produtos);
        } catch (error) {
            console.error('Erro:', error.message);
        }
    }

    function createData() {
        const newProduct = {};

        newProduct.nome = prompt("Digite o nome do produto:");
        if (!newProduct.nome) {
            return; 
        }

        newProduct.qtd = parseInt(prompt("Digite a quantidade do produto:"), 10);
        if (isNaN(newProduct.qtd) || newProduct.qtd <= 0) {
            alert("Quantidade inválida!");
            return; 
        }

        newProduct.valor = parseFloat(prompt("Digite o preço do produto:"));
        if (isNaN(newProduct.valor) || newProduct.valor <= 0) {
            alert("Preço inválido!");
            return; 
        }

        newProduct.id = database.length + 1; 

        setDatabase([...database, newProduct]);
    }

    function readData() {
      return database.map(item => (
          <tr key={item.id} className={styles.trBody}>
              <td>{item.nome}</td>
              <td>{item.desc}</td>
              <td>{item.valor}</td>
              <td>
                  <img className={styles.icon} src={pencil} onClick={() => updateData(item.id)} />
              </td>
              <td>
                  <img className={styles.icon} src={trash} onClick={() => deleteData(item.id)} />
              </td>
          </tr>
      ));
  }
  

    function updateData(id) {
        const index = database.findIndex(item => item.id === id);
        if (index !== -1) {
            const newProduct = {};

            newProduct.nome = prompt("Digite o novo nome do produto:");
            if (!newProduct.nome) {
                return; 
            }

            newProduct.qtd = parseInt(prompt("Digite a nova quantidade do produto:"), 10);
            if (isNaN(newProduct.qtd) || newProduct.qtd <= 0) {
                alert("Quantidade inválida!");
                return; //
            }

            newProduct.valor = parseFloat(prompt("Digite o novo preço do produto:"));
            if (isNaN(newProduct.valor) || newProduct.valor <= 0) {
                alert("Preço inválido!");
                return;
            }

            const updatedDatabase = [...database];
            updatedDatabase[index] = { ...database[index], ...newProduct };
            setDatabase(updatedDatabase);
        }
    }

    function deleteData(id) {
        const updatedDatabase = database.filter(item => item.id !== id);
        setDatabase(updatedDatabase);
    }

    return (
      <div className={styles.Container}>
          <h1 className='title'>Tabela de Produtos</h1>
          <table>
              <thead>
                  <tr className={styles.trHeader}>
                      <th className={styles.headerItem} >Produto</th>
                      <th className={styles.headerItem} >Descrição</th>
                      <th className={styles.headerItem} >Preço</th>
                      <th className={styles.headerItem} >Editar</th>
                      <th className={styles.headerItem} >Deletar</th>
                  </tr>
              </thead>
              <tbody className={styles.tableBody}>
                  {readData()}
              </tbody>
          </table>
          <div className={styles.buttonCadastro}>
              <button onClick={createData}>Cadastrar produto</button>
          </div>
      </div>
  );  
}

export default Produto;
