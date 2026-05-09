// ─── SITE META ────────────────────────────────────────────────
export const SITE_NAME = 'AG Design Solutions'
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://agdesignsolutions.com'
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '917639143077'
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'contact@agdesignsolutions.com'

// ─── NAVIGATION ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',                 path: '/' },
  { label: 'Designing',            path: '/designing' },
  { label: 'Integrated Packaging', path: '/integrated-packaging' },
  { label: 'SPM',                  path: '/spm' },
  { label: 'Contact',              path: '/contact' },
]

// ─── COMPANY INFO ─────────────────────────────────────────────
export const CONTACT_INFO = {
  corporate: '60, Sakthi Garden, Nagarpalayam, Gobichettipalayam – 638452',
  plant: 'S.no. 64/1b2, Orathur main road, Orathur village, Padappai, Sriperumbudur tk, Kancheepuram district – 603 203',
  emails: ['sales@agdesignsolutions.com', 'info@agdesignsolutions.com'],
  phones: ['+91 76391 43077', '+91 70942 39343'],
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15538.511744826434!2d80.3101676!3d13.185843199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a52f717a8eb6d89%3A0x48a3553908182001!2sLogic%20Design%20Solutions%2C%2064%2F1B2%2C%20Orathur%20Main%20Rd%2C%20Padappai%2C%20Tamil%20Nadu%20603203!3m2!1d12.8530155!2d80.0177035!5e0!3m2!1sen!2sin!4v1774852227593!5m2!1sen!2sin',
}

// ─── HOME STATS ───────────────────────────────────────────────
export const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Industry Sectors' },
  { value: 100, suffix: '%', label: 'Engineering Precision' },
  { value: 2,  suffix: '',  label: 'Expert Founders' },
]

// ─── WHY CHOOSE US ────────────────────────────────────────────
export const FEATURES = [
  {
    icon: 'Zap',
    title: 'Accelerated Time-to-Market',
    desc: 'Rapid design-to-delivery pipelines that cut lead times without compromising precision.',
  },
  {
    icon: 'RefreshCw',
    title: 'End-to-End Support',
    desc: 'From concept and design through simulation, manufacturing, and delivery — one partner, one point of contact.',
  },
  {
    icon: 'Settings',
    title: 'Engineering-Driven Solutions',
    desc: 'Every design decision backed by mechanical engineering expertise, not guesswork.',
  },
  {
    icon: 'Target',
    title: 'Customized Approach',
    desc: 'No templates. Every SPM, fixture, and package is engineered for your exact operational needs.',
  },
  {
    icon: 'TrendingUp',
    title: 'Cost-Effective Optimization',
    desc: 'Maximize ROI through smart design choices that reduce material waste and production costs.',
  },
  {
    icon: 'Leaf',
    title: 'Sustainable Thinking',
    desc: 'Designs that consider longevity, reusability, and environmental impact from day one.',
  },
]

// ─── SERVICES ─────────────────────────────────────────────────
export const SERVICES = [
  {
    title: 'Designing',
    desc: 'Structural, Mould, Jig & Fixture, Assembly, Sheet Metal, Motion Study, Testing & Simulation, Manufacturing Drawings.',
    img: 'https://placehold.co/600x400/111B30/1E6FE8?text=Design+Services',
    path: '/designing',
    cta: 'View Designing →',
    color: '1E6FE8',
  },
  {
    title: 'Integrated Packaging',
    desc: 'Plastic, Metal, Wooden, Corrugated, and Consumable packaging solutions for every industry.',
    img: 'https://placehold.co/600x400/111B30/4F46E5?text=Packaging+Solutions',
    path: '/integrated-packaging',
    cta: 'View Packaging →',
    color: '4F46E5',
  },
  {
    title: 'Special Purpose Machines',
    desc: 'Custom-built machines: Bottle Cap Vadding, Conveyor Systems, Can Filling Lines, Cap Pressing, Vertical FFS and more.',
    img: 'https://placehold.co/600x400/111B30/06B6D4?text=SPM+Manufacturing',
    path: '/spm',
    cta: 'View SPMs →',
    color: '06B6D4',
  },
]

// ─── SECTORS ──────────────────────────────────────────────────
export const SECTORS = [
  { icon: 'Car',            name: 'Automotive & Auto Components' },
  { icon: 'Zap',            name: 'Renewable Energy' },
  { icon: 'Package',        name: 'Supply Chain & Warehouse' },
  { icon: 'Rocket',         name: 'Aerospace & Defence' },
  { icon: 'CircuitBoard',   name: 'Industrial Products & Electronics' },
  { icon: 'UtensilsCrossed',name: 'Food & Beverage' },
  { icon: 'Pill',           name: 'Pharmaceuticals & Medical Devices' },
  { icon: 'ShoppingBag',    name: 'Fast-Moving Consumer Goods (FMCG)' },
  { icon: 'ShoppingCart',   name: 'E-Commerce' },
]

// ─── DESIGNING PAGE ───────────────────────────────────────────
export const DESIGN_PRODUCT_TILES = [
  { name: 'Structural',   color: '1E6FE8', img: 'https://placehold.co/400x300/111B30/1E6FE8?text=Structural' },
  { name: 'Mould',        color: '4F46E5', img: 'https://placehold.co/400x300/111B30/4F46E5?text=Mould' },
  { name: 'Jig & Fixture',color: '06B6D4', img: 'https://placehold.co/400x300/111B30/06B6D4?text=Jig+%26+Fixture' },
  { name: 'Assembly',     color: '1E6FE8', img: 'https://placehold.co/400x300/111B30/1E6FE8?text=Assembly' },
  { name: 'Sheet Metal',  color: '4F46E5', img: 'https://placehold.co/400x300/111B30/4F46E5?text=Sheet+Metal' },
  { name: 'Motion Study', color: '06B6D4', img: 'https://placehold.co/400x300/111B30/06B6D4?text=Motion+Study' },
]

export const DESIGN_TESTING_TILES = [
  { name: 'Static',  color: '10B981', img: 'https://placehold.co/400x300/111B30/10B981?text=Static' },
  { name: 'Dynamic', color: '10B981', img: 'https://placehold.co/400x300/111B30/10B981?text=Dynamic' },
  { name: 'Flow',    color: '10B981', img: 'https://placehold.co/400x300/111B30/10B981?text=Flow' },
]

export const DESIGN_DRAWING_TILES = [
  { name: 'Profile Product',  color: 'F97316', img: 'https://placehold.co/400x300/111B30/F97316?text=Profile+Product' },
  { name: 'Single Product',   color: 'F97316', img: 'https://placehold.co/400x300/111B30/F97316?text=Single+Product' },
  { name: 'Assembly Product', color: 'F97316', img: 'https://placehold.co/400x300/111B30/F97316?text=Assembly+Product' },
]

// ─── PACKAGING PAGE ───────────────────────────────────────────
export const PACKAGING_TABS = [
  { key: 'plastic',     label: 'Plastic Solution' },
  { key: 'metal',       label: 'Metal Solution' },
  { key: 'wooden',      label: 'Wooden & Corrugated' },
  { key: 'consumables', label: 'Consumables' },
]

export const PACKAGING_DATA = {
  plastic: {
    color: '1E6FE8',
    items: [
      'FLC Smooth Wall','PSB','FLC Ribbed Wall','Veg Crate','Rigid Crate','Foldable Crate',
      'Crate With Lid','Crate With Poly Cover','Pallet Collar','PP Box','PP Dunnage',
      'Crate With HDPE Dunnage','VF Tray','VF Tray',
    ],
  },
  metal: {
    color: '4F46E5',
    items: ['Metal Pallet','Foldable Mesh Bin','Customized Metal Bin','Metal Trolley','Metal Trolley'],
  },
  wooden: {
    color: 'F97316',
    items: [
      'Wooden Pallet','Wooden Box','Wooden Collar','Wooden Crate Box',
      'Wooden Pallet with Metal Sleeve','RSC Corrugated Box',
      'Export Heavy Duty Corrugated Box','Export Heavy Duty Corrugated Box',
    ],
  },
  consumables: {
    color: '10B981',
    items: ['Stretch Film','Bopp Tape','Pet Strap','VCI','XLPE Foam','EPE Foam','PU Foam'],
  },
}

// ─── SPM PAGE ─────────────────────────────────────────────────
export const SPMS = [
  {
    name: 'Bottle Cap Vadding',
    desc: 'Precision machine for applying and compressing bottle cap vadding at high throughput speeds.',
    img: 'https://placehold.co/500x350/111B30/1E6FE8?text=Bottle+Cap+Vadding',
    color: '1E6FE8',
  },
  {
    name: 'Elevated Conveyor',
    desc: 'Multi-level conveyor system for seamless product transfer between floors and production stages.',
    img: 'https://placehold.co/500x350/111B30/4F46E5?text=Elevated+Conveyor',
    color: '4F46E5',
  },
  {
    name: 'Can Filling Line',
    desc: 'Automated line for accurate can filling, sealing, and labelling operations at scale.',
    img: 'https://placehold.co/500x350/111B30/06B6D4?text=Can+Filling+Line',
    color: '06B6D4',
  },
  {
    name: 'Cap Pressing Machine',
    desc: 'High-force pressing machine engineered for consistent cap fitting on containers of all sizes.',
    img: 'https://placehold.co/500x350/111B30/1E6FE8?text=Cap+Pressing+Machine',
    color: '1E6FE8',
  },
  {
    name: 'Roller Bed Conveyor',
    desc: 'Heavy-duty roller conveyor for industrial material handling and assembly line applications.',
    img: 'https://placehold.co/500x350/111B30/F97316?text=Roller+Bed+Conveyor',
    color: 'F97316',
  },
  {
    name: 'Vertical FFS',
    desc: 'Vertical Form Fill Seal machine for flexible pouching of powders, granules, and liquids.',
    img: 'https://placehold.co/500x350/111B30/10B981?text=Vertical+FFS',
    color: '10B981',
  },
]

// ─── SOCIAL LINKS ─────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { icon: 'Linkedin',  href: 'https://www.linkedin.com/company/ag-design-solutions',  label: 'LinkedIn' },
  { icon: 'Instagram', href: 'https://www.instagram.com/agdesignsolutions',            label: 'Instagram' },
  { icon: 'Youtube',   href: '#',                                                      label: 'YouTube' },
]
