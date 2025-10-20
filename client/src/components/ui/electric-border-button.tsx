import React from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';

interface ElectricBorderButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function ElectricBorderButton({ children, className, ...props }: ElectricBorderButtonProps) {
  return (
    <div className="electric-border-container relative">
      {/* SVG Filters for the electric effect */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="level7-electric" colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="8" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="0; 500; 0" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="8" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dx" values="0; -400; 0" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="6" result="noise3" seed="3" />
            <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="300; 0; -300; 0; 300" dur="12s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.25; 0.5; 0.75; 1" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" operator="multiply" />
            <feComposite in="part1" in2="offsetNoise3" result="combinedNoise" operator="screen" />
            
            <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="15" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="electric-card-container relative p-[3px] rounded-lg">
        {/* Electric border layers - these get the filter effect */}
        <div className="electric-border-outer absolute inset-0 border-2 border-level7-blue/60 rounded-lg [filter:url(#level7-electric)] pointer-events-none overflow-hidden" />
        <div className="electric-border-inner absolute inset-[2px] border border-level7-blue/40 rounded-lg [filter:url(#level7-electric)] pointer-events-none overflow-hidden" />
        
        {/* Glow layers for the electric effect */}
        <div className="electric-glow-layer-1 absolute inset-0 border-2 border-level7-blue/30 rounded-lg [filter:blur(3px)] pointer-events-none" />
        <div className="electric-glow-layer-2 absolute inset-0 border-2 border-level7-blue/20 rounded-lg [filter:blur(8px)] pointer-events-none" />
        
        {/* Background glow */}
        <div className="electric-background-glow absolute inset-0 rounded-lg [filter:blur(20px)] scale-105 opacity-20 -z-10 pointer-events-none bg-gradient-to-r from-level7-blue via-transparent to-level7-blue" />
        
        {/* Clean button container - NO filter effects */}
        <div className="relative z-10">
          <Button 
            {...props}
            className={cn(
              "bg-level7-pink hover:bg-level7-pink/90 text-white border-0 w-full h-full",
              className
            )}
          >
            {children}
          </Button>
        </div>
      </div>
    </div>
  );
}