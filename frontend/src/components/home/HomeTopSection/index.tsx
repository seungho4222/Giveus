import * as h from '@components/home/HomeTopSection/HomeTopSection.styled'
import paperairplane from '@assets/lottie/paperplane.json'
import Lottie from 'react-lottie'

const Index = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: paperairplane,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <h.Container>
      <h.Title>
        <b>오늘,</b>
        <br />
        희망을
        <br />
        선물해볼까요?
      </h.Title>
      <h.SubTitle>
        오늘의 작은 나눔이 누군가의 삶을
        <br />
        바꾸는 기적이 됩니다
      </h.SubTitle>
      <h.Circle>
        <h.Airplane>
          <Lottie options={defaultOptions} width={328} height={239} />
        </h.Airplane>
      </h.Circle>
    </h.Container>
  )
}

export default Index
