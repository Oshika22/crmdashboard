import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  // base: {
  //   // Set the base path for the application
  //   // This is useful if you are deploying to a subdirectory
  //   // For example, if your app is hosted at https://example.com/myapp/
  //   // you would set base: '/myapp/'
  //   base: '/',
  // }
});
