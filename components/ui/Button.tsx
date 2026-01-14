import React, { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', href, ...props }) => {
  const [ripples, setRipples] = useState<{x: number, y: number, id: number}[]>([]);

  const createRipple = (e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - button.left;
    const y = e.clientY - button.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    createRipple(e);
    // If it's a link handled by Next/React router or native anchor, the click continues naturally
  };

  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-8 py-3 transition-all duration-300 ease-out font-sans text-xs uppercase tracking-[0.2em] font-medium rounded-full cursor-pointer group";
  
  const variants = {
    primary: "bg-lumiere-900 text-lumiere-50 hover:bg-lumiere-800 hover:scale-105 shadow-lg shadow-lumiere-200/50",
    outline: "border border-lumiere-900 text-lumiere-900 hover:bg-lumiere-900 hover:text-lumiere-50",
    text: "text-lumiere-900 underline underline-offset-4 hover:text-lumiere-600 px-0"
  };

  // Shimmer effect element for primary buttons
  const shimmer = variant === 'primary' ? (
    <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
  ) : null;

  const content = (
    <>
      <span className="relative z-20">{children}</span>
      {shimmer}
      {ripples.map(r => (
        <span 
          key={r.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none z-10"
          style={{
            left: r.x,
            top: r.y,
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10
          }}
        />
      ))}
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName} 
        target={props.target || '_self'} 
        rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        onClick={(e) => handleClick(e as any)}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      onClick={(e) => {
        handleClick(e);
        props.onClick?.(e);
      }}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;