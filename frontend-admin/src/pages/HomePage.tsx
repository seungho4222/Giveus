import Button from '@common/button/Button';
import { SimpleInput } from '@common/input/Input';
import { StyledLabel } from '@common/input/Input.styled';
import AdminLogo from '@assets/icons/adminLogo.svg?react'

const HomePage = () => {
    return (
        <div>
            <AdminLogo />
            <StyledLabel htmlFor='ID'>아이디</StyledLabel>
            <SimpleInput placeholder={'아이디 입력'} value={''} id='ID'/>
            <Button $backgroundColor={''} width={''} height={''} $borderRadius={''} $children={'버튼'}></Button>
            <h1>hello homepage!</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere architecto neque reprehenderit aspernatur similique qui, voluptatibus fugit amet dolorum, dolor rem facilis minus sunt reiciendis est ut consectetur, nesciunt pariatur!</p>
        </div>
    );
};

export default HomePage;
