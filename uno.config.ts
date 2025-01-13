import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUno(),
    presetAnimations(),
    presetShadcn(),
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
      },
    }),
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/**/*.{js,ts}',
      ],
    },
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'hyperlink': 'c-[var(--vp-c-brand-b-1)] cursor-pointer hover:bg-[var(--vp-c-brand-b-5)] px1',
  },
})
