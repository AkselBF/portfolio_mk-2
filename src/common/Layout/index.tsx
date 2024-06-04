import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#10081A]">
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;