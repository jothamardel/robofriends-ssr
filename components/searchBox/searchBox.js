
const SearchBox = ({ searchChange }) => (
  <input 
    type='search' 
    placeholder='search robots'
    className='pa3 ba b--green bg-lightest-blue shadow-5'
    onChange={searchChange}
  />
);

export default SearchBox;
