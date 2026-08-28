/* Year 9 PDHPE (9A PDHPE 2026, Amity College Illawarra, Mr Shephard) — Study Guide.
   Sources: PDHPE K–10 Syllabus (2018) — the syllabus in force for Year 9 in 2026 — outcome statements parsed 2026-08-28 from the official document at https://www.nsw.gov.au/education-and-training/nesa/curriculum/pdhpe/pdhpe-k-10-2018 (docx). Implementation status ("2024 syllabus starts teaching 2027") verified at https://curriculum.nsw.edu.au/learning-areas/pdhpe/pdhpe-7-10-2024/overview — see docs/research/nesa-pdhpe-sources-2026-08-28.md.
   Topics cover all three Stage 5 strands and all PD5-1…PD5-11 outcomes; refine against 9A Classroom material as it arrives via _inbox. */
(function (root) {
  root.YSH_DATA = root.YSH_DATA || {};
  root.YSH_DATA.pdhpe = root.YSH_DATA.pdhpe || {};
  root.YSH_DATA.pdhpe.guide = {
    subjectId: 'pdhpe',
    syllabus: 'NESA PDHPE K–10 Syllabus (2018), Stage 5 — in force for Year 9 in 2026 (the new PDHPE 7–10 Syllabus (2024) starts teaching in 2027)',
    topics: [
      {
        id: 'mental-wellbeing',
        title: 'Mental wellbeing, identity and life challenges',
        outcomes: ['PD5-1', 'PD5-2', 'PD5-9'],
        bigIdea: 'Mental wellbeing is not constant happiness — it is a manageable state you can protect with self-management skills, strong identity and early help-seeking; asking for help is a strength, not a weakness.',
        keyKnowledge: [
          'Mental wellbeing is more than the absence of illness: it is a state that lets a person cope with the normal stresses of life, realise their abilities, learn and work well, and contribute to their community. It rises and falls — it is not fixed.',
          'The syllabus names five key self-management skills: strengthening personal identity, self-awareness, emotion and stress management, decision-making and problem-solving, and help-seeking.',
          'Resilient people share skills and attitudes — self-monitoring, self-regulation, keeping a realistic perspective and a positive attitude to change — that can be practised, not just inherited.',
          'Evidence-supported coping strategies for stress, loss and grief include connecting to support networks, journaling, physical activity, sleep routines and mindfulness.',
          'Early warning signs of unsafe or overwhelming situations come in three groups — physical, emotional and social indicators — plus external signs such as controlling behaviour in others.',
          'Help and crisis services for young people are free and confidential: Kids Helpline 1800 55 1800 (24/7, ages 5–25), headspace (12–25, online or in person), Lifeline 13 11 14, the school counsellor and a GP. PD5-2 asks you to appraise which service SUITS the situation.'
        ],
        keyTerms: [
          { term: 'mental wellbeing', definition: 'a state in which a person copes with normal stresses, realises their abilities and contributes to their community — more than just the absence of mental illness' },
          { term: 'resilience', definition: 'the capacity to recover from and respond positively to challenges and adversity' },
          { term: 'self-management', definition: 'using skills such as self-awareness, stress management, decision-making and help-seeking to take responsibility for your own health and behaviour' },
          { term: 'stressor', definition: 'any event or demand that triggers a stress response — exams, conflict, change, overload' },
          { term: 'help-seeking', definition: 'recognising when help is needed and actively accessing support from trusted people and services' },
          { term: 'early warning signs', definition: 'physical, emotional or social indicators that a situation or a person\'s state is becoming unsafe or unmanageable' },
          { term: 'coping strategy', definition: 'a deliberate action — journaling, physical activity, talking to someone — used to manage stress, loss or grief' }
        ],
        workedExamples: [
          {
            prompt: 'SCENARIO: Zara, 14, has three assessment deadlines this fortnight. She quit netball ("no time"), scrolls past midnight, is snapping at friends, and says "what\'s the point". Identify the risk factors, then justify a safe choice step by step.',
            steps: [
              'Step 1 — Identify the risk factors: withdrawal from enjoyable activity, broken sleep, irritability (changed relationships) and hopeless language ("what\'s the point") — four early warning signs in one scenario.',
              'Step 2 — Assess: nothing here is dangerous yet, but the pattern is typical of overload sliding toward poor mental health; the risk of doing nothing is escalation.',
              'Step 3 — Decide and act: rebuild one protective routine first (return to netball or daily movement), use decision-making skills to sequence the three deadlines, and talk to a trusted adult this week.',
              'Step 4 — Justify: the warning signs have lasted more than two weeks, which is exactly when early help-seeking works best; acting now protects sleep, mood and school results before the situation worsens.'
            ],
            answer: 'Four warning signs identified, protective routine restored, workload planned with self-management skills, and a trusted adult engaged early — a justified, safe response (PD5-1, PD5-9).'
          },
          {
            prompt: 'SCENARIO: At 1:20 am, your friend posts "better off without me" on their story. What do you do, and why is that the safe choice?',
            steps: [
              'Step 1 — Identify the risk: hopeless public messaging at night is a serious emotional warning sign — treat it as real, not attention-seeking.',
              'Step 2 — Decide the immediate action: message or call them directly ("I saw your post, I\'m here — are you OK?") and do not leave them alone with it.',
              'Step 3 — Escalate safely: involve a trusted adult now, even if they ask you not to — safety beats secrecy; if they are in immediate danger, call 000, and Kids Helpline 1800 55 1800 is available to both of you.',
              'Step 4 — Justify: a night-time post of hopelessness can indicate real risk; immediate contact plus adult involvement is the response crisis services themselves recommend — waiting to see how it looks in the morning is the unsafe choice.'
            ],
            answer: 'Contact the friend immediately, involve a trusted adult (000 if in danger), and point to 24/7 help — justified by treating the warning sign as real (PD5-2, PD5-9).'
          },
          {
            prompt: 'SCENARIO: After changing schools, Amir feels isolated and wants support. He compares three options: the school counsellor, an anonymous online forum, and headspace. Which best suits him, and why?',
            steps: [
              'Step 1 — Appraise each service: school counsellor — free, on-site, but he barely knows the school yet; anonymous forum — easy to access but unmoderated advice varies and no accountability; headspace — free, designed for 12–25 year olds, staffed by trained professionals, online or in person without involving the school.',
              'Step 2 — Match to need: Amir needs professional, confidential support from people who work with young people going through change — not diagnosis, and not anonymous opinions.',
              'Step 3 — Decide: start with headspace (best fit for privacy + professional help) while building friendships through one school activity; keep the school counsellor as an ongoing option.',
              'Step 4 — Justify: PD5-2 asks for appraised choices — headspace matches his age, need and privacy requirements; the forum fails the credibility test.'
            ],
            answer: 'headspace chosen on fit (age range, trained staff, free, confidential), with the forum rejected on credibility — health information and services appraised, not just listed (PD5-2).'
          }
        ],
        examFocus: [
          'Scenario questions ask you to identify warning signs AND justify a response — always pair what you notice (physical, emotional, social indicators) with what you do and why it is safe.',
          'Name actual services (Kids Helpline 1800 55 1800, headspace, school counsellor) and explain WHY each suits the person — a vague "talk to someone" caps your marks.'
        ]
      },
      {
        id: 'relationships',
        title: 'Respectful relationships, power and consent',
        outcomes: ['PD5-3', 'PD5-10'],
        bigIdea: 'Respectful relationships run on equality, consent and empathy — power imbalances and discrimination corrode them, and the five interpersonal skills are the tools that build them back.',
        keyKnowledge: [
          'The characteristics of respectful relationships are rights and ethical responsibilities: consent, ground rules and clear boundaries, held equally by everyone in the relationship.',
          'Inclusive and equal relationships are built with empathy and active listening — treating different people, backgrounds and abilities as equally worth hearing.',
          'Power exists in every group; the syllabus asks you to examine its forms and its balance. Discrimination — unfair treatment because of who someone is — is an abuse of power, as are bullying, harassment and vilification.',
          'The syllabus names five key interpersonal skills: communication, collaboration and inclusion, empathy building, leadership and advocacy, and social awareness.',
          'An assertive response states your thoughts, opinions and beliefs while acknowledging others\' feelings — the middle ground between passive (giving in) and aggressive (attacking). Refusal skills are assertive responses to pressure.',
          'Online behaviour follows the same ethics: sharing someone\'s private image or information without consent breaches trust and can cause serious, lasting harm — and it is never private once forwarded.'
        ],
        keyTerms: [
          { term: 'respectful relationship', definition: 'a relationship in which each person\'s rights, boundaries and feelings are equally valued and protected' },
          { term: 'consent', definition: 'free, informed and willing agreement that can be withdrawn at any time' },
          { term: 'boundary', definition: 'a personal limit on behaviour or contact that others must respect' },
          { term: 'empathy', definition: 'understanding and sharing another person\'s feelings and point of view' },
          { term: 'active listening', definition: 'focusing fully on the speaker, reflecting back what you heard and checking you understood it correctly' },
          { term: 'discrimination', definition: 'unfair treatment of a person or group because of who they are — an abuse of power' },
          { term: 'assertiveness', definition: 'expressing your thoughts, opinions and beliefs confidently while still acknowledging the feelings and rights of others' }
        ],
        workedExamples: [
          {
            prompt: 'SCENARIO: A friend forwards a private screenshot of a classmate into your group chat with "how embarrassing lol". Identify the risk factors, then justify a safe choice step by step.',
            steps: [
              'Step 1 — Identify the risk factors: the image was shared without the classmate\'s consent; every forward extends the breach; the classmate faces humiliation and lasting harm; everyone who forwards it shares responsibility.',
              'Step 2 — Decide your own line: do not forward it, do not reply with a reaction, and save nothing — you control your part in the chain.',
              'Step 3 — Act: privately tell your friend to delete it and why ("this isn\'t yours to share — imagine it was you"), support the targeted classmate, and tell a trusted adult or report it if it keeps spreading.',
              'Step 4 — Justify: consent was already violated — the safe choice stops the spread instead of adding to it, protects the classmate, and models the respect you would want (PD5-3, PD5-10).'
            ],
            answer: 'Refuse to forward, challenge the friend privately, support the target and involve an adult if it spreads — consent protected and discrimination not joined (PD5-3, PD5-10).'
          },
          {
            prompt: 'SCENARIO: Your teammate Idris is mocked about his accent during warm-up drills and goes quiet. What does an inclusive response look like, step by step?',
            steps: [
              'Step 1 — Identify the risk: public mockery about identity is discrimination, not banter; the risks are exclusion, damaged belonging and a team culture where others stay silent.',
              'Step 2 — Act in the moment: name the behaviour calmly ("that\'s not on — his accent has nothing to do with drills") and re-include Idris immediately in the activity.',
              'Step 3 — Follow up: check on Idris privately, listen actively to how it affected him, and tell the coach so the behaviour is addressed, not repeated.',
              'Step 4 — Justify: an inclusive response protects the person targeted AND sets the group standard — silence would signal the mockery is acceptable (PD5-3, PD5-10).'
            ],
            answer: 'Name the behaviour in the moment, re-include the person, follow up privately and report — empathy and advocacy used as interpersonal skills, not just words.'
          },
          {
            prompt: 'SCENARIO: Two friends stop speaking over a rumour one of them spread. As the mutual friend, how do you help repair it without taking sides?',
            steps: [
              'Step 1 — Identify the risks: the rumour is still circulating, both feel wronged, and group chat pile-ons will harden the conflict.',
              'Step 2 — Refuse to carry the rumour: do not repeat it and ask others to stop — reducing the audience lowers the damage.',
              'Step 3 — Use conflict-resolution moves: hear each side separately with active listening, use "I" statements when bringing them together ("I felt uncomfortable when the rumour spread"), and focus on fixing the harm, not deciding a winner.',
              'Step 4 — Justify: fair mediation lowers the power imbalance, restores respectful communication and leaves both people their dignity — taking sides would rebuild the same problem with reversed roles (PD5-10).'
            ],
            answer: 'Stop the rumour\'s spread, listen to both sides actively, mediate with "I" statements and aim at repairing harm — interpersonal skills critiqued and applied (PD5-10).'
          }
        ],
        examFocus: [
          'Power questions: name the form of power AND its effect AND a strategy that rebalances it — "it was mean" scores nothing; "discrimination abused the group\'s power, isolating him; reporting it restored accountability" scores.',
          'Consent and boundaries answers must state that consent is free, informed and can be withdrawn — respect for a "no" said late is as important as respect for a "no" said early.'
        ]
      },
      {
        id: 'movement-skill',
        title: 'Movement skill, tactics and performance',
        outcomes: ['PD5-4', 'PD5-5', 'PD5-10', 'PD5-11'],
        bigIdea: 'Skilled performance is built, not born: manipulate space, time, objects, effort and people, use specific feedback to refine skills, and justify your tactical choices — that is what separates a performer from a player.',
        keyKnowledge: [
          'The five movement elements a performer can manipulate are space, time, objects, effort and people — analysing each one explains why a performance worked or failed.',
          'Skills progress from fundamental (run, jump, throw, catch) to specialised (a netball chest pass under pressure, a volleyball serve); they are refined through practice in increasingly complex and demanding contexts — varying space, rules, equipment, time restrictions and rhythm.',
          'Feedback improves performance when it is specific and criteria-linked: "bend your knees lower on the catch" can be practised; "good job" cannot. Performers respond to teacher and peer feedback, and learn to evaluate their own performance.',
          'Tactics are plans for solving movement challenges — spacing, fakes, defensive rotations, set plays. PD5-5 asks you to appraise and JUSTIFY choices of actions, then evaluate whether they worked.',
          'Force matters: the body produces force to project objects and itself, and absorbs force when landing — bending the hips, knees and ankles on landing spreads the force and prevents injury.',
          'Movement composition combines synchronous (together) and individual movements into sequences that show contrast, flow and purpose — judged against established criteria, not just liked or disliked.',
          'Fair play and ethical behaviour — equitable participation, respect for officials, playing by the rules — are part of performance: they keep people included and the activity safe.'
        ],
        keyTerms: [
          { term: 'specialised movement skill', definition: 'an advanced, sport- or context-specific skill built on fundamental skills — e.g. a lay-up, a spike, a tumble turn' },
          { term: 'movement elements', definition: 'the five things a performer manipulates — space, time, objects, effort and people' },
          { term: 'tactic', definition: 'a planned strategy for solving a movement challenge or gaining an advantage in play' },
          { term: 'feedback', definition: 'information about a performance used to improve it — most useful when specific, criteria-linked and actionable' },
          { term: 'movement composition', definition: 'a created sequence combining movements (synchronous and individual) to achieve a purpose or performance goal' },
          { term: 'force absorption', definition: 'reducing impact on the body by spreading force across joints and time — e.g. bending on landing' },
          { term: 'transfer of learning', definition: 'applying skills or strategies that worked in one activity to a different movement situation' }
        ],
        workedExamples: [
          {
            prompt: 'SCENARIO: Your basketball team keeps losing possession because passes are intercepted under defensive pressure. Identify the performance problem, propose tactics, and justify your choices step by step.',
            steps: [
              'Step 1 — Analyse with movement elements: SPACE — the ball carrier is surrounded, passing lanes are closed; PEOPLE — defenders are packed near the ball; TIME — passes are released late, after the defender closes.',
              'Step 2 — Propose tactics: increase offensive spacing to open lanes; add a pass fake before each pass to move the defender; cut to receive on the move instead of standing.',
              'Step 3 — Justify: spacing attacks the SPACE problem, fakes attack the PEOPLE problem, earlier release attacks the TIME problem — each tactic answers a named element, not a guess.',
              'Step 4 — Evaluate: agree on a review point (next game or drill): count interceptions before and after — if possession holds longer, the tactics worked; if not, re-analyse which element was misjudged (PD5-5).'
            ],
            answer: 'Problem diagnosed by element (space, people, time), tactics matched to each diagnosis, and a review set to evaluate the effect — a justified, testable tactical decision (PD5-5).'
          },
          {
            prompt: 'SCENARIO: A peer practicing their netball chest pass keeps it wobbling off target. Give feedback that will actually improve the pass, step by step.',
            steps: [
              'Step 1 — Observe against the criteria first: hands behind the ball at the chest, step into the pass, extend arms, flick wrists outward, follow through with thumbs pointing down.',
              'Step 2 — Name one strength specifically ("your stepping into the pass is strong") — feedback opens with what to keep.',
              'Step 3 — Name ONE correction, not five: "snap your wrists so the thumbs finish pointing down — that stops the wobble."',
              'Step 4 — Re-practise and re-check: take ten passes with the single correction, then reassess against the criteria — specific, criteria-linked feedback is what makes practice effective.'
            ],
            answer: 'Observe against criteria, one specific strength, one specific correction, re-practise — feedback that names cues and corrections instead of "good job".'
          },
          {
            prompt: 'SCENARIO: Your group must compose a 90-second movement sequence for assessment with both synchronous and individual sections. Plan and justify the composition step by step.',
            steps: [
              'Step 1 — Set the purpose and music: choose a track with clear phrase changes so the sequence can shift sections on the beat.',
              'Step 2 — Design the structure: open with a synchronised unison section (matches SPACE and TIME elements), break into an individual showcase section (each member highlights different EFFORT qualities — sharp vs flowing), close re-formed in canon.',
              'Step 3 — Justify against criteria: contrast between synchronous and individual sections shows composition control; matching phrases to the music shows TIME manipulation; formations changing levels show SPACE — every choice is defensible, not decorative.',
              'Step 4 — Rehearse, feedback, refine: film a run-through, compare against the criteria, adjust the weakest transition — composers evaluate and refine (PD5-11).'
            ],
            answer: 'Structure chosen for contrast (unison → individual → canon), justified against movement elements and assessment criteria, then refined through filmed feedback (PD5-11).'
          }
        ],
        examFocus: [
          'Justify-a-tactic answers follow problem → tactic → movement element it uses → expected effect → how you would evaluate it; a tactic named without its reason scores half.',
          'Feedback questions demand SPECIFIC cues linked to a correction — writing "tell them to try harder" or "good job" earns nothing because nothing actionable was said.'
        ]
      },
      {
        id: 'physical-activity',
        title: 'Physical activity, fitness and lifelong participation',
        outcomes: ['PD5-7', 'PD5-8', 'PD5-9'],
        bigIdea: 'Regular activity is a lifelong investment: know the guidelines, then use the planning cycle — baseline, SMART goal, FITT plan, tracking, evaluation — because the skill you are learning is designing your own activity for life, not surviving one fitness unit.',
        keyKnowledge: [
          'The Australian 24-Hour Movement Guidelines for 5–17 year olds recommend at least 60 minutes of moderate-to-vigorous physical activity (MVPA) every day, including several hours of light activity, and muscle- and bone-strengthening activities at least 3 days a week.',
          'Health-related fitness components: cardiorespiratory endurance, muscular strength, muscular endurance, flexibility and body composition. Skill-related components: agility, balance, coordination, power, reaction time and speed — knowing which component an activity trains lets you design plans that match goals.',
          'The FITT principle structures any plan: Frequency (sessions per week), Intensity (how hard — the "talk test" is a simple check), Time (session length) and Type (activity chosen to match the goal).',
          'Personalised plans follow the syllabus cycle: set goals (SMART), choose activities meeting needs and interests, track progress, then evaluate and adjust — PD5-8 requires you to design, implement AND evaluate plans.',
          'Activity benefits are physical (stronger heart, muscles and bones), mental (mood, sleep, concentration, stress management) and social (connection, teamwork) — a complete answer names more than one type.',
          'Lifelong physical activities — walking, swimming, cycling, dance, bushwalking, social sport — are evaluated for their potential to keep YOU active for decades, which is why local availability and enjoyment matter as much as intensity.',
          'Sedentary behaviour (sitting screen time) is a separate risk factor: reducing it is its own guideline, not solved by one gym session.'
        ],
        keyTerms: [
          { term: 'MVPA', definition: 'moderate-to-vigorous physical activity — movement that raises heart rate and breathing; 5–17 year olds need 60+ minutes daily' },
          { term: 'cardiorespiratory endurance', definition: 'the ability of the heart and lungs to supply oxygen during sustained activity — trained by running, swimming, cycling' },
          { term: 'FITT principle', definition: 'Frequency, Intensity, Time, Type — the four dials for designing a training or activity plan' },
          { term: 'SMART goal', definition: 'a goal that is Specific, Measurable, Achievable, Relevant and Time-bound' },
          { term: 'sedentary behaviour', definition: 'sitting or lying with low energy expenditure during waking hours — a separate health risk from inactivity of the "no sport" kind' },
          { term: 'health-related fitness', definition: 'fitness components tied to health outcomes: cardiorespiratory endurance, muscular strength and endurance, flexibility, body composition' },
          { term: 'lifelong physical activity', definition: 'activities sustainable across decades because they are enjoyable, accessible and matched to the person — e.g. swimming, walking, social sport' }
        ],
        workedExamples: [
          {
            prompt: 'SCENARIO: Dana, 14, does no sport, gets driven to school and games on her phone most evenings. She wants to "get fitter" for a school fun run in 10 weeks. Design her plan step by step.',
            steps: [
              'Step 1 — Baseline and goal: she currently walks about 10 minutes a day. SMART goal: "jog the 4 km school fun run without stopping in 10 weeks."',
              'Step 2 — Apply FITT to the goal: Frequency — 4 sessions/week; Intensity — brisk walk/jog intervals building to steady jogging (talk test: can speak short sentences); Time — 20 minutes building to 40; Type — walk/jog, plus one bike or swim session for endurance variety.',
              'Step 3 — Meet the guidelines: daily sessions push her toward 60 minutes MVPA; add two bodyweight strength sessions (push-ups, lunges) for the muscle- and bone-strengthening days.',
              'Step 4 — Track and evaluate: log sessions and time per km weekly; evaluate at week 5 — if the jog intervals feel easy, lengthen them; if sore, add a rest day. The plan is adjusted by evidence, not mood (PD5-8).'
            ],
            answer: 'Baseline → SMART goal → FITT plan matched to the fun run → tracking and a week-5 evaluation point — a designed, implemented and evaluated personalised plan (PD5-8).'
          },
          {
            prompt: 'SCENARIO: Marcus says: "Sixty minutes a day? I\'m too busy — and I hate running." Propose strategies that could realistically work for him, and justify each.',
            steps: [
              'Step 1 — Identify the real barriers: time pressure and activity preference — the plan must fit his life or he will quit (a plan he hates is not a plan).',
              'Step 2 — Embed activity in routines: ride or walk part of the trip to school (commute = free minutes), take phone calls while walking, help with active chores.',
              'Step 3 — Match type to preference: he hates running, so swap it — social basketball, skating, swimming; guideline minutes count whatever the type.',
              'Step 4 — Justify: the guideline target (60 min MVPA) is met by accumulated minutes across the day, so routines + a preferred sport is an evidence-based answer to "too busy, hate running" — strategies matched to barriers (PD5-9).'
            ],
            answer: 'Active commuting, phone-call walks and a preferred sport replace running — accumulated MVPA meets the guideline while fitting his barriers, which is what makes it stick.'
          },
          {
            prompt: 'SCENARIO: Your local council offers a competitive rugby league club, a 24-hour gym (16+ entry), a free pool with lap lanes and a bushwalking group. Evaluate their potential to support LIFELONG activity for a 15-year-old.',
            steps: [
              'Step 1 — Set criteria: cost, accessibility now and as an adult, skill needed, social connection and enjoyment — lifelong potential, not just intensity.',
              'Step 2 — Weigh each option: rugby league — strong social connection and fitness now, but high injury risk and most players stop by their 20s; gym — excellent from age 16 but costs money; pool — cheap, usable from childhood to old age, trains endurance, low injury risk; bushwalking — free, social, sustainable for life, trains lighter activity.',
              'Step 3 — Judge: the pool and bushwalking score highest for LIFELONG potential; rugby scores highest for connection right now.',
              'Step 4 — Conclude: a mix wins — team sport now for connection, plus a pool/walking habit that survives after school ends. Evaluating lifetime potential is exactly the PD5-8 skill.'
            ],
            answer: 'Options judged against cost, access, injury risk and sustainability: pool + bushwalking have the strongest lifelong potential; combining them with current team sport covers connection today (PD5-8).'
          }
        ],
        examFocus: [
          'Plan questions must include every element — baseline, SMART goal, FITT for the activity, tracking and evaluation — one missing element caps the mark range.',
          'Quote the guideline number (60 min MVPA daily; strengthening 3 days/week) and name at least two benefit types (physical, mental, social) when justifying any activity recommendation.'
        ]
      },
      {
        id: 'nutrition',
        title: 'Food and nutrition for young people',
        outcomes: ['PD5-2', 'PD5-6'],
        bigIdea: 'Food choices are made by you AND made for you — by family, culture, advertising and peers — so healthy eating means knowing the food groups and critiquing the messages pushing you off them.',
        keyKnowledge: [
          'The Australian Dietary Guidelines and the Australian Guide to Healthy Eating sort everyday foods into five groups: vegetables and legumes/beans; fruit; grain (cereal) foods; lean meats, poultry, fish, eggs, nuts, seeds and legumes; and milk, cheese, yoghurt and alternatives — plus water as the default drink.',
          'Discretionary foods are not needed in the diet: they are energy-dense and nutrient-poor (sweet drinks, confectionery, fried snack foods, pastries). The guideline is to LIMIT them, not that a single biscuit is "poison" — balance across the day matters.',
          'The syllabus asks you to investigate influences on food choices, diet and habits — family routines, advertising and marketing, culture, peers, emotions and convenience all compete with the guidelines.',
          'Marketing targets young people deliberately: celebrity endorsements, colourful packaging, sport sponsorships and social-media influencers shape attitudes to food long before you read a label.',
          'PD5-2 requires appraising health information: apply criteria — who authored it and their qualifications, what evidence supports it, whether it is current, and what the source profits if you believe it.',
          'Fad diets share red flags: guaranteed rapid results, "detox" language, one banned food group, and something for sale. Critique them with the same appraisal criteria rather than trusting their confidence.',
          'Healthy eating strategies that work are realistic swaps within your actual context — water instead of soft drink, adding a vegetable to dinner, planning a canteen choice before you are starving — not perfection.'
        ],
        keyTerms: [
          { term: 'nutrient', definition: 'a substance in food the body needs to function — carbohydrates, protein, fats, vitamins, minerals, water, fibre' },
          { term: 'food group', definition: 'a category of foods with similar nutrients; the Australian Guide to Healthy Eating names five everyday groups' },
          { term: 'discretionary food', definition: 'a food not needed for health — energy-dense, nutrient-poor — to be limited: sweet drinks, lollies, fried snacks, pastries' },
          { term: 'dietary guideline', definition: 'an evidence-based national recommendation on what to eat and drink for health — in Australia, the Australian Dietary Guidelines' },
          { term: 'marketing', definition: 'paid strategies (packaging, endorsements, sponsorships, influencers) designed to make a product more appealing — a strong external influence on food choices' },
          { term: 'credibility', definition: 'the trustworthiness of a health source — judged by author qualifications, evidence, currency and freedom from commercial bias' },
          { term: 'fad diet', definition: 'a trendy eating pattern promising fast results, usually banning food groups and usually selling something — a red-flag category for appraisal' }
        ],
        workedExamples: [
          {
            prompt: 'SCENARIO: It is lunchtime, you have $6, and the canteen queues are: a meal-deal poster promising an energy drink + chips for $5, a salad-and-chicken wrap for $6, a meat pie for $4.50. Identify the influences at work and justify your choice step by step.',
            steps: [
              'Step 1 — Identify the influences: the meal deal uses marketing (poster, bundle pricing, energy drink = "deal" appeal) and is placed to catch the starving queue; price pulls toward the pie; peers may mock the salad.',
              'Step 2 — Test against the guidelines: the wrap hits at least three food groups (grains, vegetables, lean meat) with water on the side; the meal deal is two discretionary foods; the pie is discretionary on its own.',
              'Step 3 — Decide: the $6 wrap + water — full food groups, no energy drink, and the same price as the marketed "deal".',
              'Step 4 — Justify: the choice meets the dietary guidelines, resists an identified marketing influence, and is affordable — the decision is reasoned, not just "healthy is good" (PD5-6).'
            ],
            answer: 'Influences named (marketing, price, peers), options tested against food groups, wrap + water chosen — a justified selection that resists the advertised bundle (PD5-6).'
          },
          {
            prompt: 'SCENARIO: An influencer\'s post claims a "detox tea" delivers "5 kg lighter in one week — my secret!" with a discount code. Appraise the claim step by step before anyone in your group buys it.',
            steps: [
              'Step 1 — Check the author: the poster is paid through a discount code — a commercial interest in your belief, so bias is confirmed before evidence is even checked.',
              'Step 2 — Check the evidence: no study cited, "secret" language, and a result (5 kg/week) far beyond safe, evidence-based rates of weight change.',
              'Step 3 — Check currency and authority: compare with authoritative sources — the Australian Dietary Guidelines recommend food groups and water; "detox teas" appear in none of them; "detox" itself is marketing, your body already detoxes via liver and kidneys.',
              'Step 4 — Conclude and act: reject the claim on criteria (bias, no evidence, contradicts authority) and share why with the group — appraisal protects others too (PD5-2).'
            ],
            answer: 'Author bias, zero evidence, impossible promise and contradiction of the dietary guidelines — the claim fails appraisal and the "detox" premise itself is marketing (PD5-2).'
          },
          {
            prompt: 'SCENARIO: Your family buys 2 litres of soft drink every dinner. You want them to change without starting a war. Critique the contextual factors and plan a realistic strategy step by step.',
            steps: [
              'Step 1 — Critique the context: soft drink is a habit embedded in family routine (cost, taste preference, culture of sharing) — blaming individuals will not change a system.',
              'Step 2 — Plan a swap, not a ban: propose sparkling water + fresh lemon as the default drink, keep soft drink to one occasion a week — realistic beats extreme.',
              'Step 3 — Make it easy: find the sparkling water on special, buy the first batch yourself, and volunteer to fill the jug at dinner so the new default is effortless.',
              'Step 4 — Evaluate after a month: if the swap held most nights, celebrate and keep it; if not, identify which factor blocked it (cost? taste?) and adjust — PD5-6 wants critiqued factors AND critiqued strategies.'
            ],
            answer: 'Context critiqued (habit, cost, taste), realistic swap planned and made effortless, then evaluated and adjusted — health promotion inside a real family context (PD5-6).'
          }
        ],
        examFocus: [
          'Appraisal answers must apply explicit criteria — author/bias, evidence, currency, authority comparison — and reach a verdict; "it looks fake" earns nothing.',
          'Influence questions need the chain: influence → how it works (mechanism) → strategy that counters it. Naming "advertising" without the mechanism and counter-strategy is half an answer.'
        ]
      },
      {
        id: 'safety-drugs',
        title: 'Safety, first aid and alcohol and other drugs',
        outcomes: ['PD5-6', 'PD5-7', 'PD5-9'],
        bigIdea: 'Safety is a skill you can rehearse: assess risk early, plan your responses and refusals before you need them, run DRSABCD in order in an emergency — because in a crisis you fall back on what you practised, not what you hoped.',
        keyKnowledge: [
          'Risk assessment means recognising early warning signs, listing choices and consequences, and deciding the best option BEFORE pressure is on — the syllabus calls this formulating a safety plan.',
          'DRSABCD is the first-aid action plan, in order: Danger (check the scene is safe), Response (check the casualty responds), Send for help (000), Airway (open and clear), Breathing (check for normal breathing), CPR (30 compressions : 2 breaths if not breathing normally), Defibrillator (use an AED as soon as one arrives).',
          'The order matters: the danger check exists so you do not become a second casualty; an unbreathing casualty needs compressions within minutes — emergency call first, then act.',
          'Alcohol is a depressant: it slows the brain and body — judgement, coordination and reaction time all deteriorate, even though drinkers feel more confident. Vapes and energy-drink mixes do not cancel the depressant effect.',
          'Drugs are classified by their main effect: depressants (alcohol, cannabis), stimulants (nicotine/vapes, caffeine, cocaine, ice) and hallucinogens (LSD, magic mushrooms). Classification predicts the risks; any unknown pill at a party is an unmanaged risk.',
          'The syllabus asks you to assess the costs of drug use to the community and recommend harm-minimisation strategies — e.g. responsible service of alcohol, random breath testing, and mobile drug testing at festivals.',
          'Road risks for young people concentrate in known factors: mobile phone and music distractions, speeding, overcrowded cars, fatigue and drink/drug driving. Counter-strategies are just as specific: a designated driver, planned transport home, phones on Do Not Disturb, resting when tired.',
          'Refusal skills are rehearsed, not improvised: a clear "no" plus a reason, an alternative activity, and an exit plan — with a trusted adult or 000 as backup if a situation escalates.'
        ],
        keyTerms: [
          { term: 'DRSABCD', definition: 'the first-aid action plan in order: Danger, Response, Send for help, Airway, Breathing, CPR, Defibrillator' },
          { term: 'risk assessment', definition: 'identifying hazards and warning signs, weighing choices and consequences, and deciding the safest workable option' },
          { term: 'safety plan', definition: 'a pre-decided response to a risky situation — choices, consequences, exit route and who to call — made before the situation happens' },
          { term: 'depressant', definition: 'a drug that slows brain and body activity — e.g. alcohol, cannabis; judgement and coordination drop while confidence may rise' },
          { term: 'stimulant', definition: 'a drug that speeds up brain and body activity — e.g. nicotine, caffeine, cocaine, ice; raises heart rate and risk-taking' },
          { term: 'harm minimisation', definition: 'strategies that reduce the damage risky behaviour causes — e.g. random breath testing, responsible service of alcohol, festival pill-testing debates' },
          { term: 'designated driver', definition: 'the agreed sober driver for a group — the counter-strategy to drink driving that is planned before the night starts' }
        ],
        workedExamples: [
          {
            prompt: 'SCENARIO: You are at a house party. Beer is circulating among 15-year-olds, and the friend who drove you has had three drinks in two hours. Identify the risk factors, then justify a safe action plan step by step.',
            steps: [
              'Step 1 — Identify the risk factors: underage drinking is spreading (group pressure rising); the driver is impaired — three drinks in two hours will keep a P-plate or learner well over zero; nobody has a plan for leaving; phones are away and parents think you are elsewhere.',
              'Step 2 — Assess choices and consequences: staying risks pressure you cannot control later; leaving with the driver risks a crash; the safest workable option is pre-planned transport out.',
              'Step 3 — Act: refuse drinks with a rehearsed line ("I\'m good — I\'m on driver-watch tonight"), tell the driver you are not getting in the car, and call the pre-agreed backup — a parent or the 000 alternative is a ride-share or trusted adult. State it as a decision, not a debate.',
              'Step 4 — Justify: every choice is risk-ranked — a lost argument with friends costs pride; getting in that car costs lives. The plan was made before the party, which is exactly why it works (PD5-9).'
            ],
            answer: 'Risks named (underage drinking, impaired driver, no exit plan, isolation), rehearsed refusal used, alternative transport activated — choices ranked by consequence, justified before pressure peaks (PD5-9).'
          },
          {
            prompt: 'SCENARIO: At a park barbecue, a relative collapses and is unresponsive but breathing. Walk through your response step by step in the correct order.',
            steps: [
              'Step 1 — D: Danger — scan the barbecue, coals and crowd; move hazards away so there is no second casualty.',
              'Step 2 — R: Response — talk loudly and squeeze the shoulders; no response.',
              'Step 3 — S: Send for help — point at a specific person to call 000, put the phone on speaker so instructions can guide you.',
              'Step 4 — A: Airway — open the mouth, check and clear it; B: Breathing — look, listen and feel: breathing normally, so place the casualty in the recovery position and monitor breathing until the ambulance arrives; CPR only starts if normal breathing stops; an AED would be used as soon as one arrives. Justify: the order is not decoration — danger first protects you, and the breathing check decides whether CPR starts at all (PD5-7).'
            ],
            answer: 'D–R–S completed in order, casualty breathing so recovery position + monitoring, CPR held in reserve — the order of DRSABCD justified by what each step rules out (PD5-7).'
          },
          {
            prompt: 'SCENARIO: Walking home at 9 pm, your usual shortcut through an unlit park feels wrong — two people are loitering at the far gate. Assess the risk and execute a safety plan step by step.',
            steps: [
              'Step 1 — Read the warning signs: unlit route, isolated location, unknown group positioned at your only exit — social and environmental indicators, not paranoia.',
              'Step 2 — Weigh choices and consequences: the shortcut saves 5 minutes but removes visibility and escape options; the longer lit street costs minutes and buys exits.',
              'Step 3 — Execute: turn back onto the lit main street, phone a parent for a pickup, share your live location, and keep the phone in hand (not headphones) while walking.',
              'Step 4 — Justify: the plan was decided on evidence (position, lighting, exits), not fear alone — choosing the 10-minute cost over the low-visibility route is a risk-assessed decision, and it was executable because you had rehearsed the pattern (PD5-9).'
            ],
            answer: 'Warning signs read, options weighed against exits and visibility, lit route + contact chosen — safety plan executed on reasoning, not on panic (PD5-9).'
          }
        ],
        examFocus: [
          'DRSABCD answers must be in order, with each letter expanded and the reason the order matters (danger check = no second casualty; breathing check = decides CPR) — a jumbled list loses the marks even if every word is right.',
          'Scenario refusal answers need a REHEARSED strategy — clear no + reason + alternative + adult backup — never just "say no": one-line refusals collapse under real group pressure.'
        ]
      }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
