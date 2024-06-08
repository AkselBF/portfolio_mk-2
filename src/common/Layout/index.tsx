import React, { ReactNode } from 'react';
import Navigation from '../components/Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#00050C] relative min-h-screen">
      <Navigation />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;