import { Chapter } from '../../types';

export const chapter9: Chapter = {
  id: 9,
  title: 'Semafori e Segnali Manuali degli Agenti',
  farsiTitle: 'چراغ‌های راهنمایی و علائم دستی مأموران',
  lessons: [
    {
      id: 'topic_9_1',
      title: '9.1 Semaforo veicolare normale',
      italianText: `La lanterna semaforica veicolare normale è posta, di regola, in corrispondenza di un incrocio e regola il transito di tutti i veicoli.

Funzionamento:
✅ Luce verde: consente di attraversare l'incrocio usando prudenza.
✅ Luce gialla fissa: preannuncia il rosso; chi ha già impegnato l'incrocio deve liberarlo.
✅ Luce rossa: impone l'arresto prima della striscia trasversale.
✅ Luce gialla lampeggiante: indica semaforo spento o guasto e impone prudenza e rispetto delle precedenze.`,
      farsiTranslation: `چراغ معمولی وسایل نقلیه معمولاً در محل تقاطع نصب می‌شود و عبور همه وسایل نقلیه را تنظیم می‌کند.

نحوه عملکرد:
✅ چراغ سبز: عبور از تقاطع را با رعایت احتیاط مجاز می‌کند.
✅ چراغ زرد ثابت: نزدیک‌شدن چراغ قرمز را اعلام می‌کند؛ کسی که وارد تقاطع شده باید آن را تخلیه کند.
✅ چراغ قرمز: توقف پیش از خط عرضی ایست را اجباری می‌کند.
✅ چراغ زرد چشمک‌زن: نشان‌دهنده خاموش یا خراب بودن چراغ است و احتیاط و رعایت حق‌تقدم را الزامی می‌کند.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_9_1_${i + 1}`)
    },
    {
      id: 'topic_9_2',
      title: '9.2 Luce rossa del semaforo',
      italianText: `La luce rossa è collocata in alto nei semafori verticali e a sinistra in quelli orizzontali. Può essere più grande delle altre luci per risultare maggiormente visibile.

Regola principale:
Quando è accesa vieta il passaggio. Il conducente deve arrestarsi prima della striscia trasversale di arresto e non deve impegnare l'incrocio, anche se sembra libero.`,
      farsiTranslation: `چراغ قرمز در چراغ‌های عمودی در بالا و در چراغ‌های افقی در سمت چپ قرار دارد. برای دیده‌شدن بهتر ممکن است از دو چراغ دیگر بزرگ‌تر باشد.

قانون اصلی:
هنگام روشن‌بودن، عبور ممنوع است. راننده باید پیش از خط عرضی ایست متوقف شود و حتی اگر تقاطع خالی به نظر برسد، وارد آن نشود.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_9_2_${i + 1}`)
    },
    {
      id: 'topic_9_3',
      title: '9.3 Luce verde del semaforo',
      italianText: `La luce verde consente di impegnare e attraversare l'incrocio usando prudenza, purché sia possibile liberarlo senza rimanere bloccati al suo interno.

Manovre consentite:
✅ Proseguire diritto.
✅ Svoltare a destra, dando precedenza ai pedoni che attraversano.
✅ Svoltare a sinistra, dando precedenza ai pedoni e ai veicoli provenienti di fronte.

Il verde non attribuisce una precedenza assoluta. Se è acceso da molto tempo, bisogna essere pronti all'accensione del giallo.`,
      farsiTranslation: `چراغ سبز اجازه ورود و عبور از تقاطع را با احتیاط می‌دهد، به شرط آنکه بتوان تقاطع را بدون متوقف‌ماندن در داخل آن تخلیه کرد.

حرکت‌های مجاز:
✅ ادامه مسیر مستقیم.
✅ گردش به راست با دادن حق‌تقدم به عابران در حال عبور.
✅ گردش به چپ با دادن حق‌تقدم به عابران و خودروهای روبه‌رو.

چراغ سبز حق‌تقدم مطلق ایجاد نمی‌کند. اگر مدت زیادی روشن بوده، باید برای روشن‌شدن زرد آماده بود.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_9_3_${i + 1}`)
    },
    {
      id: 'topic_9_4',
      title: '9.4 Luce gialla fissa del semaforo',
      italianText: `La luce gialla fissa è collocata tra il rosso e il verde. Si accende dopo lo spegnimento del verde e prima dell'accensione del rosso.

Comportamento:
✅ Fermarsi prima dell'incrocio, se è possibile farlo senza creare pericolo.
✅ Se l'incrocio è già stato impegnato, liberarlo rapidamente.

Non obbliga a tornare indietro e non consente di proseguire in ogni caso.`,
      farsiTranslation: `چراغ زرد ثابت بین قرمز و سبز قرار دارد. پس از خاموش‌شدن سبز و پیش از روشن‌شدن قرمز روشن می‌شود.

رفتار:
✅ اگر بدون ایجاد خطر ممکن است، پیش از تقاطع توقف کنید.
✅ اگر قبلاً وارد تقاطع شده‌اید، سریع آن را تخلیه کنید.

زرد ثابت راننده را مجبور به برگشت نمی‌کند و اجازه ادامه حرکت در هر شرایطی را نمی‌دهد.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_9_4_${i + 1}`)
    },
    {
      id: 'topic_9_5',
      title: '9.5 Semaforo normale: condizioni di passaggio',
      italianText: `Il semaforo veicolare normale consente il passaggio quando è accesa la luce verde.

Altri casi:
✅ Con luce gialla lampeggiante o semaforo guasto si può transitare usando massima prudenza, moderando la velocità e rispettando le precedenze.
✅ Con luce gialla fissa si può proseguire soltanto quando non è possibile fermarsi in sicurezza prima dell'incrocio.
❌ Con luce rossa non si passa, anche se l'incrocio è libero.`,
      farsiTranslation: `چراغ معمولی هنگامی اجازه عبور می‌دهد که چراغ سبز روشن باشد.

موارد دیگر:
✅ با زرد چشمک‌زن یا خرابی چراغ، می‌توان با نهایت احتیاط، کاهش سرعت و رعایت حق‌تقدم عبور کرد.
✅ با زرد ثابت فقط زمانی می‌توان ادامه داد که توقف ایمن پیش از تقاطع ممکن نباشد.
❌ با چراغ قرمز، حتی اگر تقاطع خالی باشد، عبور ممنوع است.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_9_5_${i + 1}`)
    },
    {
      id: 'topic_9_6',
      title: '9.6 Semafori veicolari di corsia: frecce',
      italianText: `I semafori veicolari di corsia regolano soltanto i veicoli diretti nel senso indicato dalla freccia luminosa.

Significato delle frecce:
✅ Freccia verde: consente di procedere nella direzione indicata.
✅ Freccia gialla fissa: chi ha già impegnato l'incrocio deve liberarlo.
✅ Freccia rossa: impone l'arresto ai veicoli diretti in quella direzione.
✅ Freccia gialla lampeggiante: permette il transito con particolare prudenza.`,
      farsiTranslation: `چراغ‌های باند فقط وسایل نقلیه‌ای را تنظیم می‌کنند که در جهت فلش روشن حرکت می‌کنند.

معنای فلش‌ها:
✅ فلش سبز: حرکت در جهت نشان‌داده‌شده مجاز است.
✅ فلش زرد ثابت: کسی که وارد تقاطع شده باید آن را تخلیه کند.
✅ فلش قرمز: وسایل نقلیه آن جهت باید توقف کنند.
✅ فلش زرد چشمک‌زن: عبور با احتیاط ویژه مجاز است.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_9_6_${i + 1}`)
    },
    {
      id: 'topic_9_7',
      title: '9.7 Semafori veicolari di corsia',
      italianText: `Le lanterne semaforiche di corsia regolano specifiche correnti di traffico mediante frecce luminose. Non permettono di procedere in tutte le direzioni: vale esclusivamente la direzione mostrata.

Non sono semafori riservati ai mezzi pubblici, ai veicoli su rotaia o alle biciclette e non si usano nei passaggi a livello, sui ponti mobili o sui pontili dei traghetti.`,
      farsiTranslation: `چراغ‌های باند، جریان‌های مشخص ترافیک را با فلش‌های روشن تنظیم می‌کنند. اجازه حرکت در همه جهت‌ها را نمی‌دهند و فقط جهت نشان‌داده‌شده معتبر است.

این چراغ‌ها مخصوص وسایل حمل‌ونقل عمومی، وسایل ریلی یا دوچرخه‌ها نیستند و در گذرگاه راه‌آهن، پل متحرک یا اسکله کشتی استفاده نمی‌شوند.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 14 }, (_, i) => `q_9_7_${i + 1}`)
    },
    {
      id: 'topic_9_8',
      title: '9.8 Semafori per veicoli di trasporto pubblico',
      italianText: `I semafori per i veicoli di trasporto pubblico sono rivolti ai conducenti di tram, autobus e taxi e funzionano in coordinamento con gli altri semafori.

Segnalazioni:
✅ Barra bianca orizzontale in alto: arresto.
✅ Barra bianca verticale in basso: via libera.
✅ Barra bianca inclinata: via libera nella direzione indicata.
✅ Triangolo giallo: preavviso di arresto.`,
      farsiTranslation: `چراغ‌های وسایل حمل‌ونقل عمومی برای رانندگان تراموا، اتوبوس و تاکسی هستند و با چراغ‌های دیگر هماهنگ کار می‌کنند.

نشانه‌ها:
✅ نوار سفید افقی در بالا: توقف.
✅ نوار سفید عمودی در پایین: اجازه حرکت.
✅ نوار سفید مورب: اجازه حرکت در جهت نشان‌داده‌شده.
✅ مثلث زرد: هشدار نزدیک‌شدن توقف.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_9_8_${i + 1}`)
    },
    {
      id: 'topic_9_9',
      title: '9.9 Segnalazioni per trasporto pubblico',
      italianText: `Le segnalazioni luminose a barre bianche regolano i veicoli di trasporto pubblico negli incroci.

La barra orizzontale impone l'arresto soltanto ai mezzi pubblici interessati; non vieta automaticamente il transito agli altri autoveicoli. Le barre verticali o inclinate indicano invece le direzioni nelle quali tali mezzi possono procedere.`,
      farsiTranslation: `نشانه‌های روشن به شکل نوار سفید، وسایل حمل‌ونقل عمومی را در تقاطع تنظیم می‌کنند.

نوار افقی فقط وسایل عمومی مربوط را متوقف می‌کند و عبور همه خودروهای دیگر را به‌طور خودکار ممنوع نمی‌کند. نوارهای عمودی یا مورب جهت‌هایی را نشان می‌دهند که این وسایل می‌توانند در آنها حرکت کنند.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_9_9_${i + 1}`)
    },
    {
      id: 'topic_9_10',
      title: '9.10 Semafori pedonali: luci',
      italianText: `Il semaforo pedonale regola l'attraversamento dei pedoni.

Significato delle luci:
✅ Verde: consente di iniziare l'attraversamento.
✅ Giallo fisso: chi è già sulla carreggiata deve completare rapidamente l'attraversamento; chi è ancora sul marciapiede deve fermarsi.
✅ Rosso: vieta di iniziare l'attraversamento.`,
      farsiTranslation: `چراغ عابر، عبور عابران پیاده را تنظیم می‌کند.

معنای چراغ‌ها:
✅ سبز: شروع عبور مجاز است.
✅ زرد ثابت: کسی که داخل سواره‌رو است باید سریع عبور را تمام کند؛ کسی که هنوز روی پیاده‌رو است باید بایستد.
✅ قرمز: شروع عبور ممنوع است.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_9_10_${i + 1}`)
    },
    {
      id: 'topic_9_11',
      title: '9.11 Semafori pedonali: funzionamento',
      italianText: `La lanterna pedonale si trova presso gli attraversamenti e può essere dotata di segnalazione acustica per le persone non vedenti.

Quando il pedone ha la luce verde, i conducenti che svoltano devono dargli la precedenza. La luce vale soltanto nella direzione verso cui è rivolta.`,
      farsiTranslation: `چراغ عابر در محل گذر عابر قرار دارد و ممکن است برای افراد نابینا هشدار صوتی داشته باشد.

وقتی عابر چراغ سبز دارد، رانندگانی که می‌پیچند باید به او حق‌تقدم بدهند. چراغ فقط برای جهتی معتبر است که رو به آن قرار گرفته است.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_9_11_${i + 1}`)
    },
    {
      id: 'topic_9_12',
      title: '9.12 Semafori per ciclisti',
      italianText: `Il semaforo per velocipedi è riservato alle biciclette e, sulle piste ciclabili, regola l'attraversamento della carreggiata.

Funzionamento:
✅ Verde: consente ai velocipedi di attraversare.
✅ Giallo fisso: chi ha già impegnato l'incrocio deve liberarlo.
✅ Rosso: impone l'arresto.

Non vale per motocicli e ciclomotori e non indica una gara o una corsia riservata.`,
      farsiTranslation: `چراغ دوچرخه مخصوص دوچرخه‌هاست و در مسیر دوچرخه عبور از سواره‌رو را تنظیم می‌کند.

عملکرد:
✅ سبز: عبور دوچرخه‌ها را مجاز می‌کند.
✅ زرد ثابت: دوچرخه‌سواری که وارد تقاطع شده باید آن را تخلیه کند.
✅ قرمز: توقف را اجباری می‌کند.

برای موتورسیکلت و موتورگازی معتبر نیست و مسابقه یا باند اختصاصی را نشان نمی‌دهد.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_9_12_${i + 1}`)
    },
    {
      id: 'topic_9_13',
      title: '9.13 Semafori per corsie reversibili: freccia gialla',
      italianText: `Le lanterne per corsie reversibili sono poste sopra corsie il cui senso di marcia può cambiare.

La freccia gialla lampeggiante avvisa che la corsia sta per essere chiusa: chi la percorre deve abbandonarla al più presto e spostarsi verso una corsia indicata dalla freccia verde.`,
      farsiTranslation: `چراغ‌های باند برگشت‌پذیر بالای باندهایی نصب می‌شوند که جهت حرکت آنها می‌تواند تغییر کند.

فلش زرد چشمک‌زن هشدار می‌دهد که باند در حال بسته‌شدن است؛ راننده باید هرچه زودتر آن را ترک کند و به باندی با فلش سبز برود.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_9_13_${i + 1}`)
    },
    {
      id: 'topic_9_14',
      title: '9.14 Semafori per corsie reversibili',
      italianText: `Nei semafori per corsie reversibili:
✅ La freccia verde indica una corsia percorribile.
✅ La X rossa vieta di occupare la corsia sottostante.
✅ La freccia gialla lampeggiante impone di lasciare la corsia.

Con la X rossa non ci si ferma in attesa del verde: quella corsia non deve essere utilizzata.`,
      farsiTranslation: `در چراغ‌های باند برگشت‌پذیر:
✅ فلش سبز نشان‌دهنده باند قابل استفاده است.
✅ علامت X قرمز استفاده از باند زیر آن را ممنوع می‌کند.
✅ فلش زرد چشمک‌زن دستور ترک باند را می‌دهد.

زیر X قرمز نباید منتظر سبز توقف کرد؛ آن باند اصلاً نباید استفاده شود.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_9_14_${i + 1}`)
    },
    {
      id: 'topic_9_15',
      title: '9.15 Luce gialla lampeggiante',
      italianText: `La luce gialla lampeggiante è una segnalazione di pericolo generico. Può essere usata quando il semaforo è spento o guasto oppure in punti particolarmente pericolosi.

Comportamento:
Moderare la velocità, procedere con particolare prudenza e rispettare le normali regole di precedenza, in particolare quella a destra.`,
      farsiTranslation: `چراغ زرد چشمک‌زن هشدار خطر عمومی است. ممکن است هنگام خاموش یا خراب بودن چراغ یا در نقاط به‌خصوص خطرناک استفاده شود.

رفتار:
سرعت را کم کنید، با احتیاط ویژه حرکت کنید و قواعد عادی حق‌تقدم، به‌خصوص حق‌تقدم سمت راست، را رعایت کنید.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_9_15_${i + 1}`)
    },
    {
      id: 'topic_9_16',
      title: '9.16 Luci gialle lampeggianti di tipo B e C',
      italianText: `Le luci gialle lampeggianti di tipo B e C sono affiancate a un semaforo veicolare normale.

Funzione:
✅ Tipo B: ricorda a chi svolta di dare precedenza ai pedoni.
✅ Tipo C: ricorda a chi svolta di dare precedenza ai ciclisti.

Sono luci lampeggianti di richiamo, non semafori pedonali o ciclabili.`,
      farsiTranslation: `چراغ‌های زرد چشمک‌زن نوع B و C کنار چراغ معمولی نصب می‌شوند.

کارکرد:
✅ نوع B: به راننده در حال گردش یادآوری می‌کند به عابران حق‌تقدم بدهد.
✅ نوع C: به راننده در حال گردش یادآوری می‌کند به دوچرخه‌سواران حق‌تقدم بدهد.

اینها چراغ یادآوری چشمک‌زن هستند، نه چراغ مستقل عابر یا دوچرخه.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_9_16_${i + 1}`)
    },
    {
      id: 'topic_9_17',
      title: '9.17 Luci rosse lampeggianti',
      italianText: `Le due luci rosse lampeggianti alternativamente vietano il passaggio a veicoli e pedoni. Bisogna arrestarsi prima della striscia trasversale o del limite indicato.

Possono trovarsi presso passaggi a livello, ponti mobili, accessi ai traghetti o zone interessate dal movimento di aeromobili. Non indicano un semplice pericolo generico.`,
      farsiTranslation: `دو چراغ قرمز که به‌صورت متناوب چشمک می‌زنند، عبور خودروها و عابران را ممنوع می‌کنند. باید پیش از خط عرضی یا محدوده مشخص‌شده توقف کرد.

ممکن است در گذرگاه راه‌آهن، پل متحرک، ورودی کشتی یا ناحیه حرکت هواپیما دیده شوند. نشان‌دهنده یک خطر عمومی ساده نیستند.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_9_17_${i + 1}`)
    },
    {
      id: 'topic_9_18',
      title: '9.18 Luci rosse lampeggianti ai passaggi a livello',
      italianText: `Ai passaggi a livello senza barriere o con semibarriere, le luci rosse lampeggianti si attivano prima dell'arrivo del treno o prima dell'abbassamento delle semibarriere e rimangono in funzione fino al termine del passaggio.

Nei passaggi a livello con barriere complete si usa invece una sola luce rossa fissa.`,
      farsiTranslation: `در گذرگاه راه‌آهن بدون مانع یا دارای نیم‌مانع، چراغ‌های قرمز چشمک‌زن پیش از رسیدن قطار یا پیش از پایین‌آمدن نیم‌مانع روشن می‌شوند و تا پایان عبور قطار فعال می‌مانند.

در گذرگاه دارای مانع کامل، به‌جای آن یک چراغ قرمز ثابت استفاده می‌شود.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 14 }, (_, i) => `q_9_18_${i + 1}`)
    },
    {
      id: 'topic_9_19',
      title: '9.19 Comportamento al passaggio a livello',
      italianText: `Avvicinandosi a un passaggio a livello con le luci rosse lampeggianti accese, bisogna arrestarsi prima della linea di arresto.

Il divieto vale anche se la semibarriera è ancora alzata. Si può ripartire soltanto dopo lo spegnimento delle luci e quando l'attraversamento è nuovamente libero.`,
      farsiTranslation: `هنگام نزدیک‌شدن به گذرگاه راه‌آهن با چراغ قرمز چشمک‌زن، باید پیش از خط ایست توقف کرد.

حتی اگر نیم‌مانع هنوز بالاست، ممنوعیت معتبر است. فقط پس از خاموش‌شدن چراغ‌ها و آزادشدن دوباره گذرگاه می‌توان حرکت کرد.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_9_19_${i + 1}`)
    },
    {
      id: 'topic_9_20',
      title: '9.20 Semafori di onda verde',
      italianText: `Le lanterne speciali di “onda verde” sono installate lungo itinerari con più incroci semaforizzati.

Un simbolo luminoso bianco consiglia la velocità da mantenere per incontrare la luce verde ai semafori successivi. La velocità indicata è consigliata, non obbligatoria, ed è valida soltanto quando il segnale è acceso.`,
      farsiTranslation: `چراغ‌های ویژه «موج سبز» در مسیرهایی با چند تقاطع چراغ‌دار نصب می‌شوند.

یک علامت سفید روشن، سرعت پیشنهادی برای رسیدن به چراغ سبز در تقاطع‌های بعدی را نشان می‌دهد. این سرعت پیشنهادی است، نه اجباری، و فقط هنگام روشن‌بودن علامت اعتبار دارد.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 15 }, (_, i) => `q_9_20_${i + 1}`)
    },
    {
      id: 'topic_9_21',
      title: '9.21 Prevalenza tra agente, semaforo e segnali di precedenza',
      italianText: `Quando nello stesso punto sono presenti un agente del traffico, un semaforo e un segnale di precedenza, bisogna rispettare il seguente ordine:

1. Le segnalazioni dell'agente prevalgono su tutto.
2. Il semaforo in funzione prevale sui segnali verticali.
3. Se il semaforo è spento o mostra il giallo lampeggiante, tornano validi i segnali verticali e le normali regole di precedenza.

Applicazione ai sensi unici alternati:
✅ Con semaforo verde si segue il verde.
✅ Con semaforo rosso ci si arresta, salvo diversa disposizione dell'agente.
✅ Con semaforo spento o giallo lampeggiante si rispettano i segnali “Dare precedenza” o “Diritto di precedenza”.

Il significato generale di questi due segnali è studiato nel capitolo dei segnali di precedenza.`,
      farsiTranslation: `وقتی در یک محل هم‌زمان مأمور راهنمایی، چراغ راهنمایی و تابلوی حق‌تقدم وجود دارند، باید ترتیب زیر رعایت شود:

۱. دستور مأمور بر همه‌چیز مقدم است.
۲. چراغ راهنماییِ فعال بر تابلوهای عمودی مقدم است.
۳. اگر چراغ خاموش باشد یا زرد چشمک‌زن نشان دهد، تابلوهای عمودی و قواعد عادی حق‌تقدم دوباره معتبر می‌شوند.

کاربرد در مسیرهای یک‌طرفه متناوب:
✅ با چراغ سبز، دستور چراغ سبز رعایت می‌شود.
✅ با چراغ قرمز باید توقف کرد، مگر اینکه مأمور دستور دیگری بدهد.
✅ با چراغ خاموش یا زرد چشمک‌زن، تابلوهای «دادن حق‌تقدم» یا «داشتن حق‌تقدم» رعایت می‌شوند.

معنای اصلی این دو تابلو در فصل تابلوهای حق‌تقدم آموزش داده شده است.`,
      vocabularyIds: [],
      questionIds: [
        'q_9_21_1', 'q_9_21_2', 'q_9_21_3', 'q_9_21_4',
        'q_9_21_5', 'q_9_21_6', 'q_9_21_7', 'q_9_21_8',
        'q_9_22_1', 'q_9_22_2', 'q_9_22_3', 'q_9_22_4', 'q_9_22_5',
        'q_9_22_6', 'q_9_22_7', 'q_9_22_8', 'q_9_22_9'
      ]
    },
    {
      id: 'topic_9_23',
      title: '9.23 Vigile di fronte o di spalle: ALT',
      italianText: `Quando il vigile è rivolto verso di noi o ci mostra le spalle con le braccia aperte, la sua posizione equivale alla luce rossa.

Comportamento:
❌ Non si può attraversare l'incrocio.
❌ Non si può svoltare a destra o a sinistra.
✅ Bisogna fermarsi prima della striscia trasversale di arresto.`,
      farsiTranslation: `وقتی مأمور روبه‌روی ما یا پشت به ماست و دست‌هایش را باز کرده، وضعیت او معادل چراغ قرمز است.

رفتار:
❌ عبور از تقاطع مجاز نیست.
❌ گردش به راست یا چپ مجاز نیست.
✅ باید پیش از خط عرضی ایست توقف کرد.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_9_23_${i + 1}`)
    },
    {
      id: 'topic_9_24',
      title: '9.24 Vigile di profilo: AVANTI',
      italianText: `Quando il vigile è disposto di profilo rispetto alla nostra direzione, con le braccia aperte, la sua posizione equivale alla luce verde.

È consentito attraversare l'incrocio, proseguire diritto o svoltare. Nelle svolte bisogna comunque dare precedenza ai pedoni e, svoltando a sinistra, ai veicoli provenienti di fronte.`,
      farsiTranslation: `وقتی مأمور نسبت به جهت حرکت ما از پهلو قرار دارد و دست‌هایش باز است، وضعیت او معادل چراغ سبز است.

عبور از تقاطع، ادامه مستقیم یا گردش مجاز است. هنگام گردش همچنان باید به عابران و در گردش به چپ به خودروهای روبه‌رو حق‌تقدم داد.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_9_24_${i + 1}`)
    },
    {
      id: 'topic_9_25',
      title: '9.25 Vigile con un braccio alzato: ATTENZIONE',
      italianText: `Il vigile con un braccio alzato indica attenzione e la sua posizione equivale alla luce gialla fissa.

Bisogna fermarsi prima dell'incrocio se è possibile farlo in sicurezza. Chi ha già impegnato l'incrocio deve liberarlo rapidamente. La posizione preannuncia un cambiamento delle correnti di traffico autorizzate.`,
      farsiTranslation: `مأمور با یک دست بالا علامت توجه می‌دهد و وضعیت او معادل چراغ زرد ثابت است.

اگر توقف ایمن ممکن است باید پیش از تقاطع توقف کرد. کسی که وارد تقاطع شده باید سریع آن را تخلیه کند. این وضعیت تغییر جریان‌های مجاز ترافیک را اعلام می‌کند.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_9_25_${i + 1}`)
    },
    {
      id: 'topic_9_26',
      title: '9.26 Vigile con braccia ad angolo retto',
      italianText: `Quando il vigile tiene le braccia ad angolo retto, possono procedere diritto o svoltare soltanto i veicoli provenienti dalla sua sinistra.

Devono invece arrestarsi i veicoli provenienti dalla sua destra, quelli che lo vedono di fronte e quelli che lo vedono di spalle.`,
      farsiTranslation: `وقتی مأمور دست‌ها را به شکل زاویه قائمه نگه می‌دارد، فقط خودروهایی که از سمت چپ او می‌آیند می‌توانند مستقیم بروند یا گردش کنند.

خودروهایی که از سمت راست مأمور می‌آیند و همچنین کسانی که مأمور را از روبه‌رو یا پشت می‌بینند باید توقف کنند.`,
      vocabularyIds: [],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_9_26_${i + 1}`)
    }
  ],
  questions: [
    // 9.1 Semaforo veicolare normale
    {
      id: 'q_9_1_1',
      italianText: 'Il segnale luminoso in figura è un semaforo per i veicoli',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo veicolare normale» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_1_2',
      italianText: 'Il semaforo in figura è posto, di norma, in un incrocio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo veicolare normale» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_1_3',
      italianText: 'Il semaforo in figura serve, di norma, a regolare il passaggio dei veicoli in un incrocio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo veicolare normale» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_1_4',
      italianText: 'Il semaforo in figura, con luce gialla fissa accesa, consente l’attraversamento dell’incrocio, se lo si è già impegnato',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo veicolare normale» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_1_5',
      italianText: 'Il semaforo in figura non vale per i veicoli in servizio di linea per trasporto di persone',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo veicolare normale» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_1_6',
      italianText: 'Il segnale luminoso in figura è un semaforo che non vale per le biciclette',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo veicolare normale» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_1_7',
      italianText: 'Il semaforo in figura si trova in tutti i caselli autostradali',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo veicolare normale» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_1_8',
      italianText: 'Il semaforo in figura si trova in vicinanza dei binari ferroviari',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo veicolare normale» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_1_9',
      italianText: 'Il semaforo in figura, con luce gialla lampeggiante accesa, non consente il transito dei veicoli',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo veicolare normale» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.2 Luce rossa del semaforo
    {
      id: 'q_9_2_1',
      italianText: 'In presenza della luce semaforica rossa i veicoli devono arrestarsi',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce rossa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_2_2',
      italianText: 'Nei semafori sistemati in verticale la luce rossa si trova in alto, in quelli posti in orizzontale si trova a sinistra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce rossa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_2_3',
      italianText: 'Nel semaforo la luce rossa può essere di dimensioni più grandi delle altre',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce rossa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_2_4',
      italianText: 'Quando è accesa la luce rossa del semaforo bisogna arrestarsi prima della striscia trasversale d’arresto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce rossa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_2_5',
      italianText: 'Durante il periodo di accensione della luce rossa i veicoli non devono superare la striscia di arresto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce rossa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_2_6',
      italianText: 'La luce rossa accesa del semaforo consente di svoltare a destra con prudenza, dando precedenza ai pedoni che attra- versano la strada',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce rossa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_2_7',
      italianText: 'La luce rossa accesa del semaforo consente di ripartire lentamente quando appare il giallo per gli altri veicoli',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce rossa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_2_8',
      italianText: 'La luce rossa accesa del semaforo consente di impegnare l’incrocio con molta prudenza a condizione che non ci siano altri veicoli o pedoni',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce rossa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_2_9',
      italianText: 'La luce rossa accesa del semaforo consente l’attraversamento dell’incrocio, purché sia libero',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce rossa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_2_10',
      italianText: 'La luce rossa accesa del semaforo obbliga ad affrettarsi per liberare velocemente l’incrocio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce rossa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.3 Luce verde del semaforo
    {
      id: 'q_9_3_1',
      italianText: 'Quando è accesa la luce verde del semaforo in figura è possibile svoltare a sinistra, dando la precedenza ai veicoli che arrivano di fronte',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_3_2',
      italianText: 'Quando è accesa la luce verde del semaforo in figura si può svoltare a destra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_3_3',
      italianText: 'Quando è accesa la luce verde del semaforo in figura si può proseguire diritto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_3_4',
      italianText: 'Quando è accesa la luce verde del semaforo in figura si può impegnare l’incrocio, soltanto avendo la certezza di poterlo sgomberare prima dell’accensione della luce rossa',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_3_5',
      italianText: 'Quando è accesa la luce verde del semaforo in figura si può attraversare l’incrocio, usando prudenza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_3_6',
      italianText: 'Avvicinandosi ad un semaforo, che già da molto tempo ha la luce verde accesa, occorre proseguire con prudenza, pron- ti eventualmente a fermarsi se, quando si accende la luce gialla, non si è ancora impegnato l’incrocio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_3_7',
      italianText: 'Avvicinandosi ad un semaforo, che già da molto tempo ha la luce verde accesa, occorre accelerare, senza che vi sia necessità di guardare la luce del semaforo',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_3_8',
      italianText: 'Quando è accesa la luce verde del semaforo in figura si può svoltare a sinistra, ma solo quando si accende anche la luce gialla',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_3_9',
      italianText: 'Quando è accesa la luce verde del semaforo in figura, il conducente che svolta a sinistra ha la precedenza sui veicoli che provengono di fronte',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_3_10',
      italianText: 'Quando è accesa la luce verde del semaforo in figura si può svoltare solo se la carreggiata è divisa in corsie',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_3_11',
      italianText: 'Quando è accesa la luce verde del semaforo in figura si deve proseguire diritto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_3_12',
      italianText: 'Quando è accesa la luce verde del semaforo in figura si può proseguire diritto, dando però la precedenza ai pedoni',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce verde del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.4 Luce gialla fissa del semaforo
    {
      id: 'q_9_4_1',
      italianText: 'La luce gialla fissa si accende appena si spegne il verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_4_2',
      italianText: 'La luce gialla fissa si spegne prima che si accenda il rosso',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_4_3',
      italianText: 'La luce gialla fissa obbliga chi ha già impegnato l’incrocio a liberarlo al più presto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_4_4',
      italianText: 'La luce gialla fissa obbliga a fermarsi prima del punto di arresto, purché lo si possa fare senza creare pericolo',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_4_5',
      italianText: 'La luce gialla fissa si accende quando il verde e il rosso sono spenti',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_4_6',
      italianText: 'La luce gialla fissa consente in ogni caso di proseguire impegnando l’incrocio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_4_7',
      italianText: 'La luce gialla fissa obbliga il conducente a tornare indietro se ha già superato la striscia trasversale di arresto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_4_8',
      italianText: 'La luce gialla fissa ci obbliga ad arrestarci in ogni caso, senza impegnare l’incrocio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_4_9',
      italianText: 'La luce gialla fissa si accende quando è ancora accesa quella rossa',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_4_10',
      italianText: 'La luce gialla fissa si spegne insieme con il verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_4_11',
      italianText: 'La luce gialla fissa si accende insieme con il rosso',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla fissa del semaforo» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.5 Semaforo normale: condizioni di passaggio
    {
      id: 'q_9_5_1',
      italianText: 'Incontrando il semaforo in figura è consentito il passaggio quando è accesa la luce verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo normale: condizioni di passaggio» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_5_2',
      italianText: 'Incontrando il semaforo in figura è consentito il passaggio quando si accende la luce gialla fissa, solo se non ci si può arrestare in condizioni di sicurezza prima dell’incrocio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo normale: condizioni di passaggio» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_5_3',
      italianText: 'Incontrando il semaforo in figura è consentito il passaggio quando è accesa la luce gialla lampeggiante, usando però la massima prudenza e moderando la velocità',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo normale: condizioni di passaggio» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_5_4',
      italianText: 'Incontrando il semaforo in figura è consentito il passaggio quando esso è spento, usando però la massima prudenza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo normale: condizioni di passaggio» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_5_5',
      italianText: 'Incontrando il segnale luminoso in figura è consentito il passaggio in caso di semaforo guasto, usando però la massima prudenza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo normale: condizioni di passaggio» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_5_6',
      italianText: 'Incontrando il semaforo in figura è consentito il passaggio poco prima che si accenda la luce verde, purché sia già acce- sa quella rossa per gli altri veicoli',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo normale: condizioni di passaggio» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_5_7',
      italianText: 'Incontrando il semaforo in figura è consentito il passaggio quando si accende la luce rossa, usando la massima prudenza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo normale: condizioni di passaggio» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_5_8',
      italianText: 'Incontrando il semaforo in figura è consentito il passaggio quando, pur essendo accesa la luce rossa, non vengono veicoli dalle altre direzioni',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semaforo normale: condizioni di passaggio» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.6 Semafori veicolari di corsia: frecce
    {
      id: 'q_9_6_1',
      italianText: 'Nei semafori in figura le frecce verdi accese indicano le direzioni verso le quali si può proseguire',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia: frecce» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_6_2',
      italianText: 'Nei semafori in figura le frecce rosse accese indicano che non si può proseguire nelle direzioni indicate',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia: frecce» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_6_3',
      italianText: 'Nei semafori in figura le frecce gialle fisse accese indicano di liberare l’incrocio, qualora sia stato già impegnato, o di arrestarsi in condizioni di sicurezza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia: frecce» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_6_4',
      italianText: 'Nel semaforo in figura le frecce gialle lampeggianti accese indicano di attraversare l’incrocio con particolare prudenza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia: frecce» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_6_5',
      italianText: 'Nel semaforo in figura le frecce verdi accese, rivolte verso l’alto, indicano che si può proseguire in tutte le direzioni',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia: frecce» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_6_6',
      italianText: 'Nel semaforo in figura le frecce rosse accese indicano di proseguire con prudenza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia: frecce» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.7 Semafori veicolari di corsia
    {
      id: 'q_9_7_1',
      italianText: 'I segnali luminosi in figura sono semafori di corsia',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_7_2',
      italianText: 'Il semaforo in figura riguarda i veicoli che devono proseguire nella direzione della freccia',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_7_3',
      italianText: 'Il semaforo in figura consente di proseguire nella sola direzione della freccia verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_7_4',
      italianText: 'I semafori in figura, se spenti consentono di passare con particolare prudenza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_7_5',
      italianText: 'I semafori di corsia in figura, con freccia rossa accesa impongono l’arresto dei veicoli diretti nel senso della freccia',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_7_6',
      italianText: 'I semafori in figura, con freccia gialla fissa accesa, impongono di liberare immediatamente l’incrocio, se lo si è già impe- gnato',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_7_7',
      italianText: 'I segnali luminosi in figura valgono anche per le biciclette',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_7_8',
      italianText: 'I segnali luminosi in figura sono semafori per i veicoli in servizio di linea per trasporto di persone',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_7_9',
      italianText: 'I segnali luminosi in figura sono semafori per i veicoli su rotaie (tram, treni)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_7_10',
      italianText: 'I segnali luminosi in figura sono posti all’inizio di una galleria',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_7_11',
      italianText: 'I semafori in figura vengono utilizzati negli accessi ai ponti mobili',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_7_12',
      italianText: 'I semafori in figura regolano l’ingresso sul pontile d’imbarco di navi traghetto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_7_13',
      italianText: 'I semafori in figura regolano l’attraversamento di un passaggio a livello',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_7_14',
      italianText: 'I segnali luminosi in figura sono semafori per corsie reversibili',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori veicolari di corsia» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.8 Semafori per veicoli di trasporto pubblico
    {
      id: 'q_9_8_1',
      italianText: 'Il semaforo in figura può avere la luce bianca orizzontale accesa',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per veicoli di trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_8_2',
      italianText: 'Il semaforo in figura può avere la luce bianca verticale accesa',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per veicoli di trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_8_3',
      italianText: 'Il segnale luminoso in figura indica un semaforo per i veicoli di trasporto pubblico',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per veicoli di trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_8_4',
      italianText: 'Il semaforo in figura è un semaforo pedonale',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per veicoli di trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_8_5',
      italianText: 'Il semaforo in figura preannuncia lavori in corso',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per veicoli di trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_8_6',
      italianText: 'Il semaforo in figura indica i possibili scambi dei binari tranviari',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per veicoli di trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_8_7',
      italianText: 'Il semaforo in figura impone ai motocicli di rallentare quando è acceso il triangolo giallo',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per veicoli di trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_8_8',
      italianText: 'Il semaforo in figura vale per i veicoli con targa militare',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per veicoli di trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.9 Segnalazioni per trasporto pubblico
    {
      id: 'q_9_9_1',
      italianText: 'Il semaforo in figura vale per i veicoli in servizio di linea per trasporto di persone',
      farsiTranslation: 'این پرسش رسمی مربوط به «Segnalazioni per trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_9_2',
      italianText: 'Il semaforo in figura impone l’arresto ai veicoli in servizio di linea per trasporto di persone quando è accesa la barra bianca in alto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Segnalazioni per trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_9_3',
      italianText: 'Il semaforo in figura consente ai veicoli di trasporto pubblico di persone di proseguire quando in basso è accesa la barra bianca',
      farsiTranslation: 'این پرسش رسمی مربوط به «Segnalazioni per trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_9_4',
      italianText: 'Il semaforo in figura è valido solo per i veicoli che marciano su rotaie (tram, treni)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Segnalazioni per trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_9_5',
      italianText: 'Il semaforo in figura regola il transito dei pedoni',
      farsiTranslation: 'این پرسش رسمی مربوط به «Segnalazioni per trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_9_6',
      italianText: 'Il semaforo in figura indica un passaggio a livello senza barriere',
      farsiTranslation: 'این پرسش رسمی مربوط به «Segnalazioni per trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_9_7',
      italianText: 'Il semaforo in figura regola il transito nei pontili per l’imbarco sulle navi traghetto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Segnalazioni per trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_9_8',
      italianText: 'Il semaforo in figura indica la vicinanza di una stazione ferroviaria',
      farsiTranslation: 'این پرسش رسمی مربوط به «Segnalazioni per trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_9_9',
      italianText: 'Il semaforo in figura, con il triangolo giallo acceso, preavvisa lavori in corso',
      farsiTranslation: 'این پرسش رسمی مربوط به «Segnalazioni per trasporto pubblico» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.10 Semafori pedonali: luci
    {
      id: 'q_9_10_1',
      italianText: 'La luce verde accesa del semaforo in figura permette ai pedoni l’attraversamento',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: luci» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_10_2',
      italianText: 'La luce verde accesa del semaforo in figura consente ai pedoni di attraversare la strada',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: luci» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_10_3',
      italianText: 'La luce verde accesa del semaforo in figura consente ai pedoni di impegnare la carreggiata per attraversarla',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: luci» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_10_4',
      italianText: 'Il semaforo in figura indica una scala mobile in funzione',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: luci» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_10_5',
      italianText: 'La luce verde accesa del semaforo in figura consente il passaggio solo dei veicoli',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: luci» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_10_6',
      italianText: 'La luce verde accesa del semaforo in figura obbliga i pedoni a dare la precedenza ai veicoli che svoltano',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: luci» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_10_7',
      italianText: 'Il semaforo in figura segnala un ascensore pubblico',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: luci» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_10_8',
      italianText: 'Il semaforo in figura segnala la presenza di una scuola elementare, per cui bisogna rallentare',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: luci» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_10_9',
      italianText: 'La luce verde del semaforo in figura è sempre accesa durante l’uscita degli studenti dalla scuola',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: luci» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.11 Semafori pedonali: funzionamento
    {
      id: 'q_9_11_1',
      italianText: 'Il semaforo in figura regola il passaggio dei pedoni negli incroci',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: funzionamento» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_11_2',
      italianText: 'Il segnale luminoso in figura è un semaforo per i pedoni',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: funzionamento» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_11_3',
      italianText: 'Il semaforo in figura, con luce gialla fissa accesa, impone ai pedoni che hanno già occupato l’attraversamento pedonale di liberarlo rapidamente',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: funzionamento» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_11_4',
      italianText: 'Il semaforo in figura, con luce rossa accesa impone ai pedoni di non attraversare',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: funzionamento» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_11_5',
      italianText: 'Il segnale luminoso in figura indica la presenza di una scuola',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: funzionamento» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_11_6',
      italianText: 'Il semaforo in figura indica lo svolgimento di una gara podistica',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: funzionamento» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_11_7',
      italianText: 'Nelle aree di servizio autostradali il semaforo in figura indica i sottopassaggi pedonali',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: funzionamento» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_11_8',
      italianText: 'Il semaforo in figura si trova all’ingresso della metropolitana',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: funzionamento» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_11_9',
      italianText: 'Il semaforo in figura indica i cancelli di imbarco nelle aree portuali',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: funzionamento» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_11_10',
      italianText: 'Il semaforo in figura indica l’entrata di una struttura sportiva',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori pedonali: funzionamento» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.12 Semafori per ciclisti
    {
      id: 'q_9_12_1',
      italianText: 'Il semaforo in figura si trova all’uscita di una pista ciclabile, per regolare l’attraversamento della strada',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_12_2',
      italianText: 'Il segnale luminoso in figura è un semaforo riservato ai conducenti di biciclette',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_12_3',
      italianText: 'Il semaforo in figura, con luce rossa accesa, impone l’arresto alle biciclette',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_12_4',
      italianText: 'Il semaforo in figura, con luce gialla fissa accesa, impone ai conducenti di biciclette di liberare velocemente l’incrocio se lo hanno già impegnato',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_12_5',
      italianText: 'Il semaforo in figura, con luce verde accesa, consente soltanto ai conducenti di biciclette di attraversare l’incrocio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_12_6',
      italianText: 'Il semaforo in figura indica una corsia riservata alle biciclette e ai ciclomotori',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_12_7',
      italianText: 'Il semaforo in figura indica lo svolgimento di una gara ciclistica',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_12_8',
      italianText: 'Il semaforo in figura indica che ci sono lavori in corso per la costruzione di una pista ciclabile',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_12_9',
      italianText: 'Il semaforo in figura indica una corsia riservata ai motocicli',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_12_10',
      italianText: 'Il semaforo in figura indica il divieto di transito per le biciclette',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_12_11',
      italianText: 'Il semaforo in figura vale per tutti i veicoli a due ruote',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per ciclisti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.13 Semafori per corsie reversibili: freccia gialla
    {
      id: 'q_9_13_1',
      italianText: 'Il semaforo di corsie reversibili in figura è posto su una carreggiata con almeno tre corsie',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili: freccia gialla» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_13_2',
      italianText: 'Il semaforo di corsie reversibili in figura consente il transito nella corsia indicata dalla freccia verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili: freccia gialla» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_13_3',
      italianText: 'Il semaforo di corsie reversibili in figura, con freccia gialla lampeggiante impone al conducente di abbandonare quella corsia e di spostarsi in quella indicata',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili: freccia gialla» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_13_4',
      italianText: 'Il semaforo di corsie reversibili in figura indica la corsia per i veicoli lenti',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili: freccia gialla» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_13_5',
      italianText: 'Il semaforo di corsie reversibili in figura indica la corsia per la sosta di emergenza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili: freccia gialla» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_13_6',
      italianText: 'Il semaforo di corsie reversibili in figura indica la corsia riservata al sorpasso',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili: freccia gialla» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_13_7',
      italianText: 'Il semaforo di corsie reversibili in figura è posto solo su carreggiate a senso unico di circolazione',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili: freccia gialla» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.14 Semafori per corsie reversibili
    {
      id: 'q_9_14_1',
      italianText: 'I segnali luminosi in figura sono semafori per corsie reversibili',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_14_2',
      italianText: 'Il semaforo in figura non consente di occupare la corsia indicata con luce rossa a forma di X',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_14_3',
      italianText: 'Il semaforo in figura consente di impegnare la corsia indicata dalla freccia verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_14_4',
      italianText: 'Nei semafori in figura la luce gialla lampeggiante obbliga il conducente a spostarsi nella corsia indicata dalla freccia',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_14_5',
      italianText: 'Il semaforo in figura non consente di occupare le corsie indicate dalle frecce verdi',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_14_6',
      italianText: 'Il semaforo in figura vale anche per i pedoni',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_14_7',
      italianText: 'Nei semafori in figura, la luce rossa a forma di X impone di arrestarsi ed attendere la luce gialla',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_14_8',
      italianText: 'Il semaforo in figura non vale per le biciclette',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori per corsie reversibili» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.15 Luce gialla lampeggiante
    {
      id: 'q_9_15_1',
      italianText: 'È possibile trovare la luce gialla lampeggiante quando le altre sono spente (FIG 154)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla lampeggiante» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_15_2',
      italianText: 'La luce circolare gialla lampeggiante (tipo A di figura) è un segnale di pericolo generico (FIG 160)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla lampeggiante» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_15_3',
      italianText: 'La luce circolare gialla lampeggiante (tipo A di figura) invita a moderare la velocità (FIG 160)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla lampeggiante» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_15_4',
      italianText: 'La luce circolare gialla lampeggiante (tipo A di figura) invita a procedere con particolare prudenza (FIG 160)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla lampeggiante» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_15_5',
      italianText: 'Nel semaforo la luce gialla lampeggiante impone l’arresto sempre prima dell’incrocio (FIG 154)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla lampeggiante» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_15_6',
      italianText: 'La luce circolare gialla lampeggiante (tipo A di figura) può essere posta prima di un ponte mobile (FIG 160)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla lampeggiante» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_15_7',
      italianText: 'La luce circolare gialla lampeggiante (tipo A di figura) può essere posta prima di un pontile d’imbarco di navi traghetto (FIG 160)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla lampeggiante» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_15_8',
      italianText: 'La luce gialla lampeggiante insieme a quella rossa in figura indica pericolo (FIG 154)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luce gialla lampeggiante» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.16 Luci gialle lampeggianti di tipo B e C
    {
      id: 'q_9_16_1',
      italianText: 'La luce gialla lampeggiante, del tipo B o C in figura, è affiancata al semaforo veicolare',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci gialle lampeggianti di tipo B e C» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_16_2',
      italianText: 'La luce gialla lampeggiante, del tipo C in figura, indica che svoltando a destra i veicoli devono dare la precedenza alle biciclette',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci gialle lampeggianti di tipo B e C» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_16_3',
      italianText: 'La luce gialla lampeggiante, del tipo B in figura, indica che nello svoltare a destra i veicoli debbono dare la precedenza ai pedoni',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci gialle lampeggianti di tipo B e C» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_16_4',
      italianText: 'La luce gialla lampeggiante, del tipo A in figura, può essere posta in punti pericolosi della strada',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci gialle lampeggianti di tipo B e C» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_16_5',
      italianText: 'La luce gialla lampeggiante, del tipo C in figura, indica una corsia riservata a tutti i veicoli a due ruote',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci gialle lampeggianti di tipo B e C» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_16_6',
      italianText: 'La luce gialla lampeggiante, del tipo B in figura, indica la presenza di un viale pedonale',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci gialle lampeggianti di tipo B e C» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_16_7',
      italianText: 'La luce gialla lampeggiante, del tipo A in figura, è un semaforo per i veicoli in servizio di linea per trasporto di persone',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci gialle lampeggianti di tipo B e C» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_16_8',
      italianText: 'La luce gialla lampeggiante, del tipo C in figura, indica una corsia riservata ai ciclomotori',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci gialle lampeggianti di tipo B e C» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.17 Luci rosse lampeggianti
    {
      id: 'q_9_17_1',
      italianText: 'Le luci rosse accese lampeggianti in figura obbligano ad arrestarsi a un passaggio a livello ferroviario senza barriere',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_17_2',
      italianText: 'Le luci rosse accese lampeggianti in figura obbligano ad arrestarsi a un passaggio a livello ferroviario con semibarriere',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_17_3',
      italianText: 'Le luci rosse accese lampeggianti in figura obbligano ad arrestarsi all’accesso di un pontile d’imbarco di navi traghetto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_17_4',
      italianText: 'Le luci rosse accese lampeggianti in figura obbligano ad arrestarsi all’accesso di un ponte mobile',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_17_5',
      italianText: 'Le luci rosse accese lampeggianti in figura obbligano a non superare la striscia trasversale d’arresto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_17_6',
      italianText: 'Le luci rosse accese lampeggianti in figura si trovano in vicinanza di un posto di blocco della polizia',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_17_7',
      italianText: 'Le luci rosse accese lampeggianti in figura obbligano ad arrestarsi all’accesso di un ponte stretto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_17_8',
      italianText: 'Le luci rosse accese lampeggianti in figura indicano l’uscita obbligatoria dall’autostrada',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_17_9',
      italianText: 'Le luci rosse accese lampeggianti in figura si trovano 150 metri prima di un confine di Stato',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_17_10',
      italianText: 'Le luci rosse accese lampeggianti in figura indicano che sta per accendersi la luce verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.18 Luci rosse lampeggianti ai passaggi a livello
    {
      id: 'q_9_18_1',
      italianText: 'Le luci in figura si possono trovare in vicinanza di passaggi a livello con semibarriere',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_18_2',
      italianText: 'Le luci in figura si accendono alternativamente per segnalare l’arrivo dei treni nei passaggi a livello senza barriere',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_18_3',
      italianText: 'Le luci in figura quando sono accese vietano il passaggio di veicoli e pedoni',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_18_4',
      italianText: 'Le luci in figura, di norma, sono situate sul lato destro della strada',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_18_5',
      italianText: 'Le luci in figura entrano in funzione poco prima dell’arrivo del treno e rimangono accese fino alla fine del suo passaggio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_18_6',
      italianText: 'Le luci in figura si accendono subito prima dell’inizio dell’abbassamento delle semibarriere',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_18_7',
      italianText: 'Le luci in figura sono integrate da un dispositivo di segnalazione acustica',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_18_8',
      italianText: 'Avvicinandosi ad un passaggio a livello con luci rosse lampeggianti alternativamente e semibarriera ancora alzata, occorre predisporsi all’arresto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_18_9',
      italianText: 'Avvicinandosi ad un passaggio a livello con luci rosse lampeggianti alternativamente e semibarriera ancora alzata, si può passare velocemente, se non si vede sopraggiungere alcun treno',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_18_10',
      italianText: 'Le luci in figura si trovano lungo le linee ferroviarie, come semaforo per i conducenti dei treni',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_18_11',
      italianText: 'Le luci in figura quando lampeggiano alternativamente invitano a occupare rapidamente il passaggio a livello',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_18_12',
      italianText: 'Le luci in figura si possono trovare 150 metri prima di un passaggio a livello con barriere',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_18_13',
      italianText: 'Le luci in figura vengono poste sul primo dei pannelli distanziometrici di un passaggio a livello',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_18_14',
      italianText: 'Il dispositivo luminoso in figura è costituito da luci lampeggianti alternativamente che si accendono durante la fase di apertura (sollevamento) delle semibarriere',
      farsiTranslation: 'این پرسش رسمی مربوط به «Luci rosse lampeggianti ai passaggi a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.19 Comportamento al passaggio a livello
    {
      id: 'q_9_19_1',
      italianText: 'Avvicinandosi ad un passaggio a livello con luci rosse accese e semibarriera ancora alzata, è necessario fermarsi sulla linea d’arresto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Comportamento al passaggio a livello» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_19_2',
      italianText: 'Avvicinandosi ad un passaggio a livello con luci rosse accese e semibarriera ancora alzata, non si deve accelerare per attraversare prima che si abbassi la semibarriera',
      farsiTranslation: 'این پرسش رسمی مربوط به «Comportamento al passaggio a livello» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_19_3',
      italianText: 'Avvicinandosi ad un passaggio a livello con luci rosse accese e semibarriera ancora alzata, si può passare velocemen- te, se non si vede sopraggiungere il treno',
      farsiTranslation: 'این پرسش رسمی مربوط به «Comportamento al passaggio a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_19_4',
      italianText: 'Avvicinandosi ad un passaggio a livello con luci rosse accese e semibarriera ancora alzata, bisogna accelerare per liberare rapidamente l’attraversamento',
      farsiTranslation: 'این پرسش رسمی مربوط به «Comportamento al passaggio a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_19_5',
      italianText: 'Avvicinandosi ad un passaggio a livello con luci rosse accese e semibarriera ancora alzata, bisogna fermarsi in corri- spondenza del terzo pannello distanziometrico',
      farsiTranslation: 'این پرسش رسمی مربوط به «Comportamento al passaggio a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_19_6',
      italianText: 'Avvicinandosi ad un passaggio a livello con luci rosse accese e semibarriera ancora alzata, è possibile attraversare se la linea ferroviaria è ad un solo binario',
      farsiTranslation: 'این پرسش رسمی مربوط به «Comportamento al passaggio a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_19_7',
      italianText: 'Avvicinandosi ad un passaggio a livello con luci rosse accese e semibarriera ancora alzata, è possibile attraversare i binari se non si sente ancora il fischio del treno',
      farsiTranslation: 'این پرسش رسمی مربوط به «Comportamento al passaggio a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_19_8',
      italianText: 'Avvicinandosi ad un passaggio a livello con luci rosse accese e semibarriera ancora alzata, è possibile attraversare i binari se non vi sono altri veicoli in attesa',
      farsiTranslation: 'این پرسش رسمی مربوط به «Comportamento al passaggio a livello» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.20 Semafori di onda verde
    {
      id: 'q_9_20_1',
      italianText: 'I segnali luminosi in figura sono semafori di onda verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_20_2',
      italianText: 'Il semaforo in figura consiglia la velocità da mantenere, per trovare la luce verde al semaforo successivo',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_20_3',
      italianText: 'Il semaforo di onda verde in figura si trova su strade con più incroci dove vi sono semafori sincronizzati (temporizzati)',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_20_4',
      italianText: 'Il semaforo in figura segnala la velocità consigliata per poter usufruire dell’onda verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_20_5',
      italianText: 'Delle tre luci del semaforo in figura se ne accende soltanto una, mentre le altre sono spente',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_20_6',
      italianText: 'Il semaforo in figura obbliga a mantenere la velocità indicata',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_20_7',
      italianText: 'Il semaforo in figura non consente di superare la velocità indicata',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_20_8',
      italianText: 'Il semaforo in figura impone al conducente di mantenere dal veicolo che lo precede la distanza indicata',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_20_9',
      italianText: 'Il semaforo in figura indica di procedere con prudenza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_20_10',
      italianText: 'Il semaforo in figura, anche se spento, indica la velocità obbligatoria',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_20_11',
      italianText: 'Il semaforo di onda verde in figura viene posto anche sulle autostrade',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_20_12',
      italianText: 'Il semaforo di onda verde in figura riporta i limiti massimi di velocità delle autovetture, motocicli e autocarri',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_20_13',
      italianText: 'Il semaforo di onda verde in figura indica le velocità che devono obbligatoriamente rispettare alcuni veicoli',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_20_14',
      italianText: 'Il semaforo di onda verde in figura è un semaforo per lavori in corso',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_20_15',
      italianText: 'Il semaforo di onda verde in figura indica la distanza dai caselli autostradali',
      farsiTranslation: 'این پرسش رسمی مربوط به «Semafori di onda verde» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.21 Dare precedenza nei sensi unici alternati
    {
      id: 'q_9_21_1',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza se il semaforo è a luce verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Dare precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_21_2',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci dobbiamo dare la precedenza se il semaforo è spento',
      farsiTranslation: 'این پرسش رسمی مربوط به «Dare precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_21_3',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza se il semaforo è a luce ros- sa, ma l’agente del traffico ci ordina di passare',
      farsiTranslation: 'این پرسش رسمی مربوط به «Dare precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_21_4',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci dobbiamo dare la precedenza se il semaforo è a luce gialla lampeggiante',
      farsiTranslation: 'این پرسش رسمی مربوط به «Dare precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_21_5',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci dobbiamo dare la precedenza anche se il semaforo è a luce verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Dare precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_21_6',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza se il semaforo è a luce gialla lampeggiante',
      farsiTranslation: 'این پرسش رسمی مربوط به «Dare precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_21_7',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza se il semaforo è a luce ver- de, ma l’agente del traffico ci ordina di fermarci',
      farsiTranslation: 'این پرسش رسمی مربوط به «Dare precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_21_8',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci dobbiamo dare la precedenza se il semaforo è spen- to e l’agente del traffico ci ordina di passare',
      farsiTranslation: 'این پرسش رسمی مربوط به «Dare precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.22 Diritto di precedenza nei sensi unici alternati
    {
      id: 'q_9_22_1',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza se il semaforo è a luce verde',
      farsiTranslation: 'این پرسش رسمی مربوط به «Diritto di precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_22_2',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza se il semaforo è spento',
      farsiTranslation: 'این پرسش رسمی مربوط به «Diritto di precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_22_3',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza se il semaforo è a luce rossa, ma l’agente del traffico ci ordina di passare',
      farsiTranslation: 'این پرسش رسمی مربوط به «Diritto di precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_22_4',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci dobbiamo dare la precedenza se il semaforo è spento e l’agente del traffico ci ordina di fermarci',
      farsiTranslation: 'این پرسش رسمی مربوط به «Diritto di precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_22_5',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza se il semaforo è a luce gialla lam- peggiante',
      farsiTranslation: 'این پرسش رسمی مربوط به «Diritto di precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_22_6',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza anche se il semaforo è a luce rossa',
      farsiTranslation: 'این پرسش رسمی مربوط به «Diritto di precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_22_7',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci dobbiamo dare la precedenza se il semaforo è a luce lam- peggiante gialla',
      farsiTranslation: 'این پرسش رسمی مربوط به «Diritto di precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_22_8',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza se il semaforo è a luce verde e l’agente del traffico ci ordina di fermarci',
      farsiTranslation: 'این پرسش رسمی مربوط به «Diritto di precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_22_9',
      italianText: 'In presenza del segnale raffigurato e del semaforo a tre luci abbiamo la precedenza se il semaforo è spento e l’agente del traffico ci ordina di fermarci',
      farsiTranslation: 'این پرسش رسمی مربوط به «Diritto di precedenza nei sensi unici alternati» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.23 Vigile di fronte o di spalle: ALT
    {
      id: 'q_9_23_1',
      italianText: 'Quando il vigile si dispone con le braccia aperte verso la nostra direzione come in figura è vietato il passaggio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_23_2',
      italianText: 'Quando il vigile si dispone con le braccia aperte verso la nostra direzione come in figura bisogna arrestarsi prima della striscia trasversale di arresto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_23_3',
      italianText: 'Quando il vigile si dispone con le braccia aperte verso la nostra direzione come in figura non si può svoltare a sinistra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_23_4',
      italianText: 'Quando il vigile si dispone con le braccia aperte verso la nostra direzione come in figura non si può attraversare l’incrocio',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_23_5',
      italianText: 'Quando il vigile si dispone con le braccia aperte verso la nostra direzione come in figura non si può svoltare a destra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_23_6',
      italianText: 'La posizione del vigile con le braccia aperte verso la nostra direzione come in figura equivale alla luce rossa del semaforo',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_23_7',
      italianText: 'Quando il vigile si dispone con le braccia aperte verso la nostra direzione come in figura si può passare se si svolta a destra, dando però la precedenza ai pedoni che attraversano',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_23_8',
      italianText: 'Quando il vigile si dispone con le braccia aperte verso la direzione da cui proviene il conducente come in figura questi può procedere, ma con la massima prudenza e a velocità moderata',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_23_9',
      italianText: 'Quando il vigile si dispone con le braccia aperte verso la nostra direzione come in figura bisogna suonare il clacson, ma con moderazione, per richiamare l’attenzione del vigile',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_23_10',
      italianText: 'Quando il vigile si dispone con le braccia aperte verso la nostra direzione come in figura si può svoltare, ma non prose- guire diritto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_23_11',
      italianText: 'La posizione del vigile con le braccia aperte verso la nostra direzione come in figura equivale alla luce verde del semaforo',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di fronte o di spalle: ALT» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.24 Vigile di profilo: AVANTI
    {
      id: 'q_9_24_1',
      italianText: 'Quando il vigile si dispone di profilo con le braccia aperte come in figura è consentito il passaggio delle correnti di traffi- co che scorrono parallele alle sue braccia',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di profilo: AVANTI» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_24_2',
      italianText: 'Quando il vigile si dispone di profilo con le braccia aperte come in figura si può svoltare a destra se si proviene dalla sua destra o dalla sua sinistra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di profilo: AVANTI» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_24_3',
      italianText: 'Quando il vigile si dispone di profilo con le braccia aperte come in figura, le correnti di traffico che scorrono parallele alle sue braccia possono attraversare l’incrocio, ma usando prudenza',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di profilo: AVANTI» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_24_4',
      italianText: 'La posizione di profilo del vigile con le braccia aperte come in figura equivale alla luce verde del semaforo per le correnti di traffico che scorrono parallele alle sue braccia',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di profilo: AVANTI» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_24_5',
      italianText: 'Quando il vigile si dispone di profilo con le braccia aperte come in figura si deve obbligatoriamente proseguire diritto',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di profilo: AVANTI» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_24_6',
      italianText: 'Quando il vigile si dispone di profilo con le braccia aperte come in figura, ci si deve arrestare prima della striscia trasver- sale di arresto se si proviene dalla sua sinistra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di profilo: AVANTI» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_24_7',
      italianText: 'Quando il vigile si dispone di profilo con le braccia aperte come in figura ci si deve arrestare dopo aver superato le strisce dell’attraversamento pedonale',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di profilo: AVANTI» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_24_8',
      italianText: 'La posizione di profilo del vigile con le braccia aperte come in figura, per le correnti di traffico che scorrono parallele alle sue braccia equivale alla luce rossa del semaforo',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile di profilo: AVANTI» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.25 Vigile con un braccio alzato: ATTENZIONE
    {
      id: 'q_9_25_1',
      italianText: 'La posizione del vigile con un braccio alzato come in figura equivale alla luce gialla fissa del semaforo',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con un braccio alzato: ATTENZIONE» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_25_2',
      italianText: 'Se il vigile ha un braccio alzato come in figura bisogna liberare velocemente l’incrocio, se già è stato impegnato',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con un braccio alzato: ATTENZIONE» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_25_3',
      italianText: 'Se il vigile ha un braccio alzato come in figura bisogna arrestarsi prima dell’incrocio, se è possibile farlo senza creare pericolo',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con un braccio alzato: ATTENZIONE» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_25_4',
      italianText: 'La posizione del vigile con un braccio alzato come in figura è una indicazione riservata solo ai veicoli che devono svoltare',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con un braccio alzato: ATTENZIONE» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_25_5',
      italianText: 'Se il vigile ha un braccio alzato come in figura bisogna in ogni caso arrestarsi',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con un braccio alzato: ATTENZIONE» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_25_6',
      italianText: 'Se il vigile ha un braccio alzato come in figura è consentito soltanto svoltare a destra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con un braccio alzato: ATTENZIONE» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_25_7',
      italianText: 'Se il vigile ha un braccio alzato come in figura bisogna rallentare solo se nell’incrocio vi sono binari del tram',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con un braccio alzato: ATTENZIONE» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_25_8',
      italianText: 'La posizione del vigile con il braccio alzato come in figura equivale alla luce rossa del semaforo',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con un braccio alzato: ATTENZIONE» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },

    // 9.26 Vigile con braccia ad angolo retto
    {
      id: 'q_9_26_1',
      italianText: 'Il vigile disposto con le braccia ad angolo retto come in figura consente la svolta a sinistra ai veicoli che arrivano dalla sua sinistra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con braccia ad angolo retto» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_26_2',
      italianText: 'Il vigile disposto con le braccia ad angolo retto come in figura ferma i veicoli che arrivano dalla sua destra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con braccia ad angolo retto» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_26_3',
      italianText: 'Il vigile disposto con le braccia ad angolo retto come in figura vieta di proseguire diritto ai veicoli che gli vengono dalle sue spalle',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con braccia ad angolo retto» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_26_4',
      italianText: 'Il vigile disposto con le braccia ad angolo retto come in figura consente di proseguire diritto ai veicoli che arrivano dalla sua sinistra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con braccia ad angolo retto» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_26_5',
      italianText: 'Il vigile disposto con le braccia ad angolo retto come in figura consente di svoltare a destra ai veicoli che arrivano dalla sua sinistra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con braccia ad angolo retto» است. طبق پاسخ رسمی آزمون، گزاره درست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_26_6',
      italianText: 'Il vigile disposto con le braccia ad angolo retto come in figura consente di svoltare a destra ai veicoli che arrivano dalla sua destra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con braccia ad angolo retto» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_26_7',
      italianText: 'Il vigile disposto con le braccia ad angolo retto come in figura consente la svolta a destra ai veicoli che arrivano dalle sue spalle',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con braccia ad angolo retto» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_26_8',
      italianText: 'Il vigile disposto con le braccia ad angolo retto come in figura consente la svolta a sinistra ai veicoli che arrivano dalla sua destra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con braccia ad angolo retto» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_26_9',
      italianText: 'Il vigile disposto con le braccia ad angolo retto come in figura consente di proseguire diritto ai veicoli che arrivano dalla sua destra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con braccia ad angolo retto» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_26_10',
      italianText: 'Il vigile disposto con le braccia ad angolo retto come in figura vieta il passaggio ai veicoli che arrivano dalla sua sinistra',
      farsiTranslation: 'این پرسش رسمی مربوط به «Vigile con braccia ad angolo retto» است. طبق پاسخ رسمی آزمون، گزاره نادرست است و دلیل آن در تئوری همین درس پوشش داده شده است.',
      correctAnswer: 'Falso'
    }
  ]
};
