import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div className={`max-w-3xl mx-auto px-8 md:px-0 ${className}`}>
      {children}
    </div>
  );
}
