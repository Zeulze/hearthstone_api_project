/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import {HearthStoneApi} from '../../utils/api/api';
import {useEffect, useState} from 'react';
import {languagesTypes} from '../../consts/languages';
import {Cards} from '../Cards/Cards';
import {Select} from '../Select/Select';

function App() {
  const [dataClass, setDataClass] = useState([]);
  const [classTypes, setClassTypes] = useState([]);
  const [raceTypes, setRaceTypes] = useState([]);
  const [qualityTypes, setQualityTypes] = useState([]);
  const [typeTypes, setTypeTypes] = useState([]);

  const service = HearthStoneApi(languagesTypes.en);

  const getMainInfo = async () => {
    const info = await service.getInfo();
    setClassTypes(() => [...info.classes]);
    setRaceTypes(() => [...info.races]);
    setQualityTypes(() => [...info.qualities]);
    setTypeTypes(() => [...info.types]);

    const allCards = await service.getCardByRace(`${info.races[2]}`);

    setDataClass(() => [...allCards]);
  };

  const onDataClassChange = (data) => {
    setDataClass(() => [...data]);
  };

  useEffect(() => {
    getMainInfo();
  }, []);

  return (
    <main>
      <div className='panel'>
        <div className='select-wrapper'>
          <Select
            types={classTypes}
            onOptionClick={onDataClassChange}
            getCards={service.getCardByClass}
          />
          <Select
            types={raceTypes}
            onOptionClick={onDataClassChange}
            getCards={service.getCardByRace}
          />
          <Select
            types={qualityTypes}
            onOptionClick={onDataClassChange}
            getCards={service.getCardByQuality}
          />
          <Select
            types={typeTypes}
            onOptionClick={onDataClassChange}
            getCards={service.getCardByType}
          />
        </div>
      </div>
      <div className='wrapper-content'>
        <Cards data={dataClass} />
      </div>
    </main>
  );
}

export default App;

