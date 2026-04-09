// SVG Illustrations for Pharmaceutical/Healthcare themes

export const LabScientistIllustration = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="#F0F4FF" />
    {/* Background */}
    <circle cx="150" cy="100" r="80" fill="#E8F0FF" opacity="0.5" />
    <circle cx="300" cy="300" r="100" fill="#E0F0FF" opacity="0.3" />
    
    {/* Lab coat */}
    <path d="M 120 120 L 120 300 L 280 300 L 280 120 Z" fill="#FFFFFF" stroke="#0A66C2" strokeWidth="2" />
    
    {/* Head */}
    <circle cx="200" cy="80" r="30" fill="#D4A574" />
    
    {/* Hair */}
    <path d="M 170 55 Q 200 40 230 55" fill="#8B6F47" />
    
    {/* Face */}
    <circle cx="195" cy="80" r="4" fill="#2C3E50" />
    <circle cx="205" cy="80" r="4" fill="#2C3E50" />
    <path d="M 195 90 Q 200 95 205 90" stroke="#2C3E50" strokeWidth="2" fill="none" />
    
    {/* Lab equipment - test tubes */}
    <rect x="250" y="140" width="30" height="100" fill="none" stroke="#2ECC71" strokeWidth="2" rx="5" />
    <circle cx="265" cy="140" r="15" fill="#E8F5E9" />
    <rect x="280" y="160" width="25" height="80" fill="none" stroke="#0A66C2" strokeWidth="2" rx="4" />
    <circle cx="292.5" cy="160" r="12.5" fill="#E3F2FD" />
    
    {/* Liquid in tubes */}
    <path d="M 255 210 L 260 230 L 270 230 L 275 210" fill="#2ECC71" opacity="0.7" />
    <path d="M 285 200 L 290 220 L 295 220 L 300 200" fill="#0A66C2" opacity="0.7" />
    
    {/* Arm holding clipboard */}
    <rect x="110" y="140" width="15" height="80" fill="#D4A574" rx="7" />
    <rect x="90" y="170" width="35" height="50" fill="#FFFFFF" stroke="#333" strokeWidth="2" rx="2" />
    <line x1="100" y1="185" x2="115" y2="185" stroke="#333" strokeWidth="1" />
    <line x1="100" y1="195" x2="115" y2="195" stroke="#333" strokeWidth="1" />
    <line x1="100" y1="205" x2="115" y2="205" stroke="#0A66C2" strokeWidth="2" />
  </svg>
)

export const DrugMoleculeIllustration = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="#FFF9E6" />
    {/* Background circles */}
    <circle cx="100" cy="100" r="60" fill="#FFE8CC" opacity="0.4" />
    <circle cx="300" cy="300" r="70" fill="#FFD9B3" opacity="0.3" />
    
    {/* Central molecule structure */}
    {/* Atoms (circles) */}
    <circle cx="200" cy="200" r="20" fill="#0A66C2" />
    <circle cx="120" cy="140" r="18" fill="#2ECC71" />
    <circle cx="280" cy="140" r="18" fill="#FF6B6B" />
    <circle cx="120" cy="260" r="18" fill="#FFD700" />
    <circle cx="280" cy="260" r="18" fill="#9B59B6" />
    
    {/* Bonds (lines connecting atoms) */}
    <line x1="200" y1="200" x2="120" y2="140" stroke="#0A66C2" strokeWidth="3" strokeDasharray="5,5" />
    <line x1="200" y1="200" x2="280" y2="140" stroke="#2ECC71" strokeWidth="3" strokeDasharray="5,5" />
    <line x1="200" y1="200" x2="120" y2="260" stroke="#FF6B6B" strokeWidth="3" strokeDasharray="5,5" />
    <line x1="200" y1="200" x2="280" y2="260" stroke="#FFD700" strokeWidth="3" strokeDasharray="5,5" />
    
    {/* Electron orbits */}
    <circle cx="200" cy="200" r="50" fill="none" stroke="#0A66C2" strokeWidth="1" opacity="0.3" />
    <circle cx="200" cy="200" r="75" fill="none" stroke="#2ECC71" strokeWidth="1" opacity="0.2" />
    
    {/* Center nucleus glow */}
    <circle cx="200" cy="200" r="22" fill="none" stroke="#0A66C2" strokeWidth="1" opacity="0.5" />
  </svg>
)

export const HealthcareDataIllustration = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="#F5F7FA" />
    {/* Background */}
    <circle cx="80" cy="80" r="50" fill="#E3F2FD" opacity="0.5" />
    <circle cx="330" cy="330" r="60" fill="#E8F5E9" opacity="0.4" />
    
    {/* Server/Dashboard */}
    <rect x="80" y="100" width="240" height="200" fill="#FFFFFF" stroke="#0A66C2" strokeWidth="2" rx="8" />
    
    {/* Screen bars/data visualization */}
    <rect x="100" y="120" width="200" height="15" fill="#E3F2FD" rx="3" />
    <rect x="100" y="145" width="180" height="12" fill="#2ECC71" rx="2" />
    <rect x="100" y="165" width="160" height="12" fill="#FF6B6B" rx="2" />
    <rect x="100" y="185" width="190" height="12" fill="#FFD700" rx="2" />
    <rect x="100" y="205" width="170" height="12" fill="#9B59B6" rx="2" />
    <rect x="100" y="225" width="150" height="12" fill="#0A66C2" rx="2" />
    <rect x="100" y="245" width="175" height="12" fill="#2ECC71" rx="2" />
    
    {/* Charts */}
    <g>
      {/* Bar chart */}
      <rect x="310" y="180" width="15" height="80" fill="#2ECC71" rx="2" />
      <rect x="330" y="150" width="15" height="110" fill="#0A66C2" rx="2" />
      <rect x="350" y="170" width="15" height="90" fill="#FF6B6B" rx="2" />
    </g>
    
    {/* Cursor/pointer */}
    <path d="M 240 310 L 250 290 L 260 295 L 250 310 Z" fill="#0A66C2" />
  </svg>
)

export const MedicineBottleIllustration = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="#F0F9FF" />
    {/* Background glow */}
    <circle cx="200" cy="150" r="80" fill="#E3F2FD" opacity="0.4" />
    <circle cx="200" cy="300" r="70" fill="#E8F5E9" opacity="0.3" />
    
    {/* Bottle cap */}
    <rect x="170" y="60" width="60" height="20" fill="#A0A0A0" rx="3" />
    <rect x="165" y="80" width="70" height="10" fill="#BFBFBF" rx="2" />
    
    {/* Bottle neck */}
    <rect x="180" y="90" width="40" height="30" fill="#FFFFFF" stroke="#0A66C2" strokeWidth="2" />
    
    {/* Main bottle body */}
    <path d="M 160 120 L 140 200 Q 140 280 200 290 Q 260 280 260 200 L 240 120 Z" 
          fill="#E3F2FD" stroke="#0A66C2" strokeWidth="3" />
    
    {/* Liquid inside */}
    <path d="M 155 200 L 145 240 Q 145 270 200 278 Q 255 270 255 240 L 245 200 Z" 
          fill="#2ECC71" opacity="0.8" />
    
    {/* Highlight/shine on bottle */}
    <ellipse cx="170" cy="150" rx="12" ry="30" fill="#FFFFFF" opacity="0.5" />
    
    {/* Label */}
    <rect x="155" y="180" width="90" height="50" fill="#FFFFFF" stroke="#0A66C2" strokeWidth="1" rx="4" />
    <circle cx="175" cy="195" r="5" fill="#2ECC71" />
    <line x1="185" y1="190" x2="235" y2="190" stroke="#0A66C2" strokeWidth="1" />
    <line x1="185" y1="200" x2="235" y2="200" stroke="#0A66C2" strokeWidth="1" />
    <line x1="185" y1="210" x2="225" y2="210" stroke="#0A66C2" strokeWidth="1" />
    <line x1="185" y1="220" x2="230" y2="220" stroke="#2ECC71" strokeWidth="1.5" />
  </svg>
)

export const DNAHelixIllustration = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="#FAF5FF" />
    {/* Background */}
    <circle cx="200" cy="100" r="60" fill="#F3E5F5" opacity="0.5" />
    <circle cx="200" cy="320" r="70" fill="#F0F4FF" opacity="0.4" />
    
    {/* DNA double helix */}
    {/* Left helix strand */}
    <path d="M 150 80 Q 180 120 150 160 Q 120 200 150 240 Q 180 280 150 320"
          fill="none" stroke="#9B59B6" strokeWidth="6" />
    
    {/* Right helix strand */}
    <path d="M 250 80 Q 220 120 250 160 Q 280 200 250 240 Q 220 280 250 320"
          fill="none" stroke="#2ECC71" strokeWidth="6" />
    
    {/* Connecting base pairs */}
    <g strokeWidth="2" stroke="#0A66C2" opacity="0.8">
      <line x1="148" y1="100" x2="252" y2="100" />
      <line x1="150" y1="140" x2="250" y2="140" />
      <line x1="148" y1="180" x2="252" y2="180" />
      <line x1="150" y1="220" x2="250" y2="220" />
      <line x1="148" y1="260" x2="252" y2="260" />
      <line x1="150" y1="300" x2="250" y2="300" />
    </g>
    
    {/* Base pair nodes */}
    <g fill="#0A66C2">
      <circle cx="150" cy="100" r="4" />
      <circle cx="200" cy="100" r="3" />
      <circle cx="250" cy="100" r="4" />
      
      <circle cx="150" cy="140" r="4" />
      <circle cx="200" cy="140" r="3" />
      <circle cx="250" cy="140" r="4" />
      
      <circle cx="150" cy="180" r="4" />
      <circle cx="200" cy="180" r="3" />
      <circle cx="250" cy="180" r="4" />
      
      <circle cx="150" cy="220" r="4" />
      <circle cx="200" cy="220" r="3" />
      <circle cx="250" cy="220" r="4" />
      
      <circle cx="150" cy="260" r="4" />
      <circle cx="200" cy="260" r="3" />
      <circle cx="250" cy="260" r="4" />
      
      <circle cx="150" cy="300" r="4" />
      <circle cx="200" cy="300" r="3" />
      <circle cx="250" cy="300" r="4" />
    </g>
  </svg>
)

export const CloudPharmacyIllustration = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="#F0F8FF" />
    {/* Background gradient effect with circles */}
    <circle cx="100" cy="100" r="50" fill="#E3F2FD" opacity="0.4" />
    <circle cx="300" cy="300" r="60" fill="#E0F7FA" opacity="0.3" />
    
    {/* Cloud */}
    <path d="M 80 180 Q 60 160 80 140 Q 100 120 130 130 Q 150 100 180 130 Q 210 110 230 140 Q 250 120 280 150 Q 310 130 320 170 Q 340 160 340 190 Q 340 220 310 230 Q 280 240 250 235 Q 220 250 180 245 Q 140 250 100 235 Q 70 230 80 180 Z"
          fill="#FFFFFF" stroke="#0A66C2" strokeWidth="3" />
    
    {/* Plus sign (medical/pharmacy symbol) inside cloud */}
    <rect x="175" y="175" width="50" height="10" fill="#2ECC71" rx="5" />
    <rect x="190" y="160" width="10" height="50" fill="#2ECC71" rx="5" />
    
    {/* Network dots connected to cloud */}
    <g fill="#0A66C2" opacity="0.7">
      <circle cx="80" cy="300" r="12" />
      <circle cx="200" cy="330" r="12" />
      <circle cx="320" cy="300" r="12" />
      <circle cx="350" cy="180" r="10" />
      <circle cx="40" cy="180" r="10" />
    </g>
    
    {/* Connection lines */}
    <g stroke="#0A66C2" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
      <line x1="200" y1="225" x2="80" y2="300" />
      <line x1="200" y1="225" x2="200" y2="330" />
      <line x1="200" y1="225" x2="320" y2="300" />
      <line x1="200" y1="175" x2="350" y2="180" />
      <line x1="200" y1="175" x2="40" y2="180" />
    </g>
  </svg>
)

export default {
  LabScientistIllustration,
  DrugMoleculeIllustration,
  HealthcareDataIllustration,
  MedicineBottleIllustration,
  DNAHelixIllustration,
  CloudPharmacyIllustration,
}
