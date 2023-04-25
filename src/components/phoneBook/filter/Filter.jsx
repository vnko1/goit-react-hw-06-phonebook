import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/slices';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.container}>
      <span>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={({ currentTarget: { value } }) => dispatch(setFilter(value))}
        value={filter}
      />
    </label>
  );
};

export { Filter };
