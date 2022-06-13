import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
