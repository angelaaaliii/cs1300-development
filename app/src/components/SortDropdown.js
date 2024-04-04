import './SortDropdown.css';
import { Select } from '@chakra-ui/react';

export default function SortDropdown({onClick}) {
  return (
    <div className="dropdown" aria-label="sort by titles alphabetically dropdown">
      <Select onChange={onClick} placeholder='Sort by: Featured'>
        <option value='sort titles alphabetically'>Title - Alphabetical</option>
      </Select>
    </div>
  );
}
