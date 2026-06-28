<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/080ff2f2-c026-4243-9afd-05311a3815ad

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`











--------


Please review the specified chapter file(s) and add vocabulary support for my Italian level, which is A0-A1.

Goal:
I want vocabulary coverage for all meaningful Italian words and useful short phrases in the lesson text, except Italian articles and pronouns.

My level:
My Italian level is A0-A1, so be generous. If a word may be difficult for a beginner, add it.

Important vocabulary rule:
Consider ALL Italian words and short phrases, except:
- definite articles: `il`, `lo`, `la`, `l’`, `i`, `gli`, `le`
- indefinite articles: `un`, `uno`, `una`, `un’`
- partitive articles when used only as articles: `del`, `dello`, `della`, `dei`, `degli`, `delle`
- basic pronouns such as `io`, `tu`, `lui`, `lei`, `noi`, `voi`, `loro`, `mi`, `ti`, `si`, `ci`, `vi`, `lo`, `la`, `li`, `le`

Do include:
- nouns
- verbs
- adjectives
- adverbs
- prepositions and connectors if they help understanding
- driving-license technical words
- repeated common words that are useful for A0-A1
- short phrases that carry meaning

Examples of words/phrases to include:
- `nella`, `parte`, `più`, `bassa`, `può`, `accumularsi`
- `strada`, `veicolo`, `segnale`, `pericolo`
- `vietato`, `obbligo`, `consentito`
- `prima`, `dopo`, `quando`, `dove`, `senza`, `con`
- `di norma`, `in caso di`, `dare precedenza`, `a destra`, `a sinistra`

Tasks:
1. Read the lesson `italianText` carefully.
2. Extract all meaningful Italian words and short phrases suitable for A0-A1 vocabulary, excluding only articles and pronouns.
3. Reuse existing vocabulary IDs from `src/data/chapters.ts` when a suitable card already exists.
4. Add missing vocabulary cards to `src/data/chapters.ts` inside `initialVocabulary`.
   Each card must include:
   - `id`
   - `italian`
   - `farsi`
5. Keep the Farsi meaning simple, clear, and learner-friendly.
6. Add the correct `vocabularyIds` to each lesson where those words or phrases actually appear.
7. Avoid duplicate IDs inside the same lesson.
8. Do not create two IDs for the same Italian word unless the meaning is truly different.
9. After editing, verify:
   - every `vocabularyIds` reference exists in `initialVocabulary`
   - no duplicate IDs exist inside a lesson’s `vocabularyIds`
   - the chapter still has valid TypeScript structure
10. Do not run lint/build unless I explicitly ask.

Important:
Do not only add technical driving words. Add almost every meaningful word that an A0-A1 learner may not know, except articles and pronouns.

-----------------------------------





