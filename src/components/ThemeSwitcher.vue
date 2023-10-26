<template>
  <div>
    <button @click="toggleDarkMode">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <select v-model="currentTheme" @change="applyTheme(themes[currentTheme])">
      <option v-for="(value, name) in themes" :key="name" :value="name">
        {{ name }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
const themes = ref({
  dark: {
    backgroundColor: '#121212',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    borderColor: '#333333',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  light: {
    backgroundColor: '#ffffff',
    color: '#000000',
    fontFamily: 'Georgia, serif',
    borderColor: '#dddddd',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
  },
  // Additional themes
  solarized: {
    backgroundColor: '#fdf6e3',
    color: '#657b83',
    fontFamily: '"Lucida Console", Monaco, monospace',
    borderColor: '#eee8d5',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
  },
  dracula: {
    backgroundColor: '#282a36',
    color: '#f8f8f2',
    fontFamily: '"Courier New", Courier, monospace',
    borderColor: '#44475a',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  nord: {
    backgroundColor: '#2e3440',
    color: '#d8dee9',
    fontFamily: 'Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif',
    borderColor: '#3b4252',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }
})

const applyTheme = (theme) => {
  Object.keys(theme).forEach((property) => {
    document.body.style[property] = theme[property]
  })
}
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  const theme = isDarkMode.value ? themes.value.dark : themes.value.light
  applyTheme(theme)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme && themes.value[savedTheme]) {
    applyTheme(themes.value[savedTheme])
    isDarkMode.value = savedTheme === 'dark'
  }
})

const currentTheme = ref('light')

return { isDarkMode, toggleDarkMode, themes, currentTheme, applyTheme }
</script>
