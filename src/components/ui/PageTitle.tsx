interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTitle({ children, className = '' }: PageTitleProps) {
  return (
    <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${className}`}>
      {children}
    </h2>
  );
}
