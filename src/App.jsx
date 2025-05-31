import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </div>
  );
};
export default App;
