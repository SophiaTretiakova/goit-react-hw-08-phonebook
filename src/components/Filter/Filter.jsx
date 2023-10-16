import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();
  // const handleFilterChange = event => {
  //   const value = event.target.value;
  //   dispatch(setFilter(value));
  // };
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
        placeholder="Find contact by name"
      />
    </div>
  );
};
export default Filter;
