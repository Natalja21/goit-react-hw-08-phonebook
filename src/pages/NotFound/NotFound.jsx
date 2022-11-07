import { NotFoundTitle, NotFoundText } from './NotFound.styled';
const NotFound = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <NotFoundTitle>ERROR 404</NotFoundTitle>
          <NotFoundText>Ooops, page not found :( </NotFoundText>
        </div>
      </section>
    </main>
  );
};
export default NotFound;
