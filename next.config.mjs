import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new SVGSpritemapPlugin('public/icons/*.svg', {
          output: {
            filename: 'static/sprites/icons.svg',
            svgo: true,
          },
          sprite: {
            prefix: false,
          },
        })
      );

      // Добавляем шаг копирования после сборки
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('CopySvgPlugin', () => {
            const src = join(__dirname, '.next/static/sprites/icons.svg');
            const dest = join(__dirname, 'public/static/sprites/icons.svg');
            fs.ensureDirSync(join(__dirname, 'public/static/sprites'));
            fs.copyFileSync(src, dest);
          });
        },
      });
    }

    return config;
  },
};

export default nextConfig;
