import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgSprite from 'vite-plugin-svg-sprite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgSprite({
      include: 'src/assets/spriteIncomeExpenseIcons.svg',
    }),
  ],
  base: '/project-jetcats-fe/',
  build: {
    sourcemap: true,
  },
});
