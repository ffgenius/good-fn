import { onionlUIPreset } from '@onionl-ui/preset'
import { defineConfig, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({}),
    onionlUIPreset(),
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
      },
    }),
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'hyperlink': 'c-[var(--vp-c-brand-b-1)] cursor-pointer hover:bg-[var(--vp-c-brand-b-5)] px1',
  },
})
