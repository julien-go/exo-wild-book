import styles from'./App.module.css';
import Wilder from './components/Wilder/Wilder';



function App() {

  return (
    <div className="App">
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>Wilders Book</h1>
        </div>
        
      </header>
      <main className={styles.body}>
      <h2>Wilders</h2>
        <section className={styles.card_row}>
          <Wilder name={'jean'}/>
          <Wilder name={'john'}/>
          <Wilder name={'jane'}/>
          <Wilder name={'jean'}/>
          <Wilder name={'john'}/>
        </section>

      </main>
      <footer>
        <div className={styles.container}>
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
