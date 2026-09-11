import React from 'react';

interface AeiLogoProps {
  variant?: 'vertical' | 'horizontal' | 'emblem-only' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AeiLogo: React.FC<AeiLogoProps> = ({
  variant = 'vertical',
  className = '',
  size = 'md'
}) => {
  const sizeMap = {
    sm: { emblem: 36, textTitle: 'text-[11px]', textSubtitle: 'text-[7px]' },
    md: { emblem: 54, textTitle: 'text-sm', textSubtitle: 'text-[8.5px]' },
    lg: { emblem: 72, textTitle: 'text-base', textSubtitle: 'text-[10px]' },
    xl: { emblem: 96, textTitle: 'text-lg', textSubtitle: 'text-[12px]' },
  };

  const currentSize = sizeMap[size];

  const EmblemSVG = (
    <svg
      width={currentSize.emblem}
      height={currentSize.emblem}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
    >
      {/* Outer gold ring & gradient */}
      <defs>
        <linearGradient id="aeiGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C49A45" />
          <stop offset="40%" stopColor="#F5D77F" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#996D18" />
        </linearGradient>
        <linearGradient id="aeiNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B2545" />
          <stop offset="100%" stopColor="#031024" />
        </linearGradient>
      </defs>

      {/* Outer circular ring with gold accent */}
      <circle cx="50" cy="50" r="46" stroke="url(#aeiGoldGrad)" strokeWidth="2.5" fill="#FFFFFF" />
      <circle cx="50" cy="50" r="42" stroke="#0B2545" strokeWidth="1" strokeOpacity="0.15" fill="none" />

      {/* Stylized 'E' in Navy Blue */}
      <path
        d="M28 26 H46 V33 H35 V46 H44 V52 H35 V67 H47 V74 H28 Z"
        fill="url(#aeiNavyGrad)"
      />

      {/* Upward dynamic curve / Arrow / Stylized 'i' in Gold & Navy */}
      <path
        d="M52 74 C52 50 60 36 74 25"
        stroke="url(#aeiNavyGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Upward Arrow Head */}
      <path
        d="M66 22 L76 24 L72 34 Z"
        fill="url(#aeiNavyGrad)"
      />

      {/* Graduation Sparkle / Star on the top right */}
      <path
        d="M74 15 L76 19 L80 20 L76 21 L74 25 L72 21 L68 20 L72 19 Z"
        fill="url(#aeiGoldGrad)"
      />

      {/* Open Book Wings & Caring Hands at the bottom */}
      <path
        d="M32 78 C40 73 48 76 50 79 C52 76 60 73 68 78 C60 83 40 83 32 78 Z"
        fill="url(#aeiGoldGrad)"
      />
      
      {/* People / Community icon in center bottom */}
      <circle cx="50" cy="69" r="2.5" fill="url(#aeiGoldGrad)" />
      <circle cx="43" cy="71" r="2" fill="url(#aeiGoldGrad)" />
      <circle cx="57" cy="71" r="2" fill="url(#aeiGoldGrad)" />
    </svg>
  );

  if (variant === 'emblem-only') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{EmblemSVG}</div>;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        {EmblemSVG}
        <div className="flex flex-col text-left">
          <span className={`font-serif-brand font-bold tracking-wider text-[#0B2545] ${currentSize.textTitle} leading-tight`}>
            EXCELLENCE <span className="text-[#C49A45] font-normal text-[10px]">&</span> INNOVATION
          </span>
          <span className={`font-medium tracking-tight text-amber-700 ${currentSize.textSubtitle} uppercase`}>
            Bâtir aujourd'hui, innover pour demain
          </span>
        </div>
      </div>
    );
  }

  // Default Vertical Layout
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      {EmblemSVG}
      <div className="mt-1.5 flex flex-col items-center">
        <span className={`font-serif-brand font-bold tracking-widest text-[#0B2545] ${currentSize.textTitle} leading-tight`}>
          EXCELLENCE
        </span>
        <span className="text-[9px] font-serif-brand tracking-widest text-[#C49A45] font-semibold -my-0.5">
          ET
        </span>
        <span className={`font-serif-brand font-bold tracking-widest text-[#0B2545] ${currentSize.textTitle} leading-tight`}>
          INNOVATION
        </span>
        <span className="text-[7px] font-semibold tracking-wider text-amber-700 uppercase mt-0.5">
          BÂTIR AUJOURD'HUI, INNOVER POUR DEMAIN
        </span>
      </div>
    </div>
  );
};
