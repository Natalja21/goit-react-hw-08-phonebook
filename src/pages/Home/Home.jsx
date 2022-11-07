import { HomeTitle, HomeSubtitle } from './Home.styled';

const Home = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <HomeTitle>Welcome to the contact book !</HomeTitle>
          <HomeSubtitle>
            For further use please login to your account or register !
          </HomeSubtitle>
        </div>
      </section>
    </main>
  );
};
export default Home;
