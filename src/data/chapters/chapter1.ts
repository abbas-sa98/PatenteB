import { Chapter } from '../../types';

export const chapter1: Chapter = {
  id: 1,
  title: 'Definizioni Stradali e di Traffico',
  farsiTitle: 'تعاریف جاده‌ای و ترافیکی',
  lessons: [
    {
      id: 'strada_1_1',
      title: '1.1 La strada',
      italianText: `La strada è un'area aperta alla circolazione di veicoli, pedoni ed animali.

Caratteristiche:
Può essere a senso unico o a doppio senso di circolazione. Può essere suddivisa in carreggiate (quando esiste lo spartitraffico).

Comprende:
✅ Le carreggiate (riservate a veicoli ed animali)  ✅ Le banchine  ✅ I marciapiedi (riservati ai pedoni)  ✅ Le piste ciclabili (riservate alle biciclette)`,
      farsiTranslation: `Strada منطقه‌ای است که برای تردد موارد زیر باز است:
✅ وسایل نقلیه (Veicoli)  ✅ عابران پیاده (Pedoni)  ✅ حیوانات (Animali)

ویژگی‌ها:
می‌آتواند یک‌طرفه (Senso unico) یا دوطرفه (Doppio senso) باشد و در صورت وجود جداکننده وسط جاده (Spartitraffico) به چند سواره‌رو (Carreggiate) تقسیم شود.

شامل می‌شود:
✅ محوطه‌های سواره‌رو (Le carreggiate)  ✅ شانه‌های جاده (Le banchine)  ✅ پیاده‌روها (I marciapiedi)  ✅ مسیرهای ویژه دوچرخه (Le piste ciclabili)`,
      imageUrl: '/images/1-1.jpg',
      vocabularyIds: [
        'strada', 'area_aperta', 'circolazione', 'veicoli', 'pedoni', 'animali', 'caratteristiche',
        'senso_unico', 'doppio_senso', 'suddivisa', 'carreggiate', 'spartitraffico', 'comprende',
        'riservate', 'banchine', 'marciapiedi', 'piste_ciclabili', 'biciclette'
      ],
      questionIds: ['q_1_1', 'q_1_2', 'q_1_3', 'q_1_4', 'q_1_5', 'q_1_6', 'q_1_7', 'q_1_8', 'q_1_9', 'q_1_10']
    },
    {
      id: 'carreggiata_1_2',
      title: '1.2 La carreggiata',
      italianText: `La carreggiata è parte della strada destinata al transito dei veicoli.

Caratteristiche:
Può essere a doppio senso di circolazione o a senso unico. Può essere suddivisa in corsie e può essere affiancata da piste ciclabili. Comprende gli attraversamenti pedonali e ciclabili ma non i marciapiedi e le piazzole di sosta.

Fanno parte della carreggiata:
✅ Tutte le corsie (tranne la corsia di emergenza)  ✅ Gli attraversamenti pedonali (ma non i viali pedonali)  ✅ Gli attraversamenti ciclabili (ma non le piste ciclabili)  ✅ Le corsie di marcia  ✅ Le corsie di sorpasso

Non fanno parte della carreggiata:
❌ I marciapiedi  ❌ Le piazzole di sosta  ❌ Le banchine  ❌ Le corsie di emergenza delle autostrade  ❌ Le piste ciclabili`,
      farsiTranslation: `Carreggiata بخشی از جاده است که برای عبور وسایل نقلیه اختصاص یافته است.

ویژگی‌ها:
می‌آتواند دوطرفه یا یک‌طرفه باشد، به باندها (Corsie) تقسیم شود و در کنار مسیرهای دوچرخه قرار گیرد. شامل خط‌کشی‌های عابر پیاده و دوچرخه می‌شود اما پیاده‌روها و محل‌های توقف اضطراری را شامل نمی‌شود.

جزء سواره‌رو هستند (Fanno parte):
✅ تمام باندها (به جز باند اضطراری)  ✅ خط‌کشی‌های عابر پیاده (نه بلوارهای پیاده‌رو)  ✅ خط‌کشی‌های عبور دوچرخه (نه مسیرهای دوچرخه)  ✅ باندهای حرکت عادی  ✅ باندهای سبقت

جزء سواره‌رو نیستند (Non fanno parte):
❌ پیاده‌روها  ❌ محل‌های توقف اضطراری  ❌ شانه‌های جاده  ❌ باندهای اضطراری اتوبان‌ها  ❌ مسیرهای ویژه دوچرخه`,
      imageUrl: '/images/1-2.jpg',
      vocabularyIds: [
        'carreggiata', 'transito', 'veicoli', 'doppio_senso', 'senso_unico', 'suddivisa', 'corsie',
        'affiancata', 'piste_ciclabili', 'comprende', 'attraversamenti_pedonali', 'attraversamenti_ciclabili',
        'marciapiedi', 'piazzole_di_sosta', 'fanno_parte', 'tranne', 'corsia_di_emergenza', 'viali_pedonali',
        'non_comprendere', 'banchine', 'corsie_di_marcia', 'corsie_di_sorpasso'
      ],
      questionIds: [
        'q_2_1', 'q_2_2', 'q_2_3', 'q_2_4', 'q_2_5', 'q_2_6', 'q_2_7', 'q_2_8', 'q_2_9',
        'q_2_10', 'q_2_11', 'q_2_12', 'q_2_13', 'q_2_14', 'q_2_15', 'q_2_16', 'q_2_17', 'q_2_18'
      ]
    },
    {
      id: 'corsia_1_3',
      title: '1.3 La corsia',
      italianText: `La corsia è una suddivisione della carreggiata larga a sufficienza per la circolazione di una sola fila di veicoli (larghezza minima di 2,80 metri e massima di 4 metri). Una corsia è sempre a senso unico.

I tipi di corsia possono essere:
✅ Di marcia (destinata alla marcia dei veicoli)  ✅ Di emergenza (per la sosta di emergenza)  ✅ Di accelerazione (per l'ingresso in autostrada)  ✅ Di decelerazione (per l'uscita dall'autostrada)  ✅ Riservata (esclusivamente a autobus, taxi, ecc.)  ✅ Specializzata (per sorpasso, svolta, sosta)

Regole principali:
È limitata da strisce continue o discontinue. L'ente proprietario può imporre una velocità minima obbligatoria. Non possono viaggiare affiancati due motocicli o due ciclomotori sulla stessa corsia (sia nei centri abitati che fuori). Può essere attraversata dai pedoni.`,
      farsiTranslation: `Corsia یک بخش‌بندی از سواره‌رو است که عرض آن برای حرکت تنها یک صف از وسایل نقلیه کافی است (عرض حداقل ۲.۸۰ متر و حداکثر ۴ متر). یک باند همیشه یک‌طرفه است.

انواع باند می‌توانند این موارد باشند:
✅ عادی (Di marcia)  ✅ اضطراری (Di emergenza)  ✅ شتاب (Di accelerazione)  ✅ کاهش سرعت (Di decelerazione)  ✅ اختصاصی (Riservata به اتوبوس یا تاکسی)  ✅ تخصصی (Specializzata برای سبقت، پیچیدن، توقف)

قوانین اصلی:
با خطوط ممتد یا منقطع محدود می‌شود. اداره راه می‌تواند حداقل سرعت اجباری تعیین کند. دو موتورسیکلت یا دو موتورگازی اجازه ندارند کنار هم در یک باند حرکت کنند (چه داخل شهر و چه خارج شهر). عابران پیاده می‌توانند از عرض آن عبور کنند.`,
      imageUrl: '/images/1-3.jpg',
      vocabularyIds: [
        'corsia', 'suddivisione', 'larga', 'sufficienza', 'sola_fila', 'larghezza_minima', 'larghezza_massima',
        'sempre', 'senso_unico', 'di_marcia', 'di_emergenza', 'di_accelerazione', 'di_decelerazione',
        'riservata', 'esclusivamente', 'specializzata', 'manovre', 'sorpasso', 'svolta', 'sosta',
        'strisce_continue', 'strisce_discontinue', 'ente_proprietario', 'velocita_minima', 'obbligatoria',
        'affiancati', 'motocicli', 'ciclomotori', 'centri_abitati', 'attraversata', 'pedoni',
        'veicoli', 'circolazione', 'destinata', 'caratteristiche', 'marcia', 'decelerazione',
        'effettuare_sorpassi', 'rallentamento', 'taluni', 'guasto', 'malessere', 'vetture_da_corsa',
        'consente', 'a_scorrimento_veloce'
      ],
      questionIds: [
        'q_3_1', 'q_3_2', 'q_3_3', 'q_3_4', 'q_3_5', 'q_3_6', 'q_3_7', 'q_3_8', 'q_3_9', 'q_3_10',
        'q_3_11', 'q_3_12', 'q_3_13', 'q_3_14', 'q_3_15', 'q_3_16', 'q_3_17', 'q_3_18', 'q_3_19', 'q_3_20'
      ]
    },
    {
      id: 'corsia_accelerazione_1_4',
      title: '1.4 Corsia di accelerazione',
      italianText: `La corsia di accelerazione viene utilizzata per aumentare la velocità e consente ai veicoli l'ingresso in una carreggiata (ad esempio: in autostrada o su strada extraurbana principale).

Regole e divieti:
Facilita l'ingresso dei veicoli o il rientro da un'area di servizio. ❌ Nella corsia di accelerazione sono vietati la sosta ed il sorpasso. Non serve per uscire da una piazzola di sosta o per entrare in un'area di sosta.`,
      farsiTranslation: `باند شتاب برای افزایش سرعت استفاده می‌شود و به وسایل نقلیه اجازه ورود به سواره‌رو را می‌دهد (مثلاً: در اتوبان یا جاده اصلی خارج از شهر).

قوانین و ممنوعیت‌ها:
ورود وسایل نقلیه یا بازگشت آن‌ها از مجتمع خدمات رفاهی (Area di servizio) را تسهیل می‌کند. ❌ در باند شتاب، توقف (Sosta) و سبقت (Sorpasso) ممنوع است. برای خروج از محل توقف اضطراری یا ورود به یک محوطه پارک استفاده نمی‌شود.`,
      imageUrl: '/images/1-4.jpg',
      vocabularyIds: [
        'corsia_di_accelerazione', 'utilizzata', 'aumentare', 'velocita', 'consente', 'ingresso',
        'autostrada', 'strada_extraurbana_principale', 'facilitare', 'rientrare', 'area_di_servizio',
        'vietati', 'sosta', 'sorpasso', 'abbandonare', 'piazzola_di_sosta', 'area_di_sosta'
      ],
      questionIds: ['q_4_1', 'q_4_2', 'q_4_3', 'q_4_4', 'q_4_5', 'q_4_6', 'q_4_7']
    },
    {
      id: 'corsia_decelerazione_1_5',
      title: '1.5 Corsia di decelerazione',
      italianText: `La corsia di decelerazione è destinata al rallentamento dei veicoli e agevola l'uscita dei veicoli stessi da una carreggiata o da una strada a precedenza (ad esempio: l'autostrada o la strada extraurbana principale).

Regole e divieti:
Serve per uscire correttamente ed entrare in un'area di servizio. ❌ Nella corsia di decelerazione sono vietati la sosta ed il sorpasso. Non serve per entrare in autostrada, né per entrare in una piazzola di sosta.`,
      farsiTranslation: `باند کاهش سرعت برای کم کردن سرعت خودروها اختصاص یافته و خروج آن‌ها را از یک سواره‌رو یا جاده دارای حق تقدم (مانند اتوبان یا جاده اصلی خارج از شهر) تسهیل می‌کند.

قوانین و ممنوعیت‌ها:
برای خروج صحیح و ورود به مجتمع خدمات رفاهی (Area di servizio) استفاده می‌شود. ❌ در باند کاهش سرعت، توقف (Sosta) و سبقت (Sorpasso) ممنوع است. برای ورود به اتوبان یا ورود به محل توقف اضطراری استفاده نمی‌شود.`,
      imageUrl: '/images/1-5.jpg',
      vocabularyIds: [
        'corsia_di_decelerazione', 'destinata', 'rallentamento', 'agevola', 'uscita', 'strada_a_precedenza',
        'correttamente', 'area_di_servizio', 'vietati', 'sosta', 'sorpasso', 'entrare', 'piazzola_di_sosta'
      ],
      questionIds: ['q_5_1', 'q_5_2', 'q_5_3', 'q_5_4', 'q_5_5', 'q_5_6']
    },
    {
      id: 'intersezione_sfalsati_1_6',
      title: '1.6 Intersezione a livelli sfalsati',
      italianText: `L'intersezione a livelli sfalsati è un incrocio stradale a livelli sovrapposti con lo scopo di agevolare lo smistamento delle correnti di traffico fra rami di strade poste a diversi livelli.

Comprende:
✅ Sovrappassi  ✅ Sottopassi  ✅ Rampe

Regole principali:
Facilita la circolazione perché esclude l'incrocio diretto fra i veicoli. Valgono i limiti massimi generali di velocità. ❌ Di norma NON è regolata da semafori, né si trata di un incrocio a raso con i binari del treno.`,
      farsiTranslation: `تقاطع غیرهمسطح، یک تقاطع جاده‌ای با سطوح روی هم قرار گرفته است که هدف آن تسهیل هدایت جریان ترافیک بین شاخه‌های جاده‌های واقع در سطوح مختلف است.

شامل می‌شود:
✅ روگذرها  ✅ زیرگذرها  ✅ رمپ‌ها

قوانین اصلی:
تردد را آسان می‌کند زیرا برخورد و تقاطع مستقیم بین وسایل نقلیه را حذف می‌کند. قوانین عمومی حداکثر سرعت در آن معتبر است. ❌ به طور معمول توسط چراغ راهنمایی کنترل نمی‌شود و تقاطع همسطح با ریل قطار نیست.`,
      imageUrl: '/images/1-6.jpg',
      vocabularyIds: ['intersezione', 'livelli_sfalsati', 'sovrappassi', 'sottopassi', 'rampe', 'smistamento', 'esclude'],
      questionIds: ['q_6_1', 'q_6_2', 'q_6_3', 'q_6_4', 'q_6_5', 'q_6_6', 'q_6_7']
    },
    {
      id: 'intersezione_raso_1_7',
      title: '1.7 Intersezione a raso',
      italianText: `L'intersezione a raso è un incrocio di due o più strade poste allo stesso piano o livello que permette lo smistamento delle correnti veicolari dall'una all'altra strada o braccio di strada.

Regole principali:
Può essere regolata da semaforo. Richiede di fare attenzione ai veicoli provenienti dalle strade che si incrociano. ❌ NON comprende sovrappassi, sottopassi o rampe. NON è un incrocio con binari del tram, passi carrabili, né un passaggio a livello con barriere.`,
      farsiTranslation: `تقاطع همسطح، یک محوطه مشترک بین دو یا چند جاده است که در یک سطح یا طبقه قرار دارند و امکان هدایت جریان خودروها را از یک جاده به جاده دیگر فراهم می‌کند.

قوانین اصلی:
می‌آتواند توسط چراغ راهنمایی (Semaforo) کنترل شود. نیازمند توجه به وسایل نقلیه وارد شده از جاده‌های متقاطع است. ❌ شامل روگذر، زیرگذر یا رمپ نمی‌شود. تقاطع با ریل تراموا، درب پارکینگ (Passo carrabile) یا گذرگاه ریلی دارای مانع نیست.`,
      imageUrl: '/images/1-7.jpg',
      vocabularyIds: [
        'intersezione', 'intersezione_a_raso', 'area_comune', 'stesso_piano', 'stesso_livello',
        'smistamento', 'correnti_veicolari', 'braccio', 'regolata_da_semaforo', 'fare_attenzione',
        'veicoli_provenienti', 'incrociarsi', 'non_comprendere', 'sovrappassi', 'sottopassi',
        'rampe', 'binari_del_tram', 'passi_carrabili', 'passaggio_a_livello', 'barriere'
      ],
      questionIds: ['q_7_1', 'q_7_2', 'q_7_3', 'q_7_4', 'q_7_5', 'q_7_6', 'q_7_7', 'q_7_8', 'q_7_9']
    },
    {
      id: 'banchina_1_8',
      title: '1.8 La banchina',
      italianText: `La banchina è una parte della strada (esterna alla carreggiata) destinata alla circolazione dei pedoni.

Regole principali:
È situata oltre la linea bianca continua di margine della carreggiata, posta al di fuori di essa. ❌ Di norma NON consente il transito ai veicoli. NON divide la carreggiata, NON è destinata alla sosta dei veicoli (nemmeno per 5 ore) e NON è riservata ai veicoli lenti in salita.`,
      farsiTranslation: `شانه جاده (Banchina) بخشی از جاده (خارج از سواره‌رو) است که برای تردد عابران پیاده اختصاص یافته است.

قوانین اصلی:
در فراتر از خط سفید ممتدِ حاشیه سواره‌رو قرار گرفته و خارج از آن است. ❌ به طور معمول اجازه عبور به وسایل نقلیه را نمی‌دهد. سواره‌رو را تقسیم نمی‌کند، برای پارک خودروها نیست (حتی برای ۵ ساعت) و مخصوص خودروهای کندرو در سربالایی‌ها نیست.`,
      imageUrl: '/images/1-8.jpg',
      vocabularyIds: [
        'banchina', 'parte_della_strada', 'esterna_alla_carreggiata', 'circolazione_pedoni',
        'oltre_la_linea', 'bianca_continua', 'margine_carreggiata', 'fuori_di_essa', 'non_consente',
        'transito_veicoli', 'non_divide', 'non_destinata', 'sosta_veicoli', 'cinque_ore', 'riservata',
        'veicoli_lenti', 'strade_in_salita'
      ],
      questionIds: ['q_8_1', 'q_8_2', 'q_8_3', 'q_8_4', 'q_8_5', 'q_8_6', 'q_8_7']
    },
    {
      id: 'passo_carrabile_1_9',
      title: '1.9 Il passo carrabile',
      italianText: `Il passo carrabile è una zona per l'accesso dei veicoli alle proprietà private laterali alla strada (come garage o cortili) o ad aree di sosta.

Regole e caratteristiche:
Deve essere corredato da un apposito segnale che riporti l'ente e il numero di autorizzazione. ❌ In sua corrispondenza la sosta è vietata, mentre è consentita la fermata. NON è una strada per carri o autocarri, NON indica una rotatoria, NON è un parcheggio scambiatore né un salvagente.`,
      farsiTranslation: `«Passo carrabile» (پل پارکینگ / راه عبور خودرو) محلی است که برای ورود و خروج وسایل نقلیه به املاک خصوصی مجاور جاده (مانند گاراژ، حیاط) یا محوطه‌های توقف اختصاص یافته است.

قوانین و ویژگی‌ها: 
باید دارای تابلوی مخصوصی باشد که نام ارگان صادرکننده و شماره مجوز روی آن درج شده است. پارک کردن (Sosta) در مقابل آن ممنوع است، اما توقف کوتاه (Fermata) برای سوار و پیاده کردن سرنشین یا بارگیری مجاز است.

اشتباهات رایج (رد گزینه‌های آزمون): این محل جاده‌ای برای گاری یا کامیون نیست، نشان‌دهنده میدان (Rotatoria) نیست، پارکینگ تعویضی (Parcheggio scambiatore) نیست و سکوی ایمنی عابر پیاده (Salvagente) هم نیست.`,
      imageUrl: 'NULL',
      vocabularyIds: [
        'passo_carrabile', 'zona', 'accesso_veicoli', 'proprieta_private', 'laterali_alla_strada',
        'garage', 'cortili', 'aree_di_sosta', 'corredato', 'apposito_segnale', 'riporti_ente',
        'numero_di_autorizzazione', 'sosta_vietata', 'consentita_la_fermata', 'carri_trainati',
        'circolazione_rotatoria', 'autocarri', 'parcheggio_scambiatore', 'salvagente_circolare'
      ],
      questionIds: [
        'q_9_1', 'q_9_2', 'q_9_3', 'q_9_4', 'q_9_5', 'q_9_6', 'q_9_7', 'q_9_8', 'q_9_9', 'q_9_10', 'q_9_11'
      ]
    },
    {
      id: 'marciapiede_1_10',
      title: '1.10 Il marciapiede',
      italianText: `Il marciapiede (che può essere a raso o rialzato) è una parte della strada (esterna alla carreggiata) destinata alla circolazione dei pedoni.

Regole per la sosta:
✅ Consente la sosta dei veicoli SOLO in presenza di apposite strisce di parcheggio. ❌ Di norma è riservato ai pedoni: non consente la sosta se non ci sono le strisce (anche se non è rialzato), non è per ciclomotori di norma, non è parte della carreggiata e non è riservato alle biciclette.`,
      farsiTranslation: `پیاده‌رو (که می‌تواند همسطح جاده یا بلندتر از آن باشد) بخشی از جاده (خارج از سواره‌رو) است که به رفت‌وآمد عابران پیاده اختصاص دارد.

قوانین پارک:
✅ فقط و فقط در صورت وجود خط‌کشی‌های مخصوص پارک، اجازه پارک کردن خودروها را می‌دهد. ❌ به طور معمول به عابران اختصاص دارد: اگر خط‌کشی نباشد اجازه پارک ندارد (حتی اگر پیاده‌رو برجسته نباشد)، به طور عادی برای موتورگازی‌ها نیست، بخشی از سواره‌رو نیست و برای دوچرخه‌ها اختصاص نیافته است.`,
      imageUrl: '/images/1-10.jpg',
      vocabularyIds: [
        'marciapiede', 'a_raso', 'rialzato', 'parte_della_strada', 'esterna_alla_carreggiata',
        'destinata', 'circolazione_pedoni', 'consente_la_sosta', 'solo_in_presenza', 'strisce_di_parcheggio',
        'riservato', 'ciclomotori', 'biciclette'
      ],
      questionIds: ['q_10_1', 'q_10_2', 'q_10_3', 'q_10_4', 'q_10_5', 'q_10_6', 'q_10_7', 'q_10_8']
    },
    {
      id: 'attraversamento_pedonale_1_11',
      title: '1.11 Attraversamento pedonale',
      italianText: `L'attraversamento pedonale è una parte della strada e della carreggiata segnalata da una serie di strisce bianche parallele sulla quale i pedoni che attraversano hanno diritto di precedenza rispetto ai veicoli.

Regole e divieti:
✅ È una parte della carreggiata destinata al transito dei pedoni. I veicoli devono dare la precedenza ai pedoni sulle strisce. ❌ È VIETATA la sosta e la fermata dei veicoli. Non è vietato il transito ai veicoli, non è separato da una striscia gialla e non è posto al di fuori della carreggiata.`,
      farsiTranslation: `خط‌کشی عابر پیاده بخشی از جاده و سواره‌رو است که با یک سری خطوط سفید موازی علامت‌گذاری شده است و عابران پیاده‌ای که از آن عبور می‌کنند، نسبت به وسایل نقلیه حق تقدم دارند.

قوانین و ممنوعیت‌ها:
✅ بخشی از سواره‌رو است که برای عبور عابران پیاده در حال عبور اختصاص یافته است. وسایل نقلیه باید به عابران روی خط‌کشی حق تقدم بدهند. ❌ توقف کامل (Sosta) و توقف کوتاه (Fermata) وسایل نقلیه روی آن ممنوع است. عبور وسایل نقلیه از روی آن ممنوع نیست، با خط زرد جدا نشده و خارج از سواره‌رو قرار ندارد.`,
      imageUrl: '/images/1-11.jpg',
      vocabularyIds: [
        'attraversamento_pedonale', 'parte_della_carreggiata', 'segnalata', 'strisce_bianche_parallele',
        'pedoni', 'diritto_di_precedenza', 'rispetto_ai_veicoli', 'transito', 'vietata_la_sosta',
        'separata', 'striscia_gialla', 'vietata_la_fermata', 'al_di_fuori'
      ],
      questionIds: ['q_11_1', 'q_11_2', 'q_11_3', 'q_11_4', 'q_11_5', 'q_11_6', 'q_11_7', 'q_11_8', 'q_11_9', 'q_11_10']
    },
    {
      id: 'salvagente_1_12',
      title: '1.12 Il salvagente',
      italianText: `Il salvagente è una parte della strada rialzata o opportunamente delimitata, destinata al riparo o alla sosta dei pedoni che attraversano la strada stessa.

Caratteristiche:
Si trova in corrispondenza di attraversamenti pedonali o di fermate dei trasporti pubblici. Agevola la salita e la discesa dei passeggeri da tram, filobus od autobus. Può essere segnalato con colonnine luminose a luce gialla fissa o lampeggiante.`,
      farsiTranslation: `سکوی ایمنی (Salvagente) بخشی برجسته یا مرزبندی شده از جاده است که برای پناه گرفتن یا توقف عابران پیاده در حال عبور از عرض جاده اختصاص یافته است.

ویژگی‌ها:
در محل خط‌کشی‌های عابر پیاده یا ایستگاه‌های وسایل نقلیه عمومی قرار دارد. سوار و پیاده شدن مسافران تراموا (Tram)، اتوبوس برقی (Filobus) یا اتوبوس را تسهیل می‌کند. می‌تواند با ستون‌های نورانی با چراغ زرد ثابت یا چشمک‌زن علامت‌گذاری شود.`,
      imageUrl: '/images/1-12.jpg',
      vocabularyIds: ['salvagente', 'rialzata', 'riparo', 'sosta_pedoni', 'fermate', 'trasporti_pubblici', 'agevola', 'colonnine_luminose', 'luce_gialla'],
      questionIds: ['q_12_1', 'q_12_2', 'q_12_3', 'q_12_4', 'q_12_5', 'q_12_6', 'q_12_7']
    },
    {
      id: 'isola_traffico_1_13',
      title: '1.13 Isola di traffico',
      italianText: `L'isola di traffico è una parte della strada e della carreggiata, esclusa dal traffico veicolare.

Caratteristiche:
Può essere rialzata o dipinta a raso sul piano stradale. Viene evidenziata mediante zebrature di colore bianco e delimitata da strisce bianche continue di raccordo.

Regole principali:
È destinata a separare e incanalare le correnti di traffico. ❌ Su di essa è VIETATO marciare, transitare e sostare per qualsiasi veicolo (compresi motocicli e ciclomotori). Non è destinata al transito dei pedoni.`,
      farsiTranslation: `جزیره ترافیکی (Isola di traffico) بخشی از جاده و سواره‌رو است که ترافیک خودرویی از آن حذف شده است.

ویژگی‌ها:
می‌آتواند برجسته (Rialzata) یا به صورت همسطح (A raso) روی کف جاده رنگ‌آمیزی شده باشد. با خطوط هاشور سفید (Zebrature) و خطوط ممتد رابط سفید مشخص می‌شود.

قوانین اصلی:
برای جداسازی و هدایت جریان‌های ترافیکی به سمت مسیرهای مختلف اختصاص یافته است. ❌ رانندگی، عبور و پارک کردن روی آن برای هر نوع وسیله نقلیه‌ای (شامل موتورسیکلت‌ها و موتورگازی‌ها) ممنوع است. برای عبور عابران پیاده یا محوطه پارک نیست.`,
      imageUrl: '/images/1-13.jpg',
      vocabularyIds: ['isola_di_traffico', 'esclusa', 'rialzata', 'dipinta_a_raso', 'zebrature', 'strisce_di_raccordo', 'separare', 'incanalare', 'vietato_marciare'],
      questionIds: [
        'q_13_1', 'q_13_2', 'q_13_3', 'q_13_4', 'q_13_5', 'q_13_6', 'q_13_7', 'q_13_8',
        'q_13_9', 'q_13_10', 'q_13_11', 'q_13_12', 'q_13_13', 'q_13_14', 'q_13_15', 'q_13_16',
        'q_13_17', 'q_13_18', 'q_13_19', 'q_13_20', 'q_13_21'
      ]
    },
    {
      id: 'passaggio_livello_1_14',
      title: '1.14 Passaggio a livello',
      italianText: `Il passaggio a livello è un attraversamento a raso (sullo stesso piano) tra una strada ed una linea ferroviaria o tranviaria.

Attrezzature presenti:
✅ Barriere o semibarriere  ✅ Luci rosse  ✅ Dispositivo di segnalazione acustica (campana)  ✅ Croce di S. Andrea  ✅ Pannelli distanziometrici

❌ Errore comune: NON è un sottopassaggio o cavalcavia, né presenta corsie di accelerazione o attraversamenti autostradali.`,
      farsiTranslation: `گذرگاه ریلی همسطح (Passaggio a livello) یک تقاطع همسطح (A raso / sullo stesso piano) بین یک جاده و خط راه‌آهن یا تراموا است.

تجهیزات موجود:
✅ موانع (Barriere) یا نیم‌موانع (Semibarriere)  ✅ چراغ‌های قرمز  ✅ دستگاه صوتی زنگ‌دار  ✅ صلیب سنت آندریا (Croce di S. Andrea)  ✅ تابلوهای نشان‌دهنده فاصله (Pannelli distanziometrici)

❌ اشتباه رایج: این یک پل روگذر، زیرگذر یا تقاطع اتوبانی نیست و فاقد باند شتاب است.`,
      imageUrl: '/images/1-14.jpg',
      vocabularyIds: ['passaggio_a_livello', 'attraversamento_a_raso', 'linea_ferroviaria', 'barriere', 'semibarriere', 'luci_rosse', 'segnalazione_acustica', 'croce_di_san_andrea', 'pannelli_distanziometrici'],
      questionIds: [
        'q_14_1', 'q_14_2', 'q_14_3', 'q_14_4', 'q_14_5', 'q_14_6',
        'q_14_7', 'q_14_8', 'q_14_9', 'q_14_10', 'q_14_11', 'q_14_12'
      ]
    },
    {
      id: 'area_pedonale_1_15',
      title: '1.15 Area pedonale',
      italianText: `L'area pedonale è una zona destinata al transito dei pedoni, delimitata da appositi segnali stradali di inizio e fine.

Chi può circolare:
✅ I pedoni e le biciclette (velocipedi)  ✅ I veicoli al servizio di persone diversamente abili  ✅ I veicoli di emergenza (polizia, vigili del fuoco, autoambulanze) SOLO con luce lampeggiante blu e sirena in funzione  ✅ Veicoli ad emissione zero (elettrici) se espressamente consentito dal segnale.`,
      farsiTranslation: `منطقه پیاده‌رو (Area pedonale) محدوده‌ای است که برای عبور عابران پیاده اختصاص یافته و با تابلوهای مخصوص شروع و پایان مرزبندی می‌شود.

چه کسانی اجازه تردد دارند:
✅ عابران پیاده و دوچرخه‌ها  ✅ وسایل نقلیه در خدمت افراد دارای معلولیت (Persone diversamente abili)  ✅ وسایل نقلیه امدادی (پلیس، آتش‌نشانی) تنها در صورت فعال بودن آژیر و چراغ چشمک‌زن آبی  ✅ خودروهای با آلایندگی صفر (برقی) در صورتی که صراحتاً مجاز اعلام شده باشد.`,
      imageUrl: '/images/1-15.jpg',
      vocabularyIds: ['area_pedonale', 'segnali_di_inizio', 'segnali_di_fine', 'transito_pedoni', 'servizio_di_emergenza', 'luce_lampeggiante_blu', 'sirena', 'espressamente_indicato'],
      questionIds: ['q_15_1', 'q_15_2', 'q_15_3', 'q_15_4', 'q_15_5', 'q_15_6', 'q_15_7', 'q_15_8', 'q_15_9', 'q_15_10', 'q_15_11']
    },
    {
      id: 'ztl_1_16',
      title: '1.16 Zona a traffico limitato (ZTL)',
      italianText: `La zona a traffico limitato (ZTL) è un'area delimitata da appositi segnali stradali di inizio e fine nella quale l'accesso e la circolazione dei veicoli sono limitati.

Limitazioni:
Può essere limitata ad ore prestabilite (fasce orarie) o solo a particolari categorie di utenti e di veicoli (ad esempio: residenti, veicoli elettrici, veicoli autorizzati).`,
      farsiTranslation: `منطقه با ترافیک محدود (ZTL) محدوده‌ای است که با تابلوهای مخصوص شروع و پایان مشخص می‌شود و ورود و حرکت وسایل نقلیه در آن محدود است.

محدودیت‌ها:
می‌تواند به ساعت‌های از پیش تعیین‌شده (ساعات خاص) یا به دسته‌های خاصی از کاربران و وسایل نقلیه (مانند ساکنین، خودروهای الکتریکی، یا خودروهای دارای مجوز) محدود شود.`,
      imageUrl: '/images/1-16.jpg',
      vocabularyIds: ['zona_a_traffico_limitato', 'ztl', 'accesso', 'limitati', 'ore_prestabilite', 'particolari_categorie', 'utenti'],
      questionIds: ['q_16_1', 'q_16_2', 'q_16_3', 'q_16_4', 'q_16_5', 'q_16_6', 'q_16_7', 'q_16_8', 'q_16_9']
    }
  ],
  questions: [
    // 1.1 La strada questions
    {
      id: 'q_1_1',
      italianText: 'La strada può essere suddivisa in carreggiate.',
      farsiTranslation: 'جاده (Strada) می‌تواند به سواره‌روها (Carreggiate) تقسیم شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_1_2',
      italianText: 'La strada non comprende le banchine.',
      farsiTranslation: 'جاده شامل شانه‌ها (Banchine) نمی‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_1_3',
      italianText: 'La strada può comprendere le piste ciclabili.',
      farsiTranslation: 'جاده می‌تواند شامل مسیرهای ویژه دوچرخه (Piste ciclabili) باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_1_4',
      italianText: 'La strada è riservata alla circolazione dei soli autoveicoli e motocicli.',
      farsiTranslation: 'جاده فقط (Soli) برای تردد خودروها و موتورسیکلت‌ها اختصاص یافته است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_1_5',
      italianText: 'La strada può essere a senso unico di circolazione.',
      farsiTranslation: 'جاده می‌تواند یک‌طرفه (Senso unico) باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_1_6',
      italianText: 'La strada è normalmente riservata alla circolazione dei soli veicoli e animali.',
      farsiTranslation: 'جاده به طور معمول فقط (Soli) برای تردد وسایل نقلیه و حیوانات اختصاص یافته است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_1_7',
      italianText: 'La strada può essere a doppio senso di circolazione.',
      farsiTranslation: 'جاده می‌تواند دوطرفه (Doppio senso) باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_1_8',
      italianText: 'La strada non comprende i marciapiedi.',
      farsiTranslation: 'جاده شامل پیاده‌روها (Marciapiedi) نمی‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_1_9',
      italianText: 'La strada è aperta alla circolazione dei pedoni, degli animali e dei veicoli.',
      farsiTranslation: 'جاده برای تردد عابران پیاده، حیوانات و وسایل نقلیه باز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_1_10',
      italianText: 'La strada è qualsiasi area asfaltata, limitata lateralmente dagli attraversamenti pedonali.',
      farsiTranslation: 'جاده هرگونه محوطه آسفالت‌شده‌ای است که از طرفین به خط‌کشی‌های عابر پیاده محدود می‌شود.',
      correctAnswer: 'Falso'
    },

    // 1.2 La carreggiata questions
    {
      id: 'q_2_1',
      italianText: 'La carreggiata non comprende i marciapiedi.',
      farsiTranslation: 'سواره‌رو (Carreggiata) شامل پیاده‌روها (Marciapiedi) نمی‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_2_2',
      italianText: 'La carreggiata è destinata alla sosta degli autocarri.',
      farsiTranslation: 'سواره‌رو برای توقف/پارک (Sosta) کامیون‌ها اختصاص یافته است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_2_3',
      italianText: 'Fanno parte della carreggiata le banchine.',
      farsiTranslation: 'شانه‌های جاده (Banchine) جزء سواره‌رو هستند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_2_4',
      italianText: 'Fanno parte della carreggiata le corsie di emergenza delle autostrade.',
      farsiTranslation: 'باندهای اضطراری اتوبان‌ها جزء سواره‌رو هستند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_2_5',
      italianText: 'La carreggiata è la parte della strada destinata normalmente alla circolazione dei veicoli.',
      farsiTranslation: 'سواره‌رو بخشی از جاده است که به طور معمول برای تردد وسایل نقلیه اختصاص یافته است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_2_6',
      italianText: 'Fanno parte della carreggiata gli attraversamenti pedonali.',
      farsiTranslation: 'خط‌کشی‌های عابر پیاده (Attraversamenti pedonali) جزء سواره‌رو هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_2_7',
      italianText: 'La carreggiata può essere a senso unico di circolazione.',
      farsiTranslation: 'سواره‌رو می‌تواند یک‌طرفه باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_2_8',
      italianText: 'La carreggiata comprende le piazzole di sosta.',
      farsiTranslation: 'سواره‌رو شامل محل‌های توقف اضطراری کنار جاده (Piazzole di sosta) می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_2_9',
      italianText: 'La carreggiata può essere a doppio senso di circolazione.',
      farsiTranslation: 'سواره‌رو می‌تواند دوطرفه باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_2_10',
      italianText: 'Fanno parte della carreggiata le corsie di marcia.',
      farsiTranslation: 'باندهای حرکت عادی (Corsie di marcia) جزء سواره‌رو هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_2_11',
      italianText: 'Fanno parte della carreggiata i marciapiedi.',
      farsiTranslation: 'پیاده‌روها جزء سواره‌رو هستند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_2_12',
      italianText: 'La carreggiata può essere suddivisa in corsie.',
      farsiTranslation: 'سواره‌رو می‌تواند به باندها (Corsie) تقسیم شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_2_13',
      italianText: 'La carreggiata è destinata soltanto alla circolazione di carri a trazione animale.',
      farsiTranslation: 'سواره‌رو فقط (Soltanto) برای تردد گاری‌هایی است که حیوانات آن‌ها را می‌کشند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_2_14',
      italianText: 'La carreggiata non comprende le piste ciclabili.',
      farsiTranslation: 'سواره‌رو شامل مسیرهای ویژه دوچرخه (Piste ciclabili) نمی‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_2_15',
      italianText: 'La carreggiata è destinata alla sosta di emergenza.',
      farsiTranslation: 'سواره‌رو برای توقف اضطراری اختصاص یافته است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_2_16',
      italianText: 'Fanno parte della carreggiata le corsie di sorpasso.',
      farsiTranslation: 'باندهای سبقت (Corsie di sorpasso) جزء سواره‌رو هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_2_17',
      italianText: 'La carreggiata è la traccia lasciata dalle ruote dei veicoli sulle strade innevate.',
      farsiTranslation: 'سواره‌رو همان ردِ باقی‌مانده از تایر خودروها روی جاده‌های برفی است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_2_18',
      italianText: 'Fanno parte della carreggiata gli attraversamenti ciclabili.',
      farsiTranslation: 'خط‌کشی‌های عبور دوچرخه (Attraversamenti ciclabili) جزء سواره‌رو هستند.',
      correctAnswer: 'Vero'
    },

    // 1.3 La corsia questions
    {
      id: 'q_3_1',
      italianText: 'La corsia può essere riservata alla circolazione di alcune categorie di veicoli (taxi, autobus, ecc.).',
      farsiTranslation: 'باند (Corsia) می‌تواند مخصوص تردد دسته‌های خاصی از وسایل نقلیه (تاکسی، اتوبوس و غیره) باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_2',
      italianText: 'La corsia può essere destinata ad effettuare sorpassi.',
      farsiTranslation: 'باند می‌تواند برای انجام سبقت‌ها اختصاص یابد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_3',
      italianText: 'La corsia può essere a doppio senso di circolazione.',
      farsiTranslation: 'باند می‌تواند دوطرفه باشد. (توجه: باند همیشه یک‌طرفه است).',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_3_4',
      italianText: 'Nei centri abitati, su una stessa corsia possono circolare affiancati due motocicli.',
      farsiTranslation: 'داخل شهرها، دو موتورسیکلت می‌توانند کنار هم (Affiancati) در یک باند حرکت کنند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_3_5',
      italianText: 'La corsia è limitata da strisce continue o discontinue.',
      farsiTranslation: 'باند توسط خطوط ممتد یا منقطع محدود می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_6',
      italianText: 'La corsia può essere riservata ai veicoli che intendono svoltare (corsia specializzata).',
      farsiTranslation: 'باند می‌تواند مخصوص خودروهایی باشد که قصد پیچیدن دارند (باند تخصصی).',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_7',
      italianText: 'La corsia è formata da due carreggiate.',
      farsiTranslation: 'باند از دو سواره‌رو تشکیل شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_3_8',
      italianText: 'La corsia può essere destinata al rallentamento dei veicoli in uscita dalle autostrade.',
      farsiTranslation: 'باند می‌تواند برای کاهش سرعت خودروها در خروجی اتوبان‌ها اختصاص یابد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_9',
      italianText: 'La corsia non può mai essere attraversata dai pedoni.',
      farsiTranslation: 'عابران پیاده هرگز نمی‌توانند از عرض باند عبور کنند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_3_10',
      italianText: 'Le corsie possono essere vietate a taluni tipi di veicoli.',
      farsiTranslation: 'حرکت در باندها می‌تواند برای برخی انواع وسایل نقلیه ممنوع (Vietate) باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_11',
      italianText: 'La corsia è destinata solo al transito dei pedoni.',
      farsiTranslation: 'باند فقط برای عبور عابران پیاده اختصاص یافته است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_3_12',
      italianText: 'L’ente proprietario della strada può imporre che su una corsia i veicoli transitino ad una velocità minima obbligatoria.',
      farsiTranslation: 'سازمان مالک جاده می‌تواند مقرر کند که خودروها در یک باند با حداقل سرعت اجباری حرکت کنند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_13',
      italianText: 'La corsia può essere destinata alla normale marcia dei veicoli.',
      farsiTranslation: 'باند می‌تواند برای حرکت عادی وسایل نقلیه اختصاص یابد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_14',
      italianText: 'La corsia può essere di accelerazione.',
      farsiTranslation: 'باند می‌تواند از نوع باند شتاب (Accelerazione) باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_15',
      italianText: 'La corsia può essere destinata alle soste di emergenza, in caso di guasto o malessere.',
      farsiTranslation: 'باند می‌تواند برای توقف‌های اضطراری، در صورت نقص فنی یا بد شدن حال مسافر اختصاص یابد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_16',
      italianText: 'Fuori dai centri abitati, su una stessa corsia possono circolare affiancati due ciclomotori.',
      farsiTranslation: 'خارج از شهرها، دو موتورگازی می‌توانند کنار هم در یک باند حرکت کنند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_3_17',
      italianText: 'La corsia è una pista riservata alle vetture da corsa.',
      farsiTranslation: 'باند یک پیست اختصاصی برای خودروهای مسابقه‌ای (Vetture da corsa) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_3_18',
      italianText: 'La corsia è una parte della carreggiata che consente la circolazione di una sola fila di veicoli.',
      farsiTranslation: 'باند بخشی از سواره‌رو است که اجازه حرکت تنها به یک صف از وسایل نقلیه را می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_3_19',
      italianText: 'La corsia è una strada a scorrimento veloce.',
      farsiTranslation: 'باند یک جاده تندرو (A scorrimento veloce) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_3_20',
      italianText: 'La corsia può essere di decelerazione.',
      farsiTranslation: 'باند می‌تواند از نوع باند کاهش سرعت (Decelerazione) باشد.',
      correctAnswer: 'Vero'
    },

    // 1.4 Corsia di accelerazione questions
    {
      id: 'q_4_1',
      italianText: 'La corsia di accelerazione serve per rientrare sulla carreggiata dell’autostrada dopo che si è usciti da un’area di servizio.',
      farsiTranslation: 'باند شتاب برای ورود مجدد به سواره‌رو اتوبان، پس از خروج از مجتمع خدمات رفاهی (Area di servizio) استفاده می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_2',
      italianText: 'La corsia di accelerazione può essere utilizzata per il sorpasso.',
      farsiTranslation: 'باند شتاب می‌تواند برای سبقت گرفتن استفاده شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_3',
      italianText: 'La corsia di accelerazione serve per uscire da una piazzola di sosta.',
      farsiTranslation: 'باند شتاب برای خروج از محل توقف اضطراری (Piazzola di sosta) استفاده می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_4',
      italianText: 'La corsia di accelerazione serve per abbandonare la carreggiata dell’autostrada ed entrare in un’area di sosta.',
      farsiTranslation: 'باند شتاب برای ترک سواره‌رو اتوبان و ورود به محوطه پارک (Area di sosta) استفاده می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_5',
      italianText: 'La corsia di accelerazione facilita l’ingresso dei veicoli in autostrada o su strade extraurbane principais.',
      farsiTranslation: 'باند شتاب ورود وسایل نقلیه به اتوبان یا جاده‌های اصلی خارج از شهر را تسهیل می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6',
      italianText: 'La corsia di accelerazione serve ad entrare correttamente in autostrada.',
      farsiTranslation: 'باند شتاب برای ورود صحیح به اتوبان استفاده می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_7',
      italianText: 'La corsia di accelerazione viene utilizzata per aumentare la velocità.',
      farsiTranslation: 'باند شتاب برای افزایش سرعت استفاده می‌شود.',
      correctAnswer: 'Vero'
    },

    // 1.5 Corsia di decelerazione questions
    {
      id: 'q_5_1',
      italianText: 'La corsia di decelerazione serve ad entrare in autostrada.',
      farsiTranslation: 'باند کاهش سرعت برای ورود به اتوبان استفاده می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_2',
      italianText: 'La corsia di decelerazione serve per uscire dalla carreggiata dell’autostrada ed entrare nell’area di servizio.',
      farsiTranslation: 'باند کاهش سرعت برای خروج از سواره‌رو اتوبان و ورود به مجتمع خدمات رفاهی استفاده می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_3',
      italianText: 'La corsia di decelerazione può essere utilizzata per la sosta dei veicoli.',
      farsiTranslation: 'باند کاهش سرعت می‌تواند برای پارک/توقف وسایل نقلیه استفاده شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_5_4',
      italianText: 'La corsia di decelerazione serve per uscire correttamente da una strada extraurbana principale.',
      farsiTranslation: 'باند کاهش سرعت برای خروج صحیح از جاده اصلی خارج از شهر استفاده می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_5',
      italianText: 'La corsia di decelerazione facilita l’uscita dei veicoli dall’autostrada.',
      farsiTranslation: 'باند کاهش سرعت خروج وسایل نقلیه از اتوبان را تسهیل می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_5_6',
      italianText: 'La corsia di decelerazione serve per entrare in una piazzola di sosta.',
      farsiTranslation: 'باند کاهش سرعت برای ورود به محل توقف اضطراری (Piazzola di sosta) استفاده می‌شود.',
      correctAnswer: 'Falso'
    },

    // 1.6 Intersezione a livelli sfalsati (Blocco: 11007)
    {
      id: 'q_6_1',
      italianText: 'L’intersezione (incrocio) a livelli sfalsati comprende strade situate ad altezze diverse.',
      farsiTranslation: 'تقاطع غیرهمسطح شامل جاده‌هایی است که در ارتفاع‌های مختلف قرار گرفته‌اند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_2',
      italianText: 'L’intersezione (incrocio) a livelli sfalsati facilita la circolazione, perché esclude l’incrocio diretto fra i veicoli.',
      farsiTranslation: 'تقاطع غیرهمسطح تردد را تسهیل می‌کند، زیرا برخورد و تقاطع مستقیم بین وسایل نقلیه را حذف می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_3',
      italianText: 'L’intersezione (incrocio) a livelli sfalsati comprende rampe, sovrappassi o sottopassi.',
      farsiTranslation: 'تقاطع غیرهمسطح شامل رمپ‌ها, روگذرها یا زیرگذرها می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_4',
      italianText: 'L’intersezione (incrocio) a livelli sfalsati è munita di infrastrutture (rampe, sovrappassi, sottopassi) per il collegamento fra strade poste a livelli diversi.',
      farsiTranslation: 'تقاطع غیرهمسطح مجهز به زیرساخت‌ها (رمپ، روگذر، زیرگذر) برای اتصال بین جاده‌های واقع در سطوح مختلف است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_6_5',
      italianText: 'L’intersezione a livelli sfalsati è un incrocio a raso fra una strada e i binari del treno.',
      farsiTranslation: 'تقاطع غیرهمسطح یک تقاطع همسطح (A raso) بین جاده و ریل قطار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_6',
      italianText: 'Nell’intersezione (incrocio) a livelli sfalsati non valgono i limiti massimi generali di velocità.',
      farsiTranslation: 'در تقاطع غیرهمسطح محدودیت‌های عمومی حداکثر سرعت اعتبار ندارند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_6_7',
      italianText: 'L’intersezione (incrocio) a livelli sfalsati è, di norma, regolata da semafori.',
      farsiTranslation: 'تقاطع غیرهمسطح به طور معمول توسط چراغ راهنمایی کنترل می‌شود.',
      correctAnswer: 'Falso'
    },

    // 1.7 Intersezione a raso (Blocco: 11008)
    {
      id: 'q_7_1',
      italianText: 'Nell’intersezione (incrocio) a raso due o più strade si incrociano allo stesso livello.',
      farsiTranslation: 'در تقاطع همسطح دو یا چند جاده در یک سطح (allo stesso livello) با هم متقاطع می‌شوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_7_2',
      italianText: 'L’intersezione (incrocio) a raso può essere regolata da semaforo.',
      farsiTranslation: 'تقاطع همسطح می‌تواند توسط چراغ راهنمایی کنترل شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_7_3',
      italianText: 'L’intersezione (incrocio) a raso è un’intersezione di due o più strade poste allo stesso livello.',
      farsiTranslation: 'تقاطع همسطح، تقاطع دو یا چند جاده واقع در یک سطح یا تراز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_7_4',
      italianText: 'L’intersezione (incrocio) a raso richiede di fare attenzione ai veicoli provenienti dalle strade che si incrociano.',
      farsiTranslation: 'تقاطع همسطح نیازمند توجه به وسایل نقلیه وارد شده از جاده‌های متقاطع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_7_5',
      italianText: 'L’intersezione (incrocio) a raso è un incrocio fra una strada statale e i binari del tram.',
      farsiTranslation: 'تقاطع همسطح، تقاطع بین یک جاده ملی (Statale) و ریل‌های تراموا است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_7_6',
      italianText: 'L’intersezione (incrocio) a raso è un incrocio fra una strada statale e un passo carrabile.',
      farsiTranslation: 'تقاطع همسطح، تقاطع بین یک جاده ملی و یک درب پارکینگ (Passo carrabile) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_7_7',
      italianText: 'L’intersezione (incrocio) a raso è un passaggio a livello dotato di barriere o semibarriere.',
      farsiTranslation: 'تقاطع همسطح یک گذرگاه ریلی (Passaggio a livello) مجهز به مانع یا نیم‌مانع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_7_8',
      italianText: 'L’intersezione (incrocio) a raso è un’intersezione a livelli sfalsati.',
      farsiTranslation: 'تقاطع همسطح یک تقاطع غیرهمسطح (A livelli sfalsati) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_7_9',
      italianText: 'L’intersezione (incrocio) a raso è un insieme di sovrappassi, sottopassi e rampe.',
      farsiTranslation: 'تقاطع همسطح مجموعه‌ای از روگذرها، زیرگذرها و رمپ‌ها است.',
      correctAnswer: 'Falso'
    },

    // 1.8 Banchina questions
    {
      id: 'q_8_1',
      italianText: 'La banchina è parte della strada, situata oltre la linea bianca continua di margine della carreggiata.',
      farsiTranslation: 'شانه جاده (Banchina) بخشی از جاده است که در فراتر از خط سفید ممتد حاشیه سواره‌رو قرار دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_2',
      italianText: 'La banchina divide la carreggiata in due corsie.',
      farsiTranslation: 'شانه جاده، سواره‌رو را به دو باند تقسیم می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_3',
      italianText: 'La banchina è parte della strada, posta al di fuori della carreggiata.',
      farsiTranslation: 'شانه جاده بخشی از جاده است که خارج از سواره‌رو (Carreggiata) قرار گرفته است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_4',
      italianText: 'La banchina non consente, di norma, il transito ai veicoli.',
      farsiTranslation: 'شانه جاده به طور معمول اجازه عبور (Transito) به وسایل نقلیه را نمی‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_8_5',
      italianText: 'La banchina è parte della carreggiata, destinata alla sosta dei veicoli.',
      farsiTranslation: 'شانه جاده بخشی از سواره‌رو است که برای پارک خودروها اختصاص یافته است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_6',
      italianText: 'Sulle banchine la sosta dei veicoli è consentita per un maximum di 5 ore.',
      farsiTranslation: 'روی شانه‌های جاده پارک خودروها حداکثر تا ۵ ساعت مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_8_7',
      italianText: 'La banchina è riservata ai veicoli lenti, nelle strade in salita.',
      farsiTranslation: 'شانه جاده مخصوص خودروهای کندرو در جاده‌های سربالایی است.',
      correctAnswer: 'Falso'
    },

    // 1.9 Passo carrabile questions
    {
      id: 'q_9_1',
      italianText: 'Il passo carrabile è una strada riservata ai carri trainati da animali.',
      farsiTranslation: 'درب پارکینگ (Passo carrabile) جاده‌ای اختصاصی برای عربه‌هایی است که توسط حیوانات کشیده می‌شوند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_2',
      italianText: 'Il passo carrabile è un segnale che impone la circolazione rotatoria su una piazza.',
      farsiTranslation: 'درب پارکینگ تابلویی است که حرکت میدانی (چرخشی) را در یک میدان اجبار می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_3',
      italianText: 'Il passo carrabile consente ai veicoli di accedere alle proprietà private laterali alla strada (garage, cortili, ecc.).',
      farsiTranslation: 'درب پارکینگ به وسایل نقلیه اجازه می‌دهد به ملک‌های خصوصی مجاور جاده (گاراژ، حیاط و غیره) دسترسی داشته باشند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_4',
      italianText: 'Il passo carrabile permette ai veicoli che circolano su una strada pubblica di accedere ad un’area laterale adibita alla sosta.',
      farsiTranslation: 'درب پارکینگ به وسایل نقلیه در حال حرکت در جاده عمومی اجازه می‌دهد به یک محوطه جانبی مخصوص پارک دسترسی یابند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_5',
      italianText: 'In corrispondenza del passo carrabile è consentita la sosta.',
      farsiTranslation: 'در مقابل درب پارکینگ، پارک کردن (Sosta) ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_6',
      italianText: 'Il passo carrabile è una strada riservata agli autocarri.',
      farsiTranslation: 'درب پارکینگ جاده‌ای اختصاصی برای کامیون‌ها است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_7',
      italianText: 'Il passo carrabile è un parcheggio scambiatore.',
      farsiTranslation: 'درب پارکینگ یک پارکینگ تعویضی (Parcheggio scambiatore برای حمل و نقل عمومی) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_8',
      italianText: 'Il passo carrabile deve essere corredato da apposito segnale, che riporti l’ente e il numero di autorizzazione.',
      farsiTranslation: 'درب پارکینگ باید مجهز به تابلوی مخصوصی باشد که سازمان صادرکننده و شماره مجوز را نشان دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_9',
      italianText: 'Il passo carrabile è un salvagente circolare per i pedoni.',
      farsiTranslation: 'درب پارکینگ یک سکوی ایمنی دایره‌ای (Salvagente) برای عابران پیاده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_9_10',
      italianText: 'Il passo carrabile è una zona per l’accesso dei veicoli alle proprietà laterali alla strada.',
      farsiTranslation: 'درب پارکینگ منطقه‌ای برای دسترسی وسایل نقلیه به ملک‌های مجاور جاده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_9_11',
      italianText: 'In corrispondenza del passo carrabile è consentita la fermata.',
      farsiTranslation: 'در مقابل درب پارکینگ، توقف کوتاه (Fermata) مجاز است.',
      correctAnswer: 'Vero'
    },

    // 1.10 Marciapiede questions
    {
      id: 'q_10_1',
      italianText: 'Il marciapiede consente la sosta dei veicoli solo in presenza di apposite strisce di parcheggio.',
      farsiTranslation: 'پیاده‌رو (Marciapiede) اجازه پارک خودروها را فقط (Solo) در صورت وجود خط‌کشی‌های مخصوص پارک می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_10_2',
      italianText: 'Il marciapiede è riservato ai pedoni e ai veicoli in sosta, qualora non sia rialzato.',
      farsiTranslation: 'پیاده‌رو در صورتی که برجسته و لبه‌دار نباشد، مخصوص عابران پیاده و خودروهای پارک‌شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_10_3',
      italianText: 'Il marciapiede è una parte della strada, al di fuori della carreggiata, destinata alla circolazione dei pedoni.',
      farsiTranslation: 'پیاده‌رو بخشی از جاده، در خارج از سواره‌رو است که برای تردد عابران پیاده اختصاص یافته است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_10_4',
      italianText: 'Il marciapiede è una parte della strada, rialzata o delimitata in altro modo, riservata ai pedoni.',
      farsiTranslation: 'پیاده‌رو بخشی از جاده است، برجسته یا به طریقی دیگر مرزبندی شده، که اختصاص به عابران پیاده دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_10_5',
      italianText: 'Il marciapiede è una parte della strada dove, di norma, è consentita la sosta dei ciclomotori.',
      farsiTranslation: 'پیاده‌رو بخشی از جاده است که به طور معمول پارک موتورگازی‌ها (Ciclomotori) در آن مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_10_6',
      italianText: 'Il marciapiede è una parte della carreggiata.',
      farsiTranslation: 'پیاده‌رو بخشی از سواره‌رو (Carreggiata) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_10_7',
      italianText: 'Il marciapiede è una parte della strada riservata anche alle biciclette.',
      farsiTranslation: 'پیاده‌رو بخشی از جاده است که برای دوچرخه‌ها نیز اختصاص یافته است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_10_8',
      italianText: 'Il marciapiede è una parte della strada riservata, di norma, ai pedoni.',
      farsiTranslation: 'پیاده‌رو بخشی از جاده است که به طور معمول به عابران پیاده اختصاص دارد.',
      correctAnswer: 'Vero'
    },

    // 1.11 Attraversamento pedonale (Blocco: 11004)
    {
      id: 'q_11_1',
      italianText: 'L’attraversamento pedonale viene segnalato con strisce bianche parallele.',
      farsiTranslation: 'خط‌کشی عابر پیاده با خطوط سفید موازی علامت‌گذاری می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_2',
      italianText: 'L’attraversamento pedonale è una parte della carreggiata sulla quale è vietata la fermata dei veicoli.',
      farsiTranslation: 'خط‌کشی عابر پیاده بخشی از سواره‌رو است که توقف کوتاه (Fermata) وسایل نقلیه روی آن ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_3',
      italianText: 'L’attraversamento pedonale è una parte della carreggiata, in cui i veicoli devono dare la precedenza ai pedoni, che attraversano sulle apposite strisce.',
      farsiTranslation: 'خط‌کشی عابر پیاده بخشی از سواره‌رو است که در آن وسایل نقلیه باید به عابران پیاده در حال عبور از روی خطوط مخصوص، حق تقدم بدهند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_4',
      italianText: 'L’attraversamento pedonale è una parte della carreggiata destinata al transito dei pedoni che attraversano.',
      farsiTranslation: 'خط‌کشی عابر پیاده بخشی از سواره‌رو است که برای عبور عابران پیاده در حال عرض‌کردن اختصاص یافته است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_5',
      italianText: 'L’attraversamento pedonale è una parte della carreggiata sulla quale è vietata la sosta dei veicoli.',
      farsiTranslation: 'خط‌کشی عابر پیاده بخشی از سواره‌رو است که پارک کردن (Sosta) وسایل نقلیه روی آن ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_11_6',
      italianText: 'L’attraversamento pedonale è una parte della strada, separata dalla carreggiata mediante una striscia gialla.',
      farsiTranslation: 'خط‌کشی عابر پیاده بخشی از جاده است که به وسیله یک خط زرد از سواره‌رو جدا شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_7',
      italianText: 'L’attraversamento pedonale è una parte della carreggiata vietata al transito dei veicoli.',
      farsiTranslation: 'خط‌کشی عابر پیاده بخشی از سواره‌رو است که عبور وسایل نقلیه از روی آن ممنوع (Vietata) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_8',
      italianText: 'L’attraversamento pedonale non fa parte della carreggiata.',
      farsiTranslation: 'خط‌کشی عابر پیاده جزء سواره‌رو (Carreggiata) به حساب نمی‌آید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_9',
      italianText: 'L’attraversamento pedonale è posto al di fuori della carreggiata ed è destinato al transito dei pedoni.',
      farsiTranslation: 'خط‌کشی عابر پیاده در خارج از سواره‌رو قرار گرفته و برای عبور عابران پیاده اختصاص دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_11_10',
      italianText: 'L’attraversamento pedonale è una parte della carreggiata in cui è consentita la fermata ma non la sosta dei veicoli.',
      farsiTranslation: 'خط‌کشی عابر پیاده بخشی از سواره‌رو است که در آن توقف کوتاه (Fermata) مجاز اما پارک کردن (Sosta) ممنوع است.',
      correctAnswer: 'Falso'
    },

    // 1.12 Salvagente (Blocco: 11021)
    {
      id: 'q_12_1',
      italianText: 'Il salvagente, posto in corrispondenza di attraversamenti pedonali, serve anche al riparo o alla sosta dei pedoni che attraversano la strada.',
      farsiTranslation: 'سکوی ایمنی (Salvagente) که در محل خط‌کشی‌های عابر پیاده قرار می‌گیرد، برای پناه گرفتن یا توقف عابران پیاده در حال عبور از عرض جاده نیز کاربرد دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_2',
      italianText: 'Il salvagente facilita la salita e la discesa dei passeggeri da tram, filobus o autobus.',
      farsiTranslation: 'سکوی ایمنی سوار و پیاده شدن مسافران را از تراموا، اتوبوس برقی یا اتوبوس تسهیل می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_3',
      italianText: 'Il salvagente può essere segnalato da colonnine luminose a luce gialla fissa.',
      farsiTranslation: 'سکوی ایمنی می‌تواند با ستون‌های نورانی دارای چراغ زرد ثابت (luce gialla fissa) علامت‌گذاری شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_12_4',
      italianText: 'Il salvagente serve a dividere i sensi di marcia in una strada a doppio senso di circolazione.',
      farsiTranslation: 'سکوی ایمنی برای جداسازی جهت‌های حرکت در یک جاده دوطرفه استفاده می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_5',
      italianText: 'Il salvagente serve a incanalare i veicoli in varie direzioni.',
      farsiTranslation: 'سکوی ایمنی برای هدایت و کانالیزه کردن وسایل نقلیه به جهت‌های مختلف استفاده می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_6',
      italianText: 'Il salvagente è una persona preposta al primo soccorso.',
      farsiTranslation: 'سکوی ایمنی (Salvagente) به معنای شخصی است که مسئول کمک‌های اولیه است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_12_7',
      italianText: 'Il salvagente è un itinerario ciclopedonale.',
      farsiTranslation: 'سکوی ایمنی یک مسیر ویژه دوچرخه‌سواری و پیاده‌روی است.',
      correctAnswer: 'Falso'
    },

    // 1.13 Isola di traffico (Blocco: 11006)
    {
      id: 'q_13_1',
      italianText: 'L’isola di traffico serve a facilitare l’incanalamento dei veicoli verso varie direzioni.',
      farsiTranslation: 'جزیره ترافیکی برای تسهیل هدایت و کانالیزه کردن وسایل نقلیه به سمت مسیرهای مختلف کاربرد دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_2',
      italianText: 'L’isola di traffico è delimitata da strisce bianche continue.',
      farsiTranslation: 'جزیره ترافیکی با خطوط ممتد سفید رنگ (strisce bianche continue) مرزبندی می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_3',
      italianText: 'L’isola di traffico può essere a raso o in rilievo (rialzata).',
      farsiTranslation: 'جزیره ترافیکی می‌تواند همسطح جاده (a raso) یا به صورت برجسته و لبه‌دار (in rilievo) باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_4',
      italianText: 'L’isola di traffico viene evidenziata mediante zebrature di colore bianco.',
      farsiTranslation: 'جزیره ترافیکی به وسیله خطوط هاشور سفید رنگ (zebrature) مشخص و نمایان می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_5',
      italianText: 'L’isola di traffico è una parte della strada sulla quale è vietato il transito dei motocicli.',
      farsiTranslation: 'جزیره ترافیکی بخشی از جاده است که عبور موتورسیکلت‌ها از روی آن ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_6',
      italianText: 'L’isola di traffico a raso è costituita da zebrature di colore bianco.',
      farsiTranslation: 'جزیره ترافیکی همسطح، از خطوط هاشور سفید رنگ روی کف جاده تشکیل شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_7',
      italianText: 'L’isola di traffico, se rialzata, è preceduta da zebrature di colore bianco.',
      farsiTranslation: 'جزیره ترافیکی اگر برجسته باشد، قبل از آن خطوط هاشور سفید رنگ قرار می‌گیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_8',
      italianText: 'L’isola di traffico è una parte della strada sulla quale è vietato il transito dei veicoli.',
      farsiTranslation: 'جزیره ترافیکی بخشی از جاده است که عبور تمامی وسایل نقلیه از روی آن ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_13_9',
      italianText: 'L’isola di traffico serve a separare la carreggiata dalla banchina.',
      farsiTranslation: 'جزیره ترافیکی برای جداسازی سواره‌رو (carreggiata) از شانه جاده (banchina) استفاده می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_10',
      italianText: 'L’isola di traffico serve per il transito dei pedoni.',
      farsiTranslation: 'جزیره ترافیکی برای عبور و مرور عابران پیاده اختصاص یافته است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_11',
      italianText: 'L’isola di traffico è una piazzola di sosta per i veicoli.',
      farsiTranslation: 'جزیره ترافیکی یک محل توقف اضطراری (piazzola di sosta) برای وسایل نقلیه است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_12',
      italianText: 'L’isola di traffico può essere percorsa solo dai taxi e dagli autobus urbani.',
      farsiTranslation: 'جزیره ترافیکی را فقط تاکسی‌ها و اتوبوس‌های شهری می‌توانند طی کنند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_13',
      italianText: 'L’isola di traffico è la parte della città con maggiore traffico.',
      farsiTranslation: 'جزیره ترافیکی به معنای بخشی از شهر است که بیشترین ترافیک را دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_14',
      italianText: 'L’isola di traffico corrisponde, in genere, al centro storico della città.',
      farsiTranslation: 'جزیره ترافیکی عموماً با بافت تاریخی و مرکزی شهر مطابقت دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_15',
      italianText: 'L’isola di traffico è una piazzola per effettuare l’inversione di marcia.',
      farsiTranslation: 'جزیره ترافیکی محوطه‌ای برای دور زدن و تغییر جهت حرکت (inversione di marcia) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_16',
      italianText: 'L’isola di traffico è posta al di fuori della strada.',
      farsiTranslation: 'جزیره ترافیکی در خارج از محوطه جاده واقع شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_17',
      italianText: 'L’isola di traffico serve per la fermata dei veicoli.',
      farsiTranslation: 'جزیره ترافیکی برای توقف کوتاه وسایل نقلیه استفاده می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_18',
      italianText: 'L’isola di traffico facilita la salita e la discesa di passeggeri da tram, filobus e autobus.',
      farsiTranslation: 'جزیره ترافیکی سوار و پیاده شدن مسافران تراموا، اتوبوس برقی و اتوبوس را آسان می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_19',
      italianText: 'L’isola di traffico è una zona destinata al parcheggio dei veicoli.',
      farsiTranslation: 'جزیره ترافیکی محدوده‌ای است که برای پارکینگ خودروها اختصاص یافته است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_20',
      italianText: 'L’isola di traffico è un’area pedonale urbana.',
      farsiTranslation: 'جزیره ترافیکی یک منطقه پیاده‌رو شهری است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_13_21',
      italianText: 'L’isola di traffico è una parte della strada sulla quale è consentito il transito dei ciclomotori.',
      farsiTranslation: 'جزیره ترافیکی بخشی از جاده است که عبور موتورگازی‌ها از روی آن مجاز است.',
      correctAnswer: 'Falso'
    },

    // 1.14 Passaggio a livello (Blocco: 11010)
    {
      id: 'q_14_1',
      italianText: 'In un passaggio a livello si possono trovare le barriere.',
      farsiTranslation: 'در یک گذرگاه ریلی (Passaggio a livello) ممکن است مانع‌ها یا راه‌بندهای کامل (barriere) وجود داشته باشند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_2',
      italianText: 'In un passaggio a livello si possono trovare le semibarriere.',
      farsiTranslation: 'در یک گذرگاه ریلی ممکن است نیم‌مانع‌ها یا نیم‌راه‌بندها (semibarriere) وجود داشته باشند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_3',
      italianText: 'In un passaggio a livello si possono trovare le luci rosse.',
      farsiTranslation: 'در یک گذرگاه ریلی ممکن است چراغ‌های قرمز وجود داشته باشند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_4',
      italianText: 'In vicinanza di un passaggio a livello si trovano i pannelli distanziometrici.',
      farsiTranslation: 'در نزدیکی یک گذرگاه ریلی، تابلوهای سنجش و نشان‌دهنده فاصله (pannelli distanziometrici) قرار دارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_5',
      italianText: 'In un passaggio a livello si può trovare la croce di S. Andrea.',
      farsiTranslation: 'در یک گذرگاه ریلی ممکن است صلیب سنت آندریا وجود داشته باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_6',
      italianText: 'In un passaggio a livello si può trovare un dispositivo di segnalazione acustica.',
      farsiTranslation: 'در یک گذرگاه ریلی ممکن است یک دستگاه هشدار صوتی (زنگ) وجود داشته باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_7',
      italianText: 'Il passaggio a livello è un cavalcavia ferroviario o tranviario.',
      farsiTranslation: 'گذرگاه ریلی یک پل روگذر (cavalcavia) راه‌آهن یا تراموا است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_8',
      italianText: 'In un passaggio a livello si possono trovare le luci gialle lampeggianti.',
      farsiTranslation: 'در یک گذرگاه ریلی ممکن است چراغ‌های زرد چشمک‌زن وجود داشته باشند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_9',
      italianText: 'Il passaggio a livello è caratterizzato dalla presenza di un attraversamento autostradale.',
      farsiTranslation: 'مشخصه اصلی گذرگاه ریلی، وجود یک تقاطع اتوبانی است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_10',
      italianText: 'In un passaggio a livello si possono trovare le corsie di accelerazione.',
      farsiTranslation: 'در یک گذرگاه ریلی ممکن است باندهای شتاب (corsie di accelerazione) وجود داشته باشند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_11',
      italianText: 'Il passaggio a livello è un passo carrabile.',
      farsiTranslation: 'گذرگاه ریلی همان درب پارکینگ یا راه خودرو رو خصوصی (passo carrabile) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_12',
      italianText: 'Il passaggio a livello è caratterizzato dalla presenza di un sottopassaggio.',
      farsiTranslation: 'مشخصه اصلی گذرگاه ریلی، وجود یک زیرگذر (sottopassaggio) است.',
      correctAnswer: 'Falso'
    },

    // 1.15 Area pedonale (Blocco: 11011)
    {
      id: 'q_15_1',
      italianText: 'Nelle aree pedonali possono transitare i veicoli ad emissione zero (elettrici), se espressamente consentito.',
      farsiTranslation: 'در مناطق پیاده‌رو، وسایل نقلیه با آلایندگی صفر (برقی) در صورت موافقت و قید صریح روی تابلو، اجازه عبور دارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_15_2',
      italianText: 'Nelle aree pedonali possono transitare i pedoni.',
      farsiTranslation: 'در مناطق پیاده‌رو، عابران پیاده اجازه عبور و مرور دارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_15_3',
      italianText: 'Nelle aree pedonali possono transitare le biciclette.',
      farsiTranslation: 'در مناطق پیاده‌رو، دوچرخه‌ها اجازه عبور و مرور دارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_15_4',
      italianText: 'Nelle aree pedonali possono transitare i veicoli al servizio di persone diversamente abili.',
      farsiTranslation: 'در مناطق پیاده‌رو، وسایل نقلیه در خدمت افراد دارای معلولیت جسمی اجازه عبور دارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_15_5',
      italianText: 'Nelle aree pedonali possono transitare i veicoli della polizia, con sirena e luce lampeggiante blu in funzione.',
      farsiTranslation: 'در مناطق پیاده‌رو، خودروهای پلیس در صورتی که آژیر و چراغ چشمک‌زن آبی آن‌ها فعال باشد، اجازه عبور دارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_15_6',
      italianText: 'Nelle aree pedonali possono transitare gli autoveicoli dei vigili del fuoco, con luce lampeggiante blu e sirena in funzione.',
      farsiTranslation: 'در مناطق پیاده‌رو، خودروهای آتش‌نشانی در صورت فعال بودن چراغ چشمک‌زن آبی و آژیر، اجازه عبور دارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_15_7',
      italianText: 'Nelle aree pedonali possono transitare tutti i motocicli, purché diano la precedenza ai pedoni.',
      farsiTranslation: 'در مناطق پیاده‌رو، تمامی موتورسیکلت‌ها اجازه عبور دارند، به شرطی که به عابران پیاده حق تقدم بدهند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_15_8',
      italianText: 'Nelle aree pedonali possono transitare i trattori stradali, con velocità non superiore a 30 km/h.',
      farsiTranslation: 'در مناطق پیاده‌رو، کشنده‌های جاده‌ای (trattori stradali) با سرعت حداکثر ۳۰ کیلومتر بر ساعت اجازه حرکت دارند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_15_9',
      italianText: 'Nelle aree pedonali i ciclomotori possono transitare solo di giorno.',
      farsiTranslation: 'در مناطق پیاده‌رو، موتورگازی‌ها فقط در طول روز اجازه عبور دارند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_15_10',
      italianText: 'Nelle aree pedonali possono transitare tutti gli autoveicoli, ma con prudenza.',
      farsiTranslation: 'در مناطق پیاده‌رو، تمامی وسایل نقلیه خودرویی اجازه عبور دارند، اما باید با احتیاط حرکت کنند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_15_11',
      italianText: 'Nelle aree pedonali possono transitare i quadricicli a motore, purché non superino la velocità di 50 km/h.',
      farsiTranslation: 'در مناطق پیاده‌رو، چهارچرخه‌های موتوری (quadricicli a motore) اجازه عبور دارند، به شرطی که سرعت آن‌ها از ۵۰ کیلومتر بر ساعت بیشتر نشود.',
      correctAnswer: 'Falso'
    },

    // 1.16 Zona a traffico limitato (Blocco: 11009)
    {
      id: 'q_16_1',
      italianText: 'Una zona a traffico limitato è un’area in cui può essere limitata la circolazione dei veicoli solo in alcune ore.',
      farsiTranslation: 'منطقه با ترافیک محدود (ZTL) محدوده‌ای است که حرکت وسایل نقلیه در آن ممکن است فقط در ساعت‌های خاصی محدود شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_16_2',
      italianText: 'Una zona a traffico limitato è un’area nella quale può essere limitata la circolazione solo di particolari categorie di veicoli.',
      farsiTranslation: 'منطقه با ترافیک محدود محدوده‌ای است که حرکت در آن ممکن است فقط برای دسته‌های خاصی از وسایل نقلیه محدود شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_16_3',
      italianText: 'In una zona a traffico limitato possono circolare solo i veicoli autorizzati.',
      farsiTranslation: 'در منطقه با ترافیک محدود، فقط وسایل نقلیه دارای مجوز (veicoli autorizzati) اجازه تردد دارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_16_4',
      italianText: 'Una zona a traffico limitato è un’area nella quale può essere limitata la circolazione solo a particolari categorie di utenti.',
      farsiTranslation: 'منطقه با ترافیک محدود محدوده‌ای است که عبور و مرور در آن ممکن است فقط برای دسته‌های خاصی از کاربران (utenti) محدود شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_16_5',
      italianText: 'Una zona a traffico limitato è delimitata da appositi segnali stradali di inizio e di fine.',
      farsiTranslation: 'منطقه با ترافیک محدود با تابلوهای مخصوص راهنمایی شروع و پایان مرزبندی می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_16_6',
      italianText: 'In una zona a traffico limitato non possono entrare più di un certain numero di veicoli.',
      farsiTranslation: 'در یک منطقه با ترافیک محدود، تعداد مشخص و محدودی خودرو مجاز به ورود همزمان هستند و بیشتر از آن ظرفیت ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_16_7',
      italianText: 'Una zona a traffico limitato è un’area nella quale è consentito solo il transito di ciclomotori e biciclette.',
      farsiTranslation: 'منطقه با ترافیک محدود محدوده‌ای است که در آن فقط عبور موتورگازی‌ها و دوچرخه‌ها مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_16_8',
      italianText: 'Una zona a traffico limitato è un’area sempre vietata al transito dei veicoli a motore.',
      farsiTranslation: 'منطقه با ترافیک محدود محدوده‌ای است که عبور وسایل نقلیه موتوری همیشه در آن ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_16_9',
      italianText: 'Una zona a traffico limitato è un’area vietata al transito dei pedoni durante le ore notturne.',
      farsiTranslation: 'منطقه با ترافیک محدود محدوده‌ای است که عبور عابران پیاده در طول ساعات شب در آن ممنوع است.',
      correctAnswer: 'Falso'
    }
  ]
};