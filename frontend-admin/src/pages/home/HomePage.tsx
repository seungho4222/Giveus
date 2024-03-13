import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import { HomePageContainer } from './HomePage.styled';
import FundingRegister from '../fundingregister/FundingRegister';


const HomePage = () => {
    return (
        <HomePageContainer>
            <Header/>
            <FundingRegister/>
            <Footer/>

        </HomePageContainer>
    );
};

export default HomePage;
