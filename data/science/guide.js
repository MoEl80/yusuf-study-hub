/* Year 9 Science (9A Science 2026, Amity College Illawarra) — Study Guide.
   Sources: https://curriculum.nsw.edu.au/learning-areas/science/science-7-10-2023 and /outcomes (SC5-… outcome statements, parsed 2026-08-28 — see docs/research/nesa-science-sources-2026-08-28.md).
   Topics cover every Stage 5 focus area of the 2023 syllabus; refine against 9A Classroom material as it arrives via _inbox. */
(function (root) {
  root.YSH_DATA = root.YSH_DATA || {};
  root.YSH_DATA.science = root.YSH_DATA.science || {};
  root.YSH_DATA.science.guide = {
    subjectId: 'science',
    syllabus: 'NESA Science 7–10 Syllabus (2023), Stage 5',
    topics: [
      {
        id: 'scientific-method',
        title: 'Working scientifically and data analysis',
        outcomes: ['SC5-WS-02', 'SC5-WS-05', 'SC5-WS-06', 'SC5-DA2-01'],
        bigIdea: 'Science is a method, not a list of facts: ask a testable question, control your variables, collect honest data, and let the evidence — not opinion — decide the conclusion.',
        keyKnowledge: [
          'A hypothesis is a testable prediction in "If … (change), then … (measure), because … (science)" form — it must be falsifiable by an experiment.',
          'Variables: the independent variable is deliberately changed (plotted on the x-axis); the dependent variable is measured in response (y-axis); controlled variables are kept identical so the test is fair.',
          'Reliability means repeating trials and getting consistent results (use the mean of at least 3 trials); validity means the experiment actually tests the hypothesis (one variable changed at a time); accuracy means measurements close to the true value (right instrument, careful reading).',
          'Data tables feed graphs: the independent variable goes on the horizontal axis; line or scatter graphs suit continuous data, bar graphs suit categories.',
          'The mean = sum of values ÷ number of values; the range (highest − lowest) shows spread. An outlier should be investigated and reported, never silently deleted.',
          'A correlation (two things changing together) is not automatically a cause — claims in ads and media need controlled evidence before they are trusted (SC5-DA2-01).'
        ],
        keyTerms: [
          { term: 'hypothesis', definition: 'a testable prediction about the relationship between variables' },
          { term: 'independent variable', definition: 'the factor deliberately changed by the investigator' },
          { term: 'dependent variable', definition: 'the factor measured in response to the change' },
          { term: 'controlled variable', definition: 'a factor kept constant so the comparison is fair' },
          { term: 'reliability', definition: 'consistency of results across repeated trials' },
          { term: 'validity', definition: 'whether the experiment actually tests what it claims to test' },
          { term: 'outlier', definition: 'a result far from the rest of the data, worth investigating before it is used or set aside' }
        ],
        workedExamples: [
          {
            prompt: 'Five trials of a pendulum period gave 1.8 s, 2.0 s, 2.2 s, 1.9 s and 2.1 s. Report the result and judge the reliability.',
            steps: [
              'Step 1 — Add the values: 1.8 + 2.0 + 2.2 + 1.9 + 2.1 = 10.0 s.',
              'Step 2 — Divide by the number of trials: 10.0 ÷ 5 = 2.0 s.',
              'Step 3 — Find the range: 2.2 − 1.8 = 0.4 s (a small spread).',
              'Step 4 — Judge: five repeated trials with a small range = reliable data; report the result as a mean of 2.0 s with a 0.4 s range.'
            ],
            answer: 'Mean = 10.0 ÷ 5 = 2.0 s, range 0.4 s; repeated trials and low spread make the data reliable.'
          },
          {
            prompt: 'Design a valid test of: "If the release height of a toy car on a ramp increases, then it travels further along the floor."',
            steps: [
              'Step 1 — Independent variable: ramp release height (test 10 cm, 20 cm, 30 cm, 40 cm).',
              'Step 2 — Dependent variable: distance travelled along the floor, measured in cm from the ramp base.',
              'Step 3 — Controlled variables: same car, same ramp surface, same floor, same release method (let go — never push).',
              'Step 4 — Repeats: 3 trials per height; record every result in a table, then plot height (x-axis) against mean distance (y-axis).',
              'Step 5 — Conclusion rule: the graph pattern either supports the hypothesis or it does not — never adjust the hypothesis to fit the data.'
            ],
            answer: 'One variable changed (height), one measured (distance), everything else controlled, 3 repeats per height, results graphed and compared to the hypothesis.'
          },
          {
            prompt: 'An energy-drink ad claims "9 out of 10 students felt more focused" after tasting the drink once. What is wrong with this evidence, and what would a scientific test look like?',
            steps: [
              'Step 1 — Identify the claim type: a one-shot survey of self-reported feelings — "feeling focused" is not a controlled measurement, and expectation (placebo effect) can explain it.',
              'Step 2 — Check the sample: who was asked, how many, and who paid for the survey? A tiny, sponsored sample carries bias and conflict of interest.',
              'Step 3 — Design the scientific test: two matched groups — drink with the active ingredient vs an identical drink without; neither group knows which (blind); measure something objective (e.g. score on a standard memory task).',
              'Step 4 — Compare the group means; only if the blind, controlled test shows a real difference does the claim survive.'
            ],
            answer: 'A tiny, biased, self-reported survey cannot show cause; a blind, controlled experiment with objective measurements is the scientific test (SC5-DA2-01).'
          }
        ],
        examFocus: [
          'Data-analysis questions: show the formula, the substitution and the units for every calculation (mean, percentage) — method marks survive even if a final answer slips.',
          'When asked to evaluate an investigation, name the exact flaw (which variable was not controlled / only one trial / biased sample) AND its fix — vague answers like "it was not fair" score nothing.'
        ]
      },
      {
        id: 'energy',
        title: 'Energy and its uses',
        outcomes: ['SC5-EGY-01'],
        bigIdea: 'Energy is never created or destroyed — it is transformed between stores; because every transformation leaks unwanted heat, choosing energy sources is an ethical and sustainability decision, not just a physics one.',
        keyKnowledge: [
          'Energy stores and forms: chemical (food, fuel), kinetic, gravitational potential, elastic, thermal, electrical, nuclear, light and sound. Devices transform energy between them.',
          'Law of conservation of energy: energy cannot be created or destroyed, only transformed or transferred — energy in equals energy out, even though some always becomes unwanted heat and sound.',
          'Efficiency (%) = useful energy out ÷ total energy in × 100. No device is 100% efficient because friction and resistance always convert some energy to heat.',
          'Heat transfer: conduction (particle collisions, mainly solids), convection (rising and sinking currents in fluids) and radiation (infrared waves — needs no medium).',
          'Non-renewable sources (coal, oil, gas) are finite and emit carbon dioxide when burned; renewable sources (solar, wind, hydro, biomass) replenish naturally but vary in cost and reliability.',
          'SC5-EGY-01 asks you to EVALUATE energy choices against criteria — cost, reliability, emissions, land use, fairness to future generations — not just to rank "renewable good, coal bad".'
        ],
        keyTerms: [
          { term: 'energy transformation', definition: 'the change of energy from one form to another (e.g. electrical → light + heat in a globe)' },
          { term: 'conservation of energy', definition: 'the law that energy cannot be created or destroyed, only transformed or transferred' },
          { term: 'efficiency', definition: 'the percentage of input energy transformed into useful output' },
          { term: 'conduction', definition: 'heat transfer through direct particle collisions, mainly in solids' },
          { term: 'convection', definition: 'heat transfer by currents in liquids and gases as warm fluid rises and cool fluid sinks' },
          { term: 'radiation', definition: 'heat transfer by infrared waves, which needs no medium' },
          { term: 'renewable energy', definition: 'energy from sources that replenish naturally, such as solar, wind and hydro' }
        ],
        workedExamples: [
          {
            prompt: 'An LED globe receives 50 J of electrical energy and delivers 5 J of light. Calculate its efficiency.',
            steps: [
              'Step 1 — Identify: useful output = 5 J (light); total input = 50 J (electricity).',
              'Step 2 — Apply the formula: efficiency = useful ÷ total × 100 = 5 ÷ 50 × 100.',
              'Step 3 — Compute: 5 ÷ 50 = 0.1, and 0.1 × 100 = 10%.',
              'Step 4 — Interpret: the missing 45 J left as heat — the same reason LEDs stay cooler than old incandescent globes (about 5% efficient).'
            ],
            answer: 'Efficiency = 5 ÷ 50 × 100 = 10%; the other 45 J (90%) was transformed to unwanted heat.'
          },
          {
            prompt: 'A 2.0 kg backpack is lifted 1.5 m onto a shelf. How much gravitational potential energy does it gain? (g = 9.8 m/s²)',
            steps: [
              'Step 1 — Formula: Ep = m × g × h.',
              'Step 2 — Substitute: Ep = 2.0 × 9.8 × 1.5.',
              'Step 3 — Compute: 2.0 × 9.8 = 19.6, and 19.6 × 1.5 = 29.4 J.',
              'Step 4 — Sense-check: about 30 J to lift a heavy bag 1.5 m is reasonable; the unit is joules.'
            ],
            answer: 'Ep = 2.0 × 9.8 × 1.5 = 29.4 J of gravitational potential energy gained.'
          },
          {
            prompt: 'Your school wants reliable, lower-emission power. Compare rooftop solar with grid coal power on cost, reliability and sustainability, then make a recommendation.',
            steps: [
              'Step 1 — Set the criteria: cost over the long run, reliability when needed, emissions, and ethical/sustainability considerations (the SC5-EGY-01 verbs).',
              'Step 2 — Solar: high upfront cost but near-zero running cost; generates in daylight only (batteries needed for night); near-zero operating emissions; needs roof space.',
              'Step 3 — Coal grid: no upfront school cost and high reliability; but the fuel is finite, emissions are high, and mining damages land and waterways.',
              'Step 4 — Recommend with a named trade-off: e.g. "solar panels with grid backup" cuts emissions and long-run cost while keeping supply reliable on cloudy days.'
            ],
            answer: 'A justified recommendation weighing cost, reliability and emissions — an evaluation with a trade-off, not a list of facts.'
          }
        ],
        examFocus: [
          'Every efficiency or energy calculation: formula → substitution → answer with unit → one sentence of interpretation ("the rest is lost as heat").',
          'Extended "evaluate" questions need a judgement plus at least two criteria (cost, reliability, emissions) and a named trade-off — sitting on the fence caps your marks.'
        ]
      },
      {
        id: 'chemical-reactions',
        title: 'Chemical reactions and rates',
        outcomes: ['SC5-RXN-01', 'SC5-RXN-02'],
        bigIdea: 'Chemical reactions rearrange atoms into new substances — nothing is lost or gained — and the collision model explains both why reactions happen and what makes them faster.',
        keyKnowledge: [
          'Signs a chemical reaction occurred: a new colour, gas produced, a precipitate (solid) forming, or a temperature/light change — evidence a NEW substance exists; in a physical change (melting, dissolving) the substance itself does not change.',
          'Law of conservation of mass: atoms are only rearranged, so the total mass of reactants equals the total mass of products — this is why equations must be balanced.',
          'Balance equations by changing COEFFICIENTS (the big numbers) only — never the subscripts: 2Mg + O₂ → 2MgO.',
          'Collision theory: reactions occur when particles collide with at least the activation energy and the right orientation — anything that increases collision frequency or collision energy increases the rate.',
          'Rate factors (SC5-RXN-02): higher temperature, higher concentration or pressure, smaller pieces (more surface area) and catalysts all speed reactions; a catalyst lowers the activation energy without being used up.',
          'Everyday reaction types: combustion (burning fuels), corrosion (rusting), acid + metal → salt + hydrogen, acid + carbonate → salt + water + carbon dioxide, neutralisation, decomposition.'
        ],
        keyTerms: [
          { term: 'reactant', definition: 'a starting substance in a chemical reaction (written left of the arrow)' },
          { term: 'product', definition: 'a new substance formed by a chemical reaction (written right of the arrow)' },
          { term: 'conservation of mass', definition: 'the total mass of reactants equals the total mass of products — atoms are rearranged, never created or destroyed' },
          { term: 'activation energy', definition: 'the minimum energy colliding particles need for a reaction to occur' },
          { term: 'catalyst', definition: 'a substance that increases reaction rate by lowering the activation energy, without being consumed' },
          { term: 'combustion', definition: 'an exothermic reaction of a fuel with oxygen, releasing heat and light' },
          { term: 'rate of reaction', definition: 'how quickly reactants are used up or products form per unit time' }
        ],
        workedExamples: [
          {
            prompt: 'Balance: Mg + O₂ → MgO.',
            steps: [
              'Step 1 — Count atoms each side: left = 1 Mg, 2 O; right = 1 Mg, 1 O. Oxygen does not balance.',
              'Step 2 — Balance oxygen with a coefficient: put 2 in front of MgO → right side = 1 Mg, 2 O.',
              'Step 3 — Rebalance magnesium: put 2 in front of Mg → left side = 2 Mg, 2 O.',
              'Step 4 — Verify: left = 2 Mg, 2 O and right (2MgO) = 2 Mg, 2 O. Balanced.'
            ],
            answer: '2Mg + O₂ → 2MgO — balanced with coefficients only; the subscripts in MgO never change.'
          },
          {
            prompt: 'Marble chips reacting with hydrochloric acid produced 48 mL of CO₂ in 2.0 minutes. Calculate the mean rate, and predict the effect of using powdered marble instead.',
            steps: [
              'Step 1 — Formula: mean rate = volume of gas ÷ time = 48 mL ÷ 2.0 min.',
              'Step 2 — Compute: 48 ÷ 2.0 = 24 mL/min.',
              'Step 3 — Apply collision theory: powder exposes far more surface than chips.',
              'Step 4 — Prediction: more exposed surface → more collision sites per second → a faster rate (a steeper graph early on), with the SAME total gas at the end.'
            ],
            answer: 'Mean rate = 48 ÷ 2.0 = 24 mL/min; powdering the marble raises the rate by increasing collision frequency — total product unchanged.'
          },
          {
            prompt: 'Convert and balance: "methane burns in oxygen producing carbon dioxide and water".',
            steps: [
              'Step 1 — Word equation: methane + oxygen → carbon dioxide + water.',
              'Step 2 — Replace words with formulae: CH₄ + O₂ → CO₂ + H₂O.',
              'Step 3 — Count both sides: left = 1 C, 4 H, 2 O; right = 1 C, 2 H, 3 O. Carbon balances; H and O do not.',
              'Step 4 — Balance hydrogen (put 2 in front of H₂O): right side now = 1 C, 4 H, 4 O.',
              'Step 5 — Balance oxygen (need 4 on the left → 2O₂) and verify: left = 1 C, 4 H, 4 O = right ✓'
            ],
            answer: 'CH₄ + 2O₂ → CO₂ + 2H₂O — 1 carbon, 4 hydrogen and 4 oxygen atoms on each side.'
          }
        ],
        examFocus: [
          'Balancing questions: write the atom count for EACH element on both sides before and after — markers award the method, not a lucky guess.',
          'Explain rate answers with collision theory (frequency and/or energy of collisions) — "particles move faster" alone loses the explanation mark; link factor → collisions → rate.'
        ]
      },
      {
        id: 'disease',
        title: 'Disease, immunity and prevention',
        outcomes: ['SC5-DIS-01'],
        bigIdea: 'Disease is caused by specific pathogens spread in specific ways — so understanding the cause and the transmission chain lets us break it with hygiene, vaccination and the right medicine.',
        keyKnowledge: [
          'Pathogen types: bacteria (single cells — some release toxins, e.g. cholera), viruses (genetic code in a protein coat that hijacks cells — e.g. influenza), fungi (e.g. athlete\'s foot) and protozoa (e.g. the Plasmodium of malaria).',
          'Transmission routes: direct contact, droplets/airborne (coughs and sneezes), contaminated food or water, and vectors — organisms that carry pathogens between hosts (mosquitoes carry malaria).',
          'Body defences in layers: first line = barriers (skin, mucus, cilia, stomach acid); second line = non-specific responses (inflammation, fever); third line = specific immunity — white blood cells that target and REMEMBER particular pathogens.',
          'Vaccination trains the third line safely: a harmless form or fragment of the pathogen primes memory cells, so a real infection is fought before it takes hold.',
          'Herd immunity: when a high enough proportion of a population is immune (about 92% for measles), transmission chains break — protecting even people who are not immune.',
          'Antibiotics attack bacteria (cell walls, ribosomes) but do nothing against viruses — misuse selects for antibiotic-resistant bacteria, a major health threat (SC5-DIS-01).'
        ],
        keyTerms: [
          { term: 'pathogen', definition: 'a disease-causing organism or agent — bacterium, virus, fungus or protozoan' },
          { term: 'vector', definition: 'an organism that transmits a pathogen without becoming sick itself (e.g. the mosquito in malaria)' },
          { term: 'immunity', definition: 'the body\'s ability to resist a specific pathogen using memory white blood cells and antibodies' },
          { term: 'vaccination', definition: 'delivering a harmless form or fragment of a pathogen to train the immune system safely' },
          { term: 'antibiotic', definition: 'a medicine that kills or stops bacteria — ineffective against viruses' },
          { term: 'herd immunity', definition: 'protection of a whole population when a high proportion is immune, breaking transmission chains' },
          { term: 'antibiotic resistance', definition: 'bacteria evolving so that antibiotics no longer kill them — driven by overuse and missed courses' }
        ],
        workedExamples: [
          {
            prompt: 'Case A: a red, ring-shaped skin rash that slowly grows. Case B: fever, sore throat and a cough spreading through the class. Identify the likely pathogen type and transmission route for each.',
            steps: [
              'Step 1 — Case A: localised skin infection with no breathing symptoms → fungus (a ringworm-type infection); spreads by direct contact with skin or shared towels.',
              'Step 2 — Case B: respiratory symptoms moving quickly through a group → virus (an influenza-type cold/flu); spreads by droplets and touched surfaces.',
              'Step 3 — Match the control to the cause: Case A → no shared towels, antifungal cream; Case B → cover coughs, ventilate, handwashing, annual flu vaccine.',
              'Step 4 — Check the logic: antibiotics would treat NEITHER case (one fungal, one viral) — the response must match the pathogen type.'
            ],
            answer: 'A = fungal, spread by contact; B = viral, spread by droplets. Prevention and treatment must match the pathogen and its transmission route.'
          },
          {
            prompt: 'Measles needs about 92% immunity for herd immunity. A class has 25 students — how many must be immune?',
            steps: [
              'Step 1 — Convert the percentage to a decimal: 92% = 0.92.',
              'Step 2 — Multiply: 0.92 × 25 = 23 students.',
              'Step 3 — Interpret: at least 23 of the 25 must be immune; the remaining 1–2 students are protected by the herd.',
              'Step 4 — Note the flip side: every unvaccinated cluster lowers the percentage and re-opens transmission chains.'
            ],
            answer: '0.92 × 25 = 23 students — herd immunity is a population-level threshold, not an all-or-nothing rule.'
          },
          {
            prompt: 'Gastro outbreaks sweep a school every winter. Map the likely transmission chain and design three interventions at different links.',
            steps: [
              'Step 1 — Pathogen and route: gastro bugs spread by the faecal-oral route — contaminated hands, surfaces, food and water.',
              'Step 2 — Break the source link: wash hands with soap for 20 seconds after the toilet and before eating (removes pathogens before transfer).',
              'Step 3 — Break the route link: disinfect shared touchpoints (door handles, taps) and keep sick students home for 48 hours after symptoms stop.',
              'Step 4 — Break the host link: no sharing of food or drink bottles; safe food storage and reheating in the canteen.',
              'Step 5 — Justify: breaking ANY single link stops transmission — combining links is far stronger than relying on one.'
            ],
            answer: 'Source (handwashing), route (disinfection + staying home), host (no sharing) — three broken links in one chain.'
          }
        ],
        examFocus: [
          '"Explain the spread of X" answers must join pathogen → transmission route → intervention; naming a prevention without the route earns half.',
          'Evaluate health claims (e.g. a "miracle immunity tea") with the SC5-DIS-01 toolkit: source of the evidence, controlled trials vs anecdotes, and whether a mechanism is even claimed.'
        ]
      },
      {
        id: 'environmental-sustainability',
        title: 'Ecosystems and environmental sustainability',
        outcomes: ['SC5-ENV-01'],
        bigIdea: 'Human activity is reshaping every ecosystem on Earth; sustainability means using evidence about food webs, energy flow and cycles to manage that impact — and then checking the numbers recover.',
        keyKnowledge: [
          'Ecosystems organise into food webs: producers (plants) capture sunlight, consumers eat other organisms, decomposers recycle matter; removing one species ripples through the whole web.',
          'Energy flows ONE way and shrinks at each feeding level — only about 10% passes to the next level (the rest is lost as heat and waste), which is why food chains rarely exceed 4–5 levels and top predators are rare.',
          'Human impacts (SC5-ENV-01): habitat clearing, pollution (plastics, nutrients, CO₂), introduced species and overharvesting — all measurable as falling biodiversity and population counts.',
          'Introduced species thrive because they arrive without their usual predators and diseases, while native prey have no evolved defences (e.g. feral cats vs small marsupials).',
          'The enhanced greenhouse effect: burning fossil fuels adds CO₂, which traps extra heat — driving global warming, ocean acidification and sea-level rise.',
          'Sustainable management is evidence-based: monitor populations, protect habitat corridors, set quotas and reserves, switch to renewables — then measure whether the numbers actually recover.'
        ],
        keyTerms: [
          { term: 'ecosystem', definition: 'a community of living things interacting with each other and with their physical environment' },
          { term: 'producer', definition: 'an organism (plant or algae) that makes its own food from sunlight by photosynthesis' },
          { term: 'trophic level', definition: 'a feeding level in a food chain — producer, primary consumer, secondary consumer…' },
          { term: 'biodiversity', definition: 'the variety of living things in an area — genetic, species and ecosystem variety' },
          { term: 'introduced species', definition: 'a species moved by humans into an ecosystem where it is not native' },
          { term: 'enhanced greenhouse effect', definition: 'extra heat-trapping caused by human-added greenhouse gases, warming the planet' },
          { term: 'sustainability', definition: 'meeting present needs without destroying the resources and ecosystems that future generations need' }
        ],
        workedExamples: [
          {
            prompt: 'A paddock\'s grasses store 100 000 kJ of energy. Trace the energy to a snake along grass → grasshopper → frog → snake, and explain why food chains are short.',
            steps: [
              'Step 1 — Producer: grass stores 100 000 kJ.',
              'Step 2 — Primary consumer: the grasshopper receives about 10% = 10 000 kJ.',
              'Step 3 — Secondary consumer: the frog receives about 10% of that = 1 000 kJ.',
              'Step 4 — Tertiary consumer: the snake receives about 100 kJ — only 0.1% of the original.',
              'Step 5 — Explain the loss: at each level energy leaves as heat through movement and respiration, plus uneaten and indigestible parts — too little remains to support another level.'
            ],
            answer: '100 000 → 10 000 → 1 000 → 100 kJ: with ~90% lost per step, only a few levels can exist — top predators need enormous producer bases.'
          },
          {
            prompt: 'Koala habitat in a shire fell from 50 000 ha in 1990 to 32 500 ha in 2020. Calculate the percentage loss.',
            steps: [
              'Step 1 — Find the change: 50 000 − 32 500 = 17 500 ha lost.',
              'Step 2 — Divide by the ORIGINAL amount: 17 500 ÷ 50 000 = 0.35.',
              'Step 3 — Convert to a percentage: 0.35 × 100 = 35% loss.',
              'Step 4 — Interpret for management: a measured 35% habitat loss is the evidence base for actions like corridors and protection zones.'
            ],
            answer: '(50 000 − 32 500) ÷ 50 000 × 100 = 35% of habitat lost — quantity first, then the sustainability decision.'
          },
          {
            prompt: '"Cane toads control cane beetles, so they are good for Australian farms." Evaluate this claim.',
            steps: [
              'Step 1 — Check the intended mechanism: toads were introduced in 1935 to eat cane beetles — but the beetles live high on the stalks and toads cannot climb, so the plan never worked.',
              'Step 2 — Weigh the measured harm: toads are toxic at every life stage; predators such as quolls, goannas and freshwater crocodiles die eating them, and toad numbers exploded across northern Australia.',
              'Step 3 — Judge on evidence: the claimed benefit failed and the documented harm is large and ongoing → the claim is not supported.',
              'Step 4 — Draw the general lesson (SC5-ENV-01): introduce nothing without controlled trials and monitoring — this history now underpins strict biosecurity.'
            ],
            answer: 'Rejected on evidence: the intended pest control never worked while the toad became a major invasive predator — a human impact evaluated with data.'
          }
        ],
        examFocus: [
          'Data-response ecosystem questions: quote the numbers (with units and years), calculate the change, THEN explain the mechanism — data without explanation (or the reverse) loses marks.',
          'Food-web predictions: give knock-on effects in BOTH directions (prey explode if a predator is removed; competitors decline) and mention decomposers/recycling when asked about the whole ecosystem.'
        ]
      },
      {
        id: 'genetics-evolution',
        title: 'Genetics and evolutionary change',
        outcomes: ['SC5-GEV-01', 'SC5-GEV-02'],
        bigIdea: 'DNA carries the heritable code of life: it explains why offspring resemble their parents, how variation fuels natural selection, and why populations — never individuals — evolve over generations.',
        keyKnowledge: [
          'DNA is a double helix in the nucleus; its rungs are complementary base pairs — adenine pairs with thymine (A–T) and cytosine with guanine (C–G); a DNA section coding for a trait is a gene.',
          'Body cells carry chromosomes in pairs (23 pairs = 46 in humans); meiosis halves that number so each gamete carries ONE allele of each gene — offspring get one allele from each parent.',
          'Dominant alleles (capital letter, e.g. B) show in the phenotype even with one copy; recessive alleles (b) only show in homozygous bb individuals; carriers (Bb) look unaffected but can pass the allele on.',
          'Punnett squares predict PROBABILITIES, not certainties: a Bb × Bb cross gives 25% BB, 50% Bb and 25% bb — each pregnancy is an independent event.',
          'Natural selection (SC5-GEV-01) requires variation → a selection pressure → differential survival and reproduction → inherited alleles becoming more common; populations evolve, individuals do not.',
          'Genetic technologies (SC5-GEV-02) range from DNA profiling to gene editing (CRISPR) — powerful tools that raise ethical questions about consent, privacy and editing human embryos.'
        ],
        keyTerms: [
          { term: 'DNA', definition: 'the double-helix molecule carrying genetic instructions in complementary base pairs (A–T, C–G)' },
          { term: 'gene', definition: 'a section of DNA that codes for a particular characteristic' },
          { term: 'allele', definition: 'a variant version of a gene (e.g. B for brown eyes, b for blue eyes)' },
          { term: 'dominant', definition: 'an allele expressed in the phenotype even when only one copy is present' },
          { term: 'recessive', definition: 'an allele expressed only when two copies are present (homozygous)' },
          { term: 'meiosis', definition: 'cell division producing gametes with half the chromosome number — one allele of each gene per gamete' },
          { term: 'natural selection', definition: 'the process where inherited variants suited to the environment survive and reproduce more, changing allele frequencies over generations' }
        ],
        workedExamples: [
          {
            prompt: 'Two carriers of cystic fibrosis (genotype Cc) have a child. Predict the chance the child has cystic fibrosis (c is the recessive disease allele).',
            steps: [
              'Step 1 — Set up the cross: Cc × Cc; each parent passes on C or c with equal chance.',
              'Step 2 — Fill the Punnett grid: CC | Cc / Cc | cc.',
              'Step 3 — Genotype ratio: 1 CC : 2 Cc : 1 cc.',
              'Step 4 — Phenotypes: 3 in 4 unaffected (CC or carrier Cc) = 75%; 1 in 4 affected (cc) = 25%.',
              'Step 5 — Interpret precisely: 25% is the chance for EACH pregnancy — not a guarantee about any number of children.'
            ],
            answer: '25% affected (cc), 50% carriers (Cc), 25% clear (CC) — from the 1 : 2 : 1 genotype ratio of the Punnett square.'
          },
          {
            prompt: 'A DNA sample is 30% adenine. What are the percentages of the other three bases?',
            steps: [
              'Step 1 — A pairs only with T, so thymine = 30%.',
              'Step 2 — Together A + T = 60%, leaving 100% − 60% = 40% for G and C.',
              'Step 3 — G pairs only with C, so split evenly: guanine = 20%, cytosine = 20%.',
              'Step 4 — Check the total: 30 + 30 + 20 + 20 = 100% ✓'
            ],
            answer: 'T = 30%, G = 20%, C = 20% — complementary base pairing turned into percentages.'
          },
          {
            prompt: 'Explain how a moth population could shift from mostly light wings to mostly dark wings after soot blackened the tree trunks of its habitat.',
            steps: [
              'Step 1 — Variation: every generation shows a range of wing shades because of different alleles.',
              'Step 2 — Selection pressure: on soot-darkened trunks, light moths are spotted and eaten by birds more often; dark moths are camouflaged.',
              'Step 3 — Differential survival: dark moths survive longer and lay more eggs; light moths reproduce less.',
              'Step 4 — Inheritance: survivors pass on dark-wing alleles, so the dark allele frequency rises over generations.',
              'Step 5 — Precision: the POPULATION evolved — no individual moth changed colour or "tried" to adapt.'
            ],
            answer: 'Variation + predation pressure + inheritance shifted the population\'s allele frequencies over generations — natural selection, not individual change.'
          }
        ],
        examFocus: [
          'Punnett answers: draw the grid, state genotype AND phenotype ratios, and express the result as a probability per pregnancy ("25% of offspring each pregnancy") for full marks.',
          'Evolution questions need all four ingredients — variation, selection pressure, differential survival/reproduction, inheritance — and the discipline of "populations evolve"; "the moths grew darker wings" loses the marks.'
        ]
      },
      {
        id: 'waves-motion',
        title: 'Waves and motion',
        outcomes: ['SC5-WAM-01', 'SC5-WAM-02'],
        bigIdea: 'From sound to earthquakes to Wi-Fi, energy travels as waves; from sprinters to spacecraft, motion obeys Newton\'s laws — two models that PREDICT what will happen, not just describe it.',
        keyKnowledge: [
          'A wave transfers ENERGY without transferring matter; transverse waves vibrate across the direction of travel (light, water ripples); longitudinal waves vibrate along it (sound, slinky pushes).',
          'Wave equation: v = f × λ (speed = frequency × wavelength). Frequency is waves per second (hertz, Hz) and the period T = 1 ÷ f. Sound moves at about 340 m/s in air; ALL electromagnetic waves travel at 3 × 10⁸ m/s in a vacuum.',
          'The electromagnetic spectrum by wavelength (long → short): radio, microwave, infrared, visible, ultraviolet, X-ray, gamma — shorter wavelength means higher frequency and higher energy; UV and above are ionising and can damage cells.',
          'Waves at boundaries: reflection (angle in = angle out), refraction (bending as speed changes between media), diffraction (spreading through gaps — strongest when the gap is about the wavelength, which is why you hear around corners).',
          'Newton\'s first law: an object stays at rest or at constant velocity unless a NET (unbalanced) force acts — seatbelts exist because your body keeps moving when the car suddenly stops.',
          'Newton\'s second law: F = ma (more force → more acceleration; more mass → less acceleration); third law: forces come in equal-and-opposite pairs acting on DIFFERENT objects.'
        ],
        keyTerms: [
          { term: 'wave', definition: 'a disturbance that transfers energy without transferring matter' },
          { term: 'frequency', definition: 'the number of complete waves passing a point each second, measured in hertz (Hz)' },
          { term: 'wavelength (λ)', definition: 'the distance between two matching points on consecutive waves (crest to crest)' },
          { term: 'transverse wave', definition: 'a wave vibrating perpendicular to its direction of travel (e.g. light)' },
          { term: 'longitudinal wave', definition: 'a wave vibrating parallel to its direction of travel (e.g. sound)' },
          { term: 'net force', definition: 'the overall force after all forces are added; zero net force means no change in motion' },
          { term: 'inertia', definition: 'an object\'s resistance to a change in motion, increasing with mass (Newton\'s first law)' }
        ],
        workedExamples: [
          {
            prompt: 'A tuning fork vibrates at 170 Hz in air (v = 340 m/s). Find the wavelength of the sound.',
            steps: [
              'Step 1 — Formula: v = f × λ, so λ = v ÷ f.',
              'Step 2 — Substitute: λ = 340 ÷ 170.',
              'Step 3 — Compute: λ = 2 m.',
              'Step 4 — Sense-check: a 170 Hz note has 2 m waves; concert A (440 Hz) gives about 0.77 m — higher pitch, shorter wavelength ✓'
            ],
            answer: 'λ = 340 ÷ 170 = 2 m — rearrange v = fλ, substitute with units, sanity-check the size.'
          },
          {
            prompt: 'A 6 kg bowling ball is pushed along the lane with a net force of 24 N. Find its acceleration.',
            steps: [
              'Step 1 — Formula: F = ma, so a = F ÷ m.',
              'Step 2 — Substitute: a = 24 ÷ 6.',
              'Step 3 — Compute: a = 4 m/s² (the ball speeds up by 4 m/s every second).',
              'Step 4 — Predict: doubling the force to 48 N doubles a to 8 m/s²; the same 24 N on a 12 kg ball halves a to 2 m/s².'
            ],
            answer: 'a = 24 ÷ 6 = 4 m/s² — F = ma links force, mass and acceleration quantitatively.'
          },
          {
            prompt: 'Match each task to a wave and justify it: (a) image a broken bone, (b) carry a phone call to a distant tower, (c) sterilise sealed surgical equipment.',
            steps: [
              'Step 1 — Broken bone: X-rays — short wavelength, high energy; they pass through soft tissue but are absorbed by denser bone, which is why they image fractures (dose is limited because they ionise).',
              'Step 2 — Phone call: microwaves/radio — long wavelength, low energy; travel far and penetrate walls, and are non-ionising at normal levels.',
              'Step 3 — Sterilising: gamma (or UV) — high enough photon energy to destroy bacterial DNA, and gamma penetrates sealed packaging.',
              'Step 4 — The pattern: match the wave to the JOB using wavelength and energy, and weigh the risk (ionising vs non-ionising).'
            ],
            answer: 'X-ray for bone imaging, radio/microwave for communication, gamma/UV for sterilisation — wavelength and energy decide the application (SC5-WAM-01).'
          }
        ],
        examFocus: [
          'Calculation questions: write the formula, rearrange if needed, substitute WITH units, then answer — v = fλ and F = ma questions are mostly method marks.',
          'Recite the EM spectrum in wavelength order without hesitation and attach ONE use and ONE risk to the ionising end (UV, X-ray, gamma).'
        ]
      },
      {
        id: 'materials',
        title: 'Materials and their properties',
        outcomes: ['SC5-MAT-01'],
        bigIdea: 'Every material is chosen for a job because of its properties — knowing physical vs chemical properties turns "it feels right" into a testable, evidence-based engineering decision.',
        keyKnowledge: [
          'Physical properties can be observed WITHOUT changing the substance: density, melting/boiling point, conductivity, strength, hardness, flexibility, magnetism.',
          'Chemical properties describe HOW a substance reacts: flammability, reaction with acids, resistance to corrosion — observable only during or after a chemical change.',
          'Density = mass ÷ volume (g/cm³); it decides floating and sinking (less dense than water, 1 g/cm³, floats) and helps identify unknown metals against reference tables.',
          'Conductors (metals such as copper and aluminium) pass heat and electricity via free electrons; insulators (plastic, wood, glass) resist flow — which is why cables are copper with plastic coatings.',
          'Composites combine materials to combine properties: concrete (strong in compression) with steel rebar (strong in tension); fibreglass (glass strength + plastic lightness).',
          'SC5-MAT-01 asks you to ASSESS uses against properties AND wider criteria: cost, recyclability and environmental cost of extraction — e.g. aluminium is light and endlessly recyclable, but smelting it is energy-hungry.'
        ],
        keyTerms: [
          { term: 'physical property', definition: 'a characteristic observed without changing the substance\'s identity (density, melting point)' },
          { term: 'chemical property', definition: 'how a substance reacts with other substances (flammability, corrosion resistance)' },
          { term: 'density', definition: 'mass per unit volume (d = m ÷ V), in g/cm³ — decides floating and sinking' },
          { term: 'conductor', definition: 'a material that lets heat or electricity pass through easily (most metals)' },
          { term: 'insulator', definition: 'a material that resists the flow of heat or electricity (plastic, rubber, glass)' },
          { term: 'composite', definition: 'a material made of two or more combined materials to gain the useful properties of each' },
          { term: 'corrosion', definition: 'the gradual chemical destruction of a metal by reaction with its environment (e.g. rusting)' }
        ],
        workedExamples: [
          {
            prompt: 'A metal block has mass 270 g and volume 100 cm³. Identify it from a reference table: aluminium 2.7, iron 7.9, copper 8.9, lead 11.3 g/cm³.',
            steps: [
              'Step 1 — Formula: density = mass ÷ volume.',
              'Step 2 — Substitute: d = 270 ÷ 100.',
              'Step 3 — Compute: d = 2.7 g/cm³.',
              'Step 4 — Match to the table: aluminium (2.7 g/cm³). Sense-check: 2.7 > 1, so it sinks in water — which aluminium does.'
            ],
            answer: 'd = 270 ÷ 100 = 2.7 g/cm³ → aluminium — calculated, then matched against reference values.'
          },
          {
            prompt: 'Choose the handle material for a saucepan from stainless steel, bare aluminium, or bakelite plastic — justify with TWO properties.',
            steps: [
              'Step 1 — Set the criteria: thermal conductivity (must not burn the hand), durability/melting point, and cost.',
              'Step 2 — Stainless steel: strong, but it conducts heat along the handle unless heat-breaks are built in.',
              'Step 3 — Bare aluminium: light and cheap, but conducts heat extremely well and melts at 660 °C — a poor handle choice.',
              'Step 4 — Bakelite plastic: very low conductivity (stays cool), adequate strength and heat resistance, cheap to mould.',
              'Step 5 — Verdict: the insulating property beats conductivity for this job — the material is chosen against the requirements (SC5-MAT-01).'
            ],
            answer: 'Bakelite — chosen by comparing conductivity, heat resistance/durability and cost in a decision matrix.'
          },
          {
            prompt: 'A council sorts mixed scrap: steel cans, aluminium cans and PET plastic bottles. Design the sorting logic using physical properties.',
            steps: [
              'Step 1 — Magnetism: steel contains iron, so a magnet pulls steel cans out first.',
              'Step 2 — Electromagnetism/density: eddy-current separators repel aluminium (a non-ferrous conductor) into a separate stream.',
              'Step 3 — Plastics: optical sorters read infrared fingerprints, or float–sink tanks separate PET (sinks) from lighter cap plastics (float).',
              'Step 4 — Why it matters: property-based sorting keeps streams pure — and recycled aluminium needs about 95% less energy than smelting new metal.'
            ],
            answer: 'Magnetism → steel; eddy currents/density → aluminium; optical/float–sink → plastics — physical properties drive industrial recycling.'
          }
        ],
        examFocus: [
          '"Assess which material" questions MUST quote the property numbers (density value, melting point, conductivity ranking) PLUS a non-technical criterion (cost, recyclability) — SC5-MAT-01 is an evaluation outcome.',
          'Physical vs chemical traps: melting = physical, burning = chemical. Classify first, then justify in one sentence.'
        ]
      }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
