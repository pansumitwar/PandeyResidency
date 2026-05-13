import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallback = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImgSrc(fallback);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        {...props}
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
    </>
  );
}
