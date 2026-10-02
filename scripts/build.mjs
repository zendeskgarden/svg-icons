#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Build the published SVG sprite (`dist/index.svg`) from the source icons in
 * `src/`. This replaces the former gulp pipeline with a direct `svg-sprite`
 * call; the configuration is unchanged so the sprite output is byte-identical.
 */
import { join, resolve } from 'node:path';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import SVGSpriter from 'svg-sprite';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SOURCE = join(ROOT, 'src');
const DEST = join(ROOT, 'dist');

const CONFIG = {
  log: 'info',
  shape: {
    id: {
      separator: '-',
      generator: 'zd-svg-icon-%s'
    },
    transform: [
      {
        svgo: {
          plugins: ['removeXMLNS']
        }
      }
    ]
  },
  svg: {
    rootAttributes: {
      xmlns: 'http://www.w3.org/2000/svg'
    }
  },
  mode: {
    symbol: {
      dest: '',
      sprite: 'index.svg',
      inline: true
    }
  }
};

const spriter = new SVGSpriter(CONFIG);
const files = readdirSync(SOURCE)
  .filter(file => file.endsWith('.svg'))
  .sort();

for (const file of files) {
  spriter.add(resolve(SOURCE, file), file, readFileSync(join(SOURCE, file), 'utf8'));
}

const { result } = await spriter.compileAsync();

mkdirSync(DEST, { recursive: true });
writeFileSync(join(DEST, 'index.svg'), result.symbol.sprite.contents);
