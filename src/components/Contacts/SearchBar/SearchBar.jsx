import { Label, Input } from './SearchBar.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter-redux/filter-slice';
import { selectFilter } from 'redux/selectors';


const SearchBar = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by Name
      <Input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </Label>
  );
};

export default SearchBar;
