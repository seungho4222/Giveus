import * as s from '@components/setting/SettingSection/SettingSection.styled'
import SettingItem from './SettingItem'
import { useRecoilState } from 'recoil'
import { ThemeFlag, themeState } from '@/stores/theme'
import { useState } from 'react'

const Index = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  const [isDark, setIsDark] = useState<boolean>(theme === ThemeFlag.dark)

  const changeTheme = () => {
    isDark ? setTheme(ThemeFlag.light) : setTheme(ThemeFlag.dark)
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
