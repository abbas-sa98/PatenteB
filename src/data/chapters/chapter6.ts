import { Chapter } from '../../types';

export const chapter6: Chapter = {
  id: 6,
  title: 'Segnali di Indicazione',
  farsiTitle: 'تابلوهای راهنما و اطلاعاتی',
  lessons: [
    {
      id: 'topic_6_1',
      title: '6.1 Preavviso di incrocio urbano',
      italianText: `✅ Preavvisa un incrocio urbano e riporta i nomi dei luoghi raggiungibili.
✅ Sfondo bianco indica strada urbana.
✅ Indica la direzione da seguire per raggiungere varie destinazioni (es. centro, stazione).
❌ Non si trova su strade extraurbane. Non preavvisa passaggio a livello o area di sosta.`,
      farsiTranslation: `ویژگی‌ها: پیش‌آگهی تقاطع شهری (Preavviso di incrocio urbano).
قوانین و ویژگی‌ها: این تابلو با پس‌زمینه سفید نشان‌دهنده مسیرها و مقاصد قابل دسترسی در تقاطع‌های داخل شهری است. جهت‌های مختلف برای رسیدن به مرکز شهر (Centro) یا ایستگاه (Stazione) را مشخص می‌کند.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو در جاده‌های خارج شهری (Extraurbane) استفاده نمی‌شود. همچنین به معنای بازگشت به عقب، منطقه پارک (Area di sosta) یا گذرگاه راه‌آهن نیست.`,
      imageUrl: '/images/6-1.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_1_${i + 1}`)
    },
    {
      id: 'topic_6_2',
      title: '6.2 Preavviso di incroci ravvicinati urbani',
      italianText: `✅ Preavvisa due incroci vicini (ravvicinati) su strada urbana.
✅ Indica le direzioni consentite nei vari incroci successivi.
✅ Mostra dove è possibile o vietato svoltare al primo o al secondo incrocio.
❌ Non si trova su strade extraurbane e non indica come lasciare in sosta i veicoli.`,
      farsiTranslation: `ویژگی‌ها: پیش‌آگهی تقاطع‌های شهری نزدیک به هم (Preavviso di incroci ravvicinati urbani).
قوانین و ویژگی‌ها: نشان می‌دهد که دو تقاطع با فاصله کم از یکدیگر قرار دارند و مسیرهای مجاز و مقاصد در هر تقاطع را مشخص می‌کند. مثلاً نشان می‌دهد در تقاطع اول گردش به چپ ممنوع است.
اشتباهات رایج (رد گزینه‌های آزمون): در جاده‌های برون‌شهری نصب نمی‌شود. نحوه پارک خودروها یا مسیرهای ورود به اتوبان را نشان نمی‌دهد.`,
      imageUrl: '/images/6-2.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 14 }, (_, i) => `q_6_2_${i + 1}`)
    },
    {
      id: 'topic_6_3',
      title: '6.3 Preavviso di incrocio urbano con circolazione rotatoria',
      italianText: `✅ Preavvisa un incrocio urbano con circolazione rotatoria (rotatoria).
✅ Contiene lo schema della rotatoria e riporta i nomi delle località raggiungibili.
✅ Specifica quale traversa prendere per una data destinazione.
❌ Non preavvisa un'area pedonale o divieto di transito.`,
      farsiTranslation: `ویژگی‌ها: پیش‌آگهی تقاطع شهری با میدان (Preavviso di incrocio urbano con circolazione rotatoria).
قوانین و ویژگی‌ها: ساختار میدان (Rotatoria) و مقاصدی که از طریق خروجی‌های مختلف آن (Traversa) قابل دسترسی هستند را در یک جاده شهری (پس‌زمینه سفید) نشان می‌دهد.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو جاده مسدود، منطقه پیاده‌رو (Area pedonale) یا ممنوعیت عبور خودروها را نشان نمی‌دهد.`,
      imageUrl: '/images/6-3.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_3_${i + 1}`)
    },
    {
      id: 'topic_6_4',
      title: '6.4 Preavviso di incrocio urbano con limitazione di transito per autocarri',
      italianText: `✅ Preavviso di incrocio urbano.
✅ Vieta agli autocarri di massa a pieno carico > 3,5t di proseguire diritto per una certa direzione.
✅ Consente alle autovetture di proseguire diritto per tutte le direzioni indicate.
❌ Non vieta il transito agli autobus, non è un ingresso autostradale.`,
      farsiTranslation: `ویژگی‌ها: پیش‌آگهی تقاطع شهری با محدودیت عبور برای کامیون‌ها (Limitazione di transito per autocarri).
قوانین و ویژگی‌ها: نشان می‌دهد که کامیون‌های سنگین‌تر از ۳.۵ تن اجازه ادامه مسیر مستقیم به مقصدی خاص را ندارند، اما خودروهای سواری (Autovetture) می‌توانند به تمام مسیرها بروند.
اشتباهات رایج (رد گزینه‌های آزمون): اتوبوس‌ها شامل این محدودیت نیستند. این تابلو فقط در خیابان‌های یک‌طرفه یا در ورودی اتوبان نصب نمی‌شود.`,
      imageUrl: '/images/6-4.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_4_${i + 1}`)
    },
    {
      id: 'topic_6_5',
      title: '6.5 Preavviso di incrocio extraurbano con passaggio a livello',
      italianText: `✅ Preavvisa un incrocio su strada extraurbana (sfondo blu).
✅ Indica la presenza di un passaggio a livello su un ramo dell'incrocio (es. svoltando a destra).
✅ Preannuncia il possibile attraversamento di treni.
❌ Non si trova dopo un incrocio. Non indica una stazione balneare.`,
      farsiTranslation: `ویژگی‌ها: پیش‌آگهی تقاطع برون‌شهری با گذرگاه راه‌آهن (Preavviso di incrocio extraurbano con passaggio a livello).
قوانین و ویژگی‌ها: رنگ آبی نشان‌دهنده جاده خارج از شهر است. نشان می‌دهد که در یکی از شاخه‌های تقاطع (مثلاً در صورت گردش به راست)، گذرگاه راه‌آهن وجود دارد و باید مراقب قطار بود.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو جزو تابلوهای دستوری (Obbligo) نیست. نشان‌دهنده تفرجگاه ساحلی (Stazione balneare) یا شهرک مسکونی نیست.`,
      imageUrl: '/images/6-5.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_5_${i + 1}`)
    },
    {
      id: 'topic_6_6',
      title: '6.6 Preavviso di diramazione autostradale',
      italianText: `✅ Preavvisa uno svincolo autostradale (sfondo verde).
✅ Indica due determinate destinazioni (es. proseguire diritto per una città, svoltare a sinistra per l'aeroporto).
❌ Non si trova su strade extraurbane ordinarie, non vieta la svolta a sinistra, non indica che manca 1 km.`,
      farsiTranslation: `ویژگی‌ها: پیش‌آگهی انشعاب اتوبان (Preavviso di diramazione autostradale).
قوانین و ویژگی‌ها: رنگ سبز نشانگر اتوبان است. این تابلو یک خروجی یا دوراهی در اتوبان را از قبل اطلاع می‌دهد و جهت‌های منتهی به مقاصد مختلف را نشان می‌دهد.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو گردش به چپ را ممنوع نمی‌کند. نشان‌دهنده فاصله (کیلومتر) تا شهر نیست و به معنای نزدیک شدن به پارک یا منطقه تفریحی نمی‌باشد.`,
      imageUrl: '/images/6-6.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_6_${i + 1}`)
    },
    {
      id: 'topic_6_7',
      title: '6.7 Preavviso di diramazione urbana',
      italianText: `✅ Preavvisa un incrocio (su strada urbana, sfondo bianco).
✅ Indica le direzioni per raggiungere determinate destinazioni.
❌ Non si trova solo su strade a senso unico. Non preavvisa l'inizio del senso unico o poligoni di tiro.`,
      farsiTranslation: `ویژگی‌ها: پیش‌آگهی انشعاب شهری (Preavviso di diramazione urbana).
قوانین و ویژگی‌ها: یک تقاطع در داخل شهر را پیش‌آگهی می‌دهد و مسیر رفتن به مقاصد (مثلاً مرکز شهر) را مشخص می‌کند.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو به معنای پایان مسیر دوطرفه و شروع مسیر یک‌طرفه نیست. فقط مخصوص خیابان‌های یک‌طرفه نمی‌باشد.`,
      imageUrl: '/images/6-7.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_7_${i + 1}`)
    },
    {
      id: 'topic_6_8',
      title: '6.8 Preselezione extraurbana',
      italianText: `✅ Posto su strade extraurbane suddivise in più corsie.
✅ Indica la zona di preselezione con diverse destinazioni (per incanalarsi nella corsia giusta).
✅ Posto dove è ancora possibile cambiare corsia.
❌ Non indica obbligo di sorpassare a destra, non preavvisa curve o cavalcavia.`,
      farsiTranslation: `ویژگی‌ها: پیش‌انتخاب مسیر در جاده برون‌شهری (Preselezione extraurbana).
قوانین و ویژگی‌ها: در جاده‌های خارج شهرِ چند لاینه نصب می‌شود تا رانندگان قبل از رسیدن به تقاطع، لاین (Corsia) مناسب برای مقصد خود را انتخاب کنند. تغییر لاین در این نقطه مجاز است.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو سبقت از راست را اجباری نمی‌کند. هشدار دهنده مسیر مستقیم طولانی (Lungo rettilineo) یا پیچ خطرناک نیست.`,
      imageUrl: '/images/6-8.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_8_${i + 1}`)
    },
    {
      id: 'topic_6_9',
      title: '6.9 Preselezione urbana su strada a tre corsie',
      italianText: `✅ Posto su strade urbane (sfondo bianco).
✅ Consente di immettersi nelle corsie di canalizzazione per diverse destinazioni.
✅ Indica ai conducenti quale corsia occupare a seconda della destinazione.
❌ Non preavvisa incrocio autostradale, non indica parcheggio o strade interrotte.`,
      farsiTranslation: `ویژگی‌ها: پیش‌انتخاب مسیر شهری (Preselezione urbana).
قوانین و ویژگی‌ها: در خیابان‌های شهری چند لاینه قرار دارد و نشان می‌دهد هر لاین به چه مقصدی ختم می‌شود تا راننده بتواند مسیر خود را از پیش انتخاب کند.
اشتباهات رایج (رد گزینه‌های آزمون): ربطی به تقاطع اتوبانی (Incrocio autostradale) ندارد. نشانگر فاصله ۵۰۰ متری تا شهر خاصی نیست، بلکه فقط مسیر لاین‌هاست.`,
      imageUrl: '/images/6-9.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_9_${i + 1}`)
    },
    {
      id: 'topic_6_10',
      title: '6.10 Itinerario internazionale',
      italianText: `✅ Indica un itinerario di strada internazionale (sfondo verde).
✅ Riporta il numero della classificazione internazionale della strada (es. E 55).
✅ Può trovarsi all'interno di segnali di preavviso di bivio.
❌ Non identifica le strade extraurbane in generale e non indica uscite autostradali o distanze chilometriche.`,
      farsiTranslation: `ویژگی‌ها: مسیر بین‌المللی (Itinerario internazionale).
قوانین و ویژگی‌ها: این تابلوی سبزرنگ با حرف E و یک عدد، شماره طبقه‌بندی جاده‌های بین‌المللی اروپا را نشان می‌دهد. می‌تواند درون تابلوهای راهنمای دیگر گنجانده شود.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو شماره خروجی اتوبان، مسافت تا مرز (Chilometri al confine)، شماره پل هوایی (Cavalcavia) یا محدودیت سرعت را نشان نمی‌دهد.`,
      imageUrl: '/images/6-10.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_10_${i + 1}`)
    },
    {
      id: 'topic_6_11',
      title: '6.11 Identificazione autostrada',
      italianText: `✅ Identifica un'autostrada (sfondo verde, es. A 25).
✅ Può trovarsi all'interno di un preavviso di svincolo autostradale.
✅ Se abbinato ad una freccia, indica la direzione per un casello.
❌ Non si trova al confine di stato, non indica distanza di sicurezza o velocità minima.`,
      farsiTranslation: `ویژگی‌ها: شناسایی اتوبان (Identificazione autostrada).
قوانین و ویژگی‌ها: این تابلو با حرف A و یک عدد (در پس‌زمینه سبز)، شماره اتوبان را نشان می‌دهد. اگر پیکان داشته باشد، مسیر ورود به باجه عوارضی را مشخص می‌کند.
اشتباهات رایج (رد گزینه‌های آزمون): شماره پل هوایی، فاصله ایمنی، فاصله تا خروجی بعدی یا سرعت توصیه‌شده را نشان نمی‌دهد.`,
      imageUrl: '/images/6-11.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_11_${i + 1}`)
    },
    {
      id: 'topic_6_12',
      title: '6.12 Identificazione strada statale',
      italianText: `✅ Indica il tipo e il numero della strada statale percorsa (sfondo blu, es. SS 2).
✅ Può trovarsi all'interno di un segnale di direzione.
❌ Non indica il numero di piazzole di sosta, chilometri di strada sdrucciolevole o strada sterrata.`,
      farsiTranslation: `ویژگی‌ها: شناسایی جاده ملی/دولتی (Identificazione strada statale).
قوانین و ویژگی‌ها: با حروف SS و یک عدد در پس‌زمینه آبی، جاده‌های دولتی را مشخص می‌کند.
اشتباهات رایج (رد گزینه‌های آزمون): این عدد ربطی به تعداد محل‌های توقف (Piazzole di sosta)، طول مسیر لغزنده یا بن‌بست بودن جاده در ۲ کیلومتر جلوتر ندارد.`,
      imageUrl: '/images/6-12.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_12_${i + 1}`)
    },
    {
      id: 'topic_6_13',
      title: '6.13 Identificazione strada comunale',
      italianText: `✅ Identifica una strada comunale (sfondo bianco, es. SC 19).
✅ Si trova all'inizio di una strada comunale o a completamento dei segnali di direzione.
❌ Non indica la distanza da una stazione dei carabinieri o orari di sosta.`,
      farsiTranslation: `ویژگی‌ها: شناسایی جاده محلی/شهرداری (Identificazione strada comunale).
قوانین و ویژگی‌ها: با حروف SC و یک عدد در پس‌زمینه سفید، جاده‌های تحت کنترل شهرداری را نشان می‌دهد.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو به معنای جاده روستایی/خاکی (Strada di campagna)، فاصله تا پاسگاه پلیس یا ساعات مجاز پارک خودرو نیست.`,
      imageUrl: '/images/6-13.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_6_13_${i + 1}`)
    },
    {
      id: 'topic_6_14',
      title: '6.14 Progressiva distanziometrica autostradale',
      italianText: `✅ Posto lungo un'autostrada (verde).
✅ Indica a sinistra la distanza progressiva dall'inizio dell'autostrada (es. 54 km).
✅ Indica a destra la distanza dal casello d'uscita per la località indicata (es. Piacenza 4 km).
❌ Non indica velocità consigliata né l'inizio di un centro abitato.`,
      farsiTranslation: `ویژگی‌ها: تابلوی فاصله‌سنج مرحله‌ای در اتوبان (Progressiva distanziometrica).
قوانین و ویژگی‌ها: بخش سمت چپ (عدد بزرگ) نشان می‌دهد چند کیلومتر از ابتدای اتوبان طی شده است. بخش سمت راست نشان می‌دهد چند کیلومتر تا خروجی شهر نوشته شده (مثلاً پیاچنزا) باقی مانده است.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو سرعت پیشنهادی را نشان نمی‌دهد. نشانگر شماره اتوبان یا ورود به شهر (Centro abitato) نیست.`,
      imageUrl: '/images/6-14.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_14_${i + 1}`)
    },
    {
      id: 'topic_6_15',
      title: '6.15 Itinerario extraurbano',
      italianText: `✅ Si trova sulle strade extraurbane principali (blu).
✅ Indica la distanza tra il segnale e il prossimo svincolo d'uscita (es. 500 m).
✅ Riporta i nomi delle località raggiungibili uscendo dalla strada.
✅ Le scritte su fondo marrone indicano località turistiche.
❌ Non indica che le località sono a 500m, ma che l'USCITA è a 500m.`,
      farsiTranslation: `ویژگی‌ها: مسیر برون‌شهری (Itinerario extraurbano).
قوانین و ویژگی‌ها: در جاده‌های اصلی خارج شهر نصب می‌شود و مقاصد قابل دسترسی از طریق خروجی بعدی را نشان می‌دهد. عدد پایین (مثلاً ۵۰۰ متر) فاصله تا خود خروجی (Svincolo) است. بخش‌های قهوه‌ای رنگ مربوط به مناطق توریستی است.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو نشان نمی‌دهد که تمام آن شهرها ۵۰۰ متر جلوترند، بلکه فقط "خروجی" ۵۰۰ متر جلوتر است. نشانه پایان جاده یا ورود به شهر نیست.`,
      imageUrl: '/images/6-15.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_15_${i + 1}`)
    },
    {
      id: 'topic_6_16',
      title: '6.16 Conferma autostradale',
      italianText: `✅ Segnale di conferma posto su un'autostrada (sfondo verde).
✅ Riporta le località con le relative distanze in chilometri.
✅ Se fosse blu, si troverebbe su strade extraurbane ordinarie.
❌ Non indica i chilometri già percorsi, ma quelli MANCANTI. Non indica i numeri delle strade da percorrere.`,
      farsiTranslation: `ویژگی‌ها: تابلوی تأیید مسیر در اتوبان (Conferma autostradale).
قوانین و ویژگی‌ها: پس از ورود به اتوبان (یا در طول آن) نصب می‌شود و شهرهای پیش رو و فاصله باقیمانده (بر حسب کیلومتر) تا آن‌ها را تأیید می‌کند.
اشتباهات رایج (رد گزینه‌های آزمون): اعداد روی تابلو شماره اتوبان‌ها نیستند (مثلاً اتوبان شماره ۴۷۲ نیست، بلکه ۴۷۲ کیلومتر تا میلان مانده است). این اعداد مسافت‌های طی شده نیستند.`,
      imageUrl: '/images/6-16.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_6_16_${i + 1}`)
    },
    {
      id: 'topic_6_17',
      title: '6.17 Inizio centro abitato',
      italianText: `✅ Indica l'inizio di un centro abitato e identifica la località raggiunta.
✅ È posto su tutte le strade d'ingresso alla località.
✅ Se barrato da una striscia rossa indica la fine del centro abitato.
❌ Non indica la fine di una provincia o un viadotto. Non è un cartello turistico.`,
      farsiTranslation: `ویژگی‌ها: شروع منطقه مسکونی (Inizio centro abitato).
قوانین و ویژگی‌ها: نام شهر یا روستایی که وارد آن شده‌اید را نشان می‌دهد و در تمامی ورودی‌های آن منطقه نصب می‌شود. (به همراه این تابلو معمولاً محدودیت سرعت ۵۰ کیلومتر اعمال می‌شود).
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو جهت رسیدن به شهر را نشان نمی‌دهد، بلکه نشان می‌دهد در حال ورود به آن هستید. تابلوی منطقه توریستی نیست.`,
      imageUrl: '/images/6-17.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_6_17_${i + 1}`)
    },
    {
      id: 'topic_6_18',
      title: '6.18 Fine centro abitato con segnale di conferma',
      italianText: `✅ Il segnale bianco barrato indica la fine del centro abitato.
✅ Il pannello blu indica le località successive con le distanze chilometriche.
✅ La riga in alto nel pannello blu indica il prossimo centro abitato.
❌ Non indica una strada chiusa al traffico o in salita. I numeri sono distanze, non numeri di statali.`,
      farsiTranslation: `ویژگی‌ها: پایان منطقه مسکونی همراه با تأیید مسیرهای بعدی (Fine centro abitato).
قوانین و ویژگی‌ها: خط قرمز روی تابلوی سفید نشان می‌دهد از شهر خارج شده‌اید. تابلوی آبی‌رنگِ زیر آن، شهرهای بعدی و فاصله تا آن‌ها را اطلاع می‌دهد.
اشتباهات رایج (رد گزینه‌های آزمون): اعداد روی تابلوی آبی شماره جاده (مثلاً جاده ۱۹۰) نیستند، بلکه کیلومتر باقیمانده‌اند. نشانه جاده مسدود یا سربالایی نیست.`,
      imageUrl: '/images/6-18.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_6_18_${i + 1}`)
    },
    {
      id: 'topic_6_19',
      title: '6.19 Localizzazione pronto soccorso',
      italianText: `✅ Indica l'ingresso di un pronto soccorso medico o la direzione per entrarvi.
✅ Posto in corrispondenza di un pronto soccorso.
❌ Non indica una farmacia, un posto di confine o un parcheggio riservato ai medici.`,
      farsiTranslation: `ویژگی‌ها: موقعیت اورژانس / کمک‌های اولیه (Localizzazione pronto soccorso).
قوانین و ویژگی‌ها: این تابلو با علامت صلیب قرمز نشانگر ورودی یا مسیر ورود به اورژانس بیمارستان است.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو داروخانه (Farmacia) را نشان نمی‌دهد. ربطی به مرز کشور سوئیس (Confine con la Svizzera) یا پارکینگ پزشکان ندارد.`,
      imageUrl: '/images/6-19.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_6_19_${i + 1}`)
    },
    {
      id: 'topic_6_20',
      title: '6.20 Localizzazione ospedale',
      italianText: `✅ Indica l'ingresso o la direzione per entrare in un ospedale.
✅ Invita a non fare rumori molesti nelle vicinanze.
❌ Non indica un hotel, un dormitorio pubblico o un parcheggio riservato ai medici.`,
      farsiTranslation: `ویژگی‌ها: موقعیت بیمارستان (Localizzazione ospedale).
قوانین و ویژگی‌ها: تابلویی حاوی نماد تخت و صلیب که نزدیکی یا ورودی بیمارستان را نشان می‌دهد و به صورت ضمنی از رانندگان می‌خواهد از ایجاد صدای مزاحم (بوق زدن) خودداری کنند.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو هتل، مسافرخانه، خوابگاه عمومی (Dormitorio) یا واگن‌های تخت‌خواب‌دار قطار را نشان نمی‌دهد.`,
      imageUrl: '/images/6-20.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_6_20_${i + 1}`)
    },
    {
      id: 'topic_6_21',
      title: '6.21 Localizzazione territoriale: fiume Arno',
      italianText: `✅ Segnale di indicazione che riporta il nome di un fiume (es. Arno).
✅ Si trova in vicinanza di un ponte che attraversa il fiume.
❌ Non indica un pericolo di allagamento, mareggiate o sci nautico.`,
      farsiTranslation: `ویژگی‌ها: موقعیت جغرافیایی (رودخانه) (Localizzazione territoriale).
قوانین و ویژگی‌ها: این تابلوی قهوه‌ای رنگ، نام رودخانه (مثلاً آرنو) را در نزدیکی پلی که از روی آن می‌گذرد نشان می‌دهد. جزو تابلوهای راهنماست.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو هشدار سیلاب (Allagamento)، طوفان دریایی (Mareggiate) یا محل اسکی روی آب نیست.`,
      imageUrl: '/images/6-21.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_6_21_${i + 1}`)
    },
    {
      id: 'topic_6_22',
      title: '6.22 Preavviso di informazioni turistico-alberghiere',
      italianText: `✅ Preavvisa la vicinanza di un ufficio di informazioni turistico-alberghiere (alberghi/motel).
✅ Indica dove chiedere informazioni sulle strutture ricettive.
❌ Non indica il numero di alberghi presenti, l'ingresso di un ospedale, né la presenza di un interprete.`,
      farsiTranslation: `ویژگی‌ها: پیش‌آگهی اطلاعات توریستی و هتلداری (Preavviso di informazioni turistico-alberghiere).
قوانین و ویژگی‌ها: نماد "i" (اطلاعات) نشان می‌دهد که یک دفتر برای دریافت اطلاعات راجع به هتل‌ها و متل‌ها در نزدیکی وجود دارد.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو تعداد هتل‌ها را مشخص نمی‌کند. ربطی به پذیرش بیمارستان (Ospedale) یا داشتن مترجم برای افراد خارجی ندارد.`,
      imageUrl: '/images/6-22.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_6_22_${i + 1}`)
    },
    {
      id: 'topic_6_23',
      title: '6.23 Attraversamento pedonale',
      italianText: `✅ Indica un attraversamento pedonale non regolato da semaforo.
✅ Si trova DIRETTAMENTE in corrispondenza delle strisce. Fuori dai centri abitati è preceduto dal segnale triangolare di pericolo.
✅ Obbliga a fermarsi e dare la precedenza ai pedoni.
❌ Non è posto 150m prima (quello è il segnale triangolare). Non preavvisa una scuola e non consente il sorpasso.`,
      farsiTranslation: `ویژگی‌ها: خط‌کشی عابر پیاده (Attraversamento pedonale).
قوانین و ویژگی‌ها: این تابلوی مربعی آبی‌رنگ دقیقاً روی خط‌کشی عابر (بدون چراغ راهنمایی) نصب می‌شود. راننده موظف است بایستد و به عابران حق تقدم بدهد. در جاده‌های خارج شهر، قبل از این تابلو یک تابلوی مثلثی خطر قرار دارد.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو پیش‌آگهی ۱۵۰ متری نیست (آن تابلو مثلثی است). سبقت گرفتن از خودرویی که برای عابر ایستاده کاملاً ممنوع است. نشانه زیرگذر نیست.`,
      imageUrl: '/images/6-23.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_6_23_${i + 1}`)
    },
    {
      id: 'topic_6_24',
      title: '6.24 Attraversamento ciclabile',
      italianText: `✅ Indica un attraversamento ciclabile.
✅ È posto in corrispondenza delle strisce dell'attraversamento ciclabile.
✅ Indica che bisogna dare la precedenza ai ciclisti che attraversano.
❌ Non vieta il transito ai ciclisti. Non indica una pista ciclabile (longitudinale).`,
      farsiTranslation: `ویژگی‌ها: محل عبور دوچرخه از عرض خیابان (Attraversamento ciclabile).
قوانین و ویژگی‌ها: این تابلوی مربعی دقیقاً در محلی که مسیر دوچرخه خیابان را قطع می‌کند نصب می‌شود. راننده باید احتیاط کرده و به دوچرخه‌سواران حق تقدم بدهد.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو مسیر یا لاین ویژه دوچرخه (Pista ciclabile) نیست، عبور آن‌ها را ممنوع نمی‌کند و ربطی به دوچرخه‌های بدون موتور ندارد (به طور کلی برای دوچرخه‌سواران است).`,
      imageUrl: '/images/6-24.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_24_${i + 1}`)
    },
    {
      id: 'topic_6_25',
      title: '6.25 Scuolabus',
      italianText: `✅ Se posto sul bordo del marciapiede indica la fermata dello scuolabus.
✅ Se posto all'esterno di un autobus segnala che trasporta scolari.
✅ Invita a fare attenzione ai bambini che possono attraversare improvvisamente.
❌ Non vieta il transito ai bambini. Non indica un giardino pubblico.`,
      farsiTranslation: `ویژگی‌ها: اتوبوس مدرسه (Scuolabus).
قوانین و ویژگی‌ها: این تابلوی مربعی زرد/نارنجی اگر کنار خیابان باشد ایستگاه اتوبوس مدرسه است، و اگر روی بدنه اتوبوس باشد نشان می‌دهد که در حال جابجایی دانش‌آموزان است. رانندگان باید شدیداً مراقب پریدن ناگهانی کودکان به خیابان باشند.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو عبور کودکان تنها را ممنوع نمی‌کند و نشانه پارک عمومی نیست. اجباری به توقف کامل برای دادن حق تقدم بی‌دلیل به کودکان (وقتی در خیابان نیستند) نمی‌کند.`,
      imageUrl: '/images/6-25.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_6_25_${i + 1}`)
    },
    {
      id: 'topic_6_26',
      title: '6.26 SOS',
      italianText: `✅ Indica la presenza di un dispositivo (apparecchio) per chiamare il soccorso stradale.
❌ Non indica una zona ospedaliera, né un telefono pubblico per chiamate ordinarie.
❌ Non indica un'area di sosta per ambulanze.`,
      farsiTranslation: `ویژگی‌ها: تلفن اضطراری (SOS).
قوانین و ویژگی‌ها: نشان‌دهنده دستگاهی برای درخواست کمک یا امداد جاده‌ای در مواقع اضطراری است.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو باجه تلفن عمومی، منطقه بیمارستانی یا پارکینگ آمبولانس را نشان نمی‌دهد.`,
      imageUrl: '/images/6-26.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_6_26_${i + 1}`)
    },
    {
      id: 'topic_6_27',
      title: '6.27 Strada senza uscita',
      italianText: `✅ Indica una strada senza sbocco (chiusa) per TUTTI i veicoli (inclusi i motocicli).
✅ È posta all'inizio della strada senza uscita.
❌ Non vieta la sosta o l'accesso a pedoni/veicoli. Non vieta l'inversione di marcia.
❌ Non indica lavori in corso o un incrocio a T.`,
      farsiTranslation: `ویژگی‌ها: جاده بن‌بست (Strada senza uscita).
قوانین و ویژگی‌ها: نشان‌دهنده خیابانی است که انتهای آن بسته است (برای همه ماشین‌ها و موتورها). ورود به آن ممنوع نیست، اما برای خروج باید دور بزنید یا دنده‌عقب بگیرید.
اشتباهات رایج (رد گزینه‌های آزمون): پارک کردن در این خیابان ممنوع نیست. دور زدن (Inversione) مجاز است. این تابلو کارهای جاده‌ای یا تقاطع T شکل را نشان نمی‌دهد.`,
      imageUrl: '/images/6-27.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_6_27_${i + 1}`)
    },
    {
      id: 'topic_6_28',
      title: '6.28 Preavviso di strada senza uscita',
      italianText: `✅ Preavvisa che la strada laterale (es. di destra) è senza uscita per i veicoli.
✅ Consente la svolta a destra (o sinistra, a seconda del segnale) e di proseguire diritto.
✅ Vale per tutti i veicoli (anche motocicli).
❌ Non vieta l'inversione di marcia. Non indica un'area di parcheggio o piazzola di sosta.`,
      farsiTranslation: `ویژگی‌ها: پیش‌آگهی جاده بن‌بست فرعی (Preavviso di strada senza uscita).
قوانین و ویژگی‌ها: به شما می‌گوید خیابانی که در سمت راست (یا چپ) قرار دارد بن‌بست است. ورود به آن آزاد است و رفتن به مسیر مستقیم هم مجاز است.
اشتباهات رایج (رد گزینه‌های آزمون): پیچیدن به آن خیابان ممنوع نیست. نشانگر پارکینگ یا محل توقف موقت نیست. این تابلو محدودیتی برای پیاده‌ها ندارد.`,
      imageUrl: '/images/6-28.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_28_${i + 1}`)
    },
    {
      id: 'topic_6_29',
      title: '6.29 Velocità consigliata',
      italianText: `✅ Indica la velocità che si CONSIGLIA di non superare in condizioni ottimali.
✅ Consente di viaggiare a velocità inferiori (es. 50 km/h) o superiori (es. 70 km/h, nel rispetto dei limiti generali).
✅ Se barrato da una striscia rossa, indica la fine della sua validità.
❌ Non è un limite massimo o minimo obbligatorio. Non indica la distanza di sicurezza.`,
      farsiTranslation: `ویژگی‌ها: سرعت پیشنهادی (Velocità consigliata).
قوانین و ویژگی‌ها: این تابلوی مربعی آبی‌رنگ، سرعتی را پیشنهاد می‌کند که رانندگی با آن (در شرایط ایده‌آل آب‌وهوایی) امن‌تر است. راننده می‌تواند با سرعت کمتر یا بیشتر از این مقدار (البته تا سقف سرعت مجاز جاده) براند. خط قرمز روی آن به معنای پایان این پیشنهاد است.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو حداقل یا حداکثر سرعت اجباری نیست. مسافت طی‌شده از مبدأ یا فاصله ایمنی را نشان نمی‌دهد. عبور خودروهای سنگین را ممنوع نمی‌کند.`,
      imageUrl: '/images/6-29.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_29_${i + 1}`)
    },
    {
      id: 'topic_6_30',
      title: '6.30 Strada riservata ai veicoli a motore',
      italianText: `✅ Indica l'inizio di una strada riservata ALLA CIRCOLAZIONE DEI SOLI VEICOLI A MOTORE.
✅ Vieta il transito alle biciclette e ai veicoli senza motore.
✅ Consente il transito agli autobus. Se barrato rosso, indica la fine della validità.
❌ Non è riservata solo ai taxi o alle autovetture (tutti i veicoli a motore possono entrare, es. autocarri, motocicli).`,
      farsiTranslation: `ویژگی‌ها: مسیر ویژه وسایل نقلیه موتوری (Strada riservata ai veicoli a motore).
قوانین و ویژگی‌ها: فقط خودروها و موتورهای دارای موتور حق ورود دارند. دوچرخه‌ها، پیاده‌ها و گاری‌ها حق عبور ندارند. ورود اتوبوس و کامیون آزاد است.
اشتباهات رایج (رد گزینه‌های آزمون): این مسیر منحصراً برای سواری‌ها یا تاکسی‌ها نیست. دوچرخه‌ها حق ورود ندارند.`,
      imageUrl: '/images/6-30.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_30_${i + 1}`)
    },
    {
      id: 'topic_6_31',
      title: '6.31 Galleria',
      italianText: `✅ Indica l'inizio di una galleria (tunnel).
✅ Ricorda di accendere le luci anabbaglianti.
✅ Vieta di sostare, fermarsi o fare inversione di marcia all'interno.
❌ Non indica l'obbligo di spegnere il motore in caso di traffico normale.`,
      farsiTranslation: `ویژگی‌ها: تونل (Galleria).
قوانین و ویژگی‌ها: ورود به تونل را نشان می‌دهد. راننده موظف است چراغ‌های نور پایین (Anabbaglianti) را روشن کند. پارک کردن، توقف و دور زدن داخل تونل مطلقاً ممنوع است.
اشتباهات رایج (رد گزینه‌های آزمون): نیازی به خاموش کردن موتور در ترافیک روان داخل تونل نیست (فقط در ترافیک‌های مسدود و طولانی). نشانه پل یا زیرگذر عابر نیست.`,
      imageUrl: '/images/6-34.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_31_${i + 1}`)
    },
    {
      id: 'topic_6_32',
      title: '6.32 Comportamento nei tunnel e nei trafori',
      italianText: `Questo segnale riguarda: Comportamento nei tunnel e nei trafori.

Punti essenziali per l'esame:
✅ Percorrendo un lungo tunnel o traforo, in caso di formazione di lunghe file di veicoli, è opportuno aumentare la distanza di sicurezza, per scongiurare, in caso d’incendio, il rapido propagarsi delle fiamme
✅ Percorrendo un lungo tunnel o traforo, in caso d’incendio, bisogna abbandonare velocemente il veicolo, seguendo la segnaletica che porta alle vie di fuga o ai luoghi sicuri protetti da porte tagliafuoco

Studia con attenzione la forma, il colore, la posizione e le categorie di utenti o veicoli indicate.`,
      farsiTranslation: `این درس درباره «Comportamento nei tunnel e nei trafori» است.

برای آزمون به شکل، رنگ، محل نصب تابلو و گروه وسایل نقلیه یا کاربران اشاره‌شده توجه کنید. پرسش‌های رسمی پایین درس پاسخ درست و نادرست را دقیقاً مطابق منبع رسمی نشان می‌دهند.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_6_32_${i + 1}`)
    },
    {
      id: 'topic_6_33',
      title: '6.33 Ponte, viadotto o cavalcavia',
      italianText: `✅ Indica l'inizio di un ponte, viadotto o cavalcavia.
✅ Vieta la sosta, la fermata e l'inversione di marcia.
✅ Può essere esposto al vento laterale (pericolo).
❌ Non vieta il sorpasso a prescindere, ma valgono le regole generali.`,
      farsiTranslation: `ویژگی‌ها: پل یا روگذر (Ponte o Viadotto).
قوانین و ویژگی‌ها: شروع پل را اعلام می‌کند. هرگونه توقف (Sosta و Fermata) و دور زدن روی پل ممنوع است. روی پل‌ها خطر وزش باد جانبی شدید وجود دارد.
اشتباهات رایج (رد گزینه‌های آزمون): سبقت گرفتن روی پل به طور کلی ممنوع نیست (مگر اینکه خط ممتد باشد یا دید کافی نباشد).`,
      imageUrl: '/images/6-35.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_6_33_${i + 1}`)
    },
    {
      id: 'topic_6_34',
      title: '6.34 Svolta a sinistra indiretta',
      italianText: `✅ Indica l'itinerario (percorso) da seguire per poter svoltare a sinistra, quando all'incrocio diretto la svolta a sinistra è vietata.
❌ Non obbliga a svoltare a sinistra per chi vuole andare diritto. Non indica una rotatoria.`,
      farsiTranslation: `ویژگی‌ها: گردش به چپ غیرمستقیم (Svolta a sinistra indiretta).
قوانین و ویژگی‌ها: وقتی در یک تقاطع گردش مستقیم به چپ ممنوع است، این تابلو مسیر جایگزین (مثل دور زدن یک بلوک) را نشان می‌دهد تا بتوانید به سمت چپ بروید.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو به معنای میدان (Rotatoria) نیست و کسی را که می‌خواهد مستقیم برود مجبور به این دور زدن نمی‌کند.`,
      imageUrl: '/images/6-38.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_34_${i + 1}`)
    },
    {
      id: 'topic_6_35',
      title: '6.35 Inversione di marcia',
      italianText: `✅ Indica la presenza di una struttura (es. cavalcavia o sottopassaggio) che consente di invertire il senso di marcia.
✅ Indica la distanza dalla struttura se posto come preavviso.
❌ Non è un obbligo di tornare indietro. Non indica una strada senza uscita.`,
      farsiTranslation: `ویژگی‌ها: دوربرگردان غیرهمسطح (Inversione di marcia).
قوانین و ویژگی‌ها: نشان می‌دهد که جلوتر یک پل هوایی یا زیرگذر وجود دارد که از طریق آن می‌توانید با ایمنی کامل دور بزنید و به مسیر مخالف برگردید.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو دستور و اجبار برای بازگشت به عقب نیست، بلکه فقط راهنمایی می‌کند که چگونه می‌توان این کار را انجام داد. جاده بن‌بست را نشان نمی‌دهد.`,
      imageUrl: '/images/6-37.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_35_${i + 1}`)
    },
    {
      id: 'topic_6_36',
      title: '6.36 Senso unico frontale',
      italianText: `✅ Indica che la strada è a senso unico di circolazione.
✅ Vieta l'inversione di marcia.
✅ Può essere parallelo (freccia orizzontale) o frontale (freccia verticale).
❌ Non è un obbligo di svoltare (è un'indicazione). Non indica diritto di precedenza.`,
      farsiTranslation: `ویژگی‌ها: مسیر یک‌طرفه (Senso unico di circolazione).
قوانین و ویژگی‌ها: این تابلوی مربعی/مستطیلی آبی نشان می‌دهد که کل خیابان یک‌طرفه است. دور زدن (دنده عقب و تغییر مسیر به سمت مخالف) کاملاً ممنوع است. این تابلو دو مدل دارد: روبرو (فلش عمودی) و موازی (فلش افقی).
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو "گردش اجباری" در تقاطع نیست (آن تابلو دایره‌ای است). همچنین به معنای داشتن حق تقدم عبور در تقاطع‌ها نمی‌باشد.`,
      imageUrl: '/images/6-31.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_6_36_${i + 1}`)
    },
    {
      id: 'topic_6_37',
      title: '6.37 Senso unico parallelo',
      italianText: `✅ Indica che la strada è a senso unico di circolazione.
✅ Vieta l'inversione di marcia.
✅ Può essere parallelo (freccia orizzontale) o frontale (freccia verticale).
❌ Non è un obbligo di svoltare (è un'indicazione). Non indica diritto di precedenza.`,
      farsiTranslation: `ویژگی‌ها: مسیر یک‌طرفه (Senso unico di circolazione).
قوانین و ویژگی‌ها: این تابلوی مربعی/مستطیلی آبی نشان می‌دهد که کل خیابان یک‌طرفه است. دور زدن (دنده عقب و تغییر مسیر به سمت مخالف) کاملاً ممنوع است. این تابلو دو مدل دارد: روبرو (فلش عمودی) و موازی (فلش افقی).
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو "گردش اجباری" در تقاطع نیست (آن تابلو دایره‌ای است). همچنین به معنای داشتن حق تقدم عبور در تقاطع‌ها نمی‌باشد.`,
      imageUrl: '/images/6-31.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_37_${i + 1}`)
    },
    {
      id: 'topic_6_38',
      title: '6.38 Preavviso di deviazione consigliata per autocarri',
      italianText: `Questo segnale riguarda: Preavviso di deviazione consigliata per autocarri.

Punti essenziali per l'esame:
✅ Il segnale raffigurato consiglia ai veicoli rappresentati nel pannello di seguire la direzione indicata
✅ Il segnale raffigurato preavvisa una deviazione consigliata per gli autotreni ed autoarticolati in transito

Studia con attenzione la forma, il colore, la posizione e le categorie di utenti o veicoli indicate.`,
      farsiTranslation: `این درس درباره «Preavviso di deviazione consigliata per autocarri» است.

برای آزمون به شکل، رنگ، محل نصب تابلو و گروه وسایل نقلیه یا کاربران اشاره‌شده توجه کنید. پرسش‌های رسمی پایین درس پاسخ درست و نادرست را دقیقاً مطابق منبع رسمی نشان می‌دهند.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_38_${i + 1}`)
    },
    {
      id: 'topic_6_39',
      title: '6.39 Piazzola di sosta',
      italianText: `✅ Indica una piazzola dove è consentita la fermata e la sosta dei veicoli.
✅ Se c'è la scritta SOS, è presente un dispositivo di richiesta soccorso.
❌ Non indica una zona di parcheggio a tempo, né un'area attrezzata per campeggio.`,
      farsiTranslation: `ویژگی‌ها: محوطه توقف حاشیه‌ای (Piazzola di sosta).
قوانین و ویژگی‌ها: مکانی در کنار جاده که برای توقف و پارک کردن موقت طراحی شده است. اگر علامت SOS روی آن باشد، دارای تلفن اضطراری است.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو پارکینگ زمان‌دار (با دیسک ساعت) را نشان نمی‌دهد و استراحتگاه طولانی برای چادر زدن (Campeggio) نیست.`,
      imageUrl: '/images/6-36.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_39_${i + 1}`)
    },
    {
      id: 'topic_6_40',
      title: '6.40 Area pedonale',
      italianText: `✅ Segnala l'inizio di una zona riservata ai pedoni.
✅ Vieta il transito ai veicoli a motore, SALVO quelli autorizzati (es. invalidi, polizia, ambulanze). Le biciclette di norma possono entrare.
❌ Non vieta sempre l'accesso ai residenti (se non indicato sul pannello).`,
      farsiTranslation: `ویژگی‌ها: منطقه عابر پیاده (Area Pedonale).
قوانین و ویژگی‌ها: ورود ماشین‌ها و موتورها به این منطقه ممنوع است. عابران پیاده، دوچرخه‌ها، ماشین‌های پلیس/اورژانس و ماشین معلولین حق عبور دارند. (گاهی با تابلوی متمم، ماشین‌های باربری در ساعات خاصی مجاز می‌شوند).
اشتباهات رایج (رد گزینه‌های آزمون): اهالی محل لزوماً همیشه حق ورود با ماشین را ندارند. این تابلو گذرگاه خط‌کشی عابر پیاده نیست.`,
      imageUrl: '/images/6-41.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_6_40_${i + 1}`)
    },
    {
      id: 'topic_6_41',
      title: '6.41 Zona a traffico limitato',
      italianText: `✅ Indica l'inizio di una zona in cui l'accesso e la circolazione sono limitati a particolari categorie di veicoli o fasce orarie.
✅ Il pannello integrativo specifica chi può entrare e a che ora.
❌ Non è un'area pedonale. Non vieta sempre il transito ai pedoni o alle bici.`,
      farsiTranslation: `ویژگی‌ها: منطقه طرح ترافیک / محدودیت تردد (Zona a traffico limitato - ZTL).
قوانین و ویژگی‌ها: ورود وسایل نقلیه به این محدوده، فقط در ساعات خاصی یا برای افراد خاصی (مثل اهالی محل یا ماشین‌های دارای مجوز) آزاد است که در تابلوی زیر آن نوشته شده است.
اشتباهات رایج (رد گزینه‌های آزمون): نباید با منطقه منحصراً پیاده‌رو اشتباه گرفته شود. عابران پیاده هیچ محدودیتی برای ورود به ZTL ندارند.`,
      imageUrl: '/images/6-42.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_41_${i + 1}`)
    },
    {
      id: 'topic_6_42',
      title: '6.42 Transitabilità: passo aperto con catene o pneumatici da neve',
      italianText: `Questo segnale riguarda: Transitabilità: passo aperto con catene o pneumatici da neve.

Punti essenziali per l'esame:
✅ Il segnale raffigurato permette di conoscere le condizioni di transitabilità del passo dello Stelvio
✅ Il segnale raffigurato indica che è necessario transitare solo con catene o pneumatici invernali

Studia con attenzione la forma, il colore, la posizione e le categorie di utenti o veicoli indicate.`,
      farsiTranslation: `این درس درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است.

برای آزمون به شکل، رنگ، محل نصب تابلو و گروه وسایل نقلیه یا کاربران اشاره‌شده توجه کنید. پرسش‌های رسمی پایین درس پاسخ درست و نادرست را دقیقاً مطابق منبع رسمی نشان می‌دهند.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_42_${i + 1}`)
    },
    {
      id: 'topic_6_43',
      title: '6.43 Transitabilità: tratto terminale o passo chiuso',
      italianText: `Questo segnale riguarda: Transitabilità: tratto terminale o passo chiuso.

Punti essenziali per l'esame:
✅ Il segnale raffigurato consiglia di procedere con particolare prudenza e attenzione
✅ Il segnale raffigurato indica che il passo dello Stelvio non è raggiungibile

Studia con attenzione la forma, il colore, la posizione e le categorie di utenti o veicoli indicate.`,
      farsiTranslation: `این درس درباره «Transitabilità: tratto terminale o passo chiuso» است.

برای آزمون به شکل، رنگ، محل نصب تابلو و گروه وسایل نقلیه یا کاربران اشاره‌شده توجه کنید. پرسش‌های رسمی پایین درس پاسخ درست و نادرست را دقیقاً مطابق منبع رسمی نشان می‌دهند.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_6_43_${i + 1}`)
    },
    {
      id: 'topic_6_44',
      title: '6.44 Inizio strada extraurbana principale',
      italianText: `✅ Indica l'inizio di una strada extraurbana principale (sfondo blu).
✅ Valgono le stesse restrizioni di transito dell'autostrada. Limite massimo 110 km/h.
✅ Se barrato da una striscia rossa, ne indica la fine.
❌ Non indica l'inizio di un centro abitato né l'obbligo di marciare a file parallele.`,
      farsiTranslation: `ویژگی‌ها: شروع جاده اصلی برون‌شهری (Inizio strada extraurbana principale).
قوانین و ویژگی‌ها: تابلوی آبی رنگ. تمام ممنوعیت‌های ورود (مثل عابر و موتورگازی) که در اتوبان بود، اینجا هم صدق می‌کند. حداکثر سرعت در اینجا ۱۱۰ کیلومتر بر ساعت است.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو جاده معمولی خارج شهر نیست، بلکه "اصلی" است (دو بانده و جدا شده). نشانه ورود به شهر نیست.`,
      imageUrl: '/images/6-33.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_44_${i + 1}`)
    },
    {
      id: 'topic_6_45',
      title: '6.45 Uso corsie extraurbane',
      italianText: `✅ Indica le modalità di utilizzo delle corsie.
✅ Ad esempio: divieto per gli autocarri >3,5t di occupare la corsia di sinistra, oppure limiti MINIMI di velocità per le corsie di sorpasso.
❌ Non impone limiti massimi (se sono blu rotondi).`,
      farsiTranslation: `ویژگی‌ها: نحوه استفاده از لاین‌ها (Uso delle corsie).
قوانین و ویژگی‌ها: این تابلوها مشخص می‌کنند که هر لاین برای چه ماشینی مجاز یا ممنوع است. مثلاً ممکن است نشان دهد لاین سمت چپ برای کامیون‌ها ممنوع است، یا حداقل سرعت در لاین سبقت چقدر است.
اشتباهات رایج (رد گزینه‌های آزمون): اگر دایره آبی روی آن‌ها کشیده شده باشد، یعنی حداقل سرعت؛ نباید با حداکثر سرعت اشتباه گرفته شود.`,
      imageUrl: '/images/6-39.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_45_${i + 1}`)
    },
    {
      id: 'topic_6_46',
      title: '6.46 Uso corsie autostradali con velocità minime',
      italianText: `✅ Indica le modalità di utilizzo delle corsie.
✅ Ad esempio: divieto per gli autocarri >3,5t di occupare la corsia di sinistra, oppure limiti MINIMI di velocità per le corsie di sorpasso.
❌ Non impone limiti massimi (se sono blu rotondi).`,
      farsiTranslation: `ویژگی‌ها: نحوه استفاده از لاین‌ها (Uso delle corsie).
قوانین و ویژگی‌ها: این تابلوها مشخص می‌کنند که هر لاین برای چه ماشینی مجاز یا ممنوع است. مثلاً ممکن است نشان دهد لاین سمت چپ برای کامیون‌ها ممنوع است، یا حداقل سرعت در لاین سبقت چقدر است.
اشتباهات رایج (رد گزینه‌های آزمون): اگر دایره آبی روی آن‌ها کشیده شده باشد، یعنی حداقل سرعت؛ نباید با حداکثر سرعت اشتباه گرفته شود.`,
      imageUrl: '/images/6-39.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_6_46_${i + 1}`)
    },
    {
      id: 'topic_6_47',
      title: '6.47 Uso corsie urbane per categorie di veicoli',
      italianText: `✅ Indica le modalità di utilizzo delle corsie.
✅ Ad esempio: divieto per gli autocarri >3,5t di occupare la corsia di sinistra, oppure limiti MINIMI di velocità per le corsie di sorpasso.
❌ Non impone limiti massimi (se sono blu rotondi).`,
      farsiTranslation: `ویژگی‌ها: نحوه استفاده از لاین‌ها (Uso delle corsie).
قوانین و ویژگی‌ها: این تابلوها مشخص می‌کنند که هر لاین برای چه ماشینی مجاز یا ممنوع است. مثلاً ممکن است نشان دهد لاین سمت چپ برای کامیون‌ها ممنوع است، یا حداقل سرعت در لاین سبقت چقدر است.
اشتباهات رایج (رد گزینه‌های آزمون): اگر دایره آبی روی آن‌ها کشیده شده باشد، یعنی حداقل سرعت؛ نباید با حداکثر سرعت اشتباه گرفته شود.`,
      imageUrl: '/images/6-39.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_6_47_${i + 1}`)
    },
    {
      id: 'topic_6_48',
      title: '6.48 Variazione corsie extraurbane in aumento',
      italianText: `✅ Indica l'aumento o la riduzione (restringimento) del numero di corsie disponibili.
✅ Consiglia ai conducenti la manovra da fare (spostarsi a destra/sinistra).
❌ Non indica l'inizio del senso unico o un divieto di transito generico.`,
      farsiTranslation: `ویژگی‌ها: تغییر در تعداد لاین‌های موجود (Variazione delle corsie).
قوانین و ویژگی‌ها: نشان می‌دهد که تعداد لاین‌های جاده در حال افزایش (مثلاً از ۲ به ۳ لاین) یا کاهش (از ۳ به ۲ لاین) است و راننده را راهنمایی می‌کند که در کدام لاین قرار بگیرد.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو نشانه شروع جاده یک‌طرفه یا ممنوعیت سبقت نیست.`,
      imageUrl: '/images/6-40.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_48_${i + 1}`)
    },
    {
      id: 'topic_6_49',
      title: '6.49 Variazione corsie autostradali in diminuzione',
      italianText: `✅ Indica l'aumento o la riduzione (restringimento) del numero di corsie disponibili.
✅ Consiglia ai conducenti la manovra da fare (spostarsi a destra/sinistra).
❌ Non indica l'inizio del senso unico o un divieto di transito generico.`,
      farsiTranslation: `ویژگی‌ها: تغییر در تعداد لاین‌های موجود (Variazione delle corsie).
قوانین و ویژگی‌ها: نشان می‌دهد که تعداد لاین‌های جاده در حال افزایش (مثلاً از ۲ به ۳ لاین) یا کاهش (از ۳ به ۲ لاین) است و راننده را راهنمایی می‌کند که در کدام لاین قرار بگیرد.
اشتباهات رایج (رد گزینه‌های آزمون): این تابلو نشانه شروع جاده یک‌طرفه یا ممنوعیت سبقت نیست.`,
      imageUrl: '/images/6-40.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_6_49_${i + 1}`)
    },
    {
      id: 'topic_6_50',
      title: '6.50 Assistenza meccanica',
      italianText: `✅ Segnalano la presenza di servizi utili a breve distanza (sfondo blu se extraurbano, verde se autostrada).
✅ Es: Distributore (rifornimento), Telefono pubblico, Officina meccanica, Bar/Ristorante, Campeggio (tenda).
❌ Non indicano un obbligo di fermarsi. Non indicano posti di blocco.`,
      farsiTranslation: `ویژگی‌ها: تابلوهای خدمات رفاهی و جاده‌ای.
قوانین و ویژگی‌ها: مکان امکانات رفاهی را نشان می‌دهند (پمپ بنزین، تلفن، تعمیرگاه، کافه، کمپ چادر زدن و...). اگر پس‌زمینه سبز باشد یعنی در اتوبان هستند و اگر آبی باشد در جاده اصلی.
اشتباهات رایج (رد گزینه‌های آزمون): توقف در این مکان‌ها اختیاری است و الزامی ندارد. تابلوی تعمیرگاه به معنای وجود جرثقیل پلیس نیست.`,
      imageUrl: '/images/6-44.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_6_50_${i + 1}`)
    },
    {
      id: 'topic_6_51',
      title: '6.51 Telefono pubblico',
      italianText: `✅ Segnalano la presenza di servizi utili a breve distanza (sfondo blu se extraurbano, verde se autostrada).
✅ Es: Distributore (rifornimento), Telefono pubblico, Officina meccanica, Bar/Ristorante, Campeggio (tenda).
❌ Non indicano un obbligo di fermarsi. Non indicano posti di blocco.`,
      farsiTranslation: `ویژگی‌ها: تابلوهای خدمات رفاهی و جاده‌ای.
قوانین و ویژگی‌ها: مکان امکانات رفاهی را نشان می‌دهند (پمپ بنزین، تلفن، تعمیرگاه، کافه، کمپ چادر زدن و...). اگر پس‌زمینه سبز باشد یعنی در اتوبان هستند و اگر آبی باشد در جاده اصلی.
اشتباهات رایج (رد گزینه‌های آزمون): توقف در این مکان‌ها اختیاری است و الزامی ندارد. تابلوی تعمیرگاه به معنای وجود جرثقیل پلیس نیست.`,
      imageUrl: '/images/6-44.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_51_${i + 1}`)
    },
    {
      id: 'topic_6_52',
      title: '6.52 Rifornimento carburante',
      italianText: `✅ Segnalano la presenza di servizi utili a breve distanza (sfondo blu se extraurbano, verde se autostrada).
✅ Es: Distributore (rifornimento), Telefono pubblico, Officina meccanica, Bar/Ristorante, Campeggio (tenda).
❌ Non indicano un obbligo di fermarsi. Non indicano posti di blocco.`,
      farsiTranslation: `ویژگی‌ها: تابلوهای خدمات رفاهی و جاده‌ای.
قوانین و ویژگی‌ها: مکان امکانات رفاهی را نشان می‌دهند (پمپ بنزین، تلفن، تعمیرگاه، کافه، کمپ چادر زدن و...). اگر پس‌زمینه سبز باشد یعنی در اتوبان هستند و اگر آبی باشد در جاده اصلی.
اشتباهات رایج (رد گزینه‌های آزمون): توقف در این مکان‌ها اختیاری است و الزامی ندارد. تابلوی تعمیرگاه به معنای وجود جرثقیل پلیس نیست.`,
      imageUrl: '/images/6-44.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_6_52_${i + 1}`)
    },
    {
      id: 'topic_6_53',
      title: '6.53 Posteggio per taxi',
      italianText: `✅ Segnalano la presenza di servizi utili a breve distanza (sfondo blu se extraurbano, verde se autostrada).
✅ Es: Distributore (rifornimento), Telefono pubblico, Officina meccanica, Bar/Ristorante, Campeggio (tenda).
❌ Non indicano un obbligo di fermarsi. Non indicano posti di blocco.`,
      farsiTranslation: `ویژگی‌ها: تابلوهای خدمات رفاهی و جاده‌ای.
قوانین و ویژگی‌ها: مکان امکانات رفاهی را نشان می‌دهند (پمپ بنزین، تلفن، تعمیرگاه، کافه، کمپ چادر زدن و...). اگر پس‌زمینه سبز باشد یعنی در اتوبان هستند و اگر آبی باشد در جاده اصلی.
اشتباهات رایج (رد گزینه‌های آزمون): توقف در این مکان‌ها اختیاری است و الزامی ندارد. تابلوی تعمیرگاه به معنای وجود جرثقیل پلیس نیست.`,
      imageUrl: '/images/6-44.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_53_${i + 1}`)
    },
    {
      id: 'topic_6_54',
      title: '6.54 Fermata autobus extraurbano',
      italianText: `✅ Segnalano la presenza di servizi utili a breve distanza (sfondo blu se extraurbano, verde se autostrada).
✅ Es: Distributore (rifornimento), Telefono pubblico, Officina meccanica, Bar/Ristorante, Campeggio (tenda).
❌ Non indicano un obbligo di fermarsi. Non indicano posti di blocco.`,
      farsiTranslation: `ویژگی‌ها: تابلوهای خدمات رفاهی و جاده‌ای.
قوانین و ویژگی‌ها: مکان امکانات رفاهی را نشان می‌دهند (پمپ بنزین، تلفن، تعمیرگاه، کافه، کمپ چادر زدن و...). اگر پس‌زمینه سبز باشد یعنی در اتوبان هستند و اگر آبی باشد در جاده اصلی.
اشتباهات رایج (رد گزینه‌های آزمون): توقف در این مکان‌ها اختیاری است و الزامی ندارد. تابلوی تعمیرگاه به معنای وجود جرثقیل پلیس نیست.`,
      imageUrl: '/images/6-44.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_6_54_${i + 1}`)
    },
    {
      id: 'topic_6_55',
      title: '6.55 Parcheggio di scambio con linee autobus',
      italianText: `✅ Segnalano la presenza di servizi utili a breve distanza (sfondo blu se extraurbano, verde se autostrada).
✅ Es: Distributore (rifornimento), Telefono pubblico, Officina meccanica, Bar/Ristorante, Campeggio (tenda).
❌ Non indicano un obbligo di fermarsi. Non indicano posti di blocco.`,
      farsiTranslation: `ویژگی‌ها: تابلوهای خدمات رفاهی و جاده‌ای.
قوانین و ویژگی‌ها: مکان امکانات رفاهی را نشان می‌دهند (پمپ بنزین، تلفن، تعمیرگاه، کافه، کمپ چادر زدن و...). اگر پس‌زمینه سبز باشد یعنی در اتوبان هستند و اگر آبی باشد در جاده اصلی.
اشتباهات رایج (رد گزینه‌های آزمون): توقف در این مکان‌ها اختیاری است و الزامی ندارد. تابلوی تعمیرگاه به معنای وجود جرثقیل پلیس نیست.`,
      imageUrl: '/images/6-44.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_6_55_${i + 1}`)
    },
    {
      id: 'topic_6_56',
      title: '6.56 Auto al seguito',
      italianText: `✅ Segnalano la presenza di servizi utili a breve distanza (sfondo blu se extraurbano, verde se autostrada).
✅ Es: Distributore (rifornimento), Telefono pubblico, Officina meccanica, Bar/Ristorante, Campeggio (tenda).
❌ Non indicano un obbligo di fermarsi. Non indicano posti di blocco.`,
      farsiTranslation: `ویژگی‌ها: تابلوهای خدمات رفاهی و جاده‌ای.
قوانین و ویژگی‌ها: مکان امکانات رفاهی را نشان می‌دهند (پمپ بنزین، تلفن، تعمیرگاه، کافه، کمپ چادر زدن و...). اگر پس‌زمینه سبز باشد یعنی در اتوبان هستند و اگر آبی باشد در جاده اصلی.
اشتباهات رایج (رد گزینه‌های آزمون): توقف در این مکان‌ها اختیاری است و الزامی ندارد. تابلوی تعمیرگاه به معنای وجود جرثقیل پلیس نیست.`,
      imageUrl: '/images/6-44.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_6_56_${i + 1}`)
    },
    {
      id: 'topic_6_57',
      title: '6.57 Campeggio',
      italianText: `✅ Segnalano la presenza di servizi utili a breve distanza (sfondo blu se extraurbano, verde se autostrada).
✅ Es: Distributore (rifornimento), Telefono pubblico, Officina meccanica, Bar/Ristorante, Campeggio (tenda).
❌ Non indicano un obbligo di fermarsi. Non indicano posti di blocco.`,
      farsiTranslation: `ویژگی‌ها: تابلوهای خدمات رفاهی و جاده‌ای.
قوانین و ویژگی‌ها: مکان امکانات رفاهی را نشان می‌دهند (پمپ بنزین، تلفن، تعمیرگاه، کافه، کمپ چادر زدن و...). اگر پس‌زمینه سبز باشد یعنی در اتوبان هستند و اگر آبی باشد در جاده اصلی.
اشتباهات رایج (رد گزینه‌های آزمون): توقف در این مکان‌ها اختیاری است و الزامی ندارد. تابلوی تعمیرگاه به معنای وجود جرثقیل پلیس نیست.`,
      imageUrl: '/images/6-44.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_6_57_${i + 1}`)
    },
    {
      id: 'topic_6_58',
      title: '6.58 Area attrezzata con impianti di scarico',
      italianText: `✅ Segnalano la presenza di servizi utili a breve distanza (sfondo blu se extraurbano, verde se autostrada).
✅ Es: Distributore (rifornimento), Telefono pubblico, Officina meccanica, Bar/Ristorante, Campeggio (tenda).
❌ Non indicano un obbligo di fermarsi. Non indicano posti di blocco.`,
      farsiTranslation: `ویژگی‌ها: تابلوهای خدمات رفاهی و جاده‌ای.
قوانین و ویژگی‌ها: مکان امکانات رفاهی را نشان می‌دهند (پمپ بنزین، تلفن، تعمیرگاه، کافه، کمپ چادر زدن و...). اگر پس‌زمینه سبز باشد یعنی در اتوبان هستند و اگر آبی باشد در جاده اصلی.
اشتباهات رایج (رد گزینه‌های آزمون): توقف در این مکان‌ها اختیاری است و الزامی ندارد. تابلوی تعمیرگاه به معنای وجود جرثقیل پلیس نیست.`,
      imageUrl: '/images/6-44.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_6_58_${i + 1}`)
    },
    {
      id: 'topic_6_59',
      title: '6.59 Polizia stradale',
      italianText: `✅ Segnalano la presenza di servizi utili a breve distanza (sfondo blu se extraurbano, verde se autostrada).
✅ Es: Distributore (rifornimento), Telefono pubblico, Officina meccanica, Bar/Ristorante, Campeggio (tenda).
❌ Non indicano un obbligo di fermarsi. Non indicano posti di blocco.`,
      farsiTranslation: `ویژگی‌ها: تابلوهای خدمات رفاهی و جاده‌ای.
قوانین و ویژگی‌ها: مکان امکانات رفاهی را نشان می‌دهند (پمپ بنزین، تلفن، تعمیرگاه، کافه، کمپ چادر زدن و...). اگر پس‌زمینه سبز باشد یعنی در اتوبان هستند و اگر آبی باشد در جاده اصلی.
اشتباهات رایج (رد گزینه‌های آزمون): توقف در این مکان‌ها اختیاری است و الزامی ندارد. تابلوی تعمیرگاه به معنای وجود جرثقیل پلیس نیست.`,
      imageUrl: '/images/6-44.jpg',
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_6_59_${i + 1}`)
    }
  ],
  questions: [
    // 6.1 Preavviso di incrocio urbano
    {
      id: 'q_6_1_1',
      italianText: 'Il segnale raffigurato preavvisa un incrocio urbano',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_1_2',
      italianText: 'Il segnale raffigurato riporta i nomi dei luoghi raggiungibili dall’incrocio urbano',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_1_3',
      italianText: 'Il segnale raffigurato preavvisa la svolta a destra per raggiungere la stazione ferroviaria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_1_4',
      italianText: 'Il segnale raffigurato preavvisa la svolta a destra per raggiungere il centro della città',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_1_5',
      italianText: 'Il segnale raffigurato indica di proseguire diritto per raggiungere Sora',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_1_6',
      italianText: 'Il segnale raffigurato preavvisa di proseguire diritto per raggiungere Napoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_1_7',
      italianText: 'Il segnale raffigurato si trova su strade extraurbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_1_8',
      italianText: 'Il segnale raffigurato indica di svoltare a destra per uscire dal centro abitato',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_1_9',
      italianText: 'Il segnale raffigurato indica che per raggiungere il centro della città bisogna tornare indietro',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_1_10',
      italianText: 'Il segnale raffigurato preavvisa un’area di sosta a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_1_11',
      italianText: 'Il segnale raffigurato preavvisa a destra un passaggio a livello senza barriere',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.2 Preavviso di incroci ravvicinati urbani
    {
      id: 'q_6_2_1',
      italianText: 'Il segnale raffigurato preavvisa due incroci vicini',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_2_2',
      italianText: 'Il segnale raffigurato indica che non è possibile svoltare a sinistra al primo incrocio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_2_3',
      italianText: 'Il segnale raffigurato preavvisa di svoltare a sinistra per l’ospedale al secondo incrocio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_2_4',
      italianText: 'Il segnale raffigurato preavvisa di svoltare a destra per via Gemona al primo incrocio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_2_5',
      italianText: 'Il segnale raffigurato preavvisa di svoltare a destra per il centro della città al secondo incrocio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_2_6',
      italianText: 'Il segnale raffigurato preavvisa di svoltare a destra in direzione Trieste al secondo incrocio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_2_7',
      italianText: 'Il segnale raffigurato indica che bisogna svoltare a sinistra al secondo incrocio per raggiungere l’Austria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_2_8',
      italianText: 'Il segnale raffigurato indica due incroci vicini su strada urbana',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_2_9',
      italianText: 'Il segnale raffigurato si trova su strade extraurbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_2_10',
      italianText: 'Il segnale raffigurato indica come lasciare in sosta i veicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_2_11',
      italianText: 'Il segnale raffigurato indica ai veicoli diretti in Austria di tornare indietro',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_2_12',
      italianText: 'Il segnale raffigurato consente di svoltare a sinistra al primo incrocio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_2_13',
      italianText: 'Il segnale raffigurato indica come uscire da un centro commerciale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_2_14',
      italianText: 'Il segnale raffigurato preannuncia le direzioni per l’ingresso in autostrada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incroci ravvicinati urbani» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.3 Preavviso di incrocio urbano con circolazione rotatoria
    {
      id: 'q_6_3_1',
      italianText: 'Il segnale raffigurato è un preavviso di incrocio urbano con circolazione rotatoria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con circolazione rotatoria» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_3_2',
      italianText: 'Il segnale raffigurato preavvisa di svoltare alla prima traversa a destra per andare a Forlì',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con circolazione rotatoria» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_3_3',
      italianText: 'Il segnale raffigurato preavvisa di svoltare alla seconda traversa per raggiungere la tangenziale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con circolazione rotatoria» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_3_4',
      italianText: 'Il segnale raffigurato contiene lo schema della rotatoria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con circolazione rotatoria» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_3_5',
      italianText: 'Il segnale raffigurato riporta i nomi delle località raggiungibili',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con circolazione rotatoria» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_3_6',
      italianText: 'Il segnale raffigurato indica una strada interrotta',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con circolazione rotatoria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_3_7',
      italianText: 'Il segnale raffigurato preavvisa un’area pedonale con verde pubblico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con circolazione rotatoria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_3_8',
      italianText: 'Il segnale raffigurato preavvisa un divieto di transito agli autoveicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con circolazione rotatoria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_3_9',
      italianText: 'Il segnale raffigurato si trova su strade extraurbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con circolazione rotatoria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_3_10',
      italianText: 'Il segnale raffigurato vale solo nelle ore notturne',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con circolazione rotatoria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.4 Preavviso di incrocio urbano con limitazione di transito per autocarri
    {
      id: 'q_6_4_1',
      italianText: 'Il segnale raffigurato è un preavviso di incrocio urbano',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con limitazione di transito per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_4_2',
      italianText: 'Il segnale raffigurato vieta agli autocarri di massa a pieno carico superiore a 3,5 tonnellate di proseguire diritto per Avezzano',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con limitazione di transito per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_4_3',
      italianText: 'Il segnale raffigurato consente alle autovetture di proseguire diritto per Pescara',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con limitazione di transito per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_4_4',
      italianText: 'Il segnale raffigurato preavvisa di svoltare a sinistra per raggiungere l’autostrada Roma-L’Aquila',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con limitazione di transito per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_4_5',
      italianText: 'Il segnale raffigurato vieta agli autocarri di massa a pieno carico superiore a 3,5 tonnellate di continuare diritto per rag- giungere il centro urbano',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con limitazione di transito per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_4_6',
      italianText: 'Il segnale raffigurato vieta anche agli autobus di raggiungere Avezzano',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con limitazione di transito per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_4_7',
      italianText: 'Il segnale raffigurato si trova solo su strade a senso unico di circolazione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con limitazione di transito per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_4_8',
      italianText: 'Il segnale raffigurato si trova all’ingresso di un’autostrada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con limitazione di transito per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_4_9',
      italianText: 'Il segnale raffigurato indica che la corsia centrale è chiusa',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con limitazione di transito per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_4_10',
      italianText: 'Il segnale raffigurato fa parte dei segnali di precedenza',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio urbano con limitazione di transito per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.5 Preavviso di incrocio extraurbano con passaggio a livello
    {
      id: 'q_6_5_1',
      italianText: 'Il segnale raffigurato preavvisa un incrocio su strada extraurbana',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_5_2',
      italianText: 'Il segnale raffigurato indica la presenza di un passaggio a livello svoltando a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_5_3',
      italianText: 'Il segnale raffigurato preavvisa di proseguire diritto per raggiungere Porto T orres',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_5_4',
      italianText: 'Il segnale raffigurato preavvisa di svoltare a sinistra per una località turistica',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_5_5',
      italianText: 'Il segnale raffigurato preavvisa di svoltare a destra per S. Giovanni',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_5_6',
      italianText: 'Il segnale raffigurato preannuncia un pericolo per chi svolta a destra per il possibile attraversamento di treni',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_5_7',
      italianText: 'Il segnale raffigurato si trova dopo un incrocio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_5_8',
      italianText: 'Il segnale raffigurato indica una stazione balneare a sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_5_9',
      italianText: 'Il segnale raffigurato fa parte dei segnali di obbligo',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_5_10',
      italianText: 'Il segnale raffigurato indica che non è possibile raggiungere S. Giovanni',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_5_11',
      italianText: 'Il segnale raffigurato preavvisa un incrocio urbano con zona residenziale a sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di incrocio extraurbano con passaggio a livello» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.6 Preavviso di diramazione autostradale
    {
      id: 'q_6_6_1',
      italianText: 'Il segnale raffigurato indica che per raggiungere Bologna bisogna proseguire diritto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_6_2',
      italianText: 'Il segnale raffigurato preavvisa due determinate destinazioni',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_6_3',
      italianText: 'Il segnale raffigurato preavvisa uno svincolo con svolta a sinistra per l’aeroporto di Linate',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_6_4',
      italianText: 'Il segnale raffigurato preavvisa uno svincolo autostradale',
      farsiTranslation: 'صحیح: این تابلو پیش‌آگهیِ رسیدن به یک خروجی یا تقاطع غیرهمسطح در اتوبان است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_6_5',
      italianText: 'Il segnale raffigurato preavvisa uno svincolo in cui si deve proseguire diritto per andare a Bologna',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_6_6',
      italianText: 'Il segnale raffigurato si trova su strade extraurbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_6_7',
      italianText: 'Il segnale raffigurato vieta la svolta a sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_6_8',
      italianText: 'Il segnale raffigurato indica che manca un chilometro per arrivare a Bologna',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_6_9',
      italianText: 'Il segnale raffigurato obbliga a cambiare corsia per raggiungere Bologna',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_6_10',
      italianText: 'Il segnale raffigurato è posto all’ingresso di un aeroporto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_6_11',
      italianText: 'Il segnale raffigurato indica un parco giochi sulla sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.7 Preavviso di diramazione urbana
    {
      id: 'q_6_7_1',
      italianText: 'Il segnale raffigurato indica che per raggiungere Milano bisogna proseguire diritto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione urbana» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_7_2',
      italianText: 'Il segnale raffigurato indica due determinate destinazioni',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione urbana» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_7_3',
      italianText: 'Il segnale raffigurato preavvisa un incrocio con svolta a destra per il centro cittadino',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione urbana» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_7_4',
      italianText: 'Il segnale raffigurato si può trovare su strade urbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione urbana» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_7_5',
      italianText: 'Il segnale raffigurato preavvisa un incrocio in cui si deve proseguire diritto per andare a Milano',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione urbana» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_7_6',
      italianText: 'Il segnale raffigurato si trova solo su strade a senso unico',
      farsiTranslation: 'غلط: می‌تواند در خیابان‌های دوطرفه شهری نیز نصب شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_7_7',
      italianText: 'Il segnale raffigurato preavvisa un incrocio per il poligono di tiro a segno',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione urbana» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_7_8',
      italianText: 'Il segnale raffigurato indica che svoltando a destra si incontra una strada secondaria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione urbana» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_7_9',
      italianText: 'Il segnale raffigurato preavvisa la fine del doppio senso di circolazione e l’inizio del senso unico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione urbana» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_7_10',
      italianText: 'Il segnale raffigurato indica di svoltare a destra per raggiungere un centro commerciale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di diramazione urbana» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.8 Preselezione extraurbana
    {
      id: 'q_6_8_1',
      italianText: 'Il segnale raffigurato è posto su strade extraurbane suddivise in due corsie',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione extraurbana» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_8_2',
      italianText: 'Il segnale raffigurato preavvisa una zona di preselezione con due destinazioni',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione extraurbana» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_8_3',
      italianText: 'Il segnale raffigurato indica al conducente diretto a Bari di spostarsi sulla corsia di sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione extraurbana» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_8_4',
      italianText: 'Il segnale raffigurato indica al conducente diretto a Pescara di spostarsi sulla corsia di destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione extraurbana» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_8_5',
      italianText: 'Il segnale raffigurato è posto dove è ancora possibile cambiare la corsia di canalizzazione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione extraurbana» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_8_6',
      italianText: 'Il segnale raffigurato indica l’obbligo di sorpassare a destra',
      farsiTranslation: 'غلط: هیچ اجباری برای سبقت از سمت راست وجود ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_8_7',
      italianText: 'Il segnale raffigurato indica che la strada per Bari è interrotta',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione extraurbana» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_8_8',
      italianText: 'Il segnale raffigurato preavvisa a destra un lungo rettilineo',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione extraurbana» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_8_9',
      italianText: 'Il segnale raffigurato preavvisa a sinistra una curva pericolosa',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione extraurbana» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_8_10',
      italianText: 'Il segnale raffigurato preavvisa un obbligo di invertire il senso di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione extraurbana» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_8_11',
      italianText: 'Il segnale raffigurato preavvisa a sinistra un cavalcavia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione extraurbana» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.9 Preselezione urbana su strada a tre corsie
    {
      id: 'q_6_9_1',
      italianText: 'Il segnale raffigurato è posto su strade urbane',
      farsiTranslation: 'صحیح: رنگ سفید نشان‌دهنده استفاده آن در خیابان‌های شهری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_9_2',
      italianText: 'Il segnale raffigurato nelle strade urbane a più corsie consente di immettersi nelle corsie di canalizzazione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione urbana su strada a tre corsie» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_9_3',
      italianText: 'Il segnale raffigurato indica ai conducenti diretti alla località turistica di immettersi nella corsia di mezzo',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione urbana su strada a tre corsie» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_9_4',
      italianText: 'Il segnale raffigurato indica ai conducenti diretti a T erni di mettersi nella corsia di sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione urbana su strada a tre corsie» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_9_5',
      italianText: 'Il segnale raffigurato indica ai conducenti diretti al centro della città di occupare la corsia di destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione urbana su strada a tre corsie» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_9_6',
      italianText: 'Il segnale raffigurato preavvisa un incrocio autostradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione urbana su strada a tre corsie» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_9_7',
      italianText: 'Il segnale raffigurato indica come raggiungere un parcheggio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione urbana su strada a tre corsie» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_9_8',
      italianText: 'Il segnale raffigurato indica che T erni si trova 500 metri dopo aver effettuato la svolta',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione urbana su strada a tre corsie» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_9_9',
      italianText: 'Il segnale raffigurato indica nelle corsie laterali di invertire il senso di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione urbana su strada a tre corsie» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_9_10',
      italianText: 'Il segnale raffigurato indica che la strada per T erni è interrotta',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione urbana su strada a tre corsie» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_9_11',
      italianText: 'Il segnale raffigurato indica che non è più possibile cambiare corsia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preselezione urbana su strada a tre corsie» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.10 Itinerario internazionale
    {
      id: 'q_6_10_1',
      italianText: 'Il segnale raffigurato indica un itinerario di strada internazionale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario internazionale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_10_2',
      italianText: 'Il segnale raffigurato indica il numero della classificazione internazionale della strada',
      farsiTranslation: 'صحیح: عددی که با حرف E همراه است، شماره رسمی آن جاده در شبکه راه‌های اروپاست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_10_3',
      italianText: 'Il segnale raffigurato è posto su strade di importanza internazionale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario internazionale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_10_4',
      italianText: 'Il segnale raffigurato indica l’itinerario internazionale n. 55',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario internazionale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_10_5',
      italianText: 'Il segnale raffigurato si può trovare all’interno di un segnale di preavviso di bivio stradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario internazionale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_10_6',
      italianText: 'Il segnale raffigurato identifica le strade extraurbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario internazionale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_10_7',
      italianText: 'Il segnale raffigurato indica l’uscita autostradale n. 55',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario internazionale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_10_8',
      italianText: 'Il segnale raffigurato indica che mancano 55 chilometri al confine di Stato con l’estero',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario internazionale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_10_9',
      italianText: 'Il segnale raffigurato indica la velocità massima da tenere su quella strada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario internazionale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_10_10',
      italianText: 'Il segnale raffigurato indica il numero del cavalcavia',
      farsiTranslation: 'غلط: شماره پل هوایی را نشان نمی‌دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_10_11',
      italianText: 'Il segnale raffigurato indica che sono stati percorsi 55 chilometri dal punto di origine dell’autostrada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario internazionale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.11 Identificazione autostrada
    {
      id: 'q_6_11_1',
      italianText: 'Il segnale raffigurato indica il numero dell’autostrada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione autostrada» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_11_2',
      italianText: 'Il segnale raffigurato si può trovare all’interno di un segnale di preavviso di svincolo autostradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione autostrada» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_11_3',
      italianText: 'Il segnale raffigurato abbinato ad una freccia, indica la direzione per un casello autostradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione autostrada» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_11_4',
      italianText: 'Il segnale raffigurato identifica l’autostrada n. 25',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione autostrada» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_11_5',
      italianText: 'Il segnale raffigurato si trova al confine con l’Austria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione autostrada» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_11_6',
      italianText: 'Il segnale raffigurato indica il numero del cavalcavia',
      farsiTranslation: 'غلط: شماره پل هوایی را نشان نمی‌دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_11_7',
      italianText: 'Il segnale raffigurato indica la distanza di sicurezza da mantenere dal veicolo che sta davanti',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione autostrada» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_11_8',
      italianText: 'Il segnale raffigurato indica un centro di assistenza a 25 chilometri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione autostrada» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_11_9',
      italianText: 'Il segnale raffigurato indica che il prossimo svincolo autostradale si trova a 25 chilometri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione autostrada» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_11_10',
      italianText: 'Il segnale raffigurato indica il limite minimo di velocità che si consiglia di non superare',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione autostrada» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.12 Identificazione strada statale
    {
      id: 'q_6_12_1',
      italianText: 'Il segnale raffigurato indica il tipo ed il numero di strada percorsa',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada statale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_12_2',
      italianText: 'Il segnale raffigurato si può trovare all’interno di un segnale di direzione o di bivio stradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada statale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_12_3',
      italianText: 'Il segnale raffigurato indica che la strada su cui viaggiamo è una strada statale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada statale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_12_4',
      italianText: 'Il segnale raffigurato indica che stiamo percorrendo la strada statale n. 2',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada statale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_12_5',
      italianText: 'Il segnale raffigurato indica il numero di piazzole di sosta',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada statale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_12_6',
      italianText: 'Il segnale raffigurato indica una strada sdrucciolevole per 2 chilometri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada statale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_12_7',
      italianText: 'Il segnale raffigurato indica una strada stretta per 2 chilometri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada statale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_12_8',
      italianText: 'Il segnale raffigurato indica una strada senza uscita a 2 chilometri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada statale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_12_9',
      italianText: 'Il segnale raffigurato indica una strada senza segnaletica per 2 chilometri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada statale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_12_10',
      italianText: 'Il segnale raffigurato indica una strada sterrata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada statale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.13 Identificazione strada comunale
    {
      id: 'q_6_13_1',
      italianText: 'Il segnale raffigurato si può trovare all’inizio di una strada comunale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada comunale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_13_2',
      italianText: 'Il segnale raffigurato si può trovare a completamento dei segnali di direzione',
      farsiTranslation: 'صحیح: به عنوان اطلاعات تکمیلی درون تابلوهای راهنمای دیگر گنجانده می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_13_3',
      italianText: 'Il segnale raffigurato identifica una strada comunale',
      farsiTranslation: 'صحیح: SC (Strada Comunale) با پس‌زمینه سفید، جاده‌های محلی و شهری را مشخص می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_13_4',
      italianText: 'Il segnale raffigurato si può trovare lungo la strada comunale n. 19',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada comunale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_13_5',
      italianText: 'Il segnale raffigurato si trova a diciannove chilometri dalla più vicina Stazione dei Carabinieri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada comunale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_13_6',
      italianText: 'Il segnale raffigurato si trova all’inizio di una strada di campagna',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada comunale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_13_7',
      italianText: 'Il segnale raffigurato si trova dove la strada è percorribile solo con catene da neve',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada comunale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_13_8',
      italianText: 'Il segnale raffigurato si trova su strade dove la sosta è consentita dopo le ore 19.00',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada comunale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_13_9',
      italianText: 'Il segnale raffigurato indica, su strada urbana, il numero del cavalcavia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Identificazione strada comunale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.14 Progressiva distanziometrica autostradale
    {
      id: 'q_6_14_1',
      italianText: 'Il segnale raffigurato indica la distanza dallo svincolo d’uscita per la località indicata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Progressiva distanziometrica autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_14_2',
      italianText: 'Il segnale raffigurato è posto lungo un’autostrada',
      farsiTranslation: 'صحیح: رنگ سبز نشان می‌دهد که این تابلو در اتوبان نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_14_3',
      italianText: 'Il segnale raffigurato indica a sinistra la distanza progressiva e a destra quella dal casello d’uscita per Piacenza',
      farsiTranslation: 'این یک پرسش رسمی درباره «Progressiva distanziometrica autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_14_4',
      italianText: 'Il segnale raffigurato nella parte sinistra indica la distanza progressiva dal luogo di origine dell’autostrada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Progressiva distanziometrica autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_14_5',
      italianText: 'Il segnale raffigurato indica che mancano 4 chilometri dal casello d’uscita per Piacenza',
      farsiTranslation: 'این یک پرسش رسمی درباره «Progressiva distanziometrica autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_14_6',
      italianText: 'Il segnale raffigurato fa parte dei segnali di indicazione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Progressiva distanziometrica autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_14_7',
      italianText: 'Il segnale raffigurato indica cha mancano 54 chilometri dallo svincolo d’uscita per Piacenza',
      farsiTranslation: 'این یک پرسش رسمی درباره «Progressiva distanziometrica autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_14_8',
      italianText: 'Il segnale raffigurato indica che si sta percorrendo l’autostrada n. 54',
      farsiTranslation: 'این یک پرسش رسمی درباره «Progressiva distanziometrica autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_14_9',
      italianText: 'Il segnale raffigurato indica a sinistra la velocità consigliata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Progressiva distanziometrica autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_14_10',
      italianText: 'Il segnale raffigurato indica che sono stati già percorsi 4 chilometri da Piacenza',
      farsiTranslation: 'این یک پرسش رسمی درباره «Progressiva distanziometrica autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_14_11',
      italianText: 'Il segnale raffigurato indica l’inizio di un centro abitato',
      farsiTranslation: 'غلط: ورودی شهر تابلو سفید دارد.',
      correctAnswer: 'Falso'
    },

    // 6.15 Itinerario extraurbano
    {
      id: 'q_6_15_1',
      italianText: 'Il segnale raffigurato si trova sulle strade extraurbane principali',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_15_2',
      italianText: 'Il segnale raffigurato indica che lo svincolo di uscita per Frosinone è a 500 metri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_15_3',
      italianText: 'Il segnale raffigurato riporta i nomi delle località raggiungibili uscendo dalla strada extraurbana principale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_15_4',
      italianText: 'Il segnale raffigurato indica, con la scritta su fondo marrone, le località turistiche',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_15_5',
      italianText: 'Il segnale raffigurato indica la distanza che c’è tra il segnale e il prossimo svincolo d’uscita',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_15_6',
      italianText: 'Il segnale raffigurato si trova uscendo dal comune di Frosinone',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_15_7',
      italianText: 'Il segnale raffigurato indica che a 500 metri si arriva al comune di Frosinone',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_15_8',
      italianText: 'Il segnale raffigurato indica che tutte le località riportate nel cartello sono distanti 500 metri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_15_9',
      italianText: 'Il segnale raffigurato indica che la strada non è più percorribile e che l’ultima uscita è quella di Frosinone',
      farsiTranslation: 'این یک پرسش رسمی درباره «Itinerario extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_15_10',
      italianText: 'Il segnale raffigurato indica l’inizio di un centro abitato',
      farsiTranslation: 'غلط: ورودی شهر تابلو سفید دارد.',
      correctAnswer: 'Falso'
    },

    // 6.16 Conferma autostradale
    {
      id: 'q_6_16_1',
      italianText: 'Il segnale raffigurato è di conferma autostradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_16_2',
      italianText: 'Il segnale raffigurato riporta le località con le relative distanze in chilometri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_16_3',
      italianText: 'Il segnale raffigurato se di colore blu, si trova su strade extraurbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_16_4',
      italianText: 'Il segnale raffigurato è posto su un’autostrada',
      farsiTranslation: 'صحیح: رنگ سبز نشانگر اتوبان است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_16_5',
      italianText: 'Il segnale raffigurato indica che mancano 180 chilometri per Firenze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_16_6',
      italianText: 'Il segnale raffigurato indica in autostrada la distanza delle località raggiungibili',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_16_7',
      italianText: 'Il segnale raffigurato indica che uscendo dal primo casello autostradale è possibile raggiungere tutte le località indicate',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_16_8',
      italianText: 'Il segnale raffigurato indica che per raggiungere Milano bisogna percorrere l’autostrada n. 472',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_16_9',
      italianText: 'Il segnale raffigurato indica che mancano 180 chilometri per l’area di servizio di Firenze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_16_10',
      italianText: 'Il segnale raffigurato indica, per ogni località, il numero della strada da percorrere',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_16_11',
      italianText: 'Il segnale raffigurato indica i chilometri già fatti dalle località indicate',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_16_12',
      italianText: 'Il segnale raffigurato è posto sulle strade extraurbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Conferma autostradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.17 Inizio centro abitato
    {
      id: 'q_6_17_1',
      italianText: 'Il segnale raffigurato indica l’inizio di un centro abitato',
      farsiTranslation: 'غلط: ورودی شهر تابلو سفید دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_17_2',
      italianText: 'Il segnale raffigurato identifica la località raggiunta',
      farsiTranslation: 'صحیح: اسم شهری (مثلاً Taranto) که به آن رسیده‌اید را معرفی می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_17_3',
      italianText: 'Il segnale raffigurato è posto all’inizio del centro abitato, su tutte le strade d’ingresso alla località indicata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio centro abitato» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_17_4',
      italianText: 'Il segnale raffigurato se barrato da una striscia rossa indica la fine del centro abitato',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio centro abitato» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_17_5',
      italianText: 'Il segnale raffigurato indica una località turistica',
      farsiTranslation: 'غلط: تابلوهای مناطق توریستی در ایتالیا قهوه‌ای رنگ هستند، نه سفید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_17_6',
      italianText: 'Il segnale raffigurato è posto per indicare la fine di una provincia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio centro abitato» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_17_7',
      italianText: 'Il segnale raffigurato indica la direzione da seguire per raggiungere T aranto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio centro abitato» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_17_8',
      italianText: 'Il segnale raffigurato identifica un viadotto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio centro abitato» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.18 Fine centro abitato con segnale di conferma
    {
      id: 'q_6_18_1',
      italianText: 'Il segnale raffigurato indica la fine del centro abitato',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_18_2',
      italianText: 'Il segnale raffigurato nella prima riga in alto del pannello blu indica il prossimo centro abitato',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_18_3',
      italianText: 'Il segnale raffigurato indica la fine del centro abitato e le località successive',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_18_4',
      italianText: 'Il segnale raffigurato nel pannello blu indica, per ogni località, la rispettiva distanza chilometrica',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_18_5',
      italianText: 'Il segnale raffigurato indica che per Napoli mancano 190 chilometri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_18_6',
      italianText: 'Il segnale raffigurato indica che per S. Cesareo mancano 7 chilometri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_18_7',
      italianText: 'Il segnale raffigurato indica l’inizio di un tratto di strada in salita per raggiungere Montecompatri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_18_8',
      italianText: 'Il segnale raffigurato indica che non è possibile raggiungere Montecompatri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_18_9',
      italianText: 'Il segnale raffigurato indica che per raggiungere Napoli bisogna percorrere la strada statale n. 190',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_18_10',
      italianText: 'Il segnale raffigurato indica una strada chiusa al traffico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_18_11',
      italianText: 'Il segnale raffigurato si trova su strade extraurbane principali',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_18_12',
      italianText: 'Il segnale raffigurato indica l’inizio del centro abitato',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fine centro abitato con segnale di conferma» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.19 Localizzazione pronto soccorso
    {
      id: 'q_6_19_1',
      italianText: 'Il segnale raffigurato indica l’ingresso di un pronto soccorso medico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione pronto soccorso» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_19_2',
      italianText: 'Il segnale raffigurato indica la direzione per entrare nel pronto soccorso',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione pronto soccorso» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_19_3',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un pronto soccorso',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione pronto soccorso» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_19_4',
      italianText: 'Il segnale raffigurato indica un posto di confine con la Svizzera',
      farsiTranslation: 'غلط: هیچ ربطی به پرچم سوئیس یا مرز آن کشور ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_19_5',
      italianText: 'Il segnale raffigurato indica una farmacia',
      farsiTranslation: 'غلط: داروخانه در ایتالیا با صلیب سبز نشان داده می‌شود، نه صلیب قرمز.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_19_6',
      italianText: 'Il segnale raffigurato indica la strada da seguire per raggiungere il cimitero',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione pronto soccorso» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_19_7',
      italianText: 'Il segnale raffigurato preavvisa un incrocio a quattro strade',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione pronto soccorso» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_19_8',
      italianText: 'Il segnale raffigurato indica un parcheggio riservato ai medici',
      farsiTranslation: 'غلط: پارکینگ پزشکان تابلوی متفاوتی دارد.',
      correctAnswer: 'Falso'
    },

    // 6.20 Localizzazione ospedale
    {
      id: 'q_6_20_1',
      italianText: 'Il segnale raffigurato indica l’ingresso di un ospedale',
      farsiTranslation: 'غلط: نماد اورژانس و بیمارستان صلیب/تخت است، نه i.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_20_2',
      italianText: 'Il segnale raffigurato, che indica la vicinanza di un ospedale, invita a non fare rumori molesti nelle sue vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione ospedale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_20_3',
      italianText: 'Il segnale raffigurato indica la direzione per entrare nell’ospedale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione ospedale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_20_4',
      italianText: 'Il segnale raffigurato è posto in corrispondenza di un ospedale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione ospedale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_20_5',
      italianText: 'Il segnale raffigurato indica la vicinanza di un hotel',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione ospedale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_20_6',
      italianText: 'Il segnale raffigurato indica la vicinanza di una stazione ferroviaria con vagoni letto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione ospedale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_20_7',
      italianText: 'Il segnale raffigurato indica un parcheggio riservato ai medici',
      farsiTranslation: 'غلط: پارکینگ پزشکان تابلوی متفاوتی دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_20_8',
      italianText: 'Il segnale raffigurato indica un dormitorio pubblico',
      farsiTranslation: 'غلط: مسافرخانه یا خوابگاه عمومی را نشان نمی‌دهد.',
      correctAnswer: 'Falso'
    },

    // 6.21 Localizzazione territoriale: fiume Arno
    {
      id: 'q_6_21_1',
      italianText: 'Il segnale raffigurato si trova in vicinanza di un ponte che attraversa il fiume Arno',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione territoriale: fiume Arno» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_21_2',
      italianText: 'Il segnale raffigurato indica il nome del fiume in vicinanza del ponte che lo attraversa',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione territoriale: fiume Arno» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_21_3',
      italianText: 'Il segnale raffigurato fa parte dei segnali di indicazione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione territoriale: fiume Arno» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_21_4',
      italianText: 'Il segnale raffigurato è posto dove in caso di pioggia la strada si può allagare',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione territoriale: fiume Arno» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_21_5',
      italianText: 'Il segnale raffigurato indica il pericolo di mareggiate',
      farsiTranslation: 'غلط: ربطی به طوفان دریایی و موج‌های بلند دریا ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_21_6',
      italianText: 'Il segnale raffigurato indica la possibilità di effettuare sci nautico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione territoriale: fiume Arno» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_21_7',
      italianText: 'Il segnale raffigurato indica una strada con curve in successione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Localizzazione territoriale: fiume Arno» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.22 Preavviso di informazioni turistico-alberghiere
    {
      id: 'q_6_22_1',
      italianText: 'Il segnale raffigurato preavvisa un ufficio di informazioni turistico-alberghiere',
      farsiTranslation: 'صحیح: علامت i مخفف اطلاعات است و هشدار نزدیکی یک دفتر راهنمای توریستی و رزرو هتل را می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_22_2',
      italianText: 'Il segnale raffigurato indica la possibilità di avere informazioni su alberghi e motel',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di informazioni turistico-alberghiere» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_22_3',
      italianText: 'Il segnale raffigurato indica un posto dove si possono richiedere informazioni sugli alberghi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di informazioni turistico-alberghiere» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_22_4',
      italianText: 'Il segnale raffigurato indica il numero di alberghi che si trovano nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di informazioni turistico-alberghiere» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_22_5',
      italianText: 'Il segnale raffigurato indica, a 150 metri, l’ingresso di un ospedale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di informazioni turistico-alberghiere» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_22_6',
      italianText: 'Il segnale raffigurato indica l’ufficio accettazione dell’ospedale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di informazioni turistico-alberghiere» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_22_7',
      italianText: 'Il segnale raffigurato indica che a 150 metri vi è un albergo con personale interprete per clienti stranieri',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di informazioni turistico-alberghiere» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.23 Attraversamento pedonale
    {
      id: 'q_6_23_1',
      italianText: 'Il segnale raffigurato indica un attraversamento pedonale non regolato',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento pedonale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_23_2',
      italianText: 'Il segnale raffigurato fuori dei centri abitati si trova dopo il segnale di pericolo ATTRAVERSAMENTO PEDONALE',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento pedonale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_23_3',
      italianText: 'Il segnale raffigurato si trova direttamente in corrispondenza delle strisce dell’attraversamento pedonale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento pedonale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_23_4',
      italianText: 'Il segnale raffigurato obbliga i conducenti a fermarsi quando i pedoni transitano sugli attraversamenti pedonali',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento pedonale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_23_5',
      italianText: 'Il segnale raffigurato indica un sottopassaggio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento pedonale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_23_6',
      italianText: 'Il segnale raffigurato è posto 150 metri prima di un attraversamento pedonale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento pedonale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_23_7',
      italianText: 'Il segnale raffigurato se di colore verde è posto in autostrada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento pedonale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_23_8',
      italianText: 'Il segnale raffigurato preavvisa una scuola elementare',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento pedonale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_23_9',
      italianText: 'Il segnale raffigurato consente di sorpassare un veicolo che si è arrestato per dare la precedenza ai pedoni',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento pedonale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.24 Attraversamento ciclabile
    {
      id: 'q_6_24_1',
      italianText: 'Il segnale raffigurato indica un attraversamento ciclabile',
      farsiTranslation: 'صحیح: این تابلو نشان‌دهنده محل عبور دوچرخه‌سواران از عرض خیابان است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_24_2',
      italianText: 'Il segnale raffigurato è posto in corrispondenza delle strisce dell’attraversamento ciclabile',
      farsiTranslation: 'صحیح: دقیقاً در کنار خطوطِ کشیده شده روی جاده برای دوچرخه‌ها نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_24_3',
      italianText: 'Il segnale raffigurato indica che bisogna dare la precedenza ai ciclisti che attraversano sulle strisce',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento ciclabile» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_24_4',
      italianText: 'Il segnale raffigurato è abbinato alle strisce di attraversamento ciclabile',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento ciclabile» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_24_5',
      italianText: 'Il segnale raffigurato invita ad usare prudenza perché possiamo trovare ciclisti che attraversano la carreggiata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento ciclabile» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_24_6',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli senza motore',
      farsiTranslation: 'صحیح: چون جاده "اختصاصی" وسایل موتوری است، دوچرخه و گاری اجازه ورود ندارند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_24_7',
      italianText: 'Il segnale raffigurato vieta il transito ai ciclisti',
      farsiTranslation: 'غلط: عبور آن‌ها را ممنوع نمی‌کند، بلکه مکان امن عبورشان را مشخص می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_24_8',
      italianText: 'Il segnale raffigurato indica una pista ciclabile',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento ciclabile» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_24_9',
      italianText: 'Il segnale raffigurato indica ai ciclisti di svoltare a sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento ciclabile» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_24_10',
      italianText: 'Il segnale raffigurato obbliga i ciclisti a dare la precedenza ai veicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Attraversamento ciclabile» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.25 Scuolabus
    {
      id: 'q_6_25_1',
      italianText: 'Il segnale raffigurato, se posto sul bordo del marciapiede, indica la fermata di uno scuolabus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Scuolabus» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_25_2',
      italianText: 'Il segnale raffigurato, se posto all’esterno di un autobus, segnala che esso trasporta scolari',
      farsiTranslation: 'این یک پرسش رسمی درباره «Scuolabus» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_25_3',
      italianText: 'Il segnale raffigurato può indicare la fermata di un autobus per trasporto scolari',
      farsiTranslation: 'این یک پرسش رسمی درباره «Scuolabus» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_25_4',
      italianText: 'Il segnale raffigurato invita a fare attenzione ai bambini che possono attraversare improvvisamente la strada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Scuolabus» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_25_5',
      italianText: 'Il segnale raffigurato invita a fare attenzione perché possono esserci bambini discesi dallo scuolabus che possono attra- versare improvvisamente la strada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Scuolabus» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_25_6',
      italianText: 'Il segnale raffigurato vieta il transito ai bambini non accompagnati',
      farsiTranslation: 'این یک پرسش رسمی درباره «Scuolabus» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_25_7',
      italianText: 'Il segnale raffigurato indica la presenza di giardini pubblici',
      farsiTranslation: 'این یک پرسش رسمی درباره «Scuolabus» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_25_8',
      italianText: 'Il segnale raffigurato indica che bisogna obbligatoriamente dare precedenza ai bambini che attraversano',
      farsiTranslation: 'این یک پرسش رسمی درباره «Scuolabus» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.26 SOS
    {
      id: 'q_6_26_1',
      italianText: 'Il segnale raffigurato indica la presenza di un dispositivo da utilizzare in caso di richiesta di soccorso stradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «SOS» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_26_2',
      italianText: 'Il segnale raffigurato è posto su un dispositivo di chiamata per assistenza stradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «SOS» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_26_3',
      italianText: 'Il segnale raffigurato indica la presenza di un apparecchio per chiamare il soccorso stradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «SOS» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_26_4',
      italianText: 'Il segnale raffigurato indica una zona ospedaliera',
      farsiTranslation: 'غلط: این تابلو محوطه بیمارستانی را نشان نمی‌دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_26_5',
      italianText: 'Il segnale raffigurato indica la presenza di un telefono pubblico',
      farsiTranslation: 'این یک پرسش رسمی درباره «SOS» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_26_6',
      italianText: 'Il segnale raffigurato indica un’area di sosta per ambulanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «SOS» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_26_7',
      italianText: 'Il segnale raffigurato preavvisa una scuola secondaria statale',
      farsiTranslation: 'این یک پرسش رسمی درباره «SOS» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.27 Strada senza uscita
    {
      id: 'q_6_27_1',
      italianText: 'Il segnale raffigurato è posto all’inizio di una strada senza uscita per i veicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_27_2',
      italianText: 'Il segnale raffigurato vale anche per i motocicli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_27_3',
      italianText: 'Il segnale raffigurato indica una strada senza sbocco per i veicoli',
      farsiTranslation: 'صحیح: نوار قرمز در بالا نشان می‌دهد که این خیابان برای وسایل نقلیه خروجی ندارد (بن‌بست است).',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_27_4',
      italianText: 'Il segnale raffigurato vieta la sosta',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_27_5',
      italianText: 'Il segnale raffigurato preavvisa un incrocio a forma di “T”',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_27_6',
      italianText: 'Il segnale raffigurato è posto in vicinanza di una tabaccheria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_27_7',
      italianText: 'Il segnale raffigurato indica lavori in corso',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_27_8',
      italianText: 'Il segnale raffigurato vieta l’inversione di marcia',
      farsiTranslation: 'صحیح: دور زدن در خیابان یک‌طرفه ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_27_9',
      italianText: 'Il segnale raffigurato vieta di entrare anche ai pedoni',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.28 Preavviso di strada senza uscita
    {
      id: 'q_6_28_1',
      italianText: 'Il segnale raffigurato preavvisa che la strada di destra è senza uscita per i veicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_28_2',
      italianText: 'Il segnale raffigurato consente la svolta a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_28_3',
      italianText: 'Il segnale raffigurato consente di proseguire diritto',
      farsiTranslation: 'صحیح: خیابان اصلی (روبه‌رو) باز است و می‌توانید مستقیم بروید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_28_4',
      italianText: 'Il segnale raffigurato vale anche per i motocicli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_28_5',
      italianText: 'Il segnale raffigurato fa parte dei segnali di indicazione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_28_6',
      italianText: 'Il segnale raffigurato vieta la manovra di inversione di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_28_7',
      italianText: 'Il segnale raffigurato vieta la svolta a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_28_8',
      italianText: 'Il segnale raffigurato indica una piazzola di sosta sulla destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_28_9',
      italianText: 'Il segnale raffigurato preavvisa un’area di parcheggio sulla destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_28_10',
      italianText: 'Il segnale raffigurato vale anche per i pedoni',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di strada senza uscita» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.29 Velocità consigliata
    {
      id: 'q_6_29_1',
      italianText: 'Il segnale raffigurato indica la velocità che si consiglia di non superare in condizioni ottimali di traffico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Velocità consigliata» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_29_2',
      italianText: 'Il segnale raffigurato consente di viaggiare a 50 km/h',
      farsiTranslation: 'این یک پرسش رسمی درباره «Velocità consigliata» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_29_3',
      italianText: 'Il segnale raffigurato può essere abbinato con un pannello che indica la lunghezza del tratto di strada dove si consiglia di non superare la velocità indicata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Velocità consigliata» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_29_4',
      italianText: 'Il segnale raffigurato se barrato da una striscia rossa indica la fine della sua validità',
      farsiTranslation: 'صحیح: خط قرمز روی آن یعنی پایان این توصیه.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_29_5',
      italianText: 'Il segnale raffigurato consente, sulle strade extraurbane, di viaggiare a 70 km/h',
      farsiTranslation: 'این یک پرسش رسمی درباره «Velocità consigliata» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_29_6',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che superano a pieno carico 60 tonnellate',
      farsiTranslation: 'این یک پرسش رسمی درباره «Velocità consigliata» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_29_7',
      italianText: 'Il segnale raffigurato indica un limite minimo di velocità',
      farsiTranslation: 'این یک پرسش رسمی درباره «Velocità consigliata» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_29_8',
      italianText: 'Il segnale raffigurato vieta di superare la velocità indicata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Velocità consigliata» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_29_9',
      italianText: 'Il segnale raffigurato indica la distanza di sicurezza da mantenere dal veicolo che sta davanti',
      farsiTranslation: 'این یک پرسش رسمی درباره «Velocità consigliata» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_29_10',
      italianText: 'Il segnale raffigurato indica che non è possibile viaggiare ad una velocità più bassa di quella indicata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Velocità consigliata» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_29_11',
      italianText: 'Il segnale raffigurato indica i chilometri già fatti dal punto di origine della strada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Velocità consigliata» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.30 Strada riservata ai veicoli a motore
    {
      id: 'q_6_30_1',
      italianText: 'Il segnale raffigurato indica una strada riservata alla circolazione dei soli veicoli a motore',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada riservata ai veicoli a motore» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_30_2',
      italianText: 'Il segnale raffigurato vieta il transito alle biciclette',
      farsiTranslation: 'صحیح: به دلیل سرعت بالا، دوچرخه‌ها حق ورود به این جاده را ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_30_3',
      italianText: 'Il segnale raffigurato viene posto all’inizio di una strada riservata alla circolazione dei veicoli a motore',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada riservata ai veicoli a motore» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_30_4',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli senza motore',
      farsiTranslation: 'صحیح: چون جاده "اختصاصی" وسایل موتوری است، دوچرخه و گاری اجازه ورود ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_30_5',
      italianText: 'Il segnale raffigurato consente il transito agli autobus',
      farsiTranslation: 'صحیح: اتوبوس‌ها نیز دارای موتورند و ورودشان آزاد است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_30_6',
      italianText: 'Il segnale raffigurato se barrato da una striscia rossa indica la fine della sua validità',
      farsiTranslation: 'صحیح: خط قرمز روی آن یعنی پایان این توصیه.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_30_7',
      italianText: 'Il segnale raffigurato indica una strada riservata solo ai taxi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada riservata ai veicoli a motore» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_30_8',
      italianText: 'Il segnale raffigurato indica un parcheggio per le sole autovetture',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada riservata ai veicoli a motore» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_30_9',
      italianText: 'Il segnale raffigurato consente ad una bicicletta di percorrere quella strada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada riservata ai veicoli a motore» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_30_10',
      italianText: 'Il segnale raffigurato vieta il transito ad un autocarro',
      farsiTranslation: 'این یک پرسش رسمی درباره «Strada riservata ai veicoli a motore» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.31 Galleria
    {
      id: 'q_6_31_1',
      italianText: 'Il segnale raffigurato è posto all’inizio di una galleria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_31_2',
      italianText: 'Il segnale raffigurato preavvisa una galleria autostradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_31_3',
      italianText: 'Il segnale raffigurato ricorda di spegnere il motore in caso di arresto prolungato in galleria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_31_4',
      italianText: 'Il segnale raffigurato ricorda di non sostare e di non fermarsi in galleria, salvo diversa segnalazione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_31_5',
      italianText: 'Il segnale raffigurato invita a tenere ben saldo lo sterzo per fronteggiare eventuali colpi di vento all’uscita della galleria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_31_6',
      italianText: 'Il segnale raffigurato indica una strada chiusa',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_31_7',
      italianText: 'Il segnale raffigurato indica lavori in corso',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_31_8',
      italianText: 'Il segnale raffigurato indica una galleria non illuminata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_31_9',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che superano 3,5 metri di altezza',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_31_10',
      italianText: 'Il segnale raffigurato indica l’inizio di un ponte',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_31_11',
      italianText: 'Il segnale raffigurato vieta il sorpasso',
      farsiTranslation: 'این یک پرسش رسمی درباره «Galleria» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.32 Comportamento nei tunnel e nei trafori
    {
      id: 'q_6_32_1',
      italianText: 'Percorrendo un lungo tunnel o traforo, in caso di formazione di lunghe file di veicoli, è opportuno aumentare la distanza di sicurezza, per scongiurare, in caso d’incendio, il rapido propagarsi delle fiamme',
      farsiTranslation: 'این یک پرسش رسمی درباره «Comportamento nei tunnel e nei trafori» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_32_2',
      italianText: 'Percorrendo un lungo tunnel o traforo, in caso d’incendio, bisogna abbandonare velocemente il veicolo, seguendo la segnaletica che porta alle vie di fuga o ai luoghi sicuri protetti da porte tagliafuoco',
      farsiTranslation: 'این یک پرسش رسمی درباره «Comportamento nei tunnel e nei trafori» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_32_3',
      italianText: 'Percorrendo un lungo tunnel o traforo, in caso d’incendio, bisogna attenersi alle istruzioni vocali del personale di servizio o dei vigili del fuoco, per evitare di incamminarsi nella direzione sbagliata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Comportamento nei tunnel e nei trafori» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_32_4',
      italianText: 'Il pannello in figura, posto all’interno di una galleria, indica la presenza di una via di fuga (FIG 334)',
      farsiTranslation: 'این یک پرسش رسمی درباره «Comportamento nei tunnel e nei trafori» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_32_5',
      italianText: 'Il pannello in figura, posto all’interno di una galleria, indica la presenza di un estintore (FIG 335)',
      farsiTranslation: 'این یک پرسش رسمی درباره «Comportamento nei tunnel e nei trafori» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_32_6',
      italianText: 'Il pannello in figura obbliga a tornare indietro all’imbocco della galleria (FIG 334)',
      farsiTranslation: 'این یک پرسش رسمی درباره «Comportamento nei tunnel e nei trafori» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_32_7',
      italianText: 'Percorrendo un lungo tunnel o traforo, in caso d’incendio, bisogna seguire la segnaletica di emergenza, anche se in netto contrasto con gli ordini vocali impartiti dai vigili del fuoco',
      farsiTranslation: 'این یک پرسش رسمی درباره «Comportamento nei tunnel e nei trafori» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.33 Ponte, viadotto o cavalcavia
    {
      id: 'q_6_33_1',
      italianText: 'Il segnale raffigurato si può trovare all’inizio di un ponte, di un viadotto o di un cavalcavia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Ponte, viadotto o cavalcavia» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_33_2',
      italianText: 'Il segnale raffigurato può essere abbinato ad un pannello che indica la lunghezza del cavalcavia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Ponte, viadotto o cavalcavia» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_33_3',
      italianText: 'Il segnale raffigurato invita a fare particolare attenzione in caso di forte vento',
      farsiTranslation: 'این یک پرسش رسمی درباره «Ponte, viadotto o cavalcavia» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_33_4',
      italianText: 'Il segnale raffigurato invita a tenere ben saldo lo sterzo per fronteggiare eventuali colpi di vento laterale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Ponte, viadotto o cavalcavia» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_33_5',
      italianText: 'Il segnale raffigurato prescrive il divieto di sorpasso tra autoveicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Ponte, viadotto o cavalcavia» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_33_6',
      italianText: 'Il segnale raffigurato indica l’inizio di una galleria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Ponte, viadotto o cavalcavia» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_33_7',
      italianText: 'Il segnale raffigurato indica che si sta per transitare sotto un ponte',
      farsiTranslation: 'این یک پرسش رسمی درباره «Ponte, viadotto o cavalcavia» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.34 Svolta a sinistra indiretta
    {
      id: 'q_6_34_1',
      italianText: 'Il segnale raffigurato indica il percorso da fare per prendere la strada di sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Svolta a sinistra indiretta» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_34_2',
      italianText: 'Il segnale raffigurato indica che non è possibile svoltare a sinistra in modo diretto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Svolta a sinistra indiretta» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_34_3',
      italianText: 'Il segnale raffigurato consente di proseguire diritto',
      farsiTranslation: 'صحیح: خیابان اصلی (روبه‌رو) باز است و می‌توانید مستقیم بروید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_34_4',
      italianText: 'Il segnale raffigurato consente la svolta a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Svolta a sinistra indiretta» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_34_5',
      italianText: 'Il segnale raffigurato interessa i conducenti che intendono prendere la strada di sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Svolta a sinistra indiretta» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_34_6',
      italianText: 'Il segnale raffigurato obbliga a svoltare a sinistra al prossimo incrocio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Svolta a sinistra indiretta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_34_7',
      italianText: 'Il segnale raffigurato indica un parcheggio a sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Svolta a sinistra indiretta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_34_8',
      italianText: 'Il segnale raffigurato non vale per le biciclette ed i ciclomotori',
      farsiTranslation: 'این یک پرسش رسمی درباره «Svolta a sinistra indiretta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_34_9',
      italianText: 'Il segnale raffigurato vieta la svolta a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Svolta a sinistra indiretta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_34_10',
      italianText: 'Il segnale raffigurato indica il percorso degli autobus che hanno fermate nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Svolta a sinistra indiretta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.35 Inversione di marcia
    {
      id: 'q_6_35_1',
      italianText: 'Il segnale raffigurato indica, su strade a carreggiate separate, la presenza di un cavalcavia per effettuare l’inversione di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inversione di marcia» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_35_2',
      italianText: 'Il segnale raffigurato indica, su strade a carreggiate separate, un sottopassaggio per invertire il senso di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inversione di marcia» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_35_3',
      italianText: 'Il segnale raffigurato è posto su una strada a carreggiate separate',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inversione di marcia» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_35_4',
      italianText: 'Il segnale raffigurato indica la presenza di una struttura (cavalcavia o sottopassaggio) che consente di tornare indietro',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inversione di marcia» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_35_5',
      italianText: 'Il segnale raffigurato, se su fondo verde, indica, su un’autostrada, la presenza di un cavalcavia per effettuare l’inversio- ne di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inversione di marcia» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_35_6',
      italianText: 'Il segnale raffigurato indica che la strada è interrotta a causa di lavori in corso',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inversione di marcia» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_35_7',
      italianText: 'Il segnale raffigurato indica l’inizio di un lungo rettilineo',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inversione di marcia» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_35_8',
      italianText: 'Il segnale raffigurato indica l’inizio di una strada extraurbana principale',
      farsiTranslation: 'صحیح: این تابلو (آبی رنگ) شروع جاده اصلی برون‌شهری است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_35_9',
      italianText: 'Il segnale raffigurato indica la vicinanza di un incrocio a raso (allo stesso livello del piano stradale)',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inversione di marcia» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_35_10',
      italianText: 'Il segnale raffigurato obbliga ad invertire il senso di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inversione di marcia» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.36 Senso unico frontale
    {
      id: 'q_6_36_1',
      italianText: 'Il segnale raffigurato indica un senso unico frontale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico frontale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_36_2',
      italianText: 'Il segnale raffigurato indica che la circolazione su quel tratto di strada è a senso unico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico frontale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_36_3',
      italianText: 'Il segnale raffigurato indica che dopo di esso è vietata l’inversione di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico frontale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_36_4',
      italianText: 'Il segnale raffigurato indica l’inizio di una strada a senso unico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico frontale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_36_5',
      italianText: 'Il segnale raffigurato indica l’obbligo di proseguire diritto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico frontale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_36_6',
      italianText: 'Il segnale raffigurato indica il divieto di svoltare a destra o a sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico frontale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_36_7',
      italianText: 'Il segnale raffigurato indica di circolare su una sola corsia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico frontale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_36_8',
      italianText: 'Il segnale raffigurato indica un restringimento della carreggiata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico frontale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_36_9',
      italianText: 'Il segnale raffigurato indica che si viaggia per file parallele',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico frontale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.37 Senso unico parallelo
    {
      id: 'q_6_37_1',
      italianText: 'Il segnale raffigurato indica che la strada su cui è posto è a senso unico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico parallelo» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_37_2',
      italianText: 'Il segnale A di figura indica che svoltando a sinistra la strada è a senso unico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico parallelo» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_37_3',
      italianText: 'Il segnale raffigurato indica che svoltando nel senso della freccia non si incrociano veicoli provenienti dal senso opposto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico parallelo» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_37_4',
      italianText: 'Il segnale raffigurato indica che una volta svoltato nel senso della freccia è vietata l’inversione di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico parallelo» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_37_5',
      italianText: 'Il segnale raffigurato indica che nel tratto di strada in cui è posto si deve sorpassare a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico parallelo» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_37_6',
      italianText: 'Il segnale A di figura indica che è obbligatorio svoltare a sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico parallelo» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_37_7',
      italianText: 'Il segnale raffigurato indica che è vietato proseguire diritto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico parallelo» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_37_8',
      italianText: 'Il segnale raffigurato indica che si deve marciare per file parallele',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico parallelo» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_37_9',
      italianText: 'Il segnale raffigurato indica che svoltando nel senso della freccia la sosta è consentita solo a sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico parallelo» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_37_10',
      italianText: 'Il segnale raffigurato indica un parcheggio libero nel senso della freccia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Senso unico parallelo» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.38 Preavviso di deviazione consigliata per autocarri
    {
      id: 'q_6_38_1',
      italianText: 'Il segnale raffigurato consiglia ai veicoli rappresentati nel pannello di seguire la direzione indicata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_38_2',
      italianText: 'Il segnale raffigurato preavvisa una deviazione consigliata per gli autotreni ed autoarticolati in transito',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_38_3',
      italianText: 'Il segnale raffigurato consiglia di svoltare a destra alle categorie dei veicoli rappresentati',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_38_4',
      italianText: 'Il segnale raffigurato non è un segnale di obbligo',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_38_5',
      italianText: 'Il segnale raffigurato consiglia agli autotreni e agli autoarticolati la direzione per non attraversare il centro abitato',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_38_6',
      italianText: 'Il segnale raffigurato vieta la svolta a destra agli autotreni ed autoarticolati',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_38_7',
      italianText: 'Il segnale raffigurato indica agli autocarri di sorpassare a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_38_8',
      italianText: 'Il segnale raffigurato indica agli autocarri la direzione per il centro cittadino',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_38_9',
      italianText: 'Il segnale raffigurato preannuncia l’obbligo di svoltare subito a destra per i veicoli rappresentati',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_38_10',
      italianText: 'Il segnale raffigurato indica che i veicoli rappresentati nel pannello devono immediatamente svoltare a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_38_11',
      italianText: 'Il segnale raffigurato preavvisa agli autocarri di spostarsi sulla corsia di destra per superare un ostacolo',
      farsiTranslation: 'این یک پرسش رسمی درباره «Preavviso di deviazione consigliata per autocarri» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.39 Piazzola di sosta
    {
      id: 'q_6_39_1',
      italianText: 'Il segnale raffigurato indica una piazzola a lato della carreggiata per effettuare la fermata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Piazzola di sosta» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_39_2',
      italianText: 'Il segnale raffigurato è posto in vicinanza di una piazzola per effettuare una fermata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Piazzola di sosta» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_39_3',
      italianText: 'Il segnale raffigurato si trova su strada extraurbana',
      farsiTranslation: 'این یک پرسش رسمی درباره «Piazzola di sosta» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_39_4',
      italianText: 'Il segnale raffigurato può essere abbinato ad un pannello che indica la distanza che c’è tra il segnale e la piazzola',
      farsiTranslation: 'این یک پرسش رسمی درباره «Piazzola di sosta» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_39_5',
      italianText: 'Il segnale raffigurato preavvisa un allargamento della carreggiata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Piazzola di sosta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_39_6',
      italianText: 'Il segnale raffigurato indica che la sosta è consentita solo per 3 ore',
      farsiTranslation: 'این یک پرسش رسمی درباره «Piazzola di sosta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_39_7',
      italianText: 'Il segnale raffigurato indica un’area di campeggio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Piazzola di sosta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_39_8',
      italianText: 'Il segnale raffigurato indica la fermata di un autobus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Piazzola di sosta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_39_9',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio per caravan',
      farsiTranslation: 'این یک پرسش رسمی درباره «Piazzola di sosta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_39_10',
      italianText: 'Il segnale raffigurato è posto solo sulle autostrade',
      farsiTranslation: 'این یک پرسش رسمی درباره «Piazzola di sosta» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.40 Area pedonale
    {
      id: 'q_6_40_1',
      italianText: 'Il segnale raffigurato indica l’inizio di un’area pedonale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area pedonale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_40_2',
      italianText: 'Il segnale raffigurato indica, nel pannello aggiuntivo, i veicoli che possono entrare',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area pedonale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_40_3',
      italianText: 'Il segnale raffigurato consente la circolazione dei veicoli per il carico e lo scarico merci',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area pedonale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_40_4',
      italianText: 'Il segnale raffigurato consente la circolazione dei veicoli per persone diversamente abili',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area pedonale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_40_5',
      italianText: 'Il segnale raffigurato indica una stazione di polizia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area pedonale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_40_6',
      italianText: 'Il segnale raffigurato indica un’area riservata solo alle persone diversamente abili',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area pedonale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_40_7',
      italianText: 'Il segnale raffigurato indica la presenza di polizia a piedi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area pedonale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_40_8',
      italianText: 'Il segnale raffigurato indica la presenza di venditori ambulanti',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area pedonale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.41 Zona a traffico limitato
    {
      id: 'q_6_41_1',
      italianText: 'Il segnale raffigurato indica l’inizio di una zona a traffico limitato',
      farsiTranslation: 'این یک پرسش رسمی درباره «Zona a traffico limitato» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_41_2',
      italianText: 'Il segnale raffigurato indica l’inizio dell’area dove il traffico è consentito solo ad alcune categorie di veicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Zona a traffico limitato» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_41_3',
      italianText: 'Il segnale raffigurato riporta quali sono i veicoli che possono entrare',
      farsiTranslation: 'این یک پرسش رسمی درباره «Zona a traffico limitato» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_41_4',
      italianText: 'Il segnale raffigurato riporta le categorie di veicoli ammessi al transito',
      farsiTranslation: 'این یک پرسش رسمی درباره «Zona a traffico limitato» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_41_5',
      italianText: 'Il segnale raffigurato indica una strada a senso unico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Zona a traffico limitato» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_41_6',
      italianText: 'Il segnale raffigurato vieta il transito di tutti i veicoli',
      farsiTranslation: 'غلط: شما حق دارید وارد این خیابان شوید (عبور ممنوع نیست)، فقط نمی‌توانید از سمت دیگرش خارج شوید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_41_7',
      italianText: 'Il segnale raffigurato indica una zona militare',
      farsiTranslation: 'این یک پرسش رسمی درباره «Zona a traffico limitato» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_41_8',
      italianText: 'Il segnale raffigurato indica che la strada è chiusa per l’intenso traffico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Zona a traffico limitato» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_41_9',
      italianText: 'Il segnale raffigurato consente il transito solo ai residenti',
      farsiTranslation: 'این یک پرسش رسمی درباره «Zona a traffico limitato» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_41_10',
      italianText: 'Il segnale raffigurato indica l’inizio di un’area pedonale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Zona a traffico limitato» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.42 Transitabilità: passo aperto con catene o pneumatici da neve
    {
      id: 'q_6_42_1',
      italianText: 'Il segnale raffigurato permette di conoscere le condizioni di transitabilità del passo dello Stelvio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_42_2',
      italianText: 'Il segnale raffigurato indica che è necessario transitare solo con catene o pneumatici invernali',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_42_3',
      italianText: 'Il segnale raffigurato indica che la strada è aperta, ma solo ai veicoli che sono equipaggiati con catene o pneumatici invernali',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_42_4',
      italianText: 'Il segnale raffigurato è posto su strade di montagna',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_42_5',
      italianText: 'Il segnale raffigurato indica che è possibile raggiungere il passo dello Stelvio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_42_6',
      italianText: 'Il segnale raffigurato indica strada aperta solo ai veicoli con pneumatici nuovi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_42_7',
      italianText: 'Il segnale raffigurato consiglia di montare le catene',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_42_8',
      italianText: 'Il segnale raffigurato obbliga a montare le catene su tutte le quattro ruote',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_42_9',
      italianText: 'Il segnale raffigurato obbliga a togliere le catene per non rovinare l’asfalto',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_42_10',
      italianText: 'Il segnale raffigurato indica l’apertura di un impianto sciistico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: passo aperto con catene o pneumatici da neve» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.43 Transitabilità: tratto terminale o passo chiuso
    {
      id: 'q_6_43_1',
      italianText: 'Il segnale raffigurato consiglia di procedere con particolare prudenza e attenzione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: tratto terminale o passo chiuso» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_43_2',
      italianText: 'Il segnale raffigurato indica che il passo dello Stelvio non è raggiungibile',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: tratto terminale o passo chiuso» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_43_3',
      italianText: 'Il segnale raffigurato raccomanda l’uso delle catene o di pneumatici invernali fino a Trafoi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: tratto terminale o passo chiuso» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_43_4',
      italianText: 'Il segnale raffigurato indica che è possibile arrivare fino a Trafoi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: tratto terminale o passo chiuso» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_43_5',
      italianText: 'Il segnale raffigurato indica che le stazioni di servizio sono chiuse',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: tratto terminale o passo chiuso» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_43_6',
      italianText: 'Il segnale raffigurato indica che è obbligatorio montare gli pneumatici invernali',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: tratto terminale o passo chiuso» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_43_7',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che non hanno le catene da neve',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: tratto terminale o passo chiuso» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_43_8',
      italianText: 'Il segnale raffigurato indica che i veicoli per poter transitare debbono avere a bordo le catene',
      farsiTranslation: 'این یک پرسش رسمی درباره «Transitabilità: tratto terminale o passo chiuso» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.44 Inizio strada extraurbana principale
    {
      id: 'q_6_44_1',
      italianText: 'Il segnale raffigurato indica l’inizio di una strada extraurbana principale',
      farsiTranslation: 'صحیح: این تابلو (آبی رنگ) شروع جاده اصلی برون‌شهری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_44_2',
      italianText: 'Il segnale raffigurato, se barrato, da una striscia rossa indica la fine di una strada extraurbana principale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio strada extraurbana principale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_44_3',
      italianText: 'Il segnale raffigurato è posto all’inizio di una strada extraurbana principale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio strada extraurbana principale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_44_4',
      italianText: 'Il segnale raffigurato indica una strada a carreggiate separate',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio strada extraurbana principale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_44_5',
      italianText: 'Il segnale raffigurato indica la presenza di un cavalcavia che consente l’inversione di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio strada extraurbana principale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_44_6',
      italianText: 'Il segnale raffigurato preavvisa un tratto di strada in salita',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio strada extraurbana principale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_44_7',
      italianText: 'Il segnale raffigurato indica la vicinanza di un sottopassaggio per i veicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio strada extraurbana principale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_44_8',
      italianText: 'Il segnale raffigurato indica che la strada è interrotta',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio strada extraurbana principale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_44_9',
      italianText: 'Il segnale raffigurato prescrive la circolazione per file parallele',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio strada extraurbana principale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_44_10',
      italianText: 'Il segnale raffigurato preavvisa l’inizio di un lungo rettilineo Inizio strada extraurbana principale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Inizio strada extraurbana principale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.45 Uso corsie extraurbane
    {
      id: 'q_6_45_1',
      italianText: 'Il segnale raffigurato indica come utilizzare le corsie di una carreggiata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie extraurbane» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_45_2',
      italianText: 'Il segnale raffigurato consente la circolazione dei motocicli su tutte e due le corsie',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie extraurbane» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_45_3',
      italianText: 'Il segnale raffigurato indica che la corsia di sinistra è vietata agli autocarri che superano la massa a pieno carico di 3,5 tonnellate',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie extraurbane» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_45_4',
      italianText: 'Il segnale raffigurato è installato sulle strade extraurbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie extraurbane» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_45_5',
      italianText: 'Il segnale raffigurato consente la circolazione delle autovetture su tutte e due le corsie',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie extraurbane» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_45_6',
      italianText: 'Il segnale raffigurato consente a tutti gli autocarri di sorpassare a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie extraurbane» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_45_7',
      italianText: 'Il segnale raffigurato indica che gli autocarri che superano 3,5 tonnellate possono circolare solo sulla corsia di sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie extraurbane» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_45_8',
      italianText: 'Il segnale raffigurato vieta a tutti gli autocarri di circolare sulla corsia di sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie extraurbane» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_45_9',
      italianText: 'Il segnale raffigurato vieta il transito anche agli autobus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie extraurbane» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_45_10',
      italianText: 'Il segnale raffigurato si trova solo su strade a doppio senso di circolazione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie extraurbane» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.46 Uso corsie autostradali con velocità minime
    {
      id: 'q_6_46_1',
      italianText: 'Il segnale raffigurato indica le velocità minime obbligatorie da mantenere sulle corsie indicate',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie autostradali con velocità minime» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_46_2',
      italianText: 'Il segnale raffigurato è posto sulle autostrade',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie autostradali con velocità minime» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_46_3',
      italianText: 'Il segnale raffigurato consente ad un veicolo che viaggia a 100 km/h di percorrere la corsia di mezzo',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie autostradali con velocità minime» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_46_4',
      italianText: 'Il segnale raffigurato obbliga i veicoli che viaggiano alla velocità di 50 km/h di stare sulla prima corsia di destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie autostradali con velocità minime» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_46_5',
      italianText: 'Il segnale raffigurato consente di circolare a 160 km/h in tutte e tre le corsie',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie autostradali con velocità minime» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_46_6',
      italianText: 'Il segnale raffigurato riporta le velocità che si consiglia di non superare',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie autostradali con velocità minime» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_46_7',
      italianText: 'Il segnale raffigurato consente ad un veicolo che viaggia alla velocità di 80 km/h di stare sulla corsia di sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie autostradali con velocità minime» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_46_8',
      italianText: 'Il segnale raffigurato indica una strada a doppio senso di circolazione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie autostradali con velocità minime» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_46_9',
      italianText: 'Il segnale raffigurato indica le velocità consigliate',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie autostradali con velocità minime» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.47 Uso corsie urbane per categorie di veicoli
    {
      id: 'q_6_47_1',
      italianText: 'Il segnale raffigurato indica come devono essere utilizzate le corsie',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie urbane per categorie di veicoli» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_47_2',
      italianText: 'Il segnale raffigurato indica che la corsia di destra è riservata agli autobus dei servizi pubblici urbani',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie urbane per categorie di veicoli» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_47_3',
      italianText: 'Il segnale raffigurato indica che le corsie di sinistra sono destinate al transito normale di tutti i veicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie urbane per categorie di veicoli» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_47_4',
      italianText: 'Il segnale raffigurato è posto su strade urbane',
      farsiTranslation: 'صحیح: رنگ سفید نشان‌دهنده استفاده آن در خیابان‌های شهری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_47_5',
      italianText: 'Il segnale raffigurato consente ai taxi di stare sulla corsia di destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie urbane per categorie di veicoli» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_47_6',
      italianText: 'Il segnale raffigurato indica una pista ciclabile sulla destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie urbane per categorie di veicoli» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_47_7',
      italianText: 'Il segnale raffigurato si può trovare sulle autostrade',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie urbane per categorie di veicoli» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_47_8',
      italianText: 'Il segnale raffigurato indica che gli autobus possono sorpassare a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Uso corsie urbane per categorie di veicoli» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.48 Variazione corsie extraurbane in aumento
    {
      id: 'q_6_48_1',
      italianText: 'Il segnale raffigurato indica un cambiamento del numero di corsie disponibili',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie extraurbane in aumento» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_48_2',
      italianText: 'Il segnale raffigurato indica un aumento da una a due corsie',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie extraurbane in aumento» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_48_3',
      italianText: 'Il segnale raffigurato può essere abbinato ad un pannello che indica la distanza dal punto in cui si ha l’aumento di corsia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie extraurbane in aumento» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_48_4',
      italianText: 'Il segnale raffigurato è posto sulle strade extraurbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie extraurbane in aumento» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_48_5',
      italianText: 'Il segnale raffigurato indica che si è vicini ad un cavalcavia che consente di invertire il senso di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie extraurbane in aumento» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_48_6',
      italianText: 'Il segnale raffigurato preavvisa l’obbligo di svolta a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie extraurbane in aumento» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_48_7',
      italianText: 'Il segnale raffigurato indica la possibilità di passare a destra o a sinistra di un ostacolo',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie extraurbane in aumento» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_48_8',
      italianText: 'Il segnale raffigurato indica che è possibile sorpassare a destra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie extraurbane in aumento» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_48_9',
      italianText: 'Il segnale raffigurato preannuncia una zona di preselezione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie extraurbane in aumento» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_48_10',
      italianText: 'Il segnale raffigurato preannuncia una corsia di decelerazione',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie extraurbane in aumento» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.49 Variazione corsie autostradali in diminuzione
    {
      id: 'q_6_49_1',
      italianText: 'Il segnale raffigurato indica una diminuzione del numero di corsie disponibili',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie autostradali in diminuzione» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_49_2',
      italianText: 'Il segnale raffigurato indica una riduzione da tre a due corsie',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie autostradali in diminuzione» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_49_3',
      italianText: 'Il segnale raffigurato consiglia di rallentare per restringimento della carreggiata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie autostradali in diminuzione» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_49_4',
      italianText: 'Il segnale raffigurato può essere abbinato ad un pannello che indica la distanza dal restringimento di corsia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie autostradali in diminuzione» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_49_5',
      italianText: 'Il segnale raffigurato è installato sulle autostrade',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie autostradali in diminuzione» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_49_6',
      italianText: 'Il segnale raffigurato indica lavori in corso',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie autostradali in diminuzione» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_49_7',
      italianText: 'Il segnale raffigurato preavvisa l’obbligo di svoltare a sinistra',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie autostradali in diminuzione» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_49_8',
      italianText: 'Il segnale raffigurato preavvisa un cavalcavia che consente l’inversione di marcia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie autostradali in diminuzione» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_49_9',
      italianText: 'Il segnale raffigurato indica che bisogna dare la precedenza ai veicoli che entrano in autostrada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Variazione corsie autostradali in diminuzione» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.50 Assistenza meccanica
    {
      id: 'q_6_50_1',
      italianText: 'Il segnale raffigurato indica un’officina meccanica per veicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Assistenza meccanica» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_50_2',
      italianText: 'Il segnale raffigurato indica che nelle vicinanze c’è un’officina meccanica per veicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Assistenza meccanica» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_50_3',
      italianText: 'Il segnale raffigurato indica officina di riparazione veicoli nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Assistenza meccanica» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_50_4',
      italianText: 'Il segnale raffigurato indica che a breve distanza è possibile trovare un’officina meccanica per veicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Assistenza meccanica» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_50_5',
      italianText: 'Il segnale raffigurato indica di fare attenzione agli operai che escono da una fabbrica',
      farsiTranslation: 'این یک پرسش رسمی درباره «Assistenza meccanica» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_50_6',
      italianText: 'Il segnale raffigurato indica un distributore di carburante',
      farsiTranslation: 'این یک پرسش رسمی درباره «Assistenza meccanica» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_50_7',
      italianText: 'Il segnale raffigurato indica un’area di sosta nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Assistenza meccanica» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_50_8',
      italianText: 'Il segnale raffigurato indica cantonieri al lavoro sulla strada',
      farsiTranslation: 'این یک پرسش رسمی درباره «Assistenza meccanica» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.51 Telefono pubblico
    {
      id: 'q_6_51_1',
      italianText: 'Il segnale raffigurato indica un posto di telefono pubblico nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Telefono pubblico» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_51_2',
      italianText: 'Il segnale raffigurato indica che siamo in vicinanza di un apparecchio telefonico pubblico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Telefono pubblico» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_51_3',
      italianText: 'Il segnale raffigurato indica la possibilità, a breve distanza, di poter telefonare da un telefono pubblico',
      farsiTranslation: 'این یک پرسش رسمی درباره «Telefono pubblico» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_51_4',
      italianText: 'Il segnale raffigurato indica un apparecchio telefonico pubblico posto su strade extraurbane',
      farsiTranslation: 'این یک پرسش رسمی درباره «Telefono pubblico» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_51_5',
      italianText: 'Il segnale raffigurato indica la vicinanza di un negozio di telefonia mobile',
      farsiTranslation: 'این یک پرسش رسمی درباره «Telefono pubblico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_51_6',
      italianText: 'Il segnale raffigurato indica un posto di pronto soccorso raggiungibile per telefono',
      farsiTranslation: 'این یک پرسش رسمی درباره «Telefono pubblico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_51_7',
      italianText: 'Il segnale raffigurato indica la possibilità di ricaricare i telefoni cellulari',
      farsiTranslation: 'این یک پرسش رسمی درباره «Telefono pubblico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_51_8',
      italianText: 'Il segnale raffigurato indica che è vietato usare i telefoni cellulari',
      farsiTranslation: 'این یک پرسش رسمی درباره «Telefono pubblico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_51_9',
      italianText: 'Il segnale raffigurato indica una zona sufficientemente coperta dal segnale per telefonia mobile',
      farsiTranslation: 'این یک پرسش رسمی درباره «Telefono pubblico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_51_10',
      italianText: 'Il segnale raffigurato indica che è consentito telefonare solo con cellulari a viva voce',
      farsiTranslation: 'این یک پرسش رسمی درباره «Telefono pubblico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.52 Rifornimento carburante
    {
      id: 'q_6_52_1',
      italianText: 'Il segnale raffigurato indica un posto di rifornimento carburante',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_52_2',
      italianText: 'Il segnale raffigurato indica che nelle vicinanze vi è un posto di distribuzione carburante',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_52_3',
      italianText: 'Il segnale raffigurato indica la possibilità di rifornimento carburante a breve distanza',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_52_4',
      italianText: 'Il segnale raffigurato indica che a breve distanza vi è una stazione di rifornimento carburante',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_52_5',
      italianText: 'Il segnale raffigurato indica che lungo la strada, a breve distanza, vi è un distributore di carburante',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_52_6',
      italianText: 'Il segnale raffigurato indica un’officina di assistenza meccanica nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_52_7',
      italianText: 'Il segnale raffigurato indica un posto telefonico pubblico nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_52_8',
      italianText: 'Il segnale raffigurato indica che nelle vicinanze vi è un’area di sosta per autoveicoli',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_52_9',
      italianText: 'Il segnale raffigurato indica un distributore di carburante riservato solo ai veicoli alimentati a GPL',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_52_10',
      italianText: 'Il segnale raffigurato indica una raffineria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_52_11',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che trasportano carburante',
      farsiTranslation: 'این یک پرسش رسمی درباره «Rifornimento carburante» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.53 Posteggio per taxi
    {
      id: 'q_6_53_1',
      italianText: 'Il segnale raffigurato indica un’area di sosta per i taxi in servizio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Posteggio per taxi» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_53_2',
      italianText: 'Il segnale raffigurato indica un’area di sosta ad uso esclusivo dei taxi in servizio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Posteggio per taxi» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_53_3',
      italianText: 'Il segnale raffigurato indica un parcheggio riservato ai taxi in servizio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Posteggio per taxi» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_53_4',
      italianText: 'Il segnale raffigurato indica un’area contrassegnata da strisce gialle con la scritta TAXI',
      farsiTranslation: 'این یک پرسش رسمی درباره «Posteggio per taxi» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_53_5',
      italianText: 'Il segnale raffigurato indica un divieto di sorpasso ai taxi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Posteggio per taxi» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_53_6',
      italianText: 'Il segnale raffigurato indica una strada vietata ai taxi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Posteggio per taxi» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_53_7',
      italianText: 'Il segnale raffigurato indica la presenza nelle vicinanze di un apparecchio per chiamare un taxi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Posteggio per taxi» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_53_8',
      italianText: 'Il segnale raffigurato indica la presenza di una stazione radio per taxi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Posteggio per taxi» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_53_9',
      italianText: 'Il segnale raffigurato è dotato di luce propria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Posteggio per taxi» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_53_10',
      italianText: 'Il segnale raffigurato indica un garage riservato ai taxi',
      farsiTranslation: 'این یک پرسش رسمی درباره «Posteggio per taxi» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.54 Fermata autobus extraurbano
    {
      id: 'q_6_54_1',
      italianText: 'Il segnale raffigurato indica una fermata di autobus di pubblico trasporto extraurbani',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fermata autobus extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_54_2',
      italianText: 'Il segnale raffigurato può essere abbinato ad un pannello che riporta gli orari di partenza degli autobus extraurbani',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fermata autobus extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_54_3',
      italianText: 'Il segnale raffigurato indica il luogo dove aspettare un autobus di pubblico trasporto extraurbano',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fermata autobus extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_54_4',
      italianText: 'Il segnale raffigurato indica un divieto di transito agli autobus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fermata autobus extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_54_5',
      italianText: 'Il segnale raffigurato indica una corsia riservata agli autobus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fermata autobus extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_54_6',
      italianText: 'Il segnale raffigurato indica un’area di sosta per autobus e filobus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fermata autobus extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_54_7',
      italianText: 'Il segnale raffigurato indica una strada riservata agli autobus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Fermata autobus extraurbano» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.55 Parcheggio di scambio con linee autobus
    {
      id: 'q_6_55_1',
      italianText: 'Il segnale raffigurato indica un parcheggio per veicoli e fermata di autobus nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Parcheggio di scambio con linee autobus» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_55_2',
      italianText: 'Il segnale raffigurato è posto vicino ad una fermata di autobus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Parcheggio di scambio con linee autobus» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_55_3',
      italianText: 'Il segnale raffigurato indica che dopo aver parcheggiato l’autovettura è possibile prendere l’autobus n. 8 o n. 45',
      farsiTranslation: 'این یک پرسش رسمی درباره «Parcheggio di scambio con linee autobus» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_55_4',
      italianText: 'Il segnale raffigurato indica il numero (8 e 45) degli autobus pubblici che hanno fermate nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Parcheggio di scambio con linee autobus» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_55_5',
      italianText: 'Il segnale raffigurato indica la possibilità di parcheggiare l’autovettura e di prendere l’autobus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Parcheggio di scambio con linee autobus» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_55_6',
      italianText: 'Il segnale raffigurato indica una piazzola di sosta per autobus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Parcheggio di scambio con linee autobus» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_55_7',
      italianText: 'Il segnale raffigurato è posto nelle vicinanze di un pronto soccorso',
      farsiTranslation: 'این یک پرسش رسمی درباره «Parcheggio di scambio con linee autobus» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_55_8',
      italianText: 'Il segnale raffigurato indica il numero massimo di autobus che possono parcheggiare',
      farsiTranslation: 'این یک پرسش رسمی درباره «Parcheggio di scambio con linee autobus» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_55_9',
      italianText: 'Il segnale raffigurato indica per quanti minuti resta fermo un autobus',
      farsiTranslation: 'این یک پرسش رسمی درباره «Parcheggio di scambio con linee autobus» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_55_10',
      italianText: 'Il segnale raffigurato indica che è possibile iniziare a sostare dalle ore 8.45',
      farsiTranslation: 'این یک پرسش رسمی درباره «Parcheggio di scambio con linee autobus» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.56 Auto al seguito
    {
      id: 'q_6_56_1',
      italianText: 'Il segnale raffigurato si trova nelle vicinanze di una stazione ferroviaria',
      farsiTranslation: 'این یک پرسش رسمی درباره «Auto al seguito» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_56_2',
      italianText: 'Il segnale raffigurato indica la vicinanza di una grande stazione ferroviaria con possibilità di trasporto di autovetture al seguito del viaggiatore',
      farsiTranslation: 'این یک پرسش رسمی درباره «Auto al seguito» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_56_3',
      italianText: 'Il segnale raffigurato si trova in vicinanza dell’accesso per le autovetture da caricare sul treno',
      farsiTranslation: 'این یک پرسش رسمی درباره «Auto al seguito» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_56_4',
      italianText: 'Il segnale raffigurato indica, sulle strade extraurbane, la presenza di un hotel con parcheggio custodito',
      farsiTranslation: 'این یک پرسش رسمی درباره «Auto al seguito» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_56_5',
      italianText: 'Il segnale raffigurato indica la possibilità di restare in auto durante il suo trasporto in treno',
      farsiTranslation: 'این یک پرسش رسمی درباره «Auto al seguito» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_56_6',
      italianText: 'Il segnale raffigurato indica che la zona è coperta dal segnale per antifurti satellitari',
      farsiTranslation: 'این یک پرسش رسمی درباره «Auto al seguito» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_56_7',
      italianText: 'Il segnale raffigurato indica un’area riservata alla sosta delle autocaravan',
      farsiTranslation: 'این یک پرسش رسمی درباره «Auto al seguito» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.57 Campeggio
    {
      id: 'q_6_57_1',
      italianText: 'Il segnale raffigurato indica la vicinanza di un’area per campeggio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Campeggio» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_57_2',
      italianText: 'Il segnale raffigurato indica un’area da campeggio con tende e sosta per caravan ed autocaravan',
      farsiTranslation: 'این یک پرسش رسمی درباره «Campeggio» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_57_3',
      italianText: 'Il segnale raffigurato indica una zona destinata alla sosta di caravan ed autocaravan ed al campeggio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Campeggio» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_57_4',
      italianText: 'Il segnale raffigurato indica che è consentito il campeggio e la sosta di caravan ed autocaravan',
      farsiTranslation: 'این یک پرسش رسمی درباره «Campeggio» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_57_5',
      italianText: 'Il segnale raffigurato indica un divieto di sosta per caravan e per i veicoli da campeggio',
      farsiTranslation: 'این یک پرسش رسمی درباره «Campeggio» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_57_6',
      italianText: 'Il segnale raffigurato indica una zona panoramica',
      farsiTranslation: 'این یک پرسش رسمی درباره «Campeggio» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_57_7',
      italianText: 'Il segnale raffigurato indica un’officina di riparazione veicoli da campeggio nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Campeggio» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_57_8',
      italianText: 'Il segnale raffigurato indica una postazione mobile di Polizia nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Campeggio» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_57_9',
      italianText: 'Il segnale raffigurato indica un posto mobile di pronto soccorso nelle vicinanze',
      farsiTranslation: 'این یک پرسش رسمی درباره «Campeggio» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.58 Area attrezzata con impianti di scarico
    {
      id: 'q_6_58_1',
      italianText: 'Il segnale raffigurato indica un’area attrezzata con impianti di scarico per i veicoli che hanno i servizi igienico-sanitari',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area attrezzata con impianti di scarico» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_58_2',
      italianText: 'Il segnale raffigurato indica un’area con impianti igienico-sanitari per raccogliere le acque delle autocaravan',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area attrezzata con impianti di scarico» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_58_3',
      italianText: 'Il segnale raffigurato interessa tutti i veicoli che hanno degli impianti igienico-sanitari',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area attrezzata con impianti di scarico» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_58_4',
      italianText: 'Il segnale raffigurato indica impianti che consentono, ai veicoli che hanno i servizi igienico-sanitari, lo scarico dei residui organici e delle acque bianche e sporche',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area attrezzata con impianti di scarico» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_58_5',
      italianText: 'Il segnale raffigurato indica la presenza di servizi igienici per i viaggiatori',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area attrezzata con impianti di scarico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_58_6',
      italianText: 'Il segnale raffigurato indica una strada riservata alle autocaravan',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area attrezzata con impianti di scarico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_58_7',
      italianText: 'Il segnale raffigurato indica un impianto per la pesatura delle autocaravan',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area attrezzata con impianti di scarico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_58_8',
      italianText: 'Il segnale raffigurato avverte di fare attenzione alle buche sulla carreggiata',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area attrezzata con impianti di scarico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_58_9',
      italianText: 'Il segnale raffigurato preavvisa una cunetta pericolosa',
      farsiTranslation: 'این یک پرسش رسمی درباره «Area attrezzata con impianti di scarico» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },

    // 6.59 Polizia stradale
    {
      id: 'q_6_59_1',
      italianText: 'Il segnale raffigurato indica l’indirizzo ed i numeri telefonici del più vicino comando della polizia stradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Polizia stradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_59_2',
      italianText: 'Il segnale raffigurato indica la località ed i numeri di telefono del più vicino comando di polizia stradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Polizia stradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_59_3',
      italianText: 'Il segnale raffigurato indica la sede ed il numero telefonico del più vicino comando di polizia stradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Polizia stradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_59_4',
      italianText: 'Il segnale raffigurato riporta alcuni dati (località, via, telefoni) del più vicino comando di polizia stradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Polizia stradale» است. طبق پاسخ رسمی آزمون، این گزاره درست است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_59_5',
      italianText: 'Il segnale raffigurato indica un posto di blocco della polizia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Polizia stradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_59_6',
      italianText: 'Il segnale raffigurato indica una strada interrotta per incidente stradale',
      farsiTranslation: 'این یک پرسش رسمی درباره «Polizia stradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_59_7',
      italianText: 'Il segnale raffigurato indica una zona riservata al parcheggio dei veicoli della polizia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Polizia stradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_59_8',
      italianText: 'Il segnale raffigurato indica la possibilità di incrociare una colonna di veicoli della polizia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Polizia stradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_59_9',
      italianText: 'Il segnale raffigurato indica un tratto di strada riservato alla polizia',
      farsiTranslation: 'این یک پرسش رسمی درباره «Polizia stradale» است. طبق پاسخ رسمی آزمون، این گزاره نادرست است.',
      correctAnswer: 'Falso'
    }
  ]
};
