/* Year 9 History — NSW Stage 5 (History K–10 Syllabus 2012, in force for Year 9 2026).
   Depth studies covered: Making a Better World? (Industrial Revolution), Making a Nation, Australians at War (WWI),
   plus the Historical concepts and skills that every assessment uses.
   Added 2026-09-09 to the app; not yet matched to his Classroom posts (no posts as at that date). */
(function (root) {
  root.YSH_DATA = root.YSH_DATA || {};
  root.YSH_DATA.history = root.YSH_DATA.history || {};
  root.YSH_DATA.history.guide = {
    subjectId: 'history',
    syllabus: 'NESA History K–10 Syllabus (2012), Stage 5',
    topics: [
      {
        id: 'hist-skills',
        title: 'Historical skills and concepts (source analysis)',
        outcomes: ['HT5-1', 'HT5-2', 'HT5-3', 'HT5-4', 'HT5-5'],
        bigIdea: 'Most History marks come from SKILLS: reading a source, judging usefulness and reliability, and writing a structured paragraph — not from memorising facts.',
        keyKnowledge: [
          'A source is primary (made at the time by someone with direct experience — letter, photo, trench diary) or secondary (created later by a historian — textbook, documentary).',
          'Usefulness answers the QUESTION being asked: state what the source shows, who made it, and why it helps for this specific inquiry — a biased source can still be very useful.',
          'Reliability is judged by cross-checking: does the source agree with other evidence? Who made it, when, for what audience and purpose? An eyewitness can be honest but still mistaken.',
          'Perspective is the point of view of the source\u2019s maker (an enlistment poster sells adventure; a diary records fear); contestation is when historians disagree about the past (e.g. what the Anzac legend leaves out).',
          'History paragraphs follow PEEL: Point (answer the question), Explain (why), Evidence (quote or describe the source), Link (back to the question).',
          'Key concepts for Stage 5: cause and effect, change and continuity, perspectives, significance, contestability, empathy.'
        ],
        keyTerms: [
          { term: 'primary source', definition: 'something created at the time by someone with direct experience — e.g. a 1915 letter from Gallipoli' },
          { term: 'secondary source', definition: 'something created later using evidence — e.g. a textbook or documentary' },
          { term: 'usefulness', definition: 'how much a source helps answer YOUR specific question — always say for what' },
          { term: 'reliability', definition: 'whether a source can be trusted — judged by origin, purpose, audience and cross-checking' },
          { term: 'perspective', definition: 'the viewpoint of a person or group — shaped by their time, place and experience' },
          { term: 'contestability', definition: 'when historians disagree about an event or its meaning — e.g. debates over the Anzac legend' },
          { term: 'PEEL paragraph', definition: 'Point, Explain, Evidence, Link — the paragraph shape markers expect' }
        ],
        workedExamples: [
          {
            prompt: 'A 1915 recruiting poster shows a smiling Australian soldier and the words "Join your mates!". How useful is this source to a historian studying what soldiers actually experienced at Gallipoli?',
            steps: [
              'Identify the source: primary (made in 1915) — but it is PROPAGANDA, made to persuade men to enlist, not to record reality.',
              'Usefulness FOR THE QUESTION: low for actual trench conditions — it hides disease, fear and death; the smiling image is not evidence of experience.',
              'Usefulness for a DIFFERENT purpose: high for studying recruitment, propaganda and government messaging — say this to show the skill.',
              'Reliability check: cross-reference with soldiers\u2019 diaries and official casualty lists, which show conditions the poster omits.',
              'Write the PEEL conclusion: useful for studying persuasion, not experience.'
            ],
            answer: 'Useful as evidence of recruitment propaganda in 1915, but NOT useful for actual soldier experience — its purpose (persuade) makes it unreliable for that question, so historians cross-check it against diaries and casualty records.'
          }
        ],
        examFocus: [
          '"How useful is Source A…" questions: always name WHAT it is useful FOR, judge origin/purpose, and cross-check — never just say "it is biased so not useful".',
          'Extended responses need PEEL paragraphs with evidence (names, dates, source details) in every paragraph.',
          'Perspective questions: explain WHY the author holds that view (when, place, role) — not just that they disagree.'
        ]
      },
      {
        id: 'industrial-revolution',
        title: 'The Industrial Revolution (Making a Better World?)',
        outcomes: ['HT5-1', 'HT5-3', 'HT5-4', 'HT5-5'],
        bigIdea: 'The Industrial Revolution (Britain, from about 1760) replaced hand work with machines — creating wealth and misery at the same time, and reshaping Australia through convict transportation.',
        keyKnowledge: [
          'Causes in Britain: coal and iron ore supplies, cheap shipping and empire markets, capital from trade, a growing population and agricultural improvements that pushed workers into cities.',
          'Key inventions: Watt\u2019s improved steam engine (1769+), spinning jenny and water frame (textiles), power loom, steam locomotive (Stephenson\u2019s Rocket, 1829) and the railway boom.',
          'Factories and cities: work moved from homes to factories; cities like Manchester exploded; overcrowding brought cholera, typhus and slum housing.',
          'Human cost: child labour in mills and mines (chimney sweeps, coal crawlers, 14-hour days), dangerous machinery, low wages, child mortality in industrial towns.',
          'Reform: Factory Acts (1833 banned under-9s in textile mills, limited child hours, introduced inspectors), Mines Act 1842 (no boys under 10, no women or girls underground), abolition of slavery in the British Empire 1833, expanding voting rights later in the century.',
          'Australia link: crowded industrial cities and unemployment helped fill English gaols — one push factor for transporting convicts to New South Wales from 1788.'
        ],
        keyTerms: [
          { term: 'Industrial Revolution', definition: 'the shift from hand production to machine manufacturing, beginning in Britain from about 1760' },
          { term: 'urbanisation', definition: 'the movement of people from rural areas into towns and cities' },
          { term: 'factory system', definition: 'bringing workers and machines into one building under factory discipline and clock time' },
          { term: 'child labour', definition: 'children working long hours in mills and mines — a target of the Factory Acts' },
          { term: 'cholera', definition: 'a deadly water-borne disease of overcrowded 19th-century cities' },
          { term: 'reform', definition: 'a law or movement that changes a system to fix an injustice — e.g. the Factory Acts' }
        ],
        workedExamples: [
          {
            prompt: 'Explain how ONE invention and ONE social problem of the Industrial Revolution changed everyday life in Britain.',
            steps: [
              'Pick the invention: Watt\u2019s steam engine — powered mills anywhere (not just beside rivers), then locomotives cut travel from days to hours.',
              'Effect: goods became cheaper and factories bigger, but workers (including children) now followed the machine\u2019s pace under strict factory discipline.',
              'Pick the problem: rapid urbanisation — families packed into slums, shared privies, contaminated water.',
              'Effect: cholera epidemics (e.g. 1832, 1848) killed thousands until reforms cleaned water supplies.',
              'Link: the same revolution produced wealth, faster transport AND disease — "a better world?" is the depth study\u2019s question.'
            ],
            answer: 'The steam engine moved work into large factories and cut travel times, while uncontrolled urbanisation bred cholera slums — the Industrial Revolution improved production and living standards for some while making life harsher for child workers and slum families.'
          }
        ],
        examFocus: [
          'Cause-and-effect chains: coal/empire/capital → machines → factories → urbanisation → disease → reform.',
          'Source questions love Factory Act reports and child-labour testimonies — practise quoting them as evidence of reform NEED as well as reform happening.',
          '"Better world?" judgement questions need BOTH sides (wealth and progress vs exploitation and disease) plus a conclusion.'
        ]
      },
      {
        id: 'making-a-nation',
        title: 'Making a Nation: Australia 1750–1901',
        outcomes: ['HT5-1', 'HT5-2', 'HT5-3', 'HT5-5'],
        bigIdea: 'Australia in 1750 was a network of Aboriginal nations; by 1901 a Federation of states built on wool and gold — with enormous cost to Aboriginal peoples.',
        keyKnowledge: [
          'Before 1788: an estimated 750,000+ Aboriginal people in some 250 language groups with distinct laws, trade routes and land management (fire-stick farming); Torres Strait Islander societies to the north.',
          '1788: the First Fleet brought about 1,400 people (convicts, marines, officials) to Sydney; introduced disease (smallpox killed thousands of Aboriginal people within years) and the claim of terra nullius denied Indigenous ownership.',
          'Frontier conflict spread with pastoral expansion: massacres and resistance (e.g. Pemulwuy near Sydney); Myall Creek 1838 — the only case where settlers were hanged for massacring Aboriginal people.',
          'Gold rushes from 1851: Eureka Stockade (Ballarat, 1854) — miners\u2019 revolt over licence fees; population and cities boomed; Chinese migrants faced race riots (Lambing Flat 1861).',
          'Federation 1901: six colonies united as the Commonwealth of Australia; the first Parliament passed the Immigration Restriction Act (White Australia policy) — and the Constitution excluded Aboriginal people from the census and most laws.',
          'Continuity of exclusion: Aboriginal protection boards controlled where people lived and worked; full citizenship rights came only in the second half of the 20th century (1967 referendum counted Aboriginal people in the census).'
        ],
        keyTerms: [
          { term: 'terra nullius', definition: '"nobody\u2019s land" — the false legal claim that Australia belonged to no one before 1788' },
          { term: 'frontier conflict', definition: 'violent clashes between settlers and Aboriginal peoples as pastoral land expanded' },
          { term: 'Eureka Stockade', definition: 'the 1854 gold-miners\u2019 rebellion at Ballarat over licence fees — a symbol of democratic rights' },
          { term: 'Federation', definition: 'the union of six colonies into the Commonwealth of Australia on 1 January 1901' },
          { term: 'Immigration Restriction Act', definition: '1901 law founding the White Australia policy (dictation test)' },
          { term: '1967 referendum', definition: 'the vote that counted Aboriginal people in the census and allowed Commonwealth laws for them' }
        ],
        workedExamples: [
          {
            prompt: 'What does the Eureka Stockade reveal about democracy in colonial Australia?',
            steps: [
              'Set the scene: Ballarat 1854, miners forced to buy licences regardless of gold found, police "digger hunts".',
              'The event: miners built a stockade under the Southern Cross flag; troops stormed it on 3 December 1854 — about 30 miners died.',
              'Consequence: public sympathy grew; the licence was replaced by a fairer miner\u2019s right, and demands for representation strengthened.',
              'Significance: within a year Victoria had manhood suffrage (white men) — Eureka is remembered as a push toward "a fair go" democracy.',
              'Limit for perspective: women and Aboriginal people were excluded from those democratic gains.'
            ],
            answer: 'Eureka shows colonial democracy growing from protest: unfair licence laws triggered revolt, repression turned public opinion, and reforms (miner\u2019s right, wider voting rights for white men) followed — though women and Aboriginal people were still excluded.'
          }
        ],
        examFocus: [
          '1750/1788/1851/1901 timeline: Aboriginal nations → colonisation → gold → Federation (know what changed AND what continued).',
          'Perspective questions contrast official proclamations with Aboriginal experience of the same events.',
          'Federation "causes" questions want reasons (defence, immigration control, trade, national identity) in cause-and-effect language.'
        ]
      },
      {
        id: 'wwi-gallipoli',
        title: 'World War I: causes, enlistment and Gallipoli',
        outcomes: ['HT5-1', 'HT5-2', 'HT5-4', 'HT5-5'],
        bigIdea: 'WWI (1914–18) grew from long-term rivalries and one assassination; for Australia it began with a promise of 20,000 men and became the Gallipoli campaign of 1915.',
        keyKnowledge: [
          'Long-term causes (MAIN): Militarism (arms race, huge armies), Alliances (Triple Alliance vs Triple Entente — pulled everyone in), Imperialism (rival empires and colonies), Nationalism (pride and rivalry, especially in the Balkans).',
          'Trigger: assassination of Archduke Franz Ferdinand in Sarajevo, 28 June 1914; the alliance system turned a Balkan crisis into a world war by August.',
          'Australia enters automatically: as a British dominion, Australia was at war when Britain declared war (4 August 1914) — and pledged 20,000 men.',
          'Enlistment: propaganda posters, adventure and mateship, loyalty to Empire; by war\u2019s end about 417,000 Australians enlisted from under 5 million people; Indigenous men were blocked at first and allowed (if "one European parent") from 1917.',
          'Gallipoli 1915: plan to knock Ottoman Turkey out and open a supply route to Russia; the ANZAC force landed 25 April at a narrow beach (later called Anzac Cove) under Turkish fire; stalemate in the trenches for 8 months.',
          'Evacuation December 1915: about 26,000 Australian casualties at Gallipoli including some 8,000 deaths; the "baptism of fire" story became the heart of Anzac memory.'
        ],
        keyTerms: [
          { term: 'MAIN causes', definition: 'Militarism, Alliances, Imperialism, Nationalism — the long-term causes of WWI' },
          { term: 'Franz Ferdinand', definition: 'Archduke of Austria-Hungary whose assassination on 28 June 1914 triggered WWI' },
          { term: 'ANZAC', definition: 'Australian and New Zealand Army Corps — landed at Gallipoli 25 April 1915' },
          { term: 'Anzac Cove', definition: 'the narrow Gallipoli beach where the ANZACs landed, under cliffs and Turkish fire' },
          { term: 'stalemate', definition: 'neither side can advance — trench deadlock at Gallipoli and on the Western Front' },
          { term: 'propaganda', definition: 'one-sided material designed to persuade — e.g. recruiting posters' }
        ],
        workedExamples: [
          {
            prompt: 'Why did so many young Australian men enlist in 1914–15? Use TWO reasons with evidence.',
            steps: [
              'Reason 1 — loyalty and Empire: Australia saw itself as British; war was framed as duty ("Fight for the Empire").',
              'Reason 2 — adventure and propaganda: posters promised travel, pay and glory; unemployment was high in 1914; mates joined together.',
              'Evidence: recruiting posters (smiling soldiers, "Join your mates"), enlistment totals (over 20,000 in the first months), diary lines about adventure.',
              'Counter-perspective: some men were rejected (fitness rules), some opposed war, Indigenous men were refused early on.',
              'Link: enlistment came from a mix of duty, pressure and adventure — with propaganda shaping all three.'
            ],
            answer: 'Men enlisted from loyalty to the British Empire (duty) plus the pull of adventure and mateship, magnified by recruiting propaganda — with economic motives in the 1914 slump; those refused (including early Indigenous volunteers) show the enlistment story was selective.'
          }
        ],
        examFocus: [
          'MAIN causes: define each term AND link it to the war\u2019s outbreak (cause AND effect language).',
          'Source analysis on recruiting posters: purpose (persuade) vs reality (diaries, casualty lists).',
          '"Why did the Gallipoli campaign fail?" — narrow beach, cliffs, poor planning, strong Turkish defence under Atatürk, no breakthrough, disease and supply problems.'
        ]
      },
      {
        id: 'wwi-western-homefront',
        title: 'Western Front and the home front 1916–18',
        outcomes: ['HT5-1', 'HT5-3', 'HT5-4', 'HT5-5'],
        bigIdea: 'The Western Front in France and Belgium cost Australia more lives than Gallipoli — while at home Australia argued about conscription and remade daily life for war.',
        keyKnowledge: [
          'After Gallipoli, the AIF moved to the Western Front: industrial-scale artillery, mud, machine guns and trench systems from Belgium to Switzerland.',
          'Fromelles (19 July 1916): 5,533 Australian casualties in 24 hours — the worst day in Australian military history; Pozières (1916) and Third Ypres/Passchendaele (1917) added tens of thousands more.',
          'Hamel (4 July 1918): General John Monash\u2019s combined-arms plan (tanks, aircraft, artillery, infantry) took the town in 93 minutes with relatively few losses — a preview of the war-winning methods of August 1918.',
          'Total Australian toll: about 60,000 dead and 156,000 wounded from a population under 5 million; repatriation and pensions shaped Australia for decades.',
          'Home front: War Precautions Act 1914 censored newspapers and jailed opponents; voluntary enlistment fell as casualty lists grew.',
          'Conscription crisis: PM Billy Hughes put conscription to referendums in October 1916 and December 1917 — BOTH defeated ("No"), splitting Labor and the country; women ran Red Cross branches, knitted supplies, took on paid work, and were urged to shame "shirkers" with white feathers.'
        ],
        keyTerms: [
          { term: 'Western Front', definition: 'the main trench battlefield line in France and Flanders, 1914–18' },
          { term: 'Fromelles', definition: '19 July 1916 attack with 5,533 Australian casualties in 24 hours — Australia\u2019s worst day' },
          { term: 'John Monash', definition: 'Australian commander who masterminded the combined-arms victory at Hamel, 1918' },
          { term: 'conscription', definition: 'compulsory military service — rejected by Australian voters in 1916 and 1917' },
          { term: 'War Precautions Act', definition: '1914 law giving the government censorship and detention powers' },
          { term: 'white feather', definition: 'symbol handed to non-enlisting men to shame them into joining up' }
        ],
        workedExamples: [
          {
            prompt: 'Why did Australians vote NO in both conscription referendums (1916 and 1917)?',
            steps: [
              'Group 1 — labour movement and unions: feared workers could be forced to fight and wages controlled; archbishop Daniel Mannix called the war "an ordinary trade war".',
              'Group 2 — Irish Catholic Australians: anger at Britain after the 1916 Easter Rising in Dublin turned many against fighting for Empire.',
              'Group 3 — women and farmers: some saw conscription as taking fathers and food producers; quota fears for rural labour.',
              'Counter-pressure: Hughes claimed reinforcements were urgently needed; censored anti-conscription material.',
              'Judgement: the votes (both ~51–52% No) showed a divided society — duty vs freedom, Empire vs class and faith.'
            ],
            answer: 'The No vote came from unions fearing forced labour and wage controls, Irish Catholics alienated by Britain after the Easter Rising, and rural/family fears of losing men — narrow majorities (about 51–52%) rejected Hughes\u2019s claim that reinforcements required compulsion.'
          }
        ],
        examFocus: [
          'Gallipoli vs Western Front comparisons: casualties (Western Front far higher), conditions, weapons, significance to memory — quote numbers.',
          'Conscription questions need BOTH sides with groups (unions, Catholics, Hughes, women\u2019s organisations) and the results.',
          '"Impact of WWI on Australians at home": censorship, women\u2019s roles, fundraising, divided communities, casualties\u2019 effect on families.'
        ]
      },
      {
        id: 'commemoration-anzac',
        title: 'Commemoration and the Anzac legend',
        outcomes: ['HT5-2', 'HT5-3', 'HT5-4', 'HT5-5'],
        bigIdea: 'How a nation remembers is itself history: the Anzac legend built a national identity — and historians still argue about what it includes and leaves out.',
        keyKnowledge: [
          'Anzac Day (25 April) was first marked in 1916; rituals include the dawn service (stand-to at first light), the march, the Last Post, one minute\u2019s silence, and rosemary for remembrance.',
          'The Anzac legend (born from CEW Bean\u2019s war history and 1920s writings) celebrates mateship, courage, endurance, initiative and "a fair go" — the digger as ordinary hero.',
          'Simpson and his donkey: John Simpson Kirkpatrick carried wounded men to safety at Gallipoli for 24 days before being killed — a story retold as the legend\u2019s kindest face.',
          'What the legend long left out: women (nurses like Alice Ross-King who served under fire), Indigenous soldiers (over 1,000 served; returned to denied rights and excluded from soldier-settlement schemes), and opponents of the war.',
          'Contestation: some historians argue Anzac memory crowds out other Australian stories or glorifies war; the 2015 centenary (crowds at Anzac Cove) showed the legend\u2019s continuing power.',
          'Other memorials shape towns across Australia — cenotaphs, honour rolls, avenue trees — making WWI memory local and personal for a small population.'
        ],
        keyTerms: [
          { term: 'Anzac Day', definition: '25 April — anniversary of the 1915 landing, commemorated since 1916' },
          { term: 'Anzac legend', definition: 'the story of the digger\u2019s mateship, courage and endurance as a national identity' },
          { term: 'dawn service', definition: 'the Anzac Day ceremony at first light, echoing the dawn stand-to of soldiers' },
          { term: 'CEW Bean', definition: 'Australia\u2019s official war historian who shaped the Anzac legend' },
          { term: 'contested history', definition: 'historians and communities disagreeing over an event\u2019s meaning — like the Anzac legend\u2019s exclusions' },
          { term: 'commemoration vs celebration', definition: 'remembering and honouring (commemoration) — not glorifying victory' }
        ],
        workedExamples: [
          {
            prompt: 'Historians argue the Anzac legend is "contested". What does this mean? Use ONE group the legend has been criticised for leaving out.',
            steps: [
              'Define contested: different historians/publics give the same event different meanings.',
              'The criticism: the legend centres the white male infantry "digger" — narrowing who counts in the national story.',
              'Example — Indigenous soldiers: over 1,000 served (legalised from 1917), some like Douglas Grant became well known, yet returned to denied rights, stolen wages and exclusion from Anzac ceremonies for decades.',
              'Change over time: since the 1990s Indigenous and women\u2019s service are increasingly recognised (e.g. Coloured Digger marches), and the centenary debates examined the legend critically.',
              'Judgement: commemoration evolves — that argument itself is the contestation.'
            ],
            answer: 'A "contested" legend means historians disagree about its meaning and coverage: the digger story long omitted groups such as the 1,000+ Indigenous soldiers who fought for a nation that denied them rights — modern commemoration has begun widening who is remembered, showing the legend is still being argued over.'
          }
        ],
        examFocus: [
          'Know the commemoration rituals AND their origins (dawn service, Last Post, silence, rosemary).',
          'Contestation questions: state the criticism, evidence a left-out group (women, Indigenous soldiers, anti-conscriptionists), then judge whether commemoration has changed.',
          'Sources: war memorials and centenary speeches vs historians\u2019 critiques — compare perspectives, don\u2019t just describe.'
        ]
      }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
