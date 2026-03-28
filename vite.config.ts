import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repoName = 'xun0101_resume_codex.github.io'

export default defineConfig({
  plugins: [vue()],
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
})
