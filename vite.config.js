import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		global: true,
		environment: 'jsdom',
		// environment: 'happy-dom',
		setupFiles: './setupTest.js',
		css: true,
	},
});
