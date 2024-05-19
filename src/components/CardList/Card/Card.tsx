import { useState } from 'react';
import { useAddBook } from '../../../shared/hooks/useAddBook';
import scss from './card.module.scss';

const Card: React.FC = () => {
  const { addBook, removeBook } = useAddBook();
  const [count, setCount] = useState(0);

  const counterBook = () => {
    addBook();
    setCount(prevState => prevState + 1);
  };

  const deleteBook = () => {
    removeBook();
    setCount(prevState => prevState - 1);
  };

  return (
    <li className={scss.card_item}>
      <h2>Featured</h2>
      <h3>Special title treatment</h3>
      <p>
        With supporting text below as a natural lead-in to additional content.
      </p>
      <div className={scss.btn_wrapper}>
        <button className={scss.btn} onClick={counterBook}>
          {count ? 'Add more' : 'Buy book'}
        </button>
        {count > 0 && (
          <button className={scss.btn} onClick={deleteBook}>
            Remove book
          </button>
        )}
        {count > 0 && <p className={scss.count_book}>{count}</p>}
      </div>
    </li>
  );
};
export default Card;
