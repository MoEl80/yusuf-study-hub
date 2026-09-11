/* Year 9 Mathematics — NSW Mathematics K–10 Syllabus (2022), Stage 5 Core (in force for Year 9, 2026).
   Curriculum authored from the NESA syllabus (Stage 5 Core focus areas + verified outcome codes).
   Yusuf's tutor's textbook will be scanned into _inbox later — these notes are the syllabus spine it will attach to.
   Added 2026-09-11. */
(function (root) {
  root.YSH_DATA = root.YSH_DATA || {};
  root.YSH_DATA.maths = root.YSH_DATA.maths || {};
  root.YSH_DATA.maths.guide = {
    subjectId: 'maths',
    syllabus: 'NESA Mathematics K–10 Syllabus (2022), Stage 5 Core',
    topics: [
      {
        id: 'finance',
        title: 'Financial mathematics (earning, spending, interest)',
        outcomes: ['MAO-WM-01', 'MA5-FIN-C-01'],
        bigIdea: 'Money maths is percentage maths in disguise: earnings, discounts and simple interest all reduce to multiplying by a percentage — and the I = Prn formula is just repeated percentage of a principal.',
        keyKnowledge: [
          'Earnings: wage = hourly rate × hours (overtime often time-and-a-half = 1.5×, double time = 2×); salary is a fixed yearly amount paid in instalments; commission = percentage of sales; some jobs add loadings or allowances.',
          'Spending: discount = percentage OFF the marked price, so sale price = marked price × (1 − discount rate). Successive discounts multiply: 25% then 10% off is × 0.75 × 0.90, NOT a 35% discount.',
          'GST in Australia is 10%: price including GST = price × 1.10. "Best buy" questions compare UNIT prices (price ÷ quantity), not totals.',
          'Simple interest: I = P × r × n, where P = principal, r = rate per period as a decimal, n = number of periods. Total owed = P + I.',
          'Financial literacy: reading payslips (gross vs net pay), comparing plans with fixed + variable parts, and checking percentage change claims.'
        ],
        keyTerms: [
          { term: 'principal (P)', definition: 'the original amount of money invested or borrowed' },
          { term: 'simple interest (I)', definition: 'interest calculated only on the principal: I = Prn' },
          { term: 'commission', definition: 'payment calculated as a percentage of the value of sales made' },
          { term: 'unit price', definition: 'price per unit of quantity (per gram, per litre) — how you compare best buys' },
          { term: 'GST', definition: 'Goods and Services Tax — 10% added to most prices in Australia' },
          { term: 'gross vs net pay', definition: 'gross is before deductions (tax, super); net is what actually lands in your account' }
        ],
        workedExamples: [
          {
            prompt: 'Find the simple interest on $4 500 invested at 6.5% p.a. for 4 years, and the total amount at the end.',
            steps: [
              'Write the formula: I = P × r × n.',
              'Substitute: P = 4500, r = 6.5% = 0.065, n = 4.',
              'I = 4500 × 0.065 × 4 = 1170.',
              'Total amount = P + I = 4500 + 1170 = 5670.'
            ],
            answer: 'Interest = $1 170; total amount = $5 670.'
          }
        ],
        examFocus: [
          'Convert the rate to a decimal BEFORE multiplying (6.5% → 0.065) and match n to the rate period (years with p.a.).',
          'Successive discount traps: ×0.75 then ×0.90 = ×0.675, which is 32.5% total off, not 35%.',
          'Show the formula line, the substitution line and the answer with a $ sign and correct rounding (money → 2 decimal places).'
        ]
      },
      {
        id: 'algebra',
        title: 'Algebraic techniques (expand, simplify, factorise)',
        outcomes: ['MAO-WM-01', 'MA5-ALG-C-01'],
        bigIdea: 'Algebra is arithmetic with letters: the same distributive and collection rules you use with numbers apply to pronumerals. Clean, line-by-line simplification is where the marks live.',
        keyKnowledge: [
          'Collect like terms (same pronumeral AND same power): 3x + 5x = 8x, but 3x and 3x² are NOT like terms.',
          'Expand with the distributive law: a(b + c) = ab + ac. Watch signs: −3(x − 4) = −3x + 12 — the negative multiplies EVERY term.',
          'Multiply and divide algebraic terms using index laws: (6x²y) ÷ (3x) = 2xy. Simplify numeric coefficients first.',
          'Algebraic fractions with numerical denominators: add/subtract using a common denominator, e.g. x/3 + x/4 = 4x/12 + 3x/12 = 7x/12.',
          'Factorise with the highest common factor: 5x + 15 = 5(x + 3). Factorising is the reverse of expanding — check by expanding back.'
        ],
        keyTerms: [
          { term: 'like terms', definition: 'terms with identical pronumeral parts (same letters, same indices) — only like terms can be added or subtracted' },
          { term: 'distributive law', definition: 'a(b + c) = ab + ac — multiply the outside term by EVERY term inside' },
          { term: 'expand', definition: 'remove brackets by multiplying through' },
          { term: 'factorise', definition: 'write an expression as a product — take out the highest common factor' },
          { term: 'coefficient', definition: 'the number in front of a pronumeral, e.g. in 7x² the coefficient is 7' },
          { term: 'HCF', definition: 'highest common factor — the largest term that divides every term of the expression' }
        ],
        workedExamples: [
          {
            prompt: 'Expand and simplify 3(2x − 5) − 2(x + 4).',
            steps: [
              'Expand each bracket separately: 3(2x − 5) = 6x − 15 and −2(x + 4) = −2x − 8.',
              'The minus sign belongs to BOTH terms of the second bracket — write −2x − 8.',
              'Collect like terms: 6x − 2x = 4x and −15 − 8 = −23.'
            ],
            answer: '4x − 23.'
          }
        ],
        examFocus: [
          'The #1 algebra error is dropping a minus sign when the term in front of the bracket is negative — circle the sign and multiply it into both terms.',
          'Always expand BEFORE collecting like terms; never cancel across a + or − sign.',
          'After factorising, expand your answer mentally to check it matches the original.'
        ]
      },
      {
        id: 'indices',
        title: 'Indices and numbers of any magnitude',
        outcomes: ['MAO-WM-01', 'MA5-IND-C-01', 'MA5-MAG-C-01'],
        bigIdea: 'Index laws are shortcuts for repeated multiplication, and scientific notation (a × 10^m, 1 ≤ a < 10) uses them to write very large and very small numbers compactly and comparably.',
        keyKnowledge: [
          'Index laws: x^m × x^n = x^(m+n); x^m ÷ x^n = x^(m−n); (x^m)^n = x^(mn). The power hits EVERY factor inside: (2x³)² = 4x⁶.',
          'Zero index: x⁰ = 1 (x ≠ 0). Negative index: x^(−n) = 1/x^n — a negative power means "flip", never "make negative".',
          'Scientific notation: a × 10^m with 1 ≤ a < 10. Small numbers get NEGATIVE powers: 0.000407 = 4.07 × 10^−4; large ones positive: 6 120 000 = 6.12 × 10^6.',
          'Significant figures: count from the FIRST non-zero digit. Round 0.008417 to 2 sig figs → 0.0084 (the zeros before 8 are placeholders, not significant).',
          'Order-of-magnitude comparisons: 10^−4 is 100 times SMALLER than 10^−2 — compare powers before comparing decimals.'
        ],
        keyTerms: [
          { term: 'index (power)', definition: 'the small raised number telling how many times the base multiplies itself' },
          { term: 'base', definition: 'the number or pronumeral being raised to a power' },
          { term: 'scientific notation', definition: 'a × 10^m with 1 ≤ a < 10 — the standard form for very large/small numbers' },
          { term: 'significant figures', definition: 'digits counted from the first non-zero digit; how precise a measurement/answer is' },
          { term: 'zero index', definition: 'x⁰ = 1 for any non-zero base' },
          { term: 'negative index', definition: 'x^(−n) = 1/x^n — a reciprocal, not a negative answer' }
        ],
        workedExamples: [
          {
            prompt: 'Simplify (2a³)² × 3a, leaving your answer in index form.',
            steps: [
              'Apply the power to every factor of the bracket: (2a³)² = 2² × a^(3×2) = 4a⁶.',
              'Multiply by 3a: 4a⁶ × 3a = 12 × a^(6+1).',
              'Combine: 12a⁷.'
            ],
            answer: '12a⁷.'
          },
          {
            prompt: 'Write 0.000407 in scientific notation.',
            steps: [
              'Place the point after the first non-zero digit: 4.07.',
              'Count how many places the point moved: 4 places to the RIGHT, so the power is −4.',
              'Small numbers → negative power; check: 4.07 × 10^−4 = 0.000407.'
            ],
            answer: '4.07 × 10^−4.'
          }
        ],
        examFocus: [
          '(2x³)² = 4x⁶ — the power applies to the coefficient too. Missing the 4 is the classic lost mark.',
          'In scientific notation questions the marker checks BOTH the digits (4.07, not 40.7) and the power (−4).',
          'Sig-fig rounding: leading zeros never count; round 0.008417 → 0.0084 (2 s.f.) and say "to 2 significant figures".'
        ]
      },
      {
        id: 'equations',
        title: 'Equations (solve linear equations)',
        outcomes: ['MAO-WM-01', 'MA5-EQU-C-01'],
        bigIdea: 'An equation is a balance: whatever you do to one side you do to the other. Undo the operations in reverse order (BIMDAS backwards) until x stands alone — and always check by substituting back.',
        keyKnowledge: [
          'One and two-step equations: undo +/− first, then ×/÷. e.g. 3x + 7 = 22 → 3x = 15 → x = 5.',
          'Three-step equations: expand brackets first, collect like terms, then solve, e.g. 4(x − 2) = 3x + 5.',
          'Fraction equations: multiply BOTH sides by the denominator first: (2x − 1)/3 = 5 → 2x − 1 = 15 → x = 8. Equations may include up to one algebraic fraction.',
          'Variables on both sides: collect x-terms on the side that keeps coefficients positive where possible: 4(x − 2) = 3x + 5 → 4x − 8 = 3x + 5 → x = 13.',
          'Word problems: define the pronumeral ("let w = width"), build the equation from the sentence, solve, then answer the QUESTION in words with units.'
        ],
        keyTerms: [
          { term: 'equation', definition: 'a mathematical sentence with an equals sign — both sides have the same value' },
          { term: 'solution', definition: 'the value of the pronumeral that makes the equation true' },
          { term: 'inverse operation', definition: 'the operation that undoes another (+ undoes −, × undoes ÷)' },
          { term: 'balance', definition: 'keep both sides equal by doing the same operation to each side' },
          { term: 'substitution check', definition: 'put your answer back into the ORIGINAL equation to verify it' }
        ],
        workedExamples: [
          {
            prompt: 'Solve (5x − 2)/3 = 6.',
            steps: [
              'Multiply both sides by 3: 5x − 2 = 18.',
              'Add 2 to both sides: 5x = 20.',
              'Divide both sides by 5: x = 4.',
              'Check: (5×4 − 2)/3 = 18/3 = 6 ✓'
            ],
            answer: 'x = 4.'
          }
        ],
        examFocus: [
          'Kill the fraction first: multiply both sides by the denominator before anything else.',
          'Always show the check line for "show that" or verification marks — substitution IS the working.',
          'In word problems, marks are for the EQUATION as well as the answer: write "let w = …", the equation, then the sentence answer.'
        ]
      },
      {
        id: 'linear',
        title: 'Linear relationships (gradient, y = mx + c)',
        outcomes: ['MAO-WM-01', 'MA5-LIN-C-01'],
        bigIdea: 'A linear relationship has a constant rate of change — the gradient m. Every straight line is y = mx + c: m tells the steepness/direction, c says where it crosses the y-axis.',
        keyKnowledge: [
          'Gradient m = rise ÷ run = (y₂ − y₁)/(x₂ − x₁) between any two points. Positive = uphill, negative = downhill, zero = horizontal, undefined = vertical.',
          'Gradient–intercept form: y = mx + c. m = 2 means "up 2 for every 1 across"; c = −3 cuts the y-axis at (0, −3).',
          'Find the equation from two points: gradient first, then substitute one point into y = mx + c to find c. e.g. through (2, 1) and (4, 7): m = 3, then 1 = 6 + c → c = −5, so y = 3x − 5.',
          'Midpoint of (x₁, y₁) and (x₂, y₂) = ((x₁+x₂)/2, (y₁+y₂)/2).',
          'Parallel lines have EQUAL gradients (y = 2x + 7 and y = 2x − 3 never meet). Horizontal lines are y = k; vertical lines are x = k.',
          'Real-world modelling: a fixed fee is the intercept c; the per-unit rate is the gradient m — that is how plan/comparison questions are built.'
        ],
        keyTerms: [
          { term: 'gradient (m)', definition: 'steepness of a line = rise/run — the rate of change' },
          { term: 'y-intercept (c)', definition: 'where the line crosses the y-axis (the value of y when x = 0)' },
          { term: 'parallel lines', definition: 'lines with the same gradient that never intersect' },
          { term: 'midpoint', definition: 'the average of the coordinates — the point exactly halfway along a segment' },
          { term: 'linear relationship', definition: 'a relationship whose graph is a straight line: constant rate of change' }
        ],
        workedExamples: [
          {
            prompt: 'Find the equation of the line through (2, 1) and (4, 7).',
            steps: [
              'Gradient: m = (7 − 1)/(4 − 2) = 6/2 = 3.',
              'Use y = mx + c with one point: 1 = 3(2) + c → 1 = 6 + c.',
              'Solve: c = −5.',
              'Write the equation and check the other point: y = 3x − 5; at x = 4: 12 − 5 = 7 ✓'
            ],
            answer: 'y = 3x − 5.'
          }
        ],
        examFocus: [
          'Subtract coordinates in the SAME order top and bottom of the gradient fraction — reversed order flips the sign.',
          '"Interpret the gradient" marks: say it in context (e.g. "$0.80 per GB"), not just "it is 0.8".',
          'Break-even questions: set the two cost equations equal, solve, and state what the solution MEANS (the usage where both plans cost the same).'
        ]
      },
      {
        id: 'trig',
        title: 'Pythagoras and trigonometry (right-angled triangles)',
        outcomes: ['MAO-WM-01', 'MA5-TRG-C-01'],
        bigIdea: 'In every right-angled triangle the sides obey a² + b² = c², and once ONE acute angle is known the side RATIOS (sin, cos, tan) are fixed — that lets you find every missing side and angle.',
        keyKnowledge: [
          'Pythagoras: c² = a² + b² where c is the HYPOTENUSE (opposite the right angle, always the longest side). Find a leg with a² = c² − b².',
          'Label the triangle from a chosen acute angle: opposite (O), adjacent (A), hypotenuse (H). The O and A swap when you pick the other angle — H never changes.',
          'The ratios: sin θ = O/H, cos θ = A/H, tan θ = O/A (SOH CAH TOA). Choose the ratio that uses the two sides you have/want.',
          'Finding a side: substitute known values into the ratio, then solve. Finding an angle: use the inverse function (sin⁻¹, cos⁻¹, tan⁻¹).',
          'Angles of elevation and depression are measured FROM the horizontal: looking UP is elevation, looking DOWN is depression. Round lengths/angles as instructed (usually 1–2 d.p. or nearest degree).',
          'Practical check: in a 3-4-5 style triangle the numbers must satisfy Pythagoras — test your rounded answers for sanity.'
        ],
        keyTerms: [
          { term: 'hypotenuse', definition: 'the side opposite the right angle — always the longest' },
          { term: 'opposite (O)', definition: 'the side across from the chosen acute angle' },
          { term: 'adjacent (A)', definition: 'the side next to the chosen angle that is NOT the hypotenuse' },
          { term: 'SOH CAH TOA', definition: 'sin = O/H, cos = A/H, tan = O/A — how to pick the right ratio' },
          { term: 'angle of elevation', definition: 'the angle UP from the horizontal line of sight to an object' },
          { term: 'inverse trig (sin⁻¹)', definition: 'converts a side ratio back into the angle' }
        ],
        workedExamples: [
          {
            prompt: 'A flagpole casts a 15 m shadow when the sun\u2019s angle of elevation is 32°. Find the height of the flagpole, to 1 decimal place.',
            steps: [
              'Sketch: right triangle with the pole vertical (opposite), shadow horizontal (adjacent, 15 m), angle 32° at the shadow tip.',
              'O and A are involved → use tan: tan 32° = h/15.',
              'Solve: h = 15 × tan 32° = 15 × 0.6249 = 9.373…',
              'Round as instructed: h ≈ 9.4 m.'
            ],
            answer: 'The flagpole is about 9.4 m tall.'
          }
        ],
        examFocus: [
          'Label O, A, H BEFORE choosing the ratio — most trig errors are mislabelled sides, not wrong buttons.',
          'Set calculator to DEGREE mode; write the unrounded substitution line, then the rounded answer — markers want both.',
          'Elevation/depression diagrams: always draw the horizontal dashed line at the observer\u2019s eye first; the angle sits between it and the line of sight.'
        ]
      },
      {
        id: 'mensuration',
        title: 'Length, area and volume (measurement)',
        outcomes: ['MAO-WM-01', 'MA5-ARE-C-01', 'MA5-VOL-C-01'],
        bigIdea: 'Measurement questions are formula + units discipline: pick the right formula, keep units consistent, and know which answers are in units, units² (area) or units³ (volume).',
        keyKnowledge: [
          'Perimeter: add all sides. Circle: C = πd = 2πr. Semicircle perimeter = half the circumference PLUS the diameter.',
          'Area: rectangle A = lw; triangle A = ½bh; trapezium A = ½h(a + b); circle A = πr². Composite shapes: split into known parts and add/subtract.',
          'Surface area of a prism = the sum of the areas of ALL faces. Draw the net, count each rectangle/circle once — cubes have 6 × edge².',
          'Volume: prism V = area of cross-section × length; cylinder V = πr²h. Units: cm³, m³; capacity 1 m³ = 1000 L = 1 000 000 cm³, 1 cm³ = 1 mL.',
          'Rounding: use the π button or π ≈ 3.142 as instructed; give area/volume answers in squared/cubed units and round only at the end.'
        ],
        keyTerms: [
          { term: 'perimeter', definition: 'total distance around the outside of a shape' },
          { term: 'composite shape', definition: 'a shape built from simpler shapes — split it, compute each part, combine' },
          { term: 'surface area', definition: 'total area of all the surfaces (faces) of a 3D object — units²' },
          { term: 'cross-section', definition: 'the slice shape of a prism; volume = cross-section area × length' },
          { term: 'π (pi)', definition: 'circumference ÷ diameter of any circle ≈ 3.14159' },
          { term: 'capacity', definition: 'how much a container holds — litres relate to volume: 1 L = 1000 cm³' }
        ],
        workedExamples: [
          {
            prompt: 'Find the volume of a cylinder with radius 5 cm and height 12 cm, correct to 1 decimal place.',
            steps: [
              'Formula: V = πr²h.',
              'Substitute: V = π × 5² × 12 = π × 25 × 12 = 300π.',
              'Evaluate: 300π = 942.477…',
              'Round to 1 d.p. and attach units: 942.5 cm³.'
            ],
            answer: 'V ≈ 942.5 cm³.'
          }
        ],
        examFocus: [
          'Semicircle perimeter questions: forgetting the diameter in the total is the classic error — perimeter includes the straight edge.',
          'Surface area: sketch the NET and tick off each face; doubled-by-symmetry faces (like pool walls) still need counting once each.',
          'Unit conversions cost easy marks: 1 m³ = 1000 L (pool questions) and cm³ ↔ mL. Write the conversion line explicitly.'
        ]
      },
      {
        id: 'geometry',
        title: 'Properties of geometrical figures (similarity, scale)',
        outcomes: ['MAO-WM-01', 'MA5-GEO-C-01'],
        bigIdea: 'Similar figures are zoomed copies: same shape, different size. Every length scales by the scale factor k, areas by k² — and scale drawings are just similarity with a stated ratio.',
        keyKnowledge: [
          'Similar figures: corresponding angles equal AND corresponding sides in the same ratio. The scale factor k = (a length on the image) ÷ (matching length on the original).',
          'Area scale factor = k² (lengths ×3 → areas ×9). Volume scale factor = k³ for similar solids.',
          'Scale drawings: ratio 1 : 500 means 1 cm on the drawing = 500 cm = 5 m in reality. Convert units BEFORE comparing.',
          'Angle properties carry over: triangle angle sum 180°, quadrilateral 360°, angles on a straight line 180°, vertically opposite angles equal.',
          'Congruent figures are identical copies (k = 1); similar is the more general idea. Tests for similar triangles: matching angles, or matching side ratios.'
        ],
        keyTerms: [
          { term: 'similar figures', definition: 'same shape, proportional sides, equal matching angles' },
          { term: 'scale factor (k)', definition: 'the number every length is multiplied by to get the image' },
          { term: 'scale drawing', definition: 'a drawing in a fixed ratio to real life, e.g. 1 : 500' },
          { term: 'congruent', definition: 'exactly the same size and shape (scale factor 1)' },
          { term: 'corresponding sides', definition: 'matching sides of similar figures — always in the same ratio' }
        ],
        workedExamples: [
          {
            prompt: 'A map has scale 1 : 500. Two towns are 6 cm apart on the map. Find the real distance in metres.',
            steps: [
              'Real distance in cm = 6 × 500 = 3000 cm.',
              'Convert: 3000 cm = 30 m (÷100).',
              'Sanity-check the unit the question asked for — metres, not centimetres.'
            ],
            answer: '30 m.'
          }
        ],
        examFocus: [
          'Area ratio questions: k² not k — lengths ×3 means areas ×9. This exact trap appears in almost every similarity test.',
          'Scale-drawing answers must be in REAL-WORLD units (convert cm → m); state the conversion line for the mark.',
          'To prove similarity, match corresponding vertices in order when naming triangles (△ABC ~ △DEF) — mismatched order loses marks.'
        ]
      },
      {
        id: 'data',
        title: 'Statistical analysis (mean, median, spread)',
        outcomes: ['MAO-WM-01', 'MA5-DAT-C-01'],
        bigIdea: 'A data set is summarised by a centre (mean or median) and a spread (range or IQR). Choosing the RIGHT summary — and saying why — matters more than the arithmetic.',
        keyKnowledge: [
          'Mean = total ÷ number of scores. Median = middle score of the SORTED list (average the middle two for an even count). Mode = most frequent score (can be none or several).',
          'Spread: range = highest − lowest. Quartiles split the sorted data into quarters: IQR = Q3 − Q1 — the spread of the middle 50%, which ignores outliers.',
          'Outliers affect the MEAN strongly but the median barely — with an outlier present, the median is the fairer centre (say this in "which measure" questions).',
          'Five-number summary (min, Q1, median, Q3, max) draws a box plot; box plots make two data sets easy to compare (compare medians, then IQRs/ranges).',
          'Even-count data sets: median = average of the two middle values; Q1 = median of the lower half, Q3 = median of the upper half (halves exclude the overall median when n is odd).'
        ],
        keyTerms: [
          { term: 'mean', definition: 'the average — sum of scores divided by how many' },
          { term: 'median', definition: 'the middle value of the ordered data set' },
          { term: 'mode', definition: 'the most common score' },
          { term: 'IQR', definition: 'interquartile range = Q3 − Q1, the spread of the middle 50% of the data' },
          { term: 'outlier', definition: 'a score far removed from the rest — it drags the mean but not the median' },
          { term: 'five-number summary', definition: 'min, Q1, median, Q3, max — the skeleton of a box plot' }
        ],
        workedExamples: [
          {
            prompt: 'For the data 11, 12, 13, 14, 15, 16, 17, 19 find the median, Q1, Q3 and the IQR.',
            steps: [
              'Already sorted; n = 8 (even), so median = (14 + 15)/2 = 14.5.',
              'Lower half 11, 12, 13, 14 → Q1 = (12 + 13)/2 = 12.5.',
              'Upper half 15, 16, 17, 19 → Q3 = (16 + 17)/2 = 16.5.',
              'IQR = 16.5 − 12.5 = 4.'
            ],
            answer: 'Median = 14.5, Q1 = 12.5, Q3 = 16.5, IQR = 4.'
          }
        ],
        examFocus: [
          'SORT the data before finding anything — unsorted medians/quartiles are automatic lost marks.',
          '"Compare data sets" answers need a sentence with BOTH a centre and a spread ("Class A\u2019s median was higher and its IQR smaller, so scores were generally higher and more consistent").',
          'Outlier questions want the EFFECT named: the mean is pulled toward the outlier; the median and IQR resist it.'
        ]
      },
      {
        id: 'probability',
        title: 'Probability (multistage experiments)',
        outcomes: ['MAO-WM-01', 'MA5-PRO-C-01'],
        bigIdea: 'Probability quantifies likelihood from 0 (impossible) to 1 (certain). Single-stage is counting favourable over total; multistage experiments use two-way tables, Venn diagrams and tree diagrams to keep the counting honest.',
        keyKnowledge: [
          'P(E) = favourable outcomes ÷ total outcomes. 0 ≤ P(E) ≤ 1, and P(not E) = 1 − P(E) (the complement).',
          'Relative frequency = observed successes ÷ trials — an experimental estimate that should approach the theoretical probability as trials grow.',
          'Two-way tables organise two categories at once; conditional-style readings like "of the boys, how many play sport" come straight from a row or column.',
          'Venn diagrams: overlapping events — n(A or B) = n(A) + n(B) − n(A and B). The overlap is counted once.',
          'Multistage experiments WITH replacement are independent (multiply branch probabilities, e.g. (3/8)² = 9/64); WITHOUT replacement the second-stage fractions change — the tree diagram tracks it.',
          'Tree diagrams: multiply ALONG branches, add BETWEEN paths.'
        ],
        keyTerms: [
          { term: 'probability', definition: 'the chance of an event, from 0 (impossible) to 1 (certain)' },
          { term: 'complement', definition: 'the event NOT happening: P(not E) = 1 − P(E)' },
          { term: 'relative frequency', definition: 'experimental probability = successes ÷ trials' },
          { term: 'independent events', definition: 'events where one outcome does not change the other\u2019s probability (replacement restores independence)' },
          { term: 'two-way table', definition: 'a grid organising outcomes by two categories at once' },
          { term: 'tree diagram', definition: 'a branching diagram listing every multistage outcome; multiply along branches' }
        ],
        workedExamples: [
          {
            prompt: 'A bag holds 3 red and 5 blue counters. A counter is drawn, REPLACED, then a second is drawn. Find P(both red).',
            steps: [
              'P(red) on one draw = 3/8; replacement means the second draw is identical (independent).',
              'Multiply along the branches: P(red, red) = 3/8 × 3/8 = 9/64.',
              'Keep as a fraction — no rounding needed.'
            ],
            answer: 'P(both red) = 9/64.'
          }
        ],
        examFocus: [
          'WITH replacement → multiply identical fractions; WITHOUT → the denominators drop by one on stage two. Say which case you are in.',
          'Complement shortcuts save time: "at least one …" is usually 1 − P(none).',
          'Answers as simplified fractions (or decimals if the question says so); probabilities above 1 mean a method error — check before moving on.'
        ]
      }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
