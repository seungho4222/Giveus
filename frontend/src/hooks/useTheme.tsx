import { ThemeFlag, themeState } from '@stores/theme'
import { useCallback, useLayoutEffect } from 'react'
import { useRecoilState } from 'recoil'

const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  const onChangeTheme = useCallback(() => {
    setTheme(prevTheme =>
      prevTheme === ThemeFlag.light ? ThemeFlag.dark : ThemeFlag.light,
    )
  }, [])

  // 사용자가 시스템 설정으로 다크모드를 사용하고 있다면
  useLayoutEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      theme === ThemeFlag.dark && setTheme(ThemeFlag.dark)
    } else {
      theme === ThemeFlag.light && setTheme(ThemeFlag.light)
    }
  }, [])

  return {
    theme,
    onChangeTheme,
  }
}

export default useTheme
