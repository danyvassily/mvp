import { cn } from "@/lib/utils";

type QuoteRibbonProps = {
  text: string;
  author?: string;
  className?: string;
};

export function QuoteRibbon({ text, author, className }: QuoteRibbonProps) {
  return (
    <section className={cn(
      "py-16 lg:py-20 relative z-10 overflow-hidden",
      className
    )}>
      {/* Fond semi-transparent amélioré */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-black/40 backdrop-blur-md" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Conteneur de citation avec fond */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl">
            {/* Citation */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-relaxed italic tracking-wide text-shadow-lg drop-shadow-2xl">
              "{text}"
            </blockquote>
            
            {/* Auteur */}
            {author && (
              <cite className="block mt-8 text-base md:text-lg text-gray-200 font-medium tracking-widest uppercase opacity-90 not-italic">
                — {author}
              </cite>
            )}
            
            {/* Ornement décoratif */}
            <div className="mt-10 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
