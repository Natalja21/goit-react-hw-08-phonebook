import { HomeImg, HomeTitle, HomeSubtitle } from './Home.styled';
import img from '../../img/welcom.jpg';

const Home = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <HomeTitle>Welcome to the contact book !</HomeTitle>
          <HomeImg src={`${img}`} alt="welcom" />
          <HomeSubtitle>
            For further use please login to your account or register ;)
          </HomeSubtitle>
        </div>
      </section>
    </main>
  );
};
export default Home;
