// ─── Path prep ────────────────────────────────────────────────
const PATH = `/Reference_Image`
// ─── SITE META ────────────────────────────────────────────────
export const SITE_NAME = `AG Design Solutions`
export const SITE_URL = import.meta.env.VITE_SITE_URL || `https://agdesignsolutions.com`
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || `917094239343`
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || `agdesignsolutionstn@gmail.com`

// ─── NAVIGATION ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: `Home`,                 path: `/` },
  { label: `Designing`,            path: `/designing` },
  { label: `Integrated Packaging`, path: `/integrated-packaging` },
  { label: `SPM`,                  path: `/spm` },
  { label: `Contact`,              path: `/contact` },
]

// ─── COMPANY INFO ─────────────────────────────────────────────
export const CONTACT_INFO = {
  corporate: `No.82 B/2,Gandhi Road,Aalapakkam, New Perungalathur 600063`,
  plant: ` –ThirumudivakkamIndustrial Estate, ,Sirukalathur 600 069`,
  emails: [`agdesignsolutionstn@gmail.com`],
  phones: [`+91  7094239343`],
  mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2099617494623!2d80.1101194!3d12.894216499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f88e9e42d9d%3A0x6f63ad2feea033b0!2sAG%20Design%20Solutions!5e0!3m2!1sen!2sin!4v1779677384823!5m2!1sen!2sin`,
}

// ─── HOME STATS ───────────────────────────────────────────────
export const STATS = [
  { value: 50, suffix: `+`, label: `Projects Delivered` },
  { value: 10, suffix: `+`, label: `Industry Sectors` },
  { value: 100, suffix: `%`, label: `Engineering Precision` },
  { value: 2,  suffix: ``,  label: `Expert Founders` },
]

// ─── WHY CHOOSE US ────────────────────────────────────────────
export const FEATURES = [
  {
    icon: `Zap`,
    title: `Accelerated Time-to-Market`,
    desc: `Rapid design-to-delivery pipelines that cut lead times without compromising precision.`,
  },
  {
    icon: `RefreshCw`,
    title: `End-to-End Support`,
    desc: `From concept and design through simulation, manufacturing, and delivery — one partner, one point of contact.`,
  },
  {
    icon: `Settings`,
    title: `Engineering-Driven Solutions`,
    desc: `Every design decision backed by mechanical engineering expertise, not guesswork.`,
  },
  {
    icon: `Target`,
    title: `Customized Approach`,
    desc: `No templates. Every SPM, fixture, and package is engineered for your exact operational needs.`,
  },
  {
    icon: `TrendingUp`,
    title: `Cost-Effective Optimization`,
    desc: `Maximize ROI through smart design choices that reduce material waste and production costs.`,
  },
  {
    icon: `Leaf`,
    title: `Sustainable Thinking`,
    desc: `Designs that consider longevity, reusability, and environmental impact from day one.`,
  },
]

// ─── SERVICES ─────────────────────────────────────────────────
export const SERVICES = [
  {
    title: `Designing`,
    desc: `Structural, Mould, Jig & Fixture, Assembly, Sheet Metal, Motion Study, Testing & Simulation, Manufacturing Drawings.`,
    img: `https://placehold.co/600x400/111B30/1E6FE8?text=Design+Services`,
    path: `/designing`,
    cta: `View Designing`,
    color: `1E6FE8`,
  },
  {
    title: `Integrated Packaging`,
    desc: `Plastic, Metal, Wooden, Corrugated, and Consumable packaging solutions for every industry.`,
    img: `https://placehold.co/600x400/111B30/4F46E5?text=Packaging+Solutions`,
    path: `/integrated-packaging`,
    cta: `View Packaging`,
    color: `4F46E5`,
  },
  {
    title: `Special Purpose Machines`,
    desc: `Custom-built machines: Bottle Cap Vadding, Conveyor Systems, Can Filling Lines, Cap Pressing, Vertical FFS and more.`,
    img: `https://placehold.co/600x400/111B30/06B6D4?text=SPM+Manufacturing`,
    path: `/spm`,
    cta: `View SPMs`,
    color: `06B6D4`,
  },
]

// ─── SECTORS ──────────────────────────────────────────────────
export const SECTORS = [
  { icon: `Car`,            name: `Automotive & Auto Components` },
  { icon: `Zap`,            name: `Renewable Energy` },
  { icon: `Package`,        name: `Supply Chain & Warehouse` },
  { icon: `Rocket`,         name: `Aerospace & Defence` },
  { icon: `CircuitBoard`,   name: `Industrial Products & Electronics` },
  { icon: `UtensilsCrossed`,name: `Food & Beverage` },
  { icon: `Pill`,           name: `Pharmaceuticals & Medical Devices` },
  { icon: `ShoppingBag`,    name: `Fast-Moving Consumer Goods (FMCG)` },
  { icon: `ShoppingCart`,   name: `E-Commerce` },
]

// ─── DESIGNING PAGE ───────────────────────────────────────────
export const DESIGN_PRODUCT_TILES = [
  { name: `Structural`,   color: `#8bf2a5`, img: `${PATH}/Structural.jpg` },
  { name: `Mould`,        color: `4F46E5`, img: `${PATH}/mould.webp` },
  { name: `Jig & Fixture`,color: `06B6D4`, img: `${PATH}/Jig_Fixture.avif` },
  { name: `Assembly`,     color: `1E6FE8`, img: `${PATH}/Assembly.jpg` },
  { name: `Sheet Metal`,  color: `4F46E5`, img: `${PATH}/sheet_metal.jpg` },
  { name: `Motion Study`, color: `06B6D4`, img: `${PATH}/motion-studys.webp` },
]

export const DESIGN_TESTING_TILES = [
  { name: `Static`,  color: `10B981`, img: `${PATH}/Static.png` },
  { name: `Dynamic`, color: `10B981`, img: `${PATH}/dynamic.webp` },
  { name: `Flow`,    color: `10B981`, img: `${PATH}/flow.jpg` },
]

export const DESIGN_DRAWING_TILES = [
  { name: `Profile Product`,  color: `F97316`, img: `${PATH}/F97316?text=Profile+Product` },
  { name: `Single Product`,   color: `F97316`, img: `${PATH}/F97316?text=Single+Product` },
  { name: `Assembly Product`, color: `F97316`, img: `${PATH}/F97316?text=Assembly+Product` },
]

// ─── PACKAGING PAGE ───────────────────────────────────────────
export const PACKAGING_TABS = [
  { key: `plastic`,     label: `Plastic Solution` },
  { key: `metal`,       label: `Metal Solution` },
  { key: `wooden`,      label: `Wooden & Corrugated` },
  // { key: `consumables`, label: `Consumables` },
]

export const PACKAGING_DATA = {
plastic: [
  { name: `FLC Smooth Wall`, color: `1E6FE8`, img: `${PATH}/flc_smooth_wall.webp` },
  { name: `PSB`, color: `1E6FE8`, img: `${PATH}/psb_1.jpg` },
  { name: `FLC Ribbed Wall`, color: `1E6FE8`, img: `${PATH}/flc_ribbed_wall.webp` },
  { name: `Veg Crate`, color: `1E6FE8`, img: `${PATH}/VEG_CRATE.avif` },
  { name: `Rigid Crate`, color: `1E6FE8`, img: `${PATH}/Rigid_Crate.jpg` },
  { name: `Foldable Crate`, color: `1E6FE8`, img: `${PATH}/Foldable_Crate.avif` },
  { name: `Crate With Lid`, color: `1E6FE8`, img: `${PATH}/Crate_With_Lid.jpg` },
  { name: `Crate With Poly Cover`, color: `1E6FE8`, img: `${PATH}/Crate_With_Poly_Cover.avif` },
  { name: `Pallet Collar`, color: `1E6FE8`, img: `${PATH}/Pallet_Collar.jpg` },
  { name: `PP Box`, color: `1E6FE8`, img: `${PATH}/pp_box.webp` },
  { name: `PP Dunnage`, color: `1E6FE8`, img: `${PATH}/PP_Dunnage.avif` },
  { name: `Crate With HDPE Dunnage`, color: `1E6FE8`, img: `${PATH}/Crate_With_HDPE_Dunnage.avif` },
  { name: `VF Tray`, color: `1E6FE8`, img: `${PATH}/VF_Tray.jpg` },
],

metal: [
  { name: `Metal Pallet`, color: `4F46E5`, img: `${PATH}/metal_pallet.avif` },
  { name: `Foldable Mesh Bin`, color: `4F46E5`, img: `${PATH}/Foldable_Mesh_Bin.avif` },
  { name: `Customized Metal Bin`, color: `4F46E5`, img: `${PATH}/Customized-Metal-Bin.webp` },
  { name: `Metal Trolley`, color: `4F46E5`, img: `${PATH}/Metal-Trolley.webp` },
],

wooden: [
  { name: `Wooden Pallet`, color: `F97316`, img: `${PATH}/wooden_pallet.avif` },
  { name: `Wooden Box`, color: `F97316`, img: `${PATH}/wooden_box.jpg` },
  { name: `Wooden Collar`, color: `F97316`, img: `${PATH}/woode_collar.avif` },
  { name: `Wooden Crate Box`, color: `F97316`, img: `${PATH}/wooden_crate.jpg` },
  { name: `Wooden Pallet with Metal Sleeve`, color: `F97316`, img: `${PATH}/Wooden_Pallet_with_metal_sleeve.webp` },
  { name: `RSC Corrugated Box`, color: `F97316`, img: `${PATH}/rsc_box.webp` },
  { name: `Export Heavy Duty Corrugated Box`, color: `F97316`, img: `${PATH}/Export_Heavy_Duty_corrugated_Box.jpg` },
],

// consumables: [
//   { name: `Stretch Film`, color: `10B981`, img: `${PATH}/10B981?text=Stretch+Film` },
//   { name: `Bopp Tape`, color: `10B981`, img: `${PATH}/10B981?text=Bopp+Tape` },
//   { name: `Pet Strap`, color: `10B981`, img: `${PATH}/10B981?text=Pet+Strap` },
//   { name: `VCI`, color: `10B981`, img: `${PATH}/10B981?text=VCI` },
//   { name: `XLPE Foam`, color: `10B981`, img: `${PATH}/10B981?text=XLPE+Foam` },
//   { name: `EPE Foam`, color: `10B981`, img: `${PATH}/10B981?text=EPE+Foam` },
//   { name: `PU Foam`, color: `10B981`, img: `${PATH}/10B981?text=PU+Foam` },
// ],
}

// ─── SPM PAGE ─────────────────────────────────────────────────
export const SPMS = [
  {
    name: `Bottle Cap Vadding`,
    desc: `Precision machine for applying and compressing bottle cap vadding at high throughput speeds.`,
    img: `${PATH}/Bottle-Cap-Pressing-Vadding-1.webp`,
    color: `1E6FE8`,
  },
  {
    name: `Elevated Conveyor`,
    desc: `Multi-level conveyor system for seamless product transfer between floors and production stages.`,
    img: `${PATH}/Elevated_Conveyor.webp`,
    color: `4F46E5`,
  },
  {
    name: `Can Filling Line`,
    desc: `Automated line for accurate can filling, sealing, and labelling operations at scale.`,
    img: `${PATH}/Can_Filling_Line.webp`,
    color: `06B6D4`,
  },
  {
    name: `Cap Pressing Machine`,
    desc: `High-force pressing machine engineered for consistent cap fitting on containers of all sizes.`,
    img: `${PATH}/Cap-Pressing-Machine.png`,
    color: `1E6FE8`,
  },
  {
    name: `Roller Bed Conveyor`,
    desc: `Heavy-duty roller conveyor for industrial material handling and assembly line applications.`,
    img: `${PATH}/Roller-Bed-Conveyor.webp`,
    color: `F97316`,
  },
  {
    name: `Vertical FFS`,
    desc: `Vertical Form Fill Seal machine for flexible pouching of powders, granules, and liquids.`,
    img: `${PATH}/Vertical-FFS.webp`,
    color: `10B981`,
  },
]

// ─── SOCIAL LINKS ─────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { icon: `Linkedin`,  href: `https://www.linkedin.com/company/ag-design-solutions`,  label: `LinkedIn` },
  { icon: `Instagram`, href: `https://www.instagram.com/ag_designsolutions?igsh=MTB0dHg3NTFnZHRncg%3D%3D`,            label: `Instagram` },
  { icon: `Youtube`,   href: `https://youtube.com/@agdesignsolutions-3d?si=0EzJO-pdlJTrP0CP`, label: `YouTube` },
]
