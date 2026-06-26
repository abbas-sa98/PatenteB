const fs = require('fs');
const path = require('path');

const chaptersDir = path.join(__dirname, 'src', 'data', 'chapters');

for (let i = 7; i <= 30; i++) {
  const content = `import { Chapter } from '../../types';\n\nexport const chapter${i}: Chapter = {\n  id: ${i},\n  title: 'Capitolo ${i}',\n  farsiTitle: 'فصل ${i}',\n  lessons: [],\n  questions: []\n};\n`;
  fs.writeFileSync(path.join(chaptersDir, `chapter${i}.ts`), content);
}

const existingChaptersFile = fs.readFileSync(path.join(__dirname, 'src', 'data', 'chapters.ts'), 'utf8');

// Use regex to replace the array content of initialChaptersMetadata
const newChaptersArr = [];
for (let i = 1; i <= 30; i++) {
  let title = `Capitolo ${i}`;
  let farsiTitle = `فصل ${i}`;
  if (i === 1) { title = 'Definizioni Stradali e di Traffico'; farsiTitle = 'تعاریف جاده‌ای و ترافیکی'; }
  if (i === 2) { title = 'I Segnali di Pericolo'; farsiTitle = 'تابلوهای خطر'; }
  if (i === 3) { title = 'Segnali di Precedenza'; farsiTitle = 'تابلوهای حق تقدم'; }
  if (i === 4) { title = 'Segnali di Divieto'; farsiTitle = 'تابلوهای ممنوعیت'; }
  if (i === 5 || i === 6) { title = ''; farsiTitle = ' '; }
  newChaptersArr.push(`  { id: ${i}, title: '${title}', farsiTitle: '${farsiTitle}' }`);
}
const replacement = `export const initialChaptersMetadata = [\n${newChaptersArr.join(',\n')}\n];`;

const updatedContent = existingChaptersFile.replace(/export const initialChaptersMetadata = \[([\s\S]*?)\];/, replacement);

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'chapters.ts'), updatedContent);
console.log('Chapters generated successfully.');
