import React from 'react';

export function AnchorLogoIcon({
  className,
  fillColor,
}: {
  className: string;
  fillColor: string;
}) {
  return (
    <svg
      viewBox="0 0 500 457"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Anchor logo wave symbol"
      className={className}
      fill={fillColor}
    >
      <path
        d="M483.49 148.53s-20.95-10-42.73-3.5c-16.25 4.81-34.1 17.17-44.24 42.84C377.09 237.08 393.9 323 387.27 323c-6.92 0-27.48-79.12-55.39-161.52S280-6.5 236.44.39c-38.61 6.11-26.65 103.66-11.52 195.05 13.71 82.82 29.56 160.38 20.51 160.39-16.15 0-69.28-228.95-123.76-220.25-54.48 8.7 15.7 261 1 261.45-12.13.39-41.79-153.57-85.85-146.49-33.4 5.37-3.64 125.12-2.27 158.52.34 8.49 2.94 24.12-9.62 24.12L0 433.21v23.27l40.8-.12c8.42-.41 15-3.63 18.35-11.88 11.31-27.92-18.43-146.71-11.45-147.56 4.78-.58 15.09 35.56 29.49 76.44 14.4 40.88 28.81 83.24 56.14 83.24 59 0-1.16-231.69 10.54-231.69 6.16 0 23 47.07 41.56 98.69 22.67 63.11 50.4 133.08 83.69 133.08 39.84 0 26.87-90.39 14.54-177-10.68-75-23.2-145.26-16.51-145.26 15 0 71.79 322.25 140 322.25 34.17 0 34.55-67.39 34.55-140 0-51-4.25-97.52 27.73-108.7 15.21-5.32 30.58 4.12 30.58 4.12l-16.52-63.56z"
        fillRule="nonzero"
      />
    </svg>
  );
}
