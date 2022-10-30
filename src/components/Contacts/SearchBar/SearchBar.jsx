import { Label, Input } from './SearchBar.styled';

const SearchBar = () => {
  return (
    <Label>
      Find contacts by Name
      <Input type="text" name="filter" required />
    </Label>
  );
};

export default SearchBar;