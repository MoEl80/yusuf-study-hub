/* Year 9 Science (9A Science 2026) — Flashcards.
   Sources: aligned to the guide.js topics (NESA Science 7–10 Syllabus (2023), Stage 5 —
   https://curriculum.nsw.edu.au/learning-areas/science/science-7-10-2023). */
(function (root) {
  root.YSH_DATA = root.YSH_DATA || {};
  root.YSH_DATA.science = root.YSH_DATA.science || {};
  root.YSH_DATA.science.flashcards = {
    subjectId: 'science',
    cards: [
      { id: 'sci-card-001', topic: 'scientific-method', front: 'Define: hypothesis', back: 'A testable prediction — "If … (change), then … (measure), because … (science)".' },
      { id: 'sci-card-002', topic: 'scientific-method', front: 'Independent vs dependent variable', back: 'Independent: deliberately CHANGED (x-axis). Dependent: MEASURED in response (y-axis).' },
      { id: 'sci-card-003', topic: 'scientific-method', front: 'What makes an experiment RELIABLE?', back: 'Repeating trials and getting consistent results — report the mean of 3+ repeats.' },
      { id: 'sci-card-004', topic: 'scientific-method', front: 'What makes an experiment VALID?', back: 'It actually tests the hypothesis: ONE variable changed at a time, everything else controlled.' },
      { id: 'sci-card-005', topic: 'scientific-method', front: 'How do you calculate a mean?', back: 'Add all the values, divide by how many: (24 + 26 + 25) ÷ 3 = 25 s.' },
      { id: 'sci-card-006', topic: 'scientific-method', front: 'Correlation vs causation', back: 'Things changing together does not prove cause — only a controlled experiment can claim causation.' },
      { id: 'sci-card-007', topic: 'energy', front: 'State the law of conservation of energy', back: 'Energy is never created or destroyed — only transformed between stores.' },
      { id: 'sci-card-008', topic: 'energy', front: 'Efficiency formula', back: 'Efficiency (%) = useful energy out ÷ total energy in × 100.' },
      { id: 'sci-card-009', topic: 'energy', front: 'Calculate: 9 J of light from 60 J electrical', back: '9 ÷ 60 × 100 = 15% efficient — the rest left as unwanted heat.' },
      { id: 'sci-card-010', topic: 'energy', front: 'Conduction vs convection vs radiation', back: 'Conduction: particle collisions (solids). Convection: rising warm-fluid currents. Radiation: infrared waves — no medium needed.' },
      { id: 'sci-card-011', topic: 'energy', front: 'Name THREE renewable energy sources', back: 'Solar, wind, hydro (also biomass, geothermal) — they replenish naturally.' },
      { id: 'sci-card-012', topic: 'energy', front: 'What makes an energy source "good"?', back: 'Nothing absolutely — evaluate against cost, reliability, emissions and ethics (SC5-EGY-01).' },
      { id: 'sci-card-013', topic: 'chemical-reactions', front: 'FOUR signs a chemical reaction occurred', back: 'New colour, gas produced, precipitate forms, temperature/light change — a NEW substance exists.' },
      { id: 'sci-card-014', topic: 'chemical-reactions', front: 'State the law of conservation of mass', back: 'Atoms are only rearranged: total mass of reactants = total mass of products.' },
      { id: 'sci-card-015', topic: 'chemical-reactions', front: 'The one balancing rule for equations', back: 'Change COEFFICIENTS (big numbers) only — never subscripts: 2Mg + O₂ → 2MgO.' },
      { id: 'sci-card-016', topic: 'chemical-reactions', front: 'State collision theory', back: 'Reactions happen when particles collide with at least the activation energy and the right orientation.' },
      { id: 'sci-card-017', topic: 'chemical-reactions', front: 'FOUR ways to increase reaction rate', back: 'Heat it, concentrate it, use smaller pieces (more surface area), or add a catalyst.' },
      { id: 'sci-card-018', topic: 'chemical-reactions', front: 'What does a catalyst do?', back: 'Lowers the activation energy so more collisions succeed — without being used up itself.' },
      { id: 'sci-card-019', topic: 'disease', front: 'Name the FOUR pathogen types', back: 'Bacteria, viruses, fungi, protozoa.' },
      { id: 'sci-card-020', topic: 'disease', front: 'Why don\'t antibiotics cure colds?', back: 'Colds are viral — antibiotics attack bacteria only; overuse breeds resistant bacteria.' },
      { id: 'sci-card-021', topic: 'disease', front: 'How do vaccines protect you?', back: 'A harmless form/fragment of the pathogen trains memory white blood cells to fight the real thing fast.' },
      { id: 'sci-card-022', topic: 'disease', front: 'What is herd immunity?', back: 'When enough of a population is immune (≈92% for measles), transmission chains break — protecting the vulnerable.' },
      { id: 'sci-card-023', topic: 'disease', front: 'Define: vector', back: 'An organism that carries and transmits a pathogen without getting sick — the mosquito spreads malaria.' },
      { id: 'sci-card-024', topic: 'disease', front: 'Give FOUR first-line defences', back: 'Skin, mucus, cilia, stomach acid — barriers that stop pathogens entering at all.' },
      { id: 'sci-card-025', topic: 'environmental-sustainability', front: 'What is biodiversity?', back: 'The variety of life in an area — genes, species and ecosystems; high biodiversity = more resilient.' },
      { id: 'sci-card-026', topic: 'environmental-sustainability', front: 'The 10% energy rule', back: 'Only ~10% of energy passes to the next feeding level; the rest is lost as heat/waste — food chains stay short.' },
      { id: 'sci-card-027', topic: 'environmental-sustainability', front: 'Trace 100 000 kJ through three levels', back: '100 000 → 10 000 → 1 000 kJ (producer → primary consumer → secondary consumer).' },
      { id: 'sci-card-028', topic: 'environmental-sustainability', front: 'Why do introduced species explode in number?', back: 'No natural predators/diseases here, and native prey have no evolved defences (feral cats vs small marsupials).' },
      { id: 'sci-card-029', topic: 'environmental-sustainability', front: 'The enhanced greenhouse effect', back: 'Extra CO₂ from burning fossil fuels traps more heat → warming, ocean acidification, sea-level rise.' },
      { id: 'sci-card-030', topic: 'environmental-sustainability', front: 'What makes environmental management "sustainable"?', back: 'It is evidence-based: monitor populations, protect habitat, set quotas — then check the numbers recover.' },
      { id: 'sci-card-031', topic: 'genetics-evolution', front: 'DNA base-pairing rule', back: 'Adenine–thymine (A–T), cytosine–guanine (C–G) — complementary pairs in the double helix.' },
      { id: 'sci-card-032', topic: 'genetics-evolution', front: 'Gene vs allele', back: 'Gene: a DNA section coding a trait. Allele: a variant of that gene (B vs b).' },
      { id: 'sci-card-033', topic: 'genetics-evolution', front: 'Cross Bb × Bb — probabilities?', back: '1 BB : 2 Bb : 1 bb → 75% dominant phenotype, 25% recessive — per pregnancy.' },
      { id: 'sci-card-034', topic: 'genetics-evolution', front: 'What does meiosis produce?', back: 'Gametes with HALF the chromosome number — one allele of each gene per gamete.' },
      { id: 'sci-card-035', topic: 'genetics-evolution', front: 'FOUR steps of natural selection', back: 'Variation → selection pressure → differential survival/reproduction → inherited alleles spread. Populations evolve, not individuals.' },
      { id: 'sci-card-036', topic: 'genetics-evolution', front: 'Define: evolution', back: 'Change in a population\'s inherited characteristics (allele frequencies) over generations.' },
      { id: 'sci-card-037', topic: 'waves-motion', front: 'What does a wave transfer?', back: 'ENERGY — never matter; the medium just vibrates in place.' },
      { id: 'sci-card-038', topic: 'waves-motion', front: 'Wave equation + units', back: 'v = f × λ (m/s = Hz × m); period T = 1 ÷ f.' },
      { id: 'sci-card-039', topic: 'waves-motion', front: 'EM spectrum in wavelength order', back: 'Radio, microwave, infrared, visible, UV, X-ray, gamma — long → short; energy rises as wavelength falls.' },
      { id: 'sci-card-040', topic: 'waves-motion', front: 'Newton\'s first law', back: 'No NET force → no change in motion: at rest stays at rest, constant velocity stays constant (inertia).' },
      { id: 'sci-card-041', topic: 'waves-motion', front: 'F = ma worked example', back: '24 N on 6 kg → a = 24 ÷ 6 = 4 m/s².' },
      { id: 'sci-card-042', topic: 'waves-motion', front: 'Transverse vs longitudinal', back: 'Transverse vibrates ACROSS the travel direction (light). Longitudinal vibrates ALONG it (sound).' },
      { id: 'sci-card-043', topic: 'materials', front: 'Physical vs chemical property', back: 'Physical: observed without changing the substance (density, melting point). Chemical: how it reacts (flammability, corrosion).' },
      { id: 'sci-card-044', topic: 'materials', front: 'Density formula + units', back: 'd = m ÷ V, in g/cm³; less dense than 1 g/cm³ → floats on water.' },
      { id: 'sci-card-045', topic: 'materials', front: 'Density: 270 g in 100 cm³ — identify it', back: '270 ÷ 100 = 2.7 g/cm³ → aluminium (table value).' },
      { id: 'sci-card-046', topic: 'materials', front: 'Why is copper used for wiring?', back: 'Excellent electrical conductor AND ductile (drawn into wire); the plastic coating insulates.' },
      { id: 'sci-card-047', topic: 'materials', front: 'What is a composite? Give one', back: 'Two materials combined for both property sets — concrete + steel rebar = compression + tension strength.' },
      { id: 'sci-card-048', topic: 'materials', front: 'TWO criteria beyond properties when choosing a material', back: 'Cost and recyclability/environmental impact — SC5-MAT-01 is an assessment outcome.' }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
