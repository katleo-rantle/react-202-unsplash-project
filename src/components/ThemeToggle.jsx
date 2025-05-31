import { useAppContext } from '../utils/context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useAppContext();


  return (
    <section className='toggle-container'>
      <button
        type='button'
        className='dark-toggle'
        onClick={toggleDarkTheme}
      >
        {isDarkTheme ? (
          <BsFillMoonFill className='toggle-icon' />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
