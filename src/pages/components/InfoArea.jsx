import { FaPlane, FaUndoAlt, FaSearch } from 'react-icons/fa';
import AirportInfo from './AirportInfo';
import { Company } from './company';


export const InfoArea = (props) => {
  const { fromAirport } = props;

  return (
    <div className='infoArea'>
      <Company />
      <div className='buttonArea'>
        <button className='ButtonClickGetToAirportData' onClick={onClickGetToAirportData}>
          <FaSearch size={18} color={'#414b5a'} />
        </button>
        <button className='ButtonReset' onClick={onClickReset}>
          <FaUndoAlt size={18} color={'#414b5a'} />
        </button>
      </div>
    </div>
  );
};
