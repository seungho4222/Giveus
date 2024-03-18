import Header from '@components/header/Header';
import Footer from '@/components/footer/Footer';
import { HomePageContainer } from './HomePage.styled';
import FundingRegister from '../fundingregister/FundingRegister';
import LoginPage from '../login/LoginPage';
import SignUpPage from '../signup/SignUpPage';


const HomePage = () => {
    return (
        <HomePageContainer>
            <Header/>
            <SignUpPage/>
            <Footer/>

        </HomePageContainer>
    );
};

export default HomePage;
