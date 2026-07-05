import { Chapter } from '../../types';

export const chapter13: Chapter = {
  id: 13,
  title: 'Posizione sulla Carreggiata, Cambio di Corsia e Direzione, Svolta e Incroci',
  farsiTitle: 'موقعیت در سواره‌رو، تغییر لاین و جهت، پیچیدن و تقاطع‌ها',
  lessons: [
    {
      id: 'topic_13_1',
      title: '13.1 Posizione dei veicoli sulla carreggiata',
      italianText: `Sulla carreggiata si circola normalmente nella parte destra e il piu possibile vicino al margine destro. Questo vale soprattutto quando la strada e a doppio senso, quando si incrociano altri veicoli, in curva, sui dossi o nei restringimenti.`,
      farsiTranslation: `در سواره رو معمولا باید در قسمت راست حرکت کرد و تا حد امکان نزدیک حاشیه راست بود. این موضوع مخصوصا در راه دوطرفه، هنگام روبه رو شدن با وسیله دیگر، در پیچ، روی سربالایی های کوتاه و جاهای باریک مهم است.`,
      vocabularyIds: [
        'veicoli', 'destra', 'carreggiata', 'corsie', 'file_parallele', 'traffico', 'incrocio', 'agente'
      ],
      questionIds: Array.from({ length: 13 }, (_, i) => `q_13_1_${i + 1}`)
    },
    {
      id: 'topic_13_2',
      title: '13.2 Carreggiata: uso corsie e comportamento',
      italianText: `Le corsie vanno usate secondo il senso di marcia e la segnaletica. In una carreggiata a doppio senso con tre corsie, la corsia centrale puo essere usata per il sorpasso dai veicoli dei due sensi, solo quando la manovra e sicura.`,
      farsiTranslation: `لاین ها باید طبق جهت حرکت و تابلوها استفاده شوند. در یک سواره رو دوطرفه با سه لاین، لاین وسط فقط برای سبقت و فقط وقتی مانور امن است می تواند توسط خودروهای هر دو جهت استفاده شود.`,
      vocabularyIds: [
        'veicoli', 'destra', 'carreggiata', 'corsie', 'file_parallele', 'traffico', 'incrocio', 'agente'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_13_2_${i + 1}`)
    },
    {
      id: 'topic_13_3',
      title: '13.3 Carreggiata: uso corsie e comportamento',
      italianText: `Gli ostacoli sulla carreggiata, come isole di traffico o salvagente, si superano restando nella propria meta della strada. I binari del tram si possono usare solo se sono a raso e se non si intralcia la marcia del tram.`,
      farsiTranslation: `مانع های داخل سواره رو، مثل جزیره ترافیکی یا پناهگاه عابر، باید طوری رد شوند که در نیمه درست مسیر خود بمانیم. روی ریل ترام فقط وقتی می شود رفت که هم سطح راه باشد و مزاحم حرکت ترام نشویم.`,
      vocabularyIds: [
        'veicoli', 'destra', 'carreggiata', 'corsie', 'file_parallele', 'traffico', 'incrocio', 'agente'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_13_3_${i + 1}`)
    },
    {
      id: 'topic_13_4',
      title: '13.4 Carreggiata: uso corsie e comportamento',
      italianText: `La corsia di destra serve di norma per la marcia normale. Le corsie piu interne o di sinistra si usano quando e consentito, per esempio per il sorpasso, per scegliere la direzione corretta o quando la circolazione e organizzata in file parallele.`,
      farsiTranslation: `لاین راست معمولا برای حرکت عادی است. لاین های داخلی تر یا چپ فقط وقتی استفاده می شوند که مجاز باشد، مثلا برای سبقت، انتخاب مسیر درست یا وقتی حرکت در صف های موازی برقرار است.`,
      vocabularyIds: [
        'veicoli', 'destra', 'carreggiata', 'corsie', 'file_parallele', 'traffico', 'incrocio', 'agente'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_13_4_${i + 1}`)
    },
    {
      id: 'topic_13_5',
      title: '13.5 Posizione dei veicoli sulla carreggiata - Uso delle carreggiate - Circolazione per file parallele',
      italianText: `La marcia per file parallele e ammessa solo in casi precisi: traffico intenso su carreggiate con piu corsie, avvicinamento a incroci regolati, o ordine degli agenti. Non basta che la strada sia larga o che la visibilita sia buona.`,
      farsiTranslation: `حرکت در صف های موازی فقط در موارد مشخص مجاز است: ترافیک سنگین در سواره روهای چند لاینه، نزدیک شدن به تقاطع کنترل شده، یا دستور مامور. پهن بودن راه یا خوب بودن دید به تنهایی کافی نیست.`,
      vocabularyIds: [
        'veicoli', 'destra', 'carreggiata', 'corsie', 'file_parallele', 'traffico', 'incrocio', 'agente'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_13_5_${i + 1}`)
    },
    {
      id: 'topic_13_6',
      title: '13.6 Posizione dei veicoli sulla carreggiata - Uso delle corsie - Sosta sulle strade extraurbane principali',
      italianText: `Sulle strade extraurbane principali bisogna usare le corsie con ordine, tenendo la destra quando possibile e lasciando libere le corsie non necessarie. La sosta e la fermata non si fanno sulla carreggiata, salvo casi consentiti o di emergenza.`,
      farsiTranslation: `در راه های برون شهری اصلی باید لاین ها را منظم استفاده کرد، وقتی ممکن است سمت راست ماند و لاین های غیرضروری را اشغال نکرد. توقف و پارک روی سواره رو انجام نمی شود، مگر در موارد مجاز یا اضطراری.`,
      vocabularyIds: [
        'veicoli', 'destra', 'carreggiata', 'corsie', 'file_parallele', 'traffico', 'incrocio', 'agente'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_13_6_${i + 1}`)
    },
    {
      id: 'topic_13_7',
      title: '13.7 Marcia per file parallele - Svolta a sinistra',
      italianText: `Quando e ammessa la marcia per file parallele, il conducente deve comunque prepararsi per tempo alla direzione scelta. Per svoltare a sinistra deve controllare dietro, segnalare e portarsi nella posizione corretta senza tagliare la strada agli altri.`,
      farsiTranslation: `حتی وقتی حرکت در صف های موازی مجاز است، راننده باید به موقع برای مسیر انتخابی آماده شود. برای پیچیدن به چپ باید عقب را کنترل کند، راهنما بزند و بدون بریدن مسیر دیگران در جای درست قرار بگیرد.`,
      vocabularyIds: [
        'svolta_sinistra', 'specchio_retrovisore', 'segnalare', 'asse_carreggiata', 'doppio_senso', 'dare_precedenza', 'di_fronte'
      ],
      questionIds: Array.from({ length: 16 }, (_, i) => `q_13_7_${i + 1}`)
    },
    {
      id: 'topic_13_8',
      title: '13.8 Cambio di corsia',
      italianText: `Per cambiare corsia bisogna prima controllare specchi e angoli ciechi, verificare che la corsia sia libera davanti e dietro, poi segnalare con anticipo. La manovra non deve creare pericolo o intralcio.`,
      farsiTranslation: `برای عوض کردن لاین باید اول آینه ها و نقطه کور را کنترل کرد، مطمئن شد لاین جلو و عقب آزاد است، بعد به موقع راهنما زد. این مانور نباید خطر یا مزاحمت ایجاد کند.`,
      vocabularyIds: [
        'cambiare_corsia', 'cambio_direzione', 'pericolo', 'intralcio', 'controllare', 'indicatori_direzione', 'strisce_corsia'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_13_8_${i + 1}`)
    },
    {
      id: 'topic_13_9',
      title: '13.9 Cambio di corsia',
      italianText: `Il cambio di corsia e consentito solo se la striscia di corsia lo permette e se c'e spazio sufficiente. Non si deve obbligare chi e gia nella corsia di arrivo a frenare, sterzare o cambiare velocita bruscamente.`,
      farsiTranslation: `تغییر لاین فقط وقتی مجاز است که خط لاین اجازه دهد و فضای کافی وجود داشته باشد. نباید کسی را که از قبل در لاین مقصد است مجبور به ترمز، تغییر مسیر یا تغییر سرعت ناگهانی کنیم.`,
      vocabularyIds: [
        'cambiare_corsia', 'cambio_direzione', 'pericolo', 'intralcio', 'controllare', 'indicatori_direzione', 'strisce_corsia'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_13_9_${i + 1}`)
    },
    {
      id: 'topic_13_10',
      title: '13.10 Svolta a destra',
      italianText: `La svolta a destra si effettua rallentando, segnalando per tempo e tenendosi vicino al margine destro. Entrando nella nuova strada bisogna lasciare il centro dell'incrocio a sinistra e dare precedenza ai pedoni che attraversano.`,
      farsiTranslation: `پیچیدن به راست با کم کردن سرعت، راهنما زدن به موقع و نزدیک ماندن به حاشیه راست انجام می شود. هنگام ورود به راه جدید باید مرکز تقاطع را در سمت چپ خود گذاشت و به عابران حق تقدم داد.`,
      vocabularyIds: [
        'svolta_destra', 'moderare', 'velocita', 'margine_destro', 'dare_precedenza', 'pedoni'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_13_10_${i + 1}`)
    },
    {
      id: 'topic_13_11',
      title: '13.11 Svolta a sinistra su strada a doppio senso',
      italianText: `Per svoltare a sinistra su strada a doppio senso bisogna controllare che nessuno stia sorpassando, segnalare e avvicinarsi all'asse della carreggiata. Si da precedenza ai veicoli di fronte, a quelli da destra e ai pedoni.`,
      farsiTranslation: `برای پیچیدن به چپ در راه دوطرفه باید کنترل کرد که کسی در حال سبقت نباشد، راهنما زد و به محور وسط سواره رو نزدیک شد. باید به خودروهای روبه رو، سمت راست و عابران حق تقدم داد.`,
      vocabularyIds: [
        'svolta_sinistra', 'specchio_retrovisore', 'segnalare', 'asse_carreggiata', 'doppio_senso', 'dare_precedenza', 'di_fronte'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_13_11_${i + 1}`)
    },
    {
      id: 'topic_13_12',
      title: '13.12 Cambio di direzione - Svolta a sinistra - Inversione di marcia',
      italianText: `Cambio di direzione, svolta a sinistra e inversione richiedono controllo, segnalazione e posizione corretta sulla carreggiata. L'inversione di marcia non va confusa con la svolta: e vietata vicino o dentro gli incroci e quando non e sicura.`,
      farsiTranslation: `تغییر جهت، پیچیدن به چپ و دور زدن همگی نیاز به کنترل، راهنما و جای گیری درست در سواره رو دارند. دور زدن با پیچیدن فرق دارد: نزدیک یا داخل تقاطع و هرجا امن نباشد ممنوع است.`,
      vocabularyIds: [
        'cambiare_corsia', 'cambio_direzione', 'pericolo', 'intralcio', 'controllare', 'indicatori_direzione', 'strisce_corsia'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_13_12_${i + 1}`)
    },
    {
      id: 'topic_13_13',
      title: '13.13 Svolta a sinistra su strada a doppio senso',
      italianText: `Nella svolta a sinistra bisogna seguire la traiettoria corretta per non invadere il senso opposto. Se l'incrocio ha circolazione rotatoria si passa lasciando il centro a sinistra; negli altri casi si lascia normalmente il centro a destra.`,
      farsiTranslation: `در پیچیدن به چپ باید مسیر درست را گرفت تا وارد جهت مخالف نشویم. اگر تقاطع حالت گردشی داشته باشد مرکز را سمت چپ خود می گذاریم؛ در حالت عادی مرکز تقاطع معمولا سمت راست ما می ماند.`,
      vocabularyIds: [
        'svolta_sinistra', 'specchio_retrovisore', 'segnalare', 'asse_carreggiata', 'doppio_senso', 'dare_precedenza', 'di_fronte'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_13_13_${i + 1}`)
    },
    {
      id: 'topic_13_14',
      title: '13.14 Inversione di marcia',
      italianText: `L'inversione di marcia e vietata in prossimita e in corrispondenza degli incroci, sulle curve, sui dossi e dove la visibilita non basta. Prima di farla bisogna essere certi di non creare pericolo o intralcio.`,
      farsiTranslation: `دور زدن نزدیک و داخل تقاطع، در پیچ، روی سربالایی کوتاه و هرجا دید کافی نیست ممنوع است. قبل از انجام آن باید مطمئن بود که خطر یا مزاحمت برای دیگران ایجاد نمی شود.`,
      vocabularyIds: [
        'inversione_marcia', 'incrocio', 'vietato', 'pericolo', 'intralcio', 'visibilita', 'sicurezza'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_13_14_${i + 1}`)
    },
    {
      id: 'topic_13_15',
      title: '13.15 Inversione di marcia',
      italianText: `Quando l'inversione e consentita, si esegue solo con spazio sufficiente, velocita molto bassa e controllo continuo della strada. Linee continue, segnali di divieto, traffico vicino o scarsa visibilita impediscono la manovra.`,
      farsiTranslation: `وقتی دور زدن مجاز است، فقط با فضای کافی، سرعت خیلی کم و کنترل مداوم راه انجام می شود. خط ممتد، تابلوی ممنوعیت، ترافیک نزدیک یا دید کم مانع انجام این مانور هستند.`,
      vocabularyIds: [
        'inversione_marcia', 'incrocio', 'vietato', 'pericolo', 'intralcio', 'visibilita', 'sicurezza'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_13_15_${i + 1}`)
    },
    {
      id: 'topic_13_16',
      title: '13.16 Comportamento avvicinandosi ad un incrocio',
      italianText: `Avvicinandosi a un incrocio bisogna moderare la velocita, osservare la segnaletica e mettersi per tempo nella corsia adatta alla direzione scelta. Non si deve impegnare l'incrocio se non e possibile liberarlo.`,
      farsiTranslation: `نزدیک تقاطع باید سرعت را کم کرد، تابلوها و علائم را دید و به موقع در لاین مناسب مسیر انتخابی قرار گرفت. اگر امکان خالی کردن تقاطع وجود ندارد نباید وارد آن شد.`,
      vocabularyIds: [
        'incrocio', 'moderare', 'velocita', 'corsia', 'impegnare_incrocio', 'precedenza', 'cortei', 'convogli'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_13_16_${i + 1}`)
    },
    {
      id: 'topic_13_17',
      title: '13.17 Comportamento agli incroci',
      italianText: `Agli incroci sono vietati comportamenti pericolosi come procedere a zig zag, cambiare direzione all'improvviso, sorpassare invadendo la corsia opposta o fermarsi e sostare dove non consentito.`,
      farsiTranslation: `در تقاطع ها رفتارهای خطرناک ممنوع است، مثل زیگزاگ رفتن، تغییر جهت ناگهانی، سبقت گرفتن با ورود به لاین مخالف یا توقف و پارک در جایی که مجاز نیست.`,
      vocabularyIds: [
        'incrocio', 'moderare', 'velocita', 'corsia', 'impegnare_incrocio', 'precedenza', 'cortei', 'convogli'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_13_17_${i + 1}`)
    },
    {
      id: 'topic_13_18',
      title: '13.18 Comportamento ad un incrocio - Comportamento all’uscita da una proprietà privata',
      italianText: `Uscendo da una proprieta privata, da un passo carrabile o da un garage bisogna procedere lentamente e con prudenza. Si deve dare precedenza ai pedoni e ai veicoli che gia circolano sulla strada.`,
      farsiTranslation: `هنگام خروج از ملک خصوصی، ورودی پارکینگ یا گاراژ باید آهسته و با احتیاط حرکت کرد. باید به عابران و وسایلی که از قبل در خیابان در حال حرکت هستند حق تقدم داد.`,
      vocabularyIds: [
        'incrocio', 'moderare', 'velocita', 'corsia', 'impegnare_incrocio', 'precedenza', 'cortei', 'convogli'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_13_18_${i + 1}`)
    },
    {
      id: 'topic_13_19',
      title: '13.19 Svolta a destra (di un autotreno)',
      italianText: `Un autotreno che svolta a destra in una strada stretta puo allargarsi verso sinistra e rallentare molto. I veicoli che seguono devono mantenere distanza, non sorpassarlo durante la manovra e lasciargli lo spazio necessario.`,
      farsiTranslation: `کامیون یدک دار هنگام پیچیدن به راست در راه باریک ممکن است به سمت چپ باز کند و خیلی کند شود. خودروهای پشت سر باید فاصله بگیرند، هنگام مانور سبقت نگیرند و فضای لازم را بدهند.`,
      vocabularyIds: [
        'svolta_destra', 'moderare', 'velocita', 'margine_destro', 'dare_precedenza', 'pedoni'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_13_19_${i + 1}`)
    },
    {
      id: 'topic_13_20',
      title: '13.20 Incrocio con circolazione rotatoria - Incrocio malagevole - Striscia di arresto con ‘Dare Precedenza’',
      italianText: `Nelle rotatorie la precedenza dipende dalla segnaletica: spesso chi entra deve dare precedenza a chi e gia nell'anello. Agli incroci difficili si rallenta; con il segnale Dare Precedenza ci si ferma solo se necessario, presso la linea dei triangoli.`,
      farsiTranslation: `در میدان ها حق تقدم به علائم بستگی دارد: اغلب کسی که وارد می شود باید به وسیله ای که داخل حلقه است حق تقدم بدهد. در تقاطع دشوار سرعت کم می شود؛ با تابلوی حق تقدم فقط اگر لازم باشد کنار خط مثلث ها می ایستیم.`,
      vocabularyIds: [
        'incrocio', 'moderare', 'velocita', 'corsia', 'impegnare_incrocio', 'precedenza', 'cortei', 'convogli'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_13_20_${i + 1}`)
    },
    {
      id: 'topic_13_21',
      title: '13.21 Incrocio malagevole - Comportamento con segnale ‘DARE PRECEDENZA’, ‘STOP’ o semaforo',
      italianText: `Negli incroci regolati da Dare Precedenza, STOP o semaforo bisogna seguire la gerarchia dei segnali. Con STOP ci si arresta sempre; con Dare Precedenza si rallenta e si cede il passo; con il semaforo si rispetta la luce mostrata.`,
      farsiTranslation: `در تقاطع های دارای تابلوی حق تقدم، ایست یا چراغ راهنمایی باید ترتیب علائم را رعایت کرد. با ایست همیشه باید توقف کرد؛ با حق تقدم باید سرعت کم کرد و راه داد؛ با چراغ باید طبق رنگ چراغ عمل کرد.`,
      vocabularyIds: [
        'incrocio', 'moderare', 'velocita', 'corsia', 'impegnare_incrocio', 'precedenza', 'cortei', 'convogli'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_13_21_${i + 1}`)
    }
  ],
  questions: [
    {
      id: 'q_13_1_1',
      italianText: 'Chi conduce gli animali li deve tenere il più possibile vicino al margine destro della carreggiata',
      farsiTranslation: 'معنی: کسی که حیوانات را هدایت می‌کند باید آن‌ها را نگه دارد تا حد امکان نزدیک حاشیه راست سواره‌رو',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_1_2',
      italianText: 'Su strade a doppio senso di marcia con due corsie, come in figura, incrociando altri veicoli occorre spostarsi il più vicino possibile al margine destro della carreggiata (FIG 502)',
      farsiTranslation: 'معنی: در راه‌های دوطرفه با دو لاین، مانند شکل, تقاطع‌ها وسایل نقلیه لازم است جابه‌جا شوند نزدیک به حاشیه راست سواره‌رو(شکل 502)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_1_3',
      italianText: 'In una carreggiata a doppio senso di marcia con due corsie, come in figura, i veicoli devono circolare nella corsia di destra, impegnando quella di sinistra solo per il sorpasso (FIG 502)',
      farsiTranslation: 'معنی: در سواره‌روی دوطرفه با دو لاین، مانند شکل, وسایل نقلیه باید حرکت کنند لاین راست, آن چپ برای سبقت(شکل 502)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_1_4',
      italianText: 'Su strada a doppio senso di marcia con due corsie, come in figura, i veicoli che percorrono il tratto in salita di un dosso devono tenersi il più possibile vicino al margine destro della carreggiata (FIG 536)',
      farsiTranslation: 'معنی: در راه دوطرفه با دو لاین، مانند شکل, وسایل نقلیه طی می‌کنند بخش سربالایی یک برآمدگی باید خود را نگه دارند تا حد امکان نزدیک حاشیه راست سواره‌رو(شکل 536)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_1_5',
      italianText: 'Su strada a senso unico i veicoli che percorrono una curva a sinistra devono tenersi in prossimità del margine sinistro della carreggiata',
      farsiTranslation: 'معنی: راه یک‌طرفه وسایل نقلیه طی می‌کنند یک پیچ به چپ باید خود را نگه دارند نزدیک حاشیه چپ سواره‌رو',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_1_6',
      italianText: 'Su strada a due carreggiate separate, come in figura, i veicoli che percorrono un dosso devono tenersi vicino al margine sinistro della carreggiata (FIG 558)',
      farsiTranslation: 'معنی: راه دو سواره‌روهای جدا, مانند شکل, وسایل نقلیه طی می‌کنند یک برآمدگی باید خود را نگه دارند نزدیک حاشیه چپ سواره‌رو(شکل 558)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_1_7',
      italianText: 'I veicoli che percorrono una curva, su strada a due corsie per ogni senso di marcia, come in figura, possono marciare oltrepas- sando la striscia discontinua se la strada è libera (FIG 550)',
      farsiTranslation: 'معنی: وسایل نقلیه طی می‌کنند یک پیچ, در راهی با دو لاین برای هر جهت حرکت، مانند شکل, می‌توانند حرکت کنند با عبور از خط منقطع اگر راه آزاد است(شکل 550)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_1_8',
      italianText: 'I veicoli che vogliono effettuare una svolta a sinistra devono tenersi il più possibile vicino al margine destro della carreggiata',
      farsiTranslation: 'معنی: وسایل نقلیه‌ای که می‌خواهند به چپ گردش کنند باید خود را نگه دارند تا حد امکان نزدیک حاشیه راست سواره‌رو',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_1_9',
      italianText: 'I filobus devono, di norma, circolare il più possibile vicino al margine sinistro della carreggiata',
      farsiTranslation: 'معنی: I اتوبوس‌های برقی معمولاً باید حرکت کنند نزدیک حاشیه چپ سواره‌رو',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_1_10',
      italianText: 'Su strade a 2 corsie per senso di marcia, in caso di intenso traffico i ciclomotori a due ruote possono circolare sulla corsia di sinistra (FIG 550)',
      farsiTranslation: 'معنی: در راه‌هایی با دو لاین برای هر جهت حرکت, در موتورسیکلت‌های سبک دوچرخ می‌توانند حرکت کنند لاین چپ(شکل 550)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_1_11',
      italianText: 'Su strade a 2 corsie per senso di marcia, in caso di intenso traffico i ciclomotori possono circolare sulla corsia di sinistra (FIG 550)',
      farsiTranslation: 'معنی: در راه‌هایی با دو لاین برای هر جهت حرکت, در موتورسیکلت‌های سبک می‌توانند حرکت کنند لاین چپ(شکل 550)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_1_12',
      italianText: 'In una carreggiata come in figura in caso di intenso traffico, ciclomotori e motocicli possono circolare sulla pista ciclabile se non superano la velocità di 20 km/h (FIG 511)',
      farsiTranslation: 'معنی: در سواره‌روی نشان داده شده در شکل در, موتورسیکلت‌های سبک و موتورسیکلت‌ها می‌توانند حرکت کنند اگر نه سرعت ۲۰ کیلومتر بر ساعت(شکل 511)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_1_13',
      italianText: 'In caso di traffico intenso, i motocicli possono circolare sulle corsie di emergenza',
      farsiTranslation: 'معنی: در صورت ترافیک سنگین, موتورسیکلت‌ها می‌توانند حرکت کنند روی لاین‌های اضطراری',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_2_1',
      italianText: 'In una carreggiata del tipo rappresentato si può sorpassare anche in curva',
      farsiTranslation: 'معنی: در سواره‌روی از نوع نشان داده شده می‌تواند سبقت بگیرند همچنین در پیچ',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_2_2',
      italianText: 'La carreggiata del tipo rappresentato è a doppio senso di circolazione',
      farsiTranslation: 'معنی: سواره‌روی از نوع نشان داده شده تردد دوطرفه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_2_3',
      italianText: 'In una carreggiata extraurbana del tipo rappresentato le corsie interne sono, di norma, riservate al sorpasso',
      farsiTranslation: 'معنی: در سواره‌روی برون‌شهری از نوع نشان داده شده لاین‌ها داخلی هستند, معمولاً, ویژه سبقت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_2_4',
      italianText: 'In una carreggiata del tipo rappresentato non si può effettuare l’inversione di marcia',
      farsiTranslation: 'معنی: در سواره‌روی از نوع نشان داده شده نه می‌تواند انجام دهند ’دور زدن و تغییر جهت کامل',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_2_5',
      italianText: 'In una carreggiata extraurbana del tipo rappresentato si può sorpassare indifferentemente sia da destra che da sinistra',
      farsiTranslation: 'معنی: در سواره‌روی برون‌شهری از نوع نشان داده شده می‌تواند سبقت بگیرند بدون تفاوت به راست به چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_2_6',
      italianText: 'In una carreggiata extraurbana del tipo rappresentato si può sempre marciare per file parallele',
      farsiTranslation: 'معنی: در سواره‌روی برون‌شهری از نوع نشان داده شده می‌تواند همیشه در صف‌های موازی حرکت کرد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_2_7',
      italianText: 'In una carreggiata del tipo rappresentato possiamo iniziare un sorpasso anche se il conducente che sta dietro ha già iniziato la stessa manovra',
      farsiTranslation: 'معنی: در سواره‌روی از نوع نشان داده شده می‌توانیم شروع کنیم یک سبقت همچنین اگر راننده پشت سر است قبلاً شروع کرده است مانور',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_3_1',
      italianText: 'Nella strada rappresentata, per ogni senso di marcia, la corsia di destra è, di norma, dedicata alla marcia ordinaria',
      farsiTranslation: 'معنی: در راه نشان داده شده, برای هر جهت حرکت, لاین راست, معمولاً, اختصاص دارد به حرکت عادی',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_3_2',
      italianText: 'La strada rappresentata è composta da tre corsie per ogni senso di marcia',
      farsiTranslation: 'معنی: راه نشان داده شده تشکیل شده از سه لاین‌ها برای هر جهت حرکت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_3_3',
      italianText: 'Nella strada rappresentata, per ogni senso di marcia, le corsie di centro e di sinistra sono dedicate, di norma, al sorpasso',
      farsiTranslation: 'معنی: در راه نشان داده شده, برای هر جهت حرکت, لاین‌ها مرکز و چپ هستند, معمولاً, به سبقت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_3_4',
      italianText: 'La strada rappresentata è composta da una carreggiata',
      farsiTranslation: 'معنی: راه نشان داده شده تشکیل شده از یک سواره‌رو',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_3_5',
      italianText: 'Nella strada rappresentata, per ogni senso di marcia, la corsia di centro è dedicata, di norma, alla marcia ordinaria',
      farsiTranslation: 'معنی: در راه نشان داده شده, برای هر جهت حرکت, لاین مرکز, معمولاً, حرکت عادی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_3_6',
      italianText: 'Nella strada rappresentata, per ogni senso di marcia, la corsia di destra è dedicata, di norma, al sorpasso',
      farsiTranslation: 'معنی: در راه نشان داده شده, برای هر جهت حرکت, لاین راست, معمولاً, به سبقت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_3_7',
      italianText: 'La strada rappresentata è composta da due carreggiate',
      farsiTranslation: 'معنی: راه نشان داده شده تشکیل شده از دو سواره‌روها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_3_8',
      italianText: 'Nella strada rappresentata, per ogni senso di marcia, la corsia di sinistra è dedicata, di norma, alla marcia ordinaria',
      farsiTranslation: 'معنی: در راه نشان داده شده, برای هر جهت حرکت, لاین چپ, معمولاً, حرکت عادی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_4_1',
      italianText: 'La strada rappresentata è composta da tre carreggiate',
      farsiTranslation: 'معنی: راه نشان داده شده تشکیل شده از سه سواره‌روها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_4_2',
      italianText: 'La strada rappresentata è composta da otto corsie',
      farsiTranslation: 'معنی: راه نشان داده شده تشکیل شده از هشت لاین‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_4_3',
      italianText: 'Nella strada rappresentata le carreggiate laterali sono, di norma, a senso unico',
      farsiTranslation: 'معنی: در راه نشان داده شده سواره‌روهای کناری هستند, معمولاً, یک‌طرفه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_4_4',
      italianText: 'Nella strada rappresentata la carreggiata centrale è, di norma, a doppio senso di circolazione',
      farsiTranslation: 'معنی: در راه نشان داده شده سواره‌رو مرکزی, معمولاً, تردد دوطرفه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_4_5',
      italianText: 'La strada rappresentata consente, di norma, il sorpasso anche in curva',
      farsiTranslation: 'معنی: راه نشان داده شده اجازه می‌دهد, معمولاً, سبقت همچنین در پیچ',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_4_6',
      italianText: 'La strada rappresentata è composta da quattro carreggiate, tutte a senso unico',
      farsiTranslation: 'معنی: راه نشان داده شده تشکیل شده از چهار سواره‌روها, یک‌طرفه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_4_7',
      italianText: 'La strada rappresentata è composta da otto carreggiate',
      farsiTranslation: 'معنی: راه نشان داده شده تشکیل شده از هشت سواره‌روها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_4_8',
      italianText: 'La strada rappresentata, di norma, ha due carreggiate a doppio senso di circolazione',
      farsiTranslation: 'معنی: راه نشان داده شده, معمولاً, دارد دو سواره‌روها تردد دوطرفه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_4_9',
      italianText: 'La strada rappresentata è composta da tre corsie',
      farsiTranslation: 'معنی: راه نشان داده شده تشکیل شده از سه لاین‌ها',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_4_10',
      italianText: 'Nella strada rappresentata, la corsia centrale è a doppio senso di circolazione',
      farsiTranslation: 'معنی: در راه نشان داده شده, لاین مرکزی تردد دوطرفه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_4_11',
      italianText: 'Nelle carreggiate laterali della strada rappresentata è consentita, di norma, l’inversione di marcia',
      farsiTranslation: 'معنی: سواره‌روهای کناری راه نشان داده شده مجاز است, معمولاً, ’دور زدن و تغییر جهت کامل',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_5_1',
      italianText: 'I veicoli devono, di norma, circolare sulla parte destra della carreggiata ed in vicinanza del margine destro',
      farsiTranslation: 'معنی: وسایل نقلیه معمولاً باید حرکت کنند قسمت راست سواره‌رو و در حاشیه راست',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_5_2',
      italianText: 'In una strada divisa in due carreggiate separate come in figura, i veicoli devono, di norma, circolare sulla carreggiata di destra rispetto alla propria direzione di marcia (FIG 558)',
      farsiTranslation: 'معنی: در راهی که مانند شکل به دو سواره‌روی جدا تقسیم شده است, وسایل نقلیه معمولاً باید حرکت کنند سواره‌رو راست جهت حرکت(شکل 558)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_5_3',
      italianText: 'Su una strada divisa in tre carreggiate separate come in figura, i veicoli devono, di norma, circolare sulla carreggiata centrale o su quella di destra rispetto alla propria direzione di marcia (FIG 562)',
      farsiTranslation: 'معنی: در راهی که مانند شکل به سه سواره‌روی جدا تقسیم شده است, وسایل نقلیه معمولاً باید حرکت کنند سواره‌رو مرکزی یا آن راست جهت حرکت(شکل 562)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_5_4',
      italianText: 'In una carreggiata a doppio senso di marcia con due corsie, come in figura, i veicoli devono circolare nella corsia di destra, impegnando solo quella di sinistra per il sorpasso (FIG 502)',
      farsiTranslation: 'معنی: در سواره‌روی دوطرفه با دو لاین، مانند شکل, وسایل نقلیه باید حرکت کنند لاین راست, آن چپ برای سبقت(شکل 502)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_5_5',
      italianText: 'Su carreggiate a tre corsie per senso di marcia, come in figura, i veicoli a motore devono, di norma, percorrere la corsia più libera a destra (FIG 552)',
      farsiTranslation: 'معنی: در سواره‌روهایی با سه لاین برای هر جهت حرکت، مانند شکل, وسایل نقلیه معمولاً باید طی کنند لاین به راست(شکل 552)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_5_6',
      italianText: 'I veicoli a motore possono circolare per file parallele in vicinanza di incroci regolati da vigili o da semafori',
      farsiTranslation: 'معنی: وسایل نقلیه می‌توانند در صف‌های موازی حرکت کنند در تقاطع‌ها کنترل‌شده با مأموران یا از چراغ‌های راهنمایی',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_5_7',
      italianText: 'Su strada a doppio senso di marcia con tre corsie, come in figura, i veicoli possono usare la corsia centrale per la mar- cia normale (FIG 554)',
      farsiTranslation: 'معنی: راه دوطرفه با سه لاین‌ها, مانند شکل, وسایل نقلیه می‌توانند لاین مرکزی حرکت عادی(شکل 554)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_5_8',
      italianText: 'Quando una strada è a doppio senso di marcia con tre corsie, come in figura, i veicoli possono circolare per file parallele (FIG 554)',
      farsiTranslation: 'معنی: وقتی راهی مانند شکل دوطرفه و دارای سه لاین است, وسایل نقلیه می‌توانند در صف‌های موازی حرکت کنند(شکل 554)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_5_9',
      italianText: 'Per svoltare a sinistra i veicoli debbono tenersi sul margine destro della carreggiata',
      farsiTranslation: 'معنی: برای گردش به چپ وسایل نقلیه باید خود را نگه دارند روی حاشیه راست سواره‌رو',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_5_10',
      italianText: 'È possibile circolare al centro della carreggiata quando la strada è libera',
      farsiTranslation: 'معنی: ممکن است حرکت کنند به مرکز سواره‌رو وقتی راه آزاد است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_5_11',
      italianText: 'In una strada a doppio senso di marcia con due corsie, come in figura, i veicoli possono circolare per file parallele (FIG 502)',
      farsiTranslation: 'معنی: در راه دوطرفه با دو لاین، مانند شکل, وسایل نقلیه می‌توانند در صف‌های موازی حرکت کنند(شکل 502)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_5_12',
      italianText: 'In caso di intenso traffico è consentito circolare per file parallele, utilizzando le corsie riservate agli autobus e ai veicoli in servizio pubblico',
      farsiTranslation: 'معنی: در مجاز است در صف‌های موازی حرکت کنند, با استفاده از لاین‌ها به اتوبوس‌ها و وسایل نقلیه در',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_6_1',
      italianText: 'Su una strada a tre corsie a doppio senso di marcia, in figura, si deve impegnare quella centrale solo per il sorpasso (FIG 554)',
      farsiTranslation: 'معنی: در راه دوطرفه سه‌لاینِ شکل, باید اشغال کنند آن مرکزی برای سبقت(شکل 554)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_6_2',
      italianText: 'Su una strada a due corsie a doppio senso di marcia, in figura, si deve impegnare quella di sinistra solo per il sorpasso (FIG 502)',
      farsiTranslation: 'معنی: در راه دوطرفه دو‌لاینِ شکل, باید اشغال کنند آن چپ برای سبقت(شکل 502)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_6_3',
      italianText: 'Sulle strade extraurbane principali la sosta è consentita solo nelle apposite aree',
      farsiTranslation: 'معنی: روی راه‌ها مجاز است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_6_4',
      italianText: 'Su una strada a due carreggiate separate, in figura, si deve percorrere la carreggiata di destra per la marcia normale e quella di sinistra per il sorpasso (FIG 559)',
      farsiTranslation: 'معنی: یک راه دو سواره‌روهای جدا, در شکل, باید طی کنند سواره‌رو راست حرکت عادی و آن چپ برای سبقت(شکل 559)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_6_5',
      italianText: 'Nelle strade composte da una carreggiata a due corsie a doppio senso di marcia, in figura, si può marciare per file parallele (FIG 502)',
      farsiTranslation: 'معنی: راه‌ها از یک سواره‌رو دو لاین‌ها دوطرفه, در شکل, می‌تواند در صف‌های موازی حرکت کرد(شکل 502)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_6_6',
      italianText: 'Nelle strade a quattro carreggiate separate, quelle centrali sono riservate al sorpasso',
      farsiTranslation: 'معنی: راه‌ها چهار سواره‌روهای جدا, هستند ویژه سبقت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_7_1',
      italianText: 'Percorrendo una carreggiata a senso unico la svolta a sinistra si effettua segnalando in anticipo la manovra da compiere',
      farsiTranslation: 'معنی: هنگام حرکت در سواره‌روی یک‌طرفه به چپ انجام می‌شود از قبل مانور از',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_7_2',
      italianText: 'Durante la marcia per file parallele è consentito cambiare corsia per effettuare manovre di svolta',
      farsiTranslation: 'معنی: هنگام حرکت در صف‌های موازی مجاز است تغییر دهد لاین انجام دهند مانورها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_7_3',
      italianText: 'La marcia per file parallele è ammessa quando viene autorizzata dagli agenti del traffico',
      farsiTranslation: 'معنی: حرکت در صف‌های موازی مجاز است وقتی می‌شود مجاز شده مأموران ترافیک',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_7_4',
      italianText: 'È consentita la marcia per file parallele su strade a due corsie per senso di marcia ad un incrocio regolato da semaforo',
      farsiTranslation: 'معنی: مجاز است حرکت در صف‌های موازی راه‌ها دو لاین‌ها برای هر جهت حرکت یک تقاطع‌هایا از چراغ راهنمایی',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_7_5',
      italianText: 'Su strade con almeno due corsie per senso di marcia, come in figura, qualora il traffico sia intenso, si può viaggiare per file parallele (FIG 550)',
      farsiTranslation: 'معنی: در راه‌هایی با حداقل دو لاین برای هر جهت حرکت، مانند شکل, اگر, می‌تواند در صف‌های موازی حرکت کنند(شکل 550)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_7_6',
      italianText: 'Di norma, è consentito viaggiare per file parallele lungo il tratto di strada che porta ad un incrocio regolato da agenti del traffico',
      farsiTranslation: 'معنی: معمولاً, مجاز است در صف‌های موازی حرکت کنند در بخشی از راه که به تقاطع کنترل‌شده توسط مأموران ترافیک می‌رسد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_7_7',
      italianText: 'In condizioni di traffico intenso su carreggiata a senso unico a tre corsie, come in figura, è consentito viaggiare per file parallele (FIG 554)',
      farsiTranslation: 'معنی: در شرایط ترافیک سنگین سواره‌رو یک‌طرفه سه لاین‌ها, مانند شکل, مجاز است در صف‌های موازی حرکت کنند(شکل 554)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_7_8',
      italianText: 'Percorrendo una carreggiata a senso unico la svolta a sinistra si effettua immettendosi in una corsia qualsiasi, se si viaggia per file parallele',
      farsiTranslation: 'معنی: هنگام حرکت در سواره‌روی یک‌طرفه به چپ انجام می‌شود با وارد شدن در یک لاین هر, اگر صف‌های موازی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_7_9',
      italianText: 'È consentito viaggiare per file parallele lungo il tratto di strada che porta ad un incrocio non regolato da semaforo o da agenti del traffico',
      farsiTranslation: 'معنی: مجاز است در صف‌های موازی حرکت کنند راه یک تقاطع‌هایا نه از چراغ راهنمایی یا از مأموران ترافیک',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_7_10',
      italianText: 'È consentito viaggiare per file parallele su strada con due corsie e doppio senso di marcia, come quella in figura (FIG 502)',
      farsiTranslation: 'معنی: مجاز است در صف‌های موازی حرکت کنند راه با دو لاین‌ها و جهت حرکت, آن در شکل(شکل 502)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_7_11',
      italianText: 'È sempre consentito viaggiare per file parallele se la carreggiata a doppio senso ha almeno due corsie per ogni senso di marcia, come quella in figura (FIG 550)',
      farsiTranslation: 'معنی: همیشه مجاز است در صف‌های موازی حرکت کنند اگر سواره‌رو دارد حداقل دو لاین‌ها برای هر جهت حرکت, آن در شکل(شکل 550)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_7_12',
      italianText: 'Nei centri urbani è consentito marciare per file parallele in qualunque condizione di traffico',
      farsiTranslation: 'معنی: شهری مجاز است در صف‌های موازی حرکت کرد در هر شرایط ترافیکی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_7_13',
      italianText: 'È obbligatorio viaggiare per file parallele sulle carreggiate a tre corsie per senso di marcia, come quella in figura (FIG 552)',
      farsiTranslation: 'معنی: اجباری است در صف‌های موازی حرکت کنند روی سواره‌روها سه لاین‌ها برای هر جهت حرکت, آن در شکل(شکل 552)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_7_14',
      italianText: 'Durante la marcia per file parallele, percorrendo la corsia di sinistra, bisogna mantenere in funzione l’indicatore di dire- zione sinistro',
      farsiTranslation: 'معنی: هنگام حرکت در صف‌های موازی, طی می‌کند لاین چپ, باید نگه دارد فعال ’چراغ راهنما',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_7_15',
      italianText: 'La marcia per file parallele non è ammessa se la strada è a una sola carreggiata',
      farsiTranslation: 'معنی: حرکت در صف‌های موازی مجاز نیست اگر راه یک سواره‌رو',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_7_16',
      italianText: 'Durante la marcia per file parallele i motocicli possono procedere passando tra i veicoli affiancati',
      farsiTranslation: 'معنی: هنگام حرکت در صف‌های موازی موتورسیکلت‌ها می‌توانند حرکت کند وسایل نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_8_1',
      italianText: 'Chi intende cambiare corsia deve controllare che la corsia che vuole occupare sia libera davanti per un tratto sufficiente',
      farsiTranslation: 'معنی: کسی که قصد تغییر لاین دارد باید کنترل کند لاین که می‌خواهد اشغال کند در جلو به اندازه کافی آزاد است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_8_2',
      italianText: 'Chi intende cambiare corsia deve controllare che la corsia che vuole occupare sia libera dietro per un tratto sufficiente',
      farsiTranslation: 'معنی: کسی که قصد تغییر لاین دارد باید کنترل کند لاین که می‌خواهد اشغال کند در عقب به اندازه کافی آزاد است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_8_3',
      italianText: 'Chi intende cambiare corsia, per effettuare un sorpasso, deve controllare che il veicolo che sta davanti non abbia se- gnalato l’inizio della stessa manovra',
      farsiTranslation: 'معنی: کسی که قصد تغییر لاین دارد, انجام دهند یک سبقت, باید کنترل کند وسیله نقلیه جلوی ما است نه ’ مانور',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_8_4',
      italianText: 'Chi intende cambiare corsia deve segnalare la manovra in anticipo, tramite l’indicatore di direzione',
      farsiTranslation: 'معنی: کسی که قصد تغییر لاین دارد باید علامت بدهد مانور از قبل, ’چراغ راهنما',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_8_5',
      italianText: 'Chi intende cambiare corsia non deve creare intralcio o pericolo per chi percorre la corsia che vuole impegnare',
      farsiTranslation: 'معنی: کسی که قصد تغییر لاین دارد نه باید یا طی می‌کند لاین اشغال کنند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_8_6',
      italianText: 'Chi intende cambiare corsia non deve azionare l’indicatore di direzione se la strada è libera',
      farsiTranslation: 'معنی: کسی که قصد تغییر لاین دارد نه باید فعال کنند ’چراغ راهنما اگر راه آزاد است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_8_7',
      italianText: 'Chi intende cambiare corsia ha l’obbligo di segnalare la manovra con l’uso dell’avvisatore acustico (clacson o trombe)',
      farsiTranslation: 'معنی: کسی که قصد تغییر لاین دارد دارد ’وظیفه علامت بدهد مانور با ’ ’(بوق یا بوق)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_8_8',
      italianText: 'Prima di cambiare corsia è necessario accertare che le corsie siano separate da una striscia continua',
      farsiTranslation: 'معنی: قبل از تغییر دهد لاین لاین‌ها از یک',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_9_1',
      italianText: 'Quando si vuole cambiare corsia non si deve creare intralcio o pericolo a chi si trova sulla corsia da impegnare',
      farsiTranslation: 'معنی: وقتی تغییر دهد لاین نه باید یا لاین از اشغال کنند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_9_2',
      italianText: 'Quando si vuole cambiare corsia si deve segnalare in anticipo la manovra da compiere',
      farsiTranslation: 'معنی: وقتی تغییر دهد لاین باید علامت بدهد از قبل مانور از',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_9_3',
      italianText: 'Quando si vuole cambiare corsia bisogna controllare che la corsia da impegnare sia libera davanti per un tratto suffi- ciente',
      farsiTranslation: 'معنی: وقتی تغییر دهد لاین باید کنترل کند لاین از اشغال کنند در جلو به اندازه کافی آزاد است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_9_4',
      italianText: 'Quando si vuole cambiare corsia si deve controllare che la striscia che divide le corsie sia tratteggiata',
      farsiTranslation: 'معنی: وقتی تغییر دهد لاین باید کنترل کند لاین‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_9_5',
      italianText: 'Quando si vuole cambiare corsia si deve segnalare la manovra, facendo uso dell’indicatore di direzione',
      farsiTranslation: 'معنی: وقتی تغییر دهد لاین باید علامت بدهد مانور, ’چراغ راهنما',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_9_6',
      italianText: 'Quando si vuole cambiare corsia bisogna controllare che sulla corsia che si vuole occupare non stiano arrivando altri veicoli',
      farsiTranslation: 'معنی: وقتی تغییر دهد لاین باید کنترل کند لاین نه می‌آید وسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_9_7',
      italianText: 'Nelle strade urbane è consentito, quando si vuole svoltare, circolare a cavallo delle strisce di corsia',
      farsiTranslation: 'معنی: راه‌ها مجاز است, وقتی, حرکت کنند لاین',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_9_8',
      italianText: 'Quando si vuole cambiare corsia l’uso dell’indicatore di direzione è facoltativo se ci sono le strisce discontinue (tratteg- giate)',
      farsiTranslation: 'معنی: وقتی تغییر دهد لاین ’ ’چراغ راهنما اگر هستند()',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_9_9',
      italianText: 'Quando si vuole cambiare corsia, per immettersi nella corsia di destra, non occorre alcuna particolare attenzione',
      farsiTranslation: 'معنی: وقتی تغییر دهد لاین, وارد شدن لاین راست, نه لازم است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_9_10',
      italianText: 'In vicinanza degli incroci, come in figura si può sempre cambiare corsia fino alla striscia trasversale di arresto (FIG 570)',
      farsiTranslation: 'معنی: در تقاطع‌ها, مانند شکل می‌تواند همیشه تغییر دهد لاین خط عرضی(شکل 570)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_9_11',
      italianText: 'Quando si vuole cambiare corsia per un sorpasso è obbligatorio ridurre la velocità',
      farsiTranslation: 'معنی: وقتی تغییر دهد لاین یک سبقت اجباری است سرعت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_10_1',
      italianText: 'Per effettuare la svolta a destra occorre tenersi il più vicino possibile al margine destro della carreggiata',
      farsiTranslation: 'معنی: انجام دهند به راست لازم است خود را نگه دارند نزدیک به حاشیه راست سواره‌رو',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_10_2',
      italianText: 'Per effettuare la svolta a destra bisogna segnalare in anticipo la manovra da compiere, azionando l’indicatore di direzione',
      farsiTranslation: 'معنی: انجام دهند به راست باید علامت بدهد از قبل مانور از, ’چراغ راهنما',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_10_3',
      italianText: 'La svolta a destra si effettua immettendosi nella corsia che consente di eseguire tale manovra',
      farsiTranslation: 'معنی: به راست انجام می‌شود با وارد شدن لاین اجازه می‌دهد مانور',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_10_4',
      italianText: 'La svolta a destra si effettua moderando la velocità man mano che ci si avvicina al punto di svolta',
      farsiTranslation: 'معنی: به راست انجام می‌شود سرعت به',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_10_5',
      italianText: 'La svolta a destra si effettua senza creare pericolo o intralcio agli altri',
      farsiTranslation: 'معنی: به راست انجام می‌شود یا به',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_10_6',
      italianText: 'Per svoltare a destra bisogna tenersi il più vicino possibile al margine sinistro della carreggiata',
      farsiTranslation: 'معنی: به راست باید خود را نگه دارند نزدیک به حاشیه چپ سواره‌رو',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_10_7',
      italianText: 'Per svoltare a destra bisogna tenersi sulla corsia di sinistra',
      farsiTranslation: 'معنی: به راست باید خود را نگه دارند لاین چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_10_8',
      italianText: 'La svolta a destra si effettua senza mai dare la precedenza ai pedoni, se il semaforo ha la luce verde accesa',
      farsiTranslation: 'معنی: به راست انجام می‌شود حق تقدم بدهد به عابران پیاده, اگر چراغ راهنمایی دارد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_10_9',
      italianText: 'La svolta a destra si effettua girando attorno alla colonnina luminosa eventualmente posta al centro dell’incrocio',
      farsiTranslation: 'معنی: به راست انجام می‌شود به مرکز ’تقاطع‌هایا',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_10_10',
      italianText: 'Quando si vuole svoltare a destra è necessario portarsi in vicinanza del centro dell’incrocio',
      farsiTranslation: 'معنی: وقتی به راست در مرکز ’تقاطع‌هایا',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_11_1',
      italianText: 'In una carreggiata a doppio senso di circolazione per svoltare a sinistra bisogna avvicinarsi al centro della carreggiata',
      farsiTranslation: 'معنی: در یک سواره‌رو تردد دوطرفه برای گردش به چپ باید به مرکز سواره‌رو',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_11_2',
      italianText: 'In una carreggiata a doppio senso di circolazione per svoltare a sinistra occorre, di norma, occupare l’area sinistra dell’incrocio, come i veicoli in figura, salvo diversa segnalazione (FIG 601)',
      farsiTranslation: 'معنی: در یک سواره‌رو تردد دوطرفه برای گردش به چپ لازم است, معمولاً, ’به چپ ’تقاطع‌هایا, وسایل نقلیه در شکل,(شکل 601)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_11_3',
      italianText: 'In una carreggiata a doppio senso di circolazione per svoltare a sinistra bisogna girare intorno al centro dell’incrocio come il veicolo H in figura, se c’è il segnale di rotatoria (FIG 602)',
      farsiTranslation: 'معنی: در یک سواره‌رو تردد دوطرفه برای گردش به چپ باید به مرکز ’تقاطع‌هایا وسیله نقلیه H در شکل, اگر ’ تابلوی میدان(شکل 602)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_11_4',
      italianText: 'In una carreggiata a doppio senso di circolazione per svoltare a sinistra bisogna dare la precedenza ai veicoli prove- nienti da destra, salvo diversa segnalazione',
      farsiTranslation: 'معنی: در یک سواره‌رو تردد دوطرفه برای گردش به چپ باید حق تقدم بدهد وسایل نقلیه به راست,',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_11_5',
      italianText: 'In una carreggiata a doppio senso di circolazione per svoltare a sinistra occorre spostarsi il più possibile sul margine sinistro della carreggiata',
      farsiTranslation: 'معنی: در یک سواره‌رو تردد دوطرفه برای گردش به چپ لازم است جابه‌جا شوند روی حاشیه چپ سواره‌رو',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_11_6',
      italianText: 'In una carreggiata a doppio senso di circolazione per svoltare a sinistra bisogna effettuare la manovra velocemente, per evitare i veicoli provenienti da destra e da sinistra',
      farsiTranslation: 'معنی: در یک سواره‌رو تردد دوطرفه برای گردش به چپ باید انجام دهند مانور, وسایل نقلیه به راست و به چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_11_7',
      italianText: 'In una carreggiata a doppio senso di circolazione per svoltare a sinistra bisogna effettuare la svolta occupando sempre il lato destro dell’incrocio, come i veicoli in figura (FIG 599)',
      farsiTranslation: 'معنی: در یک سواره‌رو تردد دوطرفه برای گردش به چپ باید انجام دهند همیشه ’تقاطع‌هایا, وسایل نقلیه در شکل(شکل 599)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_11_8',
      italianText: 'In una carreggiata a doppio senso di circolazione per svoltare a sinistra bisogna dare la precedenza ai veicoli che arri- vano da sinistra, salvo diversa segnalazione',
      farsiTranslation: 'معنی: در یک سواره‌رو تردد دوطرفه برای گردش به چپ باید حق تقدم بدهد وسایل نقلیه می‌آید به چپ,',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_11_9',
      italianText: 'In una carreggiata a doppio senso di circolazione per svoltare a sinistra occorre suonare il clacson, per attraversare con maggior sicurezza l’incrocio',
      farsiTranslation: 'معنی: در یک سواره‌رو تردد دوطرفه برای گردش به چپ لازم است بوق, با ’تقاطع‌هایا',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_12_1',
      italianText: 'Quando si vuole cambiare direzione si deve azionare in anticipo l’indicatore di direzione',
      farsiTranslation: 'معنی: وقتی تغییر دهد باید فعال کنند از قبل ’چراغ راهنما',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_12_2',
      italianText: 'Per svoltare a sinistra bisogna, di norma, lasciare il centro dell’incrocio alla nostra destra, come i veicoli in figura (FIG 601)',
      farsiTranslation: 'معنی: برای گردش به چپ باید, معمولاً, مرکز ’تقاطع‌هایا به راست, وسایل نقلیه در شکل(شکل 601)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_12_3',
      italianText: 'Su strada a senso unico per svoltare a sinistra bisogna tenersi sul margine sinistro',
      farsiTranslation: 'معنی: راه یک‌طرفه برای گردش به چپ باید خود را نگه دارند روی حاشیه چپ',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_12_4',
      italianText: 'Durante l’effettuazione dell’inversione di marcia l’indicatore di direzione deve rimanere in funzione per l’intera durata della manovra',
      farsiTranslation: 'معنی: ’انجام می‌شود ’دور زدن و تغییر جهت کامل ’چراغ راهنما باید فعال ’ مانور',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_12_5',
      italianText: 'Il veicolo in figura, può svoltare a destra (FIG 572)',
      farsiTranslation: 'معنی: وسیله نقلیه در شکل, می‌تواند به راست(شکل 572)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_12_6',
      italianText: 'Per svoltare a sinistra bisogna girare intorno al centro dell’incrocio, come i veicoli in figura (FIG 599)',
      farsiTranslation: 'معنی: برای گردش به چپ باید به مرکز ’تقاطع‌هایا, وسایل نقلیه در شکل(شکل 599)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_12_7',
      italianText: 'Quando si vuole cambiare direzione è obbligatorio fare uso delle segnalazioni acustiche (clacson o trombe)',
      farsiTranslation: 'معنی: وقتی تغییر دهد اجباری است(بوق یا بوق)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_12_8',
      italianText: 'Viaggiando su semicarreggiata a tre corsie, come in figura, per svoltare a sinistra si deve utilizzare la corsia centrale (FIG 572)',
      farsiTranslation: 'معنی: سواره‌رو سه لاین‌ها, مانند شکل, برای گردش به چپ باید لاین مرکزی(شکل 572)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_13_1',
      italianText: 'Su una strada a doppio senso di marcia per svoltare a sinistra non si deve prendere contromano la strada in cui si svolta',
      farsiTranslation: 'معنی: یک راه دوطرفه برای گردش به چپ نه باید راه در',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_13_2',
      italianText: 'Su una strada a doppio senso di marcia nello svoltare a sinistra si deve, di norma, lasciare il centro dell’incrocio alla nostra destra, come i veicoli in figura (FIG 601)',
      farsiTranslation: 'معنی: یک راه دوطرفه به چپ معمولاً باید مرکز ’تقاطع‌هایا به راست, وسایل نقلیه در شکل(شکل 601)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_13_3',
      italianText: 'Su una strada a doppio senso di marcia per svoltare a sinistra occorre inserirsi nelle corsie che consentono di prosegui- re in tale direzione',
      farsiTranslation: 'معنی: یک راه دوطرفه برای گردش به چپ لازم است لاین‌ها در',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_13_4',
      italianText: 'Su una strada a doppio senso di marcia per svoltare a sinistra è necessario spostarsi a sinistra della linea continua di mezzeria',
      farsiTranslation: 'معنی: یک راه دوطرفه برای گردش به چپ جابه‌جا شوند به چپ خط ممتد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_13_5',
      italianText: 'Su una strada a doppio senso di marcia per svoltare a sinistra ci si deve tenere lungo il margine destro della carreggiata',
      farsiTranslation: 'معنی: یک راه دوطرفه برای گردش به چپ باید حاشیه راست سواره‌رو',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_13_6',
      italianText: 'Su una strada a doppio senso di marcia per svoltare a sinistra è necessario arrestarsi prima di completare la manovra, anche se non sopraggiungono veicoli',
      farsiTranslation: 'معنی: یک راه دوطرفه برای گردش به چپ قبل از مانور, همچنین اگر نه وسایل نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_14_1',
      italianText: 'Il conducente che intende effettuare l’inversione di marcia su una strada a doppio senso deve dare la precedenza ai veicoli che sopraggiungono',
      farsiTranslation: 'معنی: راننده قصد دارد انجام دهند ’دور زدن و تغییر جهت کامل یک راه باید حق تقدم بدهد وسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_14_2',
      italianText: 'Il conducente che intende effettuare l’inversione di marcia su una strada a doppio senso deve rinunciare a compiere la manovra, qualora vi sia traffico intenso e continuo',
      farsiTranslation: 'معنی: راننده قصد دارد انجام دهند ’دور زدن و تغییر جهت کامل یک راه باید از انجام آن صرف‌نظر کرد: مانور, اگر و',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_14_3',
      italianText: 'Il conducente che intende effettuare l’inversione di marcia su una strada a doppio senso deve rinunciare ad eseguire la manovra, se vi è scarsa visibilità',
      farsiTranslation: 'معنی: راننده قصد دارد انجام دهند ’دور زدن و تغییر جهت کامل یک راه باید از انجام آن صرف‌نظر کرد: مانور, اگر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_14_4',
      italianText: 'Il conducente che intende effettuare l’inversione di marcia su una strada a doppio senso deve azionare l’indicatore di direzione',
      farsiTranslation: 'معنی: راننده قصد دارد انجام دهند ’دور زدن و تغییر جهت کامل یک راه باید فعال کنند ’چراغ راهنما',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_14_5',
      italianText: 'Il conducente che intende effettuare l’inversione di marcia su una strada a doppio senso non deve creare pericolo o intralcio agli altri utenti della strada',
      farsiTranslation: 'معنی: راننده قصد دارد انجام دهند ’دور زدن و تغییر جهت کامل یک راه نه باید یا به راه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_14_6',
      italianText: 'Il conducente che intende effettuare l’inversione di marcia su una strada a doppio senso deve azionare la segnalazione luminosa di pericolo',
      farsiTranslation: 'معنی: راننده قصد دارد انجام دهند ’دور زدن و تغییر جهت کامل یک راه باید فعال کنند چراغ هشدار خطر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_14_7',
      italianText: 'Il conducente che intende effettuare l’inversione di marcia su una strada a doppio senso può compiere la manovra an- che in curva, se dà precedenza a tutti i veicoli',
      farsiTranslation: 'معنی: راننده قصد دارد انجام دهند ’دور زدن و تغییر جهت کامل یک راه می‌تواند مانور همچنین در پیچ, اگر حق تقدم وسایل نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_14_8',
      italianText: 'Il conducente che può effettuare l’inversione di marcia su una strada a doppio senso deve accertarsi se la linea di mez- zeria è continua',
      farsiTranslation: 'معنی: راننده می‌تواند انجام دهند ’دور زدن و تغییر جهت کامل یک راه باید اگر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_14_9',
      italianText: 'Il conducente che intende effettuare l’inversione di marcia su una strada a doppio senso può compiere la manovra an- che con scarsa visibilità, se la linea di mezzeria è tratteggiata',
      farsiTranslation: 'معنی: راننده قصد دارد انجام دهند ’دور زدن و تغییر جهت کامل یک راه می‌تواند مانور همچنین با, اگر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_14_10',
      italianText: 'Il conducente che intende effettuare l’inversione di marcia su una strada a doppio senso può effettuarla solo sulle strade larghe, che permettono di eseguirla con una sola manovra',
      farsiTranslation: 'معنی: راننده قصد دارد انجام دهند ’دور زدن و تغییر جهت کامل یک راه می‌تواند انجام می‌شود روی راه‌ها, با یک مانور',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_15_1',
      italianText: 'Nelle strade a doppio senso di circolazione non è consentito effettuare l’inversione del senso di marcia in vicinanza o in corrispondenza di curve',
      farsiTranslation: 'معنی: راه‌ها تردد دوطرفه نه مجاز است انجام دهند ’ جهت حرکت در یا در',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_15_2',
      italianText: 'L’inversione del senso di marcia non è consentita in vicinanza o in corrispondenza degli incroci',
      farsiTranslation: 'معنی: L’ جهت حرکت نه مجاز است در نزدیکی یا محل تقاطع‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_15_3',
      italianText: 'Nelle strade a doppio senso non è consentito effettuare l’inversione del senso di marcia in tutti i casi di scarsa visibilità',
      farsiTranslation: 'معنی: راه‌ها نه مجاز است انجام دهند ’ جهت حرکت در',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_15_4',
      italianText: 'Nelle strade a doppio senso di circolazione non è consentito effettuare l’inversione del senso di marcia in vicinanza o in corrispondenza di dossi',
      farsiTranslation: 'معنی: راه‌ها تردد دوطرفه نه مجاز است انجام دهند ’ جهت حرکت در یا در برآمدگی‌ها',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_15_5',
      italianText: 'Quando manca la segnaletica orizzontale non è consentito effettuare manovre di inversione del senso di marcia',
      farsiTranslation: 'معنی: وقتی تابلو نه مجاز است انجام دهند مانورها جهت حرکت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_15_6',
      italianText: 'Qualora la linea di margine della carreggiata sia continua, non è consentito effettuare l’inversione di marcia',
      farsiTranslation: 'معنی: اگر سواره‌رو, نه مجاز است انجام دهند ’دور زدن و تغییر جهت کامل',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_15_7',
      italianText: 'Fuori dai centri abitati non è consentito effettuare l’inversione di marcia',
      farsiTranslation: 'معنی: نه مجاز است انجام دهند ’دور زدن و تغییر جهت کامل',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_15_8',
      italianText: 'Sulle autostrade a tre corsie per ogni senso di marcia è consentito l’inversione del senso di marcia',
      farsiTranslation: 'معنی: روی راه‌ها سه لاین‌ها برای هر جهت حرکت مجاز است ’ جهت حرکت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_16_1',
      italianText: 'Giungendo in vicinanza di un incrocio bisogna predisporsi ad osservare le norme di precedenza',
      farsiTranslation: 'معنی: در نزدیکی یک تقاطع‌هایا باید حق تقدم',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_16_2',
      italianText: 'Giungendo in vicinanza di un incrocio ci si deve spostare per tempo sulla corsia destinata alla direzione che si intende prendere',
      farsiTranslation: 'معنی: در نزدیکی یک تقاطع‌هایا باید لاین قصد دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_16_3',
      italianText: 'Giungendo in vicinanza di un incrocio si deve segnalare per tempo l’intenzione di svoltare',
      farsiTranslation: 'معنی: در نزدیکی یک تقاطع‌هایا باید علامت بدهد ’',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_16_4',
      italianText: 'Giungendo alla guida di un veicolo a due ruote in vicinanza di un incrocio, bisogna incolonnarsi dietro gli altri veicoli in attesa',
      farsiTranslation: 'معنی: یک دو در نزدیکی یک تقاطع‌هایا, باید وسایل نقلیه در',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_16_5',
      italianText: 'Giungendo ad un incrocio è consentito impegnarlo solo se si ha la possibilità di proseguire e liberarlo',
      farsiTranslation: 'معنی: هنگام رسیدن به یک تقاطع‌هایا مجاز است فقط اگر دارد و',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_16_6',
      italianText: 'Giungendo in vicinanza di un incrocio si deve usare la massima prudenza per evitare incidenti',
      farsiTranslation: 'معنی: در نزدیکی یک تقاطع‌هایا باید حداکثر احتیاط برای جلوگیری از تصادف',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_16_7',
      italianText: 'Giungendo in vicinanza di un incrocio bisogna passare sempre prima dei veicoli che arrivano da destra',
      farsiTranslation: 'معنی: در نزدیکی یک تقاطع‌هایا باید همیشه وسایل نقلیه می‌آید به راست',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_16_8',
      italianText: 'Giungendo in vicinanza di un incrocio bisogna sorpassare velocemente a sinistra se si vuole svoltare a destra',
      farsiTranslation: 'معنی: در نزدیکی یک تقاطع‌هایا باید سبقت بگیرند به چپ اگر به راست',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_16_9',
      italianText: 'Giungendo in vicinanza di un incrocio nei centri abitati occorre suonare il clacson',
      farsiTranslation: 'معنی: در نزدیکی یک تقاطع‌هایا لازم است بوق',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_17_1',
      italianText: 'In vicinanza o in corrispondenza degli incroci non è consentito procedere a zig zag, anche se le corsie direzionali sono segnate da strisce discontinue (tratteggiate)',
      farsiTranslation: 'معنی: در نزدیکی یا محل تقاطع‌ها نه مجاز است حرکت کند, همچنین اگر لاین‌ها هستند از()',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_17_2',
      italianText: 'In vicinanza o in corrispondenza degli incroci non è consentito cambiare improvvisamente la direzione di marcia',
      farsiTranslation: 'معنی: در نزدیکی یا محل تقاطع‌ها نه مجاز است تغییر دهد جهت حرکت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_17_3',
      italianText: 'In vicinanza o in corrispondenza degli incroci non è consentito effettuare l’inversione di marcia',
      farsiTranslation: 'معنی: در نزدیکی یا محل تقاطع‌ها نه مجاز است انجام دهند ’دور زدن و تغییر جهت کامل',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_17_4',
      italianText: 'In corrispondenza di incroci extraurbani non è consentito effettuare la sosta',
      farsiTranslation: 'معنی: در تقاطع‌ها شهری نه مجاز است انجام دهند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_17_5',
      italianText: 'In corrispondenza di incroci extraurbani non è consentito effettuare la fermata',
      farsiTranslation: 'معنی: در تقاطع‌ها شهری نه مجاز است انجام دهند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_17_6',
      italianText: 'In vicinanza o in corrispondenza degli incroci non è consentito sorpassare una bicicletta, se si deve occupare la corsia opposta di marcia',
      farsiTranslation: 'معنی: در نزدیکی یا محل تقاطع‌ها نه مجاز است سبقت بگیرند یک, اگر باید لاین',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_17_7',
      italianText: 'In vicinanza o in corrispondenza degli incroci non è consentito usare i fari anabbaglianti',
      farsiTranslation: 'معنی: در نزدیکی یا محل تقاطع‌ها نه مجاز است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_17_8',
      italianText: 'In vicinanza o in corrispondenza degli incroci extraurbani non è consentito superare la velocità di 60 km/h',
      farsiTranslation: 'معنی: در نزدیکی یا محل تقاطع‌ها شهری نه مجاز است عبور کرد سرعت ۶۰ کیلومتر بر ساعت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_17_9',
      italianText: 'In corrispondenza degli incroci urbani è consentito non azionare l’indicatore di direzione per svoltare a destra',
      farsiTranslation: 'معنی: در محل تقاطع‌ها شهری مجاز است نه فعال کنند ’چراغ راهنما به راست',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_17_10',
      italianText: 'In vicinanza o in corrispondenza degli incroci regolati da semaforo non è consentito il sorpasso',
      farsiTranslation: 'معنی: در نزدیکی یا محل تقاطع‌ها کنترل‌شده با چراغ راهنمایی نه مجاز است سبقت',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_17_11',
      italianText: 'In vicinanza o in corrispondenza degli incroci non si deve rallentare se il semaforo è a luce gialla lampeggiante',
      farsiTranslation: 'معنی: در نزدیکی یا محل تقاطع‌ها نه باید اگر چراغ راهنمایی چراغ زرد چشمک‌زن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_17_12',
      italianText: 'In vicinanza o in corrispondenza degli incroci extraurbani non è consentito azionare i dispositivi di segnalazione acustica (clacson o trombe)',
      farsiTranslation: 'معنی: در نزدیکی یا محل تقاطع‌ها شهری نه مجاز است فعال کنند وسایل هشدار صوتی(بوق یا بوق)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_18_1',
      italianText: 'Se ad un incrocio giungono contemporaneamente da strade diverse due veicoli, l’obbligo di dare la precedenza spetta, di norma, al conducente del veicolo che arriva da sinistra',
      farsiTranslation: 'معنی: اگر یک تقاطع‌هایا از راه‌ها دو وسایل نقلیه, ’وظیفه حق تقدم بدهد بر عهده است, معمولاً, به راننده می‌آید به چپ',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_18_2',
      italianText: 'Se ad un incrocio giungono contemporaneamente da strade diverse due veicoli, entrambi hanno l’obbligo di moderare la velocità, per evitare incidenti',
      farsiTranslation: 'معنی: اگر یک تقاطع‌هایا از راه‌ها دو وسایل نقلیه, هر دو دارند ’وظیفه کم کردن سرعت, برای جلوگیری از تصادف',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_18_3',
      italianText: 'Giungendo ad un incrocio, bisogna essere prudenti e tolleranti nei confronti di chi, pur non avendo la precedenza, passa ugualmente per primo',
      farsiTranslation: 'معنی: هنگام رسیدن به یک تقاطع‌هایا, باید با احتیاط و بردباری رفتار کرد نسبت به کسی که, نه حق تقدم, با این حال اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_18_4',
      italianText: 'Uscendo con un veicolo da una proprietà privata, bisogna procedere con prudenza',
      farsiTranslation: 'معنی: با یک از یک ملک خصوصی, باید حرکت کند با',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_18_5',
      italianText: 'Uscendo con un veicolo da una proprietà privata, bisogna dare la precedenza agli eventuali pedoni',
      farsiTranslation: 'معنی: با یک از یک ملک خصوصی, باید حق تقدم بدهد به عابران پیاده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_18_6',
      italianText: 'Uscendo con un veicolo da una proprietà privata, bisogna procedere lentamente, specie se in retromarcia',
      farsiTranslation: 'معنی: با یک از یک ملک خصوصی, باید حرکت کند, اگر در عقب رفتن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_18_7',
      italianText: 'Se ad un incrocio giungono contemporaneamente da strade diverse due veicoli, l’obbligo di dare la precedenza spetta al conducente del veicolo che percorre la strada più stretta',
      farsiTranslation: 'معنی: اگر یک تقاطع‌هایا از راه‌ها دو وسایل نقلیه, ’وظیفه حق تقدم بدهد بر عهده است به راننده طی می‌کند راه تنگ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_18_8',
      italianText: 'Uscendo con un veicolo da una proprietà privata, è obbligatorio suonare il clacson',
      farsiTranslation: 'معنی: با یک از یک ملک خصوصی, اجباری است بوق',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_18_9',
      italianText: 'Uscendo con un veicolo da una proprietà privata, si ha la precedenza sui pedoni NORME SULLA PRECEDENZA E CORTEI',
      farsiTranslation: 'معنی: با یک از یک ملک خصوصی, دارد حق تقدم روی عابران پیاده',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_19_1',
      italianText: 'Se un autotreno intende svoltare a destra in una strada stretta, i conducenti degli altri veicoli debbono tener presente che potrebbe diminuire notevolmente la velocità',
      farsiTranslation: 'معنی: اگر یک تریلی قصد دارد به راست در یک راه تنگ, رانندگان وسایل نقلیه باید در نظر داشته باشند ممکن است سرعت را بسیار کم کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_19_2',
      italianText: 'Se un autotreno intende svoltare a destra in una strada stretta, i conducenti degli altri veicoli debbono tener presente che nella manovra si sposti a sinistra (si allarghi)',
      farsiTranslation: 'معنی: اگر یک تریلی قصد دارد به راست در یک راه تنگ, رانندگان وسایل نقلیه باید در نظر داشته باشند مانور به چپ()',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_19_3',
      italianText: 'Se un autotreno intende svoltare a destra in una strada stretta, non bisogna stargli troppo vicino, per non essere d’intral- cio, in caso sia necessaria la manovra di retromarcia',
      farsiTranslation: 'معنی: اگر یک تریلی قصد دارد به راست در یک راه تنگ, نه باید خیلی نزدیک آن بمانند, نه ’, در لازم مانور عقب رفتن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_19_4',
      italianText: 'Se un autotreno intende svoltare a destra in un incrocio, occorre rinunciare a sorpassarlo, perché potrebbe impedire la vista di segnali o di veicoli provenienti lateralmente',
      farsiTranslation: 'معنی: اگر یک تریلی قصد دارد به راست در یک تقاطع‌هایا, لازم است از انجام آن صرف‌نظر کرد: از آن سبقت بگیرند, ممکن است دیدن را مانع شود: یا وسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_19_5',
      italianText: 'Se un autotreno intende svoltare a destra in una strada stretta, bisogna sorpassarlo subito a sinistra',
      farsiTranslation: 'معنی: اگر یک تریلی قصد دارد به راست در یک راه تنگ, باید از آن سبقت بگیرند فوراً به چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_19_6',
      italianText: 'Se un autotreno intende svoltare a destra in una strada stretta, i conducenti dei veicoli che seguono devono sorpassarlo appena aziona l’indicatore di direzione',
      farsiTranslation: 'معنی: اگر یک تریلی قصد دارد به راست در یک راه تنگ, رانندگان وسایل نقلیه که پشت سر حرکت می‌کنند باید از آن سبقت بگیرند به محض اینکه ’چراغ راهنما',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_19_7',
      italianText: 'Se un autotreno intende svoltare a destra in una strada stretta, i conducenti dei veicoli che seguono debbono azionare la segnalazione luminosa di pericolo',
      farsiTranslation: 'معنی: اگر یک تریلی قصد دارد به راست در یک راه تنگ, رانندگان وسایل نقلیه که پشت سر حرکت می‌کنند باید فعال کنند چراغ هشدار خطر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_20_1',
      italianText: 'Giungendo ad un incrocio in cui la circolazione è regolata con rotatoria, bisogna dare la precedenza ai veicoli provenien- ti da sinistra, solo se vi è il segnale DARE PRECEDENZA',
      farsiTranslation: 'معنی: هنگام رسیدن به یک تقاطع‌هایا در با میدان, باید حق تقدم بدهد وسایل نقلیه به چپ, فقط اگر تابلو دادن حق تقدم',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_20_2',
      italianText: 'Negli incroci regolati con circolazione rotatoria, in assenza di specifico segnale, vale la regola generale di dare la prece- denza a destra',
      farsiTranslation: 'معنی: تقاطع‌ها با میدان, در تابلو, اعتبار دارد قاعده عمومی حق تقدم بدهد به راست',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_20_3',
      italianText: 'Negli incroci regolati con rotatoria, la circolazione può essere disciplinata in modo che i veicoli in entrata diano la prece- denza a quelli già circolanti nell’anello',
      farsiTranslation: 'معنی: تقاطع‌ها با میدان, می‌تواند باشد در وسایل نقلیه در حال ورود حق تقدم آن‌ها در حال حرکت از قبل ’حلقه میدان',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_20_4',
      italianText: 'In un incrocio regolato con circolazione rotatoria, l’obbligo di dare la precedenza può essere imposto ai veicoli che stan- no per immettersi',
      farsiTranslation: 'معنی: در یک تقاطع‌هایا با میدان, ’وظیفه حق تقدم بدهد می‌تواند باشد وسایل نقلیه که در حال است وارد شدن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_20_5',
      italianText: 'Giungendo ad un incrocio, regolato con circolazione rotatoria, prima di immettersi è opportuno moderare la velocità ed usare la massima prudenza, controllando nel contempo il comportamento degli altri utenti',
      farsiTranslation: 'معنی: هنگام رسیدن به یک تقاطع‌هایا, با میدان, قبل از وارد شدن کم کردن سرعت و حداکثر احتیاط, رفتار سایر کاربران راه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_20_6',
      italianText: 'Se in una strada a forte pendenza, il passaggio tra veicoli non è facilmente possibile, in genere spetta al conducente che procede in discesa arrestarsi ed eventualmente fare retromarcia',
      farsiTranslation: 'معنی: اگر در یک راه شیب تند, وسایل نقلیه نه به‌آسانی ممکن, در بر عهده است به راننده حرکت می‌کند در سرازیری و عقب رفتن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_20_7',
      italianText: 'In presenza del segnale DARE PRECEDENZA, se occorre arrestarsi, bisogna che ciò avvenga in corrispondenza della striscia trasversale, formata da una serie di triangoli bianchi',
      farsiTranslation: 'معنی: در تابلو دادن حق تقدم, اگر لازم است, باید این کار انجام شود در خط عرضی, از یک مثلث‌های سفید',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_20_8',
      italianText: 'Giungendo ad un incrocio in cui la circolazione è regolata con rotatoria, è obbligatorio dare la precedenza ai veicoli provenienti da sinistra',
      farsiTranslation: 'معنی: هنگام رسیدن به یک تقاطع‌هایا در با میدان, اجباری است حق تقدم بدهد وسایل نقلیه به چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_20_9',
      italianText: 'Per immettersi in un incrocio, regolato con circolazione rotatoria, bisogna dare sempre la precedenza ai veicoli già circo- lanti all’interno della rotatoria',
      farsiTranslation: 'معنی: وارد شدن در یک تقاطع‌هایا, با میدان, باید همیشه حق تقدم وسایل نقلیه در حال حرکت از قبل ’ میدان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_20_10',
      italianText: 'In un incrocio regolato con circolazione rotatoria, i veicoli circolanti nell’anello possono effettuare manovre di retromarcia',
      farsiTranslation: 'معنی: در یک تقاطع‌هایا با میدان, وسایل نقلیه ’حلقه میدان می‌توانند انجام دهند مانورها عقب رفتن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_20_11',
      italianText: 'Quando un incrocio è regolato con rotatoria, i veicoli circolanti all’interno dell’anello possono sorpassare sia a destra che a sinistra NORME SULLA PRECEDENZA E CORTEI',
      farsiTranslation: 'معنی: وقتی یک تقاطع‌هایا با میدان, وسایل نقلیه ’ ’حلقه میدان می‌توانند سبقت بگیرند به راست به چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_21_1',
      italianText: 'Se in una strada a forte pendenza, il passaggio tra veicoli non è facilmente possibile, in genere spetta al conducente che procede in discesa arrestarsi ed eventualmente fare retromarcia',
      farsiTranslation: 'معنی: اگر در یک راه شیب تند, وسایل نقلیه نه به‌آسانی ممکن, در بر عهده است به راننده حرکت می‌کند در سرازیری و عقب رفتن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_21_2',
      italianText: 'Qualora in una strada a forte pendenza il passaggio tra veicoli risulti difficoltoso, se uno dei due conducenti si trova in vicinanza di una piazzola di scambio, spetta a lui accostare e lasciar passare l’altro conducente',
      farsiTranslation: 'معنی: اگر در یک راه شیب تند وسایل نقلیه دشوار, اگر یکی از دو رانندگان در نزدیکی یک محل کناررفتن و عبور دادن, بر عهده است و ’ راننده',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_21_3',
      italianText: 'In presenza del segnale DARE PRECEDENZA occorre usare prudenza e moderare la velocità, ma occorre arrestarsi solo in caso di necessità',
      farsiTranslation: 'معنی: در تابلو دادن حق تقدم لازم است و کم کردن سرعت, اما لازم است در ضرورت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_21_4',
      italianText: 'In presenza del segnale di STOP non occorre arrestarsi, se non vi è la linea trasversale di arresto e non si vedono sopraggiungere veicoli',
      farsiTranslation: 'معنی: در تابلوی ایست نه لازم است, اگر نه خط عرضی توقف و نه وسایل نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_21_5',
      italianText: 'Se in una strada a forte pendenza, il passaggio tra veicoli non è facilmente possibile, in genere spetta al conducente che procede in salita arrestarsi',
      farsiTranslation: 'معنی: اگر در یک راه شیب تند, وسایل نقلیه نه به‌آسانی ممکن, در بر عهده است به راننده حرکت می‌کند در سربالایی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_21_6',
      italianText: 'In vicinanza di un incrocio semaforizzato è consentito arrestarsi sulle strisce pedonali, se il semaforo per i pedoni è disposto al rosso',
      farsiTranslation: 'معنی: در نزدیکی یک تقاطع‌هایا چراغ‌های راهنمایی مجاز است روی خط‌کشی عابر پیاده, اگر چراغ راهنمایی عابران پیاده به قرمز',
      correctAnswer: 'Falso'
    }
  ]
};
