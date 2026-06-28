import { Chapter } from '../../types';

export const chapter12: Chapter = {
  id: 12,
  title: 'Pericolo, Intralcio, Velocità, Distanza di Sicurezza e Limiti',
  farsiTitle: 'خطر، مزاحمت در رفت‌وآمد، سرعت، فاصله ایمنی و حد سرعت',
  lessons: [
    {
      id: 'topic_12_1',
      title: '12.1 Pericolo o intralcio per la circolazione',
      italianText: `Per non creare pericolo o intralcio bisogna guidare in modo adeguato al veicolo, alla strada e al traffico. Non basta guardare solo i limiti di velocità: servono prudenza, rispetto delle norme e senso civico.`,
      farsiTranslation: `برای ایجاد نکردن خطر یا مزاحمت در رفت‌وآمد، باید رانندگی را با نوع خودرو، وضعیت جاده و ترافیک هماهنگ کرد. فقط نگاه کردن به حد سرعت کافی نیست؛ احتیاط، رعایت مقررات و رفتار مسئولانه لازم است.`,
      vocabularyIds: [
        'pericolo', 'intralcio', 'circolazione', 'guidare', 'adeguato', 'veicolo', 'strada', 'traffico', 'prudenza', 'norme'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_12_1_${i + 1}`)
    },
    {
      id: 'topic_12_2',
      title: '12.2 Regolazione generale della velocità',
      italianText: `La velocità deve essere moderata quando la visuale non è libera e deve permettere di intervenire con sicurezza in caso di imprevisti. Va sempre adattata alle condizioni psicofisiche del conducente e al carico.`,
      farsiTranslation: `وقتی دید آزاد نیست باید سرعت را کم کرد و سرعت باید طوری باشد که در اتفاق ناگهانی بتوان ایمن واکنش نشان داد. سرعت همیشه باید با وضعیت جسمی‌روانی راننده و مقدار بار هماهنگ باشد.`,
      vocabularyIds: [
        'regolazione_velocita', 'velocita', 'moderata', 'visuale', 'imprevisti', 'sicurezza', 'condizioni_psicofisiche', 'conducente', 'carico'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_12_2_${i + 1}`)
    },
    {
      id: 'topic_12_3',
      title: '12.3 Fattori per regolare la velocità',
      italianText: `Il conducente deve regolare la velocità in base alle caratteristiche e allo stato del veicolo, al carico, alle condizioni della strada, del traffico e del tempo. La velocità non deve creare pericolo per persone o cose.`,
      farsiTranslation: `راننده باید سرعت را بر اساس ویژگی و وضعیت خودرو، بار، وضعیت جاده، ترافیک و هوا تنظیم کند. سرعت نباید برای افراد یا اشیا خطر ایجاد کند.`,
      vocabularyIds: [
        'caratteristiche', 'stato', 'veicolo', 'carico', 'condizioni_strada', 'condizioni_atmosferiche', 'traffico', 'persone', 'cose'
      ],
      questionIds: Array.from({ length: 16 }, (_, i) => `q_12_3_${i + 1}`)
    },
    {
      id: 'topic_12_4',
      title: '12.4 Velocità in situazioni difficili',
      italianText: `Bisogna mantenere sempre il controllo del veicolo ed essere in grado di arrestarlo nel campo di visibilità. La velocità va regolata in curve, dossi, incroci, scuole, forti discese, strettoie, nebbia, neve e ghiaccio.`,
      farsiTranslation: `باید همیشه کنترل خودرو را حفظ کرد و بتوان در محدوده دید توقف کرد. سرعت در پیچ‌ها، برآمدگی‌ها، تقاطع‌ها، نزدیک مدارس، سرازیری تند، تنگی راه، مه، برف و یخ باید تنظیم شود.`,
      vocabularyIds: [
        'controllo', 'arrestare', 'campo_visibilita', 'curve', 'dossi', 'incrocio', 'scuole', 'forti_discese', 'strettoie', 'nebbia', 'neve', 'ghiaccio'
      ],
      questionIds: Array.from({ length: 29 }, (_, i) => `q_12_4_${i + 1}`)
    },
    {
      id: 'topic_12_5',
      title: '12.5 Moderare la velocità nei punti pericolosi',
      italianText: `La velocità deve essere particolarmente moderata vicino agli incroci, nelle strettoie, quando l'incrocio con altri veicoli è difficoltoso, con poca visibilità o quando pedoni occupano la carreggiata.`,
      farsiTranslation: `نزدیک تقاطع‌ها، در تنگی راه، وقتی عبور هم‌زمان با خودروهای دیگر سخت است، وقتی دید کم است یا عابران در سواره‌رو هستند، سرعت باید خیلی کم شود.`,
      vocabularyIds: [
        'moderare', 'incrocio', 'strettoie', 'difficoltoso', 'veicoli', 'visibilita', 'pedoni', 'carreggiata'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_12_5_${i + 1}`)
    },
    {
      id: 'topic_12_6',
      title: '12.6 Velocità con vento, sole e nebbia',
      italianText: `La velocità va diminuita se la strada è sporca o mal tenuta, con forte vento laterale, abbagliamento del sole o nebbia fitta. In autostrada e sulle extraurbane principali possono essere imposti limiti temporanei.`,
      farsiTranslation: `اگر جاده کثیف یا بد نگهداری شده باشد، باد جانبی شدید باشد، نور خورشید چشم را بزند یا مه غلیظ باشد باید سرعت را کم کرد. در آزادراه و راه برون‌شهری اصلی ممکن است حد سرعت موقت گذاشته شود.`,
      vocabularyIds: [
        'vento_laterale', 'abbagliamento', 'sole', 'nebbia_fitta', 'autostrada', 'extraurbana_principale', 'limiti_temporanei'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_12_6_${i + 1}`)
    },
    {
      id: 'topic_12_7',
      title: '12.7 Ridurre la velocità e fermarsi se occorre',
      italianText: `È obbligatorio ridurre la velocità e, se serve, fermarsi quando l'incrocio è difficile, vicino agli attraversamenti pedonali, con pedoni incerti, animali spaventati o quando si rimane abbagliati.`,
      farsiTranslation: `وقتی عبور سخت است، نزدیک گذرگاه عابر، وقتی عابران مردد هستند، حیوانات ترسیده‌اند یا راننده از نور خیره شده، باید سرعت را کم کرد و اگر لازم باشد توقف کرد.`,
      vocabularyIds: [
        'ridurre_velocita', 'fermarsi', 'attraversamenti_pedonali', 'pedoni', 'animali', 'spavento', 'abbagliati'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_12_7_${i + 1}`)
    },
    {
      id: 'topic_12_8',
      title: '12.8 Velocità e precedenza negli incroci',
      italianText: `La velocità deve essere regolata per non creare intralcio. Negli incroci bisogna ridurre la velocità e, se occorre, fermarsi per far passare i veicoli che hanno la precedenza.`,
      farsiTranslation: `سرعت باید طوری تنظیم شود که مانع رفت‌وآمد نشود. در تقاطع‌ها باید سرعت را کم کرد و اگر لازم باشد توقف کرد تا وسایلی که حق تقدم دارند عبور کنند.`,
      vocabularyIds: [
        'intralcio', 'incrocio', 'ridurre_velocita', 'fermarsi', 'precedenza', 'veicoli'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_12_8_${i + 1}`)
    },
    {
      id: 'topic_12_9',
      title: '12.9 Limiti massimi generali in Italia',
      italianText: `I limiti generali sono 50 km/h nei centri abitati, 90 km/h sulle extraurbane secondarie, 110 km/h sulle extraurbane principali e 130 km/h sulle autostrade, salvo diversa segnalazione.`,
      farsiTranslation: `حدهای کلی سرعت در ایتالیا این‌هاست: ۵۰ در شهر، ۹۰ در راه برون‌شهری فرعی، ۱۱۰ در راه برون‌شهری اصلی و ۱۳۰ در آزادراه، مگر تابلو چیز دیگری بگوید.`,
      vocabularyIds: [
        'limiti_velocita', 'centri_abitati', 'extraurbana_secondaria', 'extraurbana_principale', 'autostrada', 'salvo_diversa_segnalazione'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_12_9_${i + 1}`)
    },
    {
      id: 'topic_12_10',
      title: '12.10 Velocità, consumi, curva e neopatentati',
      italianText: `La velocità alta aumenta consumo e inquinamento. In curva incide sulla tenuta di strada e può causare ribaltamento. I neopatentati hanno limiti più bassi: 100 km/h in autostrada e 90 km/h su extraurbane principali.`,
      farsiTranslation: `سرعت زیاد مصرف سوخت و آلودگی را زیاد می‌کند. در پیچ روی چسبندگی/پایداری خودرو اثر دارد و ممکن است باعث واژگونی شود. رانندگان تازه‌گواهینامه حد پایین‌تر دارند: ۱۰۰ در آزادراه و ۹۰ در راه برون‌شهری اصلی.`,
      vocabularyIds: [
        'alta_velocita', 'consumo_carburante', 'inquinamento', 'curva', 'tenuta_di_strada', 'ribaltamento', 'neopatentati'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_12_10_${i + 1}`)
    },
    {
      id: 'topic_12_11',
      title: '12.11 Limiti per autovetture e veicoli leggeri',
      italianText: `Per autovetture e veicoli fino a 3,5 t valgono normalmente 130 km/h in autostrada, 110 km/h su extraurbane principali, 90 km/h su extraurbane secondarie e 50 km/h nei centri abitati.`,
      farsiTranslation: `برای خودروهای سواری و وسایل تا ۳.۵ تن، معمولاً حد سرعت ۱۳۰ در آزادراه، ۱۱۰ در برون‌شهری اصلی، ۹۰ در برون‌شهری فرعی و ۵۰ در شهر است.`,
      vocabularyIds: [
        'autovetture', 'veicoli_leggeri', 'fino_a', 'tonnellate', 'autostrada', 'extraurbana_principale', 'extraurbana_secondaria', 'centri_abitati'
      ],
      questionIds: Array.from({ length: 29 }, (_, i) => `q_12_11_${i + 1}`)
    },
    {
      id: 'topic_12_12',
      title: '12.12 Limiti in autostrada e con rimorchio',
      italianText: `In autostrada il limite è 130 km/h per motocicli, autovetture e veicoli fino a 3,5 t, ma scende a 80 km/h per autovetture con rimorchio o caravan. Con pioggia il limite per autovetture è 110 km/h.`,
      farsiTranslation: `در آزادراه حد سرعت برای موتورسیکلت، سواری و وسایل تا ۳.۵ تن، ۱۳۰ است؛ اما برای سواری با یدک یا کاروان ۸۰ است. هنگام باران حد سواری ۱۱۰ می‌شود.`,
      vocabularyIds: [
        'autostrada', 'motocicli', 'autovetture', 'rimorchio', 'caravan', 'pioggia', 'limite'
      ],
      questionIds: Array.from({ length: 18 }, (_, i) => `q_12_12_${i + 1}`)
    },
    {
      id: 'topic_12_13',
      title: '12.13 Limiti generali e condizioni meteo',
      italianText: `Salvo diversa segnalazione, i limiti generali cambiano con pioggia, neve o grandine: in autostrada si scende a 110 km/h e sulle extraurbane principali a 90 km/h.`,
      farsiTranslation: `اگر تابلو چیز دیگری نگوید، در باران، برف یا تگرگ حد سرعت تغییر می‌کند: در آزادراه ۱۱۰ و در راه برون‌شهری اصلی ۹۰ می‌شود.`,
      vocabularyIds: [
        'salvo_diversa_segnalazione', 'pioggia', 'neve', 'grandine', 'autostrada', 'extraurbana_principale', 'limiti_velocita'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_12_13_${i + 1}`)
    },
    {
      id: 'topic_12_14',
      title: '12.14 Limiti su strade extraurbane principali',
      italianText: `Sulle strade extraurbane principali il limite è 110 km/h per autovetture e veicoli fino a 3,5 t, ma 70 km/h per autotreni e autovetture che trainano caravan.`,
      farsiTranslation: `در راه‌های برون‌شهری اصلی حد سرعت برای سواری و وسایل تا ۳.۵ تن، ۱۱۰ است؛ اما برای قطار جاده‌ای و سواری با کاروان ۷۰ است.`,
      vocabularyIds: [
        'extraurbana_principale', 'autovetture', 'veicoli_leggeri', 'autotreni', 'trainare', 'caravan'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_12_14_${i + 1}`)
    },
    {
      id: 'topic_12_15',
      title: '12.15 Limiti su strade extraurbane secondarie',
      italianText: `Sulle extraurbane secondarie il limite è 90 km/h per motocicli, autovetture e veicoli fino a 3,5 t, ma 70 km/h per autotreni e autovetture con rimorchio per imbarcazioni o simili.`,
      farsiTranslation: `در راه‌های برون‌شهری فرعی حد سرعت برای موتورسیکلت، سواری و وسایل تا ۳.۵ تن، ۹۰ است؛ اما برای قطار جاده‌ای و سواری با یدک قایق یا مشابه، ۷۰ است.`,
      vocabularyIds: [
        'extraurbana_secondaria', 'motocicli', 'autovetture', 'rimorchio', 'imbarcazioni', 'autotreni'
      ],
      questionIds: Array.from({ length: 13 }, (_, i) => `q_12_15_${i + 1}`)
    },
    {
      id: 'topic_12_16',
      title: '12.16 Situazioni particolari e file parallele',
      italianText: `La velocità va regolata con lavori in corso, triangolo mobile di pericolo e traffico canalizzato. Quando si viaggia per file parallele, la corsia di destra può procedere più veloce di quella di sinistra.`,
      farsiTranslation: `در کارگاه راه، وجود مثلث خطر و ترافیک کانالیزه باید سرعت را تنظیم کرد. هنگام حرکت در صف‌های موازی، ممکن است لاین راست از لاین چپ سریع‌تر حرکت کند.`,
      vocabularyIds: [
        'lavori_in_corso', 'triangolo_mobile', 'traffico_canalizzato', 'file_parallele', 'corsia_destra', 'corsia_sinistra'
      ],
      questionIds: Array.from({ length: 15 }, (_, i) => `q_12_16_${i + 1}`)
    },
    {
      id: 'topic_12_17',
      title: '12.17 Contrassegni posteriori e velocità',
      italianText: `Alcuni veicoli hanno contrassegni posteriori con le velocità massime consentite. La velocità deve essere diminuita anche con traffico misto, veicoli lenti, animali o fondo stradale irregolare.`,
      farsiTranslation: `بعضی وسایل نقلیه در عقب خود علامت‌هایی دارند که سرعت‌های مجازشان را نشان می‌دهد. همچنین در ترافیک مخلوط، وجود وسایل کند، حیوانات یا سطح جاده خراب باید سرعت را کم کرد.`,
      vocabularyIds: [
        'contrassegni_posteriori', 'velocita_massima', 'traffico_misto', 'veicoli_lenti', 'animali', 'fondo_stradale'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_12_17_${i + 1}`)
    },
    {
      id: 'topic_12_18',
      title: '12.18 Spazio di frenatura e velocità',
      italianText: `Lo spazio di frenatura è lo spazio percorso dall'inizio della frenata all'arresto. Cresce molto con la velocità: raddoppiando la velocità, lo spazio di frenatura diventa quattro volte maggiore.`,
      farsiTranslation: `مسافت ترمز از شروع ترمزگیری تا توقف کامل است. با سرعت خیلی زیاد می‌شود: اگر سرعت دو برابر شود، مسافت ترمز چهار برابر می‌شود.`,
      vocabularyIds: [
        'spazio_frenatura', 'frenata', 'arresto', 'velocita', 'raddoppiare', 'quadruplicare'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_12_18_${i + 1}`)
    },
    {
      id: 'topic_12_19',
      title: '12.19 Spazio percorso in un secondo',
      italianText: `In un secondo si percorrono circa 14 m a 50 km/h, 28 m a 100 km/h, 36 m a 130 km/h e 42 m a 150 km/h. Questo serve a capire il tempo di reazione.`,
      farsiTranslation: `در یک ثانیه تقریباً در سرعت ۵۰، ۱۴ متر؛ در ۱۰۰، ۲۸ متر؛ در ۱۳۰، ۳۶ متر؛ و در ۱۵۰، ۴۲ متر طی می‌شود. این برای فهمیدن زمان واکنش مهم است.`,
      vocabularyIds: [
        'un_secondo', 'metri', 'velocita', 'tempo_reazione', 'percorre'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_12_19_${i + 1}`)
    },
    {
      id: 'topic_12_20',
      title: '12.20 Fattori dello spazio di frenatura',
      italianText: `Lo spazio di frenatura aumenta con bassa aderenza, strada innevata, bagnata o in discesa. Diminuisce in salita. Non dipende dalla prontezza dei riflessi, che riguarda invece il tempo di reazione.`,
      farsiTranslation: `مسافت ترمز با چسبندگی کم، جاده برفی، خیس یا سرازیری بیشتر می‌شود. در سربالایی کمتر می‌شود. به سرعت واکنش راننده مربوط نیست؛ آن مربوط به زمان واکنش است.`,
      vocabularyIds: [
        'aderenza', 'pneumatici', 'asfalto', 'innevata', 'bagnata', 'discesa', 'salita', 'riflessi'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_12_20_${i + 1}`)
    },
    {
      id: 'topic_12_21',
      title: '12.21 Spazio totale di arresto',
      italianText: `Lo spazio totale di arresto è dato dallo spazio percorso nel tempo di reazione più lo spazio percorso durante la frenata. Dipende da velocità, pneumatici e condizioni dell'asfalto.`,
      farsiTranslation: `مسافت کل توقف برابر است با مسافت طی‌شده در زمان واکنش به اضافه مسافت ترمز. به سرعت، لاستیک‌ها و وضعیت آسفالت بستگی دارد.`,
      vocabularyIds: [
        'spazio_totale_arresto', 'tempo_reazione', 'spazio_frenatura', 'velocita', 'pneumatici', 'asfalto'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_12_21_${i + 1}`)
    },
    {
      id: 'topic_12_22',
      title: '12.22 Aumento dello spazio totale di arresto',
      italianText: `Lo spazio totale di arresto aumenta se aumenta la velocità, se la strada è innevata o coperta di fango e se i pneumatici sono usurati. Diminuisce quando la velocità diminuisce.`,
      farsiTranslation: `مسافت کل توقف با افزایش سرعت، جاده برفی یا گِلی و لاستیک‌های فرسوده بیشتر می‌شود. وقتی سرعت کم شود، این مسافت کمتر می‌شود.`,
      vocabularyIds: [
        'aumentare', 'velocita', 'innevata', 'fango', 'pneumatici_usurati', 'diminuire'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_12_22_${i + 1}`)
    },
    {
      id: 'topic_12_23',
      title: '12.23 Tempo di reazione e distanza di sicurezza',
      italianText: `Lo spazio percorso nel tempo di reazione va dalla percezione del pericolo all'inizio della frenata. La distanza di sicurezza serve a evitare il tamponamento e deve almeno coprire questo spazio.`,
      farsiTranslation: `مسافت زمان واکنش از لحظه دیدن خطر تا شروع ترمزگیری است. فاصله ایمنی برای جلوگیری از برخورد از عقب است و باید حداقل این مسافت را پوشش دهد.`,
      vocabularyIds: [
        'tempo_reazione', 'percezione', 'pericolo', 'inizio', 'frenata', 'distanza_sicurezza', 'tamponamento'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_12_23_${i + 1}`)
    },
    {
      id: 'topic_12_24',
      title: '12.24 Rispetto della distanza di sicurezza',
      italianText: `La distanza di sicurezza evita la collisione con il veicolo davanti. Si valuta in base a velocità, riflessi, traffico, andamento della strada, meteo, tipo di veicolo, freni, pneumatici e carico.`,
      farsiTranslation: `فاصله ایمنی از برخورد با خودروی جلویی جلوگیری می‌کند. بر اساس سرعت، واکنش، ترافیک، شکل جاده، هوا، نوع خودرو، ترمزها، لاستیک‌ها و بار تعیین می‌شود.`,
      vocabularyIds: [
        'distanza_sicurezza', 'collisione', 'veicolo_che_precede', 'riflessi', 'traffico', 'condizioni_atmosferiche', 'freni', 'carico'
      ],
      questionIds: Array.from({ length: 29 }, (_, i) => `q_12_24_${i + 1}`)
    },
    {
      id: 'topic_12_25',
      title: '12.25 Aumentare la distanza di sicurezza',
      italianText: `La distanza di sicurezza va mantenuta sempre, anche prima del sorpasso. Deve aumentare quando è difficile prevedere il comportamento del conducente davanti o quando serve fermarsi in tempo.`,
      farsiTranslation: `فاصله ایمنی همیشه باید حفظ شود، حتی قبل از سبقت. وقتی رفتار راننده جلویی قابل پیش‌بینی نیست یا باید بتوان به‌موقع توقف کرد، فاصله باید بیشتر شود.`,
      vocabularyIds: [
        'mantenere', 'distanza_sicurezza', 'sorpasso', 'prevedere', 'comportamento', 'fermarsi'
      ],
      questionIds: Array.from({ length: 5 }, (_, i) => `q_12_25_${i + 1}`)
    },
    {
      id: 'topic_12_26',
      title: '12.26 Valutazione della distanza con carico sporgente',
      italianText: `La distanza di sicurezza deve essere aumentata se il veicolo davanti trasporta un carico sporgente o poco stabile. Non va diminuita in galleria o in autostrada.`,
      farsiTranslation: `اگر خودروی جلویی بار بیرون‌زده یا ناپایدار حمل می‌کند، فاصله ایمنی باید بیشتر شود. در تونل یا آزادراه نباید فاصله را کم کرد.`,
      vocabularyIds: [
        'carico_sporgente', 'poco_stabile', 'aumentare', 'distanza_sicurezza', 'galleria', 'autostrada'
      ],
      questionIds: Array.from({ length: 5 }, (_, i) => `q_12_26_${i + 1}`)
    },
    {
      id: 'topic_12_27',
      title: '12.27 Distanza di sicurezza: non è fissa',
      italianText: `La distanza di sicurezza non è una distanza fissa e non dipende dal numero di corsie, dal servosterzo o dal veicolo che segue. Va rispettata per non tamponare chi precede.`,
      farsiTranslation: `فاصله ایمنی عدد ثابت نیست و به تعداد لاین‌ها، فرمان کمکی یا خودروی پشت سر بستگی ندارد. باید رعایت شود تا با خودروی جلو برخورد نکنیم.`,
      vocabularyIds: [
        'distanza_fissa', 'corsie', 'servosterzo', 'veicolo_che_segue', 'tamponare', 'precede'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_12_27_${i + 1}`)
    },
    {
      id: 'topic_12_28',
      title: '12.28 Fattori che influiscono sulla distanza',
      italianText: `Sulla distanza di sicurezza influiscono concentrazione, velocità, carico, aderenza, condizioni dei pneumatici e freno di servizio. Non influiscono numero di marce, ruote o tipo di servosterzo.`,
      farsiTranslation: `بر فاصله ایمنی تمرکز، سرعت، بار، چسبندگی، وضعیت لاستیک‌ها و ترمز اصلی اثر دارند. تعداد دنده‌ها، تعداد چرخ‌ها یا نوع فرمان کمکی اثر ندارند.`,
      vocabularyIds: [
        'concentrazione', 'velocita', 'carico', 'aderenza', 'pneumatici', 'freno_servizio', 'marce', 'ruote', 'servosterzo'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_12_28_${i + 1}`)
    }
  ],
  questions: [
    {
      id: 'q_12_1_1',
      italianText: 'Per non costituire pericolo o intralcio per la circolazione, è necessario guidare in modo adeguato alle caratteristiche del veicolo, della strada e del traffico',
      farsiTranslation: 'معنی: Per نه / نمی costituire خطر o مزاحمت / مانع per la رفت‌وآمد, è necessario guidare in modo adeguato alle caratteristiche del وسیله نقلیه, della جاده e del ترافیک',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_1_2',
      italianText: 'Per non costituire pericolo o intralcio per la circolazione, è necessario osservare non solo le norme sulla circolazione, ma anche le cautele dettate dal buonsenso',
      farsiTranslation: 'معنی: Per نه / نمی costituire خطر o مزاحمت / مانع per la رفت‌وآمد, è necessario osservare نه / نمی solo le norme sulla رفت‌وآمد, ma anche le cautele dettate dal buonsenso',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_1_3',
      italianText: 'Per non costituire pericolo o intralcio per la circolazione, è necessario unire all’applicazione delle fondamentali norme sulla circolazione un forte senso civico',
      farsiTranslation: 'معنی: Per نه / نمی costituire خطر o مزاحمت / مانع per la رفت‌وآمد, è necessario unire all’applicazione delle fondamentali norme sulla رفت‌وآمد un forte senso civico',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_1_4',
      italianText: 'Per non costituire pericolo o intralcio per la circolazione, è necessario limitarsi ad osservare i limiti massimi di velocità',
      farsiTranslation: 'معنی: Per نه / نمی costituire خطر o مزاحمت / مانع per la رفت‌وآمد, è necessario limitarsi ad osservare i limiti massimi di سرعت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_1_5',
      italianText: 'Per non costituire pericolo o intralcio per la circolazione, è necessario procedere sempre a velocità costante',
      farsiTranslation: 'معنی: Per نه / نمی costituire خطر o مزاحمت / مانع per la رفت‌وآمد, è necessario procedere sempre a سرعت costante',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_1_6',
      italianText: 'Per non costituire pericolo o intralcio per la circolazione, è necessario dare, comunque, la precedenza a tutti i veicoli negli incroci',
      farsiTranslation: 'معنی: Per نه / نمی costituire خطر o مزاحمت / مانع per la رفت‌وآمد, è necessario dare, comunque, la precedenza a tutti i وسایل نقلیه negli تقاطع‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_1_7',
      italianText: 'Per non costituire pericolo o intralcio per la circolazione, è necessario limitarsi ad osservare i limiti minimi di velocità',
      farsiTranslation: 'معنی: Per نه / نمی costituire خطر o مزاحمت / مانع per la رفت‌وآمد, è necessario limitarsi ad osservare i limiti minimi di سرعت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_2_1',
      italianText: 'La velocità deve essere moderata nei tratti di strada a visuale non libera',
      farsiTranslation: 'معنی: سرعت باید essere moderata nei tratti di جاده a visuale نه / نمی libera',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_2_2',
      italianText: 'Si deve tenere una velocità che non costituisca pericolo per la sicurezza della circolazione',
      farsiTranslation: 'معنی: Si باید tenere una سرعت che نه / نمی costituisca خطر per la sicurezza della رفت‌وآمد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_2_3',
      italianText: 'Si deve tenere una velocità che consenta di intervenire con sicurezza in caso di imprevisti',
      farsiTranslation: 'معنی: Si باید tenere una سرعت che consenta di intervenire con sicurezza in caso di imprevisti',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_2_4',
      italianText: 'Si deve tenere una velocità adeguata alle proprie condizioni psicofisiche',
      farsiTranslation: 'معنی: Si باید tenere una سرعت adeguata alle proprie condizioni psicofisiche',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_2_5',
      italianText: 'È obbligo del conducente regolare la velocità in relazione al carico del veicolo',
      farsiTranslation: 'معنی: È obbligo del conducente regolare la سرعت in relazione al بار del وسیله نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_2_6',
      italianText: 'Si deve tenere una velocità regolata in funzione del tempo che abbiamo a disposizione',
      farsiTranslation: 'معنی: Si باید tenere una سرعت regolata in funzione del tempo che abbiamo a disposizione',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_2_7',
      italianText: 'La velocità deve essere moderata fuori dai centri abitati',
      farsiTranslation: 'معنی: سرعت باید essere moderata fuori dai مناطق مسکونی / شهری',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_3_1',
      italianText: 'Il conducente deve regolare la velocità in relazione alle caratteristiche del veicolo',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in relazione alle caratteristiche del وسیله نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_2',
      italianText: 'Il conducente deve regolare la velocità in relazione allo stato del veicolo',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in relazione allo stato del وسیله نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_3',
      italianText: 'Il conducente deve regolare la velocità in relazione al carico del veicolo',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in relazione al بار del وسیله نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_4',
      italianText: 'Il conducente deve regolare la velocità in relazione alle caratteristiche della strada',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in relazione alle caratteristiche della جاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_5',
      italianText: 'Il conducente deve regolare la velocità in relazione alle condizioni della strada',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in relazione alle condizioni della جاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_6',
      italianText: 'Il conducente deve regolare la velocità in relazione alle condizioni del traffico',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in relazione alle condizioni del ترافیک',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_7',
      italianText: 'Il conducente deve regolare la velocità in modo da non costituire pericolo di danno alle cose',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in modo da نه / نمی costituire خطر di danno alle cose',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_8',
      italianText: 'Il conducente deve regolare la velocità in modo da non costituire pericolo per le persone',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in modo da نه / نمی costituire خطر per le persone',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_9',
      italianText: 'Il conducente deve regolare la velocità in modo da non costituire disordine per la circolazione',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in modo da نه / نمی costituire disordine per la رفت‌وآمد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_10',
      italianText: 'Il conducente deve regolare la velocità entro i limiti massimi consentiti',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت entro i limiti massimi consentiti',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_11',
      italianText: 'Il conducente deve regolare la velocità in modo da rispettare le limitazioni imposte',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in modo da rispettare le limitazioni imposte',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_12',
      italianText: 'Il conducente deve regolare la velocità in relazione alle condizioni atmosferiche',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in relazione alle condizioni atmosferiche',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3_13',
      italianText: 'Il conducente deve regolare la velocità tenendo conto esclusivamente dei limiti massimi',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت tenendo conto esclusivamente dei limiti massimi',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_3_14',
      italianText: 'Il conducente deve regolare la velocità in relazione alla propria abilità alla guida',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in relazione alla propria abilità alla guida',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_3_15',
      italianText: 'Il conducente deve regolare la velocità in relazione alla marca dei pneumatici',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in relazione alla marca dei لاستیک‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_3_16',
      italianText: 'Il conducente deve regolare la velocità in relazione alla distanza del luogo da raggiungere',
      farsiTranslation: 'معنی: راننده باید regolare la سرعت in relazione alla distanza del luogo da raggiungere',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_1',
      italianText: 'Il conducente deve sempre mantenere il controllo del veicolo',
      farsiTranslation: 'معنی: راننده باید sempre mantenere il controllo del وسیله نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_2',
      italianText: 'Il conducente deve sempre essere in grado di arrestare il veicolo in condizioni di sicurezza',
      farsiTranslation: 'معنی: راننده باید sempre essere in grado di arrestare il وسیله نقلیه in condizioni di sicurezza',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_3',
      italianText: 'Il conducente deve poter arrestare il veicolo nel campo di visibilità e in condizioni di sicurezza',
      farsiTranslation: 'معنی: راننده باید poter arrestare il وسیله نقلیه nel campo di دید e in condizioni di sicurezza',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_4',
      italianText: 'È obbligatorio regolare la velocità nelle curve',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nelle پیچ‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_5',
      italianText: 'È obbligatorio regolare la velocità nei tratti di strada a visibilità limitata',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nei tratti di جاده a دید limitata',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_6',
      italianText: 'È obbligatorio regolare la velocità in prossimità delle intersezioni',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت in prossimità delle intersezioni',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_7',
      italianText: 'È obbligatorio regolare la velocità in prossimità delle scuole',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت in prossimità delle مدارس',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_8',
      italianText: 'È obbligatorio regolare la velocità in prossimità di luoghi frequentati dai bambini',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت in prossimità di luoghi frequentati dai bambini',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_9',
      italianText: 'È obbligatorio regolare la velocità nelle forti discese',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nelle forti discese',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_10',
      italianText: 'È obbligatorio regolare la velocità nei passaggi stretti',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nei passaggi stretti',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_11',
      italianText: 'È obbligatorio regolare la velocità nei passaggi ingombrati',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nei passaggi ingombrati',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_12',
      italianText: 'È obbligatorio regolare la velocità nelle ore notturne',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nelle ore notturne',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_13',
      italianText: 'È obbligatorio regolare la velocità nell’attraversamento di abitati',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nell’attraversamento di abitati',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_14',
      italianText: 'È obbligatorio regolare la velocità nei tratti di strada fiancheggiati da edifici',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nei tratti di جاده fiancheggiati da edifici',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_15',
      italianText: 'È obbligatorio ridurre la velocità quando sia difficoltoso l’incrocio con altri veicoli',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت quando sia difficoltoso l’تقاطع con altri وسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_16',
      italianText: 'È obbligatorio regolare la velocità in caso di nebbia o foschia',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت in caso di مه o foschia',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_17',
      italianText: 'È obbligatorio regolare la velocità nei tratti di strada coperti da neve',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nei tratti di جاده coperti da برف',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_18',
      italianText: 'È obbligatorio regolare la velocità nei tratti di strada coperti da ghiaccio',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nei tratti di جاده coperti da یخ',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4_19',
      italianText: 'È obbligatorio ridurre la velocità su strada a senso unico',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت su جاده a senso unico',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_20',
      italianText: 'È obbligatorio ridurre la velocità fuori dai centri abitati',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت fuori dai مناطق مسکونی / شهری',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_21',
      italianText: 'È obbligatorio ridurre la velocità nelle strade provinciali',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت nelle strade provinciali',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_22',
      italianText: 'È obbligatorio regolare la velocità nelle ore diurne ma non in quelle notturne',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nelle ore diurne ma نه / نمی in quelle notturne',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_23',
      italianText: 'È obbligatorio regolare la velocità nei rettilinei e non in curva',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت nei rettilinei e نه / نمی in curva',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_24',
      italianText: 'È obbligatorio ridurre la velocità nelle strade in salita',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت nelle strade in salita',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_25',
      italianText: 'È obbligatorio ridurre la velocità in presenza di qualunque segnale stradale',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت in presenza di qualunque segnale جادهle',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_26',
      italianText: 'È obbligatorio ridurre la velocità solo in presenza degli agenti del traffico',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت solo in presenza degli agenti del ترافیک',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_27',
      italianText: 'È obbligatorio regolare la velocità sulle strade extraurbane secondarie, ma non in quelle principali',
      farsiTranslation: 'معنی: È obbligatorio regolare la سرعت sulle راه‌های برون‌شهری فرعی, ma نه / نمی in quelle principali',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_28',
      italianText: 'È obbligatorio ridurre la velocità solo se l’autovettura è scarica',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت solo se l’خودروی سواری è scarica',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_4_29',
      italianText: 'È obbligatorio ridurre la velocità in prossimità degli autovelox',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت in prossimità degli autovelox',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_5_1',
      italianText: 'La velocità deve essere particolarmente moderata in prossimità di un incrocio',
      farsiTranslation: 'معنی: سرعت باید essere particolarmente moderata in prossimità di un تقاطع',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_5_2',
      italianText: 'La velocità deve essere particolarmente moderata nelle strettoie',
      farsiTranslation: 'معنی: سرعت باید essere particolarmente moderata nelle strettoie',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_5_3',
      italianText: 'La velocità deve essere particolarmente moderata quando risulta difficoltoso l’incrocio con altri veicoli',
      farsiTranslation: 'معنی: سرعت باید essere particolarmente moderata quando risulta difficoltoso l’تقاطع con altri وسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_5_4',
      italianText: 'La velocità deve essere particolarmente moderata nei tratti di strada in cui manca la visibilità (curve, dossi)',
      farsiTranslation: 'معنی: سرعت باید essere particolarmente moderata nei tratti di جاده in cui manca la دید (پیچ‌ها, برآمدگی‌ها)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_5_5',
      italianText: 'La velocità deve essere particolarmente moderata quando, in mancanza di marciapiedi, i pedoni occupano la carreggiata',
      farsiTranslation: 'معنی: سرعت باید essere particolarmente moderata quando, in mancanza di marciapiedi, i عابران پیاده occupano la carreggiata',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_5_6',
      italianText: 'Si deve diminuire la velocità quando la strada è viscida, a causa di acqua, neve, ghiaccio, foglie o fango',
      farsiTranslation: 'معنی: Si باید diminuire la سرعت quando la جاده è viscida, a causa di acqua, برف, یخ, foglie o گل',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_5_7',
      italianText: 'La velocità deve essere particolarmente moderata subito dopo il tramonto del sole',
      farsiTranslation: 'معنی: سرعت باید essere particolarmente moderata subito dopo il tramonto del sole',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_5_8',
      italianText: 'La velocità deve essere particolarmente moderata subito dopo un incrocio',
      farsiTranslation: 'معنی: سرعت باید essere particolarmente moderata subito dopo un تقاطع',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_5_9',
      italianText: 'Si deve regolare la velocità in base alla fretta del conducente',
      farsiTranslation: 'معنی: Si باید regolare la سرعت in base alla fretta del conducente',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_5_10',
      italianText: 'Si deve tenere una velocità adeguata solo alle nostre condizioni di salute',
      farsiTranslation: 'معنی: Si باید tenere una سرعت adeguata solo alle nostre condizioni di salute',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_5_11',
      italianText: 'Si deve tenere una velocità sempre superiore a 30 km/h',
      farsiTranslation: 'معنی: Si باید tenere una سرعت sempre superiore a 30 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_5_12',
      italianText: 'Si deve diminuire la velocità quando si è seguiti da un autobus di linea',
      farsiTranslation: 'معنی: Si باید diminuire la سرعت quando si è seguiti da un autobus di linea',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_6_1',
      italianText: 'Si deve regolare la velocità in base allo stato di manutenzione e pulizia della strada',
      farsiTranslation: 'معنی: Si باید regolare la سرعت in base allo stato di manutenzione e pulizia della جاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_6_2',
      italianText: 'La velocità deve essere diminuita in caso di forte vento laterale',
      farsiTranslation: 'معنی: سرعت باید essere diminuita in caso di forte vento laterale',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_6_3',
      italianText: 'La velocità va diminuita in caso di abbagliamento dovuto al sole',
      farsiTranslation: 'معنی: سرعت va diminuita in caso di abbagliamento dovuto al sole',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_6_4',
      italianText: 'Sulle autostrade e sulle strade extraurbane principali, in caso di nebbia fitta, con visibilità inferiore a 100 m, possono essere imposti limiti massimi temporanei di velocità, non superiori a 50 km/h',
      farsiTranslation: 'معنی: Sulle آزادراه‌ها e sulle راه‌های برون‌شهری اصلی, in caso di مه fitta, con دید inferiore a 100 m, possono essere imposti limiti massimi temporanei di سرعت, نه / نمی superiori a 50 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_6_5',
      italianText: 'Salvo diversa segnalazione, il limite massimo di velocità sulle strade extraurbane principali è di 100 km/h',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, il limite massimo di سرعت sulle راه‌های برون‌شهری اصلی è di 100 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_6_6',
      italianText: 'Salvo diversa segnalazione, il limite massimo di velocità nei centri abitati è di 60 km/h, valido fino ad un chilometro dopo l’uscita del paese',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, il limite massimo di سرعت nei مناطق مسکونی / شهری è di 60 km/h, valido fino ad un chilometro dopo l’uscita del paese',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_6_7',
      italianText: 'Si deve diminuire la velocità ogni qualvolta si incontra un segnale stradale di indicazione',
      farsiTranslation: 'معنی: Si باید diminuire la سرعت ogni qualvolta si incontra un segnale جادهle di indicazione',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_7_1',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi quando riesce malagevole l’incrocio con altri veicoli',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi quando riesce malagevole l’تقاطع con altri وسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_7_2',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi in prossimità degli attraversamenti pedonali',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi in prossimità degli attraversamenti pedonali',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_7_3',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi quando i pedoni, che sono sul percorso, tardano a scansarsi',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi quando i عابران پیاده, che sono sul percorso, tardano a scansarsi',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_7_4',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi quando i pedoni, che sono sul percorso, danno segni d’incer- tezza',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi quando i عابران پیاده, che sono sul percorso, danno segni d’incer- tezza',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_7_5',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi quando gli animali che si trovano sulla strada danno segni di spavento',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi quando gli حیوانات che si trovano sulla جاده danno segni di spavento',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_7_6',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi quando si rimane abbagliati',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi quando si rimane خیره‌شده از نور',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_7_7',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi in corrispondenza dei passi carrabili',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi in corrispondenza dei passi carrabili',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_7_8',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi in prossimità delle fermate degli autobus',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi in prossimità delle fermate degli autobus',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_7_9',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi ogni volta che si percorre un cavalcavia',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi ogni volta che si percorre un cavalcavia',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_7_10',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi in prossimità degli autovelox',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi in prossimità degli autovelox',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_7_11',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi in corrispondenza di qualunque segnale stradale',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi in corrispondenza di qualunque segnale جادهle',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_7_12',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi all’uscita dei centri abitati',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi all’uscita dei مناطق مسکونی / شهری',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_8_1',
      italianText: 'La velocità dei veicoli deve essere regolata in modo da non causare intralcio alla circolazione',
      farsiTranslation: 'معنی: سرعت dei وسایل نقلیه باید essere regolata in modo da نه / نمی causare مزاحمت / مانع alla رفت‌وآمد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_8_2',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi negli incroci, per far passare i veicoli cui spetti la precedenza',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi negli تقاطع‌ها, per far passare i وسایل نقلیه cui spetti la precedenza',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_8_3',
      italianText: 'È obbligatorio ridurre la velocità e all’occorrenza fermarsi da mezz’ora prima del tramonto a mezz’ora dopo il sorgere del sole',
      farsiTranslation: 'معنی: È obbligatorio ridurre la سرعت e all’occorrenza fermarsi da mezz’ora prima del tramonto a mezz’ora dopo il sorgere del sole',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_8_4',
      italianText: 'Si è tenuti a regolare la velocità in funzione del tipo di alimentazione del motore',
      farsiTranslation: 'معنی: Si è tenuti a regolare la سرعت in funzione del tipo di alimentazione del motore',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_8_5',
      italianText: 'Si è tenuti a regolare la velocità in funzione della velocità dei veicoli che seguono',
      farsiTranslation: 'معنی: Si è tenuti a regolare la سرعت in funzione della سرعت dei وسایل نقلیه che seguono',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_8_6',
      italianText: 'Si è tenuti a regolare la velocità in funzione del tipo di cambio di velocità',
      farsiTranslation: 'معنی: Si è tenuti a regolare la سرعت in funzione del tipo di cambio di سرعت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_9_1',
      italianText: 'Il segnale raffigurato viene posto in vicinanza della frontiera italiana, visibile dai conducenti provenienti dallo Stato estero',
      farsiTranslation: 'معنی: Il segnale raffigurato viene posto in vicinanza della frontiera italiana, visibile dai conducenti provenienti dallo Stato estero',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_9_2',
      italianText: 'Il segnale raffigurato indica i limiti massimi di velocità generali che valgono in Italia',
      farsiTranslation: 'معنی: Il segnale raffigurato indica i limiti massimi di سرعت generali che valgono in Italia',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_9_3',
      italianText: 'Il segnale raffigurato indica nel primo riquadro in alto il limite massimo di velocità nei centri abitati',
      farsiTranslation: 'معنی: Il segnale raffigurato indica nel primo riquadro in alto il limite massimo di سرعت nei مناطق مسکونی / شهری',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_9_4',
      italianText: 'Il segnale raffigurato indica in 90 km/h il limite massimo di velocità su strade extraurbane secondarie',
      farsiTranslation: 'معنی: Il segnale raffigurato indica in 90 km/h il limite massimo di سرعت su راه‌های برون‌شهری فرعی',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_9_5',
      italianText: 'Il segnale raffigurato indica in 110 km/h il limite massimo di velocità sulle strade extraurbane principali',
      farsiTranslation: 'معنی: Il segnale raffigurato indica in 110 km/h il limite massimo di سرعت sulle راه‌های برون‌شهری اصلی',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_9_6',
      italianText: 'Il segnale raffigurato indica in 130 km/h il limite massimo di velocità sulle autostrade',
      farsiTranslation: 'معنی: Il segnale raffigurato indica in 130 km/h il limite massimo di سرعت sulle آزادراه‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_9_7',
      italianText: 'Il segnale raffigurato indica in 90 km/h il limite massimo di velocità nei centri abitati',
      farsiTranslation: 'معنی: Il segnale raffigurato indica in 90 km/h il limite massimo di سرعت nei مناطق مسکونی / شهری',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_9_8',
      italianText: 'Il segnale raffigurato indica il numero di autostrade in Italia che si possono percorrere senza pagarne il pedaggio',
      farsiTranslation: 'معنی: Il segnale raffigurato indica il numero di آزادراه‌ها in Italia che si possono percorrere senza pagarne il pedaggio',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_9_9',
      italianText: 'Il segnale raffigurato indica in 130 km/h il limite massimo di velocità su strade extraurbane principali',
      farsiTranslation: 'معنی: Il segnale raffigurato indica in 130 km/h il limite massimo di سرعت su راه‌های برون‌شهری اصلی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_9_10',
      italianText: 'Il segnale raffigurato si trova all’ingresso di ogni città',
      farsiTranslation: 'معنی: Il segnale raffigurato si trova all’ingresso di ogni città',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_9_11',
      italianText: 'Il segnale raffigurato indica i limiti minimi di velocità che valgono in Italia',
      farsiTranslation: 'معنی: Il segnale raffigurato indica i limiti minimi di سرعت che valgono in Italia',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_10_1',
      italianText: 'Il limite di velocità sulle autostrade per coloro che hanno conseguito la patente da meno di 3 anni è di 100 km/h',
      farsiTranslation: 'معنی: Il limite di سرعت sulle آزادراه‌ها per coloro che hanno conseguito la patente da meno di 3 anni è di 100 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_10_2',
      italianText: 'Il limite di velocità sulle strade extraurbane principali per coloro che hanno conseguito la patente da meno di 3 anni è di 90 km/h',
      farsiTranslation: 'معنی: Il limite di سرعت sulle راه‌های برون‌شهری اصلی per coloro che hanno conseguito la patente da meno di 3 anni è di 90 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_10_3',
      italianText: 'Viaggiare ad alta velocità incide sul consumo di carburante e sull’inquinamento ambientale',
      farsiTranslation: 'معنی: Viaggiare ad alta سرعت incide sul consumo di carburante e sull’inquinamento ambientale',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_10_4',
      italianText: 'Brusche variazioni di velocità comportano maggior consumo di carburante',
      farsiTranslation: 'معنی: Brusche variazioni di سرعت comportano maggior consumo di carburante',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_10_5',
      italianText: 'La velocità in curva incide sulla tenuta di strada del veicolo',
      farsiTranslation: 'معنی: سرعت in curva incide sulla tenuta di جاده del وسیله نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_10_6',
      italianText: 'L’eccessiva velocità in curva può determinare il ribaltamento del veicolo',
      farsiTranslation: 'معنی: L’eccessiva سرعت in curva می‌تواند determinare il ribaltamento del وسیله نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_10_7',
      italianText: 'I tratti di strada in curva debbono essere percorsi con il pedale della frizione abbassato',
      farsiTranslation: 'معنی: I tratti di جاده in curva debbono essere percorsi con il pedale della frizione abbassato',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_10_8',
      italianText: 'Il limite di velocità sulle autostrade per coloro che hanno conseguito la patente da meno di tre anni è di 110 km/h',
      farsiTranslation: 'معنی: Il limite di سرعت sulle آزادراه‌ها per coloro che hanno conseguito la patente da meno di tre anni è di 110 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_10_9',
      italianText: 'Il limite di velocità sulle strade extraurbane principali per coloro che hanno conseguito la patente da meno di 3 anni è di 110 km/h',
      farsiTranslation: 'معنی: Il limite di سرعت sulle راه‌های برون‌شهری اصلی per coloro che hanno conseguito la patente da meno di 3 anni è di 110 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_1',
      italianText: 'Il limite massimo di velocità per un’autovettura sulle autostrade è ordinariamente di 130 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری sulle آزادراه‌ها è ordinariamente di 130 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_2',
      italianText: 'Il limite massimo di velocità per un’autovettura sulle strade extraurbane principali è ordinariamente di 110 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری sulle راه‌های برون‌شهری اصلی è ordinariamente di 110 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_3',
      italianText: 'Il limite massimo di velocità per un’autovettura sulle strade extraurbane secondarie è di 90 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری sulle راه‌های برون‌شهری فرعی è di 90 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_4',
      italianText: 'Il limite massimo di velocità per un’autovettura nei centri abitati è ordinariamente di 50 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری nei مناطق مسکونی / شهری è ordinariamente di 50 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_5',
      italianText: 'Il limite massimo di velocità per un autoveicolo fino a 3,5 tonnellate sulle autostrade è ordinariamente di 130 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un autoوسیله نقلیه fino a 3,5 tonnellate sulle آزادراه‌ها è ordinariamente di 130 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_6',
      italianText: 'Il limite massimo di velocità per un autocarro fino a 3,5 tonnellate sulle strade extraurbane principali è di 110 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un autocarro fino a 3,5 tonnellate sulle راه‌های برون‌شهری اصلی è di 110 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_7',
      italianText: 'Il limite massimo di velocità per un autoveicolo fino a 3,5 tonnellate sulle strade extraurbane secondarie è di 90 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un autoوسیله نقلیه fino a 3,5 tonnellate sulle راه‌های برون‌شهری فرعی è di 90 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_8',
      italianText: 'Il limite massimo di velocità per un motociclo nei centri abitati, è ordinariamente di 50 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un motociclo nei مناطق مسکونی / شهری, è ordinariamente di 50 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_9',
      italianText: 'Il limite massimo di velocità per un’autovettura, in presenza di apposito segnale in tratti di autostrade con particolari caratteristiche, è di 150 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری, in presenza di apposito segnale in tratti di آزادراه‌ها con particolari caratteristiche, è di 150 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_10',
      italianText: 'Il limite massimo di velocità per un’autovettura in presenza di segnali su una strada urbana con particolari caratteristiche è di 70 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری in presenza di segnali su una جاده urbana con particolari caratteristiche è di 70 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_11',
      italianText: 'Il limite massimo di velocità per un’autovettura in caso di precipitazioni atmosferiche sulle autostrade è di 110 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری in caso di precipitazioni atmosferiche sulle آزادراه‌ها è di 110 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_12',
      italianText: 'Il limite massimo di velocità per un’autovettura in caso di precipitazioni atmosferiche su strade extraurbane principali è di 90 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری in caso di precipitazioni atmosferiche su راه‌های برون‌شهری اصلی è di 90 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_13',
      italianText: 'Il limite massimo di velocità per i ciclomotori è di 45 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per i موتورهای کم‌حجم è di 45 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_14',
      italianText: 'Il limite massimo di velocità per i quadricicli non leggeri, fuori dai centri urbani, è di 80 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per i چهارچرخه‌های موتوری نه / نمی leggeri, fuori dai centri urbani, è di 80 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_15',
      italianText: 'Il limite massimo di velocità per una macchina agricola gommata è di 40 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per una macchina agricola gommata è di 40 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_16',
      italianText: 'Il limite massimo di velocità per una macchina operatrice gommata è di 40 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per una macchina operatrice gommata è di 40 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_11_17',
      italianText: 'Il limite massimo di velocità per un’autovettura su una qualsiasi autostrada è di 150 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری su una qualsiasi autoجاده è di 150 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_18',
      italianText: 'Il limite massimo di velocità per un’autovettura su una strada extraurbana principale è di 90 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری su una جاده extraurbana principale è di 90 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_19',
      italianText: 'Il limite massimo di velocità per un’autovettura su una strada extraurbana secondaria è di 70 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری su una جاده extraurbana secondaria è di 70 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_20',
      italianText: 'Il limite massimo di velocità per un’autovettura nei centri abitati è sempre di 70 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری nei مناطق مسکونی / شهری è sempre di 70 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_21',
      italianText: 'Il limite massimo di velocità per un’autovettura nei centri abitati è sempre di 50 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un’خودروی سواری nei مناطق مسکونی / شهری è sempre di 50 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_22',
      italianText: 'Il limite massimo di velocità dei quadricicli fuori dai centri abitati è di 70 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت dei چهارچرخه‌های موتوری fuori dai مناطق مسکونی / شهری è di 70 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_23',
      italianText: 'Il limite massimo di velocità degli autocarri nei centri abitati è di 40 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت degli autocarri nei مناطق مسکونی / شهری è di 40 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_24',
      italianText: 'Il limite massimo di velocità per un autocarro di massa complessiva fino a 3,5 tonnellate sulle autostrade è di 120 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un autocarro di massa complessiva fino a 3,5 tonnellate sulle آزادراه‌ها è di 120 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_25',
      italianText: 'Il limite massimo di velocità per un autoveicolo fino a 3,5 tonnellate sulle strade extraurbane principali è di 80 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un autoوسیله نقلیه fino a 3,5 tonnellate sulle راه‌های برون‌شهری اصلی è di 80 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_26',
      italianText: 'Il limite massimo di velocità per un autoveicolo fino a 3,5 tonnellate nei centri abitati è di 40 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per un autoوسیله نقلیه fino a 3,5 tonnellate nei مناطق مسکونی / شهری è di 40 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_27',
      italianText: 'Il limite massimo di velocità per qualsiasi veicolo nei centri abitati è di 60 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per qualsiasi وسیله نقلیه nei مناطق مسکونی / شهری è di 60 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_28',
      italianText: 'Il limite massimo di velocità per una macchina agricola con pneumatici è di 50 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per una macchina agricola con لاستیک‌ها è di 50 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_11_29',
      italianText: 'Il limite massimo di velocità per una macchina operatrice gommata è di 50 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت per una macchina operatrice gommata è di 50 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_12_1',
      italianText: 'Il limite massimo di velocità sulle autostrade è ordinariamente di 130 km/h per le autovetture con carrello appendice',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle آزادراه‌ها è ordinariamente di 130 km/h per le خودروهای سواری con تریلر کوچک متصل',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_12_2',
      italianText: 'Il limite massimo di velocità sulle autostrade è di 80 km/h per le autovetture con rimorchio',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle آزادراه‌ها è di 80 km/h per le خودروهای سواری con تریلر / یدک',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_12_3',
      italianText: 'Il limite massimo di velocità sulle autostrade è ordinariamente di 130 km/h per i motocicli',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle آزادراه‌ها è ordinariamente di 130 km/h per i موتورسیکلت‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_12_4',
      italianText: 'Il limite massimo di velocità sulle autostrade è ordinariamente di 130 km/h per autocaravan di massa complessiva fino a 3,5 tonnellate',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle آزادراه‌ها è ordinariamente di 130 km/h per autoکاروان / تریلر مسافرتی di massa complessiva fino a 3,5 tonnellate',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_12_5',
      italianText: 'Il limite massimo di velocità sulle autostrade è di 80 km/h per l’autovettura che traina un caravan',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle آزادراه‌ها è di 80 km/h per l’خودروی سواری che traina un کاروان / تریلر مسافرتی',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_12_6',
      italianText: 'Il limite massimo di velocità sulle strade extraurbane principali è ordinariamente di 110 km/h per i motocicli',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle راه‌های برون‌شهری اصلی è ordinariamente di 110 km/h per i موتورسیکلت‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_12_7',
      italianText: 'Il limite massimo di velocità sulle strade extraurbane principali è di 110 km/h per autovetture con carrello appendice',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle راه‌های برون‌شهری اصلی è di 110 km/h per خودروهای سواری con تریلر کوچک متصل',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_12_8',
      italianText: 'Il limite massimo di velocità sulle strade extraurbane principali è di 70 km/h per autovetture con rimorchio per trasporto imbarcazioni',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle راه‌های برون‌شهری اصلی è di 70 km/h per خودروهای سواری con تریلر / یدک per trasporto imbarcazioni',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_12_9',
      italianText: 'Il limite massimo di velocità sulle strade extraurbane secondarie è di 90 km/h per i motocicli',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle راه‌های برون‌شهری فرعی è di 90 km/h per i موتورسیکلت‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_12_10',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 70 km/h per autovettura che traina un caravan con massa complessiva di 900 chilogrammi',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 70 km/h per خودروی سواری che traina un کاروان / تریلر مسافرتی con massa complessiva di 900 chilogrammi',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_12_11',
      italianText: 'Il limite massimo di velocità sulle autostrade è di 130 km/h per le autovetture con rimorchio',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle آزادراه‌ها è di 130 km/h per le خودروهای سواری con تریلر / یدک',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_12_12',
      italianText: 'Il limite massimo di velocità sulle autostrade è di 90 km/h per i motocicli',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle آزادراه‌ها è di 90 km/h per i موتورسیکلت‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_12_13',
      italianText: 'Il limite massimo di velocità sulle autostrade è di 90 km/h per autocaravan',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle آزادراه‌ها è di 90 km/h per autoکاروان / تریلر مسافرتی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_12_14',
      italianText: 'Il limite massimo di velocità sulle autostrade è di 70 km/h per autovettura che traina un caravan',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle آزادراه‌ها è di 70 km/h per خودروی سواری che traina un کاروان / تریلر مسافرتی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_12_15',
      italianText: 'Il limite massimo di velocità sulle autostrade è di 120 km/h per autovettura con carrello appendice in caso di pioggia',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle آزادراه‌ها è di 120 km/h per خودروی سواری con تریلر کوچک متصل in caso di باران',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_12_16',
      italianText: 'Il limite massimo di velocità su strade extraurbane principali è di 100 km/h per i motocicli',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری اصلی è di 100 km/h per i موتورسیکلت‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_12_17',
      italianText: 'Il limite massimo di velocità sulle strade extraurbane principali è di 80 km/h per autovetture con rimorchio per trasporto di imbarcazioni',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle راه‌های برون‌شهری اصلی è di 80 km/h per خودروهای سواری con تریلر / یدک per trasporto di imbarcazioni',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_12_18',
      italianText: 'Il limite massimo di velocità sulle strade extraurbane secondarie è di 70 km/h per i motocicli',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle راه‌های برون‌شهری فرعی è di 70 km/h per i موتورسیکلت‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_13_1',
      italianText: 'In presenza di apposito segnale, il limite massimo di velocità consentito può essere di 150 km/h su tratti di autostrade con particolari caratteristiche',
      farsiTranslation: 'معنی: In presenza di apposito segnale, il limite massimo di سرعت consentito می‌تواند essere di 150 km/h su tratti di آزادراه‌ها con particolari caratteristiche',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_13_2',
      italianText: 'Salvo diversa segnalazione, il limite massimo di velocità consentito è di 130 km/h sulle autostrade',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, il limite massimo di سرعت consentito è di 130 km/h sulle آزادراه‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_13_3',
      italianText: 'Salvo diversa segnalazione, il limite massimo di velocità consentito è di 50 km/h nei centri abitati',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, il limite massimo di سرعت consentito è di 50 km/h nei مناطق مسکونی / شهری',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_13_4',
      italianText: 'Salvo diversa segnalazione, per i ciclomotori il limite massimo di velocità consentito è di 45 km/h',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, per i موتورهای کم‌حجم il limite massimo di سرعت consentito è di 45 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_13_5',
      italianText: 'Salvo diversa segnalazione, il limite massimo di velocità consentito per macchine agricole e macchine operatrici con pneumatici è di 40 km/h',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, il limite massimo di سرعت consentito per ماشین‌های کشاورزی e ماشین‌های عملیاتی con لاستیک‌ها è di 40 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_13_6',
      italianText: 'Salvo diversa segnalazione, il limite massimo di velocità consentito sulle autostrade è di 110 km/h in caso di pioggia',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, il limite massimo di سرعت consentito sulle آزادراه‌ها è di 110 km/h in caso di باران',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_13_7',
      italianText: 'Salvo diversa segnalazione, il limite massimo di velocità consentito su strade extraurbane principali è di 90 km/h in caso grandine',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, il limite massimo di سرعت consentito su راه‌های برون‌شهری اصلی è di 90 km/h in caso grandine',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_13_8',
      italianText: 'In presenza di appositi segnali, il limite massimo di velocità consentito nei centri abitati su strade con particolari caratte- ristiche è di 70 km/h',
      farsiTranslation: 'معنی: In presenza di appositi segnali, il limite massimo di سرعت consentito nei مناطق مسکونی / شهری su strade con particolari caratte- ristiche è di 70 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_13_9',
      italianText: 'Salvo diversa segnalazione, il limite massimo di velocità consentito sulle strade extraurbane principali è di 110 km/h',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, il limite massimo di سرعت consentito sulle راه‌های برون‌شهری اصلی è di 110 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_13_10',
      italianText: 'Salvo diversa segnalazione, il limite massimo di velocità consentito sulle strade urbane è di 80 km/h',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, il limite massimo di سرعت consentito sulle strade urbane è di 80 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_13_11',
      italianText: 'Salvo diversa segnalazione, il limite massimo di velocità consentito per i quadricicli non leggeri è di 70 km/h',
      farsiTranslation: 'معنی: Salvo diversa segnalazione, il limite massimo di سرعت consentito per i چهارچرخه‌های موتوری نه / نمی leggeri è di 70 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_13_12',
      italianText: 'Il limite massimo di velocità consentito su qualsiasi autostrada è di 150 km/h',
      farsiTranslation: 'معنی: Il limite massimo di سرعت consentito su qualsiasi autoجاده è di 150 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_14_1',
      italianText: 'Su strade extraurbane principali il limite massimo di velocità è di 110 km/h per le autovetture',
      farsiTranslation: 'معنی: Su راه‌های برون‌شهری اصلی il limite massimo di سرعت è di 110 km/h per le خودروهای سواری',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_14_2',
      italianText: 'Su strade extraurbane principali il limite massimo di velocità è di 70 km/h per autovettura che traina caravan da 900 chilogrammi',
      farsiTranslation: 'معنی: Su راه‌های برون‌شهری اصلی il limite massimo di سرعت è di 70 km/h per خودروی سواری che traina کاروان / تریلر مسافرتی da 900 chilogrammi',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_14_3',
      italianText: 'Su strade extraurbane principali il limite massimo di velocità è di 110 km/h per autoveicoli fino a 3,5 t',
      farsiTranslation: 'معنی: Su راه‌های برون‌شهری اصلی il limite massimo di سرعت è di 110 km/h per autoوسایل نقلیه fino a 3,5 t',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_14_4',
      italianText: 'Su strade extraurbane principali il limite massimo di velocità è di 70 km/h per autotreni',
      farsiTranslation: 'معنی: Su راه‌های برون‌شهری اصلی il limite massimo di سرعت è di 70 km/h per autotreni',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_14_5',
      italianText: 'Su strade extraurbane principali il limite massimo di velocità è di 100 km/h per autocarri di massa complessiva fino a 3,5 t',
      farsiTranslation: 'معنی: Su راه‌های برون‌شهری اصلی il limite massimo di سرعت è di 100 km/h per autocarri di massa complessiva fino a 3,5 t',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_14_6',
      italianText: 'Su strade extraurbane principali il limite massimo di velocità è di 100 km/h per autocaravan di massa complessiva fino a 3,5 t',
      farsiTranslation: 'معنی: Su راه‌های برون‌شهری اصلی il limite massimo di سرعت è di 100 km/h per autoکاروان / تریلر مسافرتی di massa complessiva fino a 3,5 t',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_14_7',
      italianText: 'Su strade extraurbane principali il limite massimo di velocità è di 80 km/h per autovetture con rimorchio leggero',
      farsiTranslation: 'معنی: Su راه‌های برون‌شهری اصلی il limite massimo di سرعت è di 80 km/h per خودروهای سواری con تریلر / یدک leggero',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_14_8',
      italianText: 'Su strade extraurbane principali il limite massimo di velocità è di 100 km/h per motocicli',
      farsiTranslation: 'معنی: Su راه‌های برون‌شهری اصلی il limite massimo di سرعت è di 100 km/h per موتورسیکلت‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_14_9',
      italianText: 'Su strade extraurbane principali il limite massimo di velocità è di 100 km/h per le autovetture con carrello appendice',
      farsiTranslation: 'معنی: Su راه‌های برون‌شهری اصلی il limite massimo di سرعت è di 100 km/h per le خودروهای سواری con تریلر کوچک متصل',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_15_1',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 90 km/h per motocicli',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 90 km/h per موتورسیکلت‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_15_2',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 90 km/h per autovetture con carrello appendice',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 90 km/h per خودروهای سواری con تریلر کوچک متصل',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_15_3',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 70 km/h per autovetture con rimorchio per trasporto di imbarcazioni o simili',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 70 km/h per خودروهای سواری con تریلر / یدک per trasporto di imbarcazioni o simili',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_15_4',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 90 km/h per autocaravan di massa complessiva fino a 3,5 t',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 90 km/h per autoکاروان / تریلر مسافرتی di massa complessiva fino a 3,5 t',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_15_5',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 90 km/h per autocarri di massa complessiva fino a 3,5 t',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 90 km/h per autocarri di massa complessiva fino a 3,5 t',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_15_6',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 70 km/h per autotreni',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 70 km/h per autotreni',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_15_7',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 70 km/h per i ciclomotori',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 70 km/h per i موتورهای کم‌حجم',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_15_8',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 90 km/h per i quadricicli non leggeri',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 90 km/h per i چهارچرخه‌های موتوری نه / نمی leggeri',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_15_9',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 80 km/h per motocicli',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 80 km/h per موتورسیکلت‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_15_10',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 100 km/h per le autovetture',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 100 km/h per le خودروهای سواری',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_15_11',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 80 km/h per autovettura che traina caravan da 750 chilogrammi',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 80 km/h per خودروی سواری che traina کاروان / تریلر مسافرتی da 750 chilogrammi',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_15_12',
      italianText: 'Il limite massimo di velocità su strade extraurbane secondarie è di 100 km/h per autoveicoli fino a 3,5 tonnellate',
      farsiTranslation: 'معنی: Il limite massimo di سرعت su راه‌های برون‌شهری فرعی è di 100 km/h per autoوسایل نقلیه fino a 3,5 tonnellate',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_15_13',
      italianText: 'Su strade extraurbane secondarie il limite massimo di velocità è di 80 km/h per autovetture con carrello appendice',
      farsiTranslation: 'معنی: Su راه‌های برون‌شهری فرعی il limite massimo di سرعت è di 80 km/h per خودروهای سواری con تریلر کوچک متصل',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_16_1',
      italianText: 'Sulle autostrade, il limite massimo di velocità è di 80 km/h per le autovetture che trainano un rimorchio per il trasporto di cavalli',
      farsiTranslation: 'معنی: Sulle آزادراه‌ها, il limite massimo di سرعت è di 80 km/h per le خودروهای سواری che trainano un تریلر / یدک per il trasporto di cavalli',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_16_2',
      italianText: 'Il limite massimo di velocità sulle strade extraurbane secondarie è di 70 km/h per le autovetture che trainano un rimorchio per il trasporto di motocicli',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle راه‌های برون‌شهری فرعی è di 70 km/h per le خودروهای سواری che trainano un تریلر / یدک per il trasporto di موتورسیکلت‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_16_3',
      italianText: 'Si deve, in particolare, regolare la velocità in presenza di lavori in corso',
      farsiTranslation: 'معنی: Si باید, in particolare, regolare la سرعت in presenza di lavori in corso',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_16_4',
      italianText: 'Si deve, in particolare, regolare la velocità se si incontra sulla strada il segnale di veicolo fermo (triangolo mobile di pericolo)',
      farsiTranslation: 'معنی: Si باید, in particolare, regolare la سرعت se si incontra sulla جاده il segnale di وسیله نقلیه fermo (triangolo mobile di خطر)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_16_5',
      italianText: 'Quando si viaggia per file parallele, è possibile che nella corsia di destra si circoli ad una velocità superiore a quella di sinistra',
      farsiTranslation: 'معنی: Quando si viaggia per file parallele, è possibile che nella corsia di destra si circoli ad una سرعت superiore a quella di sinistra',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_16_6',
      italianText: 'Lungo le corsie di canalizzazione, è possibile che nella corsia di destra si circoli ad una velocità superiore a quella di sinistra',
      farsiTranslation: 'معنی: Lungo le corsie di canalizzazione, è possibile che nella corsia di destra si circoli ad una سرعت superiore a quella di sinistra',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_16_7',
      italianText: 'Quando il traffico risulta canalizzato, è possibile che nella corsia di destra si circoli ad una velocità superiore a quella di sinistra',
      farsiTranslation: 'معنی: Quando il ترافیک risulta canalizzato, è possibile che nella corsia di destra si circoli ad una سرعت superiore a quella di sinistra',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_16_8',
      italianText: 'Sulle autostrade a quattro corsie è consentito viaggiare fino a 170 km/h',
      farsiTranslation: 'معنی: Sulle آزادراه‌ها a quattro corsie è consentito viaggiare fino a 170 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_16_9',
      italianText: 'Sulle autostrade è consentito superare, nelle ore notturne, la velocità di 130 km/h, purché si usino i proiettori a luce abbagliante',
      farsiTranslation: 'معنی: Sulle آزادراه‌ها è consentito superare, nelle ore notturne, la سرعت di 130 km/h, purché si usino i proiettori a luce abbagliante',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_16_10',
      italianText: 'In autostrada, nella corsia riservata al sorpasso, non è consentito superare la velocità di 110 km/h',
      farsiTranslation: 'معنی: In autoجاده, nella corsia riservata al sorpasso, نه / نمی è consentito superare la سرعت di 110 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_16_11',
      italianText: 'Nelle autostrade, il limite massimo di velocità è di 150 km/h nelle ore diurne e di 130 km/h in quelle notturne',
      farsiTranslation: 'معنی: Nelle آزادراه‌ها, il limite massimo di سرعت è di 150 km/h nelle ore diurne e di 130 km/h in quelle notturne',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_16_12',
      italianText: 'Sulle strade extraurbane principali, che abbiano particolari caratteristiche costruttive e di sicurezza, è possibile che il limite massimo di velocità sia di 130 km/h',
      farsiTranslation: 'معنی: Sulle راه‌های برون‌شهری اصلی, che abbiano particolari caratteristiche costruttive e di sicurezza, è possibile che il limite massimo di سرعت sia di 130 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_16_13',
      italianText: 'Sulle strade extraurbane principali è consentito superare la velocità di 110 km/h, ma solo nei tratti di strada in discesa',
      farsiTranslation: 'معنی: Sulle راه‌های برون‌شهری اصلی è consentito superare la سرعت di 110 km/h, ma solo nei tratti di جاده in discesa',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_16_14',
      italianText: 'Il limite massimo di velocità sulle strade extraurbane secondarie è di 90 km/h per le autovetture che trainano un rimorchio per il trasporto di gommoni o alianti',
      farsiTranslation: 'معنی: Il limite massimo di سرعت sulle راه‌های برون‌شهری فرعی è di 90 km/h per le خودروهای سواری che trainano un تریلر / یدک per il trasporto di gommoni o alianti',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_16_15',
      italianText: 'Sulle strade extraurbane secondarie il limite massimo di velocità per le macchine agricole e le macchine operatrici è di 70 km/h, se hanno in funzione il dispositivo a luce gialla lampeggiante',
      farsiTranslation: 'معنی: Sulle راه‌های برون‌شهری فرعی il limite massimo di سرعت per le ماشین‌های کشاورزی e le ماشین‌های عملیاتی è di 70 km/h, se hanno in funzione il dispositivo a luce gialla lampeggiante',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_17_1',
      italianText: 'I contrassegni rappresentati in figura sono applicati sulla parte posteriore di alcune categorie di veicoli (FIG 301)',
      farsiTranslation: 'معنی: I contrassegni rappresentati in figura sono applicati sulla parte posteriore di alcune categorie di وسایل نقلیه (FIG 301)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_17_2',
      italianText: 'I contrassegni rappresentati in figura indicano le velocità massime consentite al veicolo sul quale sono applicati (FIG 301)',
      farsiTranslation: 'معنی: I contrassegni rappresentati in figura indicano le سرعت massime consentite al وسیله نقلیه sul quale sono applicati (FIG 301)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_17_3',
      italianText: 'I contrassegni rappresentati in figura sono applicati ad alcuni autobus (FIG 301)',
      farsiTranslation: 'معنی: I contrassegni rappresentati in figura sono applicati ad alcuni autobus (FIG 301)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_17_4',
      italianText: 'La velocità deve essere diminuita in caso di traffico misto (presenza di veicoli lenti e veloci o di animali e pedoni che occupano la strada)',
      farsiTranslation: 'معنی: سرعت باید essere diminuita in caso di ترافیک misto (presenza di وسایل نقلیه lenti e veloci o di حیوانات e عابران پیاده che occupano la جاده)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_17_5',
      italianText: 'Si deve regolare la velocità in base alle condizioni del fondo stradale (presenza di buche, sconnessioni, fogliame bagnato)',
      farsiTranslation: 'معنی: Si باید regolare la سرعت in base alle condizioni del fondo جادهle (presenza di buche, sconnessioni, fogliame bagnato)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_17_6',
      italianText: 'I contrassegni rappresentati in figura sono applicati su autocarri di massa complessiva fino a 3,5 tonnellate (FIG 301)',
      farsiTranslation: 'معنی: I contrassegni rappresentati in figura sono applicati su autocarri di massa complessiva fino a 3,5 tonnellate (FIG 301)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_17_7',
      italianText: 'I contrassegni rappresentati in figura sono applicati su autocaravan di massa totale fino a 3,5 tonnellate (FIG 301)',
      farsiTranslation: 'معنی: I contrassegni rappresentati in figura sono applicati su autoکاروان / تریلر مسافرتی di massa totale fino a 3,5 tonnellate (FIG 301)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_17_8',
      italianText: 'I contrassegni rappresentati in figura sono applicati sui motocicli di cilindrata superiore a 150 cm3 (FIG 301)',
      farsiTranslation: 'معنی: I contrassegni rappresentati in figura sono applicati sui موتورسیکلت‌ها di cilindrata superiore a 150 cm3 (FIG 301)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_18_1',
      italianText: 'Lo spazio di frenatura è quello percorso dall’inizio della frenata all’arresto del veicolo',
      farsiTranslation: 'معنی: Lo مسافت ترمز è quello percorso dall’inizio della ترمزگیری all’توقف del وسیله نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_18_2',
      italianText: 'Lo spazio di frenatura si quadruplica se la velocità si raddoppia',
      farsiTranslation: 'معنی: Lo مسافت ترمز si quadruplica se la سرعت si raddoppia',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_18_3',
      italianText: 'Lo spazio di frenatura diventa nove volte maggiore se la velocità si triplica',
      farsiTranslation: 'معنی: Lo مسافت ترمز diventa nove volte maggiore se la سرعت si triplica',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_18_4',
      italianText: 'Lo spazio di frenatura diventa sedici volte maggiore se la velocità si quadruplica',
      farsiTranslation: 'معنی: Lo مسافت ترمز diventa sedici volte maggiore se la سرعت si quadruplica',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_18_5',
      italianText: 'Lo spazio di frenatura è indipendente dalla velocità',
      farsiTranslation: 'معنی: Lo مسافت ترمز è indipendente dalla سرعت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_18_6',
      italianText: 'Lo spazio di frenatura si raddoppia se la velocità si raddoppia',
      farsiTranslation: 'معنی: Lo مسافت ترمز si raddoppia se la سرعت si raddoppia',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_19_1',
      italianText: 'In un secondo, si percorrono circa m 14 se si viaggia a 50 km/h',
      farsiTranslation: 'معنی: In un secondo, si percorrono circa m 14 se si viaggia a 50 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_19_2',
      italianText: 'In un secondo, si percorrono circa m 28 se si viaggia a 100 km/h',
      farsiTranslation: 'معنی: In un secondo, si percorrono circa m 28 se si viaggia a 100 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_19_3',
      italianText: 'In un secondo, si percorrono circa m 36 se si viaggia a 130 km/h',
      farsiTranslation: 'معنی: In un secondo, si percorrono circa m 36 se si viaggia a 130 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_19_4',
      italianText: 'In un secondo, si percorrono circa m 42 se si viaggia a 150 km/h',
      farsiTranslation: 'معنی: In un secondo, si percorrono circa m 42 se si viaggia a 150 km/h',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_19_5',
      italianText: 'In un secondo, si percorrono circa m 20 se si viaggia a 150 km/h',
      farsiTranslation: 'معنی: In un secondo, si percorrono circa m 20 se si viaggia a 150 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_19_6',
      italianText: 'In un secondo, si percorrono circa m 4 se si viaggia a 50 km/h',
      farsiTranslation: 'معنی: In un secondo, si percorrono circa m 4 se si viaggia a 50 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_19_7',
      italianText: 'In un secondo, si percorrono circa m 10 se si viaggia a 100 km/h',
      farsiTranslation: 'معنی: In un secondo, si percorrono circa m 10 se si viaggia a 100 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_19_8',
      italianText: 'In un secondo, si percorrono circa m 15 se si viaggia a 130 km/h',
      farsiTranslation: 'معنی: In un secondo, si percorrono circa m 15 se si viaggia a 130 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_20_1',
      italianText: 'Lo spazio di frenatura aumenta se l’aderenza tra pneumatico e asfalto è bassa',
      farsiTranslation: 'معنی: Lo مسافت ترمز زیاد می‌شود se l’aderenza tra pneumatico e asfalto è bassa',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_20_2',
      italianText: 'Lo spazio di frenatura aumenta se la strada è innevata',
      farsiTranslation: 'معنی: Lo مسافت ترمز زیاد می‌شود se la جاده è innevata',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_20_3',
      italianText: 'Lo spazio di frenatura aumenta se la strada è bagnata',
      farsiTranslation: 'معنی: Lo مسافت ترمز زیاد می‌شود se la جاده è bagnata',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_20_4',
      italianText: 'Lo spazio di frenatura aumenta se la strada è in discesa',
      farsiTranslation: 'معنی: Lo مسافت ترمز زیاد می‌شود se la جاده è in discesa',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_20_5',
      italianText: 'Lo spazio di frenatura diminuisce se la strada è in salita',
      farsiTranslation: 'معنی: Lo مسافت ترمز کم می‌شود se la جاده è in salita',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_20_6',
      italianText: 'Lo spazio di frenatura diminuisce se il conducente ha i riflessi pronti',
      farsiTranslation: 'معنی: Lo مسافت ترمز کم می‌شود se il conducente ha i riflessi pronti',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_20_7',
      italianText: 'Lo spazio di frenatura diminuisce se le ruote si bloccano',
      farsiTranslation: 'معنی: Lo مسافت ترمز کم می‌شود se le ruote si bloccano',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_20_8',
      italianText: 'Lo spazio di frenatura diminuisce sul tratto in discesa di un dosso',
      farsiTranslation: 'معنی: Lo مسافت ترمز کم می‌شود sul tratto in discesa di un dosso',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_20_9',
      italianText: 'Lo spazio di frenatura aumenta se la strada è in salita',
      farsiTranslation: 'معنی: Lo مسافت ترمز زیاد می‌شود se la جاده è in salita',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_20_10',
      italianText: 'Lo spazio di frenatura diminuisce se la strada è in discesa',
      farsiTranslation: 'معنی: Lo مسافت ترمز کم می‌شود se la جاده è in discesa',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_21_1',
      italianText: 'Lo spazio totale di arresto è pari allo spazio percorso nel tempo di reazione più quello percorso durante la frenata',
      farsiTranslation: 'معنی: Lo مسافت کل توقف è pari allo spazio percorso nel زمان واکنش più quello percorso durante la ترمزگیری',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_21_2',
      italianText: 'Lo spazio totale di arresto dipende dalla velocità',
      farsiTranslation: 'معنی: Lo مسافت کل توقف dipende dalla سرعت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_21_3',
      italianText: 'Lo spazio totale di arresto dipende dall’usura dei pneumatici',
      farsiTranslation: 'معنی: Lo مسافت کل توقف dipende dall’usura dei لاستیک‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_21_4',
      italianText: 'Lo spazio totale di arresto dipende dalle condizioni dell’asfalto',
      farsiTranslation: 'معنی: Lo مسافت کل توقف dipende dalle condizioni dell’asfalto',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_21_5',
      italianText: 'Lo spazio totale di arresto è indipendente dall’usura dei pneumatici',
      farsiTranslation: 'معنی: Lo مسافت کل توقف è indipendente dall’usura dei لاستیک‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_21_6',
      italianText: 'Lo spazio totale di arresto è indipendente dalle condizioni dell’asfalto',
      farsiTranslation: 'معنی: Lo مسافت کل توقف è indipendente dalle condizioni dell’asfalto',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_21_7',
      italianText: 'Lo spazio totale di arresto è pari allo spazio percorso nel tempo di reazione',
      farsiTranslation: 'معنی: Lo مسافت کل توقف è pari allo spazio percorso nel زمان واکنش',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_21_8',
      italianText: 'Lo spazio totale di arresto è pari allo spazio percorso durante la frenata',
      farsiTranslation: 'معنی: Lo مسافت کل توقف è pari allo spazio percorso durante la ترمزگیری',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_21_9',
      italianText: 'Lo spazio totale di arresto non dipende dalla velocità',
      farsiTranslation: 'معنی: Lo مسافت کل توقف نه / نمی dipende dalla سرعت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_22_1',
      italianText: 'Lo spazio totale di arresto aumenta se aumenta la velocità',
      farsiTranslation: 'معنی: Lo مسافت کل توقف زیاد می‌شود se زیاد می‌شود la سرعت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_22_2',
      italianText: 'Lo spazio totale di arresto aumenta se la strada è innevata',
      farsiTranslation: 'معنی: Lo مسافت کل توقف زیاد می‌شود se la جاده è innevata',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_22_3',
      italianText: 'Lo spazio totale di arresto aumenta se la strada è coperta di fango',
      farsiTranslation: 'معنی: Lo مسافت کل توقف زیاد می‌شود se la جاده è coperta di گل',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_22_4',
      italianText: 'Lo spazio totale di arresto aumenta se i pneumatici sono usurati',
      farsiTranslation: 'معنی: Lo مسافت کل توقف زیاد می‌شود se i لاستیک‌ها sono usurati',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_22_5',
      italianText: 'Lo spazio totale di arresto aumenta se i pneumatici non sono usurati',
      farsiTranslation: 'معنی: Lo مسافت کل توقف زیاد می‌شود se i لاستیک‌ها نه / نمی sono usurati',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_22_6',
      italianText: 'Lo spazio totale di arresto aumenta se diminuisce la velocità',
      farsiTranslation: 'معنی: Lo مسافت کل توقف زیاد می‌شود se کم می‌شود la سرعت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_22_7',
      italianText: 'Lo spazio totale di arresto aumenta se l’asfalto è ruvido',
      farsiTranslation: 'معنی: Lo مسافت کل توقف زیاد می‌شود se l’asfalto è ruvido',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_23_1',
      italianText: 'Lo spazio percorso nel tempo di reazione è quello percorso dal momento della percezione di una situazione di pericolo a quello di inizio della frenata',
      farsiTranslation: 'معنی: Lo spazio percorso nel زمان واکنش è quello percorso dal momento della percezione di una situazione di خطر a quello di inizio della ترمزگیری',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_23_2',
      italianText: 'La distanza di sicurezza deve essere mantenuta per evitare il tamponamento',
      farsiTranslation: 'معنی: La فاصله ایمنی باید essere mantenuta per evitare il tamponamento',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_23_3',
      italianText: 'La distanza di sicurezza può essere maggiore dello spazio percorso nel tempo di reazione',
      farsiTranslation: 'معنی: La فاصله ایمنی می‌تواند essere maggiore dello spazio percorso nel زمان واکنش',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_23_4',
      italianText: 'La distanza di sicurezza deve essere mantenuta per evitare lo scontro frontale',
      farsiTranslation: 'معنی: La فاصله ایمنی باید essere mantenuta per evitare lo scontro frontale',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_23_5',
      italianText: 'La distanza di sicurezza deve essere mantenuta per evitare lo scontro laterale',
      farsiTranslation: 'معنی: La فاصله ایمنی باید essere mantenuta per evitare lo scontro laterale',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_23_6',
      italianText: 'La distanza di sicurezza può essere inferiore allo spazio percorso nel tempo di reazione',
      farsiTranslation: 'معنی: La فاصله ایمنی می‌تواند essere inferiore allo spazio percorso nel زمان واکنش',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_1',
      italianText: 'Il rispetto della distanza di sicurezza evita la collisione con il veicolo che precede',
      farsiTranslation: 'معنی: Il rispetto della فاصله ایمنی evita la collisione con il وسیله نقلیه che precede',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_2',
      italianText: 'Il conducente deve valutare la distanza di sicurezza anche sulla base della velocità del veicolo di cui è alla guida',
      farsiTranslation: 'معنی: راننده باید valutare la فاصله ایمنی anche sulla base della سرعت del وسیله نقلیه di cui è alla guida',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_3',
      italianText: 'Il conducente deve commisurare la distanza di sicurezza anche in base alla propria prontezza di riflessi',
      farsiTranslation: 'معنی: راننده باید commisurare la فاصله ایمنی anche in base alla propria prontezza di riflessi',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_4',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base alle condizioni del traffico',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base alle condizioni del ترافیک',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_5',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base all’andamento planoaltimetrico della strada',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base all’andamento planoaltimetrico della جاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_6',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base alle condizioni atmosferiche',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base alle condizioni atmosferiche',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_7',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base al tipo di veicolo di cui si è alla guida',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base al tipo di وسیله نقلیه di cui si è alla guida',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_8',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base allo stato di efficienza del veicolo',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base allo stato di efficienza del وسیله نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_9',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base all’entità del carico',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base all’entità del بار',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_10',
      italianText: 'Il valore della distanza di sicurezza da mantenere da una macchina sgombraneve in azione è di 20 metri',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی da mantenere da una macchina sgombraبرف in azione è di 20 metri',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_11',
      italianText: 'Il valore della distanza di sicurezza da mantenere da una macchina spanditrice di sale in azione è di 20 metri',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی da mantenere da una macchina spanditrice di sale in azione è di 20 metri',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_12',
      italianText: 'Il conducente deve valutare la distanza di sicurezza con riferimento anche alla velocità del veicolo che lo precede',
      farsiTranslation: 'معنی: راننده باید valutare la فاصله ایمنی con riferimento anche alla سرعت del وسیله نقلیه che lo precede',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_13',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base all’efficienza dei freni',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base all’efficienza dei ترمزها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_14',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base alla condizione dei pneumatici',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base alla condizione dei لاستیک‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_15',
      italianText: 'Su strada extraurbana a una corsia per senso di marcia, la distanza fra veicoli adibiti al trasporto di merci di massa complessiva superiore a 3,5 tonnellate, cui sia stato imposto il divieto di sorpasso, deve essere di almeno 100 metri',
      farsiTranslation: 'معنی: Su جاده extraurbana a una corsia per senso di marcia, la distanza fra وسایل نقلیه adibiti al trasporto di merci di massa complessiva superiore a 3,5 tonnellate, cui sia stato imposto il divieto di sorpasso, باید essere di almeno 100 metri',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_24_16',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base al tipo di alimentazione del motore',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base al tipo di alimentazione del motore',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_17',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base alla cilindrata del veicolo',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base alla cilindrata del وسیله نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_18',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base alla potenza del motore',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base alla potenza del motore',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_19',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base all’ampiezza della carreggiata',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base all’ampiezza della carreggiata',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_20',
      italianText: 'Il conducente deve stabilire il valore della distanza di sicurezza anche in base alla larghezza del veicolo di cui è alla guida',
      farsiTranslation: 'معنی: راننده باید stabilire il valore della فاصله ایمنی anche in base alla larghezza del وسیله نقلیه di cui è alla guida',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_21',
      italianText: 'Il conducente ha l’obbligo di controllare che il veicolo che lo segue rispetti la distanza di sicurezza',
      farsiTranslation: 'معنی: راننده ha l’obbligo di controllare che il وسیله نقلیه che lo segue rispetti la فاصله ایمنی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_22',
      italianText: 'Il valore della distanza di sicurezza da mantenere da una macchina sgombraneve in azione è di 10 metri',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی da mantenere da una macchina sgombraبرف in azione è di 10 metri',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_23',
      italianText: 'Il valore della distanza di sicurezza da mantenere da una macchina spanditrice di sale in azione è di 15 metri',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی da mantenere da una macchina spanditrice di sale in azione è di 15 metri',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_24',
      italianText: 'La distanza fra autotreni, in presenza di segnali di divieto di sorpasso fra di loro, deve essere pari ad almeno 10 metri',
      farsiTranslation: 'معنی: La distanza fra autotreni, in presenza di segnali di divieto di sorpasso fra di loro, باید essere pari ad almeno 10 metri',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_25',
      italianText: 'Sulle strade extraurbane, il valore della distanza di sicurezza è sempre pari a 70 metri',
      farsiTranslation: 'معنی: Sulle strade extraurbane, il valore della فاصله ایمنی è sempre pari a 70 metri',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_26',
      italianText: 'Il valore della distanza di sicurezza deve essere almeno pari a quello della distanza di frenatura',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere almeno pari a quello della distanza di frenatura',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_27',
      italianText: 'Il valore della distanza di sicurezza deve essere almeno pari a quello della distanza di visibilità',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere almeno pari a quello della distanza di دید',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_28',
      italianText: 'La distanza di sicurezza non deve essere rispettata a velocità di marcia inferiori ai 50 km/h',
      farsiTranslation: 'معنی: La فاصله ایمنی نه / نمی باید essere rispettata a سرعت di marcia inferiori ai 50 km/h',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_24_29',
      italianText: 'Il valore della distanza di sicurezza deve essere stabilito anche in base alla marcia innestata',
      farsiTranslation: 'معنی: Il valore della فاصله ایمنی باید essere stabilito anche in base alla marcia innestata',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_25_1',
      italianText: 'La distanza di sicurezza va sempre mantenuta, anche prima di iniziare un sorpasso',
      farsiTranslation: 'معنی: La فاصله ایمنی va sempre mantenuta, anche prima di iniziare un sorpasso',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_25_2',
      italianText: 'La distanza di sicurezza deve essere aumentata qualora sia difficile valutare il comportamento del conducente che precede',
      farsiTranslation: 'معنی: La فاصله ایمنی باید essere زیاد می‌شودta qualora sia difficile valutare il comportamento del conducente che precede',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_25_3',
      italianText: 'La distanza di sicurezza deve essere tale da riuscire a fermare in tempo il veicolo, in caso di pericolo',
      farsiTranslation: 'معنی: La فاصله ایمنی باید essere tale da riuscire a fermare in tempo il وسیله نقلیه, in caso di خطر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_25_4',
      italianText: 'La distanza di sicurezza deve essere almeno uguale ai metri che il veicolo percorre durante il tempo di reazione',
      farsiTranslation: 'معنی: La فاصله ایمنی باید essere almeno uguale ai metri che il وسیله نقلیه percorre durante il زمان واکنش',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_25_5',
      italianText: 'La distanza di sicurezza deve essere sempre uguale allo spazio di frenatura del veicolo',
      farsiTranslation: 'معنی: La فاصله ایمنی باید essere sempre uguale allo مسافت ترمز del وسیله نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_26_1',
      italianText: 'La distanza di sicurezza deve essere aumentata quando il veicolo che precede trasporta un carico sporgente, poco stabile',
      farsiTranslation: 'معنی: La فاصله ایمنی باید essere زیاد می‌شودta quando il وسیله نقلیه che precede trasporta un بار sporgente, poco stabile',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_26_2',
      italianText: 'La distanza di sicurezza deve essere di almeno 100 metri, in caso di forte pioggia',
      farsiTranslation: 'معنی: La فاصله ایمنی باید essere di almeno 100 metri, in caso di forte باران',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_26_3',
      italianText: 'La distanza di sicurezza può essere diminuita nelle gallerie',
      farsiTranslation: 'معنی: La فاصله ایمنی می‌تواند essere diminuita nelle gallerie',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_26_4',
      italianText: 'Quando si circola in autostrada, è possibile diminuire la distanza di sicurezza, in quanto non ci si aspetta una frenata im- provvisa dal veicolo che precede',
      farsiTranslation: 'معنی: Quando si circola in autoجاده, è possibile diminuire la فاصله ایمنی, in quanto نه / نمی ci si aspetta una ترمزگیری im- provvisa dal وسیله نقلیه che precede',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_26_5',
      italianText: 'Se il veicolo che precede è un autocarro, si deve diminuire la distanza di sicurezza, in quanto i veicoli pesanti hanno uno spazio di frenatura molto più lungo rispetto agli altri veicoli',
      farsiTranslation: 'معنی: Se il وسیله نقلیه che precede è un autocarro, si باید diminuire la فاصله ایمنی, in quanto i وسایل نقلیه pesanti hanno uno مسافت ترمز molto più lungo rispetto agli altri وسایل نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_27_1',
      italianText: 'La distanza di sicurezza è commisurata anche alle condizioni psicofisiche del conducente',
      farsiTranslation: 'معنی: La فاصله ایمنی è commisurata anche alle condizioni psicofisiche del conducente',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_27_2',
      italianText: 'La distanza di sicurezza va rispettata per non tamponare il veicolo che ci precede',
      farsiTranslation: 'معنی: La فاصله ایمنی va rispettata per نه / نمی tamponare il وسیله نقلیه che ci precede',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_27_3',
      italianText: 'La distanza di sicurezza deve essere determinata in relazione alla larghezza del veicolo che precede',
      farsiTranslation: 'معنی: La فاصله ایمنی باید essere determinata in relazione alla larghezza del وسیله نقلیه che precede',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_27_4',
      italianText: 'La distanza di sicurezza è commisurata anche al numero di corsie della strada',
      farsiTranslation: 'معنی: La فاصله ایمنی è commisurata anche al numero di corsie della جاده',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_27_5',
      italianText: 'La distanza di sicurezza è commisurata anche alla presenza del servosterzo',
      farsiTranslation: 'معنی: La فاصله ایمنی è commisurata anche alla presenza del servosterzo',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_27_6',
      italianText: 'La distanza di sicurezza è commisurata anche al tipo di veicolo che segue',
      farsiTranslation: 'معنی: La فاصله ایمنی è commisurata anche al tipo di وسیله نقلیه che segue',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_27_7',
      italianText: 'La distanza di sicurezza è commisurata anche al limite di velocità riportato sul retro del veicolo che ci precede',
      farsiTranslation: 'معنی: La فاصله ایمنی è commisurata anche al limite di سرعت riportato sul retro del وسیله نقلیه che ci precede',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_27_8',
      italianText: 'La distanza di sicurezza è una distanza fissa',
      farsiTranslation: 'معنی: La فاصله ایمنی è una distanza fissa',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_27_9',
      italianText: 'La distanza di sicurezza si deve rispettare al di sopra di una certa velocità',
      farsiTranslation: 'معنی: La فاصله ایمنی si باید rispettare al di sopra di una certa سرعت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_28_1',
      italianText: 'Sulla distanza di sicurezza influisce la concentrazione del conducente',
      farsiTranslation: 'معنی: Sulla فاصله ایمنی influisce la concentrazione del conducente',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_28_2',
      italianText: 'Sulla distanza di sicurezza influisce la velocità a cui si viaggia',
      farsiTranslation: 'معنی: Sulla فاصله ایمنی influisce la سرعت a cui si viaggia',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_28_3',
      italianText: 'Sulla distanza di sicurezza influisce il carico trasportato dal veicolo',
      farsiTranslation: 'معنی: Sulla فاصله ایمنی influisce il بار trasportato dal وسیله نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_28_4',
      italianText: 'Sulla distanza di sicurezza influiscono l’aderenza e le condizioni dei pneumatici',
      farsiTranslation: 'معنی: Sulla فاصله ایمنی influiscono l’aderenza e le condizioni dei لاستیک‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_28_5',
      italianText: 'Sulla distanza di sicurezza influisce l’efficienza del freno di servizio',
      farsiTranslation: 'معنی: Sulla فاصله ایمنی influisce l’efficienza del freno di servizio',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_28_6',
      italianText: 'Sulla distanza di sicurezza influisce il numero di corsie della strada',
      farsiTranslation: 'معنی: Sulla فاصله ایمنی influisce il numero di corsie della جاده',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_28_7',
      italianText: 'Sulla distanza di sicurezza influisce la dimensione del veicolo che precede',
      farsiTranslation: 'معنی: Sulla فاصله ایمنی influisce la dimensione del وسیله نقلیه che precede',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_28_8',
      italianText: 'Sulla distanza di sicurezza influisce il numero di marce del cambio di velocità',
      farsiTranslation: 'معنی: Sulla فاصله ایمنی influisce il numero di marce del cambio di سرعت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_28_9',
      italianText: 'Sulla distanza di sicurezza influisce il numero di ruote del veicolo',
      farsiTranslation: 'معنی: Sulla فاصله ایمنی influisce il numero di ruote del وسیله نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_28_10',
      italianText: 'Sulla distanza di sicurezza da mantenere dal veicolo che precede influisce il tipo di servosterzo utilizzato',
      farsiTranslation: 'معنی: Sulla فاصله ایمنی da mantenere dal وسیله نقلیه che precede influisce il tipo di servosterzo utilizzato',
      correctAnswer: 'Falso'
    }
  ]
};
