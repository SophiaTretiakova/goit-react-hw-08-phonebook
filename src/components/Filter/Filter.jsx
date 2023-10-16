import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };
  return (
    <div>
      <input
        id="outlined-basic"
        label="search"
        variant="outlined"
        onChange={evt => {
          handleFilterChange(evt.target.value);
        }}
        type="text"
        placeholder="Find contact by name"
      />
    </div>
  );
};
export default Filter;
