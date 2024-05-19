import { createContext, useState } from 'react';

type AddBook = {
  books: number;
  addBook: () => void;
  removeBook: () => void;
};

type Props = {
  children: React.ReactNode;
};
export const addBookContext = createContext<null | AddBook>(null);

const AddBookProvider: React.FC<Props> = ({ children }) => {
  const [books, setBooks] = useState(0);

  const addBook = () => {
    setBooks(prevState => prevState + 1);
  };
  const removeBook = () => {
    setBooks(prevState => prevState - 1);
  };

  return (
    <addBookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </addBookContext.Provider>
  );
};

export default AddBookProvider;
