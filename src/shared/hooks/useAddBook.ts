import { useContext } from 'react';
import { addBookContext } from '../../context/addBookContext';

export const useAddBook = () => {
  const context = useContext(addBookContext);
  if (!context) {
    throw new Error('useAddBook must be used within an AddBookProvider');
  }
  return context;
};
