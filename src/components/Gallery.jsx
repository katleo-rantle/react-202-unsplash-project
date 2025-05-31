import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAppContext } from '../utils/context';

const url =
  `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;
  console.log(import.meta.env.VITE_API_KEY);
  

const Gallery = () => {

  const { searchTerm } = useAppContext();
  const { data, error, isLoading } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(`${url}&query=${searchTerm}`);
      return data;
    },
  });
  if (isLoading) {
    return (
      <section className='image-container'>
        <p>isLoading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className='image-container'>
        <p>Sorry there was an error</p>
      </section>
    );
  }
  const results = data.results;
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <p>No search results found</p>
      </section>
    );
  }

  console.log(results);

  return (
    <section className='image-container'>
      {results.map((img) => {
        const url = img?.urls?.raw;
        return (
          <img
            src={url}
            alt={img.alt_description}
            key={img.id}
            className='img'
          />
        );
      })}
    </section>
  );
};
export default Gallery;
