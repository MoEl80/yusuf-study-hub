/* Year 9 English (9A English 2026, Amity College Illawarra) — Study Guide.
   Sources: https://curriculum.nsw.edu.au/learning-areas/english/english-k-10-2022/outcomes (EN5-… outcome statements, parsed 2026-08-28).
   Topic list is the Stage 5 core; refine against 9A Classroom material as it arrives via _inbox. */
(function (root) {
  root.YSH_DATA = root.YSH_DATA || {};
  root.YSH_DATA.english = root.YSH_DATA.english || {};
  root.YSH_DATA.english.guide = {
    subjectId: 'english',
    syllabus: 'NESA English K–10 Syllabus (2022), Stage 5',
    topics: [
      {
        id: 'persuasion',
        title: 'Persuasive texts and rhetoric',
        outcomes: ['EN5-ECA-01', 'EN5-URA-01'],
        bigIdea: 'Writers persuade by choosing language, evidence and structure deliberately for a specific audience and purpose.',
        keyKnowledge: [
          'Persuasion works through three classic appeals: ethos (credibility), logos (logic and evidence) and pathos (emotion).',
          'Rhetorical devices — rhetorical question, tricolon (rule of three), anaphora, hyperbole, inclusive language — are chosen for their effect on an audience, not decoration.',
          'Modality shows how certain a writer is: high modality ("must", "will", "undeniably") sounds forceful; low modality ("might", "could", "perhaps") sounds cautious.',
          'A persuasive paragraph follows claim → evidence → explanation → evaluation → link so every point is proved, not just stated.',
          'Skilled persuaders anticipate counterarguments and rebut them — this is called a counterclaim and rebuttal.'
        ],
        keyTerms: [
          { term: 'ethos', definition: 'persuading through the credibility, authority or character of the speaker' },
          { term: 'logos', definition: 'persuading through logic, facts, statistics and reasoning' },
          { term: 'pathos', definition: 'persuading through the emotions of the audience' },
          { term: 'anaphora', definition: 'repeating the same words or phrase at the beginning of successive clauses for emphasis' },
          { term: 'tricolon', definition: 'a list of three parallel items or clauses — "of the people, by the people, for the people"' },
          { term: 'modality', definition: 'the degree of certainty in a verb or adverb, from low (might, may) to high (must, will, certainly)' },
          { term: 'rebuttal', definition: 'a response that disproves or weakens an opposing argument' }
        ],
        workedExamples: [
          {
            prompt: 'Build a persuasive paragraph on the topic: "Social media does more harm than good for teenagers."',
            steps: [
              'T — Topic sentence (claim): "Social media quietly erodes teenage wellbeing and schools must respond."',
              'E — Evidence: "Teens now average almost five hours a day on social platforms, according to recent studies."',
              'E — Explanation: link the evidence to the harm — constant comparison with curated lives fuels anxiety and steals sleep.',
              'E — Evaluation (counter + rebut): "Some argue social media connects teens; however, connection that depends on likes is not genuine belonging."',
              'L — Link back to the thesis: "This is why digital-balance education belongs in every Year 9 classroom."'
            ],
            answer: 'A five-sentence paragraph that claims, proves with evidence, explains, rebuts an objection, and links back.'
          }
        ],
        examFocus: [
          'Identify a persuasive device in an unseen text and explain its EFFECT on the audience — naming the device alone earns only half the marks.',
          'Write a short persuasive piece under time pressure that uses at least three devices AND a counterargument with rebuttal.'
        ]
      },
      {
        id: 'narrative',
        title: 'Narrative and creative writing',
        outcomes: ['EN5-ECA-01', 'EN5-ECB-01'],
        bigIdea: 'A narrative controls what the reader knows and feels — through orientation, complication, rising tension and resolution, all carried by craft choices.',
        keyKnowledge: [
          'The narrative arc: orientation (who/where/when), complication (the problem), rising tension (obstacles), climax (turning point), resolution (new normal).',
          'Characterisation can be direct ("she was generous") or indirect — through speech, actions, appearance and what others say (STEAL).',
          'Setting is never just scenery: it creates mood (storm = threat) and can act almost like a character that pressures the protagonist.',
          'Point of view controls knowledge: first person is intimate but limited; third person omniscient sees everything; second person implicates the reader.',
          'Craft techniques that lift a story: sensory imagery, short sentences for tension, dialogue that reveals character, foreshadowing, motif.'
        ],
        keyTerms: [
          { term: 'orientation', definition: 'the opening of a narrative that establishes character, setting and situation' },
          { term: 'complication', definition: 'the problem or conflict that drives the narrative forward' },
          { term: 'characterisation', definition: 'the way a writer creates and develops a character, directly or indirectly' },
          { term: 'foreshadowing', definition: 'hints or clues about what will happen later in the narrative' },
          { term: 'motif', definition: 'an image, sound or idea that repeats through a text and carries meaning' },
          { term: 'juxtaposition', definition: 'placing two contrasting things side by side to highlight the difference' }
        ],
        workedExamples: [
          {
            prompt: 'Turn a flat sentence into a crafted narrative opening using show-don\'t-tell.',
            steps: [
              'Flat version: "Amir was nervous about the tryouts."',
              'Show the body: give a physical detail — "Amir\'s laces had come undone twice in the corridor."',
              'Show the mind: add an interior thought — "Everyone here had played rep since they were eight."',
              'Add setting pressure: "The gym smelled of polish and old victories."',
              'End on a hook: "Number 47 was called. That was him."'
            ],
            answer: 'Five sentences that prove nervousness through action, thought and setting instead of naming it — the reader feels it.'
          }
        ],
        examFocus: [
          'Compose a narrative opening that establishes character and tension in under 150 words — examiners reward crafted detail over event summary.',
          'Explain how a composer\'s choices (voice, structure, imagery) shape a reader\'s response — link every technique to an effect.'
        ]
      },
      {
        id: 'poetry',
        title: 'Poetry and figurative language',
        outcomes: ['EN5-URA-01', 'EN5-RVL-01'],
        bigIdea: 'A poem is an argument compressed into sound and image — every line break, rhythm and figure of speech is doing work.',
        keyKnowledge: [
          'Figurative language: simile (like/as), metaphor (is), personification (human traits to non-human), hyperbole (exaggeration), allusion (reference to another text).',
          'Sound devices: alliteration, assonance, onomatopoeia, rhyme (end and internal) and rhythm create music that reinforces meaning.',
          'Form matters: sonnet (14 lines, often an argument with a turn), free verse (no fixed rules, shape carries meaning), ballad (narrative, quatrains).',
          'Structure creates meaning: enjambment speeds a line across its end; caesura (a pause mid-line) can imitate hesitation or shock.',
          'To analyse a poem: read twice, identify the literal situation, then track imagery and sound to the theme — always quote the words that prove it.'
        ],
        keyTerms: [
          { term: 'metaphor', definition: 'a comparison stating one thing IS another — "hope is a bird"' },
          { term: 'simile', definition: 'a comparison using like or as — "brave as a lion"' },
          { term: 'personification', definition: 'giving human qualities to something non-human — "the wind whispered"' },
          { term: 'enjambment', definition: 'a line that runs over to the next without punctuation, creating momentum' },
          { term: 'caesura', definition: 'a deliberate pause or break in the middle of a line of poetry' },
          { term: 'assonance', definition: 'repeated vowel sounds in nearby words for musical effect' },
          { term: 'allusion', definition: 'a reference to another text, event or person the reader is expected to recognise' }
        ],
        workedExamples: [
          {
            prompt: 'Analyse one line of poetry in three moves: identify, explain, evaluate. Line: "The last bus sighs into the cold and empty street."',
            steps: [
              'Identify the device: personification — the bus "sighs".',
              'Explain the effect: the sigh sounds tired and sad, mirroring the loneliness of the "cold and empty street".',
              'Evaluate — connect to theme: the city itself seems worn out, suggesting the poem\'s theme of urban isolation.',
              'Write it as one exam sentence: "The personification of the bus as it \'sighs\' mirrors the desolation of the \'cold and empty street\', evoking the speaker\'s isolation."'
            ],
            answer: 'Device named → effect explained with quotes → linked to the poem\'s theme in one integrated sentence.'
          }
        ],
        examFocus: [
          'Unseen poetry: comment on BOTH an image (what you see) and a sound device (what you hear), and tie both to the theme.',
          'Explain how structure (stanzas, line breaks, the "turn") shapes meaning, not just language devices.'
        ]
      },
      {
        id: 'shakespeare',
        title: 'Shakespeare and drama',
        outcomes: ['EN5-URB-01', 'EN5-URC-01'],
        bigIdea: 'Shakespeare\'s plays survive because their conflicts — ambition, love, prejudice, power — still matter; the drama is built through language and stagecraft.',
        keyKnowledge: [
          'Dramatic structure: five acts — exposition, rising action, climax, falling action, resolution (tragedy ends in death; comedy in marriage or reconciliation).',
          'Soliloquy: a character speaks ALONE, revealing inner thoughts to the audience — the engine of dramatic irony and character depth.',
          'Dramatic irony: Duncan\'s line "This castle hath a pleasant seat" (Macbeth, Act 1) is ironic because the audience knows Macbeth and Lady Macbeth are plotting his murder there.',
          'Language: blank verse (unrhymed iambic pentameter) signals nobility; prose often signals lower status, madness or intimacy.',
          'Themes in Year 9 staples — Macbeth: ambition and its corruption; Romeo and Juliet: love versus hate and fate; The Merchant of Venice: justice versus mercy and prejudice.',
          'Performing vs reading: staging choices (who stands where, tone, pacing) are interpretations — different productions make different meanings.'
        ],
        keyTerms: [
          { term: 'soliloquy', definition: 'a speech delivered alone on stage, revealing the character\'s private thoughts' },
          { term: 'aside', definition: 'a remark made directly to the audience, unheard by other characters' },
          { term: 'dramatic irony', definition: 'when the audience knows something important that a character does not' },
          { term: 'iambic pentameter', definition: 'five pairs of unstressed-stressed syllables per line — Shakespeare\'s default verse rhythm' },
          { term: 'tragic flaw (hamartia)', definition: 'the weakness in a tragic hero that leads to their downfall, e.g. Macbeth\'s ambition' },
          { term: 'foil', definition: 'a character who contrasts with another to highlight particular qualities' }
        ],
        workedExamples: [
          {
            prompt: 'Explain how a soliloquy builds character and tension. Example: Macbeth\'s "Is this a dagger…" (Act 2, Scene 1).',
            steps: [
              'Situate: alone, at night, on the way to murder King Duncan.',
              'Identify the technique: hallucination imagery — the dagger is "a false creation" from his "heat-oppressed brain".',
              'Explain: the audience watches his mind split between ambition and guilt — we see the murder before it happens.',
              'Evaluate: the soliloquy makes us complicit witnesses; tension spikes because we know what he is about to do (dramatic irony in reverse).',
              'Exam sentence: "Through the hallucination of the dagger, Shakespeare dramatises Macbeth\'s divided mind, forcing the audience to witness ambition overriding conscience."'
            ],
            answer: 'Context → technique + quote → effect on audience → judgement, in one linked paragraph.'
          }
        ],
        examFocus: [
          'Explain how Shakespeare uses a SOLILOQUY or DRAMATIC IRONY to shape the audience\'s view of a character — quote two short phrases.',
          'Discuss how a THEME (ambition, love, justice) is developed through at least two dramatic techniques, including stagecraft or language.'
        ]
      },
      {
        id: 'media',
        title: 'Media and digital texts',
        outcomes: ['EN5-URB-01', 'EN5-URA-01'],
        bigIdea: 'Media texts are constructed to position audiences — images, headlines, edits and algorithms all make arguments.',
        keyKnowledge: [
          'All media texts are constructions: someone selected what to show, what to cut and how to frame it — nothing is "neutral".',
          'Visual techniques: camera angle (low angle = power), shot distance (close-up = intimacy), colour palette, framing and composition.',
          'News language: loaded words ("thug" vs "protester"), passive voice hiding agents ("mistakes were made"), headline framing.',
          'Representation: groups can be stereotyped, under-represented or misrepresented — ask who benefits from that portrayal.',
          'Digital texts add interactivity: algorithms personalise feeds, creating "filter bubbles" that shape what we believe is normal.'
        ],
        keyTerms: [
          { term: 'positioning', definition: 'the way a text steers an audience toward a particular view or feeling' },
          { term: 'loaded language', definition: 'words chosen to carry strong positive or negative connotations' },
          { term: 'framing', definition: 'the angle or context chosen for a story or image, which shapes its meaning' },
          { term: 'stereotype', definition: 'an oversimplified, fixed image of a group of people' },
          { term: 'connotation', definition: 'the emotional or cultural meaning attached to a word beyond its dictionary definition' },
          { term: 'filter bubble', definition: 'the personalised online environment where algorithms only show views you already agree with' }
        ],
        workedExamples: [
          {
            prompt: 'Compare two headlines about the same event: "Protesters clash with police" vs "Police confront angry mob at climate rally".',
            steps: [
              'Headline 1 uses neutral "protesters" and mutual "clash" — positions both sides as equally responsible.',
              'Headline 2 uses loaded "angry mob" and one-directional "confront" — positions protesters as the threat, while "climate rally" hints at the cause.',
              'Note the technique: choice of noun groups ("protesters" vs "mob") changes who the reader blames.',
              'Evaluate: same event, opposite positioning — proof that headlines are arguments, not facts.'
            ],
            answer: 'Compare word choice, identify the connotations, and conclude who each headline wants the reader to blame.'
          }
        ],
        examFocus: [
          'Analyse an unseen image or article: name the visual/language technique and explain WHO it positions the audience to think or feel.',
          'Discuss how a media text represents a group — and evaluate whether that representation is fair, using evidence.'
        ]
      },
      {
        id: 'textual-analysis',
        title: 'Textual analysis and essay writing',
        outcomes: ['EN5-URA-01', 'EN5-RVL-01'],
        bigIdea: 'An analytical essay is a structured argument about what a text means and HOW it makes meaning — thesis, evidence, analysis, repeat.',
        keyKnowledge: [
          'Essay skeleton: introduction (context + thesis + roadmap), body paragraphs (TEEC: topic, evidence, explanation, concluding link), conclusion (restate thesis in fresh words + wider significance).',
          'A thesis is an ARGUMENT, not a topic: "The cycle of violence drives the tragedy" (argument) vs "Violence is a theme in the play" (topic).',
          'Evidence must be quoted briefly and embedded: "the \'milk of human kindness\' line positions Lady Macbeth as...".',
          'Analysis answers SO WHAT? and HOW? — what does the technique make the audience understand or feel, and how does it prove your thesis.',
          'Use evaluative language ("powerfully", "subtly") and theme words (e.g. "corruption", "belonging") to lift analysis above summary.',
          'Link every paragraph back to the thesis with a connecting phrase — "This reinforces the idea that..."'
        ],
        keyTerms: [
          { term: 'thesis', definition: 'the central argument of an essay, stated in the introduction' },
          { term: 'TEEC', definition: 'Topic sentence, Evidence, Explanation, Concluding link — the anatomy of a body paragraph' },
          { term: 'embedded quotation', definition: 'a short quote woven grammatically into your own sentence' },
          { term: 'analysis', definition: 'explaining HOW techniques create meaning and WHY that matters to the thesis' },
          { term: 'summary', definition: 'retelling what happens — the enemy of marks in analytical writing' },
          { term: 'cohesion', definition: 'the way ideas connect across a text through linking words and repeated theme words' }
        ],
        workedExamples: [
          {
            prompt: 'Fix a weak body paragraph (summary problem). Weak: "In the novel the family loses everything in the flood. Then they move to the city and start again."',
            steps: [
              'Diagnosis: it retells the plot — no argument, no technique, no analysis.',
              'Add a topic sentence with a point: "The flood functions as a turning point that strips the family of security."',
              'Embed evidence: a short quote — the "brown, starving water" image.',
              'Analyse: the water is personified as an enemy, making nature the antagonist and exposing how fragile belonging is.',
              'Link: "Thus the composer uses the flood to argue that identity built on place can be washed away."'
            ],
            answer: 'Point → proof (quote) → analysis of technique and effect → link to thesis. Summary replaced by argument.'
          }
        ],
        examFocus: [
          'Write an essay paragraph under time pressure that quotes at least twice and never retells the plot.',
          'Turn a topic into a thesis statement, and structure three body paragraphs to prove it.'
        ]
      },
      {
        id: 'reading-skills',
        title: 'Reading comprehension and unseen texts',
        outcomes: ['EN5-RVL-01', 'EN5-URC-01'],
        bigIdea: 'Comprehension is a process you can practise: read with a purpose, monitor understanding, infer what is implied, and answer with evidence.',
        keyKnowledge: [
          'Read the questions BEFORE the passage for the second read — your brain will hunt for the answers.',
          'Inference = evidence + reasoning. The answer is suggested, not stated: "He checked his phone for the tenth time" implies anxiety.',
          'Skim for gist (what is this about?), scan for detail (find the exact word/number), read closely for tone and attitude.',
          'Tone is the author\'s attitude (critical, amused, nostalgic); mood is the feeling the READER gets. Name both with precise adjectives.',
          'For "in your own words" questions: find the answer, hide the passage, say it simply — then check you kept the meaning.',
          'Short-answer structure: answer the question in the first sentence, then prove it with a quote or specific detail.'
        ],
        keyTerms: [
          { term: 'inference', definition: 'a conclusion reached from evidence and reasoning rather than explicit statement' },
          { term: 'skim', definition: 'reading quickly for the general idea of a text' },
          { term: 'scan', definition: 'reading quickly to locate a specific fact, word or number' },
          { term: 'tone', definition: 'the writer\'s attitude toward the subject or audience' },
          { term: 'mood', definition: 'the atmosphere or feeling created for the reader' },
          { term: 'explicit', definition: 'stated directly and clearly in the text' },
          { term: 'implicit', definition: 'suggested or implied rather than stated openly' }
        ],
        workedExamples: [
          {
            prompt: 'Answer an inference question. Passage: "Maya slid her test face-down the moment Dad walked in. \'How was school?\' he asked. \'Fine,\' she said, already upstairs."',
            steps: [
              'Question: "What does this extract suggest about Maya\'s relationship with her father?"',
              'Collect evidence: face-down test, one-word answer, escape upstairs.',
              'Make the inference: she is hiding something and avoids honest conversation.',
              'Reason about the relationship: distant or strained — she protects herself rather than confides.',
              'Write it: "Maya\'s habit of hiding her test and retreating upstairs suggests a distant relationship in which she avoids her father\'s scrutiny rather than confiding in him."'
            ],
            answer: 'Answer first, evidence second, inference named — two sentences, full marks.'
          }
        ],
        examFocus: [
          'Unseen comprehension: answer IN THE FIRST WORDS of your response what the question asks, then quote the proof.',
          'Identify tone with a precise adjective and support it with one quoted phrase — never just say "the author is serious".'
        ]
      },
      {
        id: 'discursive',
        title: 'Discursive writing',
        outcomes: ['EN5-ECA-01', 'EN5-ECB-01', 'EN5-RVL-01'],
        bigIdea: 'Discursive texts explore an idea from a personal, thinking-out-loud angle — less rigid than persuasive, more crafted than a diary.',
        keyKnowledge: [
          'Discursive writing explores ideas and perspectives rather than arguing one side to win.',
          'It can blend anecdote, reflection, observation and evidence in a conversational, thoughtful voice.',
          'Structure is flexible: it can circle an idea, shift perspective, and end somewhere unexpected — but it is still deliberately crafted.',
          'Cohesion comes from recurring motifs, pronoun shifts and connectives, not formulaic signposts like firstly/secondly.',
          'Assessment 2 in 9A English (Term 2) was a discursive piece — expect the yearly exam to allow or require discursive craft.'
        ],
        keyTerms: [
          { term: 'discursive', definition: 'writing that explores ideas from multiple angles in a thoughtful, personal way without pushing one argument' },
          { term: 'anecdote', definition: 'a short personal story used to open or illustrate an idea' },
          { term: 'reflection', definition: 'the writer thinking on the page — weighing, questioning, changing their mind' },
          { term: 'hybrid text', definition: 'a piece that mixes text types, e.g. discursive with persuasive or reflective elements' },
          { term: 'voice', definition: 'the personality that comes through word choice, rhythm and attitude' },
          { term: 'motif', definition: 'an image or idea repeated across a text to bind it together' }
        ],
        workedExamples: [
          {
            prompt: 'Build an opening paragraph for a discursive piece on whether social media connects or isolates us.',
            steps: [
              'Open with a small anecdote — a specific moment ("On the bus, six people, six screens, silence.").',
              'Zoom out to the idea — what this small scene says about connection today.',
              'Acknowledge the other side honestly — maybe the screens ARE the connection.',
              'Signal exploration, not argument — end on a genuine question rather than a verdict.'
            ],
            answer: 'An opening that starts small, thinks big, admits both sides, and ends with a live question — that is discursive craft.'
          }
        ],
        examFocus: [
          'If a question offers a choice of text types, discursive is the strong pick when you have a personal angle on the idea.',
          'Markers reward deliberate structure and an authentic voice — not essay formulas bolted onto a story.'
        ]
      }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
