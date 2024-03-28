import * as s from '@components/setting/SettingSection/SettingSection.styled'
import SettingItem from './SettingItem'
import { useState } from 'react'
import useTheme from '@hooks/useTheme'
import { ThemeFlag } from '@/stores/theme'

const Index = () => {
  const themeProps = useTheme()
  const [isDark, setIsDark] = useState<boolean>(
    themeProps.theme === ThemeFlag.dark,
  )

  const changeTheme = () => {
    themeProps.onChangeTheme()
    setIsDark(!isDark)
  }

  return (
    <s.Container>
      <SettingItem
        title="다크 모드/라이트 모드"
        selected={isDark}
        onClick={changeTheme}
      />
    </s.Container>
  )
}

export default Index
