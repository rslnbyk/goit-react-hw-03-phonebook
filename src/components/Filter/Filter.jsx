import PropTypes from 'prop-types';

export const Filter = ({ onChangeFilter }) => {
  const handleChange = e => {
    onChangeFilter(e.target.value);
  };

  return (
    <label>
      Find contacts by name
      <br />
      <input type="text" name="filter" onChange={handleChange} />
    </label>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
