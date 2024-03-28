import { SettingItemType } from '@/types/mypageType'
import CustomToggle from '@common/CustomToggle'
import * as s from '@components/setting/SettingSection/SettingItem.styled'

const SettingItem = (props: SettingItemType) => {
  const { title, selected, onClick } = props

  return (
    <s.Container>
      <s.Title>{title}</s.Title>
      <CustomToggle selected={selected} onClick={onClick} />
    </s.Container>
  )
}

export default SettingItem
