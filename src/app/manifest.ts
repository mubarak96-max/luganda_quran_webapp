import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luganda Quran Audio',
    short_name: 'Luganda Quran',
    description: 'Listen to the Quran translated in Luganda by Sheikh Sulaiman Nkata',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFDFD',
    theme_color: '#008080',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
