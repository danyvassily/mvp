import { cn } from "@/lib/utils";

type CinematicImageProps = {
  src: string;
  alt: string;
  fullscreen?: boolean;
  ratio?: '16/9' | '21/9' | 'full';
  overlay?: boolean;
  className?: string;
};

export function CinematicImage({ 
  src, 
  alt, 
  fullscreen = false,
  ratio = '16/9',
  overlay = true,
  className 
}: CinematicImageProps) {
  const ratioClasses = {
    '16/9': 'aspect-[16/9]',
    '21/9': 'aspect-[21/9]', 
    'full': 'h-screen'
  };

  return (
    <div className={cn(
      "relative overflow-hidden grain-subtle",
      fullscreen ? 'h-screen w-full' : ratioClasses[ratio],
      className
    )}>
      {/* Image de fond */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center hover:scale-[1.01] transition-transform duration-700"
      />
      
      {/* Overlay sombre pour lisibilité */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 pointer-events-none" />
      )}
      
      {/* Grain effect automatique via CSS */}
      <div className="absolute inset-0 grain pointer-events-none" />
    </div>
  );
}
