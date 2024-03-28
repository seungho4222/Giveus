import { themeState } from '@stores/theme'
import { ModalType } from '@/types/commonType'
import * as r from '@common/ResponsiveModal/ResponsiveModal.styled'
import { useRecoilValue } from 'recoil'

const Index = ({ name, children, onClose }: ModalType) => {
  const theme = useRecoilValue(themeState)

  return (
    <>
      <r.BlackBox onClick={onClose} />
      <r.Container $theme={theme}>
        <r.Wrap>
          <r.ModalName>{name}</r.ModalName>
          {children}
        </r.Wrap>
        <r.Backdrop>
          <img
            src={'/icon/icon_close' + (theme ? '' : '_white') + '.png'}
            alt=""
            onClick={onClose}
          />
        </r.Backdrop>
      </r.Container>
    </>
  )
}

export default Index
