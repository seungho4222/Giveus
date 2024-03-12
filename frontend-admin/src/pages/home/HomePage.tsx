import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import { HomePageContainer } from './HomePage.styled';


const HomePage = () => {
    return (
        <HomePageContainer>
            <Header/>
            <div style={{width :"100%", height:"600px", fontSize : "200px"} }>내용</div>
            <Footer/>

        </HomePageContainer>
    );
};

export default HomePage;
