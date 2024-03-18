import { ModalType } from '@/types/commonType'

import * as m from '@common/Modal/Modal.styled'

const Index = ({ name, children, onClose }: ModalType) => {
  return (
    <m.Container>
      <m.Wrap>
        <m.ModalName>{name}</m.ModalName>
        {children}
      </m.Wrap>
      <m.Backdrop>
        <img src="/icon/icon_close.png" alt="" onClick={onClose} />
      </m.Backdrop>
    </m.Container>
  )
}

export default Index
