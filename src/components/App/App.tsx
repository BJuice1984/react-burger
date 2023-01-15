import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import useIngridients from '../../hooks/useIngridients';
import styles from './app.module.css';

function App() {

  const {
    initialIngridients,
  } = useIngridients();

  return (
    <div className={ styles.page }>
      <div className={ styles.container }>

        <Routes>
          <Route path='/' element={<Main
            initialIngridients={initialIngridients}/>} />
        </Routes>

      </div>
    </div>
  );
}

export default App;