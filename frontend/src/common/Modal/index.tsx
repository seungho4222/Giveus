import { themeState } from '@stores/theme'
import { ModalType } from '@/types/commonType'
import * as m from '@common/Modal/Modal.styled'
import { useRecoilValue } from 'recoil'

const Index = ({ name, children, onClose }: ModalType) => {
  const theme = useRecoilValue(themeState)

  return (
    <m.Container $theme={theme}>
      <m.Wrap>
        <m.ModalName>{name}</m.ModalName>
        {children}
      </m.Wrap>
      <m.Backdrop>
        <img
          src={'/icon/icon_close' + (theme ? '' : '_white') + '.png'}
          alt=""
          onClick={onClose}
        />
      </m.Backdrop>
    </m.Container>
  )
}

export default Index
