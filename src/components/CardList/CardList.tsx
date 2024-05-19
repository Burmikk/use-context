import scss from './cardList.module.scss';
import Card from './Card/Card';

const CardList: React.FC = () => {
  return (
    <section>
      <ul className={scss.list}>
        <Card />
        <Card />
        <Card />
      </ul>
    </section>
  );
};
export default CardList;
