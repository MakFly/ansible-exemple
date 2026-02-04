import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Ansible MasterClass',
    template: '%s - Ansible MasterClass',
  },
  description: 'Guide complet pour maîtriser Ansible de A à Z',
}

const banner = (
  <Banner storageKey="ansible-masterclass-banner">
    Bienvenue sur Ansible MasterClass - Le guide complet pour maîtriser Ansible
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>
        Ansible MasterClass
      </span>
    }
  />
)

const footer = (
  <Footer>
    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
      {new Date().getFullYear()} © Ansible MasterClass. Construit avec Nextra.
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
          docsRepositoryBase="https://github.com/your-repo/ansible-masterclass"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
