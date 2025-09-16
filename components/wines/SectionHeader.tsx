interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <header className={`text-center mb-12 lg:mb-16 ${className}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900 leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
