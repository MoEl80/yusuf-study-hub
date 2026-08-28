/* Geography Year 9 content — sources: Geography K–10 Syllabus (2015) Stage 5 (in force for Year 9 in 2026; Geography 7–10 (2024) mandatory for Year 9 from 2027).
   Verified 2026-08-28: https://syllabus.nesa.nsw.edu.au/hsie/geography-k10/ and https://curriculum.nsw.edu.au/learning-areas/hsie/geography-7-10-2024 (implementation timeline).
   Real class data: 2026 Year 9 Geography Classroom had no posts yet as of 2026-08-28. */
(function (root) {
  root.YSH_DATA = root.YSH_DATA || {};
  root.YSH_DATA.geography = root.YSH_DATA.geography || {};
  root.YSH_DATA.geography.guide = {
    subjectId: 'geography',
    syllabus: 'NESA Geography K–10 Syllabus (2015), Stage 5',
    topics: [
      {
        id: 'sustainable-biomes',
        title: 'Sustainable Biomes',
        outcomes: ['GE5-1', 'GE5-2', 'GE5-3', 'GE5-5'],
        bigIdea: 'Biomes produce the food and materials we depend on — but producing more food is transforming biomes faster than they can recover.',
        keyKnowledge: [
          'A biome is a large community of plants and animals shaped by climate and soils — e.g. tropical rainforest, desert, grassland/savanna, tundra, temperate forest, Mediterranean.',
          'Biome distribution follows climate: rainfall and temperature mostly set by latitude, distance from the sea and altitude.',
          'Tropical rainforests sit near the equator (hot, wet, highest biodiversity per hectare); deserts near 30° latitude (hot or cold, under 250 mm rain); grasslands in continental interiors feed the world\u2019s grain belts.',
          'Humans modify biomes for food production — clearing, irrigating, fertilising — e.g. Australia\u2019s wheat belt on temperate grasslands, rice paddies in Asia, greenhouse farming in Spain.',
          'Unsustainable production causes soil degradation, salinity, erosion and biodiversity loss; sustainable responses include crop rotation, drip irrigation, native vegetation buffers and precision agriculture.'
        ],
        keyTerms: [
          { term: 'biome', definition: 'a very large ecosystem with characteristic climate, soils, plants and animals (e.g. desert, tundra)' },
          { term: 'biodiversity', definition: 'the variety of living things in an area — highest in tropical rainforests' },
          { term: 'food security', definition: 'when all people at all times have access to enough safe, nutritious food' },
          { term: 'soil salinity', definition: 'build-up of salt in topsoil, often from clearing deep-rooted vegetation and over-irrigation' },
          { term: 'crop rotation', definition: 'changing the crop grown in a field each season to keep soil fertile and break pest cycles' },
          { term: 'sustainability', definition: 'meeting present needs without compromising the ability of future generations to meet theirs' }
        ],
        workedExamples: [
          {
            prompt: 'A farmer has 40 mm of rain in summer, mild wet winters, and clay-loam soil on a hillside near Adelaide. Which traditional biome does this match, and which two sustainable practices fit best?',
            steps: [
              'Match the climate: hot dry summers + mild wet winters = Mediterranean biome.',
              'Check risks: hillside + cultivation = erosion hazard; irrigation = salinity hazard.',
              'Practice 1: plant native vegetation buffers along the contour to slow runoff and stop erosion.',
              'Practice 2: drip irrigation with soil-moisture monitoring so water (and salt) stays below the root-zone problem level.'
            ],
            answer: 'Mediterranean biome; contour/native vegetation buffers + monitored drip irrigation.'
          }
        ],
        examFocus: [
          'Describe a biome\u2019s climate and vegetation, then link ONE human modification of it to a sustainability consequence — describe, explain, conclude.',
          'Be ready to interpret a biome distribution map: pattern (where), then reason (why latitude/rainfall puts it there).'
        ]
      },
      {
        id: 'changing-places',
        title: 'Changing Places',
        outcomes: ['GE5-1', 'GE5-3', 'GE5-4'],
        bigIdea: 'People are on the move — over half of humanity now lives in cities, and that migration is reshaping both the places people leave and the places they build.',
        keyKnowledge: [
          'Urbanisation is the rising proportion of people living in urban areas — driven by rural-to-urban migration and natural increase.',
          'Push factors drive people from a place (drought, war, unemployment); pull factors attract them (jobs, education, safety, healthcare).',
          'A megacity has over 10 million people — most megacity growth is in Asia and Africa; Sydney is a global city of about 5 million.',
          'Internal migration reshapes Australia: interstate moves to Queensland/WA, sea-change and tree-change moves, and growth at the urban fringe like Sydney\u2019s south-west.',
          'Urban renewal redevelops declining areas to improve liveability — e.g. Barangaroo on Sydney Harbour: old docks to parks, towers and public waterfront; critics weigh affordability against benefits.'
        ],
        keyTerms: [
          { term: 'urbanisation', definition: 'the increasing proportion of a population living in cities and towns' },
          { term: 'megacity', definition: 'a city with more than 10 million people' },
          { term: 'push factor', definition: 'something that forces people to leave a place (war, drought, unemployment)' },
          { term: 'pull factor', definition: 'something that attracts people to a place (jobs, education, safety)' },
          { term: 'liveability', definition: 'the qualities that make a place good to live in — housing, transport, green space, safety, services' },
          { term: 'urban renewal', definition: 'redeveloping run-down urban areas with new buildings, services and public space' }
        ],
        workedExamples: [
          {
            prompt: 'Calculate the population density of a city with 2,400,000 people covering 800 km\u00B2, and say whether it is more like Sydney or a rural shire.',
            steps: [
              'Formula: density = population \u00F7 area (people per km\u00B2).',
              'Divide: 2,400,000 \u00F7 800 = 3,000 people per km\u00B2.',
              'Interpret: urban densities in Australian cities run in the hundreds-to-thousands per km\u00B2; farming shires are under 10.',
              'Conclusion: 3,000/km\u00B2 is dense — consistent with an inner or middle suburb of a major city.'
            ],
            answer: '3,000 people per km\u00B2 — characteristic of a major city suburb, not a rural area.'
          }
        ],
        examFocus: [
          'Cause-and-effect chains earn marks: push/pull factors \u2192 migration flow \u2192 change at both ends (country town declines, city fringe grows).',
          'Liveability questions want criteria + evidence: name what makes a place liveable, then prove it with specifics (frequency of buses, park hectares, walk time to school).'
        ]
      },
      {
        id: 'environmental-change',
        title: 'Environmental Change and Management',
        outcomes: ['GE5-2', 'GE5-5'],
        bigIdea: 'Environments change — some change is natural, much is human-caused, and every serious management plan weighs protection against human needs.',
        keyKnowledge: [
          'Human causes of environmental change: land clearing, mining, introduced species, pollution and climate change from burning fossil fuels.',
          'Australia\u2019s case studies: Great Barrier Reef coral bleaching from marine heatwaves; land clearing in Queensland; cane toads and feral cats driving native species extinct.',
          'Management ranges from protection (national parks, marine park zoning, World Heritage listing) to regulation (fishing quotas, emission targets) to restoration (reef seed planting, revegetation).',
          'Management always involves trade-offs: jobs and development versus protection — stakeholders (tourism operators, farmers, Traditional Owners, government) disagree on the balance.',
          'Sustainability is the test of good management: does the strategy protect the environment AND support people\u2019s livelihoods now and into the future?'
        ],
        keyTerms: [
          { term: 'environmental change', definition: 'any alteration to an ecosystem or landscape — natural or human-induced' },
          { term: 'coral bleaching', definition: 'coral expels its algae under heat stress, turning white and often dying' },
          { term: 'stakeholder', definition: 'a person or group with an interest in how an environment is used or managed' },
          { term: 'national park', definition: 'protected area managed for conservation, recreation and education' },
          { term: 'trade-off', definition: 'balancing one benefit against another, e.g. jobs versus protection' },
          { term: 'rehabilitation', definition: 'returning a damaged environment towards its original condition' }
        ],
        workedExamples: [
          {
            prompt: 'Evaluate zoning in the Great Barrier Reef Marine Park as a management strategy.',
            steps: [
              'Describe the strategy: the Marine Park is zoned — green zones ban fishing, other zones allow limited take.',
              'Judge effectiveness: green zones show higher fish numbers and coral recovery; science supports the zoning design.',
              'Weigh trade-offs: commercial fishers lose access (cost), tourism and fishing benefit long-term (benefit), Traditional Owners co-manage some areas.',
              'Conclude: effective for protection and largely sustainable for industry — but zoning cannot stop warming seas, the biggest threat.'
            ],
            answer: 'Zoning is an effective, mostly sustainable strategy for local threats — but it cannot manage the global threat of climate change on its own.'
          }
        ],
        examFocus: [
          'Management questions need a named strategy, HOW it works, ONE strength, ONE limitation, and a judgement using sustainability as the test.',
          'Learn one case study in detail (reef, Antarctica, or a local park) — vague "we should protect the environment" answers score little.'
        ]
      },
      {
        id: 'human-wellbeing',
        title: 'Human Wellbeing',
        outcomes: ['GE5-4', 'GE5-6', 'GE5-8'],
        bigIdea: 'Wellbeing is unevenly shared across the world — geography explains where, indicators measure it, and programs can change it.',
        keyKnowledge: [
          'Human wellbeing covers health, income, education, safety, rights and happiness — more than just money.',
          'Indicators measure it: GDP per capita (average economic output per person), life expectancy, literacy rate, access to clean water, and the UN Human Development Index (HDI) which blends income, education and life expectancy.',
          'Wellbeing varies spatially: highest in Australia, Western Europe and North America; lower across Sub-Saharan Africa and parts of South Asia — but pockets of low wellbeing exist in rich countries too.',
          'Causes of low wellbeing cluster together: conflict, drought and food insecurity, disease, limited schooling and weak infrastructure reinforce each other.',
          'Programs that work target the basics with communities involved: clean water projects, girls\u2019 education, vaccination campaigns, microfinance — aligned to the UN Sustainable Development Goals (SDGs).'
        ],
        keyTerms: [
          { term: 'human wellbeing', definition: 'the quality of people\u2019s lives — health, wealth, education, safety, rights and happiness' },
          { term: 'GDP per capita', definition: 'a country\u2019s total economic output divided by its population — an average income indicator' },
          { term: 'HDI', definition: 'Human Development Index — UN measure combining income, education and life expectancy (0 to 1)' },
          { term: 'life expectancy', definition: 'the average number of years a newborn is expected to live' },
          { term: 'SDGs', definition: 'UN Sustainable Development Goals — 17 global targets including zero hunger, good health and quality education' },
          { term: 'spatial variation', definition: 'differences in a pattern across places — the core reason geographers map things' }
        ],
        workedExamples: [
          {
            prompt: 'Country A: HDI 0.94, life expectancy 83. Country B: HDI 0.51, life expectancy 62. Describe the spatial variation and give TWO likely explanations.',
            steps: [
              'Quantify the gap: 0.94 \u2212 0.51 = 0.43 HDI points; a 21-year difference in life expectancy.',
              'Explain 1 (health systems): Country A\u2019s higher life expectancy reflects universal healthcare, vaccination and clean water.',
              'Explain 2 (income and schooling): higher GDP per capita funds schools and nutrition, lifting both HDI education and income components.'
            ],
            answer: 'A 0.43 HDI gap and 21-year life-expectancy gap; explained by stronger health systems and higher incomes/schooling in Country A.'
          }
        ],
        examFocus: [
          'Wellbeing answers must QUANTIFY: name the indicator, give the number or direction of difference, then explain the cause.',
          'Graph questions (population pyramids, scatter graphs) — read the pattern first, then link it to development explanations.'
        ]
      },
      {
        id: 'geographical-skills',
        title: 'Geographical Skills and Tools',
        outcomes: ['GE5-7', 'GE5-8'],
        bigIdea: 'Geographers answer questions with evidence — maps, graphs, statistics and images are the evidence, and every exam tests whether you can read them.',
        keyKnowledge: [
          'Maps: latitude/longitude locate places globally; area references use 4 figures (eastings first, then northings); grid references use 6 for precision.',
          'Direction uses the 16-point compass rose (N, NNE, NE, ENE, E\u2026); scale converts map distance to real distance (ratio 1:100,000 = 1 cm to 1 km).',
          'Graphs: climate graphs combine rainfall BARS with a temperature LINE (two axes — always read the right one); population pyramids show age-sex structure; choropleth maps shade areas by data value.',
          'Synoptic (weather) charts show pressure with isobars — close isobars = strong wind; L = low pressure = rain and cloud, H = high pressure = clear.',
          'Statistics you must handle: percentage change, population density (people \u00F7 km\u00B2), and reading trends (increase, decrease, rate of change).'
        ],
        keyTerms: [
          { term: 'grid reference', definition: 'a 6-figure map reference giving an exact location, e.g. 348765 (eastings first, northings second)' },
          { term: 'area reference', definition: 'a 4-figure reference locating a grid square, e.g. 3487' },
          { term: 'choropleth map', definition: 'a map where areas are shaded by data value — dark = high, light = low' },
          { term: 'isobar', definition: 'a line joining places of equal air pressure on a synoptic chart' },
          { term: 'scale', definition: 'the ratio between map distance and real distance' },
          { term: 'gradient', definition: 'how steep a slope is — height gain \u00F7 horizontal distance' }
        ],
        workedExamples: [
          {
            prompt: 'Read a climate graph: January rainfall bar reaches 100 mm; January temperature dot sits on 22 \u00B0C. July rainfall bar is 40 mm; temperature dot 8 \u00B0C. What is the pattern and what biome fits?',
            steps: [
              'Read bars (rainfall, left or labelled axis): summer 100 mm, winter 40 mm — wetter in summer.',
              'Read line (temperature, second axis): summer 22 \u00B0C, winter 8 \u00B0C — warm summer, cool winter.',
              'Pattern: mild winters, warm wet summers = temperate, summer-dominant rain.',
              'Match: this suits temperate forest / grassland biomes — e.g. NSW coastal lowlands.'
            ],
            answer: 'Warm-to-hot wet summers and cool drier winters — a temperate biome such as NSW\u2019s coastal temperate forest/grassland.'
          }
        ],
        examFocus: [
          'Skill questions are free marks with method: always state the formula (density, gradient, % change), substitute, then answer with units.',
          'Every "interpret the map/graph" answer needs PATTERN first ("increases from east to west"), then EXAMPLE ("from 200 mm to 900 mm").'
        ]
      },
      {
        id: 'fieldwork-inquiry',
        title: 'Geographical Inquiry and Fieldwork',
        outcomes: ['GE5-7', 'GE5-8'],
        bigIdea: 'Geographers investigate the real world: ask a question, collect data on the ground, present it, conclude — and say how they\u2019d do it better.',
        keyKnowledge: [
          'The geographical inquiry process: identify a question \u2192 plan \u2192 collect data \u2192 process and present \u2192 conclude and communicate \u2192 evaluate and act.',
          'Primary data is collected by you in the field: surveys, interviews, traffic counts, photographs, field sketches, water testing.',
          'Secondary data is collected by others: census tables, Bureau of Meteorology records, satellite images, news reports.',
          'Fieldwork techniques must be ethical and safe: ask permission, anonymise survey answers, check risks (traffic, water, sun) before you go.',
          'A good inquiry question is specific and researchable — "How does traffic congestion around our school vary by time of day?" not "Is traffic bad?"'
        ],
        keyTerms: [
          { term: 'primary data', definition: 'data you collect yourself first-hand in the field' },
          { term: 'secondary data', definition: 'data collected by someone else — census, BOM records, articles' },
          { term: 'hypothesis', definition: 'a testable statement predicting what you expect to find' },
          { term: 'field sketch', definition: 'a labelled hand drawing of a landscape highlighting geographical features' },
          { term: 'survey', definition: 'a set of questions asked of people to gather primary data' },
          { term: 'evaluation', definition: 'judging how reliable your methods were and what you would improve' }
        ],
        workedExamples: [
          {
            prompt: 'Design fieldwork for the inquiry question: "How does traffic congestion around the school vary by time of day?"',
            steps: [
              'Hypothesis: congestion peaks 8:00\u20138:30 am and 3:00\u20133:30 pm on school days.',
              'Method: count vehicles per 10 minutes at three fixed points at 8:00, 10:00, 12:00, 3:00 and 5:00; repeat over three days.',
              'Ethics and safety: count from the footpath, stay behind the fence, no personal details recorded.',
              'Present: line graph of vehicles against time for each point; conclude whether the hypothesis is supported; evaluate (more days, wet-weather comparison).'
            ],
            answer: 'A testable hypothesis, a repeated quantitative method, safe/ethical practice, a graph that answers the question, and an honest evaluation.'
          }
        ],
        examFocus: [
          'Inquiry questions in exams are marked on the STAGES — name the stage you are writing about (hypothesis / method / presentation / evaluation).',
          'Always distinguish primary vs secondary data with an example of each from YOUR investigation.'
        ]
      }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
