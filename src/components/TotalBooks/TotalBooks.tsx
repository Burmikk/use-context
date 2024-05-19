import { useAddBook } from '../../shared/hooks/useAddBook';
import scss from './totalBooks.module.scss';

const TotalBooks: React.FC = () => {
  const { books } = useAddBook();
  return (
    <section>
      <h2>Total: {books}</h2>
    </section>
  );
};
export default TotalBooks;
