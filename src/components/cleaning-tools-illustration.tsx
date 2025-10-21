export function CleaningToolsIllustration() {
  return (
    <div className="relative w-full max-w-3xl mx-auto h-48 md:h-64">
      {/* Spray Bottle */}
      <div className="absolute left-[5%] bottom-0 transform -rotate-12">
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hand */}
          <path d="M25 85 L25 95 Q25 100 30 100 L50 100 Q55 100 55 95 L55 75" fill="#FFE0BD" stroke="#E5C4A0" strokeWidth="1.5"/>
          <ellipse cx="40" cy="85" rx="15" ry="8" fill="#FFE0BD" stroke="#E5C4A0" strokeWidth="1.5"/>
          {/* Spray Bottle */}
          <path d="M30 20 L30 70 Q30 75 35 75 L45 75 Q50 75 50 70 L50 20" fill="#FF6B6B" stroke="#E55555" strokeWidth="2"/>
          <rect x="28" y="15" width="24" height="8" rx="2" fill="#FF6B6B" stroke="#E55555" strokeWidth="2"/>
          <path d="M40 15 L40 5" stroke="#E55555" strokeWidth="3" strokeLinecap="round"/>
          <path d="M40 5 L45 5 L50 0" stroke="#E55555" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      {/* Mop */}
      <div className="absolute left-[20%] bottom-0 transform rotate-6">
        <svg width="90" height="140" viewBox="0 0 90 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hand */}
          <path d="M30 50 L30 60 Q30 65 35 65 L55 65 Q60 65 60 60 L60 45" fill="#F4D4B0" stroke="#E5C4A0" strokeWidth="1.5"/>
          <ellipse cx="45" cy="50" rx="15" ry="8" fill="#F4D4B0" stroke="#E5C4A0" strokeWidth="1.5"/>
          {/* Mop Handle */}
          <line x1="45" y1="50" x2="45" y2="110" stroke="#8B4513" strokeWidth="4" strokeLinecap="round"/>
          {/* Mop Head */}
          <g transform="translate(45, 110)">
            <line x1="-15" y1="0" x2="-15" y2="25" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
            <line x1="-10" y1="0" x2="-10" y2="28" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
            <line x1="-5" y1="0" x2="-5" y2="26" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
            <line x1="0" y1="0" x2="0" y2="30" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
            <line x1="5" y1="0" x2="5" y2="27" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
            <line x1="10" y1="0" x2="10" y2="29" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
            <line x1="15" y1="0" x2="15" y2="26" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
          </g>
        </svg>
      </div>

      {/* Duster */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
        <svg width="100" height="130" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hand */}
          <path d="M35 60 L35 70 Q35 75 40 75 L60 75 Q65 75 65 70 L65 55" fill="#FFDAB3" stroke="#E5C4A0" strokeWidth="1.5"/>
          <ellipse cx="50" cy="60" rx="15" ry="8" fill="#FFDAB3" stroke="#E5C4A0" strokeWidth="1.5"/>
          {/* Duster Handle */}
          <rect x="46" y="20" width="8" height="45" rx="2" fill="#FFD93D" stroke="#FFC61A" strokeWidth="2"/>
          {/* Duster Head */}
          <ellipse cx="50" cy="18" rx="20" ry="12" fill="#6C5CE7" stroke="#5B4CCC" strokeWidth="2"/>
          {/* Feather texture */}
          <g opacity="0.6">
            <line x1="35" y1="18" x2="30" y2="12" stroke="#5B4CCC" strokeWidth="1.5"/>
            <line x1="40" y1="15" x2="36" y2="8" stroke="#5B4CCC" strokeWidth="1.5"/>
            <line x1="50" y1="12" x2="50" y2="5" stroke="#5B4CCC" strokeWidth="1.5"/>
            <line x1="60" y1="15" x2="64" y2="8" stroke="#5B4CCC" strokeWidth="1.5"/>
            <line x1="65" y1="18" x2="70" y2="12" stroke="#5B4CCC" strokeWidth="1.5"/>
          </g>
        </svg>
      </div>

      {/* Sponge */}
      <div className="absolute right-[20%] bottom-0 transform -rotate-8">
        <svg width="85" height="115" viewBox="0 0 85 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hand */}
          <path d="M28 65 L28 75 Q28 80 33 80 L53 80 Q58 80 58 75 L58 60" fill="#FFE5C7" stroke="#E5C4A0" strokeWidth="1.5"/>
          <ellipse cx="43" cy="65" rx="15" ry="8" fill="#FFE5C7" stroke="#E5C4A0" strokeWidth="1.5"/>
          {/* Sponge */}
          <rect x="30" y="35" width="26" height="35" rx="3" fill="#4ECDC4" stroke="#3DB8AE" strokeWidth="2"/>
          <rect x="30" y="35" width="26" height="15" rx="3" fill="#FFC93D" stroke="#FFB61A" strokeWidth="2"/>
          {/* Sponge texture */}
          <g opacity="0.4">
            <circle cx="36" cy="50" r="2" fill="#3DB8AE"/>
            <circle cx="43" cy="55" r="2" fill="#3DB8AE"/>
            <circle cx="50" cy="52" r="2" fill="#3DB8AE"/>
            <circle cx="38" cy="62" r="2" fill="#3DB8AE"/>
            <circle cx="48" cy="63" r="2" fill="#3DB8AE"/>
          </g>
        </svg>
      </div>

      {/* Cleaning Gloves */}
      <div className="absolute right-[5%] bottom-0 transform rotate-10">
        <svg width="75" height="110" viewBox="0 0 75 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Arm */}
          <path d="M25 30 L25 40 Q25 45 30 45 L45 45 Q50 45 50 40 L50 25" fill="#FFE0BD" stroke="#E5C4A0" strokeWidth="1.5"/>
          {/* Glove */}
          <path d="M20 40 L20 95 Q20 100 25 100 L50 100 Q55 100 55 95 L55 40" fill="#FFD93D" stroke="#FFC61A" strokeWidth="2"/>
          {/* Glove cuff */}
          <rect x="20" y="35" width="35" height="8" rx="2" fill="#FFB61A" stroke="#FF9900" strokeWidth="1.5"/>
          {/* Fingers outline */}
          <g opacity="0.3">
            <path d="M25 40 L25 60" stroke="#FF9900" strokeWidth="1.5"/>
            <path d="M32 40 L32 65" stroke="#FF9900" strokeWidth="1.5"/>
            <path d="M39 40 L39 63" stroke="#FF9900" strokeWidth="1.5"/>
            <path d="M46 40 L46 60" stroke="#FF9900" strokeWidth="1.5"/>
          </g>
        </svg>
      </div>

      {/* Cleaning Spray Bottle (left side) */}
      <div className="absolute left-[12%] bottom-0 transform rotate-3">
        <svg width="70" height="105" viewBox="0 0 70 105" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hand */}
          <path d="M20 60 L20 70 Q20 75 25 75 L45 75 Q50 75 50 70 L50 55" fill="#F4D4B0" stroke="#E5C4A0" strokeWidth="1.5"/>
          <ellipse cx="35" cy="60" rx="15" ry="8" fill="#F4D4B0" stroke="#E5C4A0" strokeWidth="1.5"/>
          {/* Bottle */}
          <path d="M25 20 L25 55 Q25 58 28 58 L42 58 Q45 58 45 55 L45 20" fill="#4ECDC4" stroke="#3DB8AE" strokeWidth="2" opacity="0.7"/>
          <ellipse cx="35" cy="20" rx="10" ry="5" fill="#4ECDC4" stroke="#3DB8AE" strokeWidth="2" opacity="0.7"/>
        </svg>
      </div>
    </div>
  )
}
