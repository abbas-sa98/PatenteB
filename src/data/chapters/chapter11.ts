import { Chapter } from '../../types';

export const chapter11: Chapter = {
  id: 11,
  title: 'Segnaletica Orizzontale e Segni sugli Ostacoli',
  farsiTitle: 'خط‌کشی‌های افقی و علائم روی موانع',
  lessons: [
    {
      id: 'topic_11_1',
      title: '11.1 Strisce longitudinali continue e discontinue',
      imageUrl: '/images/11-1.jpg',

      italianText: `La segnaletica orizzontale comprende i segni tracciati sulla carreggiata. Le strisce longitudinali lungo l'asse o ai margini possono essere continue o discontinue: quelle continue non si oltrepassano, quelle discontinue si possono superare rispettando le altre norme. È vietato marciare a cavallo delle strisce.`,
      farsiTranslation: `خط‌کشی افقی یعنی علامت‌هایی که روی سواره‌رو کشیده می‌شوند. خط‌های طولی می‌توانند ممتد یا بریده‌بریده باشند: از خط ممتد نباید عبور کرد، اما خط بریده‌بریده را با رعایت قوانین دیگر می‌توان رد کرد. حرکت روی خود خط ممنوع است.`,
      vocabularyIds: [
        'segnaletica_orizzontale', 'strisce_longitudinali', 'carreggiata', 'striscia_continua', 'striscia_discontinua', 'oltrepassare', 'norme', 'circolazione'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_11_1_${i + 1}`)
    },
    {
      id: 'topic_11_2',
      title: '11.2 Striscia bianca continua di mezzeria',
      imageUrl: '/images/11-2.jpg',

      italianText: `La striscia bianca continua divide la carreggiata in due semicarreggiate o corsie e non può essere superata. Consente il sorpasso solo se non la si oltrepassa. Vietati inversione di marcia e marcia a cavallo.`,
      farsiTranslation: `خط سفید ممتد وسط، سواره‌رو را به دو نیمه یا دو لاین تقسیم می‌کند و نباید از آن عبور کرد. فقط اگر از روی خط رد نشوی، ممکن است سبقت مجاز باشد. دور زدن و حرکت روی خط ممنوع است.`,
      vocabularyIds: [
        'striscia_continua', 'mezzeria', 'semicarreggiata', 'corsia', 'sorpasso', 'inversione_marcia', 'vietato'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_11_2_${i + 1}`)
    },
    {
      id: 'topic_11_3',
      title: '11.3 Doppia striscia bianca continua',
      imageUrl: '/images/11-3.jpg',

      italianText: `La doppia striscia continua si trova su strade a doppio senso e separa i sensi di marcia. Non si può mai oltrepassare, neppure per svoltare a sinistra o invertire la marcia.`,
      farsiTranslation: `دو خط سفید ممتد در جاده‌های دوطرفه جهت‌های حرکت را جدا می‌کند. هرگز نباید از آن عبور کرد، حتی برای پیچیدن به چپ یا دور زدن.`,
      vocabularyIds: [
        'doppia_striscia_continua', 'doppio_senso', 'separare', 'senso_di_marcia', 'svoltare_sinistra', 'inversione_marcia'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_11_3_${i + 1}`)
    },
    {
      id: 'topic_11_4',
      title: '11.4 Striscia bianca discontinua su strada a senso unico',
      imageUrl: '/images/11-4.jpg',

      italianText: `Nelle strade a senso unico la striscia bianca discontinua separa le corsie. Si può sorpassare anche superando la striscia, anche in curva o sui dossi, ma non si può invertire la marcia.`,
      farsiTranslation: `در جاده یک‌طرفه، خط سفید بریده‌بریده لاین‌ها را جدا می‌کند. می‌توان از روی آن برای سبقت عبور کرد، حتی در پیچ یا روی برآمدگی، اما دور زدن ممنوع است.`,
      vocabularyIds: [
        'striscia_discontinua', 'senso_unico', 'corsie', 'sorpasso', 'curva', 'dossi', 'inversione_marcia'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_11_4_${i + 1}`)
    },
    {
      id: 'topic_11_5',
      title: '11.5 Striscia bianca discontinua su strada a doppio senso',
      imageUrl: '/images/11-5.jpg',

      italianText: `Nelle strade a doppio senso la striscia discontinua divide i sensi di marcia e può essere superata per il sorpasso o per l'inversione, solo in condizioni di sicurezza. Per svoltare a sinistra ci si avvicina al centro restando nella propria semicarreggiata.`,
      farsiTranslation: `در جاده دوطرفه، خط بریده‌بریده جهت‌های حرکت را جدا می‌کند و فقط در شرایط ایمن می‌توان برای سبقت یا دور زدن از آن عبور کرد. برای پیچیدن به چپ باید به مرکز نزدیک شد ولی در نیمه خود باقی ماند.`,
      vocabularyIds: [
        'striscia_discontinua', 'doppio_senso', 'senso_di_marcia', 'sorpasso', 'in_condizioni_di_sicurezza', 'svoltare_sinistra', 'centro'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_11_5_${i + 1}`)
    },
    {
      id: 'topic_11_6',
      title: '11.6 Striscia discontinua nelle carreggiate a senso unico',
      imageUrl: '/images/11-6.jpg',

      italianText: `In una carreggiata a senso unico la striscia bianca discontinua serve a delimitare le corsie. Non divide la strada in due carreggiate e non consente l'inversione di marcia.`,
      farsiTranslation: `در سواره‌روی یک‌طرفه، خط سفید بریده‌بریده فقط لاین‌ها را مشخص می‌کند. جاده را به دو سواره‌رو تقسیم نمی‌کند و اجازه دور زدن نمی‌دهد.`,
      vocabularyIds: [
        'carreggiata', 'senso_unico', 'striscia_discontinua', 'delimitare', 'corsie', 'inversione_marcia'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_11_6_${i + 1}`)
    },
    {
      id: 'topic_11_7',
      title: '11.7 Strisce di mezzo nelle carreggiate a doppio senso',
      imageUrl: '/images/11-7.jpg',

      italianText: `In carreggiata a doppio senso la linea di mezzo può essere continua, discontinua o doppia continua. Se è discontinua si può superare durante il sorpasso; se è continua non si può superare.`,
      farsiTranslation: `در سواره‌روی دوطرفه، خط وسط می‌تواند ممتد، بریده‌بریده یا دو خط ممتد باشد. اگر بریده‌بریده باشد هنگام سبقت می‌توان رد شد؛ اگر ممتد باشد نباید رد شد.`,
      vocabularyIds: [
        'linea_di_mezzo', 'doppio_senso', 'striscia_continua', 'striscia_discontinua', 'doppia_striscia_continua', 'sorpasso'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_11_7_${i + 1}`)
    },
    {
      id: 'topic_11_8',
      title: '11.8 Striscia bianca discontinua: regola generale',
      imageUrl: '/images/11-8.jpg',

      italianText: `La striscia bianca discontinua può essere superata se le condizioni lo permettono. Divide la carreggiata in corsie e, sulle strade a doppio senso, separa i sensi di marcia.`,
      farsiTranslation: `خط سفید بریده‌بریده اگر شرایط اجازه بدهد قابل عبور است. سواره‌رو را به لاین‌ها تقسیم می‌کند و در جاده دوطرفه جهت‌های حرکت را جدا می‌کند.`,
      vocabularyIds: [
        'striscia_discontinua', 'carreggiata', 'corsie', 'doppio_senso', 'senso_di_marcia'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_11_8_${i + 1}`)
    },
    {
      id: 'topic_11_9',
      title: '11.9 Discontinua affiancata a continua',
      imageUrl: '/images/11-9.jpg',

      italianText: `Se dalla parte del veicolo c'è la striscia discontinua, il pericolo è già superato: si può sorpassare, svoltare a sinistra o invertire la marcia anche valicando entrambe le strisce.`,
      farsiTranslation: `اگر سمت خودروی ما خط بریده‌بریده باشد، یعنی خطر قبلی تمام شده است؛ می‌توان سبقت گرفت، به چپ پیچید یا دور زد، حتی با عبور از هر دو خط.`,
      vocabularyIds: [
        'striscia_discontinua', 'striscia_continua', 'pericolo', 'sorpasso', 'svoltare_sinistra', 'inversione_marcia', 'valicare'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_11_9_${i + 1}`)
    },
    {
      id: 'topic_11_10',
      title: '11.10 Continua affiancata a discontinua',
      imageUrl: '/images/11-10.jpg',

      italianText: `Se dalla parte del veicolo c'è la striscia continua, il pericolo non è ancora superato. Non si può oltrepassare la linea continua per invertire, retrocedere o svoltare a sinistra.`,
      farsiTranslation: `اگر سمت خودروی ما خط ممتد باشد، یعنی هنوز خطر تمام نشده است. برای دور زدن، عقب رفتن یا پیچیدن به چپ نباید از خط ممتد عبور کرد.`,
      vocabularyIds: [
        'striscia_continua', 'striscia_discontinua', 'pericolo', 'oltrepassare', 'retromarcia', 'svoltare_sinistra'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_11_10_${i + 1}`)
    },
    {
      id: 'topic_11_11',
      title: '11.11 Corsia di emergenza e striscia laterale continua',
      imageUrl: '/images/11-11.jpg',

      italianText: `La striscia bianca continua laterale può separare la carreggiata dalla corsia di emergenza. Questa corsia si usa solo in caso di necessità, come guasto o malessere, e non per sorpassare.`,
      farsiTranslation: `خط سفید ممتد کناری می‌تواند سواره‌رو را از لاین اضطراری جدا کند. لاین اضطراری فقط در حالت نیاز مثل خرابی خودرو یا بدحالی استفاده می‌شود، نه برای سبقت.`,
      vocabularyIds: [
        'striscia_laterale', 'corsia_emergenza', 'necessita', 'guasto', 'malessere', 'sorpasso'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_11_11_${i + 1}`)
    },
    {
      id: 'topic_11_12',
      title: '11.12 Strisce laterali discontinue e strisce di guida',
      imageUrl: '/images/11-12.jpg',

      italianText: `Le strisce laterali discontinue separano la carreggiata da piazzole, passi carrabili, corsie di accelerazione o decelerazione e strade secondarie. Le strisce di guida negli incroci aiutano a svoltare correttamente.`,
      farsiTranslation: `خط‌های کناری بریده‌بریده سواره‌رو را از محل توقف اضطراری، ورودی پارکینگ، لاین شتاب‌گیری یا کاهش سرعت و راه فرعی جدا می‌کنند. خط‌های راهنما در تقاطع کمک می‌کنند درست بپیچی.`,
      vocabularyIds: [
        'striscia_laterale', 'discontinue', 'piazzola', 'passo_carrabile', 'corsia_accelerazione', 'corsia_decelerazione', 'strisce_guida'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_11_12_${i + 1}`)
    },
    {
      id: 'topic_11_13',
      title: '11.13 Isola di traffico',
      imageUrl: '/images/11-13.jpg',

      italianText: `L'isola di traffico è una zona con strisce bianche oblique, esclusa al transito e alla sosta dei veicoli. Non è una zona di parcheggio.`,
      farsiTranslation: `جزیره ترافیکی ناحیه‌ای با خط‌های سفید مورب است که عبور و پارک وسایل نقلیه در آن ممنوع است. محل پارک نیست.`,
      vocabularyIds: [
        'isola_di_traffico', 'strisce_oblique', 'transito', 'sosta', 'veicoli'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_11_13_${i + 1}`)
    },
    {
      id: 'topic_11_14',
      title: '11.14 Comportamento presso l\'isola di traffico',
      imageUrl: '/images/11-14.jpg',
      italianText: `In presenza di un'isola di traffico bisogna seguire i percorsi indicati dalla segnaletica: alcuni veicoli devono andare diritto e altri devono svoltare a destra; non si attraversa l'isola.`,
      farsiTranslation: `کنار جزیره ترافیکی باید مسیرهایی را بروی که خط‌کشی نشان می‌دهد: بعضی خودروها باید مستقیم بروند و بعضی به راست بپیچند؛ نباید از روی جزیره عبور کرد.`,
      vocabularyIds: [
        'isola_di_traffico', 'andare_diritto', 'svoltare_destra', 'segnaletica_orizzontale'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_11_14_${i + 1}`)
    },
    {
      id: 'topic_11_15',
      title: '11.15 Strisce di guida negli incroci',
      imageUrl: '/images/11-15.jpg',

      italianText: `Le strisce di guida sono linee bianche curve e discontinue. Servono per effettuare correttamente la svolta, soprattutto a sinistra, evitando di prendere contromano la strada.`,
      farsiTranslation: `خط‌های راهنما در تقاطع، خط‌های سفید خمیده و بریده‌بریده هستند. برای پیچیدن درست، مخصوصا به چپ، استفاده می‌شوند تا وارد مسیر خلاف جهت نشوی.`,
      vocabularyIds: [
        'strisce_guida', 'incrocio', 'curve', 'discontinue', 'svolta', 'contromano'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_11_15_${i + 1}`)
    },
    {
      id: 'topic_11_16',
      title: '11.16 Comportamento sulle strisce di guida',
      imageUrl: '/images/11-16.jpg',

      italianText: `Le strisce di guida, essendo discontinue, possono essere valicate dai veicoli che proseguono diritto o svoltano secondo le direzioni consentite.`,
      farsiTranslation: `چون خط‌های راهنما بریده‌بریده هستند، وسایل نقلیه‌ای که مستقیم می‌روند یا طبق جهت‌های مجاز می‌پیچند می‌توانند از آن‌ها عبور کنند.`,
      vocabularyIds: [
        'strisce_guida', 'valicare', 'veicoli', 'proseguire', 'direzioni_consentite'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_11_16_${i + 1}`)
    },
    {
      id: 'topic_11_17',
      title: '11.17 Striscia bianca trasversale continua',
      imageUrl: '/images/11-17.jpg',

      italianText: `La striscia trasversale continua indica il punto di arresto. Si usa con semaforo rosso, vigile in posizione di alt o segnale di Stop, e può essere completata dalla scritta STOP.`,
      farsiTranslation: `خط سفید عرضی ممتد محل توقف را نشان می‌دهد. با چراغ قرمز، دستور توقف مأمور یا تابلوی ایست استفاده می‌شود و ممکن است با نوشته STOP کامل شود.`,
      vocabularyIds: [
        'striscia_trasversale', 'punto_arresto', 'semaforo', 'luce_rossa', 'vigile', 'stop'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_11_17_${i + 1}`)
    },
    {
      id: 'topic_11_18',
      title: '11.18 Punto di arresto agli incroci',
      imageUrl: '/images/11-18.jpg',

      italianText: `La striscia trasversale indica dove bisogna fermarsi quando l'arresto è imposto da semaforo, vigile o segnale. Non significa sempre fermarsi se l'incrocio non è regolato.`,
      farsiTranslation: `خط عرضی نشان می‌دهد وقتی چراغ، مأمور یا تابلو دستور توقف می‌دهد کجا باید ایستاد. اگر تقاطع کنترل نشده باشد، همیشه به معنی توقف اجباری نیست.`,
      vocabularyIds: [
        'striscia_trasversale', 'arrestarsi', 'incrocio', 'semaforo', 'vigile', 'segnale'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_11_18_${i + 1}`)
    },
    {
      id: 'topic_11_19',
      title: '11.19 Attraversamento pedonale',
      imageUrl: '/images/11-19.jpg',

      italianText: `L'attraversamento pedonale è indicato da zebrature bianche sulla carreggiata. I pedoni che attraversano hanno precedenza e il conducente deve moderare la velocità e fermarsi quando necessario.`,
      farsiTranslation: `گذرگاه عابر پیاده با خط‌های سفید روی سواره‌رو مشخص می‌شود. عابرانی که عبور می‌کنند حق تقدم دارند و راننده باید سرعت را کم کند و در صورت نیاز توقف کند.`,
      vocabularyIds: [
        'attraversamento_pedonale', 'zebrature', 'pedoni', 'precedenza', 'moderare', 'velocita'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_11_19_${i + 1}`)
    },
    {
      id: 'topic_11_20',
      title: '11.20 Attraversamento pedonale e segnaletica verticale',
      imageUrl: '/images/11-20.jpg',

      italianText: `L'attraversamento pedonale può essere completato dal segnale verticale e, per migliorare la visibilità, preceduto da una striscia gialla a zig-zag dove la sosta è vietata.`,
      farsiTranslation: `گذرگاه عابر می‌تواند با تابلوی عمودی کامل شود و برای دید بهتر قبل از آن خط زرد زیگزاگ باشد که پارک روی آن ممنوع است.`,
      vocabularyIds: [
        'attraversamento_pedonale', 'segnale_verticale', 'visibilita', 'striscia_gialla', 'zig_zag', 'sosta'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_11_20_${i + 1}`)
    },
    {
      id: 'topic_11_21',
      title: '11.21 Frecce bianche direzionali',
      imageUrl: '/images/11-21.jpg',

      italianText: `Le frecce direzionali sono tracciate nelle corsie prima degli incroci e indicano le direzioni consentite. Se le strisce sono continue obbligano a seguire la direzione; se sono discontinue permettono di scegliere la corsia.`,
      farsiTranslation: `فلش‌های سفید جهت‌نما داخل لاین‌ها و قبل از تقاطع کشیده می‌شوند و جهت‌های مجاز را نشان می‌دهند. اگر خطوط ممتد باشند باید همان جهت را رفت؛ اگر بریده‌بریده باشند می‌توان لاین را انتخاب کرد.`,
      vocabularyIds: [
        'frecce_direzionali', 'corsie', 'incrocio', 'direzioni_consentite', 'striscia_continua', 'striscia_discontinua'
      ],
      questionIds: Array.from({ length: 13 }, (_, i) => `q_11_21_${i + 1}`)
    },
    {
      id: 'topic_11_22',
      title: '11.22 Corsie di canalizzazione su strada a senso unico',
      imageUrl: '/images/11-22.jpg',

      italianText: `Nelle corsie di canalizzazione su strada a senso unico le frecce indicano le direzioni possibili. Bisogna scegliere la corsia corretta prima dell'incrocio.`,
      farsiTranslation: `در لاین‌های کانالیزه در راه یک‌طرفه، فلش‌ها جهت‌های ممکن را نشان می‌دهند. باید قبل از تقاطع لاین درست را انتخاب کرد.`,
      vocabularyIds: [
        'corsie_di_canalizzazione', 'senso_unico', 'frecce_direzionali', 'direzioni', 'incrocio'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_11_22_${i + 1}`)
    },
    {
      id: 'topic_11_23',
      title: '11.23 Corsie di canalizzazione su strada a doppio senso',
      imageUrl: '/images/11-23.jpg',

      italianText: `Su strada a doppio senso le corsie di preselezione possono permettere diritto, destra o sinistra secondo la freccia. Si può cambiare corsia finché le strisce sono discontinue.`,
      farsiTranslation: `در راه دوطرفه، لاین‌های پیش‌انتخاب بسته به فلش ممکن است مستقیم، راست یا چپ را اجازه دهند. تا وقتی خطوط بریده‌بریده‌اند می‌توان لاین عوض کرد.`,
      vocabularyIds: [
        'corsie_di_canalizzazione', 'doppio_senso', 'corsie_preselezione', 'cambiare_corsia', 'striscia_discontinua'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_11_23_${i + 1}`)
    },
    {
      id: 'topic_11_24',
      title: '11.24 Corsie di preselezione senza frecce',
      imageUrl: '/images/11-24.jpg',

      italianText: `In assenza di frecce direzionali, tutte le corsie consentono di proseguire diritto; quella di sinistra consente anche la svolta a sinistra e quella di destra anche la svolta a destra.`,
      farsiTranslation: `اگر فلش جهت‌نما نباشد، همه لاین‌ها اجازه مستقیم رفتن می‌دهند؛ لاین چپ همچنین برای پیچیدن به چپ و لاین راست همچنین برای پیچیدن به راست است.`,
      vocabularyIds: [
        'corsie_preselezione', 'frecce_direzionali', 'proseguire_diritto', 'svoltare_sinistra', 'svoltare_destra'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_11_24_${i + 1}`)
    },
    {
      id: 'topic_11_25',
      title: '11.25 Segnaletica di fermata autobus',
      imageUrl: '/images/11-25.jpg',

      italianText: `La zona di fermata di autobus e filobus in servizio pubblico può essere indicata da strisce gialle a zig-zag. La sosta è vietata, ma il transito e la fermata breve possono essere consentiti.`,
      farsiTranslation: `محل توقف اتوبوس و اتوبوس برقی عمومی می‌تواند با خطوط زرد زیگزاگ مشخص شود. پارک ممنوع است، اما عبور و توقف کوتاه ممکن است مجاز باشد.`,
      vocabularyIds: [
        'fermata_autobus', 'filobus', 'servizio_pubblico', 'striscia_gialla', 'zig_zag', 'sosta', 'fermata'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_11_25_${i + 1}`)
    },
    {
      id: 'topic_11_26',
      title: '11.26 Simbolo P e L per passaggio a livello',
      imageUrl: '/images/11-26.jpg',

      italianText: `Le lettere P e L con la Croce di Sant'Andrea sulla pavimentazione segnalano la vicinanza di un passaggio a livello e invitano alla massima prudenza.`,
      farsiTranslation: `حروف P و L همراه با صلیب سنت آندریا روی آسفالت، نزدیک بودن گذرگاه راه‌آهن را نشان می‌دهد و راننده را به احتیاط زیاد دعوت می‌کند.`,
      vocabularyIds: [
        'passaggio_a_livello', 'pavimentazione', 'vicinanza', 'massima_prudenza', 'croce_sant_andrea'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_11_26_${i + 1}`)
    },
    {
      id: 'topic_11_27',
      title: '11.27 Segni gialli e neri sul marciapiede',
      imageUrl: '/images/11-27.jpg',

      italianText: `I segni gialli e neri sul bordo verticale del marciapiede indicano un tratto dove la sosta è vietata. La fermata è invece consentita.`,
      farsiTranslation: `نشانه‌های زرد و سیاه روی لبه عمودی پیاده‌رو یعنی در آن بخش پارک ممنوع است. اما توقف کوتاه مجاز است.`,
      vocabularyIds: [
        'segni_gialli_neri', 'marciapiede', 'divieto_di_sosta', 'sosta', 'fermata'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_11_27_${i + 1}`)
    },
    {
      id: 'topic_11_28',
      title: '11.28 Divieto di sosta indicato dal bordo dipinto',
      imageUrl: '/images/11-28.jpg',

      italianText: `Il bordo del marciapiede dipinto in giallo e nero vieta la sosta a tutti i veicoli, anche taxi. Non indica lavori, parcheggio a pagamento o strada con diritto di precedenza.`,
      farsiTranslation: `لبه پیاده‌رو که زرد و سیاه رنگ شده، پارک همه وسایل نقلیه حتی تاکسی را ممنوع می‌کند. معنی کارگاه، پارک پولی یا راه دارای حق تقدم ندارد.`,
      vocabularyIds: [
        'segni_gialli_neri', 'marciapiede', 'vietato', 'sosta', 'veicoli', 'taxi'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_11_28_${i + 1}`)
    }
  ],
  questions: [
    {
      id: 'q_11_1_1',
      italianText: 'Le strisce lungo il centro della carreggiata possono essere superate se discontinue (tratteggiate)',
      farsiTranslation: 'معنی: Le strisce lungo il centro della سواره‌رو possono essere superate se بریده‌بریده (tratteggiate)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_1_2',
      italianText: 'Le strisce lungo il centro della carreggiata non possono essere superate se continue',
      farsiTranslation: 'معنی: Le strisce lungo il centro della سواره‌رو non possono essere superate se ممتد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_1_3',
      italianText: 'La striscia di mezzo in figura consente il sorpasso senza superarla, purché non vi siano motivi che lo vietino (FIG 501)',
      farsiTranslation: 'معنی: La خط وسط در شکل اجازه می‌دهد il سبقت senza superarla, purché non vi siano motivi che lo vietino (FIG 501)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_1_4',
      italianText: 'La doppia striscia in figura non può essere superata, ma si può circolare stando a cavallo di essa (FIG 509)',
      farsiTranslation: 'معنی: La doppia striscia در شکل non می‌تواند رد شود, ma si può circolare stando a cavallo di essa (FIG 509)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_1_5',
      italianText: 'Le strisce lungo il centro della carreggiata possono essere bianche o azzurre',
      farsiTranslation: 'معنی: Le strisce lungo il centro della سواره‌رو possono essere bianche o azzurre',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_1_6',
      italianText: 'La striscia discontinua in figura può essere sostituita con alcuni “chiodi” o catadiottri, messi a distanza di 50 centimetri (FIG 502)',
      farsiTranslation: 'معنی: La striscia disممتد در شکل può essere sostituita con alcuni “chiodi” o catadiottri, messi a distanza di 50 centimetri (FIG 502)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_1_7',
      italianText: 'La striscia di mezzo in figura non consente il sorpasso in ogni caso (FIG 501)',
      farsiTranslation: 'معنی: La خط وسط در شکل non اجازه می‌دهد il سبقت in ogni caso (FIG 501)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_2_1',
      italianText: 'La striscia bianca continua di mezzo in figura divide la carreggiata in due corsie',
      farsiTranslation: 'معنی: La خط سفید ممتد di mezzo در شکل تقسیم می‌کند la سواره‌رو in due لاین‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_2_2',
      italianText: 'La striscia bianca continua di mezzo in figura non può essere superata',
      farsiTranslation: 'معنی: La خط سفید ممتد di mezzo در شکل non می‌تواند رد شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_2_3',
      italianText: 'La striscia bianca continua di mezzo in figura, divide i sensi di marcia nelle strade a doppio senso',
      farsiTranslation: 'معنی: La خط سفید ممتد di mezzo در شکل, تقسیم می‌کند i جهت‌های حرکت nelle جاده‌ها a دوطرفه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_2_4',
      italianText: 'La striscia bianca continua di mezzo in figura, sulle strade a doppio senso si può trovare sul tratto in salita di un dosso',
      farsiTranslation: 'معنی: La خط سفید ممتد di mezzo در شکل, sulle جاده‌ها a دوطرفه si può trovare sul tratto in salita di un dosso',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_2_5',
      italianText: 'La striscia bianca continua di mezzo in figura, sulle strade a doppio senso può trovarsi in vicinanza degli attraversamenti pedonali',
      farsiTranslation: 'معنی: La خط سفید ممتد di mezzo در شکل, sulle جاده‌ها a دوطرفه può trovarsi in vicinanza degli attraversamenti pedonali',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_2_6',
      italianText: 'La striscia bianca continua di mezzo in figura permette la manovra di sorpasso senza superarla',
      farsiTranslation: 'معنی: La خط سفید ممتد di mezzo در شکل permette la manovra di سبقت senza superarla',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_2_7',
      italianText: 'La striscia bianca continua di mezzo in figura divide la strada in due carreggiate, ognuna a doppio senso',
      farsiTranslation: 'معنی: La خط سفید ممتد di mezzo در شکل تقسیم می‌کند la جاده in due carreggiate, ognuna a دوطرفه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_2_8',
      italianText: 'La striscia bianca continua di mezzo in figura consente di marciarvi a cavallo',
      farsiTranslation: 'معنی: La خط سفید ممتد di mezzo در شکل اجازه می‌دهد di marciarvi a cavallo',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_2_9',
      italianText: 'La striscia bianca continua di mezzo in figura consente il sorpasso anche superandola, purché con le sole ruote di sinistra',
      farsiTranslation: 'معنی: La خط سفید ممتد di mezzo در شکل اجازه می‌دهد il سبقت anche superandola, purché con le sole ruote di sinistra',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_2_10',
      italianText: 'La striscia bianca continua di mezzo in figura consente l’inversione di marcia nelle strade a doppio senso',
      farsiTranslation: 'معنی: La خط سفید ممتد di mezzo در شکل اجازه می‌دهد l’دور زدن / تغییر جهت کامل nelle جاده‌ها a دوطرفه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_3_1',
      italianText: 'La doppia striscia continua in figura serve a dividere i sensi di marcia, sulle strade a doppio senso di circolazione',
      farsiTranslation: 'معنی: La دو خط ممتد در شکل به کار می‌رود a تقسیم می‌کندre i جهت‌های حرکت, sulle جاده‌ها a دوطرفه di circolazione',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_3_2',
      italianText: 'La doppia striscia continua in figura non può essere superata',
      farsiTranslation: 'معنی: La دو خط ممتد در شکل non می‌تواند رد شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_3_3',
      italianText: 'La doppia striscia continua in figura permette il sorpasso, se consentito, senza superarla',
      farsiTranslation: 'معنی: La دو خط ممتد در شکل permette il سبقت, se consentito, senza superarla',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_3_4',
      italianText: 'La doppia striscia continua in figura non consente l’inversione del senso di marcia',
      farsiTranslation: 'معنی: La دو خط ممتد در شکل non اجازه می‌دهد l’inversione del جهت حرکت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_3_5',
      italianText: 'La doppia striscia continua in figura non consente di svoltare a sinistra',
      farsiTranslation: 'معنی: La دو خط ممتد در شکل non اجازه می‌دهد di پیچیدن به چپ',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_3_6',
      italianText: 'La doppia striscia continua in figura si può trovare ai bordi della strada, per segnalare i margini',
      farsiTranslation: 'معنی: La دو خط ممتد در شکل si può trovare ai bordi della جاده, per segnalare i margini',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_3_7',
      italianText: 'La doppia striscia continua in figura indica che si può viaggiare per file parallele',
      farsiTranslation: 'معنی: La دو خط ممتد در شکل نشان می‌دهد che si può viaggiare per file parallele',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_3_8',
      italianText: 'La doppia striscia continua in figura indica il punto in cui i conducenti si debbono arrestare per la presenza del segnale di STOP',
      farsiTranslation: 'معنی: La دو خط ممتد در شکل نشان می‌دهد il punto in cui i رانندگان si debbono arrestare per la presenza del segnale di ایست',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_3_9',
      italianText: 'La doppia striscia continua in figura è di colore azzurro nei parcheggi a pagamento',
      farsiTranslation: 'معنی: La دو خط ممتد در شکل è di colore azzurro nei parcheggi a pagamento',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_3_10',
      italianText: 'La doppia striscia continua in figura può essere superata',
      farsiTranslation: 'معنی: La دو خط ممتد در شکل می‌تواند رد شود',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_4_1',
      italianText: 'In una strada a senso unico di circolazione con la segnaletica indicata in figura si può sorpassare anche superando la striscia di mezzo',
      farsiTranslation: 'معنی: In una جاده a یک‌طرفه di circolazione con la segnaletica نشان می‌دهدta در شکل si può سبقت گرفتن anche superando la خط وسط',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_4_2',
      italianText: 'In una strada a senso unico di circolazione con la segnaletica indicata in figura si può sorpassare anche in curva',
      farsiTranslation: 'معنی: In una جاده a یک‌طرفه di circolazione con la segnaletica نشان می‌دهدta در شکل si può سبقت گرفتن anche in curva',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_4_3',
      italianText: 'In una strada a senso unico di circolazione con la segnaletica indicata in figura la carreggiata è divisa in due corsie',
      farsiTranslation: 'معنی: In una جاده a یک‌طرفه di circolazione con la segnaletica نشان می‌دهدta در شکل la سواره‌رو è divisa in due لاین‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_4_4',
      italianText: 'In una strada a senso unico di circolazione con la segnaletica indicata in figura la corsia di sinistra è, di norma, riservata al sorpasso',
      farsiTranslation: 'معنی: In una جاده a یک‌طرفه di circolazione con la segnaletica نشان می‌دهدta در شکل la لاین di sinistra è, di norma, riservata al سبقت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_4_5',
      italianText: 'In una strada a senso unico di circolazione con la segnaletica indicata in figura è consentito il sorpasso in vicinanza o in corrispondenza di dossi',
      farsiTranslation: 'معنی: In una جاده a یک‌طرفه di circolazione con la segnaletica نشان می‌دهدta در شکل è consentito il سبقت in vicinanza o in corrispondenza di dossi',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_4_6',
      italianText: 'In una strada a senso unico di circolazione con la segnaletica indicata in figura si può sempre viaggiare per file parallele',
      farsiTranslation: 'معنی: In una جاده a یک‌طرفه di circolazione con la segnaletica نشان می‌دهدta در شکل si può sempre viaggiare per file parallele',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_4_7',
      italianText: 'In una strada a senso unico di circolazione con la segnaletica indicata in figura si può fare l’inversione del senso di marcia',
      farsiTranslation: 'معنی: In una جاده a یک‌طرفه di circolazione con la segnaletica نشان می‌دهدta در شکل si può fare l’inversione del جهت حرکت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_4_8',
      italianText: 'In una strada a senso unico di circolazione con la segnaletica indicata in figura si può circolare stando a cavallo della striscia di mezzo',
      farsiTranslation: 'معنی: In una جاده a یک‌طرفه di circolazione con la segnaletica نشان می‌دهدta در شکل si può circolare stando a cavallo della خط وسط',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_4_9',
      italianText: 'In una strada a senso unico di circolazione con la segnaletica indicata in figura per svoltare a sinistra bisogna rimanere nella corsia di destra',
      farsiTranslation: 'معنی: In una جاده a یک‌طرفه di circolazione con la segnaletica نشان می‌دهدta در شکل per پیچیدن به چپ bisogna rimanere nella لاین di destra',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_5_1',
      italianText: 'In una strada a doppio senso di circolazione con la segnaletica indicata in figura si può effettuare un sorpasso anche superando la striscia di mezzo',
      farsiTranslation: 'معنی: In una جاده a دوطرفه di circolazione con la segnaletica نشان می‌دهدta در شکل si può effettuare un سبقت anche superando la خط وسط',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_5_2',
      italianText: 'In una strada a doppio senso di circolazione con la segnaletica indicata in figura non si può circolare stando a cavallo della striscia di mezzo',
      farsiTranslation: 'معنی: In una جاده a دوطرفه di circolazione con la segnaletica نشان می‌دهدta در شکل non si può circolare stando a cavallo della خط وسط',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_5_3',
      italianText: 'In una strada a doppio senso di circolazione con la segnaletica indicata in figura per svoltare a sinistra bisogna spostarsi verso il centro della carreggiata',
      farsiTranslation: 'معنی: In una جاده a دوطرفه di circolazione con la segnaletica نشان می‌دهدta در شکل per پیچیدن به چپ bisogna spostarsi verso il centro della سواره‌رو',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_5_4',
      italianText: 'In una strada a doppio senso di circolazione con la segnaletica indicata in figura si può sorpassare con qualsiasi condi- zione di visibilità e di traffico',
      farsiTranslation: 'معنی: In una جاده a دوطرفه di circolazione con la segnaletica نشان می‌دهدta در شکل si può سبقت گرفتن con qualsiasi condi- zione di visibilità e di traffico',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_5_5',
      italianText: 'In una strada a doppio senso di circolazione con la segnaletica indicata in figura si può sorpassare anche in curva, ma solo in città',
      farsiTranslation: 'معنی: In una جاده a دوطرفه di circolazione con la segnaletica نشان می‌دهدta در شکل si può سبقت گرفتن anche in curva, ma solo in città',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_5_6',
      italianText: 'In una strada a doppio senso di circolazione con la segnaletica indicata in figura si può fare l’inversione di marcia, ma senza occupare l’altra corsia',
      farsiTranslation: 'معنی: In una جاده a دوطرفه di circolazione con la segnaletica نشان می‌دهدta در شکل si può fare l’دور زدن / تغییر جهت کامل, ma senza occupare l’altra لاین',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_5_7',
      italianText: 'In una strada a doppio senso di circolazione con la segnaletica indicata in figura, fuori dei centri abitati la corsia di sini- stra serve per la sosta d’emergenza',
      farsiTranslation: 'معنی: In una جاده a دوطرفه di circolazione con la segnaletica نشان می‌دهدta در شکل, fuori dei centri abitati la لاین di sini- stra به کار می‌رود per la پارک / توقف طولانی d’emergenza',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_6_1',
      italianText: 'In una carreggiata a senso unico, la striscia bianca discontinua in figura serve a delimitare le corsie',
      farsiTranslation: 'معنی: In una سواره‌رو a یک‌طرفه, la خط سفید بریده‌بریده در شکل به کار می‌رود a محدود/مشخص می‌کندre le لاین‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_6_2',
      italianText: 'La striscia bianca discontinua in figura, nelle strade a senso unico, divide le corsie',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل, nelle جاده‌ها a یک‌طرفه, تقسیم می‌کند le لاین‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_6_3',
      italianText: 'La striscia bianca discontinua in figura consente l’inversione di marcia nelle strade a senso unico',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل اجازه می‌دهد l’دور زدن / تغییر جهت کامل nelle جاده‌ها a یک‌طرفه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_6_4',
      italianText: 'La striscia bianca discontinua in figura divide la strada in due carreggiate, ognuna a doppio senso',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل تقسیم می‌کند la جاده in due carreggiate, ognuna a دوطرفه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_6_5',
      italianText: 'La striscia bianca discontinua in figura si trova solo nelle strade a senso unico',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل si trova solo nelle جاده‌ها a یک‌طرفه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_6_6',
      italianText: 'La striscia bianca discontinua in figura nelle strade a senso unico è posta nei dossi, per dividere i due sensi di marcia',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل nelle جاده‌ها a یک‌طرفه è posta nei dossi, per تقسیم می‌کندre i due جهت‌های حرکت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_7_1',
      italianText: 'In una carreggiata a doppio senso di circolazione la striscia di mezzo può essere continua o discontinua (tratteggiata)',
      farsiTranslation: 'معنی: In una سواره‌رو a دوطرفه di circolazione la خط وسط può essere ممتد o disممتد (tratteggiata)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_7_2',
      italianText: 'In una carreggiata a doppio senso di circolazione la striscia di mezzo, se discontinua (tratteggiata), può essere superata durante un sorpasso',
      farsiTranslation: 'معنی: In una سواره‌رو a دوطرفه di circolazione la خط وسط, se disممتد (tratteggiata), می‌تواند رد شود durante un سبقت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_7_3',
      italianText: 'In una carreggiata a doppio senso di circolazione la linea di mezzo può essere costituita da due strisce continue affian- cate, come in figura (FIG 509)',
      farsiTranslation: 'معنی: In una سواره‌رو a دوطرفه di circolazione la linea di mezzo può essere costituita da due strisce ممتد affian- cate, come در شکل (FIG 509)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_7_4',
      italianText: 'In una carreggiata a doppio senso di circolazione la linea di mezzo se costituita da strisce continue, come in figura, consente il sorpasso senza superare le linee (FIG 509)',
      farsiTranslation: 'معنی: In una سواره‌رو a دوطرفه di circolazione la linea di mezzo se costituita da strisce ممتد, come در شکل, اجازه می‌دهد il سبقت senza superare le linee (FIG 509)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_7_5',
      italianText: 'Nella carreggiata a doppio senso di circolazione le strisce di mezzo in figura dividono i sensi di marcia (FIG 509)',
      farsiTranslation: 'معنی: Nella سواره‌رو a دوطرفه di circolazione le خطوط وسط در شکل dividono i جهت‌های حرکت (FIG 509)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_7_6',
      italianText: 'Nella carreggiata a doppio senso di circolazione la striscia di mezzo in figura, può essere superata con le sole ruote di sinistra (FIG 501)',
      farsiTranslation: 'معنی: Nella سواره‌رو a دوطرفه di circolazione la خط وسط در شکل, می‌تواند رد شود con le sole ruote di sinistra (FIG 501)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_7_7',
      italianText: 'Nella carreggiata a doppio senso di circolazione come in figura la striscia di mezzo divide la strada in due carreggiate, ognuna a due corsie (FIG 502)',
      farsiTranslation: 'معنی: Nella سواره‌رو a دوطرفه di circolazione come در شکل la خط وسط تقسیم می‌کند la جاده in due carreggiate, ognuna a due لاین‌ها (FIG 502)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_8_1',
      italianText: 'La striscia bianca discontinua in figura può essere superata',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل می‌تواند رد شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_8_2',
      italianText: 'La striscia bianca discontinua in figura divide la carreggiata in due corsie',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل تقسیم می‌کند la سواره‌رو in due لاین‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_8_3',
      italianText: 'Nelle strade a doppio senso con due corsie la striscia bianca discontinua in figura divide i sensi di marcia',
      farsiTranslation: 'معنی: Nelle جاده‌ها a دوطرفه con due لاین‌ها la خط سفید بریده‌بریده در شکل تقسیم می‌کند i جهت‌های حرکت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_8_4',
      italianText: 'La striscia bianca discontinua in figura consente, in caso si voglia sorpassare, di occupare momentaneamente l’altra corsia di marcia',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل اجازه می‌دهد, in caso si voglia سبقت گرفتن, di occupare momentaneamente l’altra لاین di marcia',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_8_5',
      italianText: 'La striscia bianca discontinua in figura consente l’inversione di marcia, in condizioni di sicurezza, se la strada è a doppio senso',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل اجازه می‌دهد l’دور زدن / تغییر جهت کامل, in condizioni di sicurezza, se la جاده è a دوطرفه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_8_6',
      italianText: 'La striscia bianca discontinua in figura consente la svolta a sinistra',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل اجازه می‌دهد la svolta a sinistra',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_8_7',
      italianText: 'La striscia bianca discontinua in figura consente di circolare stando a cavallo di essa',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل اجازه می‌دهد di circolare stando a cavallo di essa',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_8_8',
      italianText: 'La striscia bianca discontinua in figura divide la strada da una pista ciclabile',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل تقسیم می‌کند la جاده da una pista ciclabile',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_8_9',
      italianText: 'La striscia bianca discontinua in figura si trova in vicinanza di tutti i passaggi a livello',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل si trova in vicinanza di tutti i passaggi a livello',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_8_10',
      italianText: 'La striscia bianca discontinua in figura può essere sostituita da una serie di “chiodi” per segnaletica stradale',
      farsiTranslation: 'معنی: La خط سفید بریده‌بریده در شکل può essere sostituita da una serie di “chiodi” per segnaletica جادهle',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_9_1',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia discontinua in figura si trova subito dopo una curva',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia disممتد در شکل si trova subito dopo una curva',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_9_2',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia discontinua in figura consente di effettuare un sorpas- so anche superando tutte e due le strisce',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia disممتد در شکل اجازه می‌دهد di effettuare un sorpas- so anche superando tutte e due le strisce',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_9_3',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia discontinua in figura si trova dopo un passaggio a livello',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia disممتد در شکل si trova dopo un گذرگاه راه‌آهن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_9_4',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia discontinua in figura si può trovare nel tratto in discesa di un dosso',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia disممتد در شکل si può trovare nel tratto in discesa di un dosso',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_9_5',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia discontinua in figura consente anche al veicolo che viene di fronte di superare le strisce',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia disممتد در شکل اجازه می‌دهد anche al veicolo che viene di fronte di superare le strisce',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_9_6',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia discontinua in figura si trova, di norma, su strade a senso unico di circolazione',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia disممتد در شکل si trova, di norma, su جاده‌ها a یک‌طرفه di circolazione',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_9_7',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia discontinua in figura si trova sul tratto in salita di un dosso',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia disممتد در شکل si trova sul tratto in salita di un dosso',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_9_8',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia discontinua in figura si trova subito prima di un incrocio',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia disممتد در شکل si trova subito prima di un incrocio',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_9_9',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia discontinua in figura si trova prima di una curva',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia disممتد در شکل si trova prima di una curva',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_10_1',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia continua centrale in figura si trova prima di una curva',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia ممتد centrale در شکل si trova prima di una curva',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_10_2',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia continua centrale in figura si trova sul tratto in salita di un dosso',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia ممتد centrale در شکل si trova sul tratto in salita di un dosso',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_10_3',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia continua centrale in figura si trova prima di un incrocio',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia ممتد centrale در شکل si trova prima di un incrocio',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_10_4',
      italianText: 'Il veicolo in figura non può superare la striscia continua centrale',
      farsiTranslation: 'معنی: Il veicolo در شکل non può superare la striscia ممتد centrale',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_10_5',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia continua centrale in figura si trova, di norma, su strade a senso unico di circolazione',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia ممتد centrale در شکل si trova, di norma, su جاده‌ها a یک‌طرفه di circolazione',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_10_6',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia continua centrale in figura si trova ogni volta che si supera il tratto in discesa di un dosso',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia ممتد centrale در شکل si trova ogni volta che si supera il tratto in discesa di un dosso',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_10_7',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia continua centrale in figura si trova ogni volta che si supera un passaggio a livello',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia ممتد centrale در شکل si trova ogni volta che si supera un گذرگاه راه‌آهن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_10_8',
      italianText: 'Rispetto al veicolo che procede nel senso della freccia, la striscia continua centrale in figura consente l’inversione del senso di marcia',
      farsiTranslation: 'معنی: Rispetto al veicolo che procede nel senso della freccia, la striscia ممتد centrale در شکل اجازه می‌دهد l’inversione del جهت حرکت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_10_9',
      italianText: 'Il veicolo in figura può effettuare un sorpasso anche superando la striscia continua centrale',
      farsiTranslation: 'معنی: Il veicolo در شکل può effettuare un سبقت anche superando la striscia ممتد centrale',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_11_1',
      italianText: 'Nella segnaletica in figura la striscia bianca continua, che separa la carreggiata dalla corsia di emergenza (corsia A), può essere superata solo in caso di necessità (guasto del veicolo, malessere dei viaggiatori)',
      farsiTranslation: 'معنی: Nella segnaletica در شکل la خط سفید ممتد, che جدا می‌کند la سواره‌رو dalla لاین اضطراری (لاین A), می‌تواند رد شود solo in caso di necessità (guasto del veicolo, malessere dei viaggiatori)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_11_2',
      italianText: 'La corsia di emergenza (corsia A) si può utilizzare in caso di guasto del veicolo, per un massimo di tre ore',
      farsiTranslation: 'معنی: La لاین اضطراری (لاین A) si può utilizzare in caso di guasto del veicolo, per un massimo di tre ore',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_11_3',
      italianText: 'La corsia di emergenza (corsia A) non si può occupare per le manovre di sorpasso',
      farsiTranslation: 'معنی: La لاین اضطراری (لاین A) non si può occupare per le manovre di سبقت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_11_4',
      italianText: 'Nella segnaletica in figura la striscia bianca continua, che delimita la corsia di emergenza, (corsia A), indica una zona di parcheggio a tempo',
      farsiTranslation: 'معنی: Nella segnaletica در شکل la خط سفید ممتد, che محدود/مشخص می‌کند la لاین اضطراری, (لاین A), نشان می‌دهد una zona di parcheggio a tempo',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_11_5',
      italianText: 'Nella segnaletica in figura la striscia bianca continua che delimita la corsia di emergenza, (corsia A), può essere sempre superata in caso di intenso traffico',
      farsiTranslation: 'معنی: Nella segnaletica در شکل la خط سفید ممتد che محدود/مشخص می‌کند la لاین اضطراری, (لاین A), può essere sempre superata in caso di intenso traffico',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_11_6',
      italianText: 'La corsia di emergenza (corsia A) è riservata alla svolta a destra',
      farsiTranslation: 'معنی: La لاین اضطراری (لاین A) è riservata alla svolta a destra',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_11_7',
      italianText: 'La corsia di emergenza (corsia A) è riservata alla decelerazione',
      farsiTranslation: 'معنی: La لاین اضطراری (لاین A) è riservata alla decelerazione',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_11_8',
      italianText: 'La corsia di emergenza (corsia A) è vietata al transito degli autoveicoli ma non al transito dei motocicli',
      farsiTranslation: 'معنی: La لاین اضطراری (لاین A) è ممنوع است al transito degli autoوسایل نقلیه ma non al transito dei motocicli',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_12_1',
      italianText: 'La striscia bianca laterale discontinua in figura separa la carreggiata da una piazzola di sosta (FIG 513)',
      farsiTranslation: 'معنی: La striscia bianca laterale disممتد در شکل جدا می‌کند la سواره‌رو da una piazzola di پارک / توقف طولانی (FIG 513)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_12_2',
      italianText: 'La striscia bianca laterale discontinua in figura separa la carreggiata da un passo carrabile (FIG 505)',
      farsiTranslation: 'معنی: La striscia bianca laterale disممتد در شکل جدا می‌کند la سواره‌رو da un passo carrabile (FIG 505)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_12_3',
      italianText: 'Le strisce bianche discontinue sull’intersezione in figura sono strisce di guida (FIG 506)',
      farsiTranslation: 'معنی: Le strisce bianche بریده‌بریده sull’intersezione در شکل sono خطوط راهنما (FIG 506)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_12_4',
      italianText: 'La striscia bianca laterale discontinua in figura divide la carreggiata da una corsia di accelerazione (FIG 537)',
      farsiTranslation: 'معنی: La striscia bianca laterale disممتد در شکل تقسیم می‌کند la سواره‌رو da una لاین di accelerazione (FIG 537)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_12_5',
      italianText: 'La striscia bianca laterale discontinua in figura individua il bordo della strada principale, separandolo da quello della strada secondaria (FIG 512)',
      farsiTranslation: 'معنی: La striscia bianca laterale disممتد در شکل individua il لبه della جاده principale, جدا می‌کندndolo da quello della جاده secondaria (FIG 512)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_12_6',
      italianText: 'La striscia bianca laterale discontinua in figura può essere superata solo in caso di emergenza (FIG 513)',
      farsiTranslation: 'معنی: La striscia bianca laterale disممتد در شکل می‌تواند رد شود solo in caso di emergenza (FIG 513)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_12_7',
      italianText: 'La striscia bianca laterale discontinua in figura significa che la sosta non è possibile (FIG 513)',
      farsiTranslation: 'معنی: La striscia bianca laterale disممتد در شکل significa che la پارک / توقف طولانی non è possibile (FIG 513)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_12_8',
      italianText: 'La striscia bianca laterale discontinua separa la carreggiata dalla corsia di emergenza',
      farsiTranslation: 'معنی: La striscia bianca laterale disممتد جدا می‌کند la سواره‌رو dalla لاین اضطراری',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_12_9',
      italianText: 'La striscia bianca laterale discontinua segnala l’inizio di una banchina',
      farsiTranslation: 'معنی: La striscia bianca laterale disممتد segnala l’inizio di una banchina',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_12_10',
      italianText: 'Le strisce bianche di guida in figura non consentono la svolta (FIG 506)',
      farsiTranslation: 'معنی: Le strisce bianche di guida در شکل non consentono la svolta (FIG 506)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_12_11',
      italianText: 'La striscia bianca laterale discontinua in figura delimita l’accesso ad una pista ciclabile (FIG 505)',
      farsiTranslation: 'معنی: La striscia bianca laterale disممتد در شکل محدود/مشخص می‌کند l’accesso ad una pista ciclabile (FIG 505)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_12_12',
      italianText: 'La striscia bianca laterale discontinua in figura, delimita una piazzola di sosta (FIG 537)',
      farsiTranslation: 'معنی: La striscia bianca laterale disممتد در شکل, محدود/مشخص می‌کند una piazzola di پارک / توقف طولانی (FIG 537)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_13_1',
      italianText: 'L’isola di traffico in figura indica un tratto di strada vietato al transito ed alla sosta dei veicoli',
      farsiTranslation: 'معنی: L’isola di traffico در شکل نشان می‌دهد un tratto di جاده ممنوع است al transito ed alla پارک / توقف طولانی dei وسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_13_2',
      italianText: 'L’isola di traffico in figura è realizzata con strisce bianche oblique',
      farsiTranslation: 'معنی: L’isola di traffico در شکل è realizzata con strisce bianche oblique',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_13_3',
      italianText: 'L’isola di traffico in figura indica una parte della strada su cui non si può circolare',
      farsiTranslation: 'معنی: L’isola di traffico در شکل نشان می‌دهد una parte della جاده su cui non si può circolare',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_13_4',
      italianText: 'L’isola di traffico in figura può anche essere realizzata con strisce azzurre trasversali',
      farsiTranslation: 'معنی: L’isola di traffico در شکل può anche essere realizzata con strisce azzurre trasversali',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_13_5',
      italianText: 'L’isola di traffico in figura indica una zona dove è possibile la sosta dei veicoli',
      farsiTranslation: 'معنی: L’isola di traffico در شکل نشان می‌دهد una zona dove è possibile la پارک / توقف طولانی dei وسایل نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_13_6',
      italianText: 'L’isola di traffico in figura indica una parte della carreggiata sulla quale si può sostare solo per 30 minuti',
      farsiTranslation: 'معنی: L’isola di traffico در شکل نشان می‌دهد una parte della سواره‌رو sulla quale si può پارک / توقف طولانیre solo per 30 minuti',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_14_1',
      italianText: 'In presenza dell’isola di traffico rappresentata in figura il veicolo C deve svoltare a destra',
      farsiTranslation: 'معنی: In presenza dell’isola di traffico rappresentata در شکل il veicolo C deve پیچیدن به راست',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_14_2',
      italianText: 'In presenza dell’isola di traffico rappresentata in figura il veicolo B deve svoltare a destra',
      farsiTranslation: 'معنی: In presenza dell’isola di traffico rappresentata در شکل il veicolo B deve پیچیدن به راست',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_14_3',
      italianText: 'In presenza dell’isola di traffico rappresentata in figura il veicolo A deve andare diritto',
      farsiTranslation: 'معنی: In presenza dell’isola di traffico rappresentata در شکل il veicolo A deve andare diritto',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_14_4',
      italianText: 'In presenza dell’isola di traffico rappresentata in figura il veicolo C può andare in qualsiasi direzione',
      farsiTranslation: 'معنی: In presenza dell’isola di traffico rappresentata در شکل il veicolo C può andare in qualsiasi direzione',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_14_5',
      italianText: 'In presenza dell’isola di traffico rappresentata in figura il veicolo B può svoltare a sinistra, dando la precedenza al veicolo A',
      farsiTranslation: 'معنی: In presenza dell’isola di traffico rappresentata در شکل il veicolo B può پیچیدن به چپ, dando la حق تقدم al veicolo A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_14_6',
      italianText: 'In presenza dell’isola di traffico rappresentata in figura il veicolo A può svoltare a sinistra, dando la precedenza al veicolo C',
      farsiTranslation: 'معنی: In presenza dell’isola di traffico rappresentata در شکل il veicolo A può پیچیدن به چپ, dando la حق تقدم al veicolo C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_15_1',
      italianText: 'Le strisce di guida in figura, sono strisce curve discontinue (tratteggiate) di colore bianco',
      farsiTranslation: 'معنی: Le خطوط راهنما در شکل, sono strisce curve بریده‌بریده (tratteggiate) di colore bianco',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_15_2',
      italianText: 'Le strisce di guida in figura, di norma, si trovano dove la svolta a sinistra si effettua lasciando alla nostra destra il centro dell’incrocio',
      farsiTranslation: 'معنی: Le خطوط راهنما در شکل, di norma, si trovano dove la svolta a sinistra si effettua lasciando alla nostra destra il centro dell’incrocio',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_15_3',
      italianText: 'Le strisce di guida in figura debbono essere lasciate alla sinistra del veicolo quando si svolta a sinistra',
      farsiTranslation: 'معنی: Le خطوط راهنما در شکل debbono essere lasciate alla sinistra del veicolo quando si svolta a sinistra',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_15_4',
      italianText: 'Le strisce di guida in figura servono ad effettuare la svolta in modo corretto, senza prendere contro mano la strada di sinistra',
      farsiTranslation: 'معنی: Le خطوط راهنما در شکل servono ad effettuare la svolta in modo corretto, senza prendere contro mano la جاده di sinistra',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_15_5',
      italianText: 'Le strisce di guida in figura debbono essere lasciate sempre alla destra del veicolo quando si svolta a destra',
      farsiTranslation: 'معنی: Le خطوط راهنما در شکل debbono essere lasciate sempre alla destra del veicolo quando si svolta a destra',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_15_6',
      italianText: 'Le strisce di guida in figura non possono essere superate dai veicoli che proseguono diritto',
      farsiTranslation: 'معنی: Le خطوط راهنما در شکل non possono essere superate dai وسایل نقلیه che proseguono diritto',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_15_7',
      italianText: 'Le strisce di guida in figura delimitano un’isola di traffico',
      farsiTranslation: 'معنی: Le خطوط راهنما در شکل محدود/مشخص می‌کندno un’isola di traffico',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_16_1',
      italianText: 'In presenza delle strisce di guida in figura il veicolo C può andare diritto',
      farsiTranslation: 'معنی: In presenza delle خطوط راهنما در شکل il veicolo C può andare diritto',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_16_2',
      italianText: 'In presenza delle strisce di guida in figura il veicolo B può svoltare a sinistra, dando però la precedenza al veicolo A',
      farsiTranslation: 'معنی: In presenza delle خطوط راهنما در شکل il veicolo B può پیچیدن به چپ, dando però la حق تقدم al veicolo A',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_16_3',
      italianText: 'In presenza delle strisce di guida in figura il veicolo A può andare in qualsiasi direzione',
      farsiTranslation: 'معنی: In presenza delle خطوط راهنما در شکل il veicolo A può andare in qualsiasi direzione',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_16_4',
      italianText: 'In presenza delle strisce di guida in figura il veicolo C deve svoltare a destra',
      farsiTranslation: 'معنی: In presenza delle خطوط راهنما در شکل il veicolo C deve پیچیدن به راست',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_16_5',
      italianText: 'In presenza delle strisce di guida in figura il veicolo B deve svoltare a destra',
      farsiTranslation: 'معنی: In presenza delle خطوط راهنما در شکل il veicolo B deve پیچیدن به راست',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_16_6',
      italianText: 'In presenza delle strisce di guida in figura il veicolo A deve andare diritto',
      farsiTranslation: 'معنی: In presenza delle خطوط راهنما در شکل il veicolo A deve andare diritto',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_17_1',
      italianText: 'La striscia bianca trasversale in figura può essere abbinata ad un incrocio regolato da semaforo',
      farsiTranslation: 'معنی: La striscia bianca trasversale در شکل può essere abbinata ad un incrocio regolato da چراغ راهنمایی',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_17_2',
      italianText: 'La striscia bianca trasversale in figura può essere completata con la scritta STOP, dipinta sulla pavimentazione stradale',
      farsiTranslation: 'معنی: La striscia bianca trasversale در شکل può essere completata con la scritta ایست, dipinta sulla pavimentazione جادهle',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_17_3',
      italianText: 'La striscia bianca trasversale in figura indica il punto in cui i conducenti devono arrestarsi in presenza del segnale FER- MARSI E DARE PRECEDENZA (STOP)',
      farsiTranslation: 'معنی: La striscia bianca trasversale در شکل نشان می‌دهد il punto in cui i رانندگان devono arrestarsi in presenza del segnale FER- MARSI E DARE PRECEDENZA (ایست)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_17_4',
      italianText: 'La striscia bianca trasversale in figura indica il punto in cui i conducenti devono arrestarsi in presenza del semaforo a luce rossa',
      farsiTranslation: 'معنی: La striscia bianca trasversale در شکل نشان می‌دهد il punto in cui i رانندگان devono arrestarsi in presenza del چراغ راهنمایی a چراغ قرمز',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_17_5',
      italianText: 'Il segnale raffigurato è una striscia trasversale di arresto',
      farsiTranslation: 'معنی: علامت نشان‌داده‌شده è una خط عرضی di arresto',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_17_6',
      italianText: 'La striscia bianca trasversale in figura viene abbinata con il segnale di DARE PRECEDENZA',
      farsiTranslation: 'معنی: La striscia bianca trasversale در شکل viene abbinata con il segnale di DARE PRECEDENZA',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_17_7',
      italianText: 'La striscia bianca trasversale in figura indica un attraversamento pedonale non regolato',
      farsiTranslation: 'معنی: La striscia bianca trasversale در شکل نشان می‌دهد un گذرگاه عابر پیاده non regolato',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_17_8',
      italianText: 'La striscia bianca trasversale in figura indica un attraversamento ciclabile',
      farsiTranslation: 'معنی: La striscia bianca trasversale در شکل نشان می‌دهد un attraversamento ciclabile',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_17_9',
      italianText: 'La striscia bianca trasversale in figura non può mai essere superata',
      farsiTranslation: 'معنی: La striscia bianca trasversale در شکل non può mai essere superata',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_17_10',
      italianText: 'La striscia bianca trasversale in figura indica l’inizio del divieto di sosta',
      farsiTranslation: 'معنی: La striscia bianca trasversale در شکل نشان می‌دهد l’inizio del divieto di پارک / توقف طولانی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_18_1',
      italianText: 'La striscia trasversale continua in figura indica il punto in cui bisogna arrestarsi ad un incrocio, se regolato da semaforo a luce rossa (FIG 563)',
      farsiTranslation: 'معنی: La خط عرضی ممتد در شکل نشان می‌دهد il punto in cui bisogna arrestarsi ad un incrocio, se regolato da چراغ راهنمایی a چراغ قرمز (FIG 563)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_18_2',
      italianText: 'La striscia trasversale continua in figura indica il punto in cui dobbiamo sempre arrestarci ad un incrocio, se il vigile lo impone (FIG 568)',
      farsiTranslation: 'معنی: La خط عرضی ممتد در شکل نشان می‌دهد il punto in cui dobbiamo sempre arrestarci ad un incrocio, se il vigile lo impone (FIG 568)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_18_3',
      italianText: 'La striscia trasversale continua in figura indica il punto dove occorre arrestarsi (FIG 515)',
      farsiTranslation: 'معنی: La خط عرضی ممتد در شکل نشان می‌دهد il punto dove occorre arrestarsi (FIG 515)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_18_4',
      italianText: 'La striscia trasversale continua in figura indica il punto in cui dobbiamo arrestarci ad un incrocio, se non è regolato (FIG 563)',
      farsiTranslation: 'معنی: La خط عرضی ممتد در شکل نشان می‌دهد il punto in cui dobbiamo arrestarci ad un incrocio, se non è regolato (FIG 563)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_18_5',
      italianText: 'La striscia trasversale continua in figura indica il punto in cui bisogna sempre arrestarsi in vicinanza di un incrocio stradale',
      farsiTranslation: 'معنی: La خط عرضی ممتد در شکل نشان می‌دهد il punto in cui bisogna sempre arrestarsi in vicinanza di un incrocio جادهle',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_18_6',
      italianText: 'La striscia trasversale continua in figura indica che è obbligatorio dare la precedenza ai veicoli provenienti sia da destra sia da sinistra',
      farsiTranslation: 'معنی: La خط عرضی ممتد در شکل نشان می‌دهد che è مجبور می‌کندtorio dare la حق تقدم ai وسایل نقلیه provenienti sia da destra sia da sinistra',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_18_7',
      italianText: 'La striscia trasversale continua in figura si trova all’uscita di una proprietà privata',
      farsiTranslation: 'معنی: La خط عرضی ممتد در شکل si trova all’uscita di una proprietà privata',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_19_1',
      italianText: 'La segnaletica in figura indica, sia dentro che fuori dei centri abitati, un attraversamento pedonale',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد, sia dentro che fuori dei centri abitati, un گذرگاه عابر پیاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_19_2',
      italianText: 'La segnaletica in figura indica un attraversamento pedonale che può trovarsi anche nei piccoli centri abitati',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد un گذرگاه عابر پیاده che può trovarsi anche nei piccoli centri abitati',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_19_3',
      italianText: 'La segnaletica in figura indica un attraversamento pedonale',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد un گذرگاه عابر پیاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_19_4',
      italianText: 'La segnaletica in figura indica un attraversamento per pedoni',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد un attraversamento per عابران پیاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_19_5',
      italianText: 'La segnaletica in figura indica un attraversamento in cui i pedoni hanno la precedenza',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد un attraversamento in cui i عابران پیاده hanno la حق تقدم',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_19_6',
      italianText: 'La segnaletica in figura indica un’isola di traffico',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد un’isola di traffico',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_19_7',
      italianText: 'La segnaletica in figura indica un attraversamento per ciclisti',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد un attraversamento per ciclisti',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_19_8',
      italianText: 'La segnaletica in figura indica un attraversamento ciclabile',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد un attraversamento ciclabile',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_19_9',
      italianText: 'La segnaletica in figura indica un passo carrabile',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد un passo carrabile',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_20_1',
      italianText: 'La segnaletica in figura può essere completata con l’apposito segnale verticale di ATTRAVERSAMENTO PEDONALE',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده può essere completata con l’apposito segnale verticale di ATTRAVERSAMENTO PEDONALE',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_20_2',
      italianText: 'La segnaletica in figura obbliga i conducenti ad arrestarsi quando vi sono pedoni che attraversano la carreggiata',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده مجبور می‌کند i رانندگان ad arrestarsi quando vi sono عابران پیاده che attraversano la سواره‌رو',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_20_3',
      italianText: 'Un attraversamento pedonale può essere preceduto sulla destra da una striscia gialla a zig zag, come nella figura seguente (FIG 545)',
      farsiTranslation: 'معنی: Un گذرگاه عابر پیاده può essere preceduto sulla destra da una striscia gialla a zig zag, come nella figura seguente (FIG 545)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_20_4',
      italianText: 'La segnaletica in figura posta su strade extraurbane secondarie deve essere preceduta dal segnale di pericolo ATTRA- VERSAMENTO PEDONALE',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده posta su جاده‌ها extraurbane secondarie deve essere preceduta dal segnale di pericolo ATTRA- VERSAMENTO PEDONALE',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_20_5',
      italianText: 'La segnaletica in figura obbliga i conducenti a fermarsi e dare la precedenza ai pedoni che si accingono ad attraversare',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده مجبور می‌کند i رانندگان a fermarsi e dare la حق تقدم ai عابران پیاده che si accingono ad attraversare',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_20_6',
      italianText: 'La segnaletica in figura è un’isola di rifugio per pedoni e ciclisti',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده è un’isola di rifugio per عابران پیاده e ciclisti',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_20_7',
      italianText: 'La segnaletica in figura non consente ai veicoli di transitarci sopra',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده non اجازه می‌دهد ai وسایل نقلیه di transitarci sopra',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_20_8',
      italianText: 'La segnaletica in figura indica un’area riservata ai soli pedoni disabili',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد un’area riservata ai soli عابران پیاده disabili',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_20_9',
      italianText: 'La segnaletica in figura non consente il transito ai pedoni',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده non اجازه می‌دهد il transito ai عابران پیاده',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_21_1',
      italianText: 'Le frecce direzionali in figura si trovano all’interno delle corsie, prima di un incrocio',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل si trovano all’interno delle لاین‌ها, prima di un incrocio',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_21_2',
      italianText: 'Le frecce direzionali in figura indicano ai conducenti le direzioni consentite all’incrocio',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل نشان می‌دهدno ai رانندگان le direzioni consentite all’incrocio',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_21_3',
      italianText: 'Le frecce direzionali in figura consentono di immettersi nella corsia scelta quando le strisce sono ancora discontinue (tratteggiate)',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل consentono di immettersi nella لاین scelta quando le strisce sono ancora بریده‌بریده (tratteggiate)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_21_4',
      italianText: 'Le frecce direzionali in figura obbligano a seguire la direzione indicata se le strisce di corsia sono continue',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل مجبور می‌کندno a seguire la direzione نشان می‌دهدta se le strisce di لاین sono ممتد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_21_5',
      italianText: 'Le frecce direzionali in figura sono a freccia combinata diritta-destra per corsie destinate a chi deve proseguire diritto o a destra',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل sono a freccia combinata diritta-destra per لاین‌ها destinate a chi deve مستقیم رفتن o a destra',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_21_6',
      italianText: 'Le frecce direzionali in figura possono essere completate da scritte sulla pavimentazione che indicano la località raggiungibile',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل possono essere completate da scritte sulla pavimentazione che نشان می‌دهدno la località raggiungibile',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_21_7',
      italianText: 'Le frecce direzionali in figura segnalano le direzioni permesse',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل segnalano le direzioni permesse',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_21_8',
      italianText: 'Le frecce direzionali in figura obbligano a seguire la direzione indicata, anche se le strisce di corsia sono discontinue (tratteggiate)',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل مجبور می‌کندno a seguire la direzione نشان می‌دهدta, anche se le strisce di لاین sono بریده‌بریده (tratteggiate)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_21_9',
      italianText: 'Le frecce direzionali in figura indicano che si è vicino ad una corsia per la sosta d’emergenza',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل نشان می‌دهدno che si è vicino ad una لاین per la پارک / توقف طولانی d’emergenza',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_21_10',
      italianText: 'Le frecce direzionali in figura ci consentono di cambiare corsia se le strisce sono continue',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل ci consentono di cambiare لاین se le strisce sono ممتد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_21_11',
      italianText: 'Le frecce direzionali in figura sono di colore azzurro per indicare un parcheggio a pagamento',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل sono di colore azzurro per نشان می‌دهدre un parcheggio a pagamento',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_21_12',
      italianText: 'Le frecce direzionali in figura sono di colore giallo nelle strade dove è vietata la sosta',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل sono di colore giallo nelle جاده‌ها dove è ممنوع است la پارک / توقف طولانی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_21_13',
      italianText: 'Le frecce direzionali in figura sono di colore blu nelle autostrade',
      farsiTranslation: 'معنی: Le فلش‌های جهت‌نما در شکل sono di colore blu nelle autoجاده‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_22_1',
      italianText: 'Le corsie A, B e C rappresentate in figura non consentono al conducente di proseguire diritto',
      farsiTranslation: 'معنی: Le لاین‌ها A, B e C rappresentate در شکل non consentono al conducente di مستقیم رفتن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_22_2',
      italianText: 'La corsia A, rappresentata in figura, consente al conducente di svoltare solo a sinistra',
      farsiTranslation: 'معنی: La لاین A, rappresentata در شکل, اجازه می‌دهد al conducente di svoltare solo a sinistra',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_22_3',
      italianText: 'Con la segnaletica indicata in figura è consentito al conducente cambiare corsia dove le strisce di corsia sono ancora discontinue (tratteggiate)',
      farsiTranslation: 'معنی: Con la segnaletica نشان می‌دهدta در شکل è consentito al conducente cambiare لاین dove le strisce di لاین sono ancora بریده‌بریده (tratteggiate)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_22_4',
      italianText: 'Le corsie A, B e C rappresentate in figura sono a doppio senso di circolazione',
      farsiTranslation: 'معنی: Le لاین‌ها A, B e C rappresentate در شکل sono a دوطرفه di circolazione',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_22_5',
      italianText: 'Le corsie A, B e C rappresentate in figura consentono al conducente di andare in tutte le direzioni',
      farsiTranslation: 'معنی: Le لاین‌ها A, B e C rappresentate در شکل consentono al conducente di andare in tutte le direzioni',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_22_6',
      italianText: 'La corsia B rappresentata in figura consente al conducente di svoltare e di proseguire diritto',
      farsiTranslation: 'معنی: La لاین B rappresentata در شکل اجازه می‌دهد al conducente di svoltare e di مستقیم رفتن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_23_1',
      italianText: 'La corsia A rappresentata in figura consente al conducente solo di svoltare a sinistra',
      farsiTranslation: 'معنی: La لاین A rappresentata در شکل اجازه می‌دهد al conducente solo di پیچیدن به چپ',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_23_2',
      italianText: 'La corsia B rappresentata in figura consente al conducente di proseguire diritto e di svoltare a sinistra',
      farsiTranslation: 'معنی: La لاین B rappresentata در شکل اجازه می‌دهد al conducente di مستقیم رفتن e di پیچیدن به چپ',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_23_3',
      italianText: 'In presenza della segnaletica in figura, la corsia C è l’unica che consente di svoltare a destra',
      farsiTranslation: 'معنی: In presenza della segnaletica در شکل, la لاین C è l’unica che اجازه می‌دهد di پیچیدن به راست',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_23_4',
      italianText: 'In presenza della segnaletica in figura è consentito cambiare corsia fino a che le strisce sono ancora discontinue (trat- teggiate)',
      farsiTranslation: 'معنی: In presenza della segnaletica در شکل è consentito cambiare لاین fino a che le strisce sono ancora بریده‌بریده (trat- teggiate)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_23_5',
      italianText: 'Tutte e tre le corsie rappresentate in figura consentono al conducente di proseguire diritto',
      farsiTranslation: 'معنی: Tutte e tre le لاین‌ها rappresentate در شکل consentono al conducente di مستقیم رفتن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_23_6',
      italianText: 'In presenza della segnaletica in figura, la corsia A è l’unica che consente di svoltare a sinistra',
      farsiTranslation: 'معنی: In presenza della segnaletica در شکل, la لاین A è l’unica che اجازه می‌دهد di پیچیدن به چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_23_7',
      italianText: 'La corsia B rappresentata in figura consente al conducente solo di proseguire diritto',
      farsiTranslation: 'معنی: La لاین B rappresentata در شکل اجازه می‌دهد al conducente solo di مستقیم رفتن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_23_8',
      italianText: 'La corsia C rappresentata in figura consente al conducente solo la svolta a destra',
      farsiTranslation: 'معنی: La لاین C rappresentata در شکل اجازه می‌دهد al conducente solo la svolta a destra',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_24_1',
      italianText: 'Tutte e tre le corsie rappresentate in figura consentono al conducente di proseguire dritto',
      farsiTranslation: 'معنی: Tutte e tre le لاین‌ها rappresentate در شکل consentono al conducente di proseguire dritto',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_24_2',
      italianText: 'La corsia di sinistra rappresentata in figura consente al conducente di proseguire dritto o svoltare a sinistra',
      farsiTranslation: 'معنی: La لاین di sinistra rappresentata در شکل اجازه می‌دهد al conducente di proseguire dritto o پیچیدن به چپ',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_24_3',
      italianText: 'La corsia di mezzo rappresentata in figura consente al conducente solo di proseguire diritto',
      farsiTranslation: 'معنی: La لاین di mezzo rappresentata در شکل اجازه می‌دهد al conducente solo di مستقیم رفتن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_24_4',
      italianText: 'La corsia di destra rappresentata in figura consente al conducente di proseguire diritto o svoltare a destra',
      farsiTranslation: 'معنی: La لاین di destra rappresentata در شکل اجازه می‌دهد al conducente di مستقیم رفتن o پیچیدن به راست',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_24_5',
      italianText: 'È possibile cambiare corsia finché le strisce sono ancora discontinue (tratteggiate)',
      farsiTranslation: 'معنی: È possibile cambiare لاین finché le strisce sono ancora بریده‌بریده (tratteggiate)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_24_6',
      italianText: 'Il veicolo rappresentato in figura può svoltare a sinistra rimanendo nella stessa corsia',
      farsiTranslation: 'معنی: Il veicolo rappresentato در شکل può پیچیدن به چپ rimanendo nella stessa لاین',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_24_7',
      italianText: 'La corsia di sinistra rappresentata in figura consente al conducente solo di svoltare a sinistra',
      farsiTranslation: 'معنی: La لاین di sinistra rappresentata در شکل اجازه می‌دهد al conducente solo di پیچیدن به چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_24_8',
      italianText: 'La corsia di destra rappresentata in figura è riservata ai veicoli lenti',
      farsiTranslation: 'معنی: La لاین di destra rappresentata در شکل è riservata ai وسایل نقلیه lenti',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_24_9',
      italianText: 'La corsia di destra rappresentata in figura consente al conducente solo di svoltare a destra',
      farsiTranslation: 'معنی: La لاین di destra rappresentata در شکل اجازه می‌دهد al conducente solo di پیچیدن به راست',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_24_10',
      italianText: 'Con la segnaletica rappresentata in figura è consentito al conducente cambiare corsia anche superando la striscia continua',
      farsiTranslation: 'معنی: Con la segnaletica rappresentata در شکل è consentito al conducente cambiare لاین anche superando la striscia ممتد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_25_1',
      italianText: 'La segnaletica in figura indica una zona per la fermata degli autobus in servizio pubblico di linea',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد una zona per la توقف کوتاه degli اتوبوس in servizio pubblico di linea',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_25_2',
      italianText: 'La segnaletica in figura indica lo spazio per la fermata di autobus e filobus in servizio pubblico di linea',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد lo spazio per la توقف کوتاه di اتوبوس e اتوبوس برقی in servizio pubblico di linea',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_25_3',
      italianText: 'La striscia a zig zag della segnaletica in figura serve agli autobus per facilitare la manovra di accostamento e per ripartire',
      farsiTranslation: 'معنی: La striscia a zig zag della segnaletica در شکل به کار می‌رود agli اتوبوس per facilitare la manovra di accostamento e per ripartire',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_25_4',
      italianText: 'La segnaletica in figura vieta la sosta ma non la fermata anche nelle parti con striscia gialla a zig zag',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده vieta la پارک / توقف طولانی ma non la توقف کوتاه anche nelle parti con striscia gialla a zig zag',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_25_5',
      italianText: 'La segnaletica in figura indica lo spazio per la fermata di autosnodati in servizio pubblico di linea',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد lo spazio per la توقف کوتاه di autosnodati in servizio pubblico di linea',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_25_6',
      italianText: 'La segnaletica in figura indica lo spazio riservato alla sosta anche dei taxi',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده نشان می‌دهد lo spazio riservato alla پارک / توقف طولانی anche dei تاکسی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_25_7',
      italianText: 'La segnaletica in figura non consente alle autovetture di circolare all’interno dell’area segnata',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده non اجازه می‌دهد alle autovetture di circolare all’interno dell’area segnata',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_25_8',
      italianText: 'La segnaletica in figura non consente la sosta 20 metri prima della striscia gialla a zig zag',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده non اجازه می‌دهد la پارک / توقف طولانی 20 metri prima della striscia gialla a zig zag',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_25_9',
      italianText: 'La segnaletica in figura vieta agli autocarri di circolare all’interno dell’area segnata',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده vieta agli autocarri di circolare all’interno dell’area segnata',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_25_10',
      italianText: 'La segnaletica in figura può anche essere realizzata con strisce di colore bianco',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده può anche essere realizzata con strisce di colore bianco',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_25_11',
      italianText: 'La segnaletica in figura consente la sosta delle autovetture dalle ore 20.00 alle ore 8.00',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده اجازه می‌دهد la پارک / توقف طولانی delle autovetture dalle ore 20.00 alle ore 8.00',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_26_1',
      italianText: 'La segnaletica rappresentata in figura si trova vicino ad un passaggio a livello',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده si trova vicino ad un گذرگاه راه‌آهن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_26_2',
      italianText: 'La segnaletica rappresentata in figura serve ad avvertire i conducenti che si è vicini ad un passaggio a livello senza barriere',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده به کار می‌رود ad avvertire i رانندگان che si è vicini ad un گذرگاه راه‌آهن senza barriere',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_26_3',
      italianText: 'La segnaletica rappresentata in figura serve ad avvertire i conducenti che si è vicini ad un passaggio a livello con barriere',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده به کار می‌رود ad avvertire i رانندگان che si è vicini ad un گذرگاه راه‌آهن con barriere',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_26_4',
      italianText: 'In presenza della segnaletica rappresentata in figura non è consentito spostarsi nella parte sinistra della carreggiata',
      farsiTranslation: 'معنی: In presenza della segnaletica rappresentata در شکل non è consentito spostarsi nella parte sinistra della سواره‌رو',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_26_5',
      italianText: 'In presenza della segnaletica rappresentata in figura i conducenti devono prestare attenzione all’eventuale sopraggiun- gere di treni',
      farsiTranslation: 'معنی: In presenza della segnaletica rappresentata در شکل i رانندگان devono prestare attenzione all’eventuale sopraggiun- gere di treni',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_26_6',
      italianText: 'La segnaletica rappresentata in figura serve ad indicare che a 150 metri vi è un attraversamento tranviario molto pericoloso',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده به کار می‌رود ad نشان می‌دهدre che a 150 metri vi è un attraversamento tranviario molto pericoloso',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_26_7',
      italianText: 'La segnaletica rappresentata in figura si trova solo in vicinanza di passaggi a livello con barriere',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده si trova solo in vicinanza di passaggi a livello con barriere',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_26_8',
      italianText: 'La segnaletica rappresentata in figura segnala la vicinanza di un incrocio regolato da Polizia locale',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده segnala la vicinanza di un incrocio regolato da Polizia locale',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_26_9',
      italianText: 'La segnaletica rappresentata in figura delimita un parcheggio di autobus in servizio pubblico di linea',
      farsiTranslation: 'معنی: خط‌کشی نشان‌داده‌شده محدود/مشخص می‌کند un parcheggio di اتوبوس in servizio pubblico di linea',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_27_1',
      italianText: 'I segni gialli e neri in figura dipinti sul bordo del marciapiede indicano un divieto di sosta',
      farsiTranslation: 'معنی: I segni gialli e neri در شکل dipinti sul لبه del پیاده‌رو نشان می‌دهدno un divieto di پارک / توقف طولانی',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_27_2',
      italianText: 'I segni gialli e neri in figura sono posti lungo la parte verticale del marciapiede',
      farsiTranslation: 'معنی: I segni gialli e neri در شکل sono posti lungo la parte verticale del پیاده‌رو',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_27_3',
      italianText: 'I segni gialli e neri in figura dipinti sul bordo del marciapiede indicano che su quel lato della strada non è possibile sostare',
      farsiTranslation: 'معنی: I segni gialli e neri در شکل dipinti sul لبه del پیاده‌رو نشان می‌دهدno che su quel lato della جاده non è possibile پارک / توقف طولانیre',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_27_4',
      italianText: 'I segni gialli e neri in figura dipinti sul bordo del marciapiede consentono la fermata',
      farsiTranslation: 'معنی: I segni gialli e neri در شکل dipinti sul لبه del پیاده‌رو consentono la توقف کوتاه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_27_5',
      italianText: 'I segni gialli e neri in figura dipinti sul bordo del marciapiede indicano che la sosta è consentita solo agli autobus',
      farsiTranslation: 'معنی: I segni gialli e neri در شکل dipinti sul لبه del پیاده‌رو نشان می‌دهدno che la پارک / توقف طولانی è consentita solo agli اتوبوس',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_27_6',
      italianText: 'I segni gialli e neri in figura dipinti sul bordo del marciapiede segnalano un ostacolo al centro della carreggiata',
      farsiTranslation: 'معنی: I segni gialli e neri در شکل dipinti sul لبه del پیاده‌رو segnalano un ostacolo al centro della سواره‌رو',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_27_7',
      italianText: 'I segni gialli e neri in figura dipinti sul bordo del marciapiede avvertono i pedoni di fare attenzione al gradino',
      farsiTranslation: 'معنی: I segni gialli e neri در شکل dipinti sul لبه del پیاده‌رو avvertono i عابران پیاده di fare attenzione al gradino',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_27_8',
      italianText: 'I segni gialli e neri in figura dipinti sul bordo del marciapiede indicano che è vietata anche la fermata',
      farsiTranslation: 'معنی: I segni gialli e neri در شکل dipinti sul لبه del پیاده‌رو نشان می‌دهدno che è ممنوع است anche la توقف کوتاه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_28_1',
      italianText: 'Il bordo del marciapiede come dipinto in figura vieta la sosta anche ai taxi',
      farsiTranslation: 'معنی: Il لبه del پیاده‌رو come dipinto در شکل vieta la پارک / توقف طولانی anche ai تاکسی',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_28_2',
      italianText: 'Il bordo del marciapiede dipinto come in figura indica che nessun veicolo può sostare',
      farsiTranslation: 'معنی: Il لبه del پیاده‌رو dipinto come در شکل نشان می‌دهد che nessun veicolo può پارک / توقف طولانیre',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_28_3',
      italianText: 'Il bordo del marciapiede dipinto come in figura indica che non si può sostare lungo quel tratto',
      farsiTranslation: 'معنی: Il لبه del پیاده‌رو dipinto come در شکل نشان می‌دهد che non si può پارک / توقف طولانیre lungo quel tratto',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_28_4',
      italianText: 'Il bordo del marciapiede dipinto come in figura indica che la sosta è consentita solo a pagamento',
      farsiTranslation: 'معنی: Il لبه del پیاده‌رو dipinto come در شکل نشان می‌دهد che la پارک / توقف طولانی è consentita solo a pagamento',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_28_5',
      italianText: 'Il bordo del marciapiede dipinto come in figura indica che la sosta è consentita solo per un’ora',
      farsiTranslation: 'معنی: Il لبه del پیاده‌رو dipinto come در شکل نشان می‌دهد che la پارک / توقف طولانی è consentita solo per un’ora',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_28_6',
      italianText: 'Il bordo del marciapiede dipinto come in figura indica la presenza di lavori in corso',
      farsiTranslation: 'معنی: Il لبه del پیاده‌رو dipinto come در شکل نشان می‌دهد la presenza di lavori in corso',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_28_7',
      italianText: 'Il bordo del marciapiede dipinto come in figura indica una strada con diritto di precedenza',
      farsiTranslation: 'معنی: Il لبه del پیاده‌رو dipinto come در شکل نشان می‌دهد una جاده con diritto di حق تقدم',
      correctAnswer: 'Falso'
    }
  ]
};
