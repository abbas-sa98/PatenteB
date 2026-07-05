import { Chapter } from '../../types';

export const chapter4: Chapter = {
  id: 4,
  title: 'Segnali di Divieto',
  farsiTitle: 'تابلوهای ممنوعیت',
  lessons: [
    {
      id: 'topic_4_1',
      title: '4.1 Divieto di transito',
      italianText: `I segnali di divieto appartengono ai segnali di prescrizione: vietano o limitano il transito di tutti o di alcuni veicoli e possono imporre limitazioni relative alla velocità, al sorpasso e alla sosta. In genere sono circolari con bordo rosso; fanno eccezione i segnali di fine prescrizione, circolari e bianchi, e quelli relativi al parcheggio.

Il segnale DIVIETO DI TRANSITO vieta la circolazione nei due sensi a tutti i veicoli, compresi ciclomotori, motocicli, biciclette, macchine agricole e quadricicli.

È posto su entrambi gli accessi della strada e, senza pannelli integrativi, vale 24 ore su 24.

Consente il transito ai pedoni.

Può avere validità limitata nel tempo (con pannello integrativo).

Non consente l'accesso per effettuare sosta o carico/scarico. Non indica senso unico.`,
      farsiTranslation: `تابلوهای ممنوعیت جزو تابلوهای دستوری هستند: عبور همه یا برخی وسایل نقلیه را ممنوع یا محدود می‌کنند و ممکن است محدودیت‌هایی دربارهٔ سرعت، سبقت و توقف ایجاد کنند. این تابلوها معمولاً دایره‌ای با حاشیهٔ قرمز هستند؛ تابلوهای پایان دستور که دایره‌ای و سفیدند و تابلوهای مربوط به پارکینگ از این قاعده مستثنا هستند.

تابلوی «عبور ممنوع» رفت‌وآمد همهٔ وسایل نقلیه را در هر دو جهت ممنوع می‌کند؛ از جمله موتورگازی، موتورسیکلت، دوچرخه، ماشین کشاورزی و چهارچرخه.

این تابلو در هر دو ورودی جاده نصب می‌شود و اگر صفحهٔ تکمیلی نداشته باشد، در تمام ۲۴ ساعت اعتبار دارد. تنها عابران پیاده مجاز به عبور هستند.

ورود برای پارک کردن (Sosta) یا تخلیه بار مجاز نیست. این تابلو نشانه جاده یک‌طرفه (Senso unico) نمی‌باشد.`,
      imageUrl: '/images/4-1.jpg',
      vocabularyIds: [ 'divieto_di_transito', 'circolazione_nei_due_sensi', 'tutti_i_veicoli', 'accessi', 'pedoni', 'indica', 'non_indica', 'strada', 'per', 'veicoli', 'non_consente', 'accesso', 'sosta', 'senso_unico', 'vieta', 'circolazione', 'posto', 'ciclomotori', 'quadricicli', 'inclusi', 'entrambi', 'limitata', 'effettuare', 'non', 'con', 'tutti', 'puo', 'possono', 'della', 'alla', 'nel', 'nei', 'gli', 'segnale', 'segnali', 'senso', 'unico', 'due', 'divieto', 'avere', 'pannello', 'pannelli', 'motocicli', 'agricole', 'carico', 'parcheggio', 'imporre', 'genere', 'e_verb'],
      questionIds: Array.from({ length: 17 }, (_, i) => `q_4_1_${i + 1}`)
    },
    {
      id: 'topic_4_2',
      title: '4.2 Divieto di transito per particolari categorie di veicoli',
      italianText: `Vieta il transito alle categorie di veicoli rappresentate in figura (es. autotreni ed autoarticolati).

Indica che possono transitare tutti i veicoli ESCLUSI quelli raffigurati.

Non indica un parcheggio per autocarri né un itinerario obbligatorio.`,
      farsiTranslation: `عبور ممنوع برای دسته‌های خاصی از وسایل نقلیه (مانند تریلی‌ها و کامیون‌های مفصل‌دار).

نشان می‌دهد که عبور وسایل نقلیه نشان‌داده‌شده در تصویر ممنوع است، اما سایر خودروها (Veicoli) می‌توانند عبور کنند.

این تابلو پارکینگ کامیون‌ها یا مسیر اجباری (Itinerario obbligatorio) را نشان نمی‌دهد. همچنین ممنوعیت توقف (Divieto di sosta) نیست.`,
      imageUrl: '/images/4-2.jpg',
      vocabularyIds: [ 'particolari_categorie', 'autotreni', 'autoarticolati', 'esclusi', 'indica', 'non_indica', 'per', 'veicoli', 'autocarri', 'obbligatorio', 'vieta', 'tutti_i_veicoli', 'rappresentate', 'figura', 'possono', 'transitare', 'quelli', 'raffigurati', 'itinerario', 'non', 'tutti', 'un', 'che', 'alle', 'categorie', 'parcheggio'],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_4_2_${i + 1}`)
    },
    {
      id: 'topic_4_3',
      title: '4.3 Senso vietato',
      italianText: `Vieta di entrare in una strada accessibile invece dall'altra parte (strada a senso unico).

Il divieto vale anche per taxi, quadricicli e veicoli senza motore.

Il divieto deve essere rispettato anche nelle ore notturne.

Non vieta la sosta, non vieta il sorpasso (se c'è spazio). Non consente l'accesso ai residenti o traffico locale (se non specificato).`,
      farsiTranslation: `ورود ممنوع (Senso vietato).

نشان‌دهنده خیابانی یک‌طرفه (Senso unico) است که ورود از این سمت آن برای تمامی وسایل نقلیه (حتی تاکسی، موتور و دوچرخه) ممنوع است. این تابلو در شبانه‌روز اعتبار دارد.

این تابلو "توقف ممنوع" یا "سبقت ممنوع" نیست. به افراد محلی (Traffico locale) اجازه ورود استثنایی نمی‌دهد.`,
      imageUrl: '/images/4-3.jpg',
      vocabularyIds: [ 'senso_vietato', 'accessibile', 'senso_unico', 'ore_notturne', 'strada', 'se', 'per', 'veicoli', 'spazio', 'entrare', 'non_consente', 'accesso', 'essere', 'anche', 'sorpasso', 'sosta', 'senza', 'vale', 'vieta', 'quadricicli', 'taxi', 'invece', 'altra', 'deve', 'rispettato', 'residenti', 'traffico', 'locale', 'non', 'una', 'nelle', 'senso', 'unico', 'parte', 'divieto', 'motore', 'e_verb'],
      questionIds: Array.from({ length: 16 }, (_, i) => `q_4_3_${i + 1}`)
    },
    {
      id: 'topic_4_4',
      title: '4.4 Distanziamento minimo obbligatorio',
      italianText: `Obbliga a mantenere una distanza di ALMENO 70 metri dal veicolo che precede.

Vale per tutti i veicoli, compresi i motocicli.

Va rispettato anche quando si viaggia a bassa velocità.

Non indica una distanza massima, non è un divieto di transito, non è un limite di velocità.`,
      farsiTranslation: `حداقل فاصله اجباری (Distanziamento minimo obbligatorio).

راننده باید حداقل فاصله درج‌شده (مثلاً ۷۰ متر) را از خودروی جلویی حفظ کند. این قانون حتی در سرعت‌های پایین و برای موتورها نیز صدق می‌کند. حرکت در فاصله‌های بیشتر (مثلاً ۸۰ متر) مجاز است.

این عدد طول کابل بکسل، محدودیت سرعت (Velocità) یا حداکثر فاصله نیست.`,
      imageUrl: '/images/4-4.jpg',
      vocabularyIds: [ 'distanziamento_minimo', 'obbligatorio', 'distanza', 'veicolo_che_precede', 'motocicli', 'indica', 'non_indica', 'almeno', 'per', 'mantenere', 'veicoli', 'veicolo', 'anche', 'quando', 'vale', 'obbliga', 'precede', 'massima', 'divieto_di_transito', 'tutti_i_veicoli', 'rispettato', 'compresi', 'bassa', 'non', 'tutti', 'una', 'un', 'che', 'dal', 'divieto', 'metri', 'limite', 'e_verb'],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_4_4_${i + 1}`)
    },
    {
      id: 'topic_4_5',
      title: '4.5 Divieto di segnalazioni acustiche',
      italianText: `Vieta l'uso del clacson (segnalazioni acustiche).

Uso consentito SOLO in caso di pericolo immediato o trasporto di feriti/ammalati gravi.

Non vale solo di notte, non consente l'uso per "richiamare l'attenzione" senza pericolo.`,
      farsiTranslation: `بوق زدن ممنوع (Divieto di segnalazioni acustiche).

استفاده از بوق ممنوع است، مگر در شرایط خطر فوری (Pericolo immediato) یا هنگام حمل مجروحان و بیماران بدحال.

این قانون محدود به ساعات شب (۸ شب تا ۸ صبح) نیست، بلکه همیشگی است. بوق زدن در ترافیک‌های عادی (Ingorgo) برای جلب توجه مجاز نیست.`,
      imageUrl: '/images/4-5.jpg',
      vocabularyIds: [ 'segnalazioni_acustiche', 'clacson', 'pericolo_immediato', 'feriti', 'solo', 'pericolo', 'in_caso_di', 'per', 'non_consente', 'consentito', 'senza', 'vale', 'vieta', 'immediato', 'non', 'del', 'trasporto', 'attenzione', 'notte'],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_4_5_${i + 1}`)
    },
    {
      id: 'topic_4_6',
      title: '4.6 Divieto di sorpasso',
      italianText: `Vieta di sorpassare veicoli a motore DIVERSI da ciclomotori e motocicli.

Un'autovettura può sorpassare un motociclo, un ciclomotore, o un veicolo senza motore.

Vietato il sorpasso fra autoveicoli (es. auto che sorpassa auto o autocarro), anche senza superare la striscia continua.

Sorpasso consentito a veicoli a trazione animale, a braccia, biciclette.

Non si può sorpassare una macchina agricola o operatrice se si oltrepassano i limiti previsti.`,
      farsiTranslation: `سبقت ممنوع (Divieto di sorpasso).

سبقت گرفتن از وسایل نقلیه موتوردار ممنوع است، اما سبقت گرفتن از موتورهای دوچرخ (Motocicli)، موتورگازی‌ها (Ciclomotori) و وسایل بدون موتور (مانند گاری و دوچرخه) مجاز است. خودروهای سواری نمی‌توانند از یکدیگر یا از کامیون‌ها سبقت بگیرند.

این تابلو به معنای ممنوعیت کامل سبقت از هر وسیله‌ای نیست. سبقت یک خودرو از موتور مجاز است، اما موتور نمی‌تواند از ماشین سبقت بگیرد.`,
      imageUrl: '/images/4-6.jpg',
      vocabularyIds: [ 'divieto_di_sorpasso', 'veicoli_a_motore', 'autoveicoli', 'ciclomotori', 'macchine_agricole', 'trazione_animale', 'se', 'vietato', 'veicoli', 'veicolo', 'biciclette', 'anche', 'vietato_past', 'consentito', 'sorpasso', 'senza', 'vieta', 'motocicli', 'superare', 'diversi', 'autovettura', 'agricola', 'operatrice', 'previsti', 'non', 'puo', 'una', 'un', 'che', 'fra', 'limiti', 'striscia', 'continua', 'motore', 'braccia'],
      questionIds: Array.from({ length: 35 }, (_, i) => `q_4_6_${i + 1}`)
    },
    {
      id: 'topic_4_7',
      title: '4.7 Fine divieto di sorpasso',
      italianText: `Indica la fine del divieto di sorpasso precedentemente imposto.

Segnale di fine prescrizione, valido per 24 ore.

Permane il divieto se per sorpassare si deve oltrepassare la striscia continua.

Non indica la fine del limite di velocità o del divieto di sosta.`,
      farsiTranslation: `پایان سبقت ممنوع (Fine divieto di sorpasso).

نشان‌دهنده مکانی است که تابلوی سبقت ممنوع قبلی لغو می‌شود. اگر خط ممتد (Striscia continua) در وسط جاده باشد، همچنان نباید از روی خط رد شد.

این تابلو مختص سواری‌ها نیست، نشان‌دهنده پایان محدودیت سرعت یا پایان توقف ممنوع نیز نمی‌باشد.`,
      imageUrl: '/images/4-7.jpg',
      vocabularyIds: [ 'fine_divieto', 'precedente_imposto', 'fine_prescrizione', 'indica', 'non_indica', 'se', 'per', 'sorpasso', 'sosta', 'fine', 'prescrizione', 'divieto_di_sorpasso', 'divieto_di_sosta', 'deve', 'non', 'del', 'segnale', 'divieto', 'limite', 'striscia', 'continua'],
      questionIds: Array.from({ length: 14 }, (_, i) => `q_4_7_${i + 1}`)
    },
    {
      id: 'topic_4_8',
      title: '4.8 Fine divieto di sorpasso per veicoli merci oltre 3,5 t',
      italianText: `Indica la fine del divieto di sorpasso per veicoli merci di massa a pieno carico > 3,5t.

In sua presenza, un autocarro o autotreno pesante può effettuare manovre di sorpasso.

Non è un segnale di pericolo, non vale per gli autobus (che non erano soggetti al divieto originale).`,
      farsiTranslation: `پایان سبقت ممنوع برای ماشین‌های باری سنگین‌تر از ۳.۵ تن (Fine divieto di sorpasso per veicoli oltre 3,5 t).

تریلی‌ها و کامیون‌های سنگین از این نقطه به بعد مجاز به سبقت گرفتن هستند.

این تابلو مربوط به اتوبوس‌ها نیست (چون محدودیت قبلی اصلاً شامل آنها نبود). عبور کامیون‌ها را ممنوع نمی‌کند.`,
      imageUrl: '/images/4-8.jpg',
      vocabularyIds: [ 'veicoli_merci', 'massa_a_pieno_carico', 'autotreno', 'indica', 'pericolo', 'per', 'presenza', 'veicoli', 'manovre', 'sorpasso', 'vale', 'fine', 'divieto_di_sorpasso', 'autobus', 'effettuare', 'non', 'puo', 'un', 'che', 'del', 'gli', 'segnale', 'divieto', 'merci', 'massa', 'carico', 'e_verb'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_4_8_${i + 1}`)
    },
    {
      id: 'topic_4_9',
      title: '4.9 Divieto di sorpasso per veicoli merci oltre 3,5 t',
      italianText: `Vieta ai veicoli destinati al trasporto COSE (merci) con massa > 3,5t di sorpassare veicoli a motore.

Consente ad autobus e autocaravan > 3,5t di sorpassare (perché adibiti al trasporto PERSONE).

Un'auto o autocarro leggero (<3,5t) può sorpassare un autotreno.

Non vieta il transito, non vale per veicoli merci leggeri (fino a 3,5t).`,
      farsiTranslation: `سبقت ممنوع برای ماشین‌های باری سنگین‌تر از ۳.۵ تن.

کامیون‌ها و تریلی‌های حمل بار (Trasporto di cose) بالای ۳.۵ تن حق سبقت گرفتن ندارند. اما ماشین‌های حمل مسافر (مانند اتوبوس و کمپر) حتی اگر بالای ۳.۵ تن باشند، می‌توانند سبقت بگیرند.

کامیون‌های کمتر از ۳.۵ تن (سبک) از این قانون مستثنی هستند و می‌توانند سبقت بگیرند. این تابلو عبور را ممنوع نمی‌کند.`,
      imageUrl: '/images/4-9.jpg',
      vocabularyIds: [ 'trasporto_cose', 'trasporto_persone', 'autocaravan', 'autobus', 'per', 'veicoli', 'destinati_pl', 'vale', 'vieta', 'veicoli_a_motore', 'veicoli_merci', 'autotreno', 'non', 'con', 'puo', 'un', 'perché', 'motore', 'merci', 'massa', 'trasporto', 'persone', 'adibiti'],
      questionIds: [...Array.from({ length: 16 }, (_, i) => `q_4_9_${i + 1}`), 'q_4_missing_camper']
    },
    {
      id: 'topic_4_10',
      title: '4.10 Limite massimo di velocità',
      italianText: `Vieta di superare la velocità indicata (es. 80 km/h).

Vale immediatamente dopo il segnale. Segnale di prescrizione (divieto).

Consente di circolare a velocità inferiore o uguale a quella indicata.

Non indica una velocità consigliata, non è un limite minimo, non impone distanza di sicurezza.`,
      farsiTranslation: `حداکثر سرعت مجاز (Limite massimo di velocità).

رانندگی با سرعت بیشتر از عدد درج‌شده (مثلاً ۸۰) ممنوع است. سرعت‌های کمتر یا مساوی مجازند. قانون از همان لحظه عبور از تابلو اعمال می‌شود.

این تابلو سرعت توصیه‌شده (Velocità consigliata) یا حداقل سرعت (Limite minimo) نیست. همچنین نشانه فاصله ایمنی (Distanza di sicurezza) نیست.`,
      imageUrl: '/images/4-10.jpg',
      vocabularyIds: [ 'limite_massimo', 'superare', 'velocita', 'inferiore_o_uguale', 'indica', 'non_indica', 'distanza_di_sicurezza', 'distanza', 'vale', 'impone', 'vieta', 'prescrizione', 'non', 'dopo', 'una', 'un', 'segnale', 'divieto', 'circolare', 'limite', 'minimo', 'e_verb'],
      questionIds: Array.from({ length: 25 }, (_, i) => `q_4_10_${i + 1}`)
    },
    {
      id: 'topic_4_11',
      title: '4.11 Fine limite massimo di velocità',
      italianText: `Indica la fine del limite massimo di velocità precedente.

Consente di circolare a velocità superiore a quella indicata, ma sempre entro i limiti generali della strada.

È un segnale di fine prescrizione.

Non vieta di superare la velocità di 50 km/h. Non prescrive di marciare a destra se lenti.`,
      farsiTranslation: `پایان محدودیت سرعت (Fine limite massimo di velocità).

محدودیت سرعت قبلی لغو می‌شود و می‌توانید سرعت خود را افزایش دهید (البته تا سقف سرعت مجازِ کلیِ آن جاده).

این تابلو سرعت ۵۰ کیلومتر را اجباری یا ممنوع نمی‌کند. نشانگر پایان سایر ممنوعیت‌ها نیست.`,
      imageUrl: '/images/4-11.jpg',
      vocabularyIds: [ 'fine_limite', 'limiti_vigenti', 'superiore', 'indica', 'strada', 'se', 'sempre', 'destra', 'prescrive', 'vieta', 'fine', 'prescrizione', 'fine_prescrizione', 'limite_massimo', 'superare', 'non', 'un', 'della', 'del', 'segnale', 'circolare', 'marciare', 'limite', 'limiti', 'massimo', 'generali', 'e_verb'],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_4_11_${i + 1}`)
    },
    {
      id: 'topic_4_12',
      title: '4.12 Transito vietato ai pedoni',
      italianText: `Vieta il transito ai pedoni (24h su 24h).

Consente il transito ad autoveicoli, motocicli, quadricicli e biciclette.

Non vale solo in determinate fasce orarie. Non obbliga i pedoni a circolare sul margine sinistro.`,
      farsiTranslation: `عبور عابران پیاده ممنوع (Transito vietato ai pedoni).

عبور و مرور برای عابران پیاده در تمام ساعات شبانه‌روز ممنوع است. خودروها، موتورها و دوچرخه‌ها حق عبور دارند.

این تابلو ورود موتورگازی‌ها را ممنوع نمی‌کند. همچنین نشان‌دهنده پارک بازی یا مسیر ویژه پیاده‌روی (Percorso pedonale) نیست.`,
      imageUrl: '/images/4-12.jpg',
      vocabularyIds: [ 'transito_vietato', 'pedoni', 'autoveicoli', 'solo', 'biciclette', 'vale', 'obbliga', 'vieta', 'motocicli', 'quadricicli', 'non', 'sul', 'circolare', 'margine', 'sinistro'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_4_12_${i + 1}`)
    },
    {
      id: 'topic_4_13',
      title: '4.13 Transito vietato ai veicoli a braccia',
      italianText: `Vieta il transito ai veicoli a braccia (es. carretti a mano).

Consente il transito di biciclette, ciclomotori, autovetture.

Non indica una strada per venditori ambulanti, né vieta il transito ai veicoli a motore.`,
      farsiTranslation: `عبور گاری‌های دستی ممنوع (Transito vietato ai veicoli a braccia).

چرخ دستی‌ها و گاری‌هایی که با نیروی انسان حرکت می‌کنند حق ورود ندارند. عبور ماشین، دوچرخه و موتور آزاد است.

این تابلو مربوط به دستفروشان (Venditori ambulanti) یا حیوانات بارکش (Trazione animale) نیست.`,
      imageUrl: '/images/4-13.jpg',
      vocabularyIds: [ 'veicoli_a_braccia', 'carretti_a_mano', 'venditori_ambulanti', 'indica', 'non_indica', 'strada', 'per', 'veicoli', 'biciclette', 'vieta', 'veicoli_a_motore', 'ciclomotori', 'non', 'una', 'motore', 'autovetture', 'braccia'],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_4_13_${i + 1}`)
    },
    {
      id: 'topic_4_14',
      title: '4.14 Transito vietato ai veicoli a trazione animale',
      italianText: `Vieta il transito ai veicoli a trazione animale (trainati da cavalli, asini o carrozze).

Consente il transito di motocicli e autoveicoli.

Non vieta il transito ai veicoli a motore né ai veicoli a braccia. Non indica strada riservata a carri agricoli.`,
      farsiTranslation: `عبور وسایل نقلیه با نیروی کشش حیوانی ممنوع.

گاری‌های اسبی و درشکه‌ها (Carrozze a cavalli) حق عبور ندارند. ماشین‌ها و موتورها مجازند.

ورود ماشین‌های کشاورزی (Carri agricoli) یا وسایل نقلیه بدون موتور (کلا) را ممنوع نمی‌کند.`,
      imageUrl: '/images/4-14.jpg',
      vocabularyIds: [ 'trazione_animale', 'cavalli', 'asini', 'carrozze', 'carri_agricoli', 'indica', 'non_indica', 'strada', 'veicoli', 'vieta', 'motocicli', 'veicoli_a_motore', 'autoveicoli', 'veicoli_a_braccia', 'non', 'motore', 'braccia'],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_4_14_${i + 1}`)
    },
    {
      id: 'topic_4_15',
      title: '4.15 Transito vietato alle biciclette',
      italianText: `Vieta il transito alle biciclette, inclusi tandem e quadricicli a pedali.

Consente il transito a quadricicli a motore, pedoni e ciclomotori.

Non consente il transito di notte, non indica un parcheggio per biciclette, non vieta il transito ai motocicli.`,
      farsiTranslation: `ورود دوچرخه ممنوع.

عبور دوچرخه‌های معمولی، دوچرخه‌های دونفره (Tandem) و چهارچرخه‌های پدالی ممنوع است. عابران، موتورگازی‌ها (Ciclomotori) و خودروها مجاز به عبور هستند.

این تابلو نشان‌دهنده مسیر ویژه دوچرخه یا پارکینگ دوچرخه نیست. عبور موتورگازی در این مسیر ممنوعیتی ندارد.`,
      imageUrl: '/images/4-15.jpg',
      vocabularyIds: [ 'biciclette', 'tandem', 'quadricicli_a_pedale', 'ciclomotori', 'indica', 'non_indica', 'per', 'non_consente', 'pedoni', 'vieta', 'motocicli', 'quadricicli', 'inclusi', 'non', 'un', 'alle', 'motore', 'parcheggio', 'notte'],
      questionIds: Array.from({ length: 13 }, (_, i) => `q_4_15_${i + 1}`)
    },
    {
      id: 'topic_4_16',
      title: '4.16 Transito vietato ai motocicli',
      italianText: `Vieta il transito a tutti i motocicli di QUALSIASI cilindrata.

Consente il transito ad autovetture, biciclette, ciclomotori, tricicli e quadricicli a motore.

Non è limitato a cilindrate >125cc. Non vieta a tutti i veicoli a due ruote (bici/ciclomotori possono passare).`,
      farsiTranslation: `ورود موتورسیکلت ممنوع.

تمام موتورسیکلت‌ها (Motocicli) با هر حجم موتوری از ورود منع می‌شوند. ماشین‌ها، دوچرخه‌ها و حتی موتورهای گازی (Ciclomotori) و سه‌چرخه‌ها مجاز به عبورند.

این تابلو ورود همه وسایل دوچرخ را ممنوع نمی‌کند. ربطی به مسیر ویژه موتورها ندارد.`,
      imageUrl: '/images/4-16.jpg',
      vocabularyIds: [ 'motocicli', 'qualsiasi_cilindrata', 'tricicli', 'quadricicli', 'veicoli', 'biciclette', 'vieta', 'tutti_i_veicoli', 'ciclomotori', 'possono', 'non', 'tutti', 'due', 'passare', 'motore', 'autovetture', 'cilindrata', 'limitato', 'e_verb'],
      questionIds: Array.from({ length: 13 }, (_, i) => `q_4_16_${i + 1}`)
    },
    {
      id: 'topic_4_17',
      title: '4.17 Transito vietato alle macchine agricole',
      italianText: `Vieta il transito alle trattrici e macchine agricole (gommate e cingolate).

Consente il transito di sgombraneve, macchine operatrici stradali e motocicli.

Vale di giorno e di notte.

Non vieta il transito ai trattori stradali per semirimorchi.`,
      farsiTranslation: `عبور ماشین‌آلات کشاورزی ممنوع.

تراکتورها و ادوات کشاورزی (شنی‌دار یا لاستیک‌دار) حق ورود ندارند. ماشین‌آلات راه‌سازی (مانند برف‌روب) و خودروهای معمولی مجاز به عبورند.

این تابلو ورود کشنده‌های تریلی (Trattori stradali) را ممنوع نمی‌کند. مختص مسیرهای کشاورزی نیست و همیشه معتبر است.`,
      imageUrl: '/images/4-17.jpg',
      vocabularyIds: [ 'macchine_agricole', 'trattrici', 'sgombraneve', 'macchine_operatrici', 'gommate', 'cingolate', 'per', 'vale', 'vieta', 'motocicli', 'non', 'alle', 'stradali', 'agricole', 'notte'],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_4_17_${i + 1}`)
    },
    {
      id: 'topic_4_18',
      title: '4.18 Transito vietato a tutti gli autoveicoli',
      italianText: `Vieta il transito a tutti gli autoveicoli, inclusi tricicli, quadricicli a motore, autobus, autocarri.

Permesso il transito ai motocicli, ciclomotori, e veicoli senza motore.

Non è permesso il transito ai taxi o alle auto non catalizzate: tutti gli autoveicoli sono vietati.`,
      farsiTranslation: `عبور همه خودروهای موتوری دارای بیش از دو چرخ ممنوع.

ماشین‌ها، اتوبوس‌ها، کامیون‌ها، سه‌چرخه‌ها و چهارچرخه‌های موتوری حق عبور ندارند. ورود موتورسیکلت‌های دوچرخ، موتورگازی‌ها و دوچرخه‌ها مجاز است.

تاکسی‌ها و ماشین‌های فاقد کاتالیزور هم اجازه ورود ندارند (قانون شامل همه خودروهاست).`,
      imageUrl: '/images/4-18.jpg',
      vocabularyIds: [ 'tutti_gli_autoveicoli', 'sprovvisti_di_motore', 'taxi', 'non_catalizzate', 'veicoli', 'vietati', 'autocarri', 'sono', 'vietati_pl', 'senza', 'vieta', 'motocicli', 'autoveicoli', 'ciclomotori', 'autobus', 'tricicli', 'quadricicli', 'inclusi', 'non', 'tutti', 'alle', 'gli', 'motore', 'e_verb'],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_4_18_${i + 1}`)
    },
    {
      id: 'topic_4_19',
      title: '4.19 Transito vietato agli autobus',
      italianText: `Vieta il transito a tutti gli autobus (anche < 3,5t e autobus turistici o scuolabus).

Consente il transito ad autovetture, autocarri, motocicli e autocaravan.

Non indica una corsia riservata o area di sosta per autobus. Valido tutti i giorni.`,
      farsiTranslation: `ورود اتوبوس ممنوع.

تمام اتوبوس‌ها (از جمله توریستی و مدرسه) حق عبور ندارند. سایر وسایل نقلیه مانند سواری‌ها، کامیون‌ها و کمپرها (Autocaravan) مجازند.

این تابلو پارکینگ یا لاین ویژه اتوبوس را نشان نمی‌دهد. فقط مختص روزهای کاری نیست.`,
      imageUrl: '/images/4-19.jpg',
      vocabularyIds: [ 'autobus', 'scuolabus', 'autocaravan', 'giorni_feriali', 'indica', 'non_indica', 'corsia', 'per', 'area_di_sosta', 'autocarri', 'anche', 'sosta', 'vieta', 'motocicli', 'corsia_riservata', 'non', 'tutti', 'una', 'gli', 'autovetture'],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_4_19_${i + 1}`)
    },
    {
      id: 'topic_4_20',
      title: '4.20 Transito vietato ai veicoli che trasportano sostanze suscettibili di contaminare l\'acqua',
      italianText: `Vieta il transito a veicoli che trasportano sostanze inquinanti per l'acqua.

Consente il transito ad autocisterne che trasportano acqua o prodotti innocui.

Non preannuncia allagamenti e non vieta la sosta delle autocisterne o il transito di cisterne vuote.`,
      farsiTranslation: `عبور تانکرهای حامل مواد آلوده‌کننده آب ممنوع.

خودروهایی که بارشان ممکن است به آب‌ها آسیب برساند (مواد سمی/نفتی) حق ورود ندارند. ماشین‌های آب‌پاش و تانکرهای آب سالم مجازند.

این تابلو ربطی به سیلاب (Allagamento) یا جمع شدن آب در جاده ندارد. تانکرهای خالی می‌توانند عبور کنند.`,
      imageUrl: '/images/4-20.jpg',
      vocabularyIds: [ 'contaminare_acqua', 'sostanze_inquinanti', 'autocisterne', 'innaffiatrici_stradali', 'per', 'veicoli', 'sosta', 'preannuncia', 'vieta', 'non', 'che', 'delle', 'acqua', 'trasportano', 'sostanze'],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_4_20_${i + 1}`)
    },
    {
      id: 'topic_4_21',
      title: '4.21 Transito vietato ai veicoli di massa oltre 3,5 t non adibiti al trasporto di persone',
      italianText: `Vieta il transito ai veicoli MERCI con massa a pieno carico > 3,5t (es. grossi autocarri).

Consente il transito ad autobus o autocaravan > 3,5t (trasportano persone).

Può essere munito di pannello con diverso valore di massa.

Non vieta autocarri < 3,5t. Non vieta tutti gli autocarri carrozzati con furgone chiuso.`,
      farsiTranslation: `عبور وسایل نقلیه باری با وزن بیش از ۳.۵ تن ممنوع.

کامیون‌های سنگین حق ورود ندارند. اما اتوبوس‌ها و کمپرها (که برای حمل مسافرند) حتی بالای ۳.۵ تن نیز می‌توانند عبور کنند.

کامیون‌های سبک زیر ۳.۵ تن می‌توانند عبور کنند. این ممنوعیت هیچ ربطی به روباز یا روبسته بودن کابین ندارد.`,
      imageUrl: '/images/4-21.jpg',
      vocabularyIds: [ 'massa_oltre_3_5t', 'trasporto_di_cose', 'furgone_chiuso', 'cassone_aperto', 'veicoli', 'autocarri', 'essere', 'diverso', 'vieta', 'veicoli_merci', 'massa_a_pieno_carico', 'autocaravan', 'autobus', 'non', 'con', 'tutti', 'puo', 'gli', 'pannello', 'merci', 'massa', 'carico', 'trasportano', 'persone'],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_4_21_${i + 1}`)
    },
    {
      id: 'topic_4_22',
      title: '4.22 Transito vietato ai veicoli di massa oltre 6,5 t non adibiti al trasporto di persone',
      italianText: `Vieta il transito ad autocarri/veicoli merci con massa a pieno carico > 6,5t.

Consente il transito a veicoli merci ≤ 6,5t e a TUTTI gli autobus e autocaravan (anche se > 6,5t).

Non preannuncia una pesa pubblica e non vieta il transito a veicoli adibiti al trasporto di persone.`,
      farsiTranslation: `عبور وسایل نقلیه باری با وزن بیش از ۶.۵ تن ممنوع.

مشابه تابلوی قبلی است، فقط سقف وزن به ۶.۵ تن رسیده است. اتوبوس‌ها و ماشین‌های حمل مسافر مجازند.

کامیون ۷.۵ تنی نمی‌تواند عبور کند. این تابلو نشان‌دهنده باسکول عمومی (Pesa pubblica) نیست.`,
      imageUrl: '/images/4-22.jpg',
      vocabularyIds: [ 'massa_oltre_6_5t', 'pesa_pubblica', 'veicoli_ad_uso_speciale', 'se', 'veicoli', 'autocarri', 'anche', 'preannuncia', 'vieta', 'veicoli_merci', 'massa_a_pieno_carico', 'autocaravan', 'autobus', 'non', 'con', 'tutti', 'una', 'gli', 'merci', 'massa', 'carico', 'trasporto', 'persone', 'adibiti'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_4_22_${i + 1}`)
    },
    {
      id: 'topic_4_23',
      title: '4.23 Transito vietato ai veicoli a motore trainanti un rimorchio',
      italianText: `Vieta il transito ai veicoli trainanti RIMORCHI (autotreni, caravan, barche).

Consente il transito agli autosnodati (autobus a fisarmonica) e ad auto con carrello-appendice.

Può essere integrato con pannello che consente rimorchi fino a una certa massa.

Non vale solo per veicoli trasporto merci. Non indica autocarri in rallentamento o distanziamento.`,
      farsiTranslation: `ورود هرگونه وسیله نقلیه دارای یدک‌کش (Rimorchio) ممنوع.

تریلی‌ها، کاراوان‌ها و قایق‌کش‌ها حق عبور ندارند. اما اتوبوس‌های دوکابین (Autosnodato) و خودروهای دارای تریلر کوچک متصل (Carrello-appendice) مجازند.

ماشین‌هایی که کاراوان یدک می‌کشند اجازه عبور ندارند. این تابلو مختص ماشین‌های باری نیست و قانون فاصله را وضع نمی‌کند.`,
      imageUrl: '/images/4-23.jpg',
      vocabularyIds: [ 'trainanti', 'rimorchio', 'carrello_appendice', 'autosnodati', 'rallentamento', 'indica', 'non_indica', 'solo', 'per', 'veicoli', 'autocarri', 'essere', 'rimorchi', 'vale', 'vieta', 'autotreni', 'autobus', 'non', 'con', 'puo', 'una', 'che', 'agli', 'pannello', 'integrato', 'merci', 'massa', 'trasporto'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_4_23_${i + 1}`)
    },
    {
      id: 'topic_4_24',
      title: '4.24 Transito vietato ai veicoli che trasportano merci pericolose',
      italianText: `Vieta il transito ai veicoli che trasportano merci pericolose (es. benzina, gas, tossici).

Non vieta il transito ai veicoli alimentati a gas liquido (GPL) per il proprio motore.

Non vieta veicoli con carni macellate, deperibili o frigoriferi.`,
      farsiTranslation: `عبور حاملین محموله‌های خطرناک ممنوع.

تانکرهای سوخت، مواد سمی یا قابل انفجار حق عبور ندارند.

خودروهایی که سوخت مصرفی خودشان گاز (GPL) است مشمول این قانون نیستند. ماشین‌های حمل گوشت یا یخچال‌دار آزادند.`,
      imageUrl: '/images/4-24.jpg',
      vocabularyIds: [ 'merci_pericolose', 'benzina', 'gas_liquido', 'gpl', 'carni_macellate', 'deperibili', 'furgone_frigorifero', 'per', 'veicoli', 'vieta', 'non', 'con', 'che', 'pericolose', 'motore', 'merci', 'trasportano'],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_4_24_${i + 1}`)
    },
    {
      id: 'topic_4_25',
      title: '4.25 Transito vietato ai veicoli che trasportano esplosivi o prodotti facilmente infiammabili',
      italianText: `Vieta transito a veicoli che trasportano carichi esplosivi o facilmente infiammabili.

Il carburante del serbatoio del veicolo NON conta come "trasporto".

Consentito ad auto alimentate a metano/GPL.

Non consente a questi veicoli di circolare, trainare o sorpassare. Non impone solo "attenzione".`,
      farsiTranslation: `عبور حاملین مواد منفجره یا به شدت اشتعال‌زا ممنوع.

تانکرهای بنزین و مواد منفجره حق عبور ندارند. سوخت درون باک ماشین خودتان (حتی گاز) مشمول این ممنوعیت نیست.

هیچ تبصره‌ای برای احتیاط کردن یا یدک کشیدن این مواد وجود ندارد؛ ورود کاملاً ممنوع است.`,
      imageUrl: '/images/4-25.jpg',
      vocabularyIds: [ 'esplosivi', 'facilmente_infiammabili', 'serbatoio', 'metano', 'solo', 'veicoli', 'veicolo', 'non_consente', 'consentito', 'impone', 'vieta', 'gpl', 'non', 'che', 'del', 'come', 'circolare', 'trasporto', 'trasportano', 'infiammabili', 'attenzione'],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_4_25_${i + 1}`)
    },
    {
      id: 'topic_4_26',
      title: '4.26 Transito vietato ai veicoli aventi larghezza superiore a 2,30 metri',
      italianText: `Indica la LARGHEZZA massima ammessa (compreso il carico). Si riferisce anche a veicoli senza motore.

Può trovarsi prima di una strettoia, sia su strade urbane che extraurbane.

Consentito transito a veicoli larghi FINO a 2,30m (incluso 2,30m).

Non indica la distanza minima di sicurezza. Riguarda sia la motrice che il rimorchio.`,
      farsiTranslation: `عبور وسایل نقلیه با عرض (Larghezza) بیش از ۲.۳۰ متر ممنوع.

شامل ماشین‌های بی‌موتور هم می‌شود. معمولاً قبل از یک مسیر باریک نصب می‌شود. ماشینی که دقیقاً ۲.۳۰ متر عرض دارد می‌تواند عبور کند.

این تابلو عرض جاده را نشان نمی‌دهد، بلکه عرض مجاز ماشین را مشخص می‌کند. فاصله ایمنی بین خودروها نیست. اتوبوس‌ها و گاری‌ها نیز در صورت پهنای زیاد منع می‌شوند.`,
      imageUrl: '/images/4-26.jpg',
      vocabularyIds: [ 'larghezza', 'superiore', 'veicoli_senza_motore', 'strettoia', 'distanza_minima', 'indica', 'non_indica', 'strade', 'veicoli', 'larghezza_massima', 'anche', 'consentito', 'extraurbane', 'distanza', 'strade_urbane', 'senza', 'massima', 'rimorchio', 'non', 'prima', 'puo', 'una', 'che', 'sia', 'minima', 'motore', 'carico'],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_4_26_${i + 1}`)
    },
    {
      id: 'topic_4_27',
      title: '4.27 Transito vietato ai veicoli aventi altezza superiore a 3,50 metri',
      italianText: `Indica l'ALTEZZA massima dal piano stradale dei veicoli ammessi (incluso il carico).

Può trovarsi dove la strada passa sotto un ponte. Vale sia nei centri abitati che fuori.

Consentito transito a veicoli alti FINO a 3,50m.

Non indica lunghezza, né orari limitati, né altezza dal cassone (si misura da terra).`,
      farsiTranslation: `عبور وسایل نقلیه با ارتفاع (Altezza) بیش از ۳.۵۰ متر ممنوع.

ارتفاع باید از سطح زمین محاسبه شود (همراه با بار). معمولاً در زیرگذرها و پل‌ها نصب می‌شود. ماشینی که دقیقاً ۳.۵۰ متر است مجاز به عبور است.

این تابلو طول (Lunghezza) را نشان نمی‌دهد. اندازه‌گیری ارتفاع از کف فضای بار (Cassone) اشتباه است؛ مبدأ زمین است. محدود به روز نیست.`,
      imageUrl: '/images/4-27.jpg',
      vocabularyIds: [ 'altezza', 'piano_stradale', 'sotto_un_ponte', 'lunghezza', 'dal_piano_del_cassone', 'indica', 'non_indica', 'strada', 'veicoli', 'centri_abitati', 'limitati', 'sotto', 'dove', 'consentito', 'vale', 'massima', 'ponte', 'non', 'puo', 'un', 'che', 'dei', 'dal', 'nei', 'sia', 'stradale', 'piano', 'carico', 'fuori', 'centri', 'abitati'],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_4_27_${i + 1}`)
    },
    {
      id: 'topic_4_28',
      title: '4.28 Transito vietato ai veicoli o complessi aventi lunghezza superiore a 10 metri',
      italianText: `Vieta transito a veicoli o complessi di veicoli (es. auto+caravan) LUNGHI più di 10m.

Rispetato da TUTTI i conducenti (autobus, autocarri, ecc.). Vige anche di notte.

Consentito a complessi lunghi ESATTAMENTE 10m.

Non indica un'area di parcheggio, non impone la distanza di sicurezza di 10m.`,
      farsiTranslation: `عبور وسایل نقلیه یا وسایل متصل به هم با طول بیش از ۱۰ متر ممنوع.

طول کل وسیله (مانند سواری+کاراوان) محاسبه می‌شود. این قانون برای رانندگان تمام خودروها (حتی اتوبوس‌ها) معتبر است. ماشینی با طول دقیق ۱۰ متر می‌تواند بگذرد.

این عدد فاصله ایمنی یا فاصله لازم برای سبقت نیست. نشان‌دهنده پارکینگ برای کامیون‌های زیر ۱۰ متر هم نمی‌باشد.`,
      imageUrl: '/images/4-28.jpg',
      vocabularyIds: [ 'lunghezza_superiore', 'complessi_di_veicoli', 'autobus', 'distanziamento_minimo', 'indica', 'non_indica', 'veicoli', 'autocarri', 'anche', 'consentito', 'distanza_di_sicurezza', 'distanza', 'impone', 'vieta', 'non', 'tutti', 'un', 'parcheggio', 'notte', 'più'],
      questionIds: Array.from({ length: 13 }, (_, i) => `q_4_28_${i + 1}`)
    },
    {
      id: 'topic_4_29',
      title: '4.29 Transito vietato ai veicoli aventi massa superiore a 7,00 tonnellate',
      italianText: `Vieta il transito ai veicoli con MASSA EFFETTIVA (al momento del transito) > 7t.

Vieta autocarri di TARA > 7t (perché già vuoti superano 7t).

Si trova prima di un ponte. Con pannello, può vietare il transito contemporaneo di più veicoli pesanti.

Non riguarda solo veicoli merci. Non vale "solo per veicoli >7m".`,
      farsiTranslation: `عبور وسایل نقلیه با وزن واقعی (در لحظه عبور) بیش از ۷ تن ممنوع.

وزن بار به علاوه وزن خود ماشین حساب می‌شود. کامیونی که وزن خالی‌اش (Tara) بیش از ۷ تن باشد حق ورود ندارد. ماشین کشاورزی اگر ۷ تن باشد می‌تواند عبور کند. معمولاً روی پل‌های ضعیف نصب می‌شود.

این قانون مختص کامیون‌ها نیست (اتوبوس سنگین هم ممنوع است). ربطی به طول ۷ متری خودرو ندارد.`,
      imageUrl: '/images/4-29.jpg',
      vocabularyIds: [ 'massa_effettiva', 'tara', 'transito_contemporaneo', 'ponte', 'asse_piu_caricato', 'solo', 'per', 'veicoli', 'autocarri', 'trova', 'vale', 'vieta', 'veicoli_merci', 'non', 'con', 'prima', 'puo', 'un', 'del', 'perché', 'vietare', 'già', 'pannello', 'merci', 'massa', 'più'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_4_29_${i + 1}`)
    },
    {
      id: 'topic_4_30',
      title: '4.30 Transito vietato ai veicoli aventi massa per asse superiore a 2,5 t',
      italianText: `Vieta transito se la massa effettiva sull'ASSE PIÙ CARICATO supera 2,5t.

Fa riferimento alla massa effettiva al momento del transito.

Può trovarsi prima di un ponte.

Non vieta a tutti i veicoli con massa complessiva > 2,5t (es. un'auto da 3t con 1,5t per asse può passare).`,
      farsiTranslation: `عبور وسایل نقلیه با وزن روی محور بیش از ۲.۵ تن ممنوع.

این تابلو وزن روی سنگین‌ترین محور ماشین (معمولاً محور عقب کامیون‌ها) در همان لحظه عبور را ملاک قرار می‌دهد. ممکن است قبل از پل‌ها نصب شود.

این تابلو وزن کل خودرو را محدود نمی‌کند. محدود به چرخ‌های جفت (Ruote gemellate) نیست و سرعت را به سرعت قدم زدن (Passo d'uomo) تقلیل نمی‌دهد.`,
      imageUrl: '/images/4-30.jpg',
      vocabularyIds: [ 'massa_per_asse', 'asse_piu_caricato', 'massa_effettiva', 'passo_d_uomo', 'ruote_gemellate', 'se', 'per', 'veicoli', 'fa_verb', 'vieta', 'tutti_i_veicoli', 'ponte', 'non', 'con', 'prima', 'tutti', 'puo', 'un', 'del', 'alla', 'passare', 'massa', 'più'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_4_30_${i + 1}`)
    },
    {
      id: 'topic_4_31',
      title: '4.31 Via libera',
      italianText: `Indica la FINE delle prescrizioni e dei divieti precedentemente imposti.

È un segnale di "via libera" e "fine prescrizione".

Non indica la fine di un cantiere, la fine del pericolo o la fine del centro abitato.`,
      farsiTranslation: `پایان تمام ممنوعیت‌ها (Via libera).

این تابلو لغوکننده تمام تابلوهای دستوری و محدودیت‌های سرعت یا سبقت است که قبلاً نصب شده بودند.

پایان منطقه مسکونی یا پایان کارگاه جاده‌ای را نشان نمی‌دهد. تابلوی راهنما نیست، بلکه تابلوی پایان دستور است.`,
      imageUrl: '/images/4-31.jpg',
      vocabularyIds: [ 'via_libera', 'fine_prescrizione', 'divieti_imposti', 'centro_abitato', 'pericolo', 'indica', 'non_indica', 'fine', 'prescrizione', 'non', 'un', 'del', 'dei', 'delle', 'segnale', 'divieti', 'cantiere', 'e_verb'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_4_31_${i + 1}`)
    },
    {
      id: 'topic_4_32',
      title: '4.32 Divieto di sosta',
      italianText: `Vieta la sosta sul lato della strada dove è posto. CONSENTE LA FERMATA.

Strade URBANE: vale dalle 8.00 alle 20.00 (salvo pannelli).

Strade EXTRAURBANE: vale 24h su 24h (permanente).

Cessa di validità dopo il primo incrocio se non ripetuto.

Non vieta la fermata. Non comporta sempre la rimozione coatta (se non c'è il pannello). Non è per parchimetri o residenti.`,
      farsiTranslation: `پارک ممنوع (Divieto di sosta).

توقف طولانی و ترک خودرو را در همان سمت جاده ممنوع می‌کند. توقف کوتاه (Fermata) برای پیاده/سوار کردن مسافر مجاز است. در شهرها معمولاً از ۸ صبح تا ۸ شب اعتبار دارد، اما بیرون شهر دائمی است. پس از اولین تقاطع باطل می‌شود مگر اینکه دوباره نصب شود.

توقف کوتاه را ممنوع نمی‌کند. همیشه با جرثقیل (Rimozione coatta) همراه نیست (مگر با تابلوی متمم). ربطی به پارکومتر یا رزرو برای افراد محلی ندارد.`,
      imageUrl: '/images/4-32.jpg',
      vocabularyIds: [ 'divieto_di_sosta', 'consente_la_fermata', 'primo_incrocio', 'strade_urbane', 'strade_extraurbane', 'rimozione_coatta', 'parchimetro', 'strada', 'se', 'per', 'strade', 'sempre', 'dove', 'sosta', 'fermata', 'incrocio', 'extraurbane', 'vale', 'vieta', 'posto', 'residenti', 'non', 'dopo', 'della', 'alle', 'dalle', 'sul', 'salvo_word', 'pannello', 'pannelli', 'lato', 'e_verb'],
      questionIds: Array.from({ length: 43 }, (_, i) => `q_4_32_${i + 1}`)
    },
    {
      id: 'topic_4_33',
      title: '4.33 Regolazione flessibile della sosta in centro abitato',
      italianText: `Consente la sosta in alcune ore (9-17, 20-7) e la VIETA in altre (7-9, 17-20).

Rappresenta una regolazione della sosta.

Non si usa il disco orario. Non vieta la fermata. Non c'è rimozione se non indicata.`,
      farsiTranslation: `تنظیم متغیر پارک خودرو.

این تابلو مشخص می‌کند در چه ساعاتی از روز پارک کردن آزاد است (بدون رنگ قرمز) و در چه ساعاتی ممنوع است (با نوار قرمز).

این تابلو نیاز به دیسک ساعت (Disco orario) ندارد. توقف کوتاه (Fermata) در ساعات ممنوعه نیز مجاز است.`,
      imageUrl: '/images/4-33.jpg',
      vocabularyIds: [ 'regolazione_flessibile', 'ore_vietate', 'disco_orario', 'fermata_del_veicolo', 'non_indica', 'se', 'consente_la_sosta', 'sosta', 'fermata', 'vieta', 'non', 'una', 'della', 'alcune', 'e_verb'],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_4_33_${i + 1}`)
    },
    {
      id: 'topic_4_34',
      title: '4.34 Sosta consentita a particolari categorie',
      italianText: `Eccezione al divieto: CONSENTE la sosta AI SOLI veicoli indicati (es. invalidi con contrassegno).

Vietato a tutti gli altri. Segnale di prescrizione.

Non è per scuolabus, non è corsia riservata, non è per motocicli o parchimetri.`,
      farsiTranslation: `پارک فقط برای گروه‌های خاص (مثلاً معلولان).

یک استثنا بر ممنوعیت پارک است و تنها به خودروهایی که دارای نشان ویژه (Contrassegno) هستند اجازه پارک می‌دهد. برای سایرین ممنوع است.

برای پارک اتوبوس مدرسه، موتورها یا پارکینگ پولی (Parchimetro) نیست. مسیر ویژه رانندگی را نشان نمی‌دهد.`,
      imageUrl: '/images/4-34.jpg',
      vocabularyIds: [ 'sosta_consentita', 'persone_invalide', 'contrassegno', 'eccezione', 'corsia_riservata', 'corsia', 'per', 'vietato', 'veicoli', 'consente_la_sosta', 'vietato_past', 'sosta', 'scuolabus', 'prescrizione', 'motocicli', 'non', 'con', 'tutti', 'gli', 'segnale', 'divieto', 'e_verb'],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_4_34_${i + 1}`)
    },
    {
      id: 'topic_4_35',
      title: '4.35 Passo carrabile',
      italianText: `Indica la zona di accesso dei veicoli alle proprietà laterali (garage).

Vieta la SOSTA (h24) ma consente la FERMATA (se non intralcia).

Per essere valido deve indicare l'ente, il numero e l'anno di autorizzazione.

Non vale solo di giorno. Non consente sosta a veicoli di pronto soccorso "non in servizio".`,
      farsiTranslation: `درب پارکینگ / ورودی وسایل نقلیه (Passo carrabile).

پارک کردن جلوی آن ۲۴ ساعته ممنوع است، اما توقف کوتاه (Fermata) به شرطی که مسدودکننده نباشد مجاز است. تابلوی معتبر باید دارای نام صادرکننده و شماره مجوز باشد.

این تابلو فقط مختص روز نیست. هیچ خودرویی حتی آمبولانسِ خارج از شیفت کاری حق پارک در اینجا ندارد.`,
      imageUrl: '/images/4-35.jpg',
      vocabularyIds: [ 'passo_carrabile', 'accesso', 'proprieta_laterali', 'ente', 'autorizzazione', 'intralcio', 'indica', 'se', 'solo', 'per', 'veicoli', 'non_consente', 'zona', 'garage', 'essere', 'sosta', 'fermata', 'vale', 'vieta', 'laterali', 'consente_la_fermata', 'pronto_soccorso', 'deve', 'non', 'dei', 'alle', 'servizio'],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_4_35_${i + 1}`)
    },
    {
      id: 'topic_4_36',
      title: '4.36 Divieto di sosta temporaneo (per pulizia meccanica)',
      italianText: `Vieta la sosta in giorni/ore limitati per pulizia meccanica delle strade.

Segnale di DIVIETO DI SOSTA TEMPORANEO.

Non indica sgombraneve, non vieta la sosta ai mezzi di pulizia, non indica un deposito mezzi.`,
      farsiTranslation: `پارک ممنوعِ موقتی برای نظافت شهری.

در ساعات و روزهایی که ماشین‌های شهرداری خیابان را تمیز می‌کنند، پارک خودرو ممنوع است.

ماشین روی تابلو جاروی خیابانی است، نه برف‌روب (Sgombraneve). این تابلو نشان‌دهنده گاراژ ماشین‌های شهرداری نیست.`,
      imageUrl: '/images/4-36.jpg',
      vocabularyIds: [ 'divieto_di_sosta_temporaneo', 'pulizia_meccanica', 'mezzi_di_pulizia', 'deposito', 'indica', 'non_indica', 'per', 'strade', 'limitati', 'sosta', 'vieta', 'divieto_di_sosta', 'non', 'un', 'delle', 'segnale', 'divieto'],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_4_36_${i + 1}`)
    },
    {
      id: 'topic_4_37',
      title: '4.37 Divieto di fermata',
      italianText: `Vieta sosta E fermata (qualsiasi volontaria sospensione della marcia).

Vale 24h su 24h (anche nei centri abitati).

È sempre prevista la rimozione forzata (perché se è vietata la fermata, il veicolo è un grave intralcio).

Non consente fermata per far salire/scendere passeggeri. Non vale solo di giorno o solo per feriali.`,
      farsiTranslation: `توقف مطلقاً ممنوع (Divieto di fermata).

هرگونه توقف (حتی برای یک لحظه و سوار/پیاده کردن مسافر) و پارک کردن در تمام طول شبانه‌روز ممنوع است. ماشین متخلف همیشه با جرثقیل برده می‌شود.

این تابلو به تاکسی‌ها یا اتوبوس‌ها اجازه توقف نمی‌دهد. پیش‌آگهی پارک ممنوع نیست.`,
      imageUrl: '/images/4-37.jpg',
      vocabularyIds: [ 'divieto_di_fermata', 'volontaria_sospensione', 'rimozione_forzata', 'salita_e_discesa', 'se', 'solo', 'per', 'veicolo', 'sempre', 'centri_abitati', 'non_consente', 'vietata_la_fermata', 'anche', 'vietata_fem', 'sosta', 'fermata', 'vale', 'vieta', 'intralcio', 'non', 'un', 'della', 'nei', 'perché', 'centri', 'abitati', 'e_verb'],
      questionIds: Array.from({ length: 21 }, (_, i) => `q_4_37_${i + 1}`)
    },
    {
      id: 'topic_4_38',
      title: '4.38 Parcheggio',
      italianText: `Indica un'area attrezzata per la SOSTA a tempo indeterminato (salvo altre indicazioni).

Può essere integrato con: limitazione di tempo, categorie escluse/riservate, distanza, disposizione, orari/tariffe.

Non indica parcheggio per sola Polizia, né impone sosta libera ma divieto di fermata. Non prescrive di lasciare la chiave nel quadro.`,
      farsiTranslation: `پارکینگ مجاز (Parcheggio).

فضایی برای پارک خودرو بدون محدودیت زمانی است (مگر تابلوی متمم داشته باشد). می‌تواند با تابلوهای زمان، هزینه، دسته خاص خودرو یا نحوه پارک همراه شود.

این تابلو مساحت پارکینگ (Superficie) را نشان نمی‌دهد. قانون گذاشتن سوییچ روی ماشین غلط است. مختص پلیس نیست.`,
      imageUrl: '/images/4-38.jpg',
      vocabularyIds: [ 'parcheggio_autorizzato', 'tempo_indeterminato', 'limitazione', 'disposizione_dei_veicoli', 'chiave_nel_quadro', 'indica', 'non_indica', 'per', 'riservate', 'essere', 'sosta', 'fermata', 'distanza', 'prescrive', 'impone', 'divieto_di_fermata', 'non', 'con', 'puo', 'un', 'nel', 'divieto', 'salvo_word', 'integrato', 'categorie', 'parcheggio', 'polizia'],
      questionIds: Array.from({ length: 15 }, (_, i) => `q_4_38_${i + 1}`)
    },
    {
      id: 'topic_4_39',
      title: '4.39 Preavviso di parcheggio',
      italianText: `Preannuncia che, nella direzione della freccia (a es. 300m), c'è un parcheggio.

Non preannuncia divieto di sosta o parcheggio vietato/riservato. Non è un pronto soccorso.`,
      farsiTranslation: `پیش‌آگهی پارکینگ.

نشان می‌دهد که در جهت فلش و در فاصله درج شده، پارکینگ وجود دارد.

این تابلو پارک ممنوع را نشان نمی‌دهد و بیمارستان یا اورژانس را اعلام نمی‌کند.`,
      imageUrl: '/images/4-39.jpg',
      vocabularyIds: [ 'preavviso_di_parcheggio', 'direzione_della_freccia', 'pronto_soccorso', 'vietato', 'riservato', 'vietato_past', 'sosta', 'preannuncia', 'divieto_di_sosta', 'non', 'un', 'che', 'della', 'nella', 'direzione', 'divieto', 'parcheggio', 'e_verb'],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_4_39_${i + 1}`)
    }
  ],
  questions: [
    // 4.1 Divieto di transito
    {
      id: 'q_4_1_1',
      italianText: 'Il segnale raffigurato vieta la circolazione nei due sensi',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده رفت‌وآمد در هر دو جهت را ممنوع می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_1_2',
      italianText: 'Il segnale raffigurato vieta il transito a tutti i veicoli',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده عبور همهٔ وسایل نقلیه را ممنوع می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_1_3',
      italianText: 'Il segnale raffigurato vieta la circolazione ai quadricicli a motore',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده رفت‌وآمد چهارچرخه‌های موتوری را ممنوع می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_1_4',
      italianText: 'Il segnale raffigurato è posto su entrambi gli accessi della strada',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده در هر دو ورودی جاده نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_1_5',
      italianText: 'Il segnale raffigurato vieta il transito agli autocarri',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده عبور کامیون‌ها را ممنوع می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_1_6',
      italianText: 'Il segnale raffigurato può avere validità limitata nel tempo, indicata in un pannello integrativo',
      farsiTranslation: 'صحیح: اعتبار تابلوی نشان‌داده‌شده ممکن است از نظر زمانی محدود باشد و این محدودیت روی یک تابلوی تکمیلی درج شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_1_7',
      italianText: 'Il segnale raffigurato consente il transito ai pedoni',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده عبور عابران پیاده را مجاز می‌داند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_1_8',
      italianText: 'Il segnale raffigurato vieta la circolazione ai ciclomotori',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده رفت‌وآمد موتورگازی‌ها را ممنوع می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_1_9',
      italianText: 'Il segnale raffigurato è un DIVIETO DI TRANSITO',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده، تابلوی «عبور ممنوع» است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_1_10',
      italianText: 'Il segnale raffigurato consente il transito alle biciclette',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده عبور دوچرخه‌ها را مجاز می‌داند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_1_11',
      italianText: 'Il segnale raffigurato vieta il transito unicamente ai veicoli a motore',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده فقط عبور وسایل نقلیهٔ موتوری را ممنوع می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_1_12',
      italianText: 'Il segnale raffigurato consente, di norma, di entrare nella strada per effettuare la sosta e le operazioni di carico e scarico',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده معمولاً اجازه می‌دهد برای پارک‌کردن و انجام عملیات بارگیری و تخلیه وارد جاده شوید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_1_13',
      italianText: 'Il segnale raffigurato non consente l’ingresso, ma solo l’uscita dalla strada',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده اجازهٔ ورود نمی‌دهد و فقط خروج از جاده را مجاز می‌داند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_1_14',
      italianText: 'Il segnale raffigurato indica che la circolazione è a senso unico',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده بیان می‌کند که رفت‌وآمد در جاده یک‌طرفه است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_1_15',
      italianText: 'Il segnale raffigurato consente il transito alle autovetture con motore elettrico',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده عبور خودروهای سواری با موتور برقی را مجاز می‌داند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_1_16',
      italianText: 'Il segnale raffigurato è un segnale di pericolo',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده یک تابلوی خطر است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_1_17',
      italianText: 'Il segnale raffigurato, se barrato in rosso, indica la fine del divieto',
      farsiTranslation: 'غلط: اگر روی تابلوی نشان‌داده‌شده یک خط قرمز کشیده شود، پایان ممنوعیت را نشان می‌دهد.',
      correctAnswer: 'Falso'
    },

    // 4.2 Divieto di transito per particolari categorie di veicoli
    {
      id: 'q_4_2_1',
      italianText: 'Il segnale raffigurato vieta il transito ad autotreni ed autoarticolati',
      farsiTranslation: 'صحیح: ورود تریلی‌ها و کامیون‌های مفصل‌دار (همان‌هایی که در تصویر هستند) ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_2_2',
      italianText: 'In presenza del segnale raffigurato è vietato il transito alle categorie di veicoli rappresentati in figura',
      farsiTranslation: 'صحیح: در صورت وجود علامت نشان داده شده، حمل و نقل برای دسته بندی وسایل نقلیه نشان داده شده در شکل ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_2_3',
      italianText: 'Il segnale raffigurato è un divieto di transito per determinate categorie di veicoli',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده ممنوعیت تردد برای دسته خاصی از وسایل نقلیه است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_2_4',
      italianText: 'Il segnale raffigurato indica che i veicoli delle categorie rappresentate in figura non possono transitare',
      farsiTranslation: 'صحیح: علامت نشان داده شده نشان می دهد که وسایل نقلیه از دسته های نشان داده شده در شکل نمی توانند عبور کنند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_2_5',
      italianText: 'Il segnale raffigurato indica che possono transitare tutti i veicoli esclusi quelli delle categorie rappresentate in figura',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده نشان می دهد که همه وسایل نقلیه می توانند عبور کنند به جز وسایل نقلیه از دسته های نشان داده شده در شکل',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_2_6',
      italianText: 'Il segnale raffigurato indica un itinerario obbligatorio per gli autoveicoli delle categorie rappresentate in figura',
      farsiTranslation: 'غلط: علامت نشان داده شده یک برنامه سفر اجباری را برای وسایل نقلیه از دسته های نشان داده شده در شکل نشان می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_2_7',
      italianText: 'Il segnale raffigurato preannuncia un parcheggio per autocarri ed autotreni',
      farsiTranslation: 'غلط: هیچ ارتباطی با پارکینگ ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_2_8',
      italianText: 'Il segnale raffigurato vieta il transito di tutti i veicoli con esclusione di quelli rappresentati in figura',
      farsiTranslation: 'غلط: علامت نشان داده شده عبور همه وسایل نقلیه به استثنای موارد نشان داده شده در شکل را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_2_9',
      italianText: 'Il segnale raffigurato vieta la sosta ad autotreni ed autoarticolati',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده پارک کامیون ها و وسایل نقلیه مفصلی را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_2_10',
      italianText: 'Il segnale raffigurato indica un divieto di sosta per autotreni e autoarticolati',
      farsiTranslation: 'غلط: علامت نشان داده شده ممنوعیت پارک کامیون ها و وسایل نقلیه مفصلی را نشان می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_2_11',
      italianText: 'Il segnale raffigurato presegnala una strada riservata ai veicoli delle categorie rappresentate in figura',
      farsiTranslation: 'غلط: علامت نشان داده شده جاده ای را نشان می دهد که برای وسایل نقلیه از دسته های نشان داده شده در شکل در نظر گرفته شده است',
      correctAnswer: 'Falso'
    },

    // 4.3 Senso vietato
    {
      id: 'q_4_3_1',
      italianText: 'Il segnale raffigurato vieta di entrare in una strada accessibile invece dall’altra parte',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده ورود به جاده ای را که از طرف دیگر قابل دسترسی است ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_3_2',
      italianText: 'I veicoli senza motore devono rispettare il divieto imposto dal segnale rappresentato',
      farsiTranslation: 'صحیح: وسایل نقلیه بدون موتور باید به ممنوعیت اعمال شده توسط علامت نشان داده شده احترام بگذارند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_3_3',
      italianText: 'I taxi devono rispettare il divieto imposto dal segnale rappresentato',
      farsiTranslation: 'صحیح: تاکسی ها باید به ممنوعیت اعمال شده توسط علامت نشان داده شده احترام بگذارند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_3_4',
      italianText: 'I quadricicli a motore devono rispettare il divieto imposto dal segnale rappresentato',
      farsiTranslation: 'صحیح: چهار چرخه موتوری باید به ممنوعیت اعمال شده توسط علامت نشان داده شده احترام بگذارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_3_5',
      italianText: 'Il divieto imposto dal segnale raffigurato deve essere rispettato anche nelle ore notturne',
      farsiTranslation: 'صحیح: ممنوعیت اعمال شده توسط علامت نشان داده شده نیز باید در شب رعایت شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_3_6',
      italianText: 'Il segnale raffigurato è posto su una strada a senso unico',
      farsiTranslation: 'صحیح: این تابلو مستقیماً نشانگر خروجی یک مسیر یک‌طرفه است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_3_7',
      italianText: 'Il segnale raffigurato è un SENSO VIETATO',
      farsiTranslation: 'صحیح: علامت نشان داده شده علامت NO WAY است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_3_8',
      italianText: 'Il segnale raffigurato consente l’accesso ai motocicli',
      farsiTranslation: 'غلط: تابلوی نمایش داده شده امکان دسترسی به موتورسیکلت ها را فراهم می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_3_9',
      italianText: 'Il segnale raffigurato consente l’accesso ai ciclomotori',
      farsiTranslation: 'غلط: علامت نشان داده شده اجازه دسترسی به موتور سیکلت را می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_3_10',
      italianText: 'Il segnale raffigurato non consente la circolazione dei veicoli in quella strada',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده اجازه نمی دهد وسایل نقلیه در آن جاده تردد کنند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_3_11',
      italianText: 'Il segnale raffigurato è posto su una carreggiata a doppio senso di circolazione',
      farsiTranslation: 'غلط: تابلوی تصویر شده در یک جاده دو طرفه قرار گرفته است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_3_12',
      italianText: 'Il segnale raffigurato vieta la sosta, ma non la fermata',
      farsiTranslation: 'غلط: تابلو نشان داده شده پارک کردن را ممنوع می کند، اما توقف نمی کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_3_13',
      italianText: 'Il segnale raffigurato vieta il sorpasso',
      farsiTranslation: 'غلط: این تابلوی ورود ممنوع است و ربطی به قانون سبقت ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_3_14',
      italianText: 'Il segnale raffigurato consente la circolazione del traffico locale in entrambi i sensi',
      farsiTranslation: 'غلط: سیگنال نشان داده شده اجازه می دهد تا ترافیک محلی در هر دو جهت گردش کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_3_15',
      italianText: 'Il divieto imposto dal segnale raffigurato deve essere rispettato, nei centri abitati, dalle ore 8.00 alle ore 20.00',
      farsiTranslation: 'غلط: ممنوعیت اعمال شده توسط تابلوی نشان داده شده باید در مناطق مسکونی از ساعت 8:00 تا 20:00 رعایت شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_3_16',
      italianText: 'Il segnale raffigurato è un DIVIETO DI TRANSITO',
      farsiTranslation: 'غلط: علامت نشان داده شده علامت حمل و نقل ممنوع است',
      correctAnswer: 'Falso'
    },

    // 4.4 Distanziamento minimo obbligatorio
    {
      id: 'q_4_4_1',
      italianText: 'In presenza del segnale raffigurato è obbligatorio mantenere una distanza di almeno 70 metri dal veicolo che precede',
      farsiTranslation: 'صحیح: رعایت حداقل ۷۰ متر فاصله ایمنی با خودروی جلویی اجباری است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_4_2',
      italianText: 'In presenza del segnale raffigurato è consentito ad un veicolo di circolare alla distanza di 80 metri da quello che lo precede',
      farsiTranslation: 'صحیح: در صورت وجود تابلوی به تصویر کشیده شده، یک وسیله نقلیه مجاز است در فاصله 80 متری از خودروی جلویی تردد کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_4_3',
      italianText: 'Il segnale raffigurato vieta ad un veicolo di circolare a meno di 70 metri da quello che lo precede',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده، حرکت وسیله نقلیه را در فاصله کمتر از 70 متر از خودروی جلویی ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_4_4',
      italianText: 'Il segnale raffigurato vale anche per i motocicli',
      farsiTranslation: 'صحیح: این قانون شامل موتورسیکلت‌ها نیز می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_4_5',
      italianText: 'Il segnale raffigurato deve essere rispettato anche quando si viaggia a bassa velocità',
      farsiTranslation: 'صحیح: علامت نشان داده شده باید حتی در هنگام حرکت با سرعت کم رعایت شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_4_6',
      italianText: 'Il segnale raffigurato obbliga a rispettare la distanza minima indicata',
      farsiTranslation: 'صحیح: علامت نشان داده شده شما را موظف می کند که حداقل فاصله مشخص شده را رعایت کنید',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_4_7',
      italianText: 'Il segnale raffigurato obbliga i veicoli a marciare a meno di 70 metri di distanza l’uno dall’altro',
      farsiTranslation: 'غلط: تابلویی که خودروها را مجبور می‌کند کمتر از 70 متر از یکدیگر فاصله بگیرند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_4_8',
      italianText: 'Il segnale raffigurato obbliga il veicolo che precede a distanziare quello che lo segue di almeno 70 metri',
      farsiTranslation: 'غلط: علامت نشان داده شده خودروی جلویی را موظف می کند که حداقل 70 متر از خودرویی که دنبالش می آید فاصله بگیرد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_4_9',
      italianText: 'Il segnale raffigurato indica la distanza massima da mantenere esclusivamente nei tratti di strada dove il sorpasso è vietato',
      farsiTranslation: 'غلط: علامت نشان داده شده حداکثر فاصله ای را که باید منحصراً در مسیرهایی از جاده که سبقت ممنوع است حفظ شود را نشان می دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_4_10',
      italianText: 'Il segnale raffigurato preavvisa che a 70 metri inizia il divieto di transito per le autovetture',
      farsiTranslation: 'غلط: تابلوی نشان داده شده هشدار می دهد که در 70 متری ممنوعیت تردد خودروها آغاز می شود',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_4_11',
      italianText: 'In presenza del segnale raffigurato le autovetture non possono superare la velocità di 70 km/h',
      farsiTranslation: 'غلط: در صورت وجود علامت نشان داده شده، سرعت خودروها نباید از 70 کیلومتر بر ساعت تجاوز کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_4_12',
      italianText: 'Il segnale raffigurato indica la lunghezza massima del cavo di traino',
      farsiTranslation: 'غلط: علامت نشان داده شده حداکثر طول کابل بکسل را نشان می دهد',
      correctAnswer: 'Falso'
    },

    // 4.5 Divieto di segnalazioni acustiche
    {
      id: 'q_4_5_1',
      italianText: 'Il segnale raffigurato vieta l’uso del clacson',
      farsiTranslation: 'صحیح: علامت نشان داده شده استفاده از بوق را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_5_2',
      italianText: 'Il segnale raffigurato vieta le segnalazioni acustiche',
      farsiTranslation: 'صحیح: علامت نشان داده شده سیگنال های صوتی را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_5_3',
      italianText: 'In presenza del segnale raffigurato è consentito l’uso del clacson solo in caso di pericolo immediato',
      farsiTranslation: 'صحیح: اگر خطر فوری و ناگهانی وجود داشته باشد، بوق زدن مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_5_4',
      italianText: 'Il segnale raffigurato indica l’inizio di una zona in cui è vietato suonare il clacson',
      farsiTranslation: 'صحیح: علامت نشان داده شده شروع منطقه ای را نشان می دهد که بوق زدن در آن ممنوع است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_5_5',
      italianText: 'In presenza del segnale raffigurato si può utilizzare il clacson se si trasportano feriti o ammalati gravi',
      farsiTranslation: 'صحیح: اگر سیگنال نشان داده شده وجود داشته باشد، در صورت انتقال مجروح یا بیمار شدید می توان از بوق استفاده کرد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_5_6',
      italianText: 'Il segnale raffigurato consente l’uso del clacson per richiamare l’attenzione in qualsiasi circostanza',
      farsiTranslation: 'غلط: سیگنال نشان داده شده به استفاده از بوق برای جلب توجه در هر شرایطی اجازه می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_5_7',
      italianText: 'Il segnale raffigurato deve essere rispettato soltanto dalle ore 20.00 alle ore 8.00',
      farsiTranslation: 'غلط: علامت نشان داده شده باید فقط از ساعت 8:00 شب تا 8:00 صبح رعایت شود',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_5_8',
      italianText: 'Il segnale raffigurato preavvisa la possibilità di incontrare una caserma dei vigili del fuoco',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده احتمال برخورد با ایستگاه آتش نشانی را هشدار می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_5_9',
      italianText: 'Il segnale raffigurato preavvisa una strettoia su strade di montagna',
      farsiTranslation: 'غلط: تابلوی نشان داده شده در مورد تنگنا در جاده های کوهستانی هشدار می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_5_10',
      italianText: 'Il segnale raffigurato consente l’uso del clacson nei casi di ingorgo stradale',
      farsiTranslation: 'غلط: سیگنال نشان داده شده امکان استفاده از بوق را در موارد ترافیکی فراهم می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_5_11',
      italianText: 'Il segnale raffigurato indica la fine del divieto di segnalazioni acustiche',
      farsiTranslation: 'غلط: سیگنال نشان داده شده پایان ممنوعیت سیگنال های صوتی را نشان می دهد',
      correctAnswer: 'Falso'
    },

    // 4.6 Divieto di sorpasso
    {
      id: 'q_4_6_1',
      italianText: 'Il segnale raffigurato consente ad un’autovettura di sorpassare un motociclo',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده به یک خودروی سواری اجازه می‌دهد از یک موتورسیکلت سبقت بگیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_2',
      italianText: 'Il segnale raffigurato si può trovare sia sulle strade urbane che su quelle extraurbane',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده را می‌توان هم در جاده‌های شهری و هم در جاده‌های برون‌شهری دید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_3',
      italianText: 'Il segnale (A) può essere ripetuto dopo ogni incrocio con pannello integrativo (B) (FIG 932)',
      farsiTranslation: 'صحیح: تابلوی (A) را می‌توان پس از هر تقاطع، همراه با تابلوی تکمیلی (B)، تکرار کرد (شکل ۹۳۲).',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_4',
      italianText: 'Il segnale raffigurato vieta di sorpassare autocarri',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده سبقت‌گرفتن از کامیون‌ها را ممنوع می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_5',
      italianText: 'Il segnale raffigurato consente di sorpassare i ciclomotori',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده اجازه می‌دهد از موتورگازی‌ها سبقت بگیرید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_6',
      italianText: 'Il segnale raffigurato vieta il sorpasso fra autoveicoli, anche se la manovra può compiersi entro la semicarreggiata',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده سبقت‌گرفتن وسایل نقلیهٔ موتوری از یکدیگر را ممنوع می‌کند، حتی اگر این مانور در همان نیمهٔ سواره‌رو انجام شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_7',
      italianText: 'Il segnale raffigurato consente ad un motociclo di sorpassare un’autovettura',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده به یک موتورسیکلت اجازه می‌دهد از یک خودروی سواری سبقت بگیرد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_8',
      italianText: 'Il segnale raffigurato indica che la corsia di destra è riservata ai veicoli lenti',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده بیان می‌کند که خط عبور سمت راست مخصوص وسایل نقلیهٔ کندرو است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_9',
      italianText: 'Il segnale raffigurato consente di sorpassare un’autovettura purché non si oltrepassi la striscia continua',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده اجازه می‌دهد از یک خودروی سواری سبقت بگیرید، به‌شرط آنکه از خط ممتد عبور نکنید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_10',
      italianText: 'Il segnale raffigurato vieta ad un motociclo di sorpassare una bicicletta',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده سبقت‌گرفتن یک موتورسیکلت از یک دوچرخه را ممنوع می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_11',
      italianText: 'Il segnale raffigurato consente il sorpasso tra autovetture se non vi è la striscia bianca continua',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده در صورت نبودن خط سفید ممتد، سبقت‌گرفتن خودروهای سواری از یکدیگر را مجاز می‌داند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_12',
      italianText: 'In presenza del segnale raffigurato un autocarro può sorpassare un motociclo',
      farsiTranslation: 'صحیح: در حضور تابلوی نشان‌داده‌شده، یک کامیون می‌تواند از یک موتورسیکلت سبقت بگیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_13',
      italianText: 'In presenza del segnale raffigurato un’autovettura può sorpassare un ciclomotore',
      farsiTranslation: 'صحیح: در حضور تابلوی نشان‌داده‌شده، یک خودروی سواری می‌تواند از یک موتورگازی سبقت بگیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_14',
      italianText: 'Il segnale raffigurato consente il transito agli autotreni, autoarticolati ed autosnodati',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده عبور قطارهای جاده‌ای، کامیون‌های نیمه‌تریلر و اتوبوس‌های مفصلی را مجاز می‌داند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_15',
      italianText: 'In presenza del segnale raffigurato è vietato sorpassare anche gli autoveicoli di massa complessiva inferiore a 3,5 tonnellate',
      farsiTranslation: 'صحیح: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن حتی از وسایل نقلیهٔ موتوری با جرم کل کمتر از ۳٫۵ تن ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_16',
      italianText: 'In presenza del segnale raffigurato è vietato sorpassare veicoli a motore diversi dai motocicli e dai ciclomotori',
      farsiTranslation: 'صحیح: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از وسایل نقلیهٔ موتوری به‌جز موتورسیکلت‌ها و موتورگازی‌ها ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_17',
      italianText: 'In presenza del segnale raffigurato è consentito sorpassare veicoli a trazione animale',
      farsiTranslation: 'صحیح: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از وسایل نقلیهٔ حیوان‌کش مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_18',
      italianText: 'Il segnale raffigurato consente ad un’autovettura di sorpassare un autocarro',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده به یک خودروی سواری اجازه می‌دهد از یک کامیون سبقت بگیرد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_19',
      italianText: 'Il segnale raffigurato si trova solo sulle strade extraurbane principali',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده فقط در جاده‌های اصلی برون‌شهری نصب می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_20',
      italianText: 'In presenza del segnale raffigurato è vietato sorpassare qualsiasi veicolo',
      farsiTranslation: 'غلط: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از هر نوع وسیلهٔ نقلیه ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_21',
      italianText: 'In presenza del segnale raffigurato è vietato il transito alle autovetture',
      farsiTranslation: 'غلط: در حضور تابلوی نشان‌داده‌شده، عبور خودروهای سواری ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_22',
      italianText: 'Il segnale raffigurato impone di dare la precedenza nei sensi unici alternati',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده در مسیرهای باریک با عبور نوبتی از دو جهت، رعایت حق تقدم را الزامی می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_23',
      italianText: 'Il segnale raffigurato consente ad un motociclo di superare un autobus',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده به یک موتورسیکلت اجازه می‌دهد از یک اتوبوس سبقت بگیرد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_24',
      italianText: 'In presenza del segnale raffigurato è consentito sorpassare ciclomotori a due ruote',
      farsiTranslation: 'صحیح: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از موتورگازی‌های دوچرخ مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_25',
      italianText: 'In presenza del segnale raffigurato è consentito il sorpasso dei motocicli',
      farsiTranslation: 'صحیح: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از موتورسیکلت‌ها مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_26',
      italianText: 'Il segnale raffigurato consente il sorpasso delle biciclette',
      farsiTranslation: 'صحیح: تابلوی نشان‌داده‌شده اجازه می‌دهد از دوچرخه‌ها سبقت بگیرید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_27',
      italianText: 'In presenza del segnale raffigurato è consentito il sorpasso dei veicoli sprovvisti di motore',
      farsiTranslation: 'صحیح: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از وسایل نقلیهٔ بدون موتور مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_28',
      italianText: 'In presenza del segnale raffigurato è consentito il sorpasso dei veicoli a braccia',
      farsiTranslation: 'صحیح: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از وسایل نقلیهٔ دستی مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_29',
      italianText: 'In presenza del segnale raffigurato è consentito il sorpasso delle carrozze a cavalli',
      farsiTranslation: 'صحیح: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از درشکه‌های اسبی مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_6_30',
      italianText: 'In presenza del segnale raffigurato è consentito il sorpasso degli autoveicoli a motore elettrico',
      farsiTranslation: 'غلط: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از وسایل نقلیهٔ موتوری برقی مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_31',
      italianText: 'Il segnale raffigurato preannuncia una strettoia',
      farsiTranslation: 'غلط: تابلوی نشان‌داده‌شده نزدیک‌شدن به یک باریک‌شدگی جاده را اعلام می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_32',
      italianText: 'In presenza del segnale raffigurato è consentito il sorpasso delle macchine agricole',
      farsiTranslation: 'غلط: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از ماشین‌آلات کشاورزی مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_33',
      italianText: 'In presenza del segnale raffigurato è consentito il sorpasso delle macchine operatrici',
      farsiTranslation: 'غلط: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از ماشین‌آلات عملیاتی مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_34',
      italianText: 'In presenza del segnale raffigurato è consentito il sorpasso dei veicoli a motore che procedono molto lentamente',
      farsiTranslation: 'غلط: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از وسایل نقلیهٔ موتوری که بسیار آهسته حرکت می‌کنند مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_6_35',
      italianText: 'In presenza del segnale raffigurato è consentito il sorpasso dei veicoli che hanno segnalato l’intenzione di svoltare a destra',
      farsiTranslation: 'غلط: در حضور تابلوی نشان‌داده‌شده، سبقت‌گرفتن از وسایل نقلیه‌ای که قصد گردش به راست را اعلام کرده‌اند مجاز است.',
      correctAnswer: 'Falso'
    },

    // 4.7 Fine divieto di sorpasso
    {
      id: 'q_4_7_1',
      italianText: 'Il segnale raffigurato indica la fine del divieto di sorpasso precedentemente imposto',
      farsiTranslation: 'صحیح: نشان می‌دهد که محدودیت سبقت ممنوع دیگر اعمال نمی‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_7_2',
      italianText: 'In presenza del segnale raffigurato è vietato il sorpasso se deve essere oltrepassata la striscia continua',
      farsiTranslation: 'صحیح: در صورت وجود علامت نشان داده شده، در صورت عبور از نوار پیوسته، سبقت ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_7_3',
      italianText: 'Il segnale raffigurato indica il punto in cui termina il divieto di sorpasso',
      farsiTranslation: 'صحیح: علامت نشان داده شده نقطه پایان ممنوعیت سبقت را نشان می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_7_4',
      italianText: 'Il segnale raffigurato non impone un particolare limite di velocità',
      farsiTranslation: 'صحیح: علامت نشان داده شده محدودیت سرعت خاصی را اعمال نمی کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_7_5',
      italianText: 'Il segnale raffigurato può essere posto sia nei centri urbani che fuori',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده را می توان هم در مراکز شهری و هم در خارج از آن قرار داد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_7_6',
      italianText: 'Il segnale raffigurato è un segnale di fine prescrizione',
      farsiTranslation: 'صحیح: این تابلو، پایان یک دستور را اعلام می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_7_7',
      italianText: 'Il segnale raffigurato ha validità per tutte le 24 ore',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده برای تمام 24 ساعت معتبر است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_7_8',
      italianText: 'Il segnale raffigurato indica la fine del divieto di sorpasso tra le sole autovetture',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان دهنده پایان ممنوعیت سبقت فقط بین خودروها است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_7_9',
      italianText: 'Il segnale raffigurato indica la fine del divieto di transito per tutti gli autoveicoli',
      farsiTranslation: 'غلط: علامت نشان داده شده پایان ممنوعیت تردد تمامی وسایل نقلیه موتوری را نشان می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_7_10',
      italianText: 'Il segnale raffigurato prescrive il divieto di marcia per file parallele',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده سفر در خطوط موازی را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_7_11',
      italianText: 'Il segnale raffigurato indica la fine del limite massimo di velocità',
      farsiTranslation: 'غلط: این تابلو مختص پایان سبقت ممنوع است، نه محدودیت سرعت.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_7_12',
      italianText: 'Il segnale raffigurato indica la fine del divieto di sosta su entrambi i lati della strada',
      farsiTranslation: 'غلط: علامت نشان داده شده پایان ممنوعیت پارک در دو طرف جاده را نشان می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_7_13',
      italianText: 'Il segnale raffigurato indica che è finito l’obbligo di mantenere la distanza di sicurezza',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان می دهد که تعهد به حفظ فاصله ایمن به پایان رسیده است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_7_14',
      italianText: 'Il segnale raffigurato indica la fine del divieto di sosta in seconda fila',
      farsiTranslation: 'غلط: هیچ ارتباطی با پارک خودرو (Sosta) ندارد.',
      correctAnswer: 'Falso'
    },

    // 4.8 Fine divieto di sorpasso per veicoli merci oltre 3,5 t
    {
      id: 'q_4_8_1',
      italianText: 'In presenza del segnale raffigurato un autotreno di massa pari a 44 tonnellate può sorpassare un’autovettura',
      farsiTranslation: 'صحیح: در حضور سیگنال نشان داده شده، یک کامیون با وزن 44 تن می تواند از یک خودرو سبقت بگیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_8_2',
      italianText: 'Il segnale raffigurato indica la fine del divieto di sorpasso precedentemente imposto',
      farsiTranslation: 'صحیح: علامت نشان داده شده پایان ممنوعیت سبقت را نشان می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_8_3',
      italianText: 'In presenza del segnale raffigurato un autocarro può sorpassare un autobus',
      farsiTranslation: 'صحیح: اگر سیگنال نشان داده شده وجود داشته باشد، یک کامیون می تواند از اتوبوس سبقت بگیرد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_8_4',
      italianText: 'Il segnale raffigurato indica la fine del divieto di sorpasso per veicoli merci di massa a pieno carico superiore a 3,5 ton- nellate',
      farsiTranslation: 'صحیح: این تابلو پایان محدودیت سبقت را برای ماشین‌های باری سنگین‌تر از ۳.۵ تن اعلام می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_8_5',
      italianText: 'Il segnale raffigurato è un segnale di fine prescrizione',
      farsiTranslation: 'صحیح: این تابلو در دسته تابلوهای پایان‌دهنده دستورات قرار دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_8_6',
      italianText: 'In presenza del segnale raffigurato è vietato il transito degli autotreni, autosnodati, autoarticolati',
      farsiTranslation: 'غلط: در صورت وجود تابلوی به تصویر کشیده شده، تردد کامیون های حمل و نقل و کامیون های حمل و نقل ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_8_7',
      italianText: 'In presenza del segnale raffigurato le autovetture devono sorpassare gli autocarri sulla corsia di destra',
      farsiTranslation: 'غلط: در حضور سیگنال نشان داده شده، خودروها باید از کامیون ها در لاین سمت راست سبقت بگیرند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_8_8',
      italianText: 'Il segnale raffigurato indica la fine del divieto di sorpasso per autobus di massa a pieno carico superiore a 3,5 tonnellate',
      farsiTranslation: 'غلط: علامت نشان داده شده پایان ممنوعیت سبقت را برای اتوبوس هایی با وزن کامل بیش از 3.5 تن نشان می دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_8_9',
      italianText: 'Il segnale raffigurato è un segnale di pericolo',
      farsiTranslation: 'غلط: علامت نشان داده شده یک علامت خطر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_8_10',
      italianText: 'Il segnale raffigurato non vale per gli autocarri di massa complessiva pari a 7 tonnellate Fine divieto di sorpasso per veicoli di massa complessiva a pieno carico oltre 3,5 t non adibiti al trasporto di persone',
      farsiTranslation: 'غلط: علامت نشان داده شده برای کامیون هایی با وزن کل 7 تن اعمال نمی شود. پایان ممنوعیت سبقت برای وسایل نقلیه با وزن کل بیش از 3.5 تن در صورت بارگیری کامل و عدم استفاده برای حمل و نقل افراد.',
      correctAnswer: 'Falso'
    },

    // 4.9 Divieto di sorpasso per veicoli merci oltre 3,5 t
    {
      id: 'q_4_9_1',
      italianText: 'Il segnale raffigurato vieta ai veicoli di massa a pieno carico superiore a 3,5 tonnellate non destinati al trasporto di per- sone, di sorpassare veicoli a motore',
      farsiTranslation: 'صحیح: علامت نشان داده شده، وسایل نقلیه با وزن کامل بیش از 3.5 تن را که برای حمل و نقل افراد در نظر گرفته نشده اند، از سبقت گرفتن از وسایل نقلیه موتوری منع می کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_9_2',
      italianText: 'In presenza del segnale raffigurato, un autocarro non può sorpassare veicoli a motore se sulla sua carta di circolazione è indicata una massa complessiva a pieno carico superiore a 3,5 tonnellate',
      farsiTranslation: 'صحیح: در صورت وجود علامت نشان داده شده، کامیونی نمی تواند از وسایل نقلیه موتوری سبقت بگیرد، در صورتی که در سند ثبت آن جرم کل بارگیری شده بیش از 3.5 تن باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_9_3',
      italianText: 'Il segnale raffigurato consente ad un autocarro di massa a pieno carico inferiore a 3,5 tonnellate di sorpassare un auto- articolato',
      farsiTranslation: 'صحیح: علامت نشان داده شده به کامیونی با جرم بار کامل کمتر از 3.5 تن اجازه می دهد تا از یک کامیون مفصلی سبقت بگیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_9_4',
      italianText: 'Il segnale raffigurato consente ad un autobus di massa a pieno carico pari a 18 tonnellate di sorpassare un autotreno',
      farsiTranslation: 'صحیح: علامت نشان داده شده به اتوبوسی با وزن کامل 18 تن اجازه می دهد تا از یک کامیون سبقت بگیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_9_5',
      italianText: 'In presenza del segnale raffigurato un’autovettura con massa a pieno carico pari a 3 tonnellate trainante un carrello appendice, può sorpassare veicoli a motore',
      farsiTranslation: 'صحیح: در حضور سیگنال نشان داده شده، خودرویی با وزن کامل 3 تن که یک تریلر را یدک می کشد، می تواند از وسایل نقلیه موتوری سبقت بگیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_9_6',
      italianText: 'In presenza del segnale raffigurato un’autovettura può sorpassare un autotreno',
      farsiTranslation: 'صحیح: ماشین سواری کاملاً آزاد است که از تریلی‌ها سبقت بگیرد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_9_7',
      italianText: 'In presenza del segnale raffigurato un autocaravan con massa a pieno carico pari a 4 tonnellate può effettuare manovre di sorpasso',
      farsiTranslation: 'صحیح: در حضور سیگنال نشان داده شده، یک موتورخانه با وزن کامل 4 تن می تواند مانورهای سبقت را انجام دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_9_8',
      italianText: 'In presenza del segnale raffigurato è vietato agli autocarri con massa a pieno carico superiore a 3,5 t di sorpassare un motociclo',
      farsiTranslation: 'صحیح: در صورت وجود علامت به تصویر کشیده شده، کامیون هایی با جرم بار کامل بیش از 3.5 تن از سبقت گرفتن از موتورسیکلت منع می شوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_9_9',
      italianText: 'In presenza del segnale raffigurato un autocarro con massa massima a pieno carico superiore a 3,5 tonnellate trainante un rimorchio leggero, può sorpassare un motociclo',
      farsiTranslation: 'غلط: در حضور سیگنال نشان داده شده، یک کامیون با حداکثر جرم بار کامل بیش از 3.5 تن که یک تریلر سبک را یدک می کشد، می تواند از یک موتورسیکلت سبقت بگیرد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_9_10',
      italianText: 'In presenza del segnale raffigurato un autocaravan di massa a pieno carico superiore a 3,5 tonnellate non può sorpas- sare veicoli a motore',
      farsiTranslation: 'غلط: در حضور علامت نشان داده شده، موتورخانه ای با جرم کامل بار بیش از 3.5 تن نمی تواند از وسایل نقلیه موتوری سبقت بگیرد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_9_11',
      italianText: 'Il segnale raffigurato consente ad un autocarro di massa complessiva superiore a 3,5 tonnellate di sorpassare un motociclo',
      farsiTranslation: 'غلط: علامت نشان داده شده به کامیونی با وزن ناخالص بیش از 3.5 تن اجازه می دهد تا از یک موتورسیکلت سبقت بگیرد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_9_12',
      italianText: 'Il segnale raffigurato consente alle autovetture di sorpassare gli autocarri sulla corsia di destra',
      farsiTranslation: 'غلط: علامت نشان داده شده به خودروها اجازه می دهد از کامیون ها در لاین سمت راست سبقت بگیرند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_9_13',
      italianText: 'Il segnale raffigurato vieta il sorpasso agli autosnodati',
      farsiTranslation: 'غلط: علامت نشان داده شده سبقت گرفتن توسط اتوبوس های مفصلی را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_9_14',
      italianText: 'Il segnale raffigurato vieta ad un’autocaravan di massa complessiva pari a 6 tonnellate di effettuare manovre di sorpasso',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده موتورخانه ای با وزن کلی 6 تن را از انجام مانورهای سبقت ممنوع می کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_9_15',
      italianText: 'In presenza del segnale raffigurato, un autocarro di massa a pieno carico pari a 3 tonnellate non può effettuare manovre di sorpasso',
      farsiTranslation: 'غلط: در حضور سیگنال نشان داده شده، یک کامیون با وزن کامل 3 تن نمی تواند مانورهای سبقت را انجام دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_9_16',
      italianText: 'In presenza del segnale raffigurato i veicoli con massa a pieno carico superiore a 3,5 tonnellate destinati al trasporto di persone, non possono effettuare manovre di sorpasso Divieto di sorpasso per veicoli di massa complessiva a pieno carico oltre 3,5 t non adibiti al trasporto di persone',
      farsiTranslation: 'غلط: در صورت وجود علامت نشان داده شده، وسایل نقلیه با وزن کامل بیش از 3.5 تن که برای حمل و نقل افراد در نظر گرفته شده است، نمی توانند مانورهای سبقت را انجام دهند. سبقت برای وسایل نقلیه با وزن کل بارگذاری شده بیش از 3.5 تن که برای حمل و نقل افراد استفاده نمی شود ممنوع است.',
      correctAnswer: 'Falso'
    },

    // 4.10 Limite massimo di velocità
    {
      id: 'q_4_missing_camper',
      italianText: 'Il segnale raffigurato consente ad un’autocaravan di massa complessiva superiore a 3,5t di sorpassare.',
      farsiTranslation: 'تابلوی نشان‌داده‌شده به یک اتوکاروان (کمپر) با وزن کل بیش از ۳.۵ تن اجازه سبقت‌گرفتن می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_1',
      italianText: 'Il segnale raffigurato è un segnale di divieto',
      farsiTranslation: 'صحیح: این تابلو از گروه تابلوهای ممنوعیت (Divieto) است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_2',
      italianText: 'In presenza del segnale raffigurato è vietato superare la velocità di 80 km/h',
      farsiTranslation: 'صحیح: در صورت وجود علامت نشان داده شده، تجاوز از سرعت 80 کیلومتر بر ساعت ممنوع است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_3',
      italianText: 'Il segnale raffigurato può trovarsi anche sulle autostrade',
      farsiTranslation: 'صحیح: علامت نشان داده شده ممکن است در بزرگراه ها نیز دیده شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_4',
      italianText: 'Il limite di velocità indicato sul segnale raffigurato ha validità immediatamente dopo il segnale stesso',
      farsiTranslation: 'صحیح: محدودیت سرعت نشان داده شده در علامت نشان داده شده بلافاصله پس از خود علامت معتبر است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_5',
      italianText: 'Il segnale raffigurato prescrive di marciare a velocità inferiore o uguale a 80 km/h',
      farsiTranslation: 'صحیح: علامت نشان داده شده از شما می خواهد که با سرعت کمتر یا مساوی 80 کیلومتر در ساعت حرکت کنید',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_6',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده یک سیگنال تجویزی است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_7',
      italianText: 'Il segnale raffigurato impone di mantenere una distanza di sicurezza di almeno 80 metri',
      farsiTranslation: 'غلط: علامت نشان داده شده مستلزم حفظ فاصله ایمنی حداقل 80 متر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_8',
      italianText: 'Il segnale raffigurato non si riferisce ai motocicli',
      farsiTranslation: 'غلط: علامت نشان داده شده برای موتور سیکلت اعمال نمی شود',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_9',
      italianText: 'Il segnale raffigurato indica la velocità consigliata',
      farsiTranslation: 'غلط: سرعت توصیه‌شده تابلوی مربع آبی‌رنگ دارد. این تابلو اجباری و حداکثری است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_10',
      italianText: 'Il segnale raffigurato permette di effettuare il sorpasso a velocità superiore a 80 km/h',
      farsiTranslation: 'غلط: علامت نشان داده شده به شما امکان می دهد با سرعت بالای 80 کیلومتر در ساعت سبقت بگیرید',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_11',
      italianText: 'Il segnale raffigurato vieta la circolazione dei veicoli di massa totale superiore a 80 quintali',
      farsiTranslation: 'غلط: تابلوی نشان داده شده تردد وسایل نقلیه با جرم کل بیش از 80 کوینتال را ممنوع می کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_12',
      italianText: 'Il segnale raffigurato obbliga a rispettare un limite minimo di velocità',
      farsiTranslation: 'غلط: علامت نشان داده شده شما را ملزم به رعایت حداقل سرعت مجاز می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_13',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che, per costruzione, non possono raggiungere la velocità indicata',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده عبور وسایل نقلیه ای را که به دلیل ساخت و ساز نمی توانند به سرعت مشخص شده برسند ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_14',
      italianText: 'Il segnale raffigurato vieta ai veicoli di superare la velocità indicata',
      farsiTranslation: 'صحیح: حرکت با سرعت بیشتر از عدد روی تابلو ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_15',
      italianText: 'Il segnale raffigurato obbliga a rispettare un limite massimo di velocità',
      farsiTranslation: 'صحیح: علامت نشان داده شده شما را ملزم به رعایت حداکثر سرعت مجاز می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_16',
      italianText: 'Il segnale raffigurato indica la velocità massima alla quale i veicoli possono procedere',
      farsiTranslation: 'صحیح: علامت نشان داده شده حداکثر سرعتی که وسایل نقلیه می توانند با آن حرکت کنند را نشان می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_17',
      italianText: 'Il segnale raffigurato prescrive l’obbligo di viaggiare a velocità non superiore a 80 km/h',
      farsiTranslation: 'صحیح: علامت نشان داده شده الزام به سفر با سرعت بیش از 80 کیلومتر در ساعت را تجویز می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_18',
      italianText: 'Il numero raffigurato nel segnale indica la velocità massima consentita',
      farsiTranslation: 'صحیح: عدد نشان داده شده در علامت حداکثر سرعت مجاز را نشان می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_19',
      italianText: 'Il segnale raffigurato consente di circolare a velocità inferiore a quella indicata',
      farsiTranslation: 'صحیح: علامت نشان داده شده به شما امکان می دهد با سرعت کمتری نسبت به سرعت نشان داده شده سفر کنید',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_10_20',
      italianText: 'Il segnale raffigurato indica un limite di velocità valido solo per autoveicoli',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان دهنده محدودیت سرعتی است که فقط برای وسایل نقلیه موتوری معتبر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_21',
      italianText: 'Il segnale raffigurato obbliga a rispettare il limite minimo di velocità indicato',
      farsiTranslation: 'غلط: علامت نشان داده شده شما را ملزم به رعایت حداقل سرعت ذکر شده می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_22',
      italianText: 'Il segnale raffigurato impone ai veicoli che non sono in grado di superare gli 80 km/h di marciare sulla corsia di destra',
      farsiTranslation: 'غلط: تابلوی نشان داده شده به وسایل نقلیه ای نیاز دارد که از سرعت 80 کیلومتر در ساعت بیشتر نباشند تا در لاین سمت راست حرکت کنند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_23',
      italianText: 'Il limite di velocità indicato dal segnale raffigurato entra in vigore 150 metri dopo il segnale stesso',
      farsiTranslation: 'غلط: محدودیت سرعت نشان داده شده توسط تابلو نشان داده شده 150 متر بعد از خود تابلو اجرا می شود',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_24',
      italianText: 'Il segnale raffigurato vieta il transito agli autoveicoli con massa complessiva superiore al valore indicato',
      farsiTranslation: 'غلط: علامت نشان داده شده عبور وسایل نقلیه با جرم کل بیشتر از مقدار مشخص شده را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_10_25',
      italianText: 'Il segnale raffigurato indica un limite di velocità valido dalle ore 8.00 alle ore 20.00',
      farsiTranslation: 'غلط: علامت نشان داده شده یک محدودیت سرعت معتبر از ساعت 8.00 تا 20.00 را نشان می دهد',
      correctAnswer: 'Falso'
    },

    // 4.11 Fine limite massimo di velocità
    {
      id: 'q_4_11_1',
      italianText: 'Il segnale raffigurato indica la fine di una prescrizione',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده پایان یک نسخه را نشان می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_11_2',
      italianText: 'Il segnale raffigurato indica la fine del limite massimo di velocità',
      farsiTranslation: 'غلط: این تابلو باطل‌کننده (پایان) است، نه شروع‌کننده.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_11_3',
      italianText: 'Il segnale raffigurato consente di circolare a velocità superiore a 50 km/h',
      farsiTranslation: 'صحیح: شما مجازید از عدد روی تابلو سریع‌تر برانید (به شرط رعایت محدودیت کلی جاده).',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_11_4',
      italianText: 'Il segnale raffigurato consente di circolare entro i limiti di velocità vigenti per quel tipo di strada',
      farsiTranslation: 'صحیح: علامت نشان داده شده به شما امکان می دهد در محدوده سرعتی که برای آن نوع جاده وجود دارد، بچرخید',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_11_5',
      italianText: 'Il segnale raffigurato consente di marciare anche a velocità inferiore a 50 km/h',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده به شما امکان می دهد حتی با سرعت کمتر از 50 کیلومتر در ساعت سفر کنید',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_11_6',
      italianText: 'Il segnale raffigurato indica la fine del relativo divieto',
      farsiTranslation: 'صحیح: علامت نشان داده شده نشان دهنده پایان ممنوعیت مربوطه است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_11_7',
      italianText: 'Il segnale raffigurato indica il limite di velocità per tutti i veicoli',
      farsiTranslation: 'غلط: علامت نشان داده شده محدودیت سرعت برای همه وسایل نقلیه را نشان می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_11_8',
      italianText: 'Il segnale raffigurato vieta di superare la velocità di 50 km/h',
      farsiTranslation: 'غلط: برعکس، این تابلو محدودیت را برمی‌دارد و اجازه افزایش سرعت می‌دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_11_9',
      italianText: 'Il segnale raffigurato indica la fine del limite minimo di velocità',
      farsiTranslation: 'غلط: علامت نشان داده شده پایان حداقل سرعت مجاز را نشان می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_11_10',
      italianText: 'Il segnale raffigurato indica la fine dell’obbligo di mantenere una distanza di sicurezza di almeno 50 metri',
      farsiTranslation: 'غلط: علامت به تصویر کشیده شده نشان دهنده پایان تعهد به حفظ فاصله ایمنی حداقل 50 متر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_11_11',
      italianText: 'Il segnale raffigurato prescrive ai veicoli che non superano la velocità di 50 km/h di marciare sulla corsia di destra',
      farsiTranslation: 'غلط: علامت نشان داده شده به وسایل نقلیه ای که سرعت آنها از 50 کیلومتر در ساعت تجاوز نمی کند دستور می دهد در لاین سمت راست حرکت کنند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_11_12',
      italianText: 'Il segnale raffigurato indica la velocità consigliata',
      farsiTranslation: 'غلط: علامت نشان داده شده سرعت توصیه شده را نشان می دهد',
      correctAnswer: 'Falso'
    },

    // 4.12 Transito vietato ai pedoni
    {
      id: 'q_4_12_1',
      italianText: 'Il segnale raffigurato vieta il transito ai pedoni',
      farsiTranslation: 'صحیح: ورود عابران پیاده از این مسیر ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_12_2',
      italianText: 'Il segnale raffigurato consente il transito agli autoveicoli',
      farsiTranslation: 'صحیح: این ممنوعیت فقط برای پیاده‌هاست و خودروها آزادند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_12_3',
      italianText: 'Il segnale raffigurato consente il transito ai motocicli',
      farsiTranslation: 'صحیح: دوچرخه‌ها وسیله نقلیه محسوب شده و شامل این ممنوعیت نمی‌شوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_12_4',
      italianText: 'Il segnale raffigurato consente il transito ai quadricicli a motore',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده به چهار چرخه موتوری اجازه عبور می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_12_5',
      italianText: 'Il segnale raffigurato consente il transito alle biciclette',
      farsiTranslation: 'صحیح: علامت نشان داده شده به دوچرخه اجازه عبور می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_12_6',
      italianText: 'Il segnale raffigurato vieta il transito ai ciclomotori',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده، عبور موتورسیکلت ها را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_12_7',
      italianText: 'Il segnale raffigurato vale dalle ore 8.00 alle ore 20.00',
      farsiTranslation: 'غلط: سیگنال نشان داده شده از ساعت 8 صبح تا 8 شب معتبر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_12_8',
      italianText: 'Il segnale raffigurato indica un’area urbana riservata a parco giochi e divertimenti',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده نشان دهنده یک منطقه شهری است که برای زمین های بازی و سرگرمی در نظر گرفته شده است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_12_9',
      italianText: 'Il segnale raffigurato obbliga i pedoni a circolare sul margine sinistro della carreggiata',
      farsiTranslation: 'غلط: سیگنال نشان داده شده عابران پیاده را مجبور می کند تا در لبه سمت چپ جاده حرکت کنند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_12_10',
      italianText: 'Il segnale raffigurato indica l’inizio di un percorso pedonale',
      farsiTranslation: 'غلط: کاملاً برعکس است! این تابلو منطقه ممنوعه برای پیاده‌ها را نشان می‌دهد.',
      correctAnswer: 'Falso'
    },

    // 4.13 Transito vietato ai veicoli a braccia
    {
      id: 'q_4_13_1',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli a braccia',
      farsiTranslation: 'صحیح: چرخ‌های دستی و گاری‌هایی که توسط انسان هل داده می‌شوند، ممنوع‌الورود هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_13_2',
      italianText: 'Il segnale raffigurato consente il transito delle biciclette',
      farsiTranslation: 'صحیح: دوچرخه‌ها نیروی بازو نیستند (نیروی پا هستند) و می‌توانند عبور کنند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_13_3',
      italianText: 'Il segnale raffigurato consente il transito dei ciclomotori',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده اجازه عبور موتورسیکلت ها را می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_13_4',
      italianText: 'Il segnale raffigurato consente il transito di autovetture che trainano un carrello-appendice',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده امکان عبور خودروهایی را که تریلر را یدک می کشند، می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_13_5',
      italianText: 'Il segnale raffigurato vieta il transito di carretti a mano',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده ترانزیت گاری های دستی را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_13_6',
      italianText: 'Il segnale raffigurato indica una strada riservata ai venditori ambulanti',
      farsiTranslation: 'غلط: این تابلو منطقه دستفروشان را نشان نمی‌دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_13_7',
      italianText: 'Il segnale raffigurato vieta il transito dei veicoli a motore durante le ore di mercato',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده عبور وسایل نقلیه موتوری در ساعات بازار را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_13_8',
      italianText: 'Il segnale raffigurato è un segnale di pericolo',
      farsiTranslation: 'غلط: علامت نشان داده شده یک علامت خطر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_13_9',
      italianText: 'Il segnale raffigurato vale, per tutti i veicoli, durante le ore di mercato',
      farsiTranslation: 'غلط: سیگنال نشان داده شده برای تمام خودروها در ساعات بازار معتبر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_13_10',
      italianText: 'Il segnale raffigurato vieta il transito di veicoli a trazione animale',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده ترانزیت وسایل نقلیه حیوانات را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_13_11',
      italianText: 'Il segnale raffigurato vieta il transito ad un motociclo, anche se spinto a braccia',
      farsiTranslation: 'غلط: تابلوی نشان داده شده عبور موتورسیکلت را ممنوع می کند، حتی اگر با دست هل داده شود',
      correctAnswer: 'Falso'
    },

    // 4.14 Transito vietato ai veicoli a trazione animale
    {
      id: 'q_4_14_1',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli a trazione animale',
      farsiTranslation: 'صحیح: ورود هر نوع گاری و کالسکه که توسط حیوانات کشیده می‌شود، ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_14_2',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli trainati da cavalli',
      farsiTranslation: 'صحیح: تابلو نشان داده شده وسایل نقلیه با اسب را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_14_3',
      italianText: 'Il segnale raffigurato vieta la circolazione alle carrozze a cavalli',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده، گردش کالسکه های اسبی را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_14_4',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli trainati da asini',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده عبور وسایل نقلیه ای را که توسط خرها کشیده می شوند ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_14_5',
      italianText: 'Il segnale raffigurato consente il transito dei motocicli',
      farsiTranslation: 'صحیح: موتورسیکلت‌ها مشکلی برای عبور از این خیابان ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_14_6',
      italianText: 'Il segnale raffigurato consente il transito degli autoveicoli',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده اجازه عبور وسایل نقلیه موتوری را می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_14_7',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli a motore',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده عبور وسایل نقلیه موتوری را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_14_8',
      italianText: 'Il segnale raffigurato vige, nei centri abitati, dalle ore 8.00 alle ore 20.00',
      farsiTranslation: 'غلط: سیگنال نشان داده شده در مناطق مسکونی از ساعت 8:00 تا 20:00 فعال است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_14_9',
      italianText: 'Il segnale raffigurato consente il transito ai veicoli a trazione animale se muniti di pneumatici',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده اجازه می دهد تا وسایل نقلیه حمل و نقل حیوانات در صورت مجهز بودن به لاستیک',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_14_10',
      italianText: 'Il segnale raffigurato indica una strada riservata ai carri agricoli',
      farsiTranslation: 'غلط: علامت نشان داده شده جاده ای را نشان می دهد که برای گاری های کشاورزی در نظر گرفته شده است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_14_11',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli a braccia',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده عبور وسایل نقلیه دستی را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_14_12',
      italianText: 'Il segnale raffigurato vieta la circolazione a tutti i veicoli sprovvisti di motore',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده تردد همه وسایل نقلیه بدون موتور را ممنوع می کند',
      correctAnswer: 'Falso'
    },

    // 4.15 Transito vietato alle biciclette
    {
      id: 'q_4_15_1',
      italianText: 'Il segnale raffigurato vieta il transito alle biciclette',
      farsiTranslation: 'صحیح: علامت نشان داده شده دوچرخه را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_15_2',
      italianText: 'Il segnale raffigurato è un segnale di divieto',
      farsiTranslation: 'صحیح: علامتی که به تصویر کشیده شده نشانه ممنوعیت است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_15_3',
      italianText: 'Il segnale raffigurato consente il transito ai quadricicli a motore',
      farsiTranslation: 'صحیح: موتورگازی‌ها می‌توانند عبور کنند، زیرا این تابلو فقط مختص دوچرخه است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_15_4',
      italianText: 'Il segnale raffigurato consente il transito ai pedoni',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده به عابران پیاده اجازه عبور می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_15_5',
      italianText: 'Il segnale raffigurato consente il transito ai ciclomotori a due ruote',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده به موتور سیکلت های دو چرخ اجازه عبور می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_15_6',
      italianText: 'Il segnale raffigurato vieta il transito ai quadricicli a pedale',
      farsiTranslation: 'صحیح: علامت نشان داده شده عبور و مرور چهار چرخه های پدالی را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_15_7',
      italianText: 'Il segnale raffigurato vieta il transito ai tandem',
      farsiTranslation: 'صحیح: دوچرخه‌های دونفره (تاندم) نیز شامل این قانون می‌شوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_15_8',
      italianText: 'Il segnale raffigurato vale dalle ore 8.00 alle ore 20.00',
      farsiTranslation: 'غلط: سیگنال نشان داده شده از ساعت 8 صبح تا 8 شب معتبر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_15_9',
      italianText: 'Il segnale raffigurato consente il transito delle biciclette nelle ore notturne',
      farsiTranslation: 'غلط: سیگنال نشان داده شده امکان حمل و نقل دوچرخه را در شب فراهم می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_15_10',
      italianText: 'Il segnale raffigurato vieta il transito ai motocicli',
      farsiTranslation: 'صحیح: ورود دوچرخه‌ها از این مسیر ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_15_11',
      italianText: 'Il segnale raffigurato vieta il transito ai ciclomotori',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده، عبور موتورسیکلت ها را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_15_12',
      italianText: 'Il segnale raffigurato indica la presenza di una corsia riservata a biciclette e ciclomotori',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان دهنده وجود خطی است که برای دوچرخه و موتورسیکلت در نظر گرفته شده است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_15_13',
      italianText: 'Il segnale raffigurato indica un parcheggio per le biciclette',
      farsiTranslation: 'غلط: این تابلو ممنوعیت ورود است، نه پارکینگ.',
      correctAnswer: 'Falso'
    },

    // 4.16 Transito vietato ai motocicli
    {
      id: 'q_4_16_1',
      italianText: 'Il segnale raffigurato vieta il transito ai motocicli',
      farsiTranslation: 'صحیح: ورود تمام انواع موتورسیکلت از این مسیر ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_16_2',
      italianText: 'Il segnale raffigurato consente il transito ai tricicli e ai quadricicli a motore',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده اجازه عبور و مرور سه چرخه های موتوری و چهار چرخه را می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_16_3',
      italianText: 'Il segnale raffigurato consente il transito alle autovetture',
      farsiTranslation: 'صحیح: ورود ماشین‌های سواری مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_16_4',
      italianText: 'Il segnale raffigurato consente il transito alle biciclette',
      farsiTranslation: 'صحیح: ممنوعیت فقط روی موتورهای قوی‌تر اعمال می‌شود و موتورگازی‌ها مجازند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_16_5',
      italianText: 'Il segnale raffigurato vieta il transito ai motocicli di qualsiasi cilindrata',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده عبور موتورسیکلت با هر ظرفیت موتور را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_16_6',
      italianText: 'Il segnale raffigurato consente il transito ai motocicli',
      farsiTranslation: 'غلط: سیگنال نشان داده شده به موتور سیکلت ها اجازه عبور می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_16_7',
      italianText: 'Il segnale raffigurato vieta il transito a tutti i veicoli a due ruote',
      farsiTranslation: 'غلط: موتورگازی‌ها (Ciclomotori) که دو چرخ و موتور دارند می‌توانند عبور کنند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_16_8',
      italianText: 'Il segnale raffigurato si riferisce ai soli motocicli di cilindrata superiore ai 125 cm3',
      farsiTranslation: 'غلط: سیگنال نشان داده شده فقط به موتورسیکلت هایی با جابجایی بیشتر از 125 سانتی متر مکعب اشاره دارد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_16_9',
      italianText: 'Il segnale raffigurato consente il transito ai motocicli dotati di cellula di sicurezza',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده اجازه عبور موتورسیکلت های مجهز به سلول ایمنی را می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_16_10',
      italianText: 'Il segnale raffigurato vieta il transito ai ciclomotori',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده، عبور موتورسیکلت ها را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_16_11',
      italianText: 'Il segnale raffigurato vieta il transito ai quadricicli a motore',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده، عبور و مرور چهار چرخه های موتوری را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_16_12',
      italianText: 'Il segnale raffigurato è un segnale di pericolo',
      farsiTranslation: 'غلط: علامت نشان داده شده یک علامت خطر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_16_13',
      italianText: 'Il segnale raffigurato obbliga i motociclisti a servirsi della pista loro riservata',
      farsiTranslation: 'غلط: تابلوی نشان داده شده موتورسواران را موظف می کند از مسیری که برای آنها در نظر گرفته شده است استفاده کنند',
      correctAnswer: 'Falso'
    },

    // 4.17 Transito vietato alle macchine agricole
    {
      id: 'q_4_17_1',
      italianText: 'Il segnale raffigurato vieta il transito alle trattrici agricole',
      farsiTranslation: 'صحیح: ورود تراکتورها و ماشین‌آلات کشاورزی از این خیابان مجاز نیست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_17_2',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di veicoli sgombraneve',
      farsiTranslation: 'صحیح: در صورت وجود تابلوی به تصویر کشیده شده، عبور و مرور برف روب ها مجاز است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_17_3',
      italianText: 'Il segnale raffigurato vale sia di giorno che di notte',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده در روز و شب معتبر است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_17_4',
      italianText: 'In presenza del segnale raffigurato è consentito il transito alle macchine operatrici destinate a lavori di manutenzione stradale',
      farsiTranslation: 'صحیح: در صورت وجود علامت نشان داده شده، ترانزیت ماشین آلات عامل در نظر گرفته شده برای کارهای تعمیر و نگهداری جاده مجاز است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_17_5',
      italianText: 'Il segnale raffigurato vale sia per le macchine agricole gommate, sia per quelle cingolate',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده برای ماشین آلات کشاورزی چرخدار و ردیابی اعمال می شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_17_6',
      italianText: 'In presenza del segnale raffigurato è consentito il transito ai motocicli',
      farsiTranslation: 'صحیح: در صورت وجود تابلوی به تصویر کشیده شده، موتورسیکلت ها مجاز به تردد هستند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_17_7',
      italianText: 'In presenza del segnale raffigurato è consentito il transito alle macchine agricole',
      farsiTranslation: 'غلط: در صورت وجود تابلوی به تصویر کشیده شده، ماشین آلات کشاورزی مجاز به عبور و مرور هستند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_17_8',
      italianText: 'In presenza del segnale raffigurato è consentito il traino dei rimorchi agricoli di massa complessiva fino a 1,5 tonnellate',
      farsiTranslation: 'غلط: در صورت وجود تابلوی به تصویر کشیده شده، یدک کشی تریلرهای کشاورزی با وزن کل تا 1.5 تن مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_17_9',
      italianText: 'Il segnale raffigurato vieta il transito ai trattori stradali per semirimorchi',
      farsiTranslation: 'غلط: کشنده‌های تریلی ماشین کشاورزی محسوب نمی‌شوند و می‌توانند عبور کنند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_17_10',
      italianText: 'Il segnale raffigurato è obbligatorio in corrispondenza degli accessi privati',
      farsiTranslation: 'غلط: علامت نشان داده شده در دسترسی های خصوصی اجباری است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_17_11',
      italianText: 'Il segnale raffigurato si trova soltanto sulla rete stradale delle aziende agricole',
      farsiTranslation: 'غلط: علامت نشان داده شده فقط در شبکه جاده مزرعه یافت می شود',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_17_12',
      italianText: 'In presenza del segnale raffigurato è consentito il transito alle macchine agricole durante le fiere',
      farsiTranslation: 'غلط: در صورت وجود تابلوی نمایش داده شده، تردد ماشین آلات کشاورزی در نمایشگاه ها مجاز است',
      correctAnswer: 'Falso'
    },

    // 4.18 Transito vietato a tutti gli autoveicoli
    {
      id: 'q_4_18_1',
      italianText: 'Il segnale raffigurato vieta il transito a tutti gli autoveicoli',
      farsiTranslation: 'صحیح: ورود همه خودروهای موتوری (سواری، باری، اتوبوس) کاملاً ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_18_2',
      italianText: 'Il segnale raffigurato vieta il transito ai tricicli a motore',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده موتور سه چرخه را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_18_3',
      italianText: 'In presenza del segnale raffigurato è permesso il transito ai motocicli',
      farsiTranslation: 'صحیح: در صورت وجود تابلوی به تصویر کشیده شده، موتورسیکلت ها مجاز به تردد هستند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_18_4',
      italianText: 'In presenza del segnale raffigurato è permesso il transito ai ciclomotori a due ruote',
      farsiTranslation: 'صحیح: در صورت وجود علامت به تصویر کشیده شده، موتور سیکلت های دو چرخ مجاز به تردد هستند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_18_5',
      italianText: 'Il segnale raffigurato vieta il transito ai quadricicli a motore',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده، عبور و مرور چهار چرخه های موتوری را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_18_6',
      italianText: 'In presenza del segnale raffigurato è permesso il transito ai veicoli sprovvisti di motore',
      farsiTranslation: 'صحیح: در صورت وجود علامت به تصویر کشیده شده، عبور و مرور برای وسایل نقلیه بدون موتور مجاز است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_18_7',
      italianText: 'In presenza del segnale raffigurato è permesso il transito ai quadricicli a motore',
      farsiTranslation: 'غلط: در صورت وجود علامت نشان داده شده، چهار چرخه های موتوری مجاز به تردد هستند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_18_8',
      italianText: 'Il segnale raffigurato vieta il transito alle sole autovetture non catalizzate',
      farsiTranslation: 'غلط: تابلوی نشان داده شده فقط ترانزیت خودروهای غیر کاتالیزور را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_18_9',
      italianText: 'In presenza del segnale raffigurato è consentito il transito alle autovetture adibite al servizio di taxi',
      farsiTranslation: 'غلط: در صورت وجود تابلوی نمایش داده شده، تردد خودروهای مورد استفاده برای تاکسی سرویس مجاز است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_18_10',
      italianText: 'In presenza del segnale raffigurato è permesso il transito a tutti i tricicli a motore',
      farsiTranslation: 'غلط: با وجود تابلوی به تصویر کشیده شده، تمامی سه چرخه های موتوری مجاز به تردد هستند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_18_11',
      italianText: 'In presenza del segnale raffigurato è consentito il transito agli autobus',
      farsiTranslation: 'غلط: با وجود تابلوی به تصویر کشیده شده، اتوبوس ها مجاز به تردد هستند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_18_12',
      italianText: 'In presenza del segnale raffigurato è consentito il transito agli autocarri',
      farsiTranslation: 'غلط: در صورت وجود تابلوی به تصویر کشیده شده، عبور کامیون ها مجاز است',
      correctAnswer: 'Falso'
    },

    // 4.19 Transito vietato agli autobus
    {
      id: 'q_4_19_1',
      italianText: 'Il segnale raffigurato indica il divieto di transito agli autobus',
      farsiTranslation: 'صحیح: علامت نشان داده شده نشان می دهد که اتوبوس ممنوع است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_19_2',
      italianText: 'In presenza del segnale raffigurato è consentito il transito alle autovetture',
      farsiTranslation: 'صحیح: ماشین‌های سواری مجاز به عبور هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_19_3',
      italianText: 'In presenza del segnale raffigurato è consentito il transito agli autocarri',
      farsiTranslation: 'صحیح: در صورت وجود تابلوی به تصویر کشیده شده، عبور کامیون ها مجاز است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_19_4',
      italianText: 'In presenza del segnale raffigurato è consentito il transito ai motocicli',
      farsiTranslation: 'صحیح: در صورت وجود تابلوی به تصویر کشیده شده، موتورسیکلت ها مجاز به تردد هستند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_19_5',
      italianText: 'In presenza del segnale raffigurato è consentito il transito alle autocaravan',
      farsiTranslation: 'صحیح: با وجود تابلوی به تصویر کشیده شده، کاروان های موتوری مجاز به تردد هستند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_19_6',
      italianText: 'Il segnale raffigurato vieta il transito anche agli autobus di massa a pieno carico inferiore a 3,5 tonnellate',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده همچنین عبور اتوبوس هایی با جرم بار کامل کمتر از 3.5 تن را ممنوع می کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_19_7',
      italianText: 'In presenza del segnale raffigurato è consentito il transito agli autobus turistici',
      farsiTranslation: 'غلط: با وجود تابلوی به تصویر کشیده شده، اتوبوس های توریستی مجاز به تردد هستند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_19_8',
      italianText: 'Il segnale raffigurato segnala una corsia riservata agli autobus',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان دهنده خطی است که برای اتوبوس ها در نظر گرفته شده است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_19_9',
      italianText: 'Il segnale raffigurato preannuncia un’area di sosta per autobus turistici',
      farsiTranslation: 'غلط: تابلویی که به تصویر کشیده شده است، فضای استراحت اتوبوس های توریستی را اعلام می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_19_10',
      italianText: 'In presenza del segnale raffigurato è consentito il transito agli scuolabus',
      farsiTranslation: 'غلط: با وجود تابلوی به تصویر کشیده شده، اتوبوس های مدرسه اجازه تردد دارند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_19_11',
      italianText: 'Il segnale raffigurato vieta il transito alle autocaravan',
      farsiTranslation: 'صحیح: ورود انواع اتوبوس از این مسیر ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_19_12',
      italianText: 'Il segnale raffigurato è valido solo nei giorni feriali',
      farsiTranslation: 'غلط: سیگنال نشان داده شده فقط در روزهای هفته معتبر است',
      correctAnswer: 'Falso'
    },

    // 4.20 Transito vietato ai veicoli che trasportano sostanze suscettibili di contaminare l'acqua
    {
      id: 'q_4_20_1',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che trasportano sostanze suscettibili di contaminare l’acqua',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده عبور وسایل نقلیه حامل موادی را که احتمالاً آب را آلوده می کند ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_20_2',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di autoveicoli che trasportano prodotti che non contaminano l’acqua',
      farsiTranslation: 'صحیح: در صورت وجود تابلوی به تصویر کشیده شده، تردد خودروهای حامل محصولاتی که آب را آلوده نمی کنند، مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_20_3',
      italianText: 'In presenza del segnale raffigurato è consentito il transito alle autocisterne che trasportano acqua',
      farsiTranslation: 'صحیح: تانکرهای آب آشامیدنی خطرناک نیستند و می‌توانند وارد شوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_20_4',
      italianText: 'In presenza del segnale raffigurato è consentito il transito alle innaffiatrici stradali',
      farsiTranslation: 'صحیح: در صورت وجود تابلوی به تصویر کشیده شده تردد در آبپاش های خیابانی مجاز است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_20_5',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di rimorchi che trasportano sostanze che possono contamina- re l’acqua',
      farsiTranslation: 'غلط: در صورت وجود تابلوی نمایش داده شده، عبور تریلرهای حامل موادی که می تواند آب را آلوده کند، مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_20_6',
      italianText: 'Il segnale raffigurato preannuncia una zona soggetta ad allagamento',
      farsiTranslation: 'غلط: ربطی به جمع شدن آب باران و سیلاب در جاده ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_20_7',
      italianText: 'Il segnale raffigurato preannuncia la probabile presenza di acqua sulla carreggiata',
      farsiTranslation: 'غلط: تابلو نشان داده شده وجود احتمالی آب در جاده را هشدار می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_20_8',
      italianText: 'Il segnale raffigurato vieta la sosta delle autocisterne',
      farsiTranslation: 'غلط: تابلو نشان داده شده پارک تانکرها را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_20_9',
      italianText: 'Il segnale raffigurato vieta il transito alle cisterne vuote',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده ترانزیت مخازن خالی را ممنوع می کند',
      correctAnswer: 'Falso'
    },

    // 4.21 Transito vietato ai veicoli di massa oltre 3,5 t non adibiti al trasporto di persone
    {
      id: 'q_4_21_1',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli adibiti al trasporto di cose con massa a pieno carico superiore a 3,5 tonnellate',
      farsiTranslation: 'صحیح: این تابلو عبور ماشین‌های باری را که وزن مجاز آن‌ها بیش از ۳.۵ تن است، ممنوع می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_21_2',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di autobus di massa complessiva superiore a 3,5 tonnellate',
      farsiTranslation: 'صحیح: اتوبوس‌ها مسافر جابه‌جا می‌کنند و حتی اگر وزنشان بیشتر از ۳.۵ تن باشد، اجازه عبور دارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_21_3',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di un’autocaravan di massa a pieno carico superiore a 3,5 tonnellate',
      farsiTranslation: 'صحیح: کمپرها (Autocaravan) نیز برای حمل انسان هستند و شامل این ممنوعیت باری نمی‌شوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_21_4',
      italianText: 'Il segnale raffigurato può essere munito di pannello integrativo con un diverso valore della massa ammessa al transito',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده می تواند به یک پانل یکپارچه با مقدار متفاوت جرم مجاز برای حمل و نقل مجهز شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_21_5',
      italianText: 'Il segnale raffigurato vieta il transito di un autocarro di massa a pieno carico pari a 3 tonnellate',
      farsiTranslation: 'غلط: کامیون‌های سبک (تا ۳.۵ تن) آزادند و ممنوعیتی برای آن‌ها وجود ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_21_6',
      italianText: 'Il segnale raffigurato vieta il transito a tutti gli autocarri carrozzati con furgone chiuso',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده عبور و مرور همه کامیون های با بدنه ون بسته را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_21_7',
      italianText: 'In presenza del segnale raffigurato è consentito il transito a tutti gli autocarri carrozzati con cassone aperto',
      farsiTranslation: 'غلط: با وجود تابلوی به تصویر کشیده شده، کلیه کامیون های با بدنه باز مجاز به تردد هستند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_21_8',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli di massa superiore a 3,5 tonnellate destinati al trasporto di persone',
      farsiTranslation: 'غلط: همان‌طور که گفته شد، وسایل نقلیه مسافربری از این قانون مستثنی هستند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_21_9',
      italianText: 'In presenza del segnale raffigurato è consentito il transito agli autotreni di massa superiore a 3,5 tonnellate non adibiti al trasporto di persone Transito vietato ai veicoli di massa complessiva a pieno carico oltre 3,5 t non adibiti al trasporto di persone',
      farsiTranslation: 'غلط: در صورت وجود علامت به تصویر کشیده شده، حمل و نقل برای کامیون هایی با وزن بیش از 3.5 تن مجاز است و برای حمل و نقل افراد استفاده نمی شود. ترانزیت برای وسایل نقلیه با وزن کل بیش از 3.5 تن در صورت بارگیری کامل ممنوع است و برای حمل و نقل افراد استفاده نمی شود.',
      correctAnswer: 'Falso'
    },

    // 4.22 Transito vietato ai veicoli di massa oltre 6,5 t non adibiti al trasporto di persone
    {
      id: 'q_4_22_1',
      italianText: 'In presenza del segnale raffigurato è consentito il transito alle autocaravan',
      farsiTranslation: 'صحیح: کمپرها به دلیل این‌که ماشین باری محسوب نمی‌شوند، تحت این محدودیت وزنی قرار نمی‌گیرند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_22_2',
      italianText: 'In presenza del segnale raffigurato è consentito il transito agli autobus',
      farsiTranslation: 'صحیح: با وجود تابلوی به تصویر کشیده شده، اتوبوس ها مجاز به تردد هستند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_22_3',
      italianText: 'Il segnale raffigurato vieta il transito agli autocarri con massa a pieno carico superiore a 6,5 tonnellate',
      farsiTranslation: 'صحیح: کامیون‌های حامل بار که وزنشان از این عدد بیشتر باشد، حق ورود ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_22_4',
      italianText: 'In presenza del segnale raffigurato è consentito il transito ai veicoli adibiti al trasporto di cose con massa complessiva pari o inferiore a quella indicata nel segnale',
      farsiTranslation: 'صحیح: کامیونی که وزن آن دقیقاً ۶.۵ تن یا کمتر باشد، مجاز به عبور است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_22_5',
      italianText: 'In presenza del segnale raffigurato è vietato il transito di autocarri se sulla carta di circolazione è indicata una massa a pieno carico superiore a 6,5 tonnellate',
      farsiTranslation: 'صحیح: در صورت وجود علامت نشان داده شده، در صورتی که در سند ثبت وسیله نقلیه، جرم کامل بار بیش از 6.5 تن مشخص شود، عبور کامیون ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_22_6',
      italianText: 'In presenza del segnale raffigurato è consentito il transito agli autocarri di massa complessiva pari a 7,5 tonnellate',
      farsiTranslation: 'غلط: از آنجا که ۷.۵ بیشتر از ۶.۵ است، ورود این کامیون‌ها ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_22_7',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli di massa superiore a 6,5 tonnellate destinati al trasporto di persone',
      farsiTranslation: 'غلط: تابلوی نشان داده شده ترانزیت وسایل نقلیه با وزن بیش از 6.5 تن را که برای حمل و نقل افراد در نظر گرفته شده است ممنوع می کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_22_8',
      italianText: 'In presenza del segnale raffigurato è consentito il transito agli autoveicoli ad uso speciale di massa superiore a 6,5 tonnellate',
      farsiTranslation: 'غلط: در صورت وجود علامت به تصویر کشیده شده، حمل و نقل برای وسایل نقلیه ویژه با وزن بیش از 6.5 تن مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_22_9',
      italianText: 'Il segnale raffigurato preannuncia una pesa pubblica nelle vicinanze',
      farsiTranslation: 'غلط: این تابلو نشان‌دهنده باسکول (ترازوی عمومی جاده‌ای) نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_22_10',
      italianText: 'Il segnale raffigurato vieta il transito di autobus di massa complessiva superiore a 10 tonnellate Transito vietato ai veicoli di massa complessiva a pieno carico oltre 6,5 t non adibiti al trasporto di persone',
      farsiTranslation: 'غلط: تابلوی نشان داده شده عبور اتوبوس هایی با جرم کل بیش از 10 تن را ممنوع می کند. ترانزیت برای وسایل نقلیه با وزن کل بیش از 6.5 تن که برای حمل و نقل افراد استفاده نمی شود ممنوع است.',
      correctAnswer: 'Falso'
    },

    // 4.23 Transito vietato ai veicoli a motore trainanti un rimorchio
    {
      id: 'q_4_23_1',
      italianText: 'Il segnale raffigurato può essere integrato con pannello che consente il traino di rimorchi di massa non superiore a quella indicata nel pannello stesso',
      farsiTranslation: 'صحیح: علامت نشان داده شده را می توان با تابلویی ادغام کرد که امکان یدک کشی تریلرهایی با جرمی که در خود پانل نشان داده شده بیشتر نباشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_23_2',
      italianText: 'Il segnale raffigurato vieta il transito agli autotreni',
      farsiTranslation: 'صحیح: تریلی‌ها (Autotreni) که دارای یدک‌کش هستند، اجازه ورود ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_23_3',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di un autoveicolo trainante un carrello-appendice',
      farsiTranslation: 'صحیح: یدک‌کش‌های خیلی کوچک (Carrello-appendice) که به عنوان بخشی از ماشین حساب می‌شوند، از این ممنوعیت مستثنی هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_23_4',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli a motore trainanti un rimorchio',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده عبور وسایل نقلیه موتوری یدک کش تریلر را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_23_5',
      italianText: 'In presenza del segnale raffigurato è consentito il transito agli autosnodati',
      farsiTranslation: 'صحیح: اتوبوس‌های مفصل‌دار (آکاردئونی) یک وسیله نقلیه واحد محسوب می‌شوند، نه ماشینی با یدک‌کش مجزا.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_23_6',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di un’autovettura trainante un caravan',
      farsiTranslation: 'غلط: کاراوان یک یدک‌کش (Rimorchio) کامل است، بنابراین ماشین سواری متصل به آن نمی‌تواند عبور کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_23_7',
      italianText: 'Il segnale raffigurato vale soltanto per i veicoli adibiti al trasporto di merci',
      farsiTranslation: 'غلط: این قانون برای تمام وسایل نقلیه‌ای که تریلر وصل کرده‌اند (مانند ماشین‌های سواری با قایق‌کش) معتبر است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_23_8',
      italianText: 'Il segnale raffigurato indica autocarri in rallentamento',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان دهنده کند شدن کامیون ها است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_23_9',
      italianText: 'Il segnale raffigurato indica che gli autotreni debbono procedere ad una distanza di almeno 100 metri tra di loro',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان می دهد که کامیون ها باید در فاصله حداقل 100 متری بین خود حرکت کنند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_23_10',
      italianText: 'In presenza del segnale raffigurato è consentito il transito ad un’autovettura che traina un rimorchio per imbarcazione',
      farsiTranslation: 'غلط: در صورت وجود علامت نشان داده شده، عبور و مرور برای خودرویی که تریلر قایق را یدک می کشد مجاز است',
      correctAnswer: 'Falso'
    },

    // 4.24 Transito vietato ai veicoli che trasportano merci pericolose
    {
      id: 'q_4_24_1',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che trasportano merci pericolose',
      farsiTranslation: 'صحیح: ورود تانکرهایی که مواد سمی یا خطرناک حمل می‌کنند، ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_24_2',
      italianText: 'Il segnale raffigurato vieta il transito alle autocisterne che trasportano benzina',
      farsiTranslation: 'صحیح: بنزین یک محموله خطرناک و قابل‌اشتعال است و ماشین‌های حامل آن نمی‌توانند از این جاده عبور کنند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_24_3',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che trasportano carni macellate',
      farsiTranslation: 'غلط: گوشت محموله خطرناکی نیست و ورود کامیون‌های حامل آن بلامانع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_24_4',
      italianText: 'Il segnale raffigurato vieta il transito agli autoveicoli con motore alimentato a gas liquido (GPL)',
      farsiTranslation: 'غلط: ماشینی که سوخت موتور خودش گاز است، ماشین "حامل بار خطرناک" محسوب نمی‌شود و ورودش آزاد است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_24_5',
      italianText: 'Il segnale raffigurato vieta il transito agli autocarri telonati',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده عبور کامیون های پرده را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_24_6',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che trasportano merci deperibili',
      farsiTranslation: 'غلط: تابلوی نشان داده شده ترانزیت وسایل نقلیه ای را که کالاهای فاسد شدنی را حمل می کنند ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_24_7',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli con furgone frigorifero',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده تردد وسایل نقلیه با وانت های یخچال دار را ممنوع می کند',
      correctAnswer: 'Falso'
    },

    // 4.25 Transito vietato ai veicoli che trasportano esplosivi o prodotti facilmente infiammabili
    {
      id: 'q_4_25_1',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che trasportano esplosivi',
      farsiTranslation: 'صحیح: حاملین مواد منفجره به هیچ وجه حق ورود ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_25_2',
      italianText: 'Il carburante contenuto nel serbatoio del veicolo non si considera trasporto di materiale infiammabile vietato dal segnale in figura',
      farsiTranslation: 'صحیح: باک بنزین یا گاز خودِ ماشین استثنا است و باعث ممنوعیت ورود نمی‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_25_3',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di autovetture alimentate a metano',
      farsiTranslation: 'صحیح: در صورت وجود تابلوی به تصویر کشیده شده، تردد خودروهای گاز متان مجاز است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_25_4',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli che trasportano prodotti facilmente infiammabili',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده عبور وسایل نقلیه ای را که محصولات بسیار قابل اشتعال را حمل می کنند ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_25_5',
      italianText: 'In presenza del segnale raffigurato gli autoveicoli che trasportano esplosivi possono effettuare manovre di sorpasso',
      farsiTranslation: 'غلط: در حضور سیگنال نشان داده شده، وسایل نقلیه حامل مواد منفجره می توانند مانورهای سبقت را انجام دهند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_25_6',
      italianText: 'Il segnale raffigurato prescrive di fare attenzione al transito di veicoli che trasportano esplosivo',
      farsiTranslation: 'غلط: این تابلو تابلوی احتیاط نیست، بلکه یک ممنوعیت مطلق برای ورود این‌گونه ماشین‌هاست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_25_7',
      italianText: 'In presenza del segnale raffigurato è consentito il transito ai veicoli che trasportano prodotti facilmente infiammabili, purché non esplosivi',
      farsiTranslation: 'غلط: این تابلو هم مواد منفجره و هم مواد به شدت قابل اشتعال را ممنوع می‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_25_8',
      italianText: 'In presenza del segnale raffigurato è consentito il traino di veicoli che trasportano prodotti facilmente infiammabili',
      farsiTranslation: 'غلط: در صورت وجود علامت به تصویر کشیده شده، یدک کشی وسایل نقلیه ای که محصولات بسیار قابل اشتعال را حمل می کنند مجاز است',
      correctAnswer: 'Falso'
    },

    // 4.26 Transito vietato ai veicoli aventi larghezza superiore a 2,30 metri
    {
      id: 'q_4_26_1',
      italianText: 'Il segnale raffigurato si riferisce ai veicoli anche se sprovvisti di motore',
      farsiTranslation: 'صحیح: هر وسیله نقلیه‌ای (حتی درشکه‌های پهن بدون موتور) که بیش از این عرض داشته باشند، ممنوع‌الورود هستند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_26_2',
      italianText: 'Il segnale raffigurato può trovarsi prima di una strettoia',
      farsiTranslation: 'صحیح: علامت نشان داده شده ممکن است قبل از یک گلوگاه باشد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_26_3',
      italianText: 'Il segnale raffigurato è posto sulle strade sia urbane che extraurbane',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده در جاده های شهری و برون شهری قرار گرفته است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_26_4',
      italianText: 'Il segnale raffigurato indica la larghezza massima dei veicoli ammessi al transito',
      farsiTranslation: 'صحیح: عددی که روی تابلو نوشته شده (مثلاً ۲.۳۰)، نشانگر پهن‌ترین ماشینی است که اجازه عبور دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_26_5',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di autotreni larghi 2,30 metri',
      farsiTranslation: 'صحیح: ماشینی که دقیقاً ۲.۳۰ متر عرض داشته باشد، هنوز مجاز به عبور است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_26_6',
      italianText: 'Il segnale raffigurato si riferisce a tutti i veicoli di larghezza superiore a 2,30 metri',
      farsiTranslation: 'صحیح: علامت نشان داده شده به تمام وسایل نقلیه با عرض بیش از 2.30 متر اشاره دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_26_7',
      italianText: 'Il segnale raffigurato indica la distanza minima di sicurezza tra due autoveicoli in transito su quella strada',
      farsiTranslation: 'غلط: این تابلو نشان‌دهنده عرض وسایل نقلیه است، نه فاصله طولی ایمنی بین ماشین‌ها.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_26_8',
      italianText: 'In presenza del segnale raffigurato i veicoli a trazione animale larghi più di 2,30 m possono transitare',
      farsiTranslation: 'غلط: در حضور تابلوی به تصویر کشیده شده، وسایل نقلیه حیوانات با عرض بیش از 2.30 متر می توانند عبور کنند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_26_9',
      italianText: 'Il segnale raffigurato è un divieto che non riguarda gli autobus',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده ممنوعیتی است که شامل اتوبوس نمی شود',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_26_10',
      italianText: 'Il segnale raffigurato indica la larghezza di una strettoia',
      farsiTranslation: 'غلط: علامت نشان داده شده عرض یک گلوگاه را نشان می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_26_11',
      italianText: 'Il segnale raffigurato è relativo al rimorchio, ma non alla motrice',
      farsiTranslation: 'غلط: سیگنال نشان داده شده مربوط به تریلر است، اما نه به تراکتور',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_26_12',
      italianText: 'Il segnale raffigurato indica una strada larga 2,30 metri',
      farsiTranslation: 'غلط: این تابلو عرض جاده را مشخص نمی‌کند، بلکه حداکثر عرض مجاز برای خودرو را نشان می‌دهد.',
      correctAnswer: 'Falso'
    },

    // 4.27 Transito vietato ai veicoli aventi altezza superiore a 3,50 metri
    {
      id: 'q_4_27_1',
      italianText: 'Il segnale raffigurato indica l’altezza massima, misurata dal piano stradale, dei veicoli che possono transitare',
      farsiTranslation: 'صحیح: ارتفاع کل خودرو (همراه با بار) از کف جاده اندازه‌گیری می‌شود و نباید از عدد روی تابلو بیشتر باشد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_27_2',
      italianText: 'Il segnale raffigurato vieta il transito degli autoveicoli con altezza, comprensiva del carico, superiore a 3,50 metri',
      farsiTranslation: 'صحیح: تابلو نشان داده شده عبور وسایل نقلیه موتوری با ارتفاع با احتساب بار بیش از 3.50 متر را ممنوع می کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_27_3',
      italianText: 'Il segnale raffigurato indica l’altezza massima dei veicoli ammessi al transito',
      farsiTranslation: 'صحیح: علامت نشان داده شده حداکثر ارتفاع وسایل نقلیه مجاز برای حمل و نقل را نشان می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_27_4',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di una macchina agricola alta 3,50 metri',
      farsiTranslation: 'صحیح: ماشینی که دقیقاً ۳.۵۰ متر ارتفاع دارد، از نظر قانونی می‌تواند عبور کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_27_5',
      italianText: 'Il segnale raffigurato può trovarsi sia nei centri abitati che fuori',
      farsiTranslation: 'صحیح: سیگنال به تصویر کشیده شده را می توان هم در مراکز مسکونی و هم در خارج از آن یافت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_27_6',
      italianText: 'Il segnale raffigurato può trovarsi in un punto in cui la strada passa sotto un ponte',
      farsiTranslation: 'صحیح: این تابلو معمولاً برای جلوگیری از برخورد ماشین‌های بلند با سقف زیرگذرها و پل‌ها نصب می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_27_7',
      italianText: 'Il segnale raffigurato vieta il transito degli autoveicoli di lunghezza superiore a 3,50 metri',
      farsiTranslation: 'غلط: این تابلو نشان‌دهنده ارتفاع است، نه طول خودرو.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_27_8',
      italianText: 'Il segnale raffigurato indica un passaggio alto 3,50 metri',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده نشان دهنده گذرگاهی به ارتفاع 3.50 متر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_27_9',
      italianText: 'Il segnale raffigurato nei centri abitati vale soltanto dalle ore 8.00 alle ore 20.00',
      farsiTranslation: 'غلط: سیگنال نشان داده شده در مراکز مسکونی فقط از ساعت 8:00 تا 20:00 معتبر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_27_10',
      italianText: 'Il segnale raffigurato indica che possono passare gli autocarri con carico alto 3,50 metri dal piano del cassone',
      farsiTranslation: 'غلط: ارتفاع از کف زمین محاسبه می‌شود، نه از کف قسمت بارگیر کامیون.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_27_11',
      italianText: 'Il segnale raffigurato indica la distanza di sicurezza da tenere dal veicolo che precede',
      farsiTranslation: 'غلط: علامت نشان داده شده فاصله ایمنی را از خودروی جلویی نشان می دهد',
      correctAnswer: 'Falso'
    },

    // 4.28 Transito vietato ai veicoli o complessi aventi lunghezza superiore a 10 metri
    {
      id: 'q_4_28_1',
      italianText: 'Il segnale raffigurato vieta il transito a tutti i veicoli di lunghezza complessiva superiore a 10 metri',
      farsiTranslation: 'صحیح: ورود هر خودرویی که طول آن از ۱۰ متر بیشتر باشد ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_28_2',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di un autotreno lungo 10 metri',
      farsiTranslation: 'صحیح: در صورت وجود تابلوی به تصویر کشیده شده، تردد کامیون به طول 10 متر مجاز است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_28_3',
      italianText: 'Il segnale raffigurato vieta il transito a veicoli di lunghezza superiore a quella indicata',
      farsiTranslation: 'صحیح: علامت نشان داده شده عبور وسایل نقلیه با طول بیشتر از آن را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_28_4',
      italianText: 'Il segnale raffigurato deve essere rispettato anche dai conducenti di autobus',
      farsiTranslation: 'صحیح: این محدودیت برای همه وسایل نقلیه، از جمله اتوبوس‌های طویل، اعمال می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_28_5',
      italianText: 'Il segnale raffigurato vige anche di notte',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده در شب نیز معتبر است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_28_6',
      italianText: 'Il segnale raffigurato deve essere rispettato anche dai conducenti di complessi di veicoli',
      farsiTranslation: 'صحیح: ماشین‌های متصل‌به‌هم (مثل سواری که کاراوان می‌کشد) باید طول کل مجموعه‌شان را حساب کنند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_28_7',
      italianText: 'Il segnale raffigurato deve essere rispettato solo dai conducenti di veicoli adibiti al trasporto di cose',
      farsiTranslation: 'غلط: علامت نشان داده شده فقط باید توسط رانندگان وسایل نقلیه ای که برای حمل و نقل کالا استفاده می شود احترام بگذارد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_28_8',
      italianText: 'Il segnale raffigurato obbliga un veicolo a distanziare quello che lo segue di almeno 10 metri',
      farsiTranslation: 'غلط: این عدد نشان‌دهنده طول ماشین است، نه فاصله بین ماشین‌ها.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_28_9',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio per autocarri lunghi al massimo 10 metri',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان دهنده یک پارکینگ برای کامیون های تا طول 10 متر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_28_10',
      italianText: 'Il segnale raffigurato impone il distanziamento minimo tra autocarri per consentire alle autovetture di sorpassarli',
      farsiTranslation: 'غلط: علامت نشان داده شده به حداقل فاصله بین کامیون ها نیاز دارد تا خودروها بتوانند از آنها سبقت بگیرند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_28_11',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di una autovettura che traina un caravan anche se insieme superano i 10 metri',
      farsiTranslation: 'غلط: اگر طول ترکیبی سواری و کاراوان از ۱۰ متر بگذرد، عبورشان ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_28_12',
      italianText: 'In presenza del segnale raffigurato è consentito il transito a tutti gli autosnodati per trasporto di persone',
      farsiTranslation: 'غلط: با وجود تابلوی به تصویر کشیده شده، عبور و مرور به تمام اتوبوس های مفصلی برای جابجایی افراد مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_28_13',
      italianText: 'Il segnale raffigurato preannuncia che gli autocarri devono mantenere una distanza di sicurezza di almeno 10 metri',
      farsiTranslation: 'غلط: علامت نشان داده شده اعلام می کند که کامیون ها باید حداقل 10 متر فاصله ایمنی را رعایت کنند',
      correctAnswer: 'Falso'
    },

    // 4.29 Transito vietato ai veicoli aventi massa superiore a 7,00 tonnellate
    {
      id: 'q_4_29_1',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli aventi una massa effettiva superiore a quella indicata',
      farsiTranslation: 'صحیح: ورود ماشینی که در لحظه عبور وزنی بیشتر از ۷ تن داشته باشد، غیرمجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_29_2',
      italianText: 'Il segnale raffigurato, integrato con pannello, può vietare il transito contemporaneo di più veicoli',
      farsiTranslation: 'صحیح: علامت نشان داده شده، یکپارچه با یک پانل، می تواند حمل و نقل همزمان چند وسیله نقلیه را ممنوع کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_29_3',
      italianText: 'Il segnale raffigurato vieta il transito agli autocarri di tara superiore a 7 tonnellate',
      farsiTranslation: 'صحیح: اگر وزن خالی (Tara) کامیون بیشتر از ۷ تن باشد، حتی بدون بار هم نمی‌تواند عبور کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_29_4',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di una macchina agricola di massa a pieno carico pari a 7 tonnellate',
      farsiTranslation: 'صحیح: اگر وزن دقیقاً روی ۷ تن باشد، عبور از این جاده قانونی است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_29_5',
      italianText: 'Il segnale raffigurato si può trovare prima di un ponte',
      farsiTranslation: 'صحیح: علامت نشان داده شده را می توان قبل از یک پل پیدا کرد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_29_6',
      italianText: 'In presenza del segnale raffigurato è consentito il transito ai veicoli il cui asse più caricato ha massa superiore a quella indicata',
      farsiTranslation: 'غلط: در صورت وجود علامت نشان داده شده، ترانزیت به وسایل نقلیه ای مجاز است که بیشترین بار محور آنها دارای جرم بیشتر از آنچه نشان داده شده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_29_7',
      italianText: 'Il segnale raffigurato, nei centri abitati, vige dalle ore 8.00 alle ore 20.00',
      farsiTranslation: 'غلط: سیگنال نشان داده شده در مراکز مسکونی از ساعت 8:00 تا 20:00 فعال است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_29_8',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di autobus di massa superiore a 7 tonnellate',
      farsiTranslation: 'غلط: در صورت وجود تابلوی نمایش داده شده، تردد اتوبوس های با وزن بیش از 7 تن مجاز است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_29_9',
      italianText: 'Il segnale raffigurato vieta il transito ai soli veicoli per trasporto merci di massa superiore a 7 tonnellate',
      farsiTranslation: 'غلط: این ممنوعیت برای تمامی وسایل نقلیه سنگین (حتی اتوبوس‌های مسافری بزرگ) برقرار است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_29_10',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli di lunghezza superiore a 7 metri',
      farsiTranslation: 'غلط: این تابلو نشان‌دهنده وزن (تن) است، نه طول (متر).',
      correctAnswer: 'Falso'
    },

    // 4.30 Transito vietato ai veicoli aventi massa per asse superiore a 2,5 t
    {
      id: 'q_4_30_1',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli aventi sull’asse più caricato una massa effettiva superiore a quella indicata',
      farsiTranslation: 'صحیح: اگر وزن وارد شده بر یکی از محورها (معمولاً محور عقب کامیون‌ها) بیش از ۲.۵ تن باشد، عبور ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_30_2',
      italianText: 'In presenza del segnale raffigurato è consentito il transito di autocarri aventi massa effettiva per asse di 2,5 tonnellate',
      farsiTranslation: 'صحیح: در صورت وجود علامت نشان داده شده، تردد کامیون های با جرم موثر در هر محور 2.5 تن مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_30_3',
      italianText: 'Il segnale raffigurato vieta il transito ai veicoli aventi una massa effettiva per asse superiore a 2,5 tonnellate',
      farsiTranslation: 'صحیح: علامت نشان داده شده عبور وسایل نقلیه با جرم موثر در هر محور بیش از 2.5 تن را ممنوع می کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_30_4',
      italianText: 'Il segnale raffigurato fa riferimento alla massa effettiva sull’asse al momento del transito',
      farsiTranslation: 'صحیح: ملاک، وزن واقعی خودرو در لحظه رد شدن از روی جاده است، نه فقط اعدادی که در سند خودرو نوشته شده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_30_5',
      italianText: 'Il segnale raffigurato può trovarsi prima di un ponte',
      farsiTranslation: 'صحیح: این تابلوها معمولاً برای محافظت از پل‌های ضعیف نصب می‌شوند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_30_6',
      italianText: 'Il segnale raffigurato obbliga i veicoli aventi massa per asse superiore a 2,5 tonnellate a procedere a passo d’uomo',
      farsiTranslation: 'غلط: سیگنال نشان داده شده وسایل نقلیه با جرم محوری بیشتر از 2.5 تن را ملزم می کند تا با سرعت پیاده روی حرکت کنند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_30_7',
      italianText: 'Il segnale raffigurato vieta il transito agli autocarri di massa complessiva superiore a quella indicata',
      farsiTranslation: 'غلط: علامت نشان داده شده عبور کامیون هایی با جرم کل بیشتر از آنچه نشان داده شده است را ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_30_8',
      italianText: 'Il segnale raffigurato vale solo per autoveicoli con ruote gemellate',
      farsiTranslation: 'غلط: این قانون وزن محور برای هر ماشینی صادق است و ربطی به داشتن چرخ‌های جفتی (Gemellate) ندارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_30_9',
      italianText: 'Il segnale raffigurato nei centri abitati vige dalle ore 8.00 alle ore 20.00',
      farsiTranslation: 'غلط: سیگنال نشان داده شده در مراکز مسکونی از ساعت 8:00 تا 20:00 فعال است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_30_10',
      italianText: 'Il segnale raffigurato vieta il transito a tutti i veicoli con massa complessiva a pieno carico superiore a 2,5 tonnellate',
      farsiTranslation: 'غلط: این تابلو وزن "روی هر محور" را محدود می‌کند، نه کل وزن ماشین را.',
      correctAnswer: 'Falso'
    },

    // 4.31 Via libera
    {
      id: 'q_4_31_1',
      italianText: 'Il segnale raffigurato indica la fine delle prescrizioni precedentemente imposte',
      farsiTranslation: 'صحیح: این تابلو (با نوارهای مورب سیاه) پایان تمام محدودیت‌های دستوری قبلی (مثل سبقت ممنوع یا محدودیت سرعت) را اعلام می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_31_2',
      italianText: 'Il segnale raffigurato indica la fine di divieti precedentemente imposti',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده پایان ممنوعیت های قبلی را نشان می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_31_3',
      italianText: 'Il segnale raffigurato è un segnale di via libera',
      farsiTranslation: 'صحیح: این تابلو در زبان ایتالیایی به تابلوی مسیر آزاد (Via libera) معروف است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_31_4',
      italianText: 'Il segnale raffigurato è un segnale di fine prescrizione',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده یک سیگنال پایان نسخه است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_31_5',
      italianText: 'Il segnale raffigurato indica il punto dal quale le prescrizioni precedentemente indicate non sono più valide',
      farsiTranslation: 'صحیح: از محل نصب این تابلو به بعد، دستورات قبلی دیگر اعتباری ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_31_6',
      italianText: 'Il segnale raffigurato indica la fine di un cantiere di lavoro',
      farsiTranslation: 'غلط: پایان کارگاه جاده‌ای با این تابلو مشخص نمی‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_31_7',
      italianText: 'Il segnale raffigurato riguarda soltanto i veicoli in servizio pubblico',
      farsiTranslation: 'غلط: علامت نشان داده شده فقط مربوط به وسایل نقلیه خدمات عمومی است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_31_8',
      italianText: 'Il segnale raffigurato è un segnale di indicazione',
      farsiTranslation: 'غلط: سیگنال نشان داده شده یک سیگنال نشانگر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_31_9',
      italianText: 'Il segnale raffigurato indica la fine di un centro abitato',
      farsiTranslation: 'غلط: پایان منطقه مسکونی شهری با یک تابلوی سفید و قرمز متفاوت نشان داده می‌شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_31_10',
      italianText: 'Il segnale raffigurato indica la fine del pericolo precedentemente segnalato',
      farsiTranslation: 'غلط: سیگنال نشان داده شده پایان خطر گزارش شده قبلی را نشان می دهد',
      correctAnswer: 'Falso'
    },

    // 4.32 Divieto di sosta
    {
      id: 'q_4_32_1',
      italianText: 'Il segnale raffigurato è posto nei luoghi dove la sosta è vietata',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده در مکان هایی که پارک ممنوع است قرار می گیرد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_2',
      italianText: 'Il segnale raffigurato vieta la sosta sulle strade urbane dalle ore 8.00 alle ore 20.00, salvo diversa indicazione',
      farsiTranslation: 'صحیح: در خیابان‌های شهری، اگر تابلوی زمان زیر آن نباشد، پارک کردن از ۸ صبح تا ۸ شب ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_3',
      italianText: 'Il segnale raffigurato può essere integrato da pannelli per indicarne l’inizio, il proseguimento o la fine',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده را می توان با پانل ها ادغام کرد تا شروع، ادامه یا پایان آن را نشان دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_4',
      italianText: 'Il segnale raffigurato cessa di validità dopo il primo incrocio, se non ripetuto',
      farsiTranslation: 'صحیح: اعتبار تابلوی پارک ممنوع با رسیدن به تقاطع بعدی تمام می‌شود، مگر اینکه دوباره تکرار شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_5',
      italianText: 'Il segnale raffigurato consente la fermata',
      farsiTranslation: 'صحیح: توقف کوتاه (Fermata) برای پیاده و سوار کردن مسافر در حضور این تابلو مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_6',
      italianText: 'Il segnale raffigurato consente la sosta nel tratto precedente',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده اجازه توقف در بخش قبل را می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_7',
      italianText: 'Il segnale raffigurato, opportunamente integrato, può vietare la sosta nei centri abitati dalle ore 0,00 alle 24,00',
      farsiTranslation: 'صحیح: علامت نشان داده شده، به طور مناسب یکپارچه، می تواند پارکینگ در مناطق مسکونی را از ساعت 0.00 تا 24.00 ممنوع کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_8',
      italianText: 'Il segnale raffigurato, se posto sul lato sinistro di una strada a senso unico, vieta la sosta anche sul lato destro',
      farsiTranslation: 'غلط: ممنوعیت پارک همواره فقط برای همان طرفی از خیابان است که تابلو در آن قرار دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_9',
      italianText: 'Il segnale raffigurato vieta la sosta sul tratto precedente (FIG 940)',
      farsiTranslation: 'غلط: علامت نشان داده شده پارک کردن در مسیر قبلی را ممنوع می کند (شکل 940)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_10',
      italianText: 'Il segnale raffigurato preannuncia un divieto di fermata',
      farsiTranslation: 'غلط: این تابلو تنها پارک طولانی‌مدت (Sosta) را ممنوع می‌کند، نه توقف موقت (Fermata) را.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_11',
      italianText: 'Il segnale raffigurato non vale per i motocicli ed i ciclomotori',
      farsiTranslation: 'غلط: علامت نشان داده شده برای موتور سیکلت و موتورسیکلت صدق نمی کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_12',
      italianText: 'In presenza del segnale raffigurato è sempre prevista la rimozione forzata del veicolo',
      farsiTranslation: 'غلط: برای حمل با جرثقیل (Rimozione coatta) حتماً باید تابلوی متمم کشیدن ماشین زیر این تابلو وجود داشته باشد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_13',
      italianText: 'Il segnale raffigurato indica che la sosta è regolamentata con l’uso di parchimetri a pagamento',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان می دهد که پارکینگ با استفاده از پارکومتر پولی تنظیم می شود',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_14',
      italianText: 'Il segnale raffigurato consente la sosta ai residenti',
      farsiTranslation: 'غلط: تابلوی نشان داده شده به ساکنین اجازه پارک می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_15',
      italianText: 'Il segnale raffigurato consente la sosta esponendo il tagliando emesso da un parchimetro',
      farsiTranslation: 'غلط: علامت نشان داده شده با نمایش کوپن صادر شده توسط پارکومتر امکان پارک را فراهم می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_16',
      italianText: 'Il segnale raffigurato vieta la sosta, ma non la fermata',
      farsiTranslation: 'صحیح: تکراری؛ پارک ممنوع است، اما توقف موقت مجاز است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_17',
      italianText: 'Il segnale raffigurato contraddistingue le aree dove è proibito lasciare in sosta un veicolo',
      farsiTranslation: 'صحیح: علامت نشان داده شده مناطقی را که ترک خودرو در آن پارک شده ممنوع است متمایز می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_18',
      italianText: 'Il segnale raffigurato, lungo strade extraurbane, indica divieto permanente di sosta in assenza di indicazioni integrative',
      farsiTranslation: 'صحیح: در جاده‌های خارج شهر، این تابلو به صورت ۲۴ ساعته (دائمی) پارک را ممنوع می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_19',
      italianText: 'Il segnale (A), se integrato con pannello (B), indica una zona in cui vige divieto di sosta (FIG 950)',
      farsiTranslation: 'صحیح: علامت (A)، اگر با پانل (B) یکپارچه شده باشد، منطقه ای را نشان می دهد که پارک کردن در آن ممنوع است (شکل 950)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_20',
      italianText: 'Il segnale (A), se integrato con pannello (B), indica una zona in cui vige divieto di sosta, con rimozione del veicolo (FIG 950)',
      farsiTranslation: 'صحیح: علامت (A)، اگر با پانل (B) یکپارچه شده باشد، منطقه ای را نشان می دهد که پارک کردن در آن ممنوع است، با حذف وسیله نقلیه (شکل 950)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_21',
      italianText: 'Il segnale raffigurato vieta la sosta sul lato della strada dove è posto',
      farsiTranslation: 'صحیح: این ممنوعیت فقط برای همان سمتی است که تابلو قرار دارد، نه سمت دیگر خیابان.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_22',
      italianText: 'Il segnale (A) con il pannello (B) vieta la sosta solo nei giorni lavorativi (FIG 947)',
      farsiTranslation: 'صحیح: علامت (A) با پانل (B) پارک کردن را فقط در روزهای کاری ممنوع می کند (شکل 947)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_23',
      italianText: 'Il segnale (A), integrato con il pannello (B), indica una ZONA RIMOZIONE COATTA (FIG 950)',
      farsiTranslation: 'صحیح: علامت (A)، یکپارچه با پانل (B)، یک منطقه حذف اجباری را نشان می دهد (شکل 950)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_24',
      italianText: 'Il segnale raffigurato non vieta la fermata',
      farsiTranslation: 'صحیح: علامت نشان داده شده ممنوعیت توقف ندارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_25',
      italianText: 'Il segnale raffigurato, nelle strade extraurbane, consente la sosta dopo le ore 20.00',
      farsiTranslation: 'غلط: تابلویی که در جاده های خارج شهری نشان داده شده است، امکان پارک بعد از ساعت 8 شب را فراهم می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_26',
      italianText: 'Il segnale raffigurato consente la sosta soltanto ai veicoli a due ruote',
      farsiTranslation: 'غلط: علامت نشان داده شده اجازه پارک فقط برای وسایل نقلیه دو چرخ را می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_27',
      italianText: 'Il segnale raffigurato consente la sosta ai quadricicli a motore',
      farsiTranslation: 'غلط: علامت نشان داده شده به چهار چرخه موتوری اجازه توقف می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_28',
      italianText: 'Il segnale raffigurato, nei centri urbani, prescrive il divieto di sosta dalle ore 20.00 alle ore 8.00, salvo diversa indicazione',
      farsiTranslation: 'غلط: تابلوی نشان داده شده در مراکز شهری ممنوعیت پارک را از ساعت 20:00 تا 8:00 صبح توصیه می کند، مگر اینکه خلاف آن مشخص شده باشد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_29',
      italianText: 'Il segnale raffigurato indica che la sosta è regolamentata mediante disco orario',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان می دهد که پارکینگ توسط یک دیسک پارکینگ تنظیم می شود',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_30',
      italianText: 'Il segnale (A), se integrato con il pannello (B), è divieto di sosta permanente (FIG 949)',
      farsiTranslation: 'غلط: علامت (A)، اگر با پانل (B) یکپارچه شود، ممنوعیت پارک دائمی است (شکل 949)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_31',
      italianText: 'Il segnale raffigurato, opportunamente integrato, può vietare la sosta in doppia fila',
      farsiTranslation: 'غلط: علامت نشان داده شده، به طور مناسب یکپارچه شده است، می تواند پارک کردن در ردیف های دوتایی را ممنوع کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_32',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده یک سیگنال تجویزی است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_33',
      italianText: 'Il segnale raffigurato non è posto nei luoghi ove per regola generale vige il divieto di sosta',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده در مکان هایی که پارک به طور کلی ممنوع است قرار داده نشده است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_34',
      italianText: 'Il segnale raffigurato vieta l’abbandono prolungato nel tempo del veicolo',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده، رها کردن طولانی مدت وسیله نقلیه را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_35',
      italianText: 'Il segnale raffigurato, posto nei centri abitati, vieta, di norma, la sosta dalle ore 8.00 alle 20.00',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده که در مناطق مسکونی قرار داده شده است، به طور کلی پارکینگ را از ساعت 8:00 تا 20:00 ممنوع می کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_36',
      italianText: 'Il segnale (A), integrato con il pannello (B), consente la sosta agli autobus (FIG 948)',
      farsiTranslation: 'صحیح: علامت (A)، یکپارچه با پانل (B)، به اتوبوس ها اجازه توقف می دهد (شکل 948)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_37',
      italianText: 'Il segnale (A), integrato con il pannello (B), vieta la sosta soltanto nei giorni festivi (FIG 946)',
      farsiTranslation: 'صحیح: علامت (A)، یکپارچه با پانل (B)، پارک کردن را فقط در تعطیلات رسمی ممنوع می کند (شکل 946)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_38',
      italianText: 'Il segnale raffigurato vieta la sosta ma non la fermata',
      farsiTranslation: 'صحیح: تابلو نشان داده شده پارک کردن اما توقف نکردن را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_32_39',
      italianText: 'Il segnale raffigurato vieta la sospensione temporanea della marcia per la salita e discesa dei passeggeri',
      farsiTranslation: 'غلط: تابلوی نشان داده شده توقف موقت سفر برای سوار شدن و پیاده شدن مسافران را ممنوع می کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_40',
      italianText: 'Lungo le strade extraurbane, il segnale raffigurato vale soltanto nelle ore diurne',
      farsiTranslation: 'غلط: در امتداد جاده های خارج از شهر، تابلوی نشان داده شده فقط در ساعات روز معتبر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_41',
      italianText: 'Il segnale raffigurato vieta la sosta dei veicoli su ambo i lati della carreggiata',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده پارک خودروها را در دو طرف جاده ممنوع می کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_42',
      italianText: 'Il segnale raffigurato permette la sosta degli autobus',
      farsiTranslation: 'غلط: سیگنال نشان داده شده به اتوبوس ها اجازه توقف می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_32_43',
      italianText: 'Il segnale raffigurato permette la sosta dei ciclomotori',
      farsiTranslation: 'غلط: علامت نشان داده شده به موتور سیکلت اجازه توقف می دهد',
      correctAnswer: 'Falso'
    },

    // 4.33 Regolazione flessibile della sosta in centro abitato
    {
      id: 'q_4_33_1',
      italianText: 'Il segnale raffigurato rappresenta una regolazione della sosta',
      farsiTranslation: 'صحیح: این تابلو تنظیم‌کننده متغیر ساعات پارک ماشین است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_33_2',
      italianText: 'Il segnale raffigurato consente la sosta dalle ore 9.00 alle 17.00',
      farsiTranslation: 'صحیح: در این ساعات تابلو آبی است و نوار قرمز ندارد، بنابراین پارک کردن آزاد است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_33_3',
      italianText: 'Il segnale raffigurato vieta la sosta dalle ore 17.00 alle 20.00',
      farsiTranslation: 'صحیح: در کنار این ساعات، علامت پارک ممنوع قرار دارد، بنابراین پارک مجاز نیست.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_33_4',
      italianText: 'Il segnale raffigurato consente la sosta in alcune ore e la vieta in altre',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده اجازه پارک در برخی ساعات را می دهد و در برخی ساعات آن را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_33_5',
      italianText: 'Il segnale raffigurato consente la sosta dalle ore 20.00 alle ore 7.00',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده اجازه پارک از ساعت 8 بعد از ظهر تا 7 صبح را می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_33_6',
      italianText: 'Il segnale raffigurato vieta la sosta dalle ore 7.00 alle ore 9.00',
      farsiTranslation: 'صحیح: تابلو نشان داده شده پارک کردن از ساعت 7:00 تا 9:00 را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_33_7',
      italianText: 'Il segnale raffigurato, nei centri abitati, consente la sosta dalle ore 20.00 alle 8.00',
      farsiTranslation: 'غلط: تابلوی نشان داده شده، در مناطق مسکونی، امکان پارک از ساعت 20:00 تا 8:00 صبح را فراهم می کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_33_8',
      italianText: 'Il segnale raffigurato indica una zona destinata al parcheggio con impiego del disco orario',
      farsiTranslation: 'غلط: این تابلو نیازی به دیسک ساعت (Disco orario) ندارد؛ فقط کافی است در ساعات مجاز پارک کنید.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_33_9',
      italianText: 'Il segnale raffigurato vieta la fermata del veicolo tra le ore 17.00 e le 20.00',
      farsiTranslation: 'غلط: این تابلو هرگز توقف کوتاه (Fermata) را ممنوع نمی‌کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_33_10',
      italianText: 'Il segnale raffigurato consente il parcheggio dalle ore 7.00 alle 9.00',
      farsiTranslation: 'غلط: علامت نشان داده شده اجازه پارک از ساعت 7:00 تا 9:00 را می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_33_11',
      italianText: 'Nelle ore in cui è vietata la sosta, il segnale raffigurato comporta la rimozione del veicolo',
      farsiTranslation: 'غلط: در ساعاتی که پارک ممنوع است، تابلوی نشان داده شده شامل برداشتن وسیله نقلیه است',
      correctAnswer: 'Falso'
    },

    // 4.34 Sosta consentita a particolari categorie
    {
      id: 'q_4_34_1',
      italianText: 'Il segnale raffigurato consente la sosta ai veicoli al servizio di persone invalide munite dell’apposito contrassegno',
      farsiTranslation: 'صحیح: این تابلو یک استثنا است و به ماشین‌های دارای برچسب معلولین اجازه پارک می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_34_2',
      italianText: 'Il segnale raffigurato è un segnale di prescrizione',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده یک سیگنال تجویزی است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_34_3',
      italianText: 'Il segnale raffigurato rappresenta una specifica eccezione al divieto di sosta',
      farsiTranslation: 'صحیح: این تابلو پارک را برای همه ممنوع کرده و فقط برای یک گروه خاص مستثنی می‌کند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_34_4',
      italianText: 'Il segnale raffigurato non consente la sosta a veicoli diversi da quelli al servizio di persone invalide',
      farsiTranslation: 'صحیح: سایر رانندگان حق پارک در این محل را ندارند.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_34_5',
      italianText: 'Il segnale raffigurato consente la sosta agli scuolabus',
      farsiTranslation: 'غلط: این جایگاه برای اتوبوس مدرسه در نظر گرفته نشده است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_34_6',
      italianText: 'Il segnale raffigurato indica una corsia riservata ai veicoli al servizio di persone invalide',
      farsiTranslation: 'غلط: علامت نشان داده شده خطی را نشان می دهد که برای وسایل نقلیه خدمات رسانی به افراد معلول در نظر گرفته شده است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_34_7',
      italianText: 'Il segnale raffigurato è un divieto di sosta per i veicoli al servizio di invalidi, ed indica il più vicino parcheggio',
      farsiTranslation: 'غلط: تابلوی نشان داده شده ممنوعیت پارک خودروهایی است که به افراد معلول خدمات می دهند و نزدیکترین پارکینگ را نشان می دهد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_34_8',
      italianText: 'Il segnale raffigurato preavvisa una zona vietata al traffico regolare perché attrezzata per persone invalide',
      farsiTranslation: 'غلط: تابلویی که به تصویر کشیده شده هشدار می دهد منطقه ای که تردد منظم آن ممنوع است زیرا برای افراد معلول مجهز شده است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_34_9',
      italianText: 'Il segnale raffigurato, nella strada ove è posto, consente il transito ai soli veicoli al servizio di persone invalide',
      farsiTranslation: 'غلط: تابلوی نشان داده شده در خیابانی که در آن قرار دارد، فقط به وسایل نقلیه ای که به افراد معلول خدمات رسانی می کنند اجازه عبور و مرور می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_34_10',
      italianText: 'Il segnale raffigurato consente la sosta ai ciclomotori e ai motocicli',
      farsiTranslation: 'غلط: تابلوی نشان داده شده به موتور سیکلت ها و موتورسیکلت ها اجازه توقف می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_34_11',
      italianText: 'Il segnale raffigurato consente la sosta esponendo il tagliando emesso da un parchimetro',
      farsiTranslation: 'غلط: پرداخت پول به دستگاه پارکومتر مجوزی برای اشغال کردن جای پارک معلولین به شما نمی‌دهد.',
      correctAnswer: 'Falso'
    },

    // 4.35 Passo carrabile
    {
      id: 'q_4_35_1',
      italianText: 'Il segnale raffigurato vieta la sosta nel luogo dove è posto',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده پارک کردن در محلی که در آن قرار دارد ممنوع است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_35_2',
      italianText: 'Il segnale raffigurato indica la zona per l’accesso dei veicoli alle proprietà laterali',
      farsiTranslation: 'صحیح: علامت نشان داده شده منطقه برای دسترسی وسیله نقلیه به املاک جانبی را نشان می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_35_3',
      italianText: 'Il segnale raffigurato indica lo sbocco di un passo carrabile',
      farsiTranslation: 'صحیح: علامت نشان داده شده خروجی یک راهرو را نشان می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_35_4',
      italianText: 'Il segnale raffigurato consente la fermata, purché il veicolo non sia di intralcio',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده اجازه توقف را می دهد، تا زمانی که وسیله نقلیه در راه نباشد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_35_5',
      italianText: 'Il segnale raffigurato, per essere valido, deve contenere l’indicazione dell’ente che ha concesso l’autorizzazione, il numero e l’anno del rilascio',
      farsiTranslation: 'صحیح: برای معتبر بودن، علامت نشان داده شده باید حاوی نشان ارگانی باشد که مجوز، شماره و سال صدور را صادر کرده است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_35_6',
      italianText: 'Il segnale raffigurato è posto soltanto nelle strade urbane',
      farsiTranslation: 'غلط: تابلوی تصویر شده فقط در خیابان های شهری نصب شده است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_35_7',
      italianText: 'Il segnale raffigurato vale solo nelle ore diurne',
      farsiTranslation: 'غلط: سیگنال نشان داده شده فقط در ساعات روز معتبر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_35_8',
      italianText: 'Il segnale raffigurato vale solo nelle ore notturne',
      farsiTranslation: 'غلط: سیگنال نشان داده شده فقط در شب معتبر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_35_9',
      italianText: 'Il segnale raffigurato consente la sosta a particolari categorie di veicoli',
      farsiTranslation: 'غلط: تابلوی نشان داده شده اجازه پارک برای دسته خاصی از وسایل نقلیه را می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_35_10',
      italianText: 'Il segnale raffigurato consente la sosta ai veicoli adibiti al pronto soccorso non in servizio',
      farsiTranslation: 'غلط: علامت نشان داده شده به خودروهای اورژانسی که در خدمت نیستند اجازه توقف می دهد',
      correctAnswer: 'Falso'
    },

    // 4.36 Divieto di sosta temporaneo (per pulizia meccanica)
    {
      id: 'q_4_36_1',
      italianText: 'Il segnale raffigurato è un segnale di DIVIETO DI SOSTA TEMPORANEO',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده یک تابلوی موقت پارک ممنوع است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_36_2',
      italianText: 'Il segnale raffigurato è posto nei tratti di strada ove vengono effettuate operazioni di pulizia meccanica delle strade',
      farsiTranslation: 'صحیح: این تابلو در مکان‌هایی که ماشین‌های جاروکش شهرداری کار می‌کنند، قرار داده می‌شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_36_3',
      italianText: 'Il segnale raffigurato vieta la sosta nei periodi in cui viene effettuata la pulizia meccanica della strada',
      farsiTranslation: 'صحیح: در روزها و ساعاتی که روی تابلو درج شده، پارک کردن برای فراهم کردن فضای شستشو ممنوع است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_36_4',
      italianText: 'Il segnale raffigurato, nei centri urbani, segnala il divieto di sosta limitato ai giorni e alle ore indicate',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده در مراکز شهری، ممنوعیت پارکینگ محدود به روزها و ساعات مشخص شده را نشان می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_36_5',
      italianText: 'Il segnale raffigurato indica la presenza di macchine sgombraneve al lavoro sulla strada',
      farsiTranslation: 'غلط: تصویر روی تابلو مربوط به نظافت خیابان است، نه برف‌روبی (Sgombraneve).',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_36_6',
      italianText: 'Il segnale raffigurato segnala che nelle ore indicate vige il DIVIETO DI SOSTA per i veicoli rappresentati in figura',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان می دهد که در ساعات مشخص شده ممنوعیت پارک برای خودروهای نشان داده شده در شکل وجود دارد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_36_7',
      italianText: 'Il segnale raffigurato indica che nei giorni e nelle ore indicate è vietata la sosta ai mezzi di pulizia',
      farsiTranslation: 'غلط: دقیقاً برعکس؛ این ماشین‌های مردم هستند که حق پارک ندارند تا ماشین نظافت بتواند کار کند.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_36_8',
      italianText: 'Il segnale raffigurato indica presenza di un deposito con probabile uscita di mezzi per pulizia meccanica delle strade',
      farsiTranslation: 'غلط: تابلو نشان داده شده وجود انباری با خروج احتمالی وسایل نقلیه برای نظافت مکانیکی خیابان ها را نشان می دهد.',
      correctAnswer: 'Falso'
    },

    // 4.37 Divieto di fermata
    {
      id: 'q_4_37_1',
      italianText: 'Il segnale raffigurato vieta la temporanea sospensione della marcia del veicolo',
      farsiTranslation: 'صحیح: تابلوی توقف ممنوع (علامت ضربدر) هرگونه ایستادن کوتاه مدت را در مسیر ممنوع می‌سازد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_37_2',
      italianText: 'Il segnale raffigurato vieta la fermata volontaria di tutti i veicoli',
      farsiTranslation: 'صحیح: هیچ خودرویی حق ندارد به میل خودش در این منطقه توقف کند (البته ایست به خاطر چراغ قرمز یا ترافیک حساب نمی‌شود).',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_37_3',
      italianText: 'Lungo le strade dove è posto, il segnale raffigurato vale 24 ore su 24',
      farsiTranslation: 'صحیح: تابلوی توقف ممنوع همیشه و به طور شبانه‌روزی اعتبار دارد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_37_4',
      italianText: 'Il segnale raffigurato vieta la sosta, ma consente la fermata',
      farsiTranslation: 'غلط: تابلویی که فقط یک خط مورب دارد (پارک ممنوع) اجازه توقف کوتاه را می‌دهد، اما این تابلو با دو خط متقاطع هر دو را ممنوع می‌سازد.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_37_5',
      italianText: 'Lungo le strade urbane, il segnale raffigurato indica che il divieto di fermata vige dalle ore 8.00 alle 20.00',
      farsiTranslation: 'غلط: در کنار جاده های شهری، تابلو نشان داده شده نشان می دهد که ممنوعیت توقف از ساعت 8:00 تا 20:00 اعمال می شود.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_37_6',
      italianText: 'Il segnale raffigurato consente la fermata per far salire o scendere passeggeri',
      farsiTranslation: 'غلط: توقف برای پیاده و سوار کردن مسافر نیز در این منطقه اکیداً ممنوع است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_37_7',
      italianText: 'Il segnale raffigurato consente la fermata se il veicolo non arreca intralcio alla circolazione',
      farsiTranslation: 'غلط: سیگنال نشان داده شده اجازه می دهد تا در صورتی که وسیله نقلیه مانع از ترافیک نشود، توقف کنید',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_37_8',
      italianText: 'Il segnale raffigurato vieta la sosta sia di giorno che di notte, anche nei centri abitati',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده، پارک کردن را هم در روز و هم در شب، حتی در مناطق مسکونی ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_37_9',
      italianText: 'Il segnale raffigurato vieta la fermata a tutti i veicoli',
      farsiTranslation: 'صحیح: تابلوی به تصویر کشیده شده توقف تمام وسایل نقلیه را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_37_10',
      italianText: 'Il segnale raffigurato, in assenza di iscrizioni integrative, vige per tutto l’arco delle ventiquattro ore',
      farsiTranslation: 'صحیح: سیگنال نشان داده شده، در صورت عدم وجود کتیبه های اضافی، برای کل دوره بیست و چهار ساعته معتبر است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_37_11',
      italianText: 'Il segnale raffigurato vieta qualsiasi volontaria fermata del veicolo',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده هرگونه توقف داوطلبانه وسیله نقلیه را ممنوع می کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_37_12',
      italianText: 'In presenza del segnale raffigurato è sempre disposta la rimozione forzata del veicolo',
      farsiTranslation: 'صحیح: از آنجایی که حتی توقف کوتاه در اینجا باعث ایجاد مزاحمت شدید می‌شود، ماشینی که پارک کند فوراً با جرثقیل برده خواهد شد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_37_13',
      italianText: 'Il segnale (A), se integrato con il pannello (B), vieta la fermata nel tratto precedente (FIG 955)',
      farsiTranslation: 'صحیح: علامت (A)، اگر با پانل (B) یکپارچه شود، توقف را در بخش قبلی ممنوع می کند (شکل 955)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_37_14',
      italianText: 'Il segnale (A), se integrato con il pannello (B), indica la fine del divieto di fermata e di sosta (FIG 955)',
      farsiTranslation: 'صحیح: علامت (A)، اگر با پانل (B) یکپارچه شود، پایان توقف و توقف پارک را نشان می دهد (شکل 955)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_37_15',
      italianText: 'Il segnale raffigurato vieta la fermata, ma consente la sosta',
      farsiTranslation: 'غلط: تابلوی نشان داده شده توقف را ممنوع می کند، اما اجازه پارک را می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_37_16',
      italianText: 'Il segnale raffigurato non vale per gli autobus',
      farsiTranslation: 'غلط: علامت نشان داده شده برای اتوبوس ها صدق نمی کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_37_17',
      italianText: 'Il segnale raffigurato non vale per i taxi',
      farsiTranslation: 'غلط: علامت نشان داده شده برای تاکسی ها صدق نمی کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_37_18',
      italianText: 'Il segnale raffigurato è un preavviso di divieto di sosta',
      farsiTranslation: 'غلط: تابلوی نشان داده شده هشدار پارک ممنوع است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_37_19',
      italianText: 'Il segnale raffigurato vale solo nei giorni feriali, salvo diversa indicazione',
      farsiTranslation: 'غلط: سیگنال نشان داده شده فقط در روزهای هفته معتبر است، مگر اینکه خلاف آن مشخص شده باشد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_37_20',
      italianText: 'Il segnale raffigurato consente la fermata del veicolo per la salita e la discesa dei passeggeri',
      farsiTranslation: 'غلط: سیگنال نشان داده شده اجازه می دهد تا وسیله نقلیه متوقف شود تا مسافران سوار و پیاده شوند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_37_21',
      italianText: 'Il segnale raffigurato preannuncia la fine del divieto di sosta',
      farsiTranslation: 'غلط: تابلوی به تصویر کشیده شده پایان ممنوعیت پارک را اعلام می کند',
      correctAnswer: 'Falso'
    },

    // 4.38 Parcheggio
    {
      id: 'q_4_38_1',
      italianText: 'Il segnale raffigurato indica un parcheggio autorizzato',
      farsiTranslation: 'صحیح: این نشانگر فضای رسمی برای پارک کردن است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_38_2',
      italianText: 'Il segnale raffigurato indica un’area attrezzata ed organizzata per sostare a tempo indeterminato, salvo diversa indicazione',
      farsiTranslation: 'صحیح: این تابلو محل پارکینگی را نشان می‌دهد که می‌توانید به صورت نامحدود در آن پارک کنید (مگر تابلوی متمم دیگری باشد).',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_38_3',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio e può essere integrato con un pannello che ne indica la distanza',
      farsiTranslation: 'صحیح: علامت نشان داده شده یک منطقه پارکینگ را نشان می دهد و می تواند با تابلویی که فاصله را نشان می دهد ادغام شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_38_4',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio e può essere integrato con un pannello che indica le categorie cui la stessa è riservata',
      farsiTranslation: 'صحیح: مثلاً ممکن است با تابلویی همراه شود که بگوید این پارکینگ فقط مخصوص موتورها یا ماشین‌های پلیس است.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_38_5',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio e può essere integrato con pannello che indica le categorie di veicoli esclusi',
      farsiTranslation: 'صحیح: علامت نشان داده شده یک منطقه پارکینگ را نشان می دهد و می تواند با تابلویی که دسته بندی وسایل نقلیه حذف شده را نشان می دهد ادغام شود.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_38_6',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio e può essere integrato con un pannello che ne indica la limitazione nel tempo',
      farsiTranslation: 'صحیح: علامت نشان داده شده یک منطقه پارکینگ را نشان می دهد و می تواند با تابلویی که محدودیت زمانی آن را نشان می دهد ادغام شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_38_7',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio e può essere integrato con un pannello che indica l’orario e le tariffe',
      farsiTranslation: 'صحیح: علامت نشان داده شده یک منطقه پارکینگ را نشان می دهد و می تواند با تابلویی که زمان و نرخ را نشان می دهد یکپارچه شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_38_8',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio e può essere integrato con un pannello indicante la disposizione dei veicoli',
      farsiTranslation: 'صحیح: علامت نشان داده شده یک منطقه پارکینگ را نشان می دهد و می تواند با تابلویی که موقعیت وسایل نقلیه را نشان می دهد ادغام شود',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_38_9',
      italianText: 'Il segnale raffigurato indica un’area di sosta con parchimetro',
      farsiTranslation: 'غلط: این تابلو به خودی خود نشان نمی‌دهد که پارکینگ پولی (دارای پارکومتر) است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_38_10',
      italianText: 'Il segnale raffigurato indica che il parcheggio è ammesso dalle 8.00 alle 20.00',
      farsiTranslation: 'غلط: علامت نشان داده شده نشان می دهد که پارکینگ از ساعت 8:00 تا 20:00 مجاز است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_38_11',
      italianText: 'Il segnale raffigurato indica un’area in cui è possibile la sosta al massimo per un’ora',
      farsiTranslation: 'غلط: علامت نشان داده شده منطقه ای را نشان می دهد که در آن پارکینگ حداکثر به مدت یک ساعت امکان پذیر است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_38_12',
      italianText: 'Il segnale raffigurato indica la sosta libera, ma con divieto di fermata',
      farsiTranslation: 'غلط: وقتی شما حق دارید ماشین را طولانی‌مدت پارک کنید، قطعاً توقف کوتاه (Fermata) هم برایتان آزاد است.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_38_13',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio riservato ai veicoli della Polizia di Stato',
      farsiTranslation: 'غلط: علامت نشان داده شده یک منطقه پارکینگ اختصاص داده شده برای وسایل نقلیه پلیس ایالتی را نشان می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_38_14',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio e può essere integrato con un pannello che indica la superficie disponibile',
      farsiTranslation: 'غلط: علامت نشان داده شده یک منطقه پارکینگ را نشان می دهد و می تواند با تابلویی که سطح موجود را نشان می دهد یکپارچه شود',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_38_15',
      italianText: 'Il segnale raffigurato indica un’area di parcheggio e può essere integrato con la prescrizione di lasciare la chiave nel quadro',
      farsiTranslation: 'غلط: علامت نشان داده شده یک منطقه پارکینگ را نشان می دهد و می تواند با دستورالعمل باقی گذاشتن کلید در احتراق یکپارچه شود.',
      correctAnswer: 'Falso'
    },

    // 4.39 Preavviso di parcheggio
    {
      id: 'q_4_39_1',
      italianText: 'Il segnale raffigurato preannuncia che nella direzione della freccia vi è un parcheggio',
      farsiTranslation: 'صحیح: این تابلو راهنما است و مسیر رسیدن به محوطه پارک را نشان می‌دهد.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_39_2',
      italianText: 'Il segnale raffigurato preannuncia una zona di parcheggio procedendo nel senso della freccia',
      farsiTranslation: 'صحیح: با حرکت در مسیر فلش، به یک پارکینگ خواهید رسید.',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_39_3',
      italianText: 'Il segnale raffigurato preannuncia un parcheggio a 300 metri nel senso della freccia',
      farsiTranslation: 'صحیح: تابلوی نشان داده شده از پارک خودرو در 300 متری جهت پیکان خبر می دهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_4_39_4',
      italianText: 'Il segnale raffigurato preannuncia un posto di pronto soccorso nel senso della freccia',
      farsiTranslation: 'غلط: علامت P برای پارکینگ است، نه اورژانس (Pronto soccorso).',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_39_5',
      italianText: 'Il segnale raffigurato preannuncia un parcheggio vietato nel senso della freccia',
      farsiTranslation: 'غلط: علامت نشان داده شده در مورد پارک ممنوع در جهت فلش هشدار می دهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_39_6',
      italianText: 'Il segnale raffigurato preannuncia che la sosta e il parcheggio sono vietati nel senso della freccia',
      farsiTranslation: 'غلط: این تابلوی پیش‌آگاهی پارکینگ است و نشان‌دهنده ممنوعیت توقف یا پارک نیست.',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_4_39_7',
      italianText: 'Il segnale raffigurato preannuncia di procedere oltre perché il parcheggio è riservato',
      farsiTranslation: 'غلط: علامت نشان داده شده به شما هشدار می دهد که ادامه دهید زیرا پارکینگ رزرو شده است',
      correctAnswer: 'Falso'
    }
  ]
};
