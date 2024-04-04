import './GenreDropdown.css';
import { Select } from '@chakra-ui/react';

export default function GenreDropdown({onClick}) {
  return (
    <div className="dropdown" aria-label="filter by genre dropdown">
      <Select onChange={onClick} placeholder='All Genres'>
        <option value='Fiction'>Fiction</option>
        <option value='Memoir'>Memoir</option>
        <option value='Fantasy'>Fantasy</option>
        <option value='Thriller'>Thriller</option>
        <option value='Romance'>Romance</option>
        <option value='Historical Fiction'>Historical Fiction</option>
        <option value='Mystery'>Mystery</option>
        <option value='Science Fiction'>Science Fiction</option>
      </Select>
    </div>
  );
}