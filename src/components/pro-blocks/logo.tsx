interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <h1
        className="text-3xl md:text-4xl font-bold tracking-wide"
        style={{
          fontFamily: "'Dancing Script', cursive",
          color: 'var(--teal-primary)',
          background: 'linear-gradient(135deg, var(--teal-primary) 0%, var(--teal-dark) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Athena
      </h1>
    </div>
  );
};
