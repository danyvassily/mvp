"use client"

import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb?: Array<{ label: string; href?: string }>
  className?: string
  variant?: 'default' | 'centered'
}

export function PageHeader({
  title,
  subtitle,
  breadcrumb,
  className,
  variant = 'default'
}: PageHeaderProps) {
  return (
    <div className={cn(
      "border-b border-gray-200 bg-white",
      "grain-subtle",
      className
    )}>
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className={cn(
          "space-y-4",
          variant === 'centered' ? 'text-center' : ''
        )}>
          
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                {breadcrumb.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <svg 
                        className="w-4 h-4 mx-2 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="hover:text-gray-700 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-gray-900 font-medium">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Titre principal */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 tracking-wide leading-tight">
            {title}
          </h1>
          
          {/* Sous-titre */}
          {subtitle && (
            <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          )}

          {/* Ligne décorative */}
          <div className={cn(
            "flex items-center space-x-4 pt-6",
            variant === 'centered' ? 'justify-center' : ''
          )}>
            <div className="h-px bg-gradient-to-r from-gray-900 via-gray-400 to-transparent w-16"></div>
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-l from-gray-900 via-gray-400 to-transparent w-16"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
