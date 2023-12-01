/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import {HearthStoneApi} from '../../utils/api/api';
import {useEffect} from 'react';
import {languagesTypes} from '../../consts/languages';

function App() {
  const service = HearthStoneApi(languagesTypes.en);

  const test = async () => {
    const infoResult = await service.getCardByType('minion');
    console.log(infoResult);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          test();
        }}
      >
        Проверить реквесты
      </button>
    </>
  );
}

export default App;

