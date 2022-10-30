import img from '../../img/cat.jpg';
import { NotFoundTitle, NotFoundImg, NotFoundText } from './NotFound.styled';
const NotFound = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <NotFoundTitle>ERROR 404</NotFoundTitle>
          <NotFoundImg src={`${img}`} alt="cat" />
          <NotFoundText>Ooops, page not found :( </NotFoundText>
        </div>
      </section>
    </main>
  );
};
export default NotFound;
