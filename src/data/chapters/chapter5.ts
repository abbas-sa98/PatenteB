import { Chapter } from '../../types';

export const chapter5: Chapter = {
  id: 5,
  title: 'Segnali di Obbligo',
  farsiTitle: 'تابلوهای اجبار و الزام',
  lessons: [
    {
      id: 'topic_5_1',
      title: '5.1 Direzione obbligatoria: diritto',
      italianText: `I segnali di obbligo costituiscono una categoria dei segnali di prescrizione. Impongono un comportamento, come seguire una determinata direzione, fermarsi presso un posto di controllo, rispettare una velocità minima o circolare con catene; possono inoltre riservare una strada o una sua parte a pedoni, biciclette o quadrupedi. In genere sono circolari, blu e con simboli bianchi; fanno eccezione i segnali che impongono l'arresto.

Il segnale DIREZIONE OBBLIGATORIA DIRITTO indica l'unica direzione consentita e obbliga a proseguire diritto all'incrocio presso il quale è collocato.

Non consente la svolta a destra o a sinistra.

È un segnale di obbligo (prescrizione).

Non indica l'inizio del senso unico di circolazione né esclude che possano venire veicoli di fronte.`,
      farsiTranslation: `تابلوهای الزام یکی از دسته‌های تابلوهای دستوری هستند. آن‌ها رفتاری مشخص را اجباری می‌کنند؛ مانند حرکت در جهتی معین، توقف در محل کنترل، رعایت حداقل سرعت یا حرکت با زنجیر چرخ. همچنین ممکن است جاده یا بخشی از آن را به عابران، دوچرخه‌ها یا چهارپایان اختصاص دهند. این تابلوها معمولاً دایره‌ای، آبی و دارای نماد سفید هستند؛ تابلوهایی که توقف را اجباری می‌کنند استثنا هستند.

تابلوی «جهت اجباری مستقیم» تنها جهت مجاز را نشان می‌دهد و راننده را ملزم می‌کند در تقاطعی که تابلو نزدیک آن نصب شده فقط مستقیم حرکت کند. پیچیدن به چپ یا راست ممنوع است.

این تابلو به معنای شروع خیابان یک‌طرفه (Senso unico) نیست و آمدن خودروها از روبه‌رو را نفی نمی‌کند (جاده می‌تواند همچنان دوطرفه باشد). مسیر پیشنهادی (Direzione consigliata) نیست.`,
      imageUrl: '/images/5-1.jpg',
      vocabularyIds: [ 'direzione_obbligatoria', 'diritto', 'proseguire', 'incrocio', 'esclude', 'non', 'con', 'obbliga', 'possono', 'posto', 'una', 'un', 'che', 'del', 'dei', 'quale', 'come', 'inoltre', 'segnale', 'segnali', 'senso', 'unico', 'parte', 'direzione', 'circolare', 'minima', 'blu', 'genere', 'catene', 'e_verb'],
      questionIds: Array.from({ length: 21 }, (_, i) => `q_5_1_${i + 1}`)
    },
    {
      id: 'topic_5_2',
      title: '5.2 Direzione obbligatoria: a sinistra',
      italianText: `Indica l'obbligo di svoltare a sinistra all'incrocio successivo.

Non consente di proseguire diritto o svoltare a destra.

Non significa passare a sinistra di un ostacolo (quello è il passaggio obbligatorio).

Non significa preavviso di curva a sinistra.`,
      farsiTranslation: `جهت اجباری: گردش به چپ (Direzione obbligatoria: a sinistra).

راننده را ملزم می‌کند که در تقاطع بعدی فقط به سمت چپ بپیچد. ادامه مسیر به صورت مستقیم یا گردش به راست ممنوع است.

این تابلو را نباید با عبور از سمت چپ مانع (Passaggio obbligatorio) یا پیش‌آگهی پیچ خطرناک به چپ (Curva a sinistra) اشتباه گرفت.`,
      imageUrl: '/images/5-2.jpg',
      vocabularyIds: [ 'sinistra', 'svoltare', 'passaggio_obbligatorio', 'curva_a_sinistra', 'non', 'un', 'passaggio', 'passare', 'curva', 'e_verb'],
      questionIds: Array.from({ length: 24 }, (_, i) => `q_5_2_${i + 1}`)
    },
    {
      id: 'topic_5_3',
      title: '5.3 Direzione obbligatoria: a destra',
      italianText: `Indica l'obbligo di svoltare a destra in corrispondenza dell'incrocio.

Non consente di proseguire diritto o svoltare a sinistra.

Non indica un'area di parcheggio a destra né di passare a destra di un ostacolo.`,
      farsiTranslation: `جهت اجباری: گردش به راست (Direzione obbligatoria: a destra).

راننده در تقاطعی که تابلو نصب شده، ملزم به پیچیدن به سمت راست است. حرکت مستقیم یا به چپ ممنوع است.

این تابلو نشانه پارکینگ در سمت راست یا تابلوی عبور از سمت راست مانع نیست. همچنین به معنای شروع خیابان یک‌طرفه در حین پیچیدن نیست.`,
      imageUrl: '/images/5-3.jpg',
      vocabularyIds: [ 'destra', 'area_di_parcheggio', 'passare_a_destra', 'non', 'un', 'passare', 'parcheggio', 'corrispondenza'],
      questionIds: Array.from({ length: 25 }, (_, i) => `q_5_3_${i + 1}`)
    },
    {
      id: 'topic_5_4',
      title: '5.4 Preavviso di direzione obbligatoria: a destra',
      italianText: `Preannuncia un incrocio con obbligo di svoltare a destra (posto prima dell'incrocio).

Può essere integrato con un pannello che indica la distanza dal punto dell'obbligo.

Non obbliga a svoltare subito, ma preavvisa l'unica direzione consentita più avanti.

Non indica una curva pericolosa a destra o una confluenza.`,
      farsiTranslation: `پیش‌آگهی جهت اجباری به راست (Preavviso di direzione obbligatoria: a destra).

قبل از تقاطع نصب می‌شود و هشدار می‌دهد که جلوتر تنها مسیر مجاز، گردش به راست خواهد بود. ممکن است متمم فاصله داشته باشد.

این تابلو دستور به پیچیدنِ در همان لحظه (Subito) را نمی‌دهد، بلکه برای تقاطع بعدی است. نباید با پیچ خطرناک یا جاده فرعی اشتباه شود.`,
      imageUrl: '/images/5-4.jpg',
      vocabularyIds: [ 'preavviso', 'incrocio_con_obbligo', 'distanza', 'subito', 'confluenza', 'non', 'con', 'prima', 'obbliga', 'puo', 'posto', 'una', 'un', 'che', 'dal', 'direzione', 'curva', 'pericolosa', 'pannello', 'integrato', 'punto', 'preannuncia', 'più'],
      questionIds: Array.from({ length: 29 }, (_, i) => `q_5_4_${i + 1}`)
    },
    {
      id: 'topic_5_5',
      title: '5.5 Preavviso di percorso obbligatorio (per autocarri)',
      italianText: `Preannuncia una svolta obbligatoria nella direzione della freccia per autocarri > 3,5t.

Vieta agli autocarri di peso superiore a 3,5t di proseguire diritto.

Non è un percorso facoltativo o consigliato, è un OBBLIGO per i veicoli merci pesanti.`,
      farsiTranslation: `پیش‌آگهی مسیر اجباری برای کامیون‌های بالای ۳.۵ تن (Preavviso di percorso obbligatorio per autocarri).

کامیون‌های باربری با وزن بیش از ۳.۵ تن ملزم هستند در تقاطع بعدی در جهت فلش بپیچند و حرکت مستقیم برای آن‌ها ممنوع می‌شود.

این مسیر پیشنهادی (Consigliata) یا اختیاری نیست، بلکه برای این دسته از خودروها اجباری است. ربطی به پمپ بنزین یا پارکینگ کامیون‌ها ندارد.`,
      imageUrl: '/images/5-5.jpg',
      vocabularyIds: [ 'percorso_obbligatorio', 'autocarri', 'direzione_della_freccia', 'consigliato', 'non', 'vieta', 'una', 'un', 'della', 'agli', 'nella', 'percorso', 'direzione', 'merci', 'preannuncia', 'e_verb'],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_5_5_${i + 1}`)
    },
    {
      id: 'topic_5_6',
      title: '5.6 Preavviso di direzione obbligatoria: a sinistra',
      italianText: `Preannuncia l'obbligo di svoltare a sinistra al prossimo incrocio.

Precede un incrocio in cui non è consentito proseguire diritto o girare a destra.

Non indica un senso unico o un obbligo di cambiare corsia.`,
      farsiTranslation: `پیش‌آگهی جهت اجباری به چپ (Preavviso di direzione obbligatoria: a sinistra).

هشدار می‌دهد که در تقاطع بعدی راننده باید حتماً به چپ بپیچد و رفتن به مستقیم یا راست ممنوع خواهد بود.

این تابلو برای جاده‌های شیب‌دار، تعویض لاین (Cambiare corsia) یا جاده یک‌طرفه نیست.`,
      imageUrl: '/images/5-6.jpg',
      vocabularyIds: [ 'prossimo_incrocio', 'girare_a_destra', 'cambiare_corsia', 'non', 'consentito', 'un', 'senso', 'unico', 'preannuncia', 'e_verb'],
      questionIds: Array.from({ length: 26 }, (_, i) => `q_5_6_${i + 1}`)
    },
    {
      id: 'topic_5_7',
      title: '5.7 Preavviso di direzione obbligatoria: a destra e a sinistra',
      italianText: `Obbliga a svoltare a destra o a sinistra al prossimo incrocio (direzioni consentite).

Indica l'impossibilità di proseguire diritto all'incrocio.

Non significa passaggio consentito alla destra e alla sinistra di un ostacolo.`,
      farsiTranslation: `پیش‌آگهی جهت‌های مجاز: راست یا چپ (Preavviso di direzione obbligatoria: a destra e a sinistra).

در تقاطع بعدی راننده فقط می‌تواند به راست یا چپ بپیچد و ادامه مسیر به صورت مستقیم غیرممکن و ممنوع است. راننده حق انتخاب بین این دو جهت را دارد.

این تابلو برای عبور از دو طرف مانع یا ردیف شدن در دو صف (File parallele) نیست. تابلوی راهنما (Indicazione) نمی‌باشد.`,
      imageUrl: '/images/5-7.jpg',
      vocabularyIds: [ 'direzioni_consentite', 'impossibilita', 'ostacolo', 'file_parallele', 'non', 'obbliga', 'consentito', 'un', 'alla', 'passaggio'],
      questionIds: Array.from({ length: 23 }, (_, i) => `q_5_7_${i + 1}`)
    },
    {
      id: 'topic_5_8',
      title: '5.8 Preavviso di direzione obbligatoria: diritto e a destra',
      italianText: `Consente solo di proseguire diritto o svoltare a destra all'incrocio.

Non consente la svolta a sinistra (indica l'impossibilità di girare a sinistra).

Non obbliga a passare a destra di un cantiere stradale.`,
      farsiTranslation: `جهت‌های مجاز: مستقیم یا راست (Preavviso di direzione obbligatoria: diritto e a destra).

راننده فقط مجاز به ادامه مسیر مستقیم یا گردش به راست است. گردش به چپ در تقاطع بعدی کاملاً ممنوع است.

این تابلو الزام به پیچیدنِ صرف به راست یا مستقیمِ محض را نشان نمی‌دهد، بلکه حق انتخاب دارید. عبور از سمت راست کارگاه جاده‌ای نیست.`,
      imageUrl: '/images/5-8.jpg',
      vocabularyIds: [ 'diritto_e_destra', 'impossibilita_di_svoltare', 'cantiere_stradale', 'non', 'obbliga', 'un', 'stradale', 'passare', 'cantiere'],
      questionIds: Array.from({ length: 22 }, (_, i) => `q_5_8_${i + 1}`)
    },
    {
      id: 'topic_5_9',
      title: '5.9 Direzioni consentite: diritto e a sinistra',
      italianText: `Consente solo di proseguire diritto o svoltare a sinistra.

Non consente la svolta a destra (indica che non si deve svoltare a destra).

Non obbliga a passare a sinistra di un cantiere stradale né di sorpassare lo spartitraffico.`,
      farsiTranslation: `جهت‌های مجاز: مستقیم یا چپ (Direzioni consentite: diritto e a sinistra).

راننده در تقاطع فقط می‌تواند مستقیم برود یا به چپ بپیچد. گردش به راست کاملاً ممنوع است.

این تابلو به معنای افزایش خطوط عبوری (Corsie disponibili) یا عبور از کنار مانع/رفوژ وسط جاده نیست. حق تقدم را مشخص نمی‌کند.`,
      imageUrl: '/images/5-9.jpg',
      vocabularyIds: [ 'diritto_e_sinistra', 'non_svoltare', 'spartitraffico', 'corsie_disponibili', 'non', 'obbliga', 'un', 'che', 'stradale', 'passare', 'cantiere'],
      questionIds: Array.from({ length: 21 }, (_, i) => `q_5_9_${i + 1}`)
    },
    {
      id: 'topic_5_10',
      title: '5.10 Passaggio obbligatorio: a sinistra',
      italianText: `Obbliga i conducenti a passare a SINISTRA di un ostacolo (isola di traffico, salvagente, cantiere, spartitraffico).

Prescrive di non superare l'ostacolo a destra (lasciare l'ostacolo a destra).

Non obbliga a svoltare a sinistra, non indica direzione obbligatoria o incrocio.`,
      farsiTranslation: `عبور اجباری از سمت چپ مانع (Passaggio obbligatorio: a sinistra).

این تابلو در مواجهه با موانع وسط جاده (مانند سکوی عابر، کارگاه جاده‌ای، جزیره ترافیکی) نصب می‌شود و راننده را ملزم می‌کند از سمت چپ مانع عبور کند (یعنی مانع در سمت راست خودرو قرار می‌گیرد). عبور از راست ممنوع است.

این تابلوی گردش به چپ (Svoltare) در تقاطع نیست؛ جاده عوض نمی‌شود، بلکه فقط از کنار مانع رد می‌شوید. قبل از میدان (Rotatoria) نصب نمی‌شود.`,
      imageUrl: '/images/5-10.jpg',
      vocabularyIds: [ 'passaggio_obbligatorio', 'ostacolo', 'isola_di_traffico', 'salvagente', 'lasciare_a_destra', 'non', 'obbliga', 'un', 'passare', 'direzione', 'cantiere'],
      questionIds: Array.from({ length: 20 }, (_, i) => `q_5_10_${i + 1}`)
    },
    {
      id: 'topic_5_11',
      title: '5.11 Passaggio obbligatorio: a destra',
      italianText: `Obbliga i conducenti a passare a DESTRA di un ostacolo (cantiere, spartitraffico, salvagente).

Prescrive di non superare l'ostacolo a sinistra.

Non indica obbligo di svoltare a destra o direzione obbligatoria a destra.`,
      farsiTranslation: `عبور اجباری از سمت راست مانع (Passaggio obbligatorio: a destra).

راننده باید از سمت راست مانع یا رفوژ وسط جاده عبور کند و عبور از سمت چپ آن کاملاً ممنوع است.

این تابلوی پیچیدن به راست در تقاطع نیست. نشانه پیچ خطرناک یا جاده ناهموار در سمت راست نمی‌باشد.`,
      imageUrl: '/images/5-11.jpg',
      vocabularyIds: [ 'passare_a_destra', 'non_superare', 'spartitraffico', 'non', 'obbliga', 'un', 'passare', 'direzione', 'cantiere'],
      questionIds: Array.from({ length: 19 }, (_, i) => `q_5_11_${i + 1}`)
    },
    {
      id: 'topic_5_12',
      title: '5.12 Passaggi consentiti (a destra e a sinistra)',
      italianText: `Consente il passaggio sia a destra che a sinistra di un ostacolo (es. salvagente, isola di traffico, cantiere).

Indica al conducente gli unici passaggi consentiti (da ambedue i lati dell'ostacolo).

Non obbliga a svoltare a sinistra o a destra all'incrocio. Non è preceduto da ROTATORIA di norma.`,
      farsiTranslation: `عبور مجاز از هر دو طرف مانع (Passaggi consentiti a destra e a sinistra).

این تابلو روی موانع وسط جاده نصب می‌شود و به راننده می‌گوید که می‌تواند به انتخاب خود از سمت راست یا چپ مانع عبور کند. این دو جهت تنها مسیرهای مجاز عبور هستند.

این تابلوی گردش به چپ و راست در تقاطع نیست. عبور از این جاده را ممنوع نمی‌کند و معمولاً قبل از میدان نصب نمی‌شود.`,
      imageUrl: '/images/5-12.jpg',
      vocabularyIds: [ 'passaggi_consentiti', 'ambedue_i_lati', 'ostacolo', 'svoltare_all_incrocio', 'non', 'di_norma', 'obbliga', 'un', 'che', 'gli', 'sia', 'passaggio', 'cantiere', 'unici', 'e_verb'],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_5_12_${i + 1}`)
    },
    {
      id: 'topic_5_13',
      title: '5.13 Rotatoria',
      italianText: `Indica un incrocio regolato con circolazione rotatoria (obbligo di circolare secondo il verso delle frecce).

Posto prima dello sbocco su un'area a rotatoria.

Su strade extraurbane è preceduto dal segnale triangolare di pericolo.

Non prescrive un obbligo solo per le autovetture. Non è collocato al centro dell'incrocio, ma sul lato destro prima di esso.`,
      farsiTranslation: `میدان / جهت حرکت دورانی (Rotatoria).

راننده ملزم است در جهت پیکان‌ها (خلاف عقربه‌های ساعت) دور میدان حرکت کند. این تابلو قبل از ورود به میدان و در سمت راست نصب می‌شود. در خارج از شهر، همیشه پیش‌آگهی مثلثی خطر میدان را قبل از خود دارد.

این قانون شامل همه وسایل نقلیه (حتی موتورگازی) می‌شود و مختص سواری‌ها نیست. این تابلو در مرکز میدان روی ستون نصب نمی‌شود، بلکه قبل از ورودی میدان است. تابلوی بن‌بست نیست.`,
      imageUrl: '/images/5-13.jpg',
      vocabularyIds: [ 'rotatoria', 'verso_delle_frecce', 'sbocco', 'segnale_triangolare', 'colonnina_luminosa', 'non', 'con', 'prima', 'posto', 'un', 'delle', 'dal', 'sul', 'segnale', 'circolare', 'autovetture', 'destro', 'lato', 'e_verb'],
      questionIds: Array.from({ length: 19 }, (_, i) => `q_5_13_${i + 1}`)
    },
    {
      id: 'topic_5_14',
      title: '5.14 Limite minimo di velocità',
      italianText: `Prescrive un limite minimo di velocità al di sotto del quale è vietato circolare (obbligo di mantenere o superare la velocità indicata).

Vietato l'accesso ai veicoli che non sono in grado di raggiungere tale velocità.

Può avere applicazione limitata a una sola corsia con pannello integrativo.

Non prescrive di marciare alla velocità COSTANTE esatta. Non vieta di superare la velocità (entro i limiti generali della strada).`,
      farsiTranslation: `حداقل سرعت مجاز (Limite minimo di velocità).

حرکت با سرعتی کمتر از عدد درج‌شده (مثلاً ۳۰ کیلومتر بر ساعت) ممنوع است. خودروهایی که به هر دلیل قادر نیستند به این سرعت برسند، کلاً حق ورود به این مسیر را ندارند. راننده می‌تواند سریع‌تر براند (تا سقف سرعت عمومی جاده). ممکن است با تابلوی متمم فقط به یک لاین خاص محدود شود.

این تابلو به معنای حرکت با سرعت کاملاً ثابت و یکنواخت نیست. تابلوی پایان محدودیت حداکثر سرعت نیست. نشانه فاصله ایمنی ۳۰ متری هم نمی‌باشد.`,
      imageUrl: '/images/5-14.jpg',
      vocabularyIds: [ 'limite_minimo', 'al_di_sotto', 'vietato_circolare', 'velocita_costante', 'distanza_minima_sicurezza', 'non', 'con', 'vieta', 'puo', 'una', 'un', 'che', 'della', 'del', 'alla', 'quale', 'circolare', 'marciare', 'avere', 'limite', 'limiti', 'minimo', 'generali', 'pannello', 'e_verb'],
      questionIds: Array.from({ length: 25 }, (_, i) => `q_5_14_${i + 1}`)
    },
    {
      id: 'topic_5_15',
      title: '5.15 Fine limite minimo di velocità',
      italianText: `Indica la fine del limite minimo di velocità (non si ha più l'obbligo di circolare almeno alla velocità indicata).

Consente di circolare a velocità inferiore o superiore a quella indicata (sempre entro i limiti massimi della strada).

Non indica la fine del limite massimo. Non vieta di circolare alla velocità indicata.`,
      farsiTranslation: `پایان حداقل سرعت مجاز (Fine limite minimo di velocità).

از این نقطه به بعد دیگر اجباری به حفظ حداقل سرعت نیست و می‌توانید آرام‌تر برانید. همچنین رانندگی با سرعت بیشتر نیز (در حد مجاز جاده) آزاد است.

این تابلو پایان سقف سرعت (Limite massimo) نیست. همچنین ربطی به محدودیت وزن خودرو یا فاصله ایمنی بین ماشین‌ها ندارد. رانندگی با همان سرعت را ممنوع نمی‌کند.`,
      imageUrl: '/images/5-15.jpg',
      vocabularyIds: [ 'fine_limite_minimo', 'velocita_inferiore_superiore', 'limite_massimo', 'distanza_di_almeno', 'non', 'vieta', 'della', 'del', 'alla', 'circolare', 'limite', 'limiti', 'massimo', 'minimo', 'più'],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_5_15_${i + 1}`)
    },
    {
      id: 'topic_5_16',
      title: '5.16 Catene da neve obbligatorie',
      italianText: `Prescrive di circolare con catene da neve montate o pneumatici invernali sulle ruote motrici.

Vieta il transito ai veicoli sprovvisti di tali dispositivi.

Si trova su strade innevate o ghiacciate ove occorre procedere con prudenza.

Non obbliga a togliere le catene. Non basta solo averle a bordo (subito dopo il segnale l'obbligo è attivo).`,
      farsiTranslation: `استفاده از زنجیر چرخ یا لاستیک یخ‌شکن اجباری (Catene da neve obbligatorie).

بلافاصله پس از این تابلو، راننده باید زنجیر چرخ را روی چرخ‌های متحرک (Motrici) بسته باشد یا از لاستیک‌های زمستانی (Invernali) استفاده کند. ورود ماشین‌های فاقد این تجهیزات ممنوع است. این تابلو در مسیرهای برفی و یخ‌زده نصب می‌شود.

همراه داشتن زنجیر در صندق عقب به تنهایی کافی نیست (باید بسته شود یا لاستیک زمستانی باشد). این تابلو دستور به باز کردن زنجیرها نمی‌دهد. ربطی به آج لاستیک کمتر از ۳ میلی‌متر ندارد.`,
      imageUrl: '/images/5-16.jpg',
      vocabularyIds: [ 'catene_da_neve', 'pneumatici_invernali', 'ruote_motrici', 'sprovvisti', 'innevate_ghiacciate', 'non', 'con', 'dopo', 'obbliga', 'vieta', 'sulle', 'segnale', 'circolare', 'occorre', 'catene', 'e_verb'],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_5_16_${i + 1}`)
    },
    {
      id: 'topic_5_17',
      title: '5.17 Percorso pedonale',
      italianText: `Indica l'inizio di un itinerario, viale o percorso riservato ai pedoni.

È un segnale di obbligo che vieta il transito a tutti i veicoli.

Non consente il transito ai veicoli anche se con prudenza. Non è un attraversamento pedonale.`,
      farsiTranslation: `مسیر پیاده‌رو (Percorso pedonale).

شروع یک پیاده‌رو یا مسیر اختصاصی برای عابران پیاده را نشان می‌دهد و ورود هرگونه وسیله نقلیه به آن کاملاً ممنوع است. در تمام طول روز اعتبار دارد.

این تابلو خط‌کشی عابر پیاده (Attraversamento pedonale) در خیابان نیست، بلکه یک مسیر کاملاً مجزا و تفکیک‌شده است. رانندگی با احتیاط خودروها هم در آن مجاز نیست. ممنوعیت عبور پیاده‌ها نیست.`,
      imageUrl: '/images/5-17.jpg',
      vocabularyIds: [ 'percorso_pedonale', 'viale_pedonale', 'riservato', 'attraversamento_pedonale', 'non', 'con', 'tutti', 'vieta', 'un', 'che', 'segnale', 'attraversamento', 'percorso', 'pedonale', 'e_verb'],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_5_17_${i + 1}`)
    },
    {
      id: 'topic_5_18',
      title: '5.18 Fine percorso pedonale',
      italianText: `Indica la fine del percorso o viale riservato ai pedoni.

Indica che da lì in poi i pedoni non circolano più su un percorso protetto esclusivo.

Non vieta il transito ai pedoni (possono continuare a camminare insieme agli altri utenti della strada). Non è un attraversamento.`,
      farsiTranslation: `پایان مسیر پیاده‌رو (Fine percorso pedonale).

پایان خیابان یا مسیر اختصاصی عابران پیاده را اعلام می‌کند. بعد از این تابلو، عابران دیگر در مسیر محافظت‌شده اختصاصی نیستند و با بقیه کاربران جاده (ماشین‌ها و حیوانات) مشترک می‌شوند.

این تابلو عابران پیاده را از ادامه حرکت منع نمی‌کند. پیش‌آگهی خط‌کشی عابر پیاده یا ممنوعیت ورود عابران نیست.`,
      imageUrl: '/images/5-18.jpg',
      vocabularyIds: [ 'fine_percorso', 'non_riservato', 'utenti_della_strada', 'non', 'vieta', 'possono', 'un', 'che', 'della', 'del', 'agli', 'attraversamento', 'percorso', 'più', 'e_verb'],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_5_18_${i + 1}`)
    },
    {
      id: 'topic_5_19',
      title: '5.19 Pista ciclabile',
      italianText: `Indica l'inizio o il proseguimento di un percorso riservato esclusivamente alle biciclette (velocipedi).

Non consente il transito a pedoni, ciclomotori o autovetture.

Non indica un attraversamento ciclabile regolato da semaforo.`,
      farsiTranslation: `مسیر ویژه دوچرخه (Pista ciclabile).

شروع مسیر یا لاینی را نشان می‌دهد که منحصراً برای عبور دوچرخه‌سواران رزرو شده است. ورود عابران پیاده، موتورگازی‌ها و خودروها به آن ممنوع است.

این تابلو خط‌کشی محل عبور دوچرخه از عرض خیابان (Attraversamento ciclabile) نیست. عبور دوچرخه‌ها را ممنوع نمی‌کند، بلکه مسیر اختصاصی آن‌هاست. با موتورگازی مشترک نیست.`,
      imageUrl: '/images/5-19.jpg',
      vocabularyIds: [ 'pista_ciclabile', 'velocipedi', 'esclusivamente', 'attraversamento_ciclabile', 'non', 'un', 'alle', 'attraversamento', 'percorso', 'ciclomotori', 'autovetture', 'ciclabile'],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_5_19_${i + 1}`)
    },
    {
      id: 'topic_5_20',
      title: '5.20 Fine pista ciclabile',
      italianText: `Indica la fine della pista o percorso riservato alle biciclette.

Non vieta il transito alle biciclette (possono continuare a circolare sulla viabilità ordinaria).

Non indica un divieto di sosta per le biciclette o la fine di un percorso pedonale.`,
      farsiTranslation: `پایان مسیر ویژه دوچرخه (Fine pista ciclabile).

پایان لاین یا جاده اختصاصی دوچرخه‌ها را نشان می‌دهد. دوچرخه‌ها بعد از این تابلو می‌توانند در جاده معمولی در کنار بقیه ماشین‌ها به حرکت خود ادامه دهند.

این تابلو پارک ممنوع برای دوچرخه نیست. عبور دوچرخه‌ها و موتورگازی‌ها را ممنوع نمی‌کند و ربطی به مسیر پیاده‌رو ندارد.`,
      imageUrl: '/images/5-20.jpg',
      vocabularyIds: [ 'fine_pista', 'viabilita_ordinaria', 'divieto_di_sosta_bici', 'non', 'vieta', 'possono', 'un', 'della', 'alle', 'sulla', 'percorso', 'divieto', 'circolare', 'pedonale', 'pista'],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_5_20_${i + 1}`)
    },
    {
      id: 'topic_5_21',
      title: '5.21 Pista ciclabile contigua al marciapiede',
      italianText: `Indica l'inizio di un percorso ciclabile affiancato و موازى با یک percorso pedonale (marciapiede).

Vietata la circolazione ai veicoli a motore.

Non indica un percorso unico promiscuo (misto) per pedoni e bici (le corsie sono separate).`,
      farsiTranslation: `مسیر دوچرخه موازی و در کنار پیاده‌رو (Pista ciclabile contigua al marciapiede).

نشان‌دهنده شروع لاین اختصاصی دوچرخه است که در کنار و چسبیده به پیاده‌رو (Marciapiede) یا مسیر عابر پیاده قرار دارد. لاین‌ها تفکیک‌شده هستند. ورود وسایل نقلیه موتوری ممنوع است.

این تابلو یک مسیر مشترک و مخلوط (Promiscuo/Misto) برای پیاده و دوچرخه نیست، بلکه دو لاین جدا از هم اما چسبیده به هم هستند. نیازی به هدایت دوچرخه با دست (A mano) نیست.`,
      imageUrl: '/images/5-21.jpg',
      vocabularyIds: [ 'contigua', 'marciapiede', 'affiancata', 'percorso_promiscuo', 'a_mano', 'non', 'un', 'unico', 'percorso', 'motore', 'separate', 'pedonale', 'ciclabile'],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_5_21_${i + 1}`)
    },
    {
      id: 'topic_5_22',
      title: '5.22 Fine pista ciclabile contigua al marciapiede',
      italianText: `Indica la fine del percorso ciclabile affiancato al percorso pedonale.

Non vieta il transito a pedoni o ciclisti (possono continuare a circolare).

Non indica una pista riservata in alcuni giorni ai pedoni e in altri alle bici.`,
      farsiTranslation: `پایان مسیر دوچرخه موازی و در کنار پیاده‌رو (Fine pista ciclabile contigua al marciapiede).

پایان این دو لاین همجوار اختصاصی را اعلام می‌کند. عابران و دوچرخه‌ها بعد از تابلو منعی برای تردد ندارند.

این تابلو به معنای نوبتی بودن مسیر در روزهای مختلف هفته برای پیاده‌ها و دوچرخه‌ها نیست. عبور دوچرخه با دست را ممنوع نمی‌کند.`,
      imageUrl: '/images/5-22.jpg',
      vocabularyIds: [ 'fine_pista_contigua', 'vietato_transito_bici', 'non', 'vieta', 'possono', 'una', 'del', 'alle', 'percorso', 'circolare', 'pedonale', 'ciclabile', 'pista'],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_5_22_${i + 1}`)
    },
    {
      id: 'topic_5_23',
      title: '5.23 Percorso unico pedonale e ciclabile',
      italianText: `Indica l'inizio o il proseguimento di un viale misto riservato alla circolazione promiscua (insieme) di pedoni e biciclette.

Vietata la circolazione dei veicoli a motore.

Non indica una pista ciclabile a fianco del marciapiede (separata).`,
      farsiTranslation: `مسیر مشترک پیاده و دوچرخه (Percorso unico pedonale e ciclabile).

شروع مسیر یا محوطه‌ای را نشان می‌دهد که عابران پیاده و دوچرخه‌ها به صورت مشترک و مخلوط (Promiscua/Insieme) در آن حرکت می‌کنند و لاین‌ها از هم جدا نیستند. ورود وسایل موتوری ممنوع است.

این تابلو به معنای لاین‌های موازی جداگانه (Contigua) نیست، بلکه فضا کاملاً مشترک است. نیازی به حرکت دادن دوچرخه با دست نیست.`,
      imageUrl: '/images/5-23.jpg',
      vocabularyIds: [ 'percorso_unico', 'circolazione_promiscua', 'viale_misto', 'veicoli_a_motore', 'non', 'una', 'un', 'del', 'dei', 'alla', 'motore', 'ciclabile', 'pista'],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_5_23_${i + 1}`)
    },
    {
      id: 'topic_5_24',
      title: '5.24 Fine percorso pedonale e ciclabile',
      italianText: `Indica la fine del percorso unico misto per pedoni e biciclette.

Consente il transito a pedoni e velocipedi anche dopo il segnale (sulla viabilità ordinaria).

Non indica la fine della sola pista ciclabile o del solo percorso pedonale.`,
      farsiTranslation: `پایان مسیر مشترک پیاده و دوچرخه (Fine percorso pedonale e ciclabile).

پایان محوطه مشترک عابران و دوچرخه‌ها را اعلام می‌کند و از این نقطه به بعد هر دو گروه وارد خیابان معمولی می‌شوند.

این تابلو عبور دوچرخه‌ها با دست را ممنوع نمی‌کند و فقط مختص به پایان یکی از دو مسیر (تنها پیاده یا تنها دوچرخه) نیست، بلکه پایان مسیر مشترک است.`,
      imageUrl: '/images/5-24.jpg',
      vocabularyIds: [ 'fine_percorso_unico', 'velocipedi', 'transito_consentito', 'non', 'dopo', 'della', 'del', 'sulla', 'segnale', 'unico', 'percorso', 'pedonale', 'ciclabile', 'pista'],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_5_24_${i + 1}`)
    },
    {
      id: 'topic_5_25',
      title: '5.25 Percorso riservato agli animali da soma e da sella',
      italianText: `Indica un percorso riservato solo agli animali da soma o da sella (cavalli, ecc.).

Vieta il transito a tutti i veicoli (comprese le biciclette e veicoli a trazione animale).

Non indica la vicinanza di un maneggio o la presenza di animali vaganti (pericolo).`,
      farsiTranslation: `مسیر ویژه حیوانات بارکش و سواری (Percorso riservato agli animali da soma e da sella).

شروع مسیر اختصاصی برای حیواناتی مثل اسب را نشان می‌دهد. ورود هرگونه وسیله نقلیه (حتی دوچرخه و گاری‌های حیوانی) به آن ممنوع است.

این تابلو خطر عبور حیوانات سرگردان (Animali vaganti) یا نزدیکی باشگاه سوارکاری (Maneggio) را نشان نمی‌دهد، بلکه یک لاین دستوری و اختصاصی عبور است.`,
      imageUrl: '/images/5-25.jpg',
      vocabularyIds: [ 'animali_da_soma', 'animali_da_sella', 'veicoli_vietati', 'maneggio', 'animali_vaganti', 'non', 'tutti', 'vieta', 'un', 'agli', 'percorso', 'soma', 'sella'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_5_25_${i + 1}`)
    },
    {
      id: 'topic_5_26',
      title: '5.26 Fine percorso riservato agli animali da soma e da sella',
      italianText: `Indica la fine del percorso riservato agli animali da soma e da sella.

Non vieta il transito ai quadrupedi dopo il segnale.

Non indica la vicinanza di un ippodromo o la fine di un tratto vietato ai cavalli.`,
      farsiTranslation: `پایان مسیر ویژه حیوانات بارکش و سواری (Fine percorso riservato agli animali da soma e da sella).

پایان لاین اختصاصی این حیوانات را اعلام می‌کند و از این نقطه به بعد آن‌ها وارد معابر عمومی عادی می‌شوند.

این تابلو عبور چهارپایان را ممنوع نمی‌کند. ربطی به پیست اسب‌دوانی (Ippodromo) یا پایان منطقه ممنوعه اسب‌ها ندارد.`,
      imageUrl: '/images/5-26.jpg',
      vocabularyIds: [ 'fine_percorso_riservato', 'quadrupedi', 'ippodromo', 'non', 'dopo', 'vieta', 'un', 'del', 'agli', 'segnale', 'percorso', 'soma', 'sella'],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_5_26_${i + 1}`)
    },
    {
      id: 'topic_5_27',
      title: '5.27 ALT - Polizia',
      italianText: `Segnala un posto di blocco stradale istituito da organi di polizia al quale è OBBLIGATORIO fermarsi.

Situato a distanza opportuna, viene ripetuto all'altezza del punto di arresto.

Non obbliga solo a rallentare, l'arresto è tassativo anche se gli agenti non mostrano la paletta.

Non segnala un controllo doganale o una stazione autostradale.`,
      farsiTranslation: `ایست پلیس (ALT - Polizia).

نشان‌دهنده یک ایست بازرسی رسمی (Posto di blocco) توسط نیروهای پلیس است که در آن توقف کامل کاملاً اجباری است. ابتدا در فاصله مناسب نصب شده و سپس دقیقاً در محل ایست تکرار می‌شود.

این تابلو فقط برای کاهش سرعت نیست؛ توقف اجباری است حتی اگر مأمور تابلوی دست‌پایان (Paletta) را نشان ندهد. برای گمرک یا عوارضی اتوبان نیست.`,
      imageUrl: '/images/5-27.jpg',
      vocabularyIds: [ 'alt_polizia', 'posto_di_blocco', 'punto_di_arresto', 'paletta', 'controllo_doganale', 'non', 'obbliga', 'viene', 'posto', 'una', 'un', 'del', 'gli', 'quale', 'segnala', 'stradale', 'polizia', 'punto', 'blocco', 'doganale', 'e_verb'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_5_27_${i + 1}`)
    },
    {
      id: 'topic_5_28',
      title: '5.28 ALT - Stazione',
      italianText: `Obbliga a rallentare e fermarsi ai caselli autostradali controllati per le operazioni di pedaggio.

Segnala una stazione autostradale alla quale è obbligatorio fermarsi.

Non indica una stazione ferroviaria, né un posto di blocco della polizia o pontili d'imbarco.`,
      farsiTranslation: `ایست عوارضی اتوبان (ALT - Stazione).

راننده را ملزم می‌کند که سرعت را کم کرده و در گیت‌های عوارضی اتوبان (Caselli autostradali) برای پرداخت عوارض (Pedaggio) کاملاً توقف کند.

کلمه Stazione به معنای ایستگاه قطار (Ferroviaria) نیست! همچنین برای ایست بازرسی پلیس یا بارگیری خودرو روی قطار/کشتی نمی‌باشد.`,
      imageUrl: '/images/5-28.jpg',
      vocabularyIds: [ 'alt_stazione', 'caselli_autostradali', 'pedaggio', 'stazione_ferroviaria', 'pontili_d_imbarco', 'non', 'obbliga', 'posto', 'una', 'un', 'della', 'alla', 'quale', 'segnala', 'polizia', 'blocco', 'e_verb'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_5_28_${i + 1}`)
    },
    {
      id: 'topic_5_29',
      title: '5.29 ALT - Dogana',
      italianText: `Segnala un varco doganale alla frontiera con un paese extracomunitario (fuori dall'UE).

Obbliga ad arrestarsi alla frontiera per il controllo doganale (anche senza merci da dichiarare).

Non si trova alla frontiera con paesi dell'Unione Europea (dove il transito è libero). Non indica un commissariato.`,
      farsiTranslation: `ایست گمرک (ALT - Dogana).

نشان‌دهنده یک گیت گمرکی در مرز کشورهای غیر عضو اتحادیه اروپا (Extracomunitario) است و توقف کامل برای بازرسی گمرکی اجباری است، حتی اگر کالایی برای اظهار کردن نداشته باشید.

این تابلو در مرزهای بین کشورهای داخل اتحادیه اروپا (نظیر مرز ایتالیا و فرانسه) وجود ندارد. نشانه اداره کل یا کلانتری پلیس نیست.`,
      imageUrl: '/images/5-29.jpg',
      vocabularyIds: [ 'alt_dogana', 'varco_doganale', 'frontiera', 'paese_extracomunitario', 'merci_da_dichiarare', 'non', 'con', 'dove', 'obbliga', 'un', 'alla', 'segnala', 'merci', 'fuori', 'paese', 'doganale', 'e_verb'],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_5_29_${i + 1}`)
    },
    {
      id: 'topic_5_30',
      title: '5.30 Confine di stato con paese dell\'Unione Europea',
      italianText: `Indica il confine di Stato con un Paese che fa parte dell'Unione Europea.

NON obbliga ad arrestarsi al confine di Stato per controlli doganali.

Non è posto dietro al veicolo per indicare la nazionalità.`,
      farsiTranslation: `مرز کشور عضو اتحادیه اروپا (Confine di stato con paese dell'Unione Europea).

مرز مشترک بین ایتالیا و یکی از کشورهای عضو اتحادیه اروپا را نشان می‌دهد. عبور از این مرز کاملاً آزاد است و نیازی به توقف برای بازرسی گمرکی نیست.

این تابلو هیچ توقف اجباری ایجاد نمی‌کند. پلاک یا برچسب پشت خودرو برای مشخص کردن ملیت راننده نیست. ایست بازرسی پلیس را اعلام نمی‌کند.`,
      imageUrl: '/images/5-30.jpg',
      vocabularyIds: [ 'confine_di_stato', 'unione_europea', 'non_obbliga_ad_arrestarsi', 'nazionalita', 'non', 'con', 'obbliga', 'posto', 'un', 'che', 'parte', 'stato', 'paese', 'e_verb'],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_5_30_${i + 1}`)
    },
    {
      id: 'topic_5_31',
      title: '5.31 Preavviso di confine di stato con paese dell\'Unione Europea',
      italianText: `Preavvisa la distanza (es. 1 km) dal confine con uno Stato membro dell'Unione Europea.

Posto sulle strade che portano al confine di Stato.

Non obbliga ad arrestarsi per controlli doganali alla frontiera.`,
      farsiTranslation: `پیش‌آگهی مرز کشور عضو اتحادیه اروپا (Preavviso di confine di stato).

فاصله باقی‌مانده (مثلاً ۱ کیلومتر) تا مرز یک کشور عضو اتحادیه اروپا را در جاده‌های منتهی به مرز اعلام می‌کند و توقفی در کار نیست.

این تابلو هشدار ایست بازرسی یا توقف در مرز ندارد. برچسب پشت ماشین برای نشان دادن مشخصات شهروندی اتحادیه اروپا نیست.`,
      imageUrl: '/images/5-31.jpg',
      vocabularyIds: [ 'preavviso_confine', 'distanza_dal_confine', 'controllo_doganale', 'non', 'con', 'obbliga', 'posto', 'che', 'alla', 'dal', 'sulle', 'stato'],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_5_31_${i + 1}`)
    }
  ],
  questions: [
    // 5.1 Direzione obbligatoria: diritto
    {
      id: 'q_5_1_1',
      italianText: 'Il segnale raffigurato indica l’obbligo di proseguire diritto',
      farsiTranslation: 'غلط: تکراری؛ رفتن مستقیم ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_1_2',
      italianText: 'Il segnale raffigurato non consente la svolta a sinistra',
      farsiTranslation: 'صحیح: با وجود این تابلو، گردش به چپ ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_1_3',
      italianText: 'Il segnale raffigurato, posto prima di un incrocio, obbliga a proseguire diritto',
      farsiTranslation: 'صحیح: نصب این تابلو قبل از تقاطع به معنای اجبار به عبور مستقیم از آن است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_1_4',
      italianText: 'Il segnale raffigurato, in corrispondenza di un incrocio, non consente la svolta a destra o a sinistra',
      farsiTranslation: 'صحیح: هرگونه گردشی (چه راست چه چپ) در تقاطع مجاز نیست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_1_5',
      italianText: 'Il segnale raffigurato indica l’unica direzione consentita',
      farsiTranslation: 'صحیح: تنها راه قانونی پیش روی شماست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_1_6',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: جزو تابلوهای دستوری (الزام‌آور) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_1_7',
      italianText: 'Il segnale raffigurato è un segnale di direzione obbligatoria',
      farsiTranslation: 'صحیح: نشان می‌دهد که جهت حرکت کاملاً مشخص و اجباری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_1_8',
      italianText: 'Il segnale raffigurato è un segnale di obbligo',
      farsiTranslation: 'صحیح: استفاده از این مسیر برای عابران الزامی است و خودروها هم الزام دارند وارد نشوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_1_9',
      italianText: 'Il segnale raffigurato non consente la svolta a destra',
      farsiTranslation: 'صحیح: چون فلشی به سمت راست نیست، این حرکت ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_1_10',
      italianText: 'Il segnale raffigurato consente di svoltare a destra o a sinistra',
      farsiTranslation: 'غلط: گردش به هیچ سمتی مجاز نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_11',
      italianText: 'Il segnale raffigurato consente di svoltare all’incrocio',
      farsiTranslation: 'غلط: پیچیدن در تقاطع ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_12',
      italianText: 'Il segnale raffigurato indica l’inizio del senso unico di circolazione',
      farsiTranslation: 'غلط: این تابلو تنها مسیر عبور را در تقاطع تعیین می‌کند و به معنای شروع یک‌طرفه بودن کل خیابان نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_13',
      italianText: 'Il segnale raffigurato indica la fine del doppio senso di circolazione',
      farsiTranslation: 'غلط: پایان مسیر دوطرفه با این تابلو نشان داده نمی‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_14',
      italianText: 'Il segnale raffigurato impone la marcia in unica fila',
      farsiTranslation: 'غلط: این تابلو ربطی به حرکت در یک خط واحد (پشت سر هم) ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_15',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_16',
      italianText: 'Il segnale raffigurato è un segnale di divieto',
      farsiTranslation: 'غلط: تابلوی دایره‌ای با رنگ آبی، علامت اجبار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_17',
      italianText: 'Il segnale raffigurato è un segnale di corsia',
      farsiTranslation: 'غلط: تابلوهای مشخص‌کننده لاین‌ها شکل متفاوتی دارند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_18',
      italianText: 'Il segnale raffigurato preannuncia una direzione consigliata',
      farsiTranslation: 'غلط: مسیر پیشنهاد شده (Consigliata) تابلوی مربعی دارد، این تابلو یک الزام و اجبار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_19',
      italianText: 'Il segnale raffigurato obbliga a svoltare a destra o a sinistra',
      farsiTranslation: 'غلط: دقیقاً برعکس، اجبار به حرکت مستقیم است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_20',
      italianText: 'Il segnale raffigurato esclude la possibilità che provengano veicoli di fronte',
      farsiTranslation: 'غلط: این تابلو یک‌طرفه بودن جاده را تضمین نمی‌کند و ممکن است از روبه‌رو ماشین بیاید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_1_21',
      italianText: 'Il segnale raffigurato indica un senso unico frontale',
      farsiTranslation: 'غلط: خیابان می‌تواند دوطرفه باشد، فقط شما باید مستقیم بروید.',
      correctAnswer: 'Falso'
    },

    // 5.2 Direzione obbligatoria: a sinistra
    {
      id: 'q_5_2_1',
      italianText: 'Il segnale raffigurato indica l’obbligo di svoltare a sinistra',
      farsiTranslation: 'صحیح: نشان می‌دهد که راننده باید به سمت چپ بپیچد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_2_2',
      italianText: 'Il segnale raffigurato non consente di svoltare a destra',
      farsiTranslation: 'صحیح: پیچیدن به راست ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_2_3',
      italianText: 'Il segnale raffigurato, posto prima di un incrocio, obbliga a svoltare a sinistra',
      farsiTranslation: 'صحیح: در تقاطعِ پیش رو فقط باید به چپ بروید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_2_4',
      italianText: 'Il segnale raffigurato, in corrispondenza di un incrocio, non consente di proseguire diritto',
      farsiTranslation: 'صحیح: رفتن به مسیر مستقیم ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_2_5',
      italianText: 'Il segnale raffigurato indica l’unica direzione consentita',
      farsiTranslation: 'صحیح: تنها راه قانونی پیش روی شماست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_2_6',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: جزو تابلوهای دستوری (الزام‌آور) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_2_7',
      italianText: 'Il segnale raffigurato è un segnale di direzione obbligatoria',
      farsiTranslation: 'صحیح: نشان می‌دهد که جهت حرکت کاملاً مشخص و اجباری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_2_8',
      italianText: 'Il segnale raffigurato è un segnale di obbligo',
      farsiTranslation: 'صحیح: استفاده از این مسیر برای عابران الزامی است و خودروها هم الزام دارند وارد نشوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_2_9',
      italianText: 'Il segnale raffigurato consente di andare diritto all’incrocio',
      farsiTranslation: 'غلط: رفتن به مسیر مستقیم ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_10',
      italianText: 'Il segnale raffigurato consente di svoltare a destra all’incrocio',
      farsiTranslation: 'غلط: پیچیدن به راست ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_11',
      italianText: 'Il segnale raffigurato indica l’inizio del senso unico di circolazione dopo una svolta a sinistra',
      farsiTranslation: 'غلط: این تابلو نوع خیابان بعدی (یک‌طرفه یا دوطرفه) را مشخص نمی‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_12',
      italianText: 'Il segnale raffigurato indica la fine del doppio senso di circolazione dopo una svolta a destra',
      farsiTranslation: 'غلط: اصلاً گردش به راست ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_13',
      italianText: 'Il segnale raffigurato indica che è obbligatorio passare a sinistra di un ostacolo posto sulla carreggiata',
      farsiTranslation: 'غلط: این تابلوی تقاطع است، نه تابلوی عبور از کنار مانع (فلش آن زاویه‌دار است نه مایل).',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_14',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_15',
      italianText: 'Il segnale raffigurato è un segnale di divieto',
      farsiTranslation: 'غلط: تابلوی دایره‌ای با رنگ آبی، علامت اجبار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_16',
      italianText: 'Il segnale raffigurato indica che la strada che si incrocia è a senso unico verso sinistra',
      farsiTranslation: 'غلط: الزامی ندارد که خیابان متقاطع یک‌طرفه باشد، شاید دوطرفه باشد اما شما فقط باید به چپ بروید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_17',
      italianText: 'Il segnale raffigurato indica un senso unico parallelo',
      farsiTranslation: 'غلط: ربطی به جاده‌های موازی یک‌طرفه ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_18',
      italianText: 'Il segnale raffigurato indica che si può svoltare soltanto a sinistra',
      farsiTranslation: 'صحیح: تنها انتخاب شما چپ است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_2_19',
      italianText: 'Il segnale raffigurato indica che non è consentito proseguire diritto',
      farsiTranslation: 'صحیح: رفتن به جلو در این تقاطع ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_2_20',
      italianText: 'Il segnale raffigurato indica il divieto di svoltare a sinistra',
      farsiTranslation: 'غلط: کاملاً برعکس، این تابلو شما را مجبور می‌کند به چپ بپیچید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_21',
      italianText: 'Il segnale raffigurato indica che ci si può fermare sulla sinistra della strada',
      farsiTranslation: 'غلط: ربطی به توقف در سمت چپ خیابان ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_22',
      italianText: 'Il segnale raffigurato indica l’obbligo di proseguire diritto',
      farsiTranslation: 'غلط: تکراری؛ رفتن مستقیم ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_23',
      italianText: 'Il segnale raffigurato significa che bisogna aggirare l’ostacolo a sinistra',
      farsiTranslation: 'غلط: عبور از کنار مانع تابلوی دیگری (فلش کج) دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2_24',
      italianText: 'Il segnale raffigurato significa preavviso di curva a sinistra',
      farsiTranslation: 'غلط: پیش‌آگهی پیچ تابلوی مثلثی با حاشیه قرمز است.',
      correctAnswer: 'Falso'
    },

    // 5.3 Direzione obbligatoria: a destra
    {
      id: 'q_5_3_1',
      italianText: 'Il segnale raffigurato indica l’obbligo di svoltare a destra',
      farsiTranslation: 'صحیح: راننده ملزم است که در تقاطع به سمت راست گردش کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_2',
      italianText: 'Il segnale raffigurato non consente di svoltare a sinistra',
      farsiTranslation: 'صحیح: گردش به سمت دیگر (چپ) مجاز نیست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_3',
      italianText: 'Il segnale raffigurato, in corrispondenza di un incrocio, obbliga a svoltare a destra',
      farsiTranslation: 'صحیح: در محل تقاطع، تنها راه مجاز گردش به راست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_4',
      italianText: 'Il segnale raffigurato, posto prima di un incrocio, non consente di proseguire diritto',
      farsiTranslation: 'صحیح: حرکت مستقیم در تقاطع ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_5',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: جزو تابلوهای دستوری (الزام‌آور) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_6',
      italianText: 'Il segnale raffigurato è un segnale di obbligo',
      farsiTranslation: 'صحیح: استفاده از این مسیر برای عابران الزامی است و خودروها هم الزام دارند وارد نشوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_7',
      italianText: 'Il segnale raffigurato è un segnale di direzione obbligatoria',
      farsiTranslation: 'صحیح: نشان می‌دهد که جهت حرکت کاملاً مشخص و اجباری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_8',
      italianText: 'Il segnale raffigurato indica l’unica direzione consentita',
      farsiTranslation: 'صحیح: تنها راه قانونی پیش روی شماست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_9',
      italianText: 'Il segnale raffigurato indica che è pericoloso svoltare a destra',
      farsiTranslation: 'غلط: این تابلو هشدار خطر نیست، بلکه دستور به انجام این کار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_10',
      italianText: 'Il segnale raffigurato prescrive di proseguire diritto',
      farsiTranslation: 'غلط: شما ملزم به گردش به راست هستید نه حرکت مستقیم.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_11',
      italianText: 'Il segnale raffigurato indica l’inizio del senso unico di circolazione nella svolta a destra',
      farsiTranslation: 'غلط: این تابلو تنها مسیر شما را تعیین می‌کند و وضعیت (یک‌طرفه یا دوطرفه بودن) جاده جدید را مشخص نمی‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_12',
      italianText: 'Il segnale raffigurato indica la fine del doppio senso di circolazione nella svolta a sinistra',
      farsiTranslation: 'غلط: اصولاً گردش به چپ ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_13',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_14',
      italianText: 'Il segnale raffigurato è un segnale di divieto',
      farsiTranslation: 'غلط: تابلوی دایره‌ای با رنگ آبی، علامت اجبار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_15',
      italianText: 'Il segnale raffigurato indica che la strada che si incrocia è a senso unico verso destra',
      farsiTranslation: 'غلط: خیابان بعدی الزامی به یک‌طرفه بودن ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_16',
      italianText: 'Il segnale raffigurato indica un senso unico parallelo',
      farsiTranslation: 'غلط: ربطی به جاده‌های موازی یک‌طرفه ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_17',
      italianText: 'Il segnale raffigurato indica direzione obbligatoria a destra',
      farsiTranslation: 'صحیح: این تابلو جهت اجباری به راست را نشان می‌دهد و راننده باید در تقاطع به راست بپیچد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_18',
      italianText: 'Il segnale raffigurato indica che si può svoltare soltanto a destra',
      farsiTranslation: 'صحیح: فقط گردش به راست مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_19',
      italianText: 'Il segnale raffigurato indica che non è consentito proseguire diritto',
      farsiTranslation: 'صحیح: رفتن به جلو در این تقاطع ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_20',
      italianText: 'Il segnale raffigurato indica che si deve svoltare a destra',
      farsiTranslation: 'صحیح: گردش به راست یک "باید" است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3_21',
      italianText: 'Il segnale raffigurato indica il divieto di svoltare a destra',
      farsiTranslation: 'غلط: کاملاً برعکس؛ گردش به راست اجباری است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_22',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio a destra',
      farsiTranslation: 'غلط: این تابلو مسیر حرکتی را مشخص می‌کند نه پارکینگ.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_23',
      italianText: 'Il segnale raffigurato indica l’obbligo di proseguire diritto',
      farsiTranslation: 'غلط: تکراری؛ رفتن مستقیم ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_24',
      italianText: 'Il segnale raffigurato indica di passare a destra dell’ostacolo',
      farsiTranslation: 'غلط: تابلوی عبور از کنار مانع، فلشی مایل (کج) دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_3_25',
      italianText: 'Il segnale raffigurato indica preavviso di curva a destra',
      farsiTranslation: 'غلط: تابلوهای پیش‌آگهی پیچ به شکل مثلث با نوار قرمز هستند.',
      correctAnswer: 'Falso'
    },

    // 5.4 Preavviso di direzione obbligatoria: a destra
    {
      id: 'q_5_4_1',
      italianText: 'Il segnale raffigurato è un preavviso di obbligo di svoltare a destra',
      farsiTranslation: 'صحیح: این تابلو هشداری است که در تقاطع پیش رو، گردش به راست اجباری خواهد بود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_2',
      italianText: 'Il segnale raffigurato preannuncia che non è consentito proseguire diritto o svoltare a sinistra',
      farsiTranslation: 'صحیح: چون گردش به راست اجباری است، مسیرهای دیگر ممنوع می‌شوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_3',
      italianText: 'Il segnale raffigurato precede un incrocio con obbligo di svoltare a destra',
      farsiTranslation: 'صحیح: این تابلو دقیقاً قبل از چنین تقاطعی قرار می‌گیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_4',
      italianText: 'Il segnale raffigurato preannuncia un incrocio ove non è consentito proseguire diritto',
      farsiTranslation: 'صحیح: در تقاطعِ پیش رو، حرکت مستقیم ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_5',
      italianText: 'Il segnale raffigurato preannuncia che non è consentito girare a sinistra',
      farsiTranslation: 'صحیح: از آنجایی که راست رفتن اجباری است، چپ رفتن ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_6',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: جزو تابلوهای دستوری (الزام‌آور) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_7',
      italianText: 'Il segnale raffigurato preannuncia l’unica direzione consentita',
      farsiTranslation: 'صحیح: تنها مسیر قانونی و مجاز برای شما، جهت فلش (چپ) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_8',
      italianText: 'Il segnale raffigurato è un segnale d’obbligo',
      farsiTranslation: 'صحیح: دایره آبی به معنای اجبار است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_9',
      italianText: 'Il segnale raffigurato può essere integrato con un pannello che indica la distanza dal punto in cui vige l’obbligo',
      farsiTranslation: 'صحیح: ممکن است تابلویی زیر آن باشد که مثلاً بنویسد "در 150 متری".',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_10',
      italianText: 'Il segnale raffigurato indica che non è consentito svoltare a destra al prossimo incrocio',
      farsiTranslation: 'غلط: کاملاً برعکس، گردش به راست تنها مسیر مجاز در تقاطع بعدی است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_11',
      italianText: 'Il segnale raffigurato obbliga ad andare diritto o svoltare a destra',
      farsiTranslation: 'غلط: رفتن به مسیر مستقیم مجاز نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_12',
      italianText: 'Il segnale raffigurato prescrive l’obbligo di passare a destra di un ostacolo',
      farsiTranslation: 'غلط: این تابلو مربوط به تقاطع است، نه عبور از کنار مانع.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_13',
      italianText: 'Il segnale raffigurato indica una curva pericolosa a destra',
      farsiTranslation: 'غلط: پیش‌آگهی تغییر مسیر اجباری در تقاطع است، نه هشدار پیچ جاده.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_14',
      italianText: 'Il segnale raffigurato presegnala una confluenza a destra',
      farsiTranslation: 'غلط: ربطی به اتصال جاده فرعی (Confluenza) ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_15',
      italianText: 'Il segnale raffigurato obbliga gli autocarri ed i veicoli lenti ad incolonnarsi sulla corsia di destra',
      farsiTranslation: 'غلط: این تابلو برای همه خودروها است و ربطی به لاین وسایل نقلیه کندرو ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_16',
      italianText: 'Il segnale raffigurato è un segnale di divieto',
      farsiTranslation: 'غلط: تابلوی دایره‌ای با رنگ آبی، علامت اجبار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_17',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_18',
      italianText: 'Il segnale raffigurato è un segnale di preavviso di pericolo',
      farsiTranslation: 'غلط: تابلوهای پیش‌آگهی خطر مثلثی هستند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_19',
      italianText: 'Il segnale raffigurato preannuncia una corsia di decelerazione',
      farsiTranslation: 'غلط: این تابلو لاین کاهش سرعت خروجی اتوبان را نشان نمی‌دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_20',
      italianText: 'Il segnale raffigurato precede il segnale di DIREZIONE OBBLIGATORIA A DESTRA',
      farsiTranslation: 'صحیح: ابتدا این تابلو (پیش‌آگهی) و سپس در خود تقاطع، تابلوی اصلی نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_21',
      italianText: 'Il segnale raffigurato preannuncia che non è consentito proseguire diritto',
      farsiTranslation: 'صحیح: رفتن به جلو در تقاطع بعدی امکان‌پذیر و قانونی نخواهد بود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_22',
      italianText: 'Il segnale raffigurato preannuncia che non è consentito svoltare a sinistra',
      farsiTranslation: 'صحیح: گردش به چپ مجاز نیست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_23',
      italianText: 'Il segnale raffigurato è posto prima di un incrocio',
      farsiTranslation: 'صحیح: ماهیت پیش‌آگهی این است که قبل از رسیدن به تقاطع نصب شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_24',
      italianText: 'Il segnale raffigurato è un segnale di obbligo',
      farsiTranslation: 'صحیح: استفاده از این مسیر برای عابران الزامی است و خودروها هم الزام دارند وارد نشوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_4_25',
      italianText: 'Il segnale raffigurato preannuncia un senso unico',
      farsiTranslation: 'غلط: نشانگر جاده یک‌طرفه نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_26',
      italianText: 'Il segnale raffigurato obbliga a svoltare subito a destra',
      farsiTranslation: 'غلط: کلمه "subito" (فوراً/در همین لحظه) اشتباه است؛ گردش برای تقاطع بعدی است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_27',
      italianText: 'Il segnale raffigurato non consente la svolta a destra',
      farsiTranslation: 'صحیح: چون فلشی به سمت راست نیست، این حرکت ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_28',
      italianText: 'Il segnale raffigurato indica che è obbligatorio passare a destra dell’ostacolo',
      farsiTranslation: 'غلط: تابلوی عبور از کنار مانع، پیکانِ کج دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4_29',
      italianText: 'Il segnale raffigurato preannuncia l’obbligo di svoltare a sinistra',
      farsiTranslation: 'غلط: پیش‌آگهی گردش به چپ نیست.',
      correctAnswer: 'Falso'
    },

    // 5.5 Preavviso di percorso obbligatorio (per autocarri)
    {
      id: 'q_5_5_1',
      italianText: 'Il segnale raffigurato preannuncia una svolta obbligatoria a destra per gli autocarri di massa superiore a 3,5 t',
      farsiTranslation: 'صحیح: این تابلو به کامیون‌های سنگین هشدار می‌دهد که در تقاطع بعدی باید به راست بپیچند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_5_2',
      italianText: 'Il segnale raffigurato vieta agli autocarri di massa superiore a 3,5 t di proseguire diritto',
      farsiTranslation: 'صحیح: چون پیچیدن به راست برایشان اجباری است، رفتن مستقیم برایشان ممنوع می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_5_3',
      italianText: 'Il segnale raffigurato preannuncia l’obbligo di svoltare a destra per i veicoli rappresentati nel segnale stesso',
      farsiTranslation: 'صحیح: فقط وسایل نقلیه‌ای که در تصویر تابلو هستند (کامیون‌های باری) مشمول این قانون می‌شوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_5_4',
      italianText: 'Il segnale raffigurato preannuncia un divieto di svolta a sinistra per gli autocarri di massa superiore a 3,5 t',
      farsiTranslation: 'صحیح: وقتی به راست رفتن اجباری باشد، گردش به چپ هم خودبه‌خود ممنوع می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_5_5',
      italianText: 'Il segnale raffigurato preannuncia una svolta obbligatoria per i veicoli rappresentati nel segnale stesso',
      farsiTranslation: 'صحیح: اجبار برای تغییر مسیر فقط مخصوص کامیون‌های نشان داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_5_6',
      italianText: 'Il segnale raffigurato preannuncia che gli autocarri oltre 3,5 t devono svoltare nella direzione della freccia',
      farsiTranslation: 'صحیح: کامیون‌های سنگین باید مسیر مشخص شده توسط پیکان را دنبال کنند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_5_7',
      italianText: 'Il segnale raffigurato preannuncia un posto di rifornimento per autocarri',
      farsiTranslation: 'غلط: این تابلو پمپ بنزین را نشان نمی‌دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_5_8',
      italianText: 'Il segnale raffigurato preannuncia che per gli autocarri è consigliato svoltare a destra',
      farsiTranslation: 'غلط: این مسیر اختیاری یا پیشنهادی (Consigliato) نیست، بلکه یک اجبار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_5_9',
      italianText: 'Il segnale raffigurato preannuncia il divieto di svoltare a destra per i veicoli rappresentati in figura',
      farsiTranslation: 'غلط: برعکس، پیچیدن به راست برای آن‌ها اجباری است، نه ممنوع.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_5_10',
      italianText: 'Il segnale raffigurato preannuncia un’area di parcheggio riservata agli autocarri',
      farsiTranslation: 'غلط: ربطی به پارکینگ کامیون‌ها ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_5_11',
      italianText: 'Il segnale raffigurato preannuncia un segnale di obbligo di svoltare a sinistra per tutti gli autocarri',
      farsiTranslation: 'غلط: اولاً فلش به راست است، ثانیاً قانون شامل کامیون‌های سبک (زیر ۳.۵ تن) نمی‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_5_12',
      italianText: 'Il segnale raffigurato preannuncia una curva pericolosa a destra per gli autocarri in transito',
      farsiTranslation: 'غلط: این پیش‌آگهی تغییر مسیر اجباری است، نه هشدار پیچ خطرناک.',
      correctAnswer: 'Falso'
    },

    // 5.6 Preavviso di direzione obbligatoria: a sinistra
    {
      id: 'q_5_6_1',
      italianText: 'Il segnale raffigurato è preavviso dell’obbligo di svoltare a sinistra',
      farsiTranslation: 'صحیح: این تابلو پیش‌آگهیِ اجبار به گردش به چپ در تقاطع بعدی است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_2',
      italianText: 'Il segnale raffigurato precede un incrocio in cui non è consentito proseguire diritto o girare a destra',
      farsiTranslation: 'صحیح: با اجباری شدن مسیر چپ، رفتن به مستقیم یا راست ممنوع می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_3',
      italianText: 'Il segnale raffigurato preannuncia l’obbligo di svoltare a sinistra al prossimo incrocio',
      farsiTranslation: 'صحیح: هشدار می‌دهد که در تقاطع بعدی ملزم به گردش به چپ هستید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_4',
      italianText: 'Il segnale raffigurato precede un incrocio ove è obbligatorio svoltare a sinistra',
      farsiTranslation: 'صحیح: این تابلو کمی قبل از تقاطعی با این مشخصات نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_5',
      italianText: 'Il segnale raffigurato è un segnale di preavviso di direzione obbligatoria',
      farsiTranslation: 'صحیح: این تابلو در دسته پیش‌آگهی‌های مسیرهای اجباری قرار دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_6',
      italianText: 'Il segnale raffigurato preannuncia l’unica direzione consentita',
      farsiTranslation: 'صحیح: تنها مسیر قانونی و مجاز برای شما، جهت فلش (چپ) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_7',
      italianText: 'Il segnale raffigurato può essere integrato con pannello che indica la distanza dal punto in cui vige l’obbligo',
      farsiTranslation: 'صحیح: ممکن است تابلوی کوچکی زیر آن باشد که بگوید مثلاً ۱۵۰ متر دیگر این قانون اجرا می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_8',
      italianText: 'Il segnale raffigurato indica che non è consentito svoltare a sinistra al prossimo incrocio',
      farsiTranslation: 'غلط: دقیقاً برعکس، گردش به چپ تنها مسیر مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_9',
      italianText: 'Il segnale raffigurato obbliga ad andare diritto o a svoltare a sinistra',
      farsiTranslation: 'غلط: رفتن به مسیر مستقیم ممنوع است، فقط گردش به چپ مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_10',
      italianText: 'Il segnale raffigurato preannuncia di andare diritto ma non di svoltare a destra',
      farsiTranslation: 'غلط: رفتن مستقیم هم مجاز نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_11',
      italianText: 'Il segnale raffigurato presegnala il senso unico di circolazione nella svolta a sinistra',
      farsiTranslation: 'غلط: این تابلو فقط جهت حرکت شما را تعیین می‌کند، نه وضعیت یک‌طرفه یا دوطرفه بودن جاده بعدی را.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_12',
      italianText: 'Il segnale raffigurato è un segnale di divieto',
      farsiTranslation: 'غلط: تابلوی دایره‌ای با رنگ آبی، علامت اجبار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_13',
      italianText: 'Il segnale raffigurato preannuncia una corsia di accelerazione',
      farsiTranslation: 'غلط: این تابلو هیچ ربطی به لاین شتاب‌گیری (برای ورود به اتوبان) ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_14',
      italianText: 'Il segnale raffigurato preannuncia una direzione consigliata',
      farsiTranslation: 'غلط: مسیر پیشنهاد شده (Consigliata) تابلوی مربعی دارد، این تابلو یک الزام و اجبار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_15',
      italianText: 'Il segnale raffigurato preannuncia che non è consentito proseguire diritto',
      farsiTranslation: 'صحیح: رفتن به جلو در تقاطع بعدی امکان‌پذیر و قانونی نخواهد بود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_16',
      italianText: 'Il segnale raffigurato preannuncia che non è consentito svoltare a destra',
      farsiTranslation: 'صحیح: چون گردش به چپ اجباری است، گردش به راست ممنوع می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_17',
      italianText: 'Il segnale raffigurato è posto prima di un incrocio',
      farsiTranslation: 'صحیح: ماهیت پیش‌آگهی این است که قبل از رسیدن به تقاطع نصب شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_18',
      italianText: 'Il segnale raffigurato precede un segnale di DIREZIONE OBBLIGATORIA A SINISTRA',
      farsiTranslation: 'صحیح: این پیش‌آگهی است و در خود تقاطع تابلوی اصلی "گردش اجباری به چپ" قرار دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_19',
      italianText: 'Il segnale raffigurato è un segnale d’obbligo',
      farsiTranslation: 'صحیح: دایره آبی به معنای اجبار است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_20',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: جزو تابلوهای دستوری (الزام‌آور) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6_21',
      italianText: 'Il segnale raffigurato preannuncia un senso unico',
      farsiTranslation: 'غلط: نشانگر جاده یک‌طرفه نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_22',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_23',
      italianText: 'Il segnale raffigurato indica che è obbligatorio passare a sinistra dell’ostacolo',
      farsiTranslation: 'غلط: عبور از کنار مانع با فلشی کج نشان داده می‌شود و این تابلوی تغییر مسیر در تقاطع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_24',
      italianText: 'Il segnale raffigurato è posto all’inizio di una strada in pendenza',
      farsiTranslation: 'غلط: ربطی به شیب و سربالایی جاده ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_25',
      italianText: 'Il segnale raffigurato indica l’obbligo di cambiare corsia',
      farsiTranslation: 'غلط: این تابلو الزام به پیچیدن در یک خیابان جدید است، نه فقط تغییر لاین در همان خیابان.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_6_26',
      italianText: 'Il segnale raffigurato presegnala una curva pericolosa a sinistra',
      farsiTranslation: 'غلط: پیش‌آگهی پیچ به شکل مثلث با حاشیه قرمز است.',
      correctAnswer: 'Falso'
    },

    // 5.7 Preavviso di direzione obbligatoria: a destra e a sinistra
    {
      id: 'q_5_7_1',
      italianText: 'Il segnale raffigurato indica le direzioni consentite a destra e a sinistra',
      farsiTranslation: 'صحیح: فلش‌ها نشان می‌دهند که در تقاطع بعدی تنها دو مسیر راست یا چپ مجاز هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_2',
      italianText: 'Il segnale raffigurato obbliga a svoltare a destra o a sinistra al prossimo incrocio',
      farsiTranslation: 'صحیح: در تقاطعِ پیش رو، باید حتماً یکی از این دو جهت را انتخاب کنید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_3',
      italianText: 'Il segnale raffigurato indica che non è consentito proseguire diritto all’incrocio',
      farsiTranslation: 'صحیح: در تقاطع، حرکت مستقیم ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_4',
      italianText: 'Il segnale raffigurato è un segnale di obbligo',
      farsiTranslation: 'صحیح: استفاده از این مسیر برای عابران الزامی است و خودروها هم الزام دارند وارد نشوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_5',
      italianText: 'Il segnale raffigurato indica l’impossibilità di proseguire diritto',
      farsiTranslation: 'صحیح: چون فلشی به سمت مستقیم وجود ندارد، یعنی این کار غیرممکن یا ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_6',
      italianText: 'Il segnale raffigurato indica le uniche direzioni consentite',
      farsiTranslation: 'صحیح: سایر جهت‌ها (در اینجا گردش به چپ) غیرمجاز هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_7',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: جزو تابلوهای دستوری (الزام‌آور) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_8',
      italianText: 'Il segnale raffigurato indica di disporsi su due file per proseguire diritto',
      farsiTranslation: 'غلط: رفتن به مسیر مستقیم ممنوع است، پس تشکیل دو صف برای رفتن به جلو اشتباه است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_9',
      italianText: 'Il segnale raffigurato indica che il sorpasso è consentito sia a destra che a sinistra',
      farsiTranslation: 'غلط: این تابلو اصلاً ارتباطی به قوانین سبقت ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_10',
      italianText: 'Il segnale raffigurato indica l’inizio del doppio senso di circolazione',
      farsiTranslation: 'غلط: این تابلو شروع مسیر دوطرفه را نشان نمی‌دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_11',
      italianText: 'Il segnale raffigurato indica la facoltà di passare a destra o a sinistra di un’isola spartitraffico',
      farsiTranslation: 'غلط: این تابلوی تغییر مسیر در تقاطع است، نه نشانگر عبور از کنار بلوار وسط جاده.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_12',
      italianText: 'Il segnale raffigurato indica passaggio consentito alla destra ed alla sinistra di un ostacolo',
      farsiTranslation: 'غلط: فلش‌های عبور از کنار مانع (مایل به پایین) با فلش‌های گردش در تقاطع (زاویه‌دار) متفاوت هستند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_13',
      italianText: 'Il segnale raffigurato è un segnale di divieto',
      farsiTranslation: 'غلط: تابلوی دایره‌ای با رنگ آبی، علامت اجبار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_14',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_15',
      italianText: 'Il segnale raffigurato indica l’inizio della circolazione per file parallele',
      farsiTranslation: 'غلط: ربطی به رانندگی در خطوط موازی ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_16',
      italianText: 'Il segnale raffigurato indica che è consentito svoltare a destra',
      farsiTranslation: 'صحیح: گردش به راست یکی از راه‌های مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_17',
      italianText: 'Il segnale raffigurato indica che è consentito svoltare a sinistra',
      farsiTranslation: 'صحیح: گردش به چپ نیز یکی از راه‌های مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_18',
      italianText: 'Il segnale raffigurato indica che non è consentito proseguire diritto',
      farsiTranslation: 'صحیح: رفتن به جلو در این تقاطع ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_19',
      italianText: 'Il segnale raffigurato indica che si può scegliere fra le due direzioni consentite',
      farsiTranslation: 'صحیح: راننده می‌تواند یکی از دو جهت مجاز، یعنی گردش به راست یا گردش به چپ را انتخاب کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_7_20',
      italianText: 'Il segnale raffigurato indica che nelle immediate vicinanze c’è una biforcazione pericolosa',
      farsiTranslation: 'غلط: این تابلو پیش‌آگهی مسیر اجباری است، نه هشدار دوراهی خطرناک (مثلثی).',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_21',
      italianText: 'Il segnale raffigurato indica che bisogna disporsi su due file per proseguire diritto',
      farsiTranslation: 'غلط: حرکت مستقیم اصلاً مجاز نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_22',
      italianText: 'Il segnale raffigurato indica che è consentito passare sia a destra che a sinistra della striscia continua',
      farsiTranslation: 'غلط: عبور از روی خط ممتد تحت هیچ شرایطی با این تابلو مجاز نمی‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_7_23',
      italianText: 'Il segnale raffigurato indica due sensi unici paralleli',
      farsiTranslation: 'غلط: این تابلو مسیرهای اجباری تقاطع را نشان می‌دهد، نه دو خیابان موازی یک‌طرفه را.',
      correctAnswer: 'Falso'
    },

    // 5.8 Preavviso di direzione obbligatoria: diritto e a destra
    {
      id: 'q_5_8_1',
      italianText: 'Il segnale raffigurato obbliga a proseguire diritto o svoltare a destra all’incrocio',
      farsiTranslation: 'صحیح: در این تقاطع، تنها راهنمایی‌های مجاز، مستقیم و راست هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_2',
      italianText: 'Il segnale raffigurato consente solo di proseguire diritto o svoltare a destra',
      farsiTranslation: 'صحیح: شما محدود به انتخاب بین این دو مسیر هستید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_3',
      italianText: 'Il segnale raffigurato non consente la svolta a sinistra all’incrocio',
      farsiTranslation: 'صحیح: فلشی برای گردش به چپ وجود ندارد، بنابراین این کار ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_4',
      italianText: 'Il segnale raffigurato indica l’impossibilità di svoltare a sinistra',
      farsiTranslation: 'صحیح: به دلیل نبودِ فلش به سمت چپ، این گردش ناممکن و غیرقانونی است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_5',
      italianText: 'Il segnale raffigurato indica le uniche direzioni consentite',
      farsiTranslation: 'صحیح: سایر جهت‌ها (در اینجا گردش به چپ) غیرمجاز هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_6',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: جزو تابلوهای دستوری (الزام‌آور) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_7',
      italianText: 'Il segnale raffigurato è un segnale di obbligo',
      farsiTranslation: 'صحیح: استفاده از این مسیر برای عابران الزامی است و خودروها هم الزام دارند وارد نشوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_8',
      italianText: 'Il segnale raffigurato consente solo di proseguire diritto',
      farsiTranslation: 'غلط: گردش به چپ نیز برای شما آزاد است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_8_9',
      italianText: 'Il segnale raffigurato indica che è consentito soltanto svoltare a destra',
      farsiTranslation: 'غلط: حرکت مستقیم هم گزینه مجاز دیگر است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_8_10',
      italianText: 'Il segnale raffigurato obbliga a passare a destra di un cantiere stradale',
      farsiTranslation: 'غلط: این تابلوی تغییر مسیر است، نه تابلوی عبور از کنار موانع یا کارگاه‌های جاده‌ای.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_8_11',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_8_12',
      italianText: 'Il segnale raffigurato è un segnale di pericolo',
      farsiTranslation: 'غلط: تابلوهای خطر مثلثی هستند، این یک تابلوی اجبار (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_8_13',
      italianText: 'Il segnale raffigurato indica il prossimo inizio di una corsia supplementare riservata ai veicoli lenti',
      farsiTranslation: 'غلط: هیچ ربطی به لاین کمکی ماشین‌های کندرو ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_8_14',
      italianText: 'Il segnale raffigurato indica che non è consentito svoltare a sinistra',
      farsiTranslation: 'صحیح: گردش به چپ در گزینه‌های این تابلو وجود ندارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_15',
      italianText: 'Il segnale raffigurato indica che è consentito svoltare a destra',
      farsiTranslation: 'صحیح: گردش به راست یکی از راه‌های مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_16',
      italianText: 'Il segnale raffigurato indica che è consentito proseguire diritto',
      farsiTranslation: 'صحیح: یکی از گزینه‌های روی تابلو، حرکت رو به جلو است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_17',
      italianText: 'Il segnale raffigurato indica che si può scegliere fra le due direzioni consentite',
      farsiTranslation: 'صحیح: راننده می‌تواند یکی از دو جهت مجاز، یعنی ادامهٔ مستقیم یا گردش به راست را انتخاب کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_8_18',
      italianText: 'Il segnale raffigurato indica che è obbligatorio svoltare unicamente a destra',
      farsiTranslation: 'غلط: شما مجبور نیستید "فقط" به راست بروید؛ حرکت مستقیم هم آزاد است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_8_19',
      italianText: 'Il segnale raffigurato indica che è obbligatorio proseguire solo diritto',
      farsiTranslation: 'غلط: اجباری به فقط مستقیم رفتن نیست؛ گردش به چپ هم آزاد است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_8_20',
      italianText: 'Il segnale raffigurato indica che è obbligatorio dare la precedenza a sinistra',
      farsiTranslation: 'غلط: این تابلو مسیر را مشخص می‌کند، نه حق تقدم را.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_8_21',
      italianText: 'Il segnale raffigurato indica che in ogni caso bisogna tenersi il più possibile sul margine destro della carreggiata',
      farsiTranslation: 'غلط: اگر می‌خواهید مستقیم بروید، نیازی به چسبیدن به لبه راست جاده (مانند زمان پیچیدن) نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_8_22',
      italianText: 'Il segnale raffigurato indica che è prossima una biforcazione pericolosa',
      farsiTranslation: 'غلط: این تابلوی خطر دوراهی نیست.',
      correctAnswer: 'Falso'
    },

    // 5.9 Direzioni consentite: diritto e a sinistra
    {
      id: 'q_5_9_1',
      italianText: 'Il segnale raffigurato consente solo di proseguire diritto o svoltare a sinistra',
      farsiTranslation: 'صحیح: فلش‌ها مشخص می‌کنند که فقط مسیر مستقیم یا گردش به چپ مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_9_2',
      italianText: 'Il segnale raffigurato non consente la svolta a destra',
      farsiTranslation: 'صحیح: چون فلشی به سمت راست نیست، این حرکت ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_9_3',
      italianText: 'Il segnale raffigurato obbliga a svoltare a sinistra o a proseguire diritto',
      farsiTranslation: 'صحیح: اجبار بر این است که یکی از این دو جهت انتخاب شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_9_4',
      italianText: 'Il segnale raffigurato indica che non si deve svoltare a destra',
      farsiTranslation: 'صحیح: گردش به راست در این تقاطع ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_9_5',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: جزو تابلوهای دستوری (الزام‌آور) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_9_6',
      italianText: 'Il segnale raffigurato si trova anche fuori dei centri abitati',
      farsiTranslation: 'صحیح: این تابلو هم در خیابان‌های شهری و هم در جاده‌های خارج شهر کاربرد دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_9_7',
      italianText: 'Il segnale raffigurato consente solo di proseguire diritto',
      farsiTranslation: 'غلط: گردش به چپ نیز برای شما آزاد است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_8',
      italianText: 'Il segnale raffigurato indica che è consentito soltanto svoltare a sinistra',
      farsiTranslation: 'غلط: شما مجاز هستید مسیر مستقیم را نیز انتخاب کنید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_9',
      italianText: 'Il segnale raffigurato obbliga a passare a sinistra di un cantiere stradale',
      farsiTranslation: 'غلط: این تابلوی انتخاب مسیر در تقاطع است، نه عبور از کنار مانع یا کارگاه.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_10',
      italianText: 'Il segnale raffigurato consente di sorpassare a sinistra lo spartitraffico',
      farsiTranslation: 'غلط: این تابلو برای بلوار وسط جاده (Spartitraffico) نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_11',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_12',
      italianText: 'Il segnale raffigurato è un segnale di pericolo',
      farsiTranslation: 'غلط: تابلوهای خطر مثلثی هستند، این یک تابلوی اجبار (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_13',
      italianText: 'Il segnale raffigurato indica che è consentito proseguire diritto',
      farsiTranslation: 'صحیح: یکی از گزینه‌های روی تابلو، حرکت رو به جلو است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_9_14',
      italianText: 'Il segnale raffigurato indica che è consentito svoltare a sinistra',
      farsiTranslation: 'صحیح: گردش به چپ نیز یکی از راه‌های مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_9_15',
      italianText: 'Il segnale raffigurato indica che si può scegliere fra le due direzioni consentite',
      farsiTranslation: 'صحیح: شما حق انتخاب بین مسیر مستقیم و گردش به چپ را دارید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_9_16',
      italianText: 'Il segnale raffigurato indica che si deve dare la precedenza a destra',
      farsiTranslation: 'غلط: این تابلو مسیر حرکت را مشخص می‌کند، نه حق تقدم را.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_17',
      italianText: 'Il segnale raffigurato indica che è obbligatorio proseguire solo diritto',
      farsiTranslation: 'غلط: اجباری به فقط مستقیم رفتن نیست؛ گردش به چپ هم آزاد است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_18',
      italianText: 'Il segnale raffigurato indica che è obbligatorio svoltare unicamente a sinistra',
      farsiTranslation: 'غلط: شما مجبور نیستید فقط به چپ بپیچید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_19',
      italianText: 'Il segnale raffigurato indica che si sta incrociando una biforcazione pericolosa',
      farsiTranslation: 'غلط: این تابلوی هشدار برای دوراهی خطرناک نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_20',
      italianText: 'Il segnale raffigurato indica che bisogna in ogni caso avvicinarsi il più possibile all’asse della carreggiata',
      farsiTranslation: 'غلط: نزدیک شدن به خط وسط جاده فقط در صورتی نیاز است که بخواهید به چپ گردش کنید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_9_21',
      italianText: 'Il segnale raffigurato indica che le corsie disponibili diventano due',
      farsiTranslation: 'غلط: این تابلو افزایش تعداد لاین‌های مسیر را نشان نمی‌دهد.',
      correctAnswer: 'Falso'
    },

    // 5.10 Passaggio obbligatorio: a sinistra
    {
      id: 'q_5_10_1',
      italianText: 'Il segnale raffigurato obbliga i conducenti a passare a sinistra di un ostacolo',
      farsiTranslation: 'صحیح: این تابلو راننده را ملزم می‌کند که از سمت چپ مانع عبور کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_10_2',
      italianText: 'Il segnale raffigurato obbliga i conducenti a passare a sinistra di un’isola di traffico',
      farsiTranslation: 'صحیح: جزیره ترافیکی (Isola di traffico) یک مانع است و باید از چپ آن گذشت.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_10_3',
      italianText: 'Il segnale raffigurato obbliga i conducenti a passare a sinistra di un salvagente',
      farsiTranslation: 'صحیح: سکوی امن عابر (Salvagente) نیز مانعی است که باید از سمت چپ آن رد شد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_10_4',
      italianText: 'Il segnale raffigurato obbliga i conducenti a passare a sinistra di un cantiere stradale',
      farsiTranslation: 'صحیح: اگر کارگاه جاده‌ای در مسیر باشد، این تابلو مسیر عبور از چپ آن را نشان می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_10_5',
      italianText: 'Il segnale raffigurato obbliga i conducenti a passare a sinistra di uno spartitraffico',
      farsiTranslation: 'صحیح: عبور از سمت چپ رفوژ یا جداکننده (Spartitraffico) الزامی است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_10_6',
      italianText: 'Il segnale raffigurato può essere preceduto dal segnale ROTATORIA',
      farsiTranslation: 'غلط: این تابلو برای عبور از کنار مانع است و پیش از میدان (Rotatoria) نصب نمی‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_10_7',
      italianText: 'Il segnale raffigurato indica una discesa pericolosa a sinistra',
      farsiTranslation: 'غلط: این تابلو نشان‌دهنده سراشیبی یا جهت شیب نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_10_8',
      italianText: 'Il segnale raffigurato obbliga i conducenti a svoltare a sinistra',
      farsiTranslation: 'غلط: این تابلو عبور از کنار مانع است، نه گردش به چپ (Svoltare) در یک تقاطع.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_10_9',
      italianText: 'Il segnale raffigurato preannuncia l’obbligo di svoltare a sinistra',
      farsiTranslation: 'غلط: پیش‌آگهی گردش به چپ نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_10_10',
      italianText: 'Il segnale raffigurato indica che è obbligatorio svoltare a destra',
      farsiTranslation: 'غلط: این تابلو هیچ ربطی به گردش به راست ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_10_11',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_10_12',
      italianText: 'Il segnale raffigurato indica passaggio obbligatorio a sinistra',
      farsiTranslation: 'صحیح: نام دقیق این تابلو "عبور اجباری از چپ" است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_10_13',
      italianText: 'Il segnale raffigurato prescrive di non superare l’ostacolo a destra',
      farsiTranslation: 'صحیح: وقتی عبور از چپ اجباری است، عبور از سمت راست مانع ممنوع خواهد بود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_10_14',
      italianText: 'Il segnale raffigurato indica obbligo di superare un cantiere stradale dalla parte sinistra',
      farsiTranslation: 'صحیح: عبور از سمت چپ محدوده تعمیرات جاده را اجباری می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_10_15',
      italianText: 'Il segnale raffigurato indica obbligo di lasciare l’ostacolo a destra',
      farsiTranslation: 'صحیح: عبور از چپ مانع، یعنی مانع در سمت راست شما باقی می‌ماند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_10_16',
      italianText: 'Il segnale raffigurato indica obbligo di svoltare a sinistra',
      farsiTranslation: 'غلط: تکراری در تست‌ها؛ این تابلو به معنای پیچیدن در تقاطع نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_10_17',
      italianText: 'Il segnale raffigurato indica che bisogna superare il salvagente lasciandolo alla propria sinistra',
      farsiTranslation: 'غلط: شما باید از چپ آن عبور کنید، بنابراین مانع در سمت "راست" خودروی شما قرار می‌گیرد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_10_18',
      italianText: 'Il segnale raffigurato indica direzione obbligatoria a sinistra',
      farsiTranslation: 'غلط: جهت اجباری (Direzione) تابلویی با فلش افقی یا زاویه‌دار است، نه مایل.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_10_19',
      italianText: 'Il segnale raffigurato indica che siamo in prossimità di un incrocio',
      farsiTranslation: 'غلط: این تابلو برای موانع است نه هشدار تقاطع.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_10_20',
      italianText: 'Il segnale raffigurato indica che non è possibile proseguire su quella strada',
      farsiTranslation: 'غلط: مسیر بسته نیست، فقط باید به درستی از کنار مانع رد شوید.',
      correctAnswer: 'Falso'
    },

    // 5.11 Passaggio obbligatorio: a destra
    {
      id: 'q_5_11_1',
      italianText: 'Il segnale raffigurato obbliga i conducenti a passare a destra di un ostacolo',
      farsiTranslation: 'صحیح: این تابلو رانندگان را ملزم به عبور از سمت راست مانع می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_11_2',
      italianText: 'Il segnale raffigurato, posto in presenza di un’isola di traffico, obbliga i conducenti a passare a destra',
      farsiTranslation: 'صحیح: باید از سمت راست جزیره ترافیکی عبور کرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_11_3',
      italianText: 'Il segnale raffigurato, posto in presenza di un salvagente, obbliga i conducenti a passare a destra',
      farsiTranslation: 'صحیح: عبور از سمت راست سکوی عابر پیاده را الزامی می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_11_4',
      italianText: 'Il segnale raffigurato, posto in presenza di un cantiere stradale, obbliga i conducenti a passare a destra',
      farsiTranslation: 'صحیح: مسیر انحرافی برای دور زدن کارگاه جاده‌ای از سمت راست را نشان می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_11_5',
      italianText: 'Il segnale raffigurato obbliga i conducenti a passare a destra di uno spartitraffico',
      farsiTranslation: 'صحیح: عبور از سمت راست جداکننده مسیر (رفوژ) اجباری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_11_6',
      italianText: 'Il segnale raffigurato presegnala una curva pericolosa a destra',
      farsiTranslation: 'غلط: پیش‌آگهی پیچ خطرناک، یک تابلوی مثلثی با حاشیه قرمز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_11_7',
      italianText: 'Il segnale raffigurato indica una strada deformata a destra',
      farsiTranslation: 'غلط: این تابلو خرابی جاده را نشان نمی‌دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_11_8',
      italianText: 'Il segnale raffigurato obbliga i conducenti a svoltare a destra',
      farsiTranslation: 'غلط: عبور از کنار مانع است، نه گردش به راست (Svoltare).',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_11_9',
      italianText: 'Il segnale raffigurato preannuncia l’obbligo di svoltare a destra',
      farsiTranslation: 'غلط: این تابلو پیش‌آگهیِ تغییر مسیر در تقاطع نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_11_10',
      italianText: 'Il segnale raffigurato indica passaggio obbligatorio a destra',
      farsiTranslation: 'صحیح: نام تابلو دقیقاً عبور اجباری از راست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_11_11',
      italianText: 'Il segnale raffigurato indica che non è consentito superare l’ostacolo a sinistra',
      farsiTranslation: 'صحیح: وقتی عبور از راست اجباری است، مسلماً عبور از سمت چپ مانع ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_11_12',
      italianText: 'Il segnale raffigurato indica obbligo di superare lo spartitraffico dalla parte destra',
      farsiTranslation: 'صحیح: از سمت راستِ رفوژ میانی باید عبور کنید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_11_13',
      italianText: 'Il segnale raffigurato indica obbligo di lasciare un’isola salvagente a sinistra',
      farsiTranslation: 'صحیح: عبور از راستِ سکوی عابر، یعنی سکو در سمت چپ شما باقی می‌ماند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_11_14',
      italianText: 'Il segnale raffigurato indica obbligo di passare a destra di un cantiere stradale',
      farsiTranslation: 'صحیح: هدایت خودروها به سمت راستِ کارگاه جاده‌ای.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_11_15',
      italianText: 'Il segnale raffigurato indica obbligo di svoltare a destra',
      farsiTranslation: 'غلط: گردش (Svoltare) مربوط به تقاطع است نه موانع وسط جاده.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_11_16',
      italianText: 'Il segnale raffigurato indica obbligo di superare l’ostacolo lasciandolo alla propria destra',
      farsiTranslation: 'غلط: وقتی شما از راستِ مانع رد می‌شوید، خود مانع در سمت "چپ" شما قرار می‌گیرد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_11_17',
      italianText: 'Il segnale raffigurato indica direzione obbligatoria a destra',
      farsiTranslation: 'غلط: جهت اجباری (Direzione) تابلوی متفاوتی دارد که فلش آن کاملاً افقی است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_11_18',
      italianText: 'Il segnale raffigurato indica che siamo in prossimità di un incrocio',
      farsiTranslation: 'غلط: این تابلو برای موانع است نه هشدار تقاطع.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_11_19',
      italianText: 'Il segnale raffigurato indica che non è possibile proseguire su quella strada',
      farsiTranslation: 'غلط: مسیر بسته نیست، فقط باید به درستی از کنار مانع رد شوید.',
      correctAnswer: 'Falso'
    },

    // 5.12 Passaggi consentiti (a destra e a sinistra)
    {
      id: 'q_5_12_1',
      italianText: 'Il segnale raffigurato indica al conducente gli unici passaggi consentiti',
      farsiTranslation: 'صحیح: این تابلو مسیرهای مجاز عبور از مانع (فقط چپ و راست) را نشان می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_12_2',
      italianText: 'Il segnale raffigurato indica i passaggi consentiti a destra e a sinistra di un’isola di traffico',
      farsiTranslation: 'صحیح: نشان می‌دهد که می‌توانید از هر دو سمتِ جزیره ترافیکی عبور کنید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_12_3',
      italianText: 'Il segnale raffigurato consente ai conducenti di passare sia a destra che a sinistra di un salvagente',
      farsiTranslation: 'صحیح: عبور از دو طرف سکوی عابر پیاده آزاد است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_12_4',
      italianText: 'Il segnale raffigurato consente il passaggio a destra e a sinistra di un cantiere stradale',
      farsiTranslation: 'صحیح: اگر کارگاه در وسط جاده باشد، این تابلو عبور از دو طرف را مجاز می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_12_5',
      italianText: 'Il segnale raffigurato indica che si può transitare a destra e a sinistra di uno spartitraffico',
      farsiTranslation: 'صحیح: عبور از دو سمتِ جداکننده جاده مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_12_6',
      italianText: 'Il segnale raffigurato consente il passaggio da ambedue i lati dell’ostacolo',
      farsiTranslation: 'صحیح: عبور از هر دو طرف (چپ و راست) مانع امکان‌پذیر است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_12_7',
      italianText: 'Il segnale raffigurato obbliga a svoltare a sinistra o a destra all’incrocio',
      farsiTranslation: 'غلط: این تابلو برای عبور از مانع است، نه تغییر مسیر در تقاطع.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_12_8',
      italianText: 'Il segnale raffigurato vieta di proseguire in quella strada',
      farsiTranslation: 'غلط: مسیر مسدود نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_12_9',
      italianText: 'Il segnale raffigurato è, di norma, preceduto dal segnale ROTATORIA',
      farsiTranslation: 'غلط: این تابلو برای موانع دوطرفه است و ربطی به میدان ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_12_10',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_12_11',
      italianText: 'Il segnale raffigurato è un segnale di divieto',
      farsiTranslation: 'غلط: تابلوی دایره‌ای با رنگ آبی، علامت اجبار است.',
      correctAnswer: 'Falso'
    },

    // 5.13 Rotatoria
    {
      id: 'q_5_13_1',
      italianText: 'Il segnale raffigurato presegnala un incrocio regolato con circolazione rotatoria',
      farsiTranslation: 'صحیح: این تابلو قبل از ورود به میدان نصب می‌شود و مقررات حرکت دورانی را اعلام می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_13_2',
      italianText: 'Il segnale raffigurato, in corrispondenza di una piazza, prescrive l’obbligo di circolazione secondo il verso indicato',
      farsiTranslation: 'صحیح: در میدان‌ها باید در جهت فلش‌ها (پادساعتگرد) حرکت کرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_13_3',
      italianText: 'Il segnale raffigurato è posto prima dello sbocco su un’area in cui è prescritta la circolazione rotatoria',
      farsiTranslation: 'صحیح: این تابلو قبل از ورود و اتصال به محوطه میدان قرار می‌گیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_13_4',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: جزو تابلوهای دستوری (الزام‌آور) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_13_5',
      italianText: 'Il segnale raffigurato è un segnale di divieto',
      farsiTranslation: 'غلط: تابلوی دایره‌ای با رنگ آبی، علامت اجبار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_13_6',
      italianText: 'Il segnale raffigurato preannuncia una direzione obbligatoria a sinistra',
      farsiTranslation: 'غلط: این تابلو گردش دورانی را نشان می‌دهد، نه فقط یک گردش ساده به چپ.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_13_7',
      italianText: 'Il segnale raffigurato è collocato sulla colonnina luminosa posta al centro di una rotatoria',
      farsiTranslation: 'غلط: این تابلو در سمت راست خیابان و قبل از ورود به میدان است، نه وسط میدان.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_13_8',
      italianText: 'Il segnale raffigurato è integrato con un segnale di PASSAGGIO OBBLIGATORIO A SINISTRA',
      farsiTranslation: 'غلط: هیچ الزامی برای همراه بودن این تابلو با تابلوی عبور اجباری از چپ نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_13_9',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_13_10',
      italianText: 'Il segnale raffigurato è posto prima dello sbocco in una piazza con circolazione rotatoria',
      farsiTranslation: 'صحیح: تکرار مفهوم با بیانی مشابه؛ پیش از ورود به میدان نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_13_11',
      italianText: 'Il segnale raffigurato indica la presenza di un incrocio nel quale la circolazione è regolata a rotatoria',
      farsiTranslation: 'صحیح: نشان می‌دهد تقاطع پیش رو دارای سازوکار ترافیکی میدان است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_13_12',
      italianText: 'Il segnale raffigurato è un segnale di obbligo',
      farsiTranslation: 'صحیح: استفاده از این مسیر برای عابران الزامی است و خودروها هم الزام دارند وارد نشوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_13_13',
      italianText: 'Il segnale raffigurato obbliga i conducenti a circolare secondo il verso indicato dalle frecce',
      farsiTranslation: 'صحیح: گردش باید در مسیر پیکان‌ها (پادساعتگرد) باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_13_14',
      italianText: 'Il segnale di figura (A) su strade extraurbane è preceduto dal segnale di pericolo di CIRCOLAZIONE ROTATORIA in figura (B) (FIG 971)',
      farsiTranslation: 'صحیح: در خارج از شهر، همیشه پیش‌آگهی خطر (مثلثی) میدان قبل از این تابلوی اصلی قرار دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_13_15',
      italianText: 'Il segnale raffigurato prescrive un obbligo di ROTATORIA solo per le autovetture',
      farsiTranslation: 'غلط: مقررات میدان برای تمامی وسایل نقلیه (اعم از موتور، کامیون و ماشین) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_13_16',
      italianText: 'Il segnale raffigurato è posto su colonnina al centro dell’incrocio intorno alla quale bisogna girare secondo le frecce',
      farsiTranslation: 'غلط: باز هم تأکید می‌شود که این تابلو قبل از میدان نصب می‌شود، نه در مرکز آن.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_13_17',
      italianText: 'Il segnale raffigurato è posto all’inizio di una strada senza uscita',
      farsiTranslation: 'غلط: میدان ربطی به کوچه بن‌بست ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_13_18',
      italianText: 'Il segnale raffigurato indica l’obbligo di tornare indietro',
      farsiTranslation: 'غلط: میدان برای دور زدن و تغییر مسیر است، اما اجباری به بازگشت نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_13_19',
      italianText: 'Il segnale raffigurato non vale per i ciclomotori',
      farsiTranslation: 'غلط: علامت نشان داده شده در مورد موتور سیکلت صدق نمی کند',
      correctAnswer: 'Falso'
    },

    // 5.14 Limite minimo di velocità
    {
      id: 'q_5_14_1',
      italianText: 'In presenza del segnale raffigurato è consentito marciare alla velocità di 40 km/h',
      farsiTranslation: 'صحیح: چون حداقل سرعت ۳۰ است، حرکت با ۴۰ کیلومتر بر ساعت کاملاً مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_2',
      italianText: 'Il segnale raffigurato indica il limite di velocità al di sotto del quale è vietato circolare',
      farsiTranslation: 'صحیح: این تابلو حد پایینیِ سرعت را نشان می‌دهد که کمتر از آن نباید رانندگی کرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_3',
      italianText: 'Il segnale raffigurato è un segnale di obbligo',
      farsiTranslation: 'صحیح: استفاده از این مسیر برای عابران الزامی است و خودروها هم الزام دارند وارد نشوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_4',
      italianText: 'Il segnale raffigurato impone di circolare ad una velocità di almeno 30 km/h',
      farsiTranslation: 'صحیح: سرعت شما "دست‌کم" باید ۳۰ کیلومتر بر ساعت باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_5',
      italianText: 'Il segnale raffigurato obbliga i veicoli a mantenere almeno la velocità indicata',
      farsiTranslation: 'صحیح: باید حداقل با همان سرعتِ درج شده برانید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_6',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che non siano in grado di osservare la prescrizione',
      farsiTranslation: 'صحیح: خودرویی که توانایی رسیدن به این سرعت را ندارد حق ورود به جاده را نخواهد داشت.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_7',
      italianText: 'Il segnale raffigurato consente di marciare alla velocità di 20 km/h',
      farsiTranslation: 'غلط: سرعت‌های کمتر از عدد روی تابلو (مثل ۲۰) ممنوع هستند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_8',
      italianText: 'Il segnale raffigurato indica la fine del limite massimo di velocità',
      farsiTranslation: 'غلط: این تابلو پایان حداقل سرعت را اعلام می‌کند، نه حداکثر سرعت.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_9',
      italianText: 'Il segnale raffigurato vieta di superare la velocità indicata',
      farsiTranslation: 'غلط: این تابلو دقیقاً برعکس عمل می‌کند و از شما می‌خواهد از آن سرعت بیشتر یا مساوی برانید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_10',
      italianText: 'Il segnale raffigurato consente di marciare ad una velocità superiore a 30 km/h, senza alcun limite',
      farsiTranslation: 'غلط: شما مجاز به رانندگی سریع‌تر هستید، اما فقط تا سقف حداکثر سرعت مجاز جاده (و نه بدون هیچ محدودیتی).',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_11',
      italianText: 'Il segnale raffigurato prescrive di marciare alla velocità costante di 30 km/h',
      farsiTranslation: 'غلط: شما مجبور نیستید دقیقاً و همیشه روی عدد ۳۰ بمانید (سرعت ثابت الزامی نیست).',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_12',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: این تابلو یک الزام (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_13',
      italianText: 'Il segnale raffigurato vieta la circolazione ai veicoli che non sono in grado di marciare almeno a 30 km/h',
      farsiTranslation: 'صحیح: تکرار مفهوم قبل؛ ماشینی که نمی‌تواند به سرعت ۳۰ برسد، اجازه ورود ندارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_14',
      italianText: 'Il segnale raffigurato prescrive un limite minimo di velocità',
      farsiTranslation: 'صحیح: این نام و کارکرد دقیق تابلو است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_15',
      italianText: 'Il segnale raffigurato obbliga a mantenere una velocità non inferiore a 30 km/h',
      farsiTranslation: 'صحیح: سرعت شما نباید کمتر از ۳۰ کیلومتر بر ساعت باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_16',
      italianText: 'In presenza del segnale raffigurato è consentito circolare entro i limiti massimi di velocità vigenti per quella strada',
      farsiTranslation: 'صحیح: تا زمانی که از ۳۰ کیلومتر کندتر نروید، می‌توانید تا سقف سرعت مجازِ کلی جاده برانید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_17',
      italianText: 'Il segnale raffigurato consente la circolazione ai veicoli che procedono a velocità uguale o superiore a quella indicata',
      farsiTranslation: 'صحیح: وسایل نقلیه باید حداقل سرعتِ روی تابلو را داشته باشند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_14_18',
      italianText: 'Il segnale raffigurato indica il limite massimo di velocità',
      farsiTranslation: 'غلط: دایره آبی نشانه حداقل سرعت است، نه حداکثر.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_19',
      italianText: 'Il segnale raffigurato indica che la circolazione è riservata ai veicoli con velocità massima inferiore a quella indicata',
      farsiTranslation: 'غلط: دقیقاً برعکس است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_20',
      italianText: 'Il segnale raffigurato vieta di marciare a velocità superiore a quella indicata',
      farsiTranslation: 'غلط: سرعت بالاتر از این عدد (تا سقف مجاز جاده) کاملاً قانونی است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_21',
      italianText: 'Il segnale raffigurato consente di marciare alla velocità di 25 km/h',
      farsiTranslation: 'غلط: ۲۵ کیلومتر از حداقل سرعت مجاز (۳۰) کمتر است و غیرقانونی است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_22',
      italianText: 'Il segnale raffigurato obbliga a mantenere la distanza minima di sicurezza di 30 metri dal veicolo che precede',
      farsiTranslation: 'غلط: این تابلو مربوط به سرعت است، نه فاصله ایمنی بین ماشین‌ها.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_23',
      italianText: 'Il segnale raffigurato indica il divieto di transito ai veicoli con massa complessiva superiore a 30 t',
      farsiTranslation: 'غلط: عدد ۳۰ مربوط به سرعت است، نه وزن (تن).',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_24',
      italianText: 'Il segnale raffigurato consente di circolare a velocità inferiore a quella indicata',
      farsiTranslation: 'غلط: رانندگی با سرعت کمتر از حداقل مجاز، ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_14_25',
      italianText: 'Il segnale raffigurato indica la velocità consigliata',
      farsiTranslation: 'غلط: سرعت توصیه‌شده تابلویی مربع‌شکل دارد. این تابلو اجباری است.',
      correctAnswer: 'Falso'
    },

    // 5.15 Fine limite minimo di velocità
    {
      id: 'q_5_15_1',
      italianText: 'Il segnale raffigurato indica la fine di una prescrizione',
      farsiTranslation: 'صحیح: خط قرمز روی تابلو نشان‌دهنده لغو شدن یک دستور است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_15_2',
      italianText: 'Il segnale raffigurato indica la fine del limite minimo di velocità',
      farsiTranslation: 'صحیح: از این نقطه به بعد، اجباری برای رعایت حداقل سرعت نیست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_15_3',
      italianText: 'Il segnale raffigurato indica che non si ha più l’obbligo di circolare ad una velocità almeno pari a quella indicata',
      farsiTranslation: 'صحیح: دیگر اجباری برای حفظ آن حداقل سرعت ندارید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_15_4',
      italianText: 'Il segnale raffigurato consente di circolare entro i limiti massimi di velocità vigenti per quella strada',
      farsiTranslation: 'صحیح: محدودیت حداکثر سرعت عمومی جاده همچنان به قوت خود باقی است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_15_5',
      italianText: 'Il segnale raffigurato consente di circolare a velocità superiore a quella indicata',
      farsiTranslation: 'صحیح: اگرچه حداقل سرعت لغو شده، اما شما همچنان می‌توانید با سرعت بالا (تا سقف مجاز) رانندگی کنید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_15_6',
      italianText: 'Il segnale raffigurato indica la fine del limite massimo di velocità',
      farsiTranslation: 'غلط: این تابلو پایان حداقل سرعت را اعلام می‌کند، نه حداکثر سرعت.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_15_7',
      italianText: 'Il segnale raffigurato indica la fine del divieto di transito ai veicoli con massa complessiva superiore a 30 tonnellate',
      farsiTranslation: 'غلط: این عدد مربوط به سرعت است، نه وزن ماشین.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_15_8',
      italianText: 'Il segnale raffigurato vieta la circolazione ai veicoli di massa superiore a 30 tonnellate',
      farsiTranslation: 'غلط: ربطی به محدودیت‌های وزنی ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_15_9',
      italianText: 'Il segnale raffigurato indica la fine del limite di lunghezza massima dei complessi di veicoli',
      farsiTranslation: 'غلط: عدد روی تابلو به طول خودرو ارتباطی ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_15_10',
      italianText: 'Il segnale raffigurato indica la fine dell’obbligo di mantenere la distanza di almeno 30 metri dal veicolo che precede',
      farsiTranslation: 'غلط: این پایان محدودیت سرعت است، نه فاصله ایمنی.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_15_11',
      italianText: 'Il segnale raffigurato vieta di circolare alla velocità di 30 km/h',
      farsiTranslation: 'غلط: لغو قانون حداقل سرعت به این معنا نیست که رانندگی با آن سرعت خاص ممنوع شده است.',
      correctAnswer: 'Falso'
    },

    // 5.16 Catene da neve obbligatorie
    {
      id: 'q_5_16_1',
      italianText: 'Il segnale raffigurato prescrive di circolare con catene o pneumatici invernali',
      farsiTranslation: 'صحیح: در حضور این تابلو، باید لاستیک زمستانی داشته باشید یا زنجیر چرخ ببندید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_16_2',
      italianText: 'Il segnale raffigurato indica che la circolazione è consentita solo con catene o pneumatici invernali',
      farsiTranslation: 'صحیح: این دو مورد، تنها شروط لازم برای ورود به این جاده هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_16_3',
      italianText: 'Il segnale raffigurato consente il transito solo ai veicoli muniti di catene o pneumatici invernali',
      farsiTranslation: 'صحیح: ماشین‌های فاقد این تجهیزات اجازه ورود به مسیر را ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_16_4',
      italianText: 'Il segnale raffigurato vieta il transito a veicoli sprovvisti di catene o pneumatici invernali',
      farsiTranslation: 'صحیح: نداشتن زنجیر یا لاستیک مناسب، مساوی با ممنوعیت ورود است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_16_5',
      italianText: 'Il segnale raffigurato presegnala un tratto di strada ove occorre procedere con particolare prudenza',
      farsiTranslation: 'صحیح: چون جاده برفی و لغزنده است، احتیاط فراوان ضروری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_16_6',
      italianText: 'Il segnale raffigurato si trova su strade che, in particolari condizioni, sono innevate o ghiacciate',
      farsiTranslation: 'صحیح: این تابلو عمدتاً در جاده‌های کوهستانی یا برف‌گیر نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_16_7',
      italianText: 'Il segnale raffigurato vieta la circolazione ai veicoli muniti di pneumatici con catene',
      farsiTranslation: 'غلط: اتفاقاً برعکس! این تابلو دقیقاً استفاده از زنجیر چرخ را اجباری می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_16_8',
      italianText: 'Il segnale raffigurato presegnala la progressiva chilometrica oltre la quale è obbligatorio l’uso delle catene',
      farsiTranslation: 'غلط: این تابلو مسافت را نشان نمی‌دهد، بلکه نقطه‌ی شروع استفاده از زنجیر چرخ را مشخص می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_16_9',
      italianText: 'Il segnale raffigurato vieta la circolazione a veicoli muniti di pneumatici con spessore del battistrada inferiore a 3 millimetri',
      farsiTranslation: 'غلط: این تابلو قانونی برای آج لاستیک تعیین نمی‌کند، بلکه الزام به نوع لاستیک (زمستانی) یا زنجیر چرخ دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_16_10',
      italianText: 'Il segnale raffigurato obbliga a togliere le catene per non rovinare l’asfalto',
      farsiTranslation: 'غلط: این تابلو اجبار به "بستن" زنجیر است، نه "باز کردن" آن.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_16_11',
      italianText: 'Il segnale raffigurato, con pannello integrativo, indica la distanza a cui si trova un’officina per montare le catene',
      farsiTranslation: 'غلط: این تابلو برای اعلام حضور مکانیکی در آن حوالی نیست.',
      correctAnswer: 'Falso'
    },

    // 5.17 Percorso pedonale
    {
      id: 'q_5_17_1',
      italianText: 'Il segnale raffigurato indica l’inizio di un viale pedonale',
      farsiTranslation: 'صحیح: این تابلو نشان‌دهنده شروع مسیر مخصوص عابران پیاده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_17_2',
      italianText: 'Il segnale raffigurato è un segnale di obbligo',
      farsiTranslation: 'صحیح: استفاده از این مسیر برای عابران الزامی است و خودروها هم الزام دارند وارد نشوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_17_3',
      italianText: 'Il segnale raffigurato vale anche di giorno',
      farsiTranslation: 'صحیح: این قانون به صورت تمام‌وقت (شبانه‌روزی) معتبر است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_17_4',
      italianText: 'Il segnale raffigurato indica un percorso pedonale',
      farsiTranslation: 'صحیح: این نام دقیق این تابلو است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_17_5',
      italianText: 'Il segnale raffigurato consente il transito anche ai veicoli, ma solo con particolare prudenza ed attenzione ai pedoni',
      farsiTranslation: 'غلط: مسیر پیاده‌رو اکیداً برای همه خودروها ممنوع است، حتی با احتیاط.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_17_6',
      italianText: 'Il segnale raffigurato indica un divieto di transito per i pedoni',
      farsiTranslation: 'غلط: کاملاً برعکس، این منطقه مختص عبور پیاده‌ها است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_17_7',
      italianText: 'Il segnale raffigurato indica un attraversamento pedonale',
      farsiTranslation: 'غلط: این مسیر پیاده‌رو (طولی) است، نه خط‌کشی عابر پیاده در عرض خیابان.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_17_8',
      italianText: 'Il segnale raffigurato obbliga i conducenti di veicoli a dare la precedenza ai pedoni',
      farsiTranslation: 'غلط: چون خودرو اصلاً حق ورود به اینجا را ندارد، بحث حق تقدم در این مکان بی‌معنی است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_17_9',
      italianText: 'Il segnale raffigurato indica un percorso pedonale e ciclabile',
      farsiTranslation: 'غلط: این فقط مختص پیاده‌هاست و دوچرخه‌ها تابلوی جداگانه دارند.',
      correctAnswer: 'Falso'
    },

    // 5.18 Fine percorso pedonale
    {
      id: 'q_5_18_1',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine del percorso pedonale',
      farsiTranslation: 'صحیح: خط قرمز روی تابلو پایان مسیر ویژه عابران را نشان می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_18_2',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine del viale pedonale',
      farsiTranslation: 'صحیح: تکرار مفهوم قبلی با کلمه‌ای مشابه (Viale = خیابان/بلوار).',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_18_3',
      italianText: 'Il segnale raffigurato indica che da lì in poi i pedoni non circolano più su un percorso riservato',
      farsiTranslation: 'صحیح: از اینجا به بعد، پیاده‌ها دیگر مسیر اختصاصی امن خود را ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_18_4',
      italianText: 'Il segnale raffigurato preannuncia un attraversamento pedonale',
      farsiTranslation: 'غلط: این تابلو پایان یک پیاده‌رو را اعلام می‌کند، نه خط‌کشی عابر را.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_18_5',
      italianText: 'Il segnale raffigurato preannuncia un divieto di transito per i pedoni',
      farsiTranslation: 'غلط: پایان مسیر ویژه به این معنا نیست که پیاده‌ها کلاً حق عبور ندارند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_18_6',
      italianText: 'Il segnale raffigurato vieta ai pedoni di attraversare la strada',
      farsiTranslation: 'غلط: این تابلو عبور عابر از خیابان را ممنوع نمی‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_18_7',
      italianText: 'Il segnale raffigurato preannuncia la fine di un’area vietata ai pedoni',
      farsiTranslation: 'غلط: منطقه قبلی برای پیاده‌ها ممنوع نبود، بلکه "مخصوص" آن‌ها بود.',
      correctAnswer: 'Falso'
    },

    // 5.19 Pista ciclabile
    {
      id: 'q_5_19_1',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un percorso vietato alle autovetture e ai motocicli',
      farsiTranslation: 'صحیح: ماشین‌های سواری و موتورسیکلت‌ها حق ورود به مسیر دوچرخه را ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_19_2',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un percorso riservato alle biciclette',
      farsiTranslation: 'صحیح: این مسیر اختصاصاً برای دوچرخه‌ها رزرو شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_19_3',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un itinerario che si può percorrere solo con le biciclette',
      farsiTranslation: 'صحیح: فقط دوچرخه‌ها مجاز به طی کردن این مسیر هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_19_4',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un attraversamento ciclabile regolato da semaforo',
      farsiTranslation: 'غلط: این تابلو لاین ویژه دوچرخه است، نه محل تقاطع و عبور از عرض خیابان.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_19_5',
      italianText: 'Il segnale raffigurato vieta il transito alle biciclette',
      farsiTranslation: 'غلط: برعکس، این مسیر مخصوص ورود آنهاست!',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_19_6',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un percorso per pedoni e biciclette',
      farsiTranslation: 'غلط: این تابلو تنها یک دوچرخه را نشان می‌دهد و عابران پیاده در آن جایی ندارند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_19_7',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di una pista riservata alle biciclette e ai ciclomotori',
      farsiTranslation: 'غلط: موتورگازی‌ها (Ciclomotori) اجازه ورود به این مسیر را ندارند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_19_8',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un percorso consentito al transito di pedoni e di biciclette',
      farsiTranslation: 'غلط: مسیر مشترک با پیاده‌رو تابلوی متفاوتی (دارای تصویر انسان و دوچرخه) دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_19_9',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un’area vietata al transito delle biciclette',
      farsiTranslation: 'غلط: تکراری در تست‌ها؛ این تابلو مسیر مجاز دوچرخه است.',
      correctAnswer: 'Falso'
    },

    // 5.20 Fine pista ciclabile
    {
      id: 'q_5_20_1',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine della pista ciclabile',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده در محل پایان مسیر ویژهٔ دوچرخه نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_20_2',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine di un itinerario percorribile solo con biciclette',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده در محل پایان مسیری نصب می‌شود که فقط با دوچرخه قابل پیمودن است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_20_3',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine di una pista riservata alle biciclette',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده در محل پایان مسیری نصب می‌شود که به دوچرخه‌ها اختصاص دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_20_4',
      italianText: 'Il segnale raffigurato indica un divieto di sosta per le biciclette',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده، پارک دوچرخه‌ها را ممنوع می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_20_5',
      italianText: 'Il segnale raffigurato vieta il transito alle biciclette e ai ciclomotori',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده عبور دوچرخه‌ها و موتورگازی‌ها را ممنوع می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_20_6',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine del percorso pedonale e ciclabile',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده در محل پایان مسیر مشترک عابران پیاده و دوچرخه‌سواران نصب می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_20_7',
      italianText: 'Il segnale raffigurato preannuncia che non è più consentito il transito ai ciclisti e ai pedoni',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده اعلام می‌کند که از آن پس عبور دوچرخه‌سواران و عابران پیاده دیگر مجاز نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_20_8',
      italianText: 'Il segnale raffigurato è posto all’inizio di un’area vietata alle biciclette',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده در ابتدای منطقه‌ای نصب می‌شود که ورود دوچرخه‌ها به آن ممنوع است.',
      correctAnswer: 'Falso'
    },

    // 5.21 Pista ciclabile contigua al marciapiede
    {
      id: 'q_5_21_1',
      italianText: 'Il segnale raffigurato è posto in corrispondenza dell’inizio di una pista ciclabile accanto al marciapiede',
      farsiTranslation: 'صحیح: خط عمودی در تابلو نشان می‌دهد که لاین دوچرخه در کنار پیاده‌رو قرار دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_21_2',
      italianText: 'Il segnale raffigurato è posto in corrispondenza dell’inizio di una pista riservata alle biciclette, affiancata da un viale pedonale',
      farsiTranslation: 'صحیح: مسیر دوچرخه و پیاده‌رو در مجاورت هم (موازی) هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_21_3',
      italianText: 'Il segnale raffigurato è posto in corrispondenza dell’inizio di un percorso ciclabile accanto ad un percorso pedonale',
      farsiTranslation: 'صحیح: دقیقاً این تابلو نشان‌دهنده دو مسیر مجاور است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_21_4',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un percorso unico per pedoni e ciclisti',
      farsiTranslation: 'غلط: این تابلو مسیر مشترک و واحد برای عابران و دوچرخه‌سواران را نشان نمی‌دهد؛ مسیر دوچرخه و پیاده‌رو در کنار هم اما جدا از یکدیگرند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_21_5',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un viale misto, riservato sia ai pedoni che ai ciclisti',
      farsiTranslation: 'غلط: این یک مسیر مختلط و مشترک نیست؛ بخش عابران و بخش دوچرخه‌سواران در کنار یکدیگر ولی به‌صورت جداگانه مشخص شده‌اند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_21_6',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine delle corsie riservate ai pedoni e alle biciclette',
      farsiTranslation: 'غلط: این تابلو شروع مسیر را نشان می‌دهد، نه پایان آن را.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_21_7',
      italianText: 'Il segnale raffigurato preannuncia l’obbligo di condurre a mano la bicicletta',
      farsiTranslation: 'غلط: شما مجازید در این مسیر سوار بر دوچرخه پدال بزنید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_21_8',
      italianText: 'Il segnale raffigurato preannuncia l’obbligo di parcheggiare la bicicletta e proseguire a piedi',
      farsiTranslation: 'غلط: هیچ اجباری برای پارک کردن دوچرخه وجود ندارد.',
      correctAnswer: 'Falso'
    },

    // 5.22 Fine pista ciclabile contigua al marciapiede
    {
      id: 'q_5_22_1',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine della pista ciclabile accanto al marciapiede',
      farsiTranslation: 'صحیح: نوار قرمز به معنای پایان این لاین‌های مجاور است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_22_2',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine della pista ciclabile accanto ad un percorso riservato ai pedoni',
      farsiTranslation: 'صحیح: پایان مسیر اختصاصی دوچرخه‌ها که در کنار پیاده‌رو بود را اعلام می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_22_3',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine del percorso pedonale a fianco della pista ciclabile',
      farsiTranslation: 'صحیح: این تابلو همزمان پایان مسیر دوچرخه و مسیر پیاده‌رویِ مجاور آن را اعلام می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_22_4',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine del percorso pedonale accanto ad un percorso ciclabile',
      farsiTranslation: 'صحیح: بیان مجدد همان قانون با لحنی دیگر.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_22_5',
      italianText: 'Il segnale raffigurato vieta il transito a tutti i veicoli a due ruote',
      farsiTranslation: 'غلط: این تابلو عبور را ممنوع نمی‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_22_6',
      italianText: 'Il segnale raffigurato vieta il transito di biciclette condotte a mano',
      farsiTranslation: 'غلط: بردن دوچرخه با دست هرگز ممنوع نمی‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_22_7',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di una pista riservata in alcuni giorni ai pedoni e in altri alle biciclette',
      farsiTranslation: 'غلط: این تابلو مربوط به نوبت‌بندی روزهای هفته نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_22_8',
      italianText: 'Il segnale raffigurato vieta ai pedoni di entrare nelle ore notturne',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده ورود عابرین پیاده در شب را ممنوع می کند',
      correctAnswer: 'Falso'
    },

    // 5.23 Percorso unico pedonale e ciclabile
    {
      id: 'q_5_23_1',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un percorso unico per pedoni e ciclisti',
      farsiTranslation: 'صحیح: چون هیچ خط عمودی جداکننده‌ای بین نمادها نیست، یعنی فضا مشترک است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_23_2',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un viale misto, riservato sia ai pedoni che ai ciclisti',
      farsiTranslation: 'صحیح: یک مسیر مختلط و مشترک برای هر دو گروه ایجاد شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_23_3',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un itinerario riservato solo al transito di pedoni e ciclisti',
      farsiTranslation: 'صحیح: فقط این دو گروه حق استفاده از این معبر را دارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_23_4',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di una pista ciclabile a fianco del marciapiede',
      farsiTranslation: 'غلط: "در کنار" (a fianco) مربوط به تابلویی است که خط جداکننده دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_23_5',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di una pista ciclabile a fianco di un percorso riservato ai pedoni',
      farsiTranslation: 'غلط: مجدداً، این یک مسیر جدا از هم نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_23_6',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un’area pedonale accanto ad un percorso per ciclisti',
      farsiTranslation: 'غلط: "در کنار" (accanto) اشتباه است؛ مسیر مشترک است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_23_7',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un percorso pedonale accanto ad un percorso per le biciclette, separati da spartitraffico',
      farsiTranslation: 'غلط: سیگنال نشان داده شده در یک مسیر عابر پیاده در کنار یک مسیر دوچرخه سواری قرار دارد که توسط جزایر ترافیکی از هم جدا شده است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_23_8',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un’area transitabile con biciclette soltanto se condotte a mano',
      farsiTranslation: 'غلط: دوچرخه‌سواری در این مسیر آزاد است و نیازی به هدایت با دست نیست.',
      correctAnswer: 'Falso'
    },

    // 5.24 Fine percorso pedonale e ciclabile
    {
      id: 'q_5_24_1',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine del percorso unico pedonale e ciclabile',
      farsiTranslation: 'صحیح: نوار قرمز نشانه پایان این مسیر مشترک است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_24_2',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine di un percorso misto, riservato sia ai pedoni che alle biciclette',
      farsiTranslation: 'صحیح: پایان محوطه مشترک عابران و دوچرخه‌ها را اعلام می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_24_3',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine del percorso riservato alla circolazione mista di pedoni e di ciclisti',
      farsiTranslation: 'صحیح: تکرار همان قانون با عبارتی دیگر.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_24_4',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un percorso riservato ai pedoni e alle biciclette',
      farsiTranslation: 'غلط: این تابلو "پایان" مسیر را اعلام می‌کند، نه وجود آن را.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_24_5',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine della sola pista ciclabile',
      farsiTranslation: 'غلط: پایان هر دو مسیر (هم پیاده، هم دوچرخه) به طور همزمان است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_24_6',
      italianText: 'Il segnale raffigurato vieta il transito delle biciclette condotte a mano',
      farsiTranslation: 'غلط: بردن دوچرخه با دست ممنوع نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_24_7',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine del solo percorso pedonale',
      farsiTranslation: 'غلط: این تابلو پایان مسیر دوچرخه را هم اعلام می‌کند.',
      correctAnswer: 'Falso'
    },

    // 5.25 Percorso riservato agli animali da soma e da sella
    {
      id: 'q_5_25_1',
      italianText: 'Il segnale raffigurato non consente il transito ai veicoli',
      farsiTranslation: 'صحیح: از آنجا که این مسیر اختصاصیِ حیوانات است، هیچ وسیله نقلیه‌ای حق ورود ندارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_25_2',
      italianText: 'Il segnale raffigurato non consente il transito alle biciclette',
      farsiTranslation: 'صحیح: دوچرخه‌ها نیز اجازه استفاده از مسیر اسب‌ها را ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_25_3',
      italianText: 'Il segnale raffigurato non consente il transito ai veicoli con motore elettrico',
      farsiTranslation: 'صحیح: هیچ خودرویی (حتی برقی) نمی‌تواند وارد شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_25_4',
      italianText: 'Il segnale raffigurato è posto all’inizio di un percorso riservato agli animali da sella',
      farsiTranslation: 'صحیح: مسیر اختصاصی برای اسب‌های سواری را نشان می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_25_5',
      italianText: 'Il segnale raffigurato è posto all’inizio di un percorso riservato agli animali da soma',
      farsiTranslation: 'صحیح: حیوانات بارکش هم می‌توانند از این مسیر استفاده کنند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_25_6',
      italianText: 'Il segnale raffigurato è posto nelle vicinanze di una scuola di equitazione',
      farsiTranslation: 'غلط: این یک تابلوی دستوری جاده است، نه تابلوی راهنما به سمت باشگاه سوارکاری.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_25_7',
      italianText: 'Il segnale raffigurato è un segnale di pericolo',
      farsiTranslation: 'غلط: تابلوهای خطر مثلثی هستند، این یک تابلوی اجبار (دستوری) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_25_8',
      italianText: 'Il segnale raffigurato vieta il passaggio agli animali da soma e da sella',
      farsiTranslation: 'غلط: دقیقاً برعکس؛ این مسیر مخصوص عبور آن‌هاست!',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_25_9',
      italianText: 'Il segnale raffigurato preannuncia la presenza di animali vaganti',
      farsiTranslation: 'غلط: حیوانات سرگردان/آزاد (Animali vaganti) با تابلوی مثلثی خطر نشان داده می‌شوند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_25_10',
      italianText: 'Il segnale raffigurato preannuncia l’obbligo di dare precedenza agli animali che attraversano',
      farsiTranslation: 'غلط: این تابلو یک مسیر اختصاصی طولی است، نه تقاطع برای عبور حیوانات.',
      correctAnswer: 'Falso'
    },

    // 5.26 Fine percorso riservato agli animali da soma e da sella
    {
      id: 'q_5_26_1',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine di un percorso per gli animali da soma',
      farsiTranslation: 'صحیح: خط قرمز به معنای پایان مسیر اختصاصی حیوانات بارکش است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_26_2',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine di un percorso per gli animali da sella',
      farsiTranslation: 'صحیح: مسیر ویژه حیوانات سواری به پایان رسیده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_26_3',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine del percorso riservato agli animali da soma e da sella',
      farsiTranslation: 'صحیح: این نام دقیق و رسمی این تابلو است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_26_4',
      italianText: 'Il segnale raffigurato è posto in vicinanza di un ippodromo',
      farsiTranslation: 'غلط: این تابلو پایان یک مسیر را اعلام می‌کند، نه مکان پیست اسب‌دوانی را.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_26_5',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli a trazione animale',
      farsiTranslation: 'غلط: پایان این مسیر اختصاصی به معنای ممنوع شدن عبور گاری‌ها نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_26_6',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine di un tratto di strada vietato ai cavalli',
      farsiTranslation: 'غلط: منطقه قبل از تابلو برای اسب‌ها ممنوع نبود، بلکه "اختصاصی" آن‌ها بود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_26_7',
      italianText: 'Il segnale raffigurato è posto in corrispondenza della fine di un percorso riservato solo ai cavalli da corsa',
      farsiTranslation: 'غلط: این مسیر برای همه حیوانات سواری/بارکش است، نه فقط اسب‌های مسابقه‌ای.',
      correctAnswer: 'Falso'
    },

    // 5.27 ALT - Polizia
    {
      id: 'q_5_27_1',
      italianText: 'Il segnale raffigurato preannuncia la presenza di un posto di blocco stradale istituito da organi di polizia',
      farsiTranslation: 'صحیح: این تابلو ایست بازرسی پلیس را اعلام می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_27_2',
      italianText: 'Il segnale raffigurato obbliga ad arrestarsi in prossimità di blocco stradale istituito da organi di polizia',
      farsiTranslation: 'صحیح: باید حتماً پیش از محل ایست بازرسی خودرو را متوقف کنید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_27_3',
      italianText: 'Il segnale raffigurato indica l’obbligo di arresto ad un posto di blocco stradale istituito dagli organi di polizia',
      farsiTranslation: 'صحیح: توقف کامل در ایست بازرسی اجباری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_27_4',
      italianText: 'Il segnale raffigurato segnala posto di blocco stradale istituito da organi di polizia al quale è obbligatorio fermarsi',
      farsiTranslation: 'صحیح: تکرار همین قانون مهم.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_27_5',
      italianText: 'Il segnale raffigurato, situato a distanza opportuna dal posto di blocco, è ripetuto all’altezza del punto di arresto',
      farsiTranslation: 'صحیح: ابتدا در فاصله‌ای به عنوان هشدار قرار می‌گیرد و سپس دقیقاً در محل توقف مجدداً نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_27_6',
      italianText: 'Il segnale raffigurato obbliga a rallentare per essere pronti a fermarsi in caso di segnalazione da parte degli agenti',
      farsiTranslation: 'غلط: توقف کامل همیشه اجباری است، حتی اگر مأمور به شما علامت ندهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_27_7',
      italianText: 'Il segnale raffigurato presegnala un confine di Stato con obbligo di arrestarsi',
      farsiTranslation: 'غلط: این تابلو مربوط به پلیس است، مرز گمرکی (ALT Dogana) تابلوی دیگری دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_27_8',
      italianText: 'Il segnale raffigurato segnala una stazione autostradale alla quale è obbligatorio fermarsi',
      farsiTranslation: 'غلط: این تابلو ALT–POLIZIA و مربوط به ایست بازرسی پلیس است؛ ایست اجباری در باجهٔ عوارض با تابلوی ALT–STAZIONE اعلام می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_27_9',
      italianText: 'Il segnale raffigurato impone di fermarsi e dare precedenza ai mezzi della polizia',
      farsiTranslation: 'غلط: این تابلو برای بازرسی ماشین‌های عبوری است، نه برای راه دادن به ماشین پلیس.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_27_10',
      italianText: 'Il segnale raffigurato segnala la vicinanza di un controllo doganale',
      farsiTranslation: 'غلط: گمرک با تابلوی ALT DOGANA مشخص می‌شود.',
      correctAnswer: 'Falso'
    },

    // 5.28 ALT - Stazione
    {
      id: 'q_5_28_1',
      italianText: 'Il segnale raffigurato obbliga ad arrestarsi all’accesso autostradale',
      farsiTranslation: 'صحیح: توقف برای گرفتن بلیت یا پرداخت عوارض در ورودی/خروجی اتوبان الزامی است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_28_2',
      italianText: 'Il segnale raffigurato impone l’obbligo di rallentare e fermarsi per le operazioni di pedaggio autostradale',
      farsiTranslation: 'صحیح: کاهش سرعت و توقف برای پرداخت عوارض (Pedaggio) اجباری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_28_3',
      italianText: 'Il segnale raffigurato segnala una stazione autostradale alla quale è obbligatorio fermarsi',
      farsiTranslation: 'صحیح: شما باید در باجه عوارضی توقف کنید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_28_4',
      italianText: 'Il segnale raffigurato prescrive di arrestarsi al casello autostradale per le operazioni di pedaggio',
      farsiTranslation: 'صحیح: نشان می‌دهد که باید در باجه (Casello) برای عوارض بایستید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_28_5',
      italianText: 'Il segnale raffigurato è posto in corrispondenza degli accessi autostradali controllati dove è obbligatorio fermarsi',
      farsiTranslation: 'صحیح: در ورودی‌های کنترل‌شونده اتوبان نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_28_6',
      italianText: 'Il segnale raffigurato segnala la presenza di un comando stazione carabinieri, con posto di blocco',
      farsiTranslation: 'غلط: کلمه Stazione در اینجا به معنای باجه عوارضی است، نه پاسگاه پلیس (کارابینیری).',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_28_7',
      italianText: 'Il segnale raffigurato preannuncia una stazione ferroviaria',
      farsiTranslation: 'غلط: این تابلو ربطی به ایستگاه قطار ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_28_8',
      italianText: 'Il segnale raffigurato vieta l’accesso ad un’area riservata ai mezzi della società autostradale',
      farsiTranslation: 'غلط: این یک ممنوعیت ورود برای منطقه خاص نیست، بلکه توقف عوارضی است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_28_9',
      italianText: 'Il segnale raffigurato indica il punto ove occorre fermarsi per caricare l’autovettura sul treno',
      farsiTranslation: 'غلط: این تابلو برای بارگیری ماشین روی قطار نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_28_10',
      italianText: 'Il segnale raffigurato può indicare il punto di arresto nei pontili d’imbarco di navi traghetto',
      farsiTranslation: 'غلط: برای سوار شدن به کشتی مسافربری/لنج (Traghetto) کاربرد ندارد.',
      correctAnswer: 'Falso'
    },

    // 5.29 ALT - Dogana
    {
      id: 'q_5_29_1',
      italianText: 'Il segnale raffigurato prescrive di arrestarsi al varco doganale',
      farsiTranslation: 'صحیح: توقف کامل در ایست بازرسی گمرکی اجباری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_29_2',
      italianText: 'Il segnale raffigurato obbliga ad arrestarsi alla frontiera per il controllo doganale',
      farsiTranslation: 'صحیح: در مرزها برای کنترل گمرکی باید متوقف شوید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_29_3',
      italianText: 'Il segnale raffigurato indica che bisogna rallentare e fermarsi alla dogana',
      farsiTranslation: 'صحیح: کاهش سرعت و سپس ایست کامل در گمرک موردنیاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_29_4',
      italianText: 'Il segnale raffigurato segnala un varco doganale al quale è obbligatorio fermarsi',
      farsiTranslation: 'صحیح: دروازه گمرک را نشان می‌دهد که ایست در آن قطعی است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_29_5',
      italianText: 'Il segnale raffigurato preannuncia la presenza di un commissariato di polizia',
      farsiTranslation: 'غلط: این مربوط به گمرک است، نه کلانتری پلیس.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_29_6',
      italianText: 'Il segnale raffigurato obbliga a rallentare fermandosi al varco doganale solo se si hanno oggetti o merci da dichiarare',
      farsiTranslation: 'غلط: حتی اگر کالایی برای اظهار کردن ندارید، توقف کامل اجباری است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_29_7',
      italianText: 'Il segnale raffigurato preannuncia la presenza di un comando stazione carabinieri',
      farsiTranslation: 'غلط: این تابلو برای پلیس محلی و پاسگاه کارابینیری نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_29_8',
      italianText: 'Il segnale raffigurato si trova solo alla frontiera con un paese della Comunità Europea',
      farsiTranslation: 'غلط: در مرز کشورهای اتحادیه اروپا گمرک وجود ندارد! این تابلو برای مرز با کشورهای خارج از اتحادیه اروپا (Extracomunitario) است.',
      correctAnswer: 'Falso'
    },

    // 5.30 Confine di stato con paese dell'Unione Europea
    {
      id: 'q_5_30_1',
      italianText: 'Il segnale raffigurato indica il confine di Stato con un Paese che fa parte dell’Unione Europea',
      farsiTranslation: 'صحیح: این تابلو نشان‌دهنده ورود به کشور عضو اتحادیه اروپاست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_30_2',
      italianText: 'Il segnale raffigurato si trova al confine di Stato con un Paese dell’Unione Europea',
      farsiTranslation: 'صحیح: دقیقاً در روی خط مرزی نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_30_3',
      italianText: 'Il segnale raffigurato indica il confine tra l’Italia ed uno Stato membro dell’Unione Europea',
      farsiTranslation: 'صحیح: در مرزهای خروجی ایتالیا به سمت سایر کشورهای اتحادیه نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_30_4',
      italianText: 'Il segnale raffigurato non obbliga ad arrestarsi al confine di Stato',
      farsiTranslation: 'صحیح: عبور از مرزهای اتحادیه اروپا آزاد است و نیازی به توقف نیست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_30_5',
      italianText: 'Il segnale raffigurato preavvisa un posto di blocco degli organi di polizia in vicinanza del confine di Stato',
      farsiTranslation: 'غلط: این تابلو هیچ ایست بازرسی را پیش‌بینی نمی‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_30_6',
      italianText: 'Il segnale raffigurato è posto dietro al veicolo per indicare la nazione in cui è stato immatricolato',
      farsiTranslation: 'غلط: این یک تابلوی جاده‌ای بزرگ است، نه برچسبِ روی پلاک ماشین.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_30_7',
      italianText: 'Il segnale raffigurato è posto dietro al veicolo per indicare che può circolare solo in uno Stato dell’Europa',
      farsiTranslation: 'غلط: این تابلو جاده‌ای است و قوانین عبور ماشین‌ها را در سطح قاره مشخص نمی‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_30_8',
      italianText: 'Il segnale raffigurato obbliga ad arrestarsi alla frontiera con uno Stato dell’Unione Europea',
      farsiTranslation: 'غلط: هیچ توقفی در مرزهای داخلی اتحادیه اروپا اجباری نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_30_9',
      italianText: 'Il segnale raffigurato preavvisa l’obbligo di arrestarsi per il controllo doganale entrando in Italia',
      farsiTranslation: 'غلط: ورود از کشورهای عضو اتحادیه اروپا به ایتالیا نیاز به بازرسی گمرکی ندارد.',
      correctAnswer: 'Falso'
    },

    // 5.31 Preavviso di confine di stato con paese dell'Unione Europea
    {
      id: 'q_5_31_1',
      italianText: 'Il segnale raffigurato preavvisa confine di Stato con un Paese che fa parte dell’Unione Europea',
      farsiTranslation: 'صحیح: این تابلو نشان می‌دهد که در فاصله نزدیک (مثلاً ۱ کیلومتری) به مرز می‌رسید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_31_2',
      italianText: 'Il segnale raffigurato è posto sulle strade che portano al confine di Stato con un Paese dell’Unione Europea',
      farsiTranslation: 'صحیح: در جاده‌های منتهی به مرز نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_31_3',
      italianText: 'Il segnale raffigurato preavvisa la distanza dal confine con uno Stato che fa parte dell’Unione Europea',
      farsiTranslation: 'صحیح: فاصله تا مرز را نشان می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_31_4',
      italianText: 'Il segnale raffigurato non obbliga ad arrestarsi per il controllo doganale al confine di Stato',
      farsiTranslation: 'صحیح: چون مرز مربوط به اتحادیه اروپا است، توقف اجباری گمرکی وجود ندارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_31_5',
      italianText: 'Il segnale raffigurato si trova in vicinanza di un posto di blocco',
      farsiTranslation: 'غلط: این تابلو ایست بازرسی را پیش‌بینی نمی‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_31_6',
      italianText: 'Il segnale raffigurato è posto dietro ai veicoli, per indicarne la nazionalità',
      farsiTranslation: 'غلط: این تابلوی راهنمای جاده است، نه برچسب ملیت روی ماشین.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_31_7',
      italianText: 'Il segnale raffigurato è posto dietro al veicolo, per indicare che esso appartiene ad un cittadino dell’Unione Europea',
      farsiTranslation: 'غلط: این یک تابلوی شهری/جاده‌ای است، نه برچسب روی ماشین.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_31_8',
      italianText: 'Il segnale raffigurato preavvisa l’obbligo di arresto alla frontiera con uno Stato dell’Unione Europea',
      farsiTranslation: 'غلط: ایستادن در مرزهای داخلی اتحادیه اروپا الزامی نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_31_9',
      italianText: 'Il segnale raffigurato obbliga ad arrestarsi per il controllo doganale all’ingresso nel territorio di un Paese europeo',
      farsiTranslation: 'غلط: کنترل گمرکی در مرز کشورهای اتحادیه اروپا وجود ندارد.',
      correctAnswer: 'Falso'
    }
  ]
};
