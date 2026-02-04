import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import type { Metadata } from 'next'

const SITE_NAME = 'Ansible de A à Z'
const SITE_DESCRIPTION =
  'Guide complet et gratuit pour maîtriser Ansible : playbooks, rôles, vault, modules, inventaire, CI/CD et bonnes pratiques.'
const SITE_URL = 'https://ansible-exemple.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s - ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const banner = (
  <Banner storageKey="ansible-a-z-banner">
    Bienvenue sur Ansible de A à Z - Le guide complet pour maîtriser Ansible
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>
        Ansible de A à Z
      </span>
    }
  />
)

const footer = (
  <Footer>
    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
      {new Date().getFullYear()} © Ansible de A à Z. Construit avec Nextra.
    </p>
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/MakFly/ansible-exemple"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
