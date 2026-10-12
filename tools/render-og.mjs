/**
 * ブラウザを使わず、OGP版下の文言から1200×630の画像を生成する。
 * sharp と日本語フォントが利用できる環境向け。
 * SHIKUMI_OG_FONT=/absolute/path/to/font.ttf node tools/render-og.mjs
 */
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
let sharp;
try {
  sharp = require('sharp');
} catch {
  if (!process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES) throw new Error('sharp が必要です。通常環境では npm run og を利用してください。');
  sharp = require(join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES, 'sharp'));
}
const fontfile = process.env.SHIKUMI_OG_FONT;
if (!fontfile) throw new Error('SHIKUMI_OG_FONT に日本語フォントの絶対パスを指定してください。');

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const html = readFileSync(join(root, 'tools/og-image.html'), 'utf8');
const plain = (s) => s.replace(/<br\s*\/?\s*>/g, '\n').replace(/<[^>]+>/g, '').replace(/[ \t]+/g, ' ').replace(/[ \t]*\n[ \t]*/g, '\n').replace(/\n{2,}/g, '\n').trim();
const field = (cls) => plain(html.match(new RegExp(`<p class="${cls}">([\\s\\S]*?)<\\/p>`))?.[1] ?? '');
const headline = (html.match(/<h1>([\s\S]*?)<\/h1>/)?.[1] ?? '').split(/<br\s*\/?\s*>/).map(plain);
const items = [...html.matchAll(/<li>(.*?)<\/li>/g)].map((m) => plain(m[1]));
const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const layers = [];

async function text(s, left, top, size, width, color = '#0a2350', bold = false) {
  const rendered = await sharp({ text: {
    text: `<span foreground="${color}"${bold ? ' weight="bold"' : ''}>${escape(s)}</span>`,
    font: `Noto Sans JP ${size}`, fontfile, width, dpi: 72, rgba: true,
  } }).png().toBuffer();
  const metadata = await sharp(rendered).metadata();
  if (left + metadata.width > 1200 || top + metadata.height > 630) throw new Error(`画像から文字がはみ出します: ${s}`);
  layers.push({ input: rendered, left, top });
}

const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="white"/><rect x="828" width="372" height="630" fill="#f2f7fc"/>
  <rect x="72" y="122" width="36" height="3" fill="#1668c9"/>
  <rect x="874" y="188" width="278" height="3" fill="#1668c9"/>
  <path d="M874 292H1152M874 393H1152" stroke="#dbe4ef"/>
</svg>`);
await text(field('logo'), 72, 64, 30, 680, '#0a2350', true);
await text(field('label'), 120, 110, 17, 650, '#0f4f9e', true);
await text(headline[0], 72, 228, 52, 700, '#0a2350', true);
await text(headline[1], 72, 308, 52, 700, '#1668c9', true);
await text(field('lead'), 72, 412, 23, 680, '#5b6c86');
await text(field('domain'), 72, 553, 20, 680, '#0a2350', true);
await text('シクミベースに頼めること', 874, 151, 17, 278, '#0f4f9e', true);
for (let i = 0; i < items.length; i++) await text(items[i], 874, 232 + i * 101, 22, 278, '#0a2350', true);
await sharp(background).composite(layers).png().toFile(join(root, 'public/og.png'));
console.log('public/og.png を生成しました（1200×630）');
