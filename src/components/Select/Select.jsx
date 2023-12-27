/* eslint-disable react/prop-types */
import './Select.css';

export const Select = ({types, onOptionClick, getCards}) => {
  const onClickHandler = async (e) => {
    const cards = await getCards(e.target.value);
    onOptionClick(cards);
  };

  const render = () => {
    if (types) {
      const items = types.map((type, index) => {
        return (
          <option key={index} className='select_option'>
            {type}
          </option>
        );
      });

      return items;
    } else {
      return null;
    }
  };

  const elements = render();

  return (
    <select className='select' onChange={(e) => onClickHandler(e)}>
      Select
      {elements}
    </select>
  );
};
