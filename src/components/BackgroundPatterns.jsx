// SVG Background Patterns for Pharmaceutical Theme

export const LabPatternBg = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="labPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        {/* Test tubes */}
        <g opacity="0.08">
          <rect x="10" y="20" width="15" height="60" fill="none" stroke="#0055CC" strokeWidth="1" rx="3" />
          <circle cx="17.5" cy="20" r="7.5" fill="none" stroke="#0055CC" strokeWidth="1" />
          <path d="M 15 45 L 20 55 L 22 55 L 25 45 Z" fill="#28A745" opacity="0.4" />
          
          <rect x="35" y="30" width="12" height="50" fill="none" stroke="#FF6B35" strokeWidth="1" rx="2" />
          <circle cx="41" cy="30" r="6" fill="none" stroke="#FF6B35" strokeWidth="1" />
          <path d="M 38 48 L 42 60 L 44 60 L 48 48 Z" fill="#0055CC" opacity="0.3" />
          
          <rect x="60" y="25" width="14" height="55" fill="none" stroke="#7C3AED" strokeWidth="1" rx="3" />
          <circle cx="67" cy="25" r="7" fill="none" stroke="#7C3AED" strokeWidth="1" />
          <path d="M 63 42 L 68 58 L 71 58 L 76 42 Z" fill="#FF6B35" opacity="0.4" />
        </g>
        
        {/* Molecules */}
        <g opacity="0.06">
          <circle cx="20" cy="15" r="3" fill="#0055CC" />
          <circle cx="30" cy="10" r="2.5" fill="#28A745" />
          <circle cx="35" cy="15" r="3" fill="#FF6B35" />
          <line x1="20" y1="15" x2="30" y2="10" stroke="#0055CC" strokeWidth="0.5" />
          <line x1="30" y1="10" x2="35" y2="15" stroke="#0055CC" strokeWidth="0.5" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#labPattern)" />
  </svg>
)

export const MedicinePatternBg = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="medicinePattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        {/* Capsules */}
        <g opacity="0.08">
          <ellipse cx="15" cy="15" rx="8" ry="12" fill="#0055CC" opacity="0.5" />
          <ellipse cx="15" cy="15" rx="8" ry="12" fill="#28A745" opacity="0.5" transform="translate(0, -6)" />
          
          <circle cx="50" cy="20" r="6" fill="#FF6B35" />
          <circle cx="50" cy="20" r="6" fill="#FFB347" opacity="0.6" transform="translate(6, 0)" />
          
          <rect x="20" y="45" width="8" height="16" rx="4" fill="#7C3AED" opacity="0.5" />
          <rect x="20" y="45" width="8" height="16" rx="4" fill="#A78BFA" opacity="0.5" transform="translate(0, -8)" />
        </g>
        
        {/* Plus signs (medical) */}
        <g opacity="0.05">
          <line x1="65" y1="25" x2="75" y2="25" stroke="#0055CC" strokeWidth="1" />
          <line x1="70" y1="20" x2="70" y2="30" stroke="#0055CC" strokeWidth="1" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#medicinePattern)" />
  </svg>
)

export const DNAPatternBg = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dnaPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        {/* DNA double helix */}
        <g opacity="0.07">
          <path d="M 30 20 Q 40 40 30 60 Q 20 80 30 100" fill="none" stroke="#0055CC" strokeWidth="2" />
          <path d="M 90 20 Q 80 40 90 60 Q 100 80 90 100" fill="none" stroke="#28A745" strokeWidth="2" />
          
          {/* Base pairs */}
          <line x1="30" y1="30" x2="90" y2="30" stroke="#0055CC" strokeWidth="1" opacity="0.5" />
          <line x1="28" y1="50" x2="92" y2="50" stroke="#0055CC" strokeWidth="1" opacity="0.5" />
          <line x1="30" y1="70" x2="90" y2="70" stroke="#0055CC" strokeWidth="1" opacity="0.5" />
          <line x1="28" y1="90" x2="92" y2="90" stroke="#0055CC" strokeWidth="1" opacity="0.5" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dnaPattern)" />
  </svg>
)

export const HealthcarePatternBg = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="healthcarePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        {/* Grid/chart lines */}
        <g opacity="0.06">
          <line x1="20" y1="80" x2="85" y2="80" stroke="#0055CC" strokeWidth="0.5" />
          <line x1="20" y1="60" x2="85" y2="60" stroke="#0055CC" strokeWidth="0.5" />
          <line x1="20" y1="40" x2="85" y2="40" stroke="#0055CC" strokeWidth="0.5" />
          <line x1="20" y1="20" x2="85" y2="20" stroke="#0055CC" strokeWidth="0.5" />
          
          <line x1="20" y1="15" x2="20" y2="85" stroke="#28A745" strokeWidth="0.5" />
          <line x1="40" y1="15" x2="40" y2="85" stroke="#28A745" strokeWidth="0.5" />
          <line x1="60" y1="15" x2="60" y2="85" stroke="#28A745" strokeWidth="0.5" />
          <line x1="80" y1="15" x2="80" y2="85" stroke="#28A745" strokeWidth="0.5" />
        </g>
        
        {/* Data points */}
        <circle cx="25" cy="65" r="2" fill="#FF6B35" opacity="0.15" />
        <circle cx="40" cy="55" r="2" fill="#FF6B35" opacity="0.15" />
        <circle cx="55" cy="45" r="2" fill="#FF6B35" opacity="0.15" />
        <circle cx="70" cy="30" r="2" fill="#FF6B35" opacity="0.15" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#healthcarePattern)" />
  </svg>
)

export const MolecularPatternBg = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="molecularPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        {/* Connected atoms */}
        <g opacity="0.08">
          <circle cx="30" cy="30" r="3" fill="#0055CC" />
          <circle cx="70" cy="30" r="3" fill="#28A745" />
          <circle cx="50" cy="60" r="3" fill="#FF6B35" />
          <circle cx="30" cy="70" r="3" fill="#7C3AED" />
          <circle cx="70" cy="70" r="3" fill="#FFB347" />
          
          <line x1="30" y1="30" x2="70" y2="30" stroke="#0055CC" strokeWidth="1" opacity="0.6" />
          <line x1="30" y1="30" x2="50" y2="60" stroke="#0055CC" strokeWidth="1" opacity="0.6" />
          <line x1="70" y1="30" x2="50" y2="60" stroke="#0055CC" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="60" x2="30" y2="70" stroke="#0055CC" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="60" x2="70" y2="70" stroke="#0055CC" strokeWidth="1" opacity="0.6" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#molecularPattern)" />
  </svg>
)

export const LabEquipmentBg = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="labEquipPattern" x="0" y="0" width="110" height="110" patternUnits="userSpaceOnUse">
        {/* Microscope */}
        <g opacity="0.07">
          <circle cx="25" cy="30" r="12" fill="none" stroke="#0055CC" strokeWidth="1" />
          <rect x="20" y="40" width="10" height="50" fill="none" stroke="#0055CC" strokeWidth="1" />
          <rect x="15" y="88" width="20" height="8" fill="none" stroke="#0055CC" strokeWidth="1" />
          
          {/* Flask */}
          <path d="M 60 25 L 60 40 Q 60 55 75 60 Q 90 55 90 40 L 90 25 Z" fill="none" stroke="#28A745" strokeWidth="1" />
          <line x1="55" y1="25" x2="95" y2="25" stroke="#28A745" strokeWidth="1" />
          <path d="M 65 50 L 85 50" fill="none" stroke="#28A745" strokeWidth="0.5" opacity="0.5" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#labEquipPattern)" />
  </svg>
)
