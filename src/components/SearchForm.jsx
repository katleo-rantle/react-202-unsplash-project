import { useAppContext } from '../utils/context';

const SearchForm = () => {
  const { setSearchTerm } = useAppContext();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }

    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleFormSubmit}>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input search input'
        />
        <button className='btn btn-submit'>submit</button>
      </form>
    </section>
  );
};
export default SearchForm;
