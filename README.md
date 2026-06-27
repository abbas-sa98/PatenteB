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





Please review the specified chapter file(s) and add vocabulary support for my Italian level, which is A0-A1.

Goal:
I want almost every Italian word or short phrase that may be difficult for an A0-A1 learner to become available as vocabulary. Do not only add technical driving words. Also include common but important words, connectors, verbs, prepositions/articles when they affect understanding, and repeated lesson words.

Tasks:
1. Read the lesson `italianText` carefully.
2. Find Italian words and short phrases that an A0-A1 learner may not know.
3. Add missing vocabulary cards to `src/data/chapters.ts` inside `initialVocabulary`.
   - Each card must have:
     - `id`
     - `italian`
     - `farsi`
   - Keep the Farsi meaning simple and learner-friendly.
4. Add the correct `vocabularyIds` to each lesson where those words or phrases actually appear.
5. Avoid duplicate IDs inside the same lesson.
6. Reuse existing vocabulary IDs if a suitable card already exists.
7. Do not create two IDs for the same Italian word unless the meaning is truly different.
8. Keep useful short phrases too, for example:
   - `di norma`
   - `in caso di`
   - `a destra`
   - `a sinistra`
   - `dare precedenza`
9. Include important beginner words such as:
   - `non`, `con`, `senza`, `prima`, `dopo`, `quando`, `dove`
   - `è`, `sono`, `può`, `devono`, `viene`
   - `parte`, `nella`, `del`, `della`, `sul`, `sulla`
   - and other common words if they are needed to understand the lesson.
10. After editing, verify:
   - every `vocabularyIds` reference exists in `initialVocabulary`
   - no duplicate IDs exist inside a lesson’s `vocabularyIds`
   - the chapter still has valid TypeScript structure
11. Do not run lint/build unless I explicitly ask.

Important:
My Italian level is A0-A1, so be generous with vocabulary. If a word seems obvious to an intermediate learner but may be hard for a beginner, add it.














-----------------------------------





