import './AuthorDropdown.css';
import { Select } from '@chakra-ui/react';

export default function AuthorDropdown({onClick}) {
  return (
    <div className ="dropdown" aria-label="filter by author dropdown">
      <Select onChange={onClick} placeholder='All Authors'>
        <option value='Agatha Christie'>Agatha Christie</option>
        <option value='Alex Michaelides'>Alex Michaelides</option>
        <option value='Andy Weir'>Andy Weir</option>
        <option value='Charles Bukowski'>Charles Bukowski</option>
        <option value='Christina Lauren'>Christina Lauren</option>
        <option value='Eileen Chang'>Eileen Chang</option>
        <option value='Fredrik Backman'>Fredrik Backman</option>
        <option value='Jane Austen'>Jane Austen</option>
        <option value='Madeline Miller'>Madeline Miller</option>
        <option value='Martha Anne Toll'>Martha Anne Toll</option>
        <option value='Mary-Ann Tirone Smith'>Mary-Ann Tirone Smith</option>
        <option value='Min Jin Lee'>Min Jin Lee</option>
        <option value='Ocean Vuong'>Ocean Vuong</option>
        <option value='Olivie Blake'>Olivie Blake</option>
        <option value='Peng Shepherd'>Peng Shepherd</option>
        <option value='Raymond Carver'>Raymond Carver</option>
        <option value='Richard Yates'>Richard Yates</option>
        <option value='Yukio Mishima'>Yukio Mishima</option>
      </Select>
    </div>
  );
}