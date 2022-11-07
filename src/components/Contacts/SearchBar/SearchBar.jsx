import { Input } from './SearchBar.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter-redux/filter-slice';
import { selectFilter } from 'redux/selectors';

const SearchBar = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Input
      type="text"
      name="filter"
      placeholder=" Find contacts by Name"
      required
      value={filter}
      onChange={e => dispatch(setFilter(e.currentTarget.value))}
    />
  );
};

export default SearchBar;
