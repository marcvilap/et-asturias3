import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	//base: '/bc/joyarural/',
	devToolbar: { enabled: false },
	vite: { plugins: [tailwindcss()] },
	experimental: { svg: true },
})
