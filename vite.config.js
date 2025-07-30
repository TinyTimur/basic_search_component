import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // Все запросы на /offers будут перенаправлены на бэк
            '/offers': {
                target: 'http://localhost:3000', // Порт, на котором работает Express
                changeOrigin: true,
                secure: false,
            },
            '/suppliers': {
                target: 'http://localhost:3000', // Порт, на котором работает Express
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
