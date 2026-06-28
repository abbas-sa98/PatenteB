import { Chapter } from '../../types';

export const chapter8: Chapter = {
  id: 8,
  title: 'Pannelli Integrativi dei Segnali',
  farsiTitle: 'پنل‌های تکمیلی تابلوها',
  lessons: [
    {
      id: 'topic_8_1',
      title: '8.1 Distanza',
      italianText: `Il pannello integrativo di distanza completa il segnale sovrastante indicando quanti metri o chilometri mancano al punto di inizio del pericolo, della prescrizione o dell'indicazione. Se è sotto il segnale di strettoia, indica la distanza dall'inizio della strettoia. Non indica la lunghezza del tratto pericoloso.`,
      farsiTranslation: `این پنل تکمیلی فاصله تا شروع خطر، دستور یا اطلاع را نشان می‌دهد. مثلا زیر تابلوی «تنگی راه» یعنی از این تابلو تا شروع تنگی راه چند متر یا کیلومتر مانده است. با پنل «طول مسیر» اشتباه نشود.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'sovrastante',
        'distanza',
        'metri',
        'chilometri',
        'inizio',
        'prescrizione',
        'indicazione',
        'strettoia',
        'raffigurato',
        'distanza_di_sicurezza'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_8_1_${i + 1}`)
    },
    {
      id: 'topic_8_2',
      title: '8.2 Estesa',
      italianText: `Il pannello integrativo di estesa indica la lunghezza del tratto stradale pericoloso o del tratto nel quale vale la prescrizione. Sotto il segnale di strettoia indica per quanto continua la strettoia; sotto doppia curva indica la lunghezza del tratto con curve pericolose.`,
      farsiTranslation: `این پنل طول بخشی از جاده را نشان می‌دهد که خطرناک است یا قانون تابلو در آن اجرا می‌شود. یعنی نمی‌گوید خطر از کجا شروع می‌شود؛ می‌گوید آن بخش چقدر طول دارد.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'distanza',
        'metri',
        'chilometri',
        'inizio',
        'prescrizione',
        'strettoia',
        'estesa',
        'tratto_stradale',
        'raffigurato',
        'continua',
        'pioggia',
        'distanza_di_sicurezza'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_8_2_${i + 1}`)
    },
    {
      id: 'topic_8_3',
      title: '8.3 Fasce orarie di tutti i giorni',
      italianText: `Il pannello indica le ore di validità della prescrizione in tutti i giorni, sia festivi sia feriali. Può stare sotto divieto di sosta, divieto di transito, percorso pedonale o parcheggio per precisare in quali ore vale il segnale.`,
      farsiTranslation: `این پنل ساعت‌هایی را نشان می‌دهد که تابلو در همه روزها معتبر است؛ هم روزهای کاری و هم تعطیل. مثلا زیر ممنوعیت توقف یعنی توقف فقط در آن ساعت‌ها ممنوع است.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'prescrizione',
        'fasce_orarie',
        'validita',
        'feriali',
        'orario',
        'ore',
        'raffigurato'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_8_3_${i + 1}`)
    },
    {
      id: 'topic_8_4',
      title: '8.4 Fasce orarie dei giorni festivi',
      italianText: `Il pannello limita la validità del segnale ai soli giorni festivi e alla fascia oraria indicata. Può limitare divieto di sosta, divieto di transito, percorso pedonale o pista ciclabile ai giorni festivi nelle ore indicate.`,
      farsiTranslation: `این پنل یعنی قانون تابلو فقط در روزهای تعطیل و فقط در ساعت‌های نوشته‌شده اجرا می‌شود. منظور فقط یکشنبه نیست؛ همه روزهای تعطیل است.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'prescrizione',
        'fascia_oraria',
        'fasce_orarie',
        'validita',
        'giorni_festivi',
        'giorni_lavorativi',
        'lavorativi',
        'orario',
        'ore',
        'raffigurato'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_8_4_${i + 1}`)
    },
    {
      id: 'topic_8_5',
      title: '8.5 Fasce orarie dei giorni lavorativi',
      italianText: `Il pannello indica che la prescrizione vale soltanto nei giorni lavorativi e nella fascia oraria indicata. Non riguarda i giorni festivi e non indica l'orario di lavoro di un cantiere o di uno stabilimento.`,
      farsiTranslation: `این پنل یعنی قانون تابلو فقط در روزهای کاری و در ساعت‌های مشخص معتبر است. ربطی به ساعت کار کارگاه، کارخانه یا تعمیرگاه ندارد.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'prescrizione',
        'fascia_oraria',
        'fasce_orarie',
        'validita',
        'giorni_festivi',
        'giorni_lavorativi',
        'lavorativi',
        'orario',
        'ore',
        'raffigurato',
        'abbinato',
        'autocarri'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_8_5_${i + 1}`)
    },
    {
      id: 'topic_8_6',
      title: '8.6 Limitazione',
      italianText: `Il pannello di limitazione indica che la validità del segnale è riferita solo al veicolo raffigurato. Può integrare segnali di obbligo o di divieto. Per esempio, sotto divieto di sosta o transito vale solo per gli autoarticolati raffigurati.`,
      farsiTranslation: `این پنل یعنی قانون تابلو فقط برای وسیله نقلیه‌ای است که در پنل تصویر شده است. مثلا اگر کامیون مفصل‌دار نشان داده شود، ممنوعیت فقط برای همان دسته است.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'validita',
        'limitazione',
        'raffigurato',
        'abbinato',
        'rappresentati'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_8_6_${i + 1}`)
    },
    {
      id: 'topic_8_7',
      title: '8.7 Eccezione',
      italianText: `Il pannello di eccezione indica che la validità del segnale non riguarda il veicolo raffigurato. Il segnale vale per tutti gli altri veicoli, tranne la categoria rappresentata. Può integrare segnali di obbligo o divieto.`,
      farsiTranslation: `این پنل یعنی وسیله نقلیه‌ای که تصویر شده است از قانون تابلو استثنا می‌شود. مثلا اگر اتوبوس تصویر شده باشد، قانون برای بقیه وسایل است، نه برای اتوبوس.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'validita',
        'raffigurato',
        'abbinato',
        'eccezione',
        'tranne'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_8_7_${i + 1}`)
    },
    {
      id: 'topic_8_8',
      title: '8.8 Inizio',
      italianText: `Il pannello indica il punto di inizio del pericolo, della prescrizione o dell'indicazione. Può stare sotto divieto di sosta, parcheggio, percorso pedonale, caduta massi o materiale instabile per mostrare da dove inizia la validità.`,
      farsiTranslation: `این پنل نقطه شروع خطر، دستور یا اطلاع را نشان می‌دهد. از همان نقطه قانون یا وضعیت تابلو شروع می‌شود؛ مثلا شروع ممنوعیت توقف یا شروع مسیر پیاده‌رو.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'inizio',
        'prescrizione',
        'indicazione',
        'validita',
        'raffigurato',
        'fine',
        'corsia',
        'salita'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_8_8_${i + 1}`)
    },
    {
      id: 'topic_8_9',
      title: '8.9 Continuazione',
      italianText: `Il pannello indica che il pericolo, la prescrizione o l'indicazione continuano sia prima sia dopo il segnale. Può stare sotto divieto di sosta, divieto di fermata, limite massimo di velocità o strada sdrucciolevole.`,
      farsiTranslation: `این پنل یعنی وضعیت یا قانون تابلو هم قبل از تابلو وجود داشته و هم بعد از آن ادامه دارد. پس نه شروع است و نه پایان؛ علامت ادامه است.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'prescrizione',
        'indicazione',
        'raffigurato',
        'continuazione',
        'continua',
        'fine',
        'sdrucciolevole'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_8_9_${i + 1}`)
    },
    {
      id: 'topic_8_10',
      title: '8.10 Fine',
      italianText: `Il pannello indica il termine del pericolo, della prescrizione o dell'indicazione. Può segnalare dove finisce un divieto di sosta, un divieto di fermata, un cantiere, una strada deformata o una strada sdrucciolevole.`,
      farsiTranslation: `این پنل پایان خطر، دستور یا اطلاع را نشان می‌دهد. مثلا از این نقطه به بعد ممنوعیت توقف یا خطر لغزندگی تمام می‌شود.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'inizio',
        'prescrizione',
        'indicazione',
        'raffigurato',
        'continuazione',
        'continua',
        'fine',
        'termine',
        'sdrucciolevole'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_8_10_${i + 1}`)
    },
    {
      id: 'topic_8_11',
      title: '8.11 Segnale di corsia',
      italianText: `Il pannello segnala la corsia alla quale si riferisce il segnale sovrastante, limitando a quella corsia la validità del segnale. Posto in alto sulla carreggiata può indicare la corsia da seguire per una località o una direzione.`,
      farsiTranslation: `این پنل نشان می‌دهد تابلوی بالایی مربوط به کدام لاین است. یعنی قانون یا راهنمایی تابلو فقط برای همان خط عبور اعتبار دارد.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'sovrastante',
        'tempo',
        'inizio',
        'validita',
        'raffigurato',
        'continua',
        'corsia',
        'segnale_di_corsia',
        'segnaletica_orizzontale',
        'attraversamento'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_8_11_${i + 1}`)
    },
    {
      id: 'topic_8_12',
      title: '8.12 Segni orizzontali in rifacimento',
      italianText: `Posto sotto il segnale Altri Pericoli, indica la temporanea mancanza della segnaletica orizzontale o lavori di tracciamento sulla carreggiata. Non indica cantieri edili, ma manutenzione stradale.`,
      farsiTranslation: `زیر تابلوی «خطرات دیگر» یعنی خط‌کشی‌های روی جاده موقتا وجود ندارند یا در حال کشیدن دوباره هستند. منظور ساختمان‌سازی نیست؛ نگهداری و تعمیر جاده است.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'tempo',
        'raffigurato',
        'segni_orizzontali',
        'rifacimento',
        'mancanza',
        'segnaletica_orizzontale',
        'tracciamento',
        'incidente',
        'incidentati',
        'sdrucciolevole'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_8_12_${i + 1}`)
    },
    {
      id: 'topic_8_13',
      title: '8.13 Incidente',
      italianText: `Posto sotto il segnale Altri Pericoli, indica rallentamento della circolazione a causa di veicoli incidentati sulla carreggiata. Invita a moderare la velocità e, se possibile, scegliere un percorso alternativo.`,
      farsiTranslation: `این پنل زیر «خطرات دیگر» یعنی به علت تصادف و وجود خودروهای تصادفی روی سواره‌رو، ترافیک کند شده است. باید سرعت را کم کرد و اگر ممکن است مسیر جایگزین انتخاب کرد.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'raffigurato',
        'abbinato',
        'incidente',
        'incidentati',
        'rallentamento',
        'percorso_alternativo',
        'attraversamento',
        'binari',
        'manovra',
        'scali_merci'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_8_13_${i + 1}`)
    },
    {
      id: 'topic_8_14',
      title: '8.14 Attraversamento di binari',
      italianText: `Posto sotto il segnale Altri Pericoli, indica la presenza di un attraversamento di binari di manovra ferroviari. Impone di moderare la velocità e può trovarsi presso porti, scali merci o stabilimenti industriali.`,
      farsiTranslation: `این پنل وجود ریل‌های مانوری راه‌آهن را نشان می‌دهد، نه گذرگاه راه‌آهن معمولی. باید سرعت را کم کرد، مخصوصا نزدیک بندر، انبار بار یا کارخانه.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'distanza',
        'metri',
        'raffigurato',
        'abbinato',
        'attraversamento',
        'binari',
        'manovra',
        'ferroviari',
        'scali_merci',
        'stabilimenti_industriali',
        'sgombraneve',
        'innevate',
        'macchine',
        'funzione'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_8_14_${i + 1}`)
    },
    {
      id: 'topic_8_15',
      title: '8.15 Sgombraneve in azione',
      italianText: `Posto su strade innevate sotto il segnale Altri Pericoli, indica macchine sgombraneve al lavoro. Occorre moderare la velocità e mantenere almeno 20 metri di distanza dalle macchine in funzione.`,
      farsiTranslation: `در جاده برفی یعنی ماشین‌های برف‌روب در حال کار هستند. باید سرعت را کم کرد و حداقل ۲۰ متر فاصله با ماشین برف‌روب حفظ کرد.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'distanza',
        'metri',
        'raffigurato',
        'rallentamento',
        'sgombraneve',
        'in_azione',
        'innevate',
        'macchine',
        'funzione',
        'allagamento',
        'pioggia'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_8_15_${i + 1}`)
    },
    {
      id: 'topic_8_16',
      title: '8.16 Zona soggetta ad allagamento',
      italianText: `Indica un tratto di strada che, in particolari condizioni atmosferiche come forti acquazzoni o mareggiate, può allagarsi. Può trovarsi presso canali o sotto il segnale Cunetta.`,
      farsiTranslation: `این پنل یعنی این بخش از جاده ممکن است در باران شدید، طغیان کانال یا موج دریا دچار آب‌گرفتگی شود.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'distanza',
        'raffigurato',
        'corsia',
        'allagamento',
        'condizioni_atmosferiche',
        'acquazzoni',
        'mareggiate',
        'colonna',
        'tamponare',
        'intasamento',
        'prudenza',
        'formazione',
        'distanza_di_sicurezza'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_8_16_${i + 1}`)
    },
    {
      id: 'topic_8_17',
      title: '8.17 Coda',
      italianText: `Indica la possibilità di incontrare traffico fermo o in rallentamento in colonna, con pericolo di tamponamento. In autostrada può consigliare un percorso alternativo o l'uscita al prossimo casello.`,
      farsiTranslation: `این پنل هشدار می‌دهد که ممکن است با صف خودروها یا ترافیک کند روبه‌رو شوید و خطر برخورد از عقب وجود دارد. در اتوبان ممکن است بهتر باشد از خروجی بعدی خارج شوید.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'raffigurato',
        'corsia',
        'rallentamento',
        'percorso_alternativo',
        'in_azione',
        'macchine',
        'coda',
        'colonna',
        'casello',
        'escavatori',
        'pale_meccaniche',
        'macchine_operatrici',
        'prudenza'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_8_17_${i + 1}`)
    },
    {
      id: 'topic_8_18',
      title: '8.18 Mezzi di lavoro in azione',
      italianText: `Indica cantieri stradali con escavatori, pale meccaniche o macchine operatrici in azione, che possono intralciare il traffico. Invita a moderare la velocità e usare particolare prudenza.`,
      farsiTranslation: `یعنی ماشین‌آلات راه‌سازی مثل بیل مکانیکی یا ماشین‌های عملیاتی در حال کار هستند و ممکن است ترافیک را مختل کنند. باید با احتیاط و سرعت کم عبور کرد.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'distanza',
        'raffigurato',
        'in_azione',
        'macchine',
        'mezzi_di_lavoro',
        'escavatori',
        'pale_meccaniche',
        'macchine_operatrici',
        'intralciare',
        'prudenza',
        'autocarri',
        'salita',
        'distanza_di_sicurezza'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_8_18_${i + 1}`)
    },
    {
      id: 'topic_8_19',
      title: '8.19 Autocarri in rallentamento',
      italianText: `Indica un tratto in salita dove gli autocarri, per il peso elevato, procedono a velocità ridotta. I veicoli devono adattare la velocità e mantenere prudenza per evitare collisioni.`,
      farsiTranslation: `در سربالایی‌ها کامیون‌های سنگین به دلیل وزن زیاد آهسته حرکت می‌کنند. باید سرعت خود را با آن‌ها هماهنگ کرد و مراقب برخورد بود.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'raffigurato',
        'rallentamento',
        'prudenza',
        'autocarri',
        'salita',
        'peso',
        'ridotta',
        'collisioni',
        'ghiaccio',
        'sdrucciolevole',
        'formazione',
        'temperatura'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_8_19_${i + 1}`)
    },
    {
      id: 'topic_8_20',
      title: '8.20 Strada sdrucciolevole per ghiaccio',
      italianText: `Indica un tratto di strada sdrucciolevole per formazione di ghiaccio sulla pavimentazione stradale, soprattutto con abbassamento della temperatura o su strade di montagna. Invita a moderare la velocità e usare prudenza.`,
      farsiTranslation: `این پنل یعنی سطح جاده ممکن است به علت یخ لغزنده باشد، مخصوصا با کاهش دما یا در جاده‌های کوهستانی. باید سرعت را کم کرد و با احتیاط رانندگی کرد.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'distanza',
        'raffigurato',
        'pavimentazione',
        'prudenza',
        'autocarri',
        'ghiaccio',
        'sdrucciolevole',
        'formazione',
        'abbassamento',
        'temperatura',
        'montagna',
        'pioggia',
        'aumentare',
        'distanza_di_sicurezza'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_8_20_${i + 1}`)
    },
    {
      id: 'topic_8_21',
      title: '8.21 Strada sdrucciolevole per pioggia',
      italianText: `Indica un tratto con pavimentazione pericolosa in caso di pioggia, per perdita di aderenza causata da fanghiglia o foglie bagnate. Invita a moderare la velocità e aumentare la distanza di sicurezza.`,
      farsiTranslation: `این پنل یعنی در زمان باران، سطح جاده ممکن است به علت گل‌ولای یا برگ‌های خیس لغزنده شود. باید سرعت را کم و فاصله ایمنی را بیشتر کرد.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'distanza',
        'ore',
        'raffigurato',
        'pavimentazione',
        'incidente',
        'sdrucciolevole',
        'pioggia',
        'aderenza',
        'fanghiglia',
        'foglie_bagnate',
        'aumentare',
        'distanza_di_sicurezza'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_8_21_${i + 1}`)
    },
    {
      id: 'topic_8_22',
      title: '8.22 Zona rimozione coatta',
      italianText: `Posto sotto divieto di sosta o divieto di fermata, indica che il veicolo lasciato in sosta può essere rimosso dal carroattrezzi, trasportato al deposito o bloccato con ganascia. Si usa dove la sosta crea grave intralcio o pericolo.`,
      farsiTranslation: `زیر ممنوعیت توقف یا ایستادن یعنی اگر خودرو را آنجا بگذارید، ممکن است با جرثقیل برده شود یا با قفل چرخ بسته شود. این حالت جایی است که توقف مانع جدی یا خطر ایجاد می‌کند.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'prescrizione',
        'fine',
        'corsia',
        'rimozione_coatta',
        'carroattrezzi',
        'ganascia',
        'grave_intralcio'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_8_22_${i + 1}`)
    },
    {
      id: 'topic_8_23',
      title: '8.23 Tornante',
      italianText: `Il pannello indica la vicinanza di una o più curve strette a raggio ridotto, chiamate tornanti, particolarmente pericolose e con visibilità limitata. Può integrare curva a destra, curva a sinistra o doppia curva.`,
      farsiTranslation: `این پنل نزدیک بودن یک یا چند پیچ بسیار تند را نشان می‌دهد. این پیچ‌ها خطرناک‌اند و دید در آن‌ها محدود است.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'pannelli_integrativi',
        'tempo',
        'metri',
        'chilometri',
        'limitata',
        'tornante',
        'tornanti',
        'raggio_ridotto',
        'visibilita_limitata'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_8_23_${i + 1}`)
    },
    {
      id: 'topic_8_24',
      title: '8.24 Numero del tornante',
      italianText: `In una serie di tornanti, il pannello indica il numero progressivo del tornante. Non indica il numero totale delle curve, ma la posizione di quel tornante nella serie.`,
      farsiTranslation: `در مجموعه‌ای از پیچ‌های تند، این پنل شماره همان پیچ را نشان می‌دهد؛ یعنی پیچ چندم است، نه اینکه کل پیچ‌ها چندتا هستند.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'distanza',
        'metri',
        'chilometri',
        'raffigurato',
        'tornante',
        'tornanti',
        'raggio_ridotto',
        'numero_progressivo'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_8_24_${i + 1}`)
    },
    {
      id: 'topic_8_25',
      title: '8.25 Pulizia meccanica della strada',
      italianText: `Posto nei tratti dove si effettuano operazioni di pulizia meccanica, sotto il segnale Divieto di Sosta, indica i giorni e le ore in cui vale il divieto per permettere la pulizia stradale.`,
      farsiTranslation: `زیر ممنوعیت توقف یعنی در روزها و ساعت‌های مشخص، توقف ممنوع است تا ماشین‌های نظافت بتوانند خیابان را تمیز کنند.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'orario',
        'ore',
        'rappresentati',
        'autocarri',
        'pulizia_meccanica'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_8_25_${i + 1}`)
    },
    {
      id: 'topic_8_26',
      title: '8.26 Andamento della strada principale',
      italianText: `Vicino a un incrocio, questi pannelli indicano l'andamento della strada principale con la linea più larga. Sono posti sotto segnali di diritto di precedenza per distinguere la strada principale da quelle secondarie.`,
      farsiTranslation: `نزدیک تقاطع، این پنل مسیر جاده اصلی را با خط پهن‌تر نشان می‌دهد. زیر تابلوهای حق تقدم نصب می‌شود تا جاده اصلی از راه‌های فرعی مشخص شود.`,
      vocabularyIds: [
        'pannello_integrativo',
        'segnale',
        'indica',
        'pannelli_integrativi',
        'andamento',
        'strada_principale',
        'diritto_di_precedenza',
        'secondari'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_8_26_${i + 1}`)
    }
  ],
  questions: [
    {
      id: 'q_8_1_1',
      italianText: 'Il pannello integrativo raffigurato, posto sotto un segnale di pericolo, indica la distanza tra il segnale ed il punto d’inizio del pericolo (FIG 121)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر un تابلوی خطر, نشان می‌دهد فاصله tra il segnale ed نقطه شروع del خطر ((FIG 121))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_1_2',
      italianText: 'Il pannello integrativo raffigurato può essere posto sotto i segnali per completarne il significato (FIG 121)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده می‌تواند قرار داده شود sotto i segnali per completarne il significato ((FIG 121))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_1_3',
      italianText: 'Il pannello integrativo raffigurato, posto sotto un segnale di indicazione, serve a precisare la distanza che manca per raggiungere il punto indicato dal segnale (FIG 121)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر un segnale di نشان می‌دهدzione, serve a precisare فاصله che manca per raggiungere il punto نشان می‌دهدto dal segnale ((FIG 121))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_1_4',
      italianText: 'Il pannello integrativo raffigurato, posto sotto un segnale di obbligo o divieto, indica la distanza dalla quale inizia la pre- scrizione (FIG 121)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر un تابلوی اجباری o divieto, نشان می‌دهد فاصله dalla quale inizia la pre- scrizione ((FIG 121))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_1_5',
      italianText: 'Il pannello integrativo mostrato in figura A indica i metri di strada già fatta (FIG 121)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده در شکل A نشان می‌دهد i metri di جاده già fatta ((FIG 121))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_1_6',
      italianText: 'Il pannello integrativo raffigurato indica la pendenza di una strada (FIG 121)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la pendenza di una جاده ((FIG 121))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_1_7',
      italianText: 'Il pannello integrativo mostrato in figura A indica la distanza di sicurezza da mantenere dal veicolo che sta davanti (FIG 121)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده در شکل A نشان می‌دهد فاصله di sicurezza da mantenere dal veicolo che sta davanti ((FIG 121))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_1_8',
      italianText: 'Il pannello integrativo raffigurato indica la larghezza di una strada (FIG 121)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la larghezza di una جاده ((FIG 121))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_1_9',
      italianText: 'Il pannello integrativo raffigurato, posto sotto il segnale di pericolo, indica la lunghezza del tratto di strada pericoloso (FIG 121)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر il تابلوی خطر, نشان می‌دهد طول del tratto di جاده خطرso ((FIG 121))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_2_1',
      italianText: 'Il pannello integrativo raffigurato, posto sotto un segnale di pericolo, indica la lunghezza del tratto di strada pericoloso (FIG 122)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر un تابلوی خطر, نشان می‌دهد طول del tratto di جاده خطرso ((FIG 122))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_2_2',
      italianText: 'Il pannello integrativo raffigurato, posto sotto un segnale di obbligo, indica la lunghezza del tratto stradale nel quale vale la prescrizione del segnale (FIG 122)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر un تابلوی اجباری, نشان می‌دهد طول del tratto جادهle nel quale vale دستور / قانون تابلو ((FIG 122))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_2_3',
      italianText: 'Il pannello integrativo raffigurato può essere posto sotto un segnale di divieto (FIG 122)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده می‌تواند قرار داده شود sotto un تابلوی ممنوعیت ((FIG 122))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_2_4',
      italianText: 'Il pannello integrativo raffigurato in figura B, posto sotto ad un segnale di pericolo, indica, in chilometri, la lunghezza del tratto di strada pericoloso (FIG 122)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده in figura B, قرار داده‌شده زیر ad un تابلوی خطر, نشان می‌دهد, in chilometri, طول del tratto di جاده خطرso ((FIG 122))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_2_5',
      italianText: 'Il segnale raffigurato indica la lunghezza di un tratto stradale con curve pericolose in successione (FIG 907)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد طول di un tratto جادهle con پیچ‌ها خطرse in successione ((FIG 907))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_2_6',
      italianText: 'Il pannello integrativo rappresentato in figura A obbliga a proseguire diritto per 380 metri (FIG 122)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده در شکل A obbliga a proseguire مستقیم per 380 metri ((FIG 122))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_2_7',
      italianText: 'Il pannello integrativo rappresentato in figura A indica la distanza di sicurezza da mantenere in caso di pioggia (FIG 122)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده در شکل A نشان می‌دهد فاصله di sicurezza da mantenere in caso di باران ((FIG 122))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_2_8',
      italianText: 'Il pannello integrativo raffigurato indica la distanza tra il segnale e il punto d’inizio del pericolo (FIG 122)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد فاصله tra il segnale e نقطه شروع del خطر ((FIG 122))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_2_9',
      italianText: 'Il segnale raffigurato indica la distanza tra il segnale e l’inizio della strada in cattivo stato (FIG 901)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد فاصله tra il segnale e l’inizio della جاده in cattivo stato ((FIG 901))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_2_10',
      italianText: 'Il pannello integrativo raffigurato in figura A indica l’altezza di un viadotto (FIG 122)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده in figura A نشان می‌دهد l’altezza di un viadotto ((FIG 122))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_3_1',
      italianText: 'Il segnale raffigurato vieta la sosta dalle ore 7.30 alle ore 19.00 (FIG 943)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده ممنوع می‌کند la توقف / پارک از ساعت 7.30 تا ساعت 19.00 ((FIG 943))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_3_2',
      italianText: 'Il segnale raffigurato vieta il transito dalle ore 7.30 alle 19.00 (FIG 924)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده ممنوع می‌کند il عبور از ساعت 7.30 alle 19.00 ((FIG 924))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_3_3',
      italianText: 'Il pannello integrativo (A), posto sotto il segnale (B), vieta il transito ai pedoni nelle sole ore indicate (FIG 966)',
      farsiTranslation: 'Il pannello integrativo (A), قرار داده‌شده زیر il segnale (B), ممنوع می‌کند il عبور ai عابران پیاده nelle sole ore نشان می‌دهدte ((FIG 966))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_3_4',
      italianText: 'Il pannello integrativo rappresentato in figura B indica le ore di tutti i giorni nelle quali vale il segnale (FIG 123)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده در شکل B نشان می‌دهد le ore di همه روزها nelle quali vale il segnale ((FIG 123))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_3_5',
      italianText: 'Il segnale raffigurato consente il transito ai motocicli nelle sole ore indicate (FIG 935)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده اجازه می‌دهد il عبور ai motocicli nelle sole ore نشان می‌دهدte ((FIG 935))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_3_6',
      italianText: 'Il segnale raffigurato indica che il clacson può essere usato dalle ore 7.30 alle ore 19.00 (FIG 934)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد که il clacson può essere usato از ساعت 7.30 تا ساعت 19.00 ((FIG 934))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_3_7',
      italianText: 'Il segnale raffigurato indica l’orario di apertura di una zona a traffico limitato (FIG 964)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد l’orario di apertura di una zona a traffico limitato ((FIG 964))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_3_8',
      italianText: 'Il pannello integrativo rappresentato in figura B indica in quali ore si può circolare a fari spenti (FIG 123)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده در شکل B نشان می‌دهد in quali ore si può circolare a fari spenti ((FIG 123))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_3_9',
      italianText: 'Il pannello integrativo rappresentato in figura B indica le fasce orarie durante le quali si circola a targhe alterne (FIG 123)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده در شکل B نشان می‌دهد le fasce orarie durante le quali si circola a targhe alterne ((FIG 123))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_4_1',
      italianText: 'Il pannello integrativo raffigurato limita la validità del segnale sotto cui è posto ai giorni festivi e alla fascia oraria indicata (FIG 124)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده limita اعتبار تابلو sotto cui è posto ai روزهای تعطیل e alla بازه زمانی نشان می‌دهدta ((FIG 124))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_4_2',
      italianText: 'Il pannello integrativo raffigurato, posto sotto un segnale di prescrizione, precisa che il segnale vale solo nei giorni festivi e nelle fasce orarie indicate (FIG 124)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر un segnale di prescrizione, precisa che il segnale vale فقط nei روزهای تعطیل e nelle fasce orarie نشان می‌دهدte ((FIG 124))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_4_3',
      italianText: 'Il segnale raffigurato consente il transito nei giorni festivi e nelle fasce orarie indicate ai soli pedoni (FIG 964)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده اجازه می‌دهد il عبور nei روزهای تعطیل e nelle fasce orarie نشان می‌دهدte ai soli عابران پیاده ((FIG 964))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_4_4',
      italianText: 'Il segnale raffigurato vieta la sosta nella fascia oraria indicata, dei giorni festivi (FIG 938)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده ممنوع می‌کند la توقف / پارک nella بازه زمانی نشان می‌دهدta, dei روزهای تعطیل ((FIG 938))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_4_5',
      italianText: 'Il segnale raffigurato consente il transito dalle ore 8.00 alle ore 20.00 dei giorni festivi ai soli ciclisti (FIG 965)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده اجازه می‌دهد il عبور از ساعت 8.00 تا ساعت 20.00 dei روزهای تعطیل ai soli دوچرخه‌سواران ((FIG 965))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_4_6',
      italianText: 'Il segnale raffigurato vieta il transito dalle ore 8.00 alle ore 20.00 dei giorni festivi (FIG 925)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده ممنوع می‌کند il عبور از ساعت 8.00 تا ساعت 20.00 dei روزهای تعطیل ((FIG 925))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_4_7',
      italianText: 'Il pannello integrativo raffigurato indica l’orario d’ingresso nel cimitero (FIG 124)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد l’orario d’ingresso nel cimitero ((FIG 124))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_4_8',
      italianText: 'Il pannello integrativo raffigurato indica l’orario di apertura delle chiese (FIG 124)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد l’orario di apertura delle chiese ((FIG 124))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_4_9',
      italianText: 'Il pannello integrativo raffigurato indica l’orario di celebrazione delle funzioni religiose (FIG 124)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد l’orario di celebrazione delle funzioni religiose ((FIG 124))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_4_10',
      italianText: 'Il segnale raffigurato indica che si può parcheggiare tutti i giorni nella fascia oraria indicata (FIG 960)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد که si può پارک کردن همه روزها nella بازه زمانی نشان می‌دهدta ((FIG 960))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_4_11',
      italianText: 'Il pannello integrativo raffigurato vale nei giorni lavorativi (FIG 124)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده vale nei روزهای کاری ((FIG 124))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_4_12',
      italianText: 'Il segnale raffigurato consente il transito dei motocicli la domenica dalle ore 8.00 alle ore 20.00 (FIG 936)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده اجازه می‌دهد il عبور dei motocicli la domenica از ساعت 8.00 تا ساعت 20.00 ((FIG 936))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_5_1',
      italianText: 'Il pannello integrativo raffigurato, posto sotto un segnale, ne limita la validità nei giorni lavorativi e alle fasce orarie indi- cate (FIG 125)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر un segnale, ne limita اعتبار nei روزهای کاری e alle fasce orarie indi- cate ((FIG 125))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_5_2',
      italianText: 'Il segnale raffigurato vieta il transito nella fascia oraria indicata, dei giorni lavorativi (FIG 928)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده ممنوع می‌کند il عبور nella بازه زمانی نشان می‌دهدta, dei روزهای کاری ((FIG 928))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_5_3',
      italianText: 'Il pannello integrativo raffigurato indica la fascia oraria dei giorni lavorativi durante la quale vale la prescrizione del se- gnale sotto cui è posto (FIG 125)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la بازه زمانی dei روزهای کاری durante la quale vale دستور / قانون del se- gnale sotto cui è posto ((FIG 125))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_5_4',
      italianText: 'Il segnale raffigurato vieta la sosta nella fascia oraria indicata dei giorni lavorativi (FIG 945)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده ممنوع می‌کند la توقف / پارک nella بازه زمانی نشان می‌دهدta dei روزهای کاری ((FIG 945))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_5_5',
      italianText: 'Il pannello integrativo raffigurato, posto sotto un segnale di obbligo, indica che esso vale dalle ore 8.00 alle ore 20.00 dei giorni lavorativi (FIG 125)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر un تابلوی اجباری, نشان می‌دهد که esso vale از ساعت 8.00 تا ساعت 20.00 dei روزهای کاری ((FIG 125))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_5_6',
      italianText: 'Il segnale raffigurato vieta il transito agli autocarri di massa complessiva superiore a 3,5 t nell’orario indicato, dei giorni lavorativi (FIG 937)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده ممنوع می‌کند il عبور agli کامیون‌ها di massa complessiva superiore a 3,5 t nell’orario نشان می‌دهدto, dei روزهای کاری ((FIG 937))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_5_7',
      italianText: 'Il pannello integrativo raffigurato indica che il segnale al quale è abbinato vale tutti i giorni, ma solo nelle ore indicate (FIG 125)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که il segnale al quale è abbinato vale همه روزها, ma فقط nelle ore نشان می‌دهدte ((FIG 125))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_5_8',
      italianText: 'Il pannello integrativo raffigurato indica gli orari di apertura di un museo di attrezzi da lavoro (FIG 125)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد gli orari di apertura di un museo di attrezzi da lavoro ((FIG 125))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_5_9',
      italianText: 'Il pannello integrativo raffigurato indica la fascia oraria di apertura delle officine di soccorso stradale (FIG 125)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la بازه زمانی di apertura delle officine di soccorso جادهle ((FIG 125))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_5_10',
      italianText: 'Il segnale raffigurato è riservato ai veicoli per il soccorso stradale (FIG 961)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده è riservato ai وسایل نقلیه per il soccorso جادهle ((FIG 961))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_5_11',
      italianText: 'Il pannello integrativo raffigurato indica che il segnale al quale è abbinato vale nei giorni festivi (FIG 125)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که il segnale al quale è abbinato vale nei روزهای تعطیل ((FIG 125))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_5_12',
      italianText: 'Il pannello integrativo raffigurato, posto sotto il segnale PARCHEGGIO, indica che si può parcheggiare nei giorni festivi dalle ore 8.00 alle ore 20.00 (FIG 125)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر il segnale PARCHEGGIO, نشان می‌دهد که si può پارک کردن nei روزهای تعطیل از ساعت 8.00 تا ساعت 20.00 ((FIG 125))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_6_1',
      italianText: 'Il segnale raffigurato vieta il transito ai soli veicoli indicati (FIG 926)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده ممنوع می‌کند il عبور ai soli وسایل نقلیه نشان می‌دهدti ((FIG 926))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_6_2',
      italianText: 'Il segnale raffigurato vieta la sosta ai veicoli indicati (FIG 954)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده ممنوع می‌کند la توقف / پارک ai وسایل نقلیه نشان می‌دهدti ((FIG 954))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_6_3',
      italianText: 'Il segnale raffigurato vieta la sosta agli autoarticolati (FIG 941)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده ممنوع می‌کند la توقف / پارک agli کامیون‌های مفصل‌دار ((FIG 941))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_6_4',
      italianText: 'Il pannello integrativo raffigurato indica che il segnale al quale è abbinato vale solo per i veicoli rappresentati (FIG 126)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که il segnale al quale è abbinato vale فقط per i وسایل نقلیه rappresentati ((FIG 126))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_6_5',
      italianText: 'Il pannello integrativo raffigurato può essere abbinato ad un segnale di obbligo (FIG 126)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده می‌تواند همراه شود ad un تابلوی اجباری ((FIG 126))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_6_6',
      italianText: 'Il pannello integrativo raffigurato può essere abbinato ad un segnale di divieto (FIG 126)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده می‌تواند همراه شود ad un تابلوی ممنوعیت ((FIG 126))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_6_7',
      italianText: 'Il pannello integrativo raffigurato indica un’officina meccanica per autotreni (FIG 126)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un’officina meccanica per autotreni ((FIG 126))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_6_8',
      italianText: 'Il pannello integrativo raffigurato indica una stazione di rifornimento per soli mezzi pesanti (FIG 126)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد una stazione di rifornimento per soli mezzi pesanti ((FIG 126))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_6_9',
      italianText: 'Il segnale raffigurato consente la sosta agli autoarticolati (FIG 941)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده اجازه می‌دهد la توقف / پارک agli کامیون‌های مفصل‌دار ((FIG 941))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_6_10',
      italianText: 'Il segnale raffigurato prescrive che possono transitare gli autoarticolati (FIG 926)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده prescrive che possono transitare gli کامیون‌های مفصل‌دار ((FIG 926))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_6_11',
      italianText: 'Il pannello integrativo raffigurato, posto sotto il segnale PARCHEGGIO, indica che possono parcheggiare tutti i veicoli pesanti (FIG 126)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, قرار داده‌شده زیر il segnale PARCHEGGIO, نشان می‌دهد که possono پارک کردن همه i وسایل نقلیه pesanti ((FIG 126))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_7_1',
      italianText: 'Il segnale in figura consente l’accesso solo agli autobus (FIG 967)',
      farsiTranslation: 'تابلوی داخل شکل اجازه می‌دهد l’ورود فقط agli اتوبوس‌ها ((FIG 967))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_7_2',
      italianText: 'Il segnale in figura permette di transitare solo agli autobus (FIG 927)',
      farsiTranslation: 'تابلوی داخل شکل اجازه می‌دهد di transitare فقط agli اتوبوس‌ها ((FIG 927))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_7_3',
      italianText: 'Il segnale in figura indica che possono parcheggiare tutti i veicoli tranne gli autobus (FIG 962)',
      farsiTranslation: 'تابلوی داخل شکل نشان می‌دهد که possono پارک کردن همه i وسایل نقلیه به جز gli اتوبوس‌ها ((FIG 962))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_7_4',
      italianText: 'Il pannello integrativo in figura può essere abbinato ad un segnale di obbligo (FIG 127)',
      farsiTranslation: 'پنل تکمیلی در شکل می‌تواند همراه شود ad un تابلوی اجباری ((FIG 127))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_7_5',
      italianText: 'Il pannello integrativo in figura può essere abbinato ad un segnale di divieto (FIG 127)',
      farsiTranslation: 'پنل تکمیلی در شکل می‌تواند همراه شود ad un تابلوی ممنوعیت ((FIG 127))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_7_6',
      italianText: 'Il segnale in figura vieta l’accesso agli autobus (FIG 929)',
      farsiTranslation: 'تابلوی داخل شکل ممنوع می‌کند l’ورود agli اتوبوس‌ها ((FIG 929))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_7_7',
      italianText: 'Il segnale in figura vieta il transito agli autobus (FIG 927)',
      farsiTranslation: 'تابلوی داخل شکل ممنوع می‌کند il عبور agli اتوبوس‌ها ((FIG 927))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_7_8',
      italianText: 'Il pannello integrativo in figura può trovarsi da solo (FIG 127)',
      farsiTranslation: 'پنل تکمیلی در شکل può trovarsi da فقط ((FIG 127))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_7_9',
      italianText: 'Il pannello integrativo in figura vale solo per gli autobus urbani (FIG 127)',
      farsiTranslation: 'پنل تکمیلی در شکل vale فقط per gli اتوبوس‌ها urbani ((FIG 127))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_8_1',
      italianText: 'Il pannello integrativo (A), posto sotto un segnale di divieto, evidenzia il punto d’inizio della prescrizione (FIG 128)',
      farsiTranslation: 'Il pannello integrativo (A), قرار داده‌شده زیر un تابلوی ممنوعیت, evidenzia نقطه شروع delدستور / قانون ((FIG 128))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_8_2',
      italianText: 'Il segnale raffigurato indica che il divieto di sosta ha inizio in quel punto (FIG 940)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد که il ممنوعیت توقف ha inizio in quel punto ((FIG 940))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_8_3',
      italianText: 'Il segnale raffigurato evidenzia l’inizio dell’area dove è possibile parcheggiare (FIG 958)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده evidenzia l’inizio dell’area dove è possibile پارک کردن ((FIG 958))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_8_4',
      italianText: 'Il segnale raffigurato evidenzia il punto d’inizio del divieto di fermata (FIG 953)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده evidenzia نقطه شروع del ممنوعیت ایستادن ((FIG 953))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_8_5',
      italianText: 'Il segnale raffigurato evidenzia il punto d’inizio del viale pedonale (FIG 963)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده evidenzia نقطه شروع del viale pedonale ((FIG 963))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_8_6',
      italianText: 'Il pannello raffigurato (A) indica una strada in salita (FIG 128)',
      farsiTranslation: 'پنل نشان‌داده‌شده A نشان می‌دهد una جاده in salita ((FIG 128))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_8_7',
      italianText: 'Il pannello raffigurato (A) indica l’obbligo di proseguire diritto (FIG 128)',
      farsiTranslation: 'پنل نشان‌داده‌شده A نشان می‌دهد l’obbligo di proseguire مستقیم ((FIG 128))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_8_8',
      italianText: 'Il pannello raffigurato (A) indica la fine di una strada a senso unico (FIG 128)',
      farsiTranslation: 'پنل نشان‌داده‌شده A نشان می‌دهد پایان di una جاده a senso unico ((FIG 128))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_8_9',
      italianText: 'Il pannello raffigurato (B) indica la corsia riservata agli autobus urbani (FIG 128)',
      farsiTranslation: 'پنل نشان‌داده‌شده B نشان می‌دهد la لاین / خط عبور riservata agli اتوبوس‌ها urbani ((FIG 128))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_8_10',
      italianText: 'Il segnale raffigurato evidenzia il punto in cui finisce l’area destinata al parcheggio (FIG 959)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده evidenzia il punto in cui finisce l’area destinata al parcheggio ((FIG 959))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_8_11',
      italianText: 'Il pannello raffigurato (A), posto sotto un segnale di pericolo, evidenzia il punto dove finisce il pericolo (FIG 128)',
      farsiTranslation: 'پنل نشان‌داده‌شده A, قرار داده‌شده زیر un تابلوی خطر, evidenzia il punto dove finisce il خطر ((FIG 128))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_9_1',
      italianText: 'Il segnale raffigurato indica che il divieto di sosta continua (FIG 939)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد که il ممنوعیت توقف continua ((FIG 939))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_9_2',
      italianText: 'Il segnale raffigurato conferma la continuazione del divieto di sorpasso (FIG 930)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده conferma ادامه del ممنوعیت سبقت ((FIG 930))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_9_3',
      italianText: 'Il segnale raffigurato indica la continuazione del limite massimo di velocità (FIG 933)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد ادامه del limite massimo di سرعت ((FIG 933))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_9_4',
      italianText: 'Il segnale raffigurato indica la continuazione del tratto di strada sdrucciolevole (FIG 914)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد ادامه del tratto di جاده لغزنده ((FIG 914))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_9_5',
      italianText: 'Il segnale raffigurato indica che la fermata è vietata sia prima che dopo il segnale (FIG 951)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد که la fermata è ممنوع می‌کندta sia prima che dopo il segnale ((FIG 951))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_9_6',
      italianText: 'Il pannello integrativo raffigurato (A), posto sotto un segnale di pericolo, ne indica la continuazione (FIG 129)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (A), قرار داده‌شده زیر un تابلوی خطر, ne نشان می‌دهد ادامه ((FIG 129))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_9_7',
      italianText: 'Il pannello integrativo raffigurato (A) indica di tornare indietro (FIG 129)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (A) نشان می‌دهد di tornare indietro ((FIG 129))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_9_8',
      italianText: 'Il segnale raffigurato indica la fine della zona destinata al parcheggio (FIG 956)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد پایان della zona destinata al parcheggio ((FIG 956))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_9_9',
      italianText: 'Il pannello integrativo raffigurato (A) indica un senso unico alternato (FIG 129)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (A) نشان می‌دهد un senso unico alternato ((FIG 129))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_9_10',
      italianText: 'Il pannello integrativo raffigurato (A), posto sotto un segnale di pericolo, ne indica la fine (FIG 129)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (A), قرار داده‌شده زیر un تابلوی خطر, ne نشان می‌دهد پایان ((FIG 129))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_9_11',
      italianText: 'Il pannello integrativo raffigurato (A) indica le due direzioni consentite (FIG 129)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (A) نشان می‌دهد le due direzioni consentite ((FIG 129))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_9_12',
      italianText: 'Il pannello integrativo raffigurato (A) indica una strada a doppio senso di circolazione (FIG 129)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (A) نشان می‌دهد una جاده a doppio senso di circolazione ((FIG 129))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_10_1',
      italianText: 'Il segnale raffigurato indica il punto nel quale termina il divieto di sosta (FIG 944)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد il punto nel quale termina il ممنوعیت توقف ((FIG 944))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_10_2',
      italianText: 'Il segnale raffigurato indica il punto dove termina il divieto di fermata (FIG 952)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد نقطه‌ای که پایان می‌یابد il ممنوعیت ایستادن ((FIG 952))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_10_3',
      italianText: 'Il segnale raffigurato indica la fine del cantiere stradale (FIG 970)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد پایان del cantiere جادهle ((FIG 970))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_10_4',
      italianText: 'Il segnale raffigurato indica la fine dell’area destinata al parcheggio (FIG 957)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد پایان dell’area destinata al parcheggio ((FIG 957))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_10_5',
      italianText: 'Il segnale raffigurato indica la fine della strada deformata (FIG 903)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد پایان della جاده ناهموار ((FIG 903))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_10_6',
      italianText: 'Il segnale raffigurato indica la fine della strada sdrucciolevole (FIG 915)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد پایان della جاده لغزنده ((FIG 915))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_10_7',
      italianText: 'Il pannello integrativo raffigurato (A) indica una strada in discesa (FIG 130)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (A) نشان می‌دهد una جاده in discesa ((FIG 130))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_10_8',
      italianText: 'Il pannello integrativo raffigurato (B), posto sotto il segnale PARCHEGGIO, indica l’inizio della zona destinata al par- cheggio (FIG 130)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (B), قرار داده‌شده زیر il segnale PARCHEGGIO, نشان می‌دهد l’inizio della zona destinata al par- cheggio ((FIG 130))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_10_9',
      italianText: 'Il pannello integrativo raffigurato (A), posto sotto un segnale di divieto, indica l’inizio del divieto (FIG 130)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (A), قرار داده‌شده زیر un تابلوی ممنوعیت, نشان می‌دهد l’inizio del divieto ((FIG 130))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_10_10',
      italianText: 'Il pannello integrativo raffigurato (A) indica una strada chiusa al traffico (FIG 130)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (A) نشان می‌دهد una جاده بسته al traffico ((FIG 130))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_10_11',
      italianText: 'Il segnale raffigurato indica la continuazione del divieto di sorpasso (FIG 82)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد ادامه del ممنوعیت سبقت ((FIG 82))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_10_12',
      italianText: 'Il pannello integrativo raffigurato (A) indica l’unica direzione consentita (FIG 130)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده (A) نشان می‌دهد l’unica direzione consentita ((FIG 130))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_11_1',
      italianText: 'Il pannello integrativo raffigurato preavvisa che temporaneamente manca la segnaletica orizzontale sulla carreggiata',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده از قبل هشدار می‌دهد che temporaneamente manca la segnaletica orizzontale sulla سواره‌رو',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_11_2',
      italianText: 'Il pannello integrativo raffigurato indica un tratto di strada sul quale non è temporaneamente presente la segnaletica orizzontale',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un tratto di جاده sul quale non è temporaneamente presente la segnaletica orizzontale',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_11_3',
      italianText: 'Il pannello integrativo raffigurato indica che si stanno svolgendo i lavori per rifare la segnaletica orizzontale',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که si stanno svolgendo i lavori per rifare la segnaletica orizzontale',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_11_4',
      italianText: 'Il pannello integrativo raffigurato viene posto sotto il segnale ALTRI PERICOLI',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده viene قرار داده‌شده زیر il segnale ALTRI PERICOLI',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_11_5',
      italianText: 'Il segnale raffigurato indica una strada chiusa',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد una جاده بسته',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_11_6',
      italianText: 'Il pannello integrativo raffigurato indica una strada innevata',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد una جاده innevata',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_11_7',
      italianText: 'Il pannello integrativo raffigurato indica la vicinanza di un attraversamento pedonale',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la vicinanza di un attraversamento pedonale',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_11_8',
      italianText: 'Il pannello integrativo raffigurato preavvisa l’inizio di un tratto di strada a senso unico',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده از قبل هشدار می‌دهد l’inizio di un tratto di جاده a senso unico',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_11_9',
      italianText: 'Il pannello integrativo raffigurato indica che non è consentito superare la linea continua',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که non è consentito superare la linea continua',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_12_1',
      italianText: 'Il pannello integrativo raffigurato invita a rallentare a causa di un incidente',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده invita a کم کردن سرعت a causa di un تصادف',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_12_2',
      italianText: 'Il pannello integrativo raffigurato indica veicoli incidentati sulla carreggiata',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد وسایل نقلیه incidentati sulla سواره‌رو',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_12_3',
      italianText: 'Il pannello integrativo raffigurato segnala che la carreggiata è occupata da veicoli incidentati',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده علامت می‌دهد / هشدار می‌دهد che la سواره‌رو è occupata da وسایل نقلیه incidentati',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_12_4',
      italianText: 'Il pannello integrativo raffigurato segnala un incidente stradale e che quindi occorre diminuire la velocità',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده علامت می‌دهد / هشدار می‌دهد un تصادف جادهle e che quindi occorre diminuire la سرعت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_12_5',
      italianText: 'Il pannello integrativo raffigurato indica una strada sdrucciolevole',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد una جاده لغزنده',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_12_6',
      italianText: 'Il pannello integrativo raffigurato indica di fermarsi e dare la precedenza a destra',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد di fermarsi e dare la precedenza a راست',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_12_7',
      italianText: 'Il pannello integrativo raffigurato si trova solo se l’incidente è avvenuto in autostrada',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده si trova فقط se l’تصادف è avvenuto in autoجاده',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_12_8',
      italianText: 'Il pannello integrativo raffigurato indica un divieto di sosta',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un ممنوعیت توقف',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_12_9',
      italianText: 'Il pannello integrativo raffigurato preavvisa la presenza di un garage per veicoli incidentati',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده از قبل هشدار می‌دهد la presenza di un garage per وسایل نقلیه incidentati',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_12_10',
      italianText: 'Il pannello integrativo raffigurato indica di accendere le luci per evitare incidenti',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد di accendere le luci per evitare incidenti',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_13_1',
      italianText: 'Il pannello integrativo raffigurato indica la presenza di binari di manovra (FIG 133)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la presenza di binari di manovra ((FIG 133))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_13_2',
      italianText: 'Il segnale raffigurato indica l’attraversamento di binari di manovra (FIG 919)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد l’attraversamento di binari di manovra ((FIG 919))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_13_3',
      italianText: 'Il pannello integrativo raffigurato preavvisa la presenza di binari di manovra o di raccordo in prossimità di scali merci (FIG 133)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده از قبل هشدار می‌دهد la presenza di binari di manovra o di raccordo in prossimità di scali merci ((FIG 133))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_13_4',
      italianText: 'Il segnale raffigurato invita a diminuire la velocità (FIG 919)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده invita a diminuire la سرعت ((FIG 919))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_13_5',
      italianText: 'Il pannello integrativo è abbinato al segnale ALTRI PERICOLI (FIG 133)',
      farsiTranslation: 'Il pannello integrativo è abbinato al segnale ALTRI PERICOLI ((FIG 133))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_13_6',
      italianText: 'Il pannello integrativo indica un’area attrezzata per gare di modellismo (FIG 133)',
      farsiTranslation: 'Il pannello integrativo نشان می‌دهد un’area attrezzata per gare di modellismo ((FIG 133))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_13_7',
      italianText: 'Il pannello integrativo raffigurato indica di fare attenzione perché la strada può essere attraversata dai tram (FIG 133)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد di fare attenzione perché la جاده può essere attraversata dai tram ((FIG 133))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_13_8',
      italianText: 'Il pannello integrativo raffigurato va rispettato dai conducenti dei treni (FIG 133)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده va rispettato dai conducenti dei treni ((FIG 133))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_13_9',
      italianText: 'Il pannello integrativo raffigurato indica un passaggio a livello con due binari (FIG 133)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un passaggio a livello con due binari ((FIG 133))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_14_1',
      italianText: 'Il pannello integrativo raffigurato indica la presenza di macchine sgombraneve al lavoro sulla strada',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la presenza di macchine sgombraبرف al lavoro sulla جاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_14_2',
      italianText: 'Il pannello integrativo raffigurato è abbinato al segnale ALTRI PERICOLI',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده è abbinato al segnale ALTRI PERICOLI',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_14_3',
      italianText: 'Il pannello integrativo raffigurato invita a diminuire la velocità per la presenza di macchine sgombraneve in funzione',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده invita a diminuire la سرعت per la presenza di macchine sgombraبرف in funzione',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_14_4',
      italianText: 'Il pannello integrativo raffigurato invita a mantenere una distanza di almeno 20 metri dalle macchine sgombraneve in funzione',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده invita a mantenere una distanza di almeno 20 metri dalle macchine sgombraبرف in funzione',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_14_5',
      italianText: 'Il pannello integrativo raffigurato indica di prestare attenzione a macchine sgombraneve sulla strada',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد di prestare attenzione a macchine sgombraبرف sulla جاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_14_6',
      italianText: 'Il pannello integrativo raffigurato è posto su strade innevate per segnalare la presenza di macchine sgombraneve',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده è posto su strade innevate per علامت می‌دهد / هشدار می‌دهدre la presenza di macchine sgombraبرف',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_14_7',
      italianText: 'Il pannello integrativo raffigurato indica la costruzione di un parco giochi nelle vicinanze',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la costruzione di un parco giochi nelle vicinanze',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_14_8',
      italianText: 'Il pannello integrativo raffigurato indica il divieto di transito alle macchine sgombraneve',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد il ممنوعیت عبور alle macchine sgombraبرف',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_14_9',
      italianText: 'Il pannello integrativo raffigurato indica l’obbligo di montare le catene',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد l’obbligo di montare le catene',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_14_10',
      italianText: 'Il pannello integrativo raffigurato obbliga a stare distanti 100 metri dallo sgombraneve in funzione',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده obbliga a stare distanti 100 metri dallo sgombraبرف in funzione',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_14_11',
      italianText: 'Il pannello integrativo raffigurato indica che la strada è percorribile solo dopo che sia passato lo sgombraneve',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که la جاده è percorribile فقط dopo che sia passato lo sgombraبرف',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_14_12',
      italianText: 'Il pannello integrativo raffigurato indica che sulla strada è possibile incrociare il veicolo per la raccolta della spazzatura',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که sulla جاده è possibile incrociare il veicolo per la raccolta della spazzatura',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_15_1',
      italianText: 'Il pannello integrativo raffigurato indica una strada che in caso di forte pioggia si può allagare (FIG 135)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد una جاده che in caso di forte باران si può allagare ((FIG 135))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_15_2',
      italianText: 'Il pannello integrativo raffigurato indica che stiamo percorrendo un tratto di strada che può allagarsi in caso di forte pioggia (FIG 135)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که stiamo percorrendo un tratto di جاده che può allagarsi in caso di forte باران ((FIG 135))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_15_3',
      italianText: 'Il segnale raffigurato indica che la strada si può allagare in caso di forte pioggia (FIG 904)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد که la جاده si può allagare in caso di forte باران ((FIG 904))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_15_4',
      italianText: 'Il pannello integrativo raffigurato indica il pericolo di allagamento della carreggiata in caso di pioggia o forte mareggiata (FIG 135)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد il خطر di allagamento della سواره‌رو in caso di باران o forte mareggiata ((FIG 135))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_15_5',
      italianText: 'Il pannello integrativo raffigurato indica una piscina nelle vicinanze (FIG 135)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد una piscina nelle vicinanze ((FIG 135))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_15_6',
      italianText: 'Il pannello integrativo raffigurato indica un tratto di strada coperto di neve (FIG 135)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un tratto di جاده coperto di برف ((FIG 135))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_15_7',
      italianText: 'Il pannello integrativo raffigurato preavvisa una banchina cedevole (FIG 135)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده از قبل هشدار می‌دهد una banchina cedevole ((FIG 135))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_15_8',
      italianText: 'Il pannello integrativo raffigurato vieta il transito ai veicoli che trasportano prodotti che potrebbero inquinare l’acqua (FIG 135)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده ممنوع می‌کند il عبور ai وسایل نقلیه che trasportano prodotti che potrebbero inquinare l’acqua ((FIG 135))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_15_9',
      italianText: 'Il pannello integrativo raffigurato indica un tratto di strada dove è possibile trovare nebbia (FIG 135)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un tratto di جاده dove è possibile trovare nebbia ((FIG 135))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_15_10',
      italianText: 'Il pannello integrativo raffigurato preavvisa la presenza di cordoli trasversali di rallentamento (dossi artificiali) (FIG 135)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده از قبل هشدار می‌دهد la presenza di cordoli trasversali di rallentamento (dossi artificiali) ((FIG 135))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_16_1',
      italianText: 'Il pannello integrativo raffigurato indica la possibilità di trovare traffico intenso, con formazione di colonne di veicoli',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la possibilità di trovare traffico intenso, con formazione di colonne di وسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_16_2',
      italianText: 'Il pannello integrativo raffigurato indica la possibilità di trovare veicoli fermi in colonna',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la possibilità di trovare وسایل نقلیه fermi in colonna',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_16_3',
      italianText: 'Il pannello integrativo raffigurato si può trovare all’ingresso delle autostrade, per indicare che vi sono veicoli in lento movimento',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده si può trovare all’ingresso delle autostrade, per نشان می‌دهدre che vi sono وسایل نقلیه in lento movimento',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_16_4',
      italianText: 'Il pannello integrativo raffigurato invita ad usare prudenza, per non tamponare veicoli fermi per intasamento del traffico',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده invita ad usare prudenza, per non tamponare وسایل نقلیه fermi per intasamento del traffico',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_16_5',
      italianText: 'Il pannello integrativo raffigurato, posto sull’autostrada, può consigliare di uscire per evitare probabili rallentamenti o code',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده, posto sull’autoجاده, può consigliare di uscire per evitare probabili rallentamenti o code',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_16_6',
      italianText: 'Il pannello raffigurato indica un’area di parcheggio per autovetture',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد un’area di parcheggio per autovetture',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_16_7',
      italianText: 'Il pannello integrativo raffigurato indica che la corsia di sinistra è riservata ai veicoli che pagano il pedaggio autostradale tramite telepass',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که la لاین / خط عبور di چپ è riservata ai وسایل نقلیه che pagano il pedaggio autoجادهle tramite telepass',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_16_8',
      italianText: 'Il pannello integrativo raffigurato indica una strada a senso unico',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد una جاده a senso unico',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_16_9',
      italianText: 'Il pannello integrativo raffigurato indica l’obbligo di sorpassare a sinistra',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد l’obbligo di sorpassare a چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_16_10',
      italianText: 'Il pannello integrativo raffigurato indica di diminuire la distanza di sicurezza',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد di diminuire فاصله di sicurezza',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_16_11',
      italianText: 'Il pannello integrativo raffigurato obbliga i veicoli a circolare a passo d’uomo',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده obbliga i وسایل نقلیه a circolare a passo d’uomo',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_17_1',
      italianText: 'Il pannello integrativo raffigurato indica la possibile presenza di macchine operatrici in movimento',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la possibile presenza di macchine operatrici in movimento',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_17_2',
      italianText: 'Il pannello integrativo raffigurato indica che sulla corsia possono esserci pale meccaniche al lavoro',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که sulla لاین / خط عبور possono esserci pale meccaniche al lavoro',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_17_3',
      italianText: 'Il pannello integrativo raffigurato indica che sulla strada possono esserci escavatori in movimento',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که sulla جاده possono esserci escavatori in movimento',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_17_4',
      italianText: 'Il pannello integrativo raffigurato invita ad usare particolare prudenza per la presenza di pale meccaniche in movimento',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده invita ad usare particolare prudenza per la presenza di pale meccaniche in movimento',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_17_5',
      italianText: 'Il pannello integrativo raffigurato indica la presenza di cantieri stradali con escavatori e pale meccaniche in azione',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la presenza di cantieri جادهli con escavatori e pale meccaniche in azione',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_17_6',
      italianText: 'Il pannello integrativo raffigurato indica la presenza di veicoli militari',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la presenza di وسایل نقلیه militari',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_17_7',
      italianText: 'Il pannello integrativo raffigurato indica un’area per lo scarico della spazzatura',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un’area per lo scarico della spazzatura',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_17_8',
      italianText: 'Il pannello integrativo raffigurato si trova prima di un ponte, per vietare il transito alle macchine operatrici',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده si trova prima di un ponte, per ممنوع می‌کندre il عبور alle macchine operatrici',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_17_9',
      italianText: 'Il pannello integrativo raffigurato indica una strada riservata alle sole macchine operatrici',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد una جاده riservata alle sole macchine operatrici',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_17_10',
      italianText: 'Il pannello integrativo raffigurato indica divieto di transito a tutti i veicoli con i cingoli',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد ممنوعیت عبور a همه i وسایل نقلیه con i cingoli',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_17_11',
      italianText: 'Il pannello integrativo raffigurato indica un’area di parcheggio riservata alle macchine operatrici',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un’area di parcheggio riservata alle macchine operatrici',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_18_1',
      italianText: 'Il pannello integrativo raffigurato indica un tratto di strada in salita con probabile presenza di autocarri che marciano a bassa velocità (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un tratto di جاده in salita con probabile presenza di کامیون‌ها che marciano a bassa سرعت ((FIG 140))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_18_2',
      italianText: 'Il pannello integrativo raffigurato indica un tratto di strada in ripida salita che costringe gli autocarri a rallentare (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un tratto di جاده in ripida salita che costringe gli کامیون‌ها a کم کردن سرعت ((FIG 140))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_18_3',
      italianText: 'Il pannello integrativo raffigurato indica di fare attenzione per la probabile presenza di veicoli pesanti in lento movimento (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد di fare attenzione per la probabile presenza di وسایل نقلیه pesanti in lento movimento ((FIG 140))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_18_4',
      italianText: 'In presenza del segnale raffigurato il conducente deve moderare la velocità per la possibile presenza di autocarri in lento movimento (FIG 968)',
      farsiTranslation: 'In presenza تابلو raffigurato il conducente deve کم/تعدیل کردن la سرعت per la possibile presenza di کامیون‌ها in lento movimento ((FIG 968))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_18_5',
      italianText: 'Il pannello integrativo raffigurato indica di circolare ad una velocità prudenziale, per evitare incidenti con gli autocarri che potrebbero stare davanti (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد di circolare ad una سرعت prudenziale, per evitare incidenti con gli کامیون‌ها che potrebbero stare davanti ((FIG 140))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_18_6',
      italianText: 'Il pannello integrativo raffigurato indica un tratto di strada chiuso a causa di un tamponamento (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un tratto di جاده chiuso a causa di un tamponamento ((FIG 140))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_18_7',
      italianText: 'Il pannello integrativo raffigurato indica che è vietato sorpassare gli autocarri (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که è ممنوع می‌کندto sorpassare gli کامیون‌ها ((FIG 140))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_18_8',
      italianText: 'Il pannello integrativo raffigurato si trova nei pontili d’imbarco delle navi traghetto (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده si trova nei pontili d’imbarco delle navi traghetto ((FIG 140))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_18_9',
      italianText: 'Il pannello integrativo raffigurato indica di diminuire la distanza di sicurezza (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد di diminuire فاصله di sicurezza ((FIG 140))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_18_10',
      italianText: 'Il pannello integrativo raffigurato indica di proseguire con le luci accese (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد di proseguire con le luci accese ((FIG 140))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_18_11',
      italianText: 'Il pannello integrativo raffigurato indica che bisogna suonare il clacson ogni qualvolta si sorpassa un autocarro (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که bisogna suonare il clacson ogni qualvolta si sorpassa un autocarro ((FIG 140))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_18_12',
      italianText: 'Il pannello integrativo raffigurato segnala la possibilità di poter essere trainati (FIG 140)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده علامت می‌دهد / هشدار می‌دهد la possibilità di poter essere trainati ((FIG 140))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_19_1',
      italianText: 'Il segnale raffigurato indica la possibilità di trovare un tratto di strada sdrucciolevole a causa di ghiaccio (FIG 916)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد la possibilità di trovare un tratto di جاده لغزنده a causa di یخ ((FIG 916))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_19_2',
      italianText: 'Il pannello integrativo raffigurato indica la possibilità di trovare tratti di strada ghiacciati (FIG 138)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la possibilità di trovare tratti di جاده ghiacciati ((FIG 138))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_19_3',
      italianText: 'Il pannello integrativo raffigurato indica, in caso di bassa temperatura, la presenza di tratti pericolosi per ghiaccio (FIG 138)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد, in caso di bassa temperatura, la presenza di tratti خطرsi per یخ ((FIG 138))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_19_4',
      italianText: 'Il pannello integrativo raffigurato indica, su strade coperte di neve, il pericolo di formazione di ghiaccio (FIG 138)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد, su strade coperte di برف, il خطر di formazione di یخ ((FIG 138))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_19_5',
      italianText: 'Il pannello integrativo raffigurato invita ad usare particolare prudenza, perché la strada può essere ghiacciata (FIG 138)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده invita ad usare particolare prudenza, perché la جاده può essere ghiacciata ((FIG 138))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_19_6',
      italianText: 'Il segnale raffigurato indica strada sdrucciolevole per ghiaccio, in caso di bassa temperatura (FIG 916)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد جاده لغزنده per یخ, in caso di bassa temperatura ((FIG 916))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_19_7',
      italianText: 'Il pannello integrativo raffigurato indica la presenza nelle vicinanze di impianti di risalita (FIG 138)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la presenza nelle vicinanze di impianti di risalita ((FIG 138))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_19_8',
      italianText: 'Il pannello integrativo raffigurato indica la strada da prendere per raggiungere le alpi (FIG 138)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la جاده da prendere per raggiungere le alpi ((FIG 138))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_19_9',
      italianText: 'Il pannello integrativo raffigurato indica la presenza nelle vicinanze di una stazione sciistica (FIG 138)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la presenza nelle vicinanze di una stazione sciistica ((FIG 138))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_19_10',
      italianText: 'Il pannello integrativo raffigurato invita ad usare le luci di emergenza durante la sosta (FIG 138)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده invita ad usare le luci di emergenza durante la توقف / پارک ((FIG 138))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_19_11',
      italianText: 'Il pannello integrativo raffigurato invita a non usare i fari abbaglianti (FIG 138)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده invita a non usare i fari abbaglianti ((FIG 138))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_19_12',
      italianText: 'Il pannello integrativo raffigurato indica una zona dove nevica spesso (FIG 138)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد una zona dove nevica spesso ((FIG 138))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_20_1',
      italianText: 'Il pannello integrativo raffigurato indica un tratto di strada pericoloso in caso di pioggia',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un tratto di جاده خطرso in caso di باران',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_20_2',
      italianText: 'Il pannello integrativo raffigurato invita, in caso di pioggia, ad aumentare la distanza di sicurezza',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده invita, in caso di باران, ad aumentare فاصله di sicurezza',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_20_3',
      italianText: 'Il pannello integrativo raffigurato indica che quando piove la strada può diventare sdrucciolevole',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که quando piove la جاده può diventare sdrucciolevole',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_20_4',
      italianText: 'Il pannello integrativo raffigurato indica che in caso di pioggia si può trovare del fango sulla strada',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که in caso di باران si può trovare del fango sulla جاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_20_5',
      italianText: 'Il pannello integrativo raffigurato segnala un tratto di strada sdrucciolevole in caso di pioggia',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده علامت می‌دهد / هشدار می‌دهد un tratto di جاده لغزنده in caso di باران',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_20_6',
      italianText: 'Il pannello integrativo raffigurato invita a diminuire la velocità in caso di pioggia, perché la strada diventa sdrucciolevole',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده invita a diminuire la سرعت in caso di باران, perché la جاده diventa sdrucciolevole',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_20_7',
      italianText: 'Il pannello integrativo raffigurato indica un autolavaggio nelle vicinanze',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un autolavaggio nelle vicinanze',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_20_8',
      italianText: 'Il pannello integrativo raffigurato indica la presenza di una stazione meteorologica nelle vicinanze',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la presenza di una stazione meteorologica nelle vicinanze',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_20_9',
      italianText: 'Il pannello integrativo raffigurato indica di fare attenzione agli autocarri in transito, per la possibile perdita del carico trasportato',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد di fare attenzione agli کامیون‌ها in عبور, per la possibile perdita del carico trasportato',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_20_10',
      italianText: 'Il pannello integrativo raffigurato indica un tratto di strada con probabile formazione di nuvole di polvere',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un tratto di جاده con probabile formazione di nuvole di polvere',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_20_11',
      italianText: 'Il pannello raffigurato indica una zona dove piove spesso',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد una zona dove piove spesso',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_20_12',
      italianText: 'Il pannello integrativo raffigurato indica caduta di pietre sulla strada',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد caduta di pietre sulla جاده',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_21_1',
      italianText: 'Il pannello integrativo raffigurato indica che il veicolo lasciato in sosta può essere portato via dal carro-attrezzi (FIG 141)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که il veicolo lasciato in توقف / پارک può essere portato via dal carro-attrezzi ((FIG 141))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_21_2',
      italianText: 'Il segnale raffigurato indica che il veicolo può essere spostato in una depositeria comunale (FIG 942)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده نشان می‌دهد که il veicolo può essere spostato in una depositeria comunale ((FIG 942))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_21_3',
      italianText: 'In presenza del segnale raffigurato i veicoli al servizio di persone diversamente abili, muniti di apposito contrassegno, non possono essere portati nella depositeria comunale, né bloccati con le ganasce (FIG 942)',
      farsiTranslation: 'In presenza تابلو raffigurato i وسایل نقلیه al servizio di persone diversamente abili, muniti di apposito contrassegno, non possono essere portati nella depositeria comunale, né bloccati con le ganasce ((FIG 942))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_21_4',
      italianText: 'Il pannello integrativo raffigurato indica una zona di divieto di sosta con rimozione del veicolo (FIG 141)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد una zona di ممنوعیت توقف con rimozione del veicolo ((FIG 141))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_21_5',
      italianText: 'Il segnale raffigurato prevede lo spostamento del veicolo o il suo blocco tramite ganasce (FIG 942)',
      farsiTranslation: 'تابلوی نشان‌داده‌شده prevede lo spostamento del veicolo o il suo blocco tramite ganasce ((FIG 942))',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_21_6',
      italianText: 'Il pannello integrativo raffigurato indica la presenza di officine attrezzate per il soccorso stradale (FIG 141)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد la presenza di officine attrezzate per il soccorso جادهle ((FIG 141))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_21_7',
      italianText: 'Il pannello integrativo raffigurato indica l’imbarco delle autovetture sui treni merce (FIG 141)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد l’imbarco delle autovetture sui treni merce ((FIG 141))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_21_8',
      italianText: 'Il pannello integrativo raffigurato indica un’officina meccanica attrezzata per il cambio d’olio (FIG 141)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد un’officina meccanica attrezzata per il cambio d’olio ((FIG 141))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_21_9',
      italianText: 'Il pannello integrativo raffigurato indica che possono sostare i veicoli per il soccorso stradale (FIG 141)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که possono توقف / پارکre i وسایل نقلیه per il soccorso جادهle ((FIG 141))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_21_10',
      italianText: 'Il pannello integrativo raffigurato indica che dopo tre ore il veicolo lasciato in sosta viene rimosso o bloccato (FIG 141)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد که dopo tre ore il veicolo lasciato in توقف / پارک viene rimosso o bloccato ((FIG 141))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_21_11',
      italianText: 'Il pannello integrativo raffigurato indica una strada chiusa per incidente (FIG 141)',
      farsiTranslation: 'پنل تکمیلی نشان‌داده‌شده نشان می‌دهد una جاده بسته per تصادف ((FIG 141))',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_22_1',
      italianText: 'Il pannello integrativo in figura, posto in alto sulla carreggiata insieme ad un segnale indicante una località, segnala la corsia da prendere per raggiungere detta località',
      farsiTranslation: 'پنل تکمیلی در شکل, posto in alto sulla سواره‌رو insieme ad un segnale نشان می‌دهدnte una località, علامت می‌دهد / هشدار می‌دهد la لاین / خط عبور da prendere per raggiungere detta località',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_22_2',
      italianText: 'Il pannello integrativo in figura, posto in alto sulla carreggiata insieme ad un segnale, specifica a quale corsia si riferisce il segnale',
      farsiTranslation: 'پنل تکمیلی در شکل, posto in alto sulla سواره‌رو insieme ad un segnale, specifica a quale لاین / خط عبور si riferisce il segnale',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_22_3',
      italianText: 'Il pannello integrativo in figura indica che il segnale posto sopra vale per la sola corsia indicata dalla freccia',
      farsiTranslation: 'پنل تکمیلی در شکل نشان می‌دهد که il segnale posto sopra vale per la sola لاین / خط عبور نشان می‌دهدta dalla freccia',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_22_4',
      italianText: 'Il pannello integrativo in figura è posto per indicare la fermata degli autobus',
      farsiTranslation: 'پنل تکمیلی در شکل è posto per نشان می‌دهدre la fermata degli اتوبوس‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_22_5',
      italianText: 'Il pannello integrativo in figura indica che hanno la precedenza i veicoli che vengono di fronte',
      farsiTranslation: 'پنل تکمیلی در شکل نشان می‌دهد که hanno la precedenza i وسایل نقلیه che vengono di fronte',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_22_6',
      italianText: 'Il pannello integrativo in figura indica la fine di una prescrizione',
      farsiTranslation: 'پنل تکمیلی در شکل نشان می‌دهد پایان di una prescrizione',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_22_7',
      italianText: 'Il pannello integrativo in figura indica la fine del segnale LIMITE MASSIMO DI VELOCITA’',
      farsiTranslation: 'پنل تکمیلی در شکل نشان می‌دهد پایان تابلو LIMITE MASSIMO DI VELOCITA’',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_23_1',
      italianText: 'Il pannello integrativo in figura (A) indica la vicinanza di una o più curve strette',
      farsiTranslation: 'پنل تکمیلی در شکل (A) نشان می‌دهد la vicinanza di una o più پیچ‌ها strette',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_23_2',
      italianText: 'La presenza di uno dei due pannelli integrativi in figura indica la vicinanza di una o più curve strette',
      farsiTranslation: 'La presenza di uno dei due pannelli integrativi in figura نشان می‌دهد la vicinanza di una o più پیچ‌ها strette',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_23_3',
      italianText: 'Il pannello integrativo in figura (B) indica la vicinanza di una o più curve particolarmente pericolose',
      farsiTranslation: 'پنل تکمیلی در شکل (B) نشان می‌دهد la vicinanza di una o più پیچ‌ها particolarmente خطرse',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_23_4',
      italianText: 'La presenza di uno dei due pannelli integrativi in figura indica la vicinanza di una o più curve particolarmente pericolose',
      farsiTranslation: 'La presenza di uno dei due pannelli integrativi in figura نشان می‌دهد la vicinanza di una o più پیچ‌ها particolarmente خطرse',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_23_5',
      italianText: 'Il pannello integrativo in figura (A) può indicare uno o più tornanti',
      farsiTranslation: 'پنل تکمیلی در شکل (A) può نشان می‌دهدre uno o più tornanti',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_23_6',
      italianText: 'La presenza di uno dei due pannelli integrativi in figura può indicare uno o più tornanti',
      farsiTranslation: 'La presenza di uno dei due pannelli integrativi in figura può نشان می‌دهدre uno o più tornanti',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_23_7',
      italianText: 'Il pannello integrativo in figura (B) si può trovare sotto il segnale di CURVA o DOPPIA CURVA',
      farsiTranslation: 'پنل تکمیلی در شکل (B) si può trovare sotto il segnale di CURVA o DOPPIA CURVA',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_23_8',
      italianText: 'Il pannello integrativo di figura B indica il numero di corsie di cui è composta la strada',
      farsiTranslation: 'Il pannello integrativo di figura B نشان می‌دهد il numero di corsie di cui è composta la جاده',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_23_9',
      italianText: 'Il pannello integrativo di figura B indica quanti veicoli contemporaneamente possono percorrere la curva',
      farsiTranslation: 'Il pannello integrativo di figura B نشان می‌دهد quanti وسایل نقلیه contemporaneamente possono percorrere la curva',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_23_10',
      italianText: 'Il pannello integrativo di figura B indica quanti chilometri mancano per poter trovare un cavalcavia che consente di inver- tire il senso di marcia',
      farsiTranslation: 'Il pannello integrativo di figura B نشان می‌دهد quanti chilometri mancano per poter trovare un cavalcavia che اجازه می‌دهد di inver- tire il senso di marcia',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_23_11',
      italianText: 'Il pannello integrativo di figura B indica il numero degli svincoli autostradali',
      farsiTranslation: 'Il pannello integrativo di figura B نشان می‌دهد il numero degli svincoli autoجادهli',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_23_12',
      italianText: 'La presenza di uno dei due pannelli integrativi in figura indica l’incrocio con una strada dalla quale si immettono autocar- ri provenienti da una discarica',
      farsiTranslation: 'La presenza di uno dei due pannelli integrativi in figura نشان می‌دهد l’incrocio con una جاده dalla quale si immettono autocar- ri provenienti da una discarica',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_24_1',
      italianText: 'Il pannello raffigurato indica la vicinanza di una curva stretta',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد la vicinanza di una curva stretta',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_24_2',
      italianText: 'Il pannello raffigurato indica il numero progressivo di una curva pericolosa',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد il numero progressivo di una curva خطرsa',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_24_3',
      italianText: 'Il pannello raffigurato indica il primo di una serie di tornanti (curve a raggio ridotto)',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد il primo di una serie di tornanti (پیچ‌ها a raggio ridotto)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_24_4',
      italianText: 'Il pannello raffigurato, in una serie di tornanti, ne indica il numero progressivo',
      farsiTranslation: 'Il pannello raffigurato, in una serie di tornanti, ne نشان می‌دهد il numero progressivo',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_24_5',
      italianText: 'Il pannello raffigurato indica una zona a circolazione rotatoria',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد una zona a circolazione rotatoria',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_24_6',
      italianText: 'Il pannello raffigurato indica che fra un chilometro troveremo un tornante',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد که fra un chilometro troveremo un پیچ تند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_24_7',
      italianText: 'Il pannello raffigurato indica i chilometri da fare per poter tornare indietro',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد i chilometri da fare per poter tornare indietro',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_24_8',
      italianText: 'Il pannello raffigurato indica il numero di incroci superati',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد il numero di incroci superati',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_24_9',
      italianText: 'Il pannello raffigurato indica a quanti chilometri di distanza si trova il prossimo tornante',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد a quanti chilometri di distanza si trova il prossimo پیچ تند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_24_10',
      italianText: 'Il pannello raffigurato indica il numero del cavalcavia',
      farsiTranslation: 'Il pannello raffigurato نشان می‌دهد il numero del cavalcavia',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_25_1',
      italianText: 'Il pannello integrativo in figura, posto sotto il segnale DIVIETO DI SOSTA, indica che la sosta è vietata solo in determi- nate ore dei giorni indicati',
      farsiTranslation: 'پنل تکمیلی در شکل, قرار داده‌شده زیر il segnale DIVIETO DI SOSTA, نشان می‌دهد که la توقف / پارک è ممنوع می‌کندta فقط in determi- nate ore dei giorni نشان می‌دهدti',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_25_2',
      italianText: 'Il pannello integrativo in figura è posto nei tratti di strada dove vengono effettuate operazioni di pulizia delle strade con autospazzatrici',
      farsiTranslation: 'پنل تکمیلی در شکل è posto nei tratti di جاده dove vengono effettuate operazioni di pulizia delle strade con autospazzatrici',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_25_3',
      italianText: 'Il pannello integrativo in figura indica i giorni e le ore in cui si effettuano operazioni di pulizia della strada con autospazzatrici',
      farsiTranslation: 'پنل تکمیلی در شکل نشان می‌دهد i giorni e le ore in cui si effettuano operazioni di pulizia della جاده con autospazzatrici',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_25_4',
      italianText: 'Il pannello integrativo in figura, posto sotto il segnale DIVIETO DI SOSTA, indica che la sosta è vietata solo in alcune ore dei giorni indicati',
      farsiTranslation: 'پنل تکمیلی در شکل, قرار داده‌شده زیر il segnale DIVIETO DI SOSTA, نشان می‌دهد که la توقف / پارک è ممنوع می‌کندta فقط in alcune ore dei giorni نشان می‌دهدti',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_25_5',
      italianText: 'Il pannello integrativo in figura indica l’orario per il deposito della spazzatura',
      farsiTranslation: 'پنل تکمیلی در شکل نشان می‌دهد l’orario per il deposito della spazzatura',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_25_6',
      italianText: 'Il pannello integrativo in figura indica i giorni di apertura degli autolavaggi',
      farsiTranslation: 'پنل تکمیلی در شکل نشان می‌دهد i giorni di apertura degli autolavaggi',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_25_7',
      italianText: 'Il pannello integrativo in figura obbliga a dare la precedenza agli autocarri',
      farsiTranslation: 'پنل تکمیلی در شکل obbliga a dare la precedenza agli کامیون‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_25_8',
      italianText: 'Il pannello integrativo in figura, posto sotto il segnale DIVIETO DI SOSTA, indica che non possono sostare i veicoli rappresentati',
      farsiTranslation: 'پنل تکمیلی در شکل, قرار داده‌شده زیر il segnale DIVIETO DI SOSTA, نشان می‌دهد که non possono توقف / پارکre i وسایل نقلیه rappresentati',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_26_1',
      italianText: 'I pannelli integrativi in figura vengono posti sotto i segnali di diritto di precedenza',
      farsiTranslation: 'I pannelli integrativi in figura vengono posti sotto i segnali di مستقیم di precedenza',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_26_2',
      italianText: 'I pannelli integrativi in figura indicano una intersezione, distinguendo la strada principale dalle strade secondarie',
      farsiTranslation: 'I pannelli integrativi in figura نشان می‌دهدno una intersezione, distinguendo la جاده principale dalle strade secondarie',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_26_3',
      italianText: 'I pannelli integrativi in figura posti in vicinanza di una intersezione, indicano l’andamento della strada principale',
      farsiTranslation: 'I pannelli integrativi in figura posti in vicinanza di una intersezione, نشان می‌دهدno l’andamento della جاده principale',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_26_4',
      italianText: 'I pannelli integrativi in figura possono trovarsi sotto il segnale INTERSEZIONE CON DIRITTO DI PRECEDENZA',
      farsiTranslation: 'I pannelli integrativi in figura possono trovarsi sotto il segnale INTERSEZIONE CON DIRITTO DI PRECEDENZA',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_26_5',
      italianText: 'I pannelli in figura (B) e (C) indicano una curva pericolosa',
      farsiTranslation: 'I pannelli in figura (B) e (C) نشان می‌دهدno una curva خطرsa',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_26_6',
      italianText: 'I pannelli integrativi in figura indicano come lasciare il veicolo in sosta',
      farsiTranslation: 'I pannelli integrativi in figura نشان می‌دهدno come lasciare il veicolo in توقف / پارک',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_26_7',
      italianText: 'I pannelli integrativi in figura vengono posti anche sulle autostrade',
      farsiTranslation: 'I pannelli integrativi in figura vengono posti anche sulle autostrade',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_26_8',
      italianText: 'I pannelli integrativi in figura indicano strade senza uscita',
      farsiTranslation: 'I pannelli integrativi in figura نشان می‌دهدno strade senza uscita',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_26_9',
      italianText: 'I pannelli integrativi in figura indicano la presenza di sottopassaggi',
      farsiTranslation: 'I pannelli integrativi in figura نشان می‌دهدno la presenza di sottopassaggi',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_26_10',
      italianText: 'I pannelli integrativi in figura indicano che le strade che si incrociano sono momentaneamente interrotte',
      farsiTranslation: 'I pannelli integrativi in figura نشان می‌دهدno che le strade che si incrociano sono momentaneamente interrotte',
      correctAnswer: 'Falso'
    }
  ]
};
