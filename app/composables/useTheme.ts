export const useTheme = () => {
  const colorMode = useColorMode()
  
  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set() {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
  })

  // Function to toggle theme directly
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme,
    colorMode
  }
}
