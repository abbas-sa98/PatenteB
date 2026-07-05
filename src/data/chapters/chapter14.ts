import { Chapter } from '../../types';

export const chapter14: Chapter = {
  id: 14,
  title: 'Norme sulla Precedenza negli Incroci',
  farsiTitle: 'قوانین حق تقدم در تقاطع‌ها',
  lessons: [
    {
      id: 'topic_14_1',
      title: '14.1 Norme sulla precedenza',
      italianText: `La regola generale della precedenza e dare strada a chi arriva da destra. Bisogna dare precedenza a destra e a sinistra con STOP o Dare Precedenza, ai veicoli su rotaie, ai mezzi in emergenza, quando si esce da luoghi privati, in retromarcia o facendo inversione.`,
      farsiTranslation: `قانون کلی حق تقدم این است که به کسی که از راست می آید راه بدهیم. با تابلوی ایست یا حق تقدم، به وسایل روی ریل، وسایل امدادی، هنگام خروج از محل خصوصی، عقب رفتن یا دور زدن باید از راست و چپ حق تقدم داد.`,
      vocabularyIds: [
        'precedenza_destra', 'stop', 'dare_precedenza', 'veicoli_rotaie', 'veicoli_emergenza', 'luoghi_privati', 'retromarcia', 'inversione_marcia'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_14_1_${i + 1}`)
    },
    {
      id: 'topic_14_2',
      title: '14.2 Ordine di precedenza nell’intersezione n. 604',
      italianText: `Nell'intersezione 604 l'ordine corretto e R, D, A. Il veicolo R passa per primo; dopo passa D e infine A.`,
      farsiTranslation: `در تقاطع 604 ترتیب درست عبور R، سپس D و بعد A است. وسیله R اول عبور می کند و A آخرین وسیله است.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 5 }, (_, i) => `q_14_2_${i + 1}`)
    },
    {
      id: 'topic_14_3',
      title: '14.3 Ordine di precedenza nell’intersezione n. 606',
      italianText: `Nell'intersezione 606 l'ordine corretto e E, C, M. Il veicolo E passa per primo, C passa dopo E e M conclude il passaggio.`,
      farsiTranslation: `در تقاطع 606 ترتیب درست عبور E، سپس C و بعد M است. وسیله E اول می رود و M آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_14_3_${i + 1}`)
    },
    {
      id: 'topic_14_4',
      title: '14.4 Ordine di precedenza nell’intersezione n. 607',
      italianText: `Nell'intersezione 607 l'ordine corretto e T, P, M. Il veicolo T ha il primo passaggio, P segue e M passa per ultimo.`,
      farsiTranslation: `در تقاطع 607 ترتیب درست T، سپس P و بعد M است. وسیله T اول عبور می کند و M آخر است.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_14_4_${i + 1}`)
    },
    {
      id: 'topic_14_5',
      title: '14.5 Ordine di precedenza nell’intersezione n. 608',
      italianText: `Nell'intersezione 608 l'ordine corretto e B, H, C. B non deve dare precedenza agli altri due, H passa secondo e C deve dare precedenza a H e passare per ultimo.`,
      farsiTranslation: `در تقاطع 608 ترتیب درست B، سپس H و بعد C است. B به دو وسیله دیگر حق تقدم نمی دهد، H دوم است و C آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_14_5_${i + 1}`)
    },
    {
      id: 'topic_14_6',
      title: '14.6 Ordine di precedenza nell’intersezione n. 610',
      italianText: `Nell'intersezione 610 il veicolo T passa per primo. Dopo T possono passare L e A, poi C passa alla fine.`,
      farsiTranslation: `در تقاطع 610 وسیله T اول عبور می کند. بعد از T وسایل L و A عبور می کنند و در پایان C می رود.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 2 }, (_, i) => `q_14_6_${i + 1}`)
    },
    {
      id: 'topic_14_7',
      title: '14.7 Ordine di precedenza nell’intersezione n. 613',
      italianText: `Nell'intersezione 613 l'ordine corretto e T, O, A. O deve attendere T, mentre A deve attendere O.`,
      farsiTranslation: `در تقاطع 613 ترتیب درست T، سپس O و بعد A است. O باید منتظر T بماند و A باید منتظر O بماند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_14_7_${i + 1}`)
    },
    {
      id: 'topic_14_8',
      title: '14.8 Ordine di precedenza nell’intersezione n. 614',
      italianText: `Nell'intersezione 614 l'ordine corretto e R, A, T. R passa per primo, A passa dopo R e T deve attendere entrambi.`,
      farsiTranslation: `در تقاطع 614 ترتیب درست R، سپس A و بعد T است. R اول می رود، A بعد از R و T باید منتظر هر دو بماند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_14_8_${i + 1}`)
    },
    {
      id: 'topic_14_9',
      title: '14.9 Ordine di precedenza nell’intersezione n. 615',
      italianText: `Nell'intersezione 615 l'ordine normale e R, A, C. R passa per primo, A passa prima di C e C deve passare per ultimo; se A e un veicolo di polizia con allarme attivo, A passa per primo.`,
      farsiTranslation: `در تقاطع 615 ترتیب معمول R، سپس A و بعد C است. R اول است، A قبل از C می رود و C آخر است؛ اگر A خودروی پلیس با آژیر فعال باشد، A اول عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_14_9_${i + 1}`)
    },
    {
      id: 'topic_14_10',
      title: '14.10 Ordine di precedenza nell’intersezione n. 616',
      italianText: `Nell'intersezione 616 l'ordine corretto e B, T, S. B passa per primo, T passa dopo B e S passa per ultimo.`,
      farsiTranslation: `در تقاطع 616 ترتیب درست B، سپس T و بعد S است. B اول می رود و S آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_14_10_${i + 1}`)
    },
    {
      id: 'topic_14_11',
      title: '14.11 Ordine di precedenza nell’intersezione n. 617 (rispetto al veicolo N)',
      italianText: `Nell'intersezione 617, per il veicolo N, N deve portarsi al centro e poi attendere R e A. N da precedenza ad A, ha precedenza rispetto a R, ma conclude la svolta per ultimo dopo R e A.`,
      farsiTranslation: `در تقاطع 617 برای وسیله N، N باید تا مرکز تقاطع برود و بعد منتظر R و A بماند. N به A حق تقدم می دهد، نسبت به R حق تقدم دارد، اما پیچیدن را بعد از R و A تمام می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_14_11_${i + 1}`)
    },
    {
      id: 'topic_14_12',
      title: '14.12 Ordine di precedenza nell’intersezione n. 617 (rispetto al veicolo R)',
      italianText: `Nell'intersezione 617, per il veicolo R, R deve dare precedenza a N ma passa prima di A. R attraversa dopo che N si e fermato al centro e conclude per primo.`,
      farsiTranslation: `در تقاطع 617 برای وسیله R، R باید به N حق تقدم بدهد اما قبل از A عبور می کند. R بعد از توقف N در مرکز تقاطع عبور می کند و عبورش را اول تمام می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_14_12_${i + 1}`)
    },
    {
      id: 'topic_14_13',
      title: '14.13 Ordine di precedenza nell’intersezione n. 618',
      italianText: `Nell'intersezione 618 l'ordine corretto e L, C, H. L attraversa per primo, C passa dopo L e prima di H, H passa per ultimo.`,
      farsiTranslation: `در تقاطع 618 ترتیب درست L، سپس C و بعد H است. L اول عبور می کند، C بعد از L و قبل از H می رود و H آخر است.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_14_13_${i + 1}`)
    },
    {
      id: 'topic_14_14',
      title: '14.14 Ordine di precedenza nell’intersezione n. 620',
      italianText: `Nell'intersezione 620 l'ordine corretto e P, B, C. P passa per primo, B attende P e C passa dopo B.`,
      farsiTranslation: `در تقاطع 620 ترتیب درست P، سپس B و بعد C است. P اول می رود، B منتظر P می ماند و C بعد از B عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_14_14_${i + 1}`)
    },
    {
      id: 'topic_14_15',
      title: '14.15 Ordine di precedenza nell’intersezione n. 631',
      italianText: `Nell'intersezione 631 l'ordine corretto e R, D, F. D passa prima di F, ma dopo R.`,
      farsiTranslation: `در تقاطع 631 ترتیب درست R، سپس D و بعد F است. D قبل از F اما بعد از R عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 4 }, (_, i) => `q_14_15_${i + 1}`)
    },
    {
      id: 'topic_14_16',
      title: '14.16 Ordine di precedenza nell’intersezione n. 632',
      italianText: `Nell'intersezione 632 l'ordine corretto e D, P, B, N. D passa prima di tutti, P passa prima di B, B passa prima di N e N passa per ultimo.`,
      farsiTranslation: `در تقاطع 632 ترتیب درست D، سپس P، بعد B و در پایان N است. D اول است و N آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 13 }, (_, i) => `q_14_16_${i + 1}`)
    },
    {
      id: 'topic_14_17',
      title: '14.17 Ordine di precedenza nell’intersezione n. 633',
      italianText: `Nell'intersezione 633 l'ordine corretto e N, A, R. A e R devono fermarsi se necessario; A puo passare prima di R ma dopo N.`,
      farsiTranslation: `در تقاطع 633 ترتیب درست N، سپس A و بعد R است. A و R اگر لازم باشد باید توقف کنند؛ A قبل از R ولی بعد از N می رود.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 5 }, (_, i) => `q_14_17_${i + 1}`)
    },
    {
      id: 'topic_14_18',
      title: '14.18 Ordine di precedenza nell’intersezione n. 634',
      italianText: `Nell'intersezione 634 l'ordine corretto e A, C, L. A passa per primo, C da precedenza ad A e L passa per ultimo.`,
      farsiTranslation: `در تقاطع 634 ترتیب درست A، سپس C و بعد L است. A اول می رود، C به A حق تقدم می دهد و L آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_14_18_${i + 1}`)
    },
    {
      id: 'topic_14_19',
      title: '14.19 Ordine di precedenza nell’intersezione n. 636',
      italianText: `Nell'intersezione 636 l'ordine corretto e T, A, S. T passa per primo, A subito dopo T e S attende T e A.`,
      farsiTranslation: `در تقاطع 636 ترتیب درست T، سپس A و بعد S است. T اول عبور می کند، A بلافاصله بعد از T و S منتظر هر دو می ماند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_14_19_${i + 1}`)
    },
    {
      id: 'topic_14_20',
      title: '14.20 Ordine di precedenza nell’intersezione n. 637',
      italianText: `Nell'intersezione 637 l'ordine inizia con L. Dopo L possono passare C e A insieme; D passa per ultimo e deve dare precedenza ad A.`,
      farsiTranslation: `در تقاطع 637 اول L عبور می کند. بعد از L، وسایل C و A می توانند با هم عبور کنند؛ D آخر است و باید به A حق تقدم بدهد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_14_20_${i + 1}`)
    },
    {
      id: 'topic_14_21',
      title: '14.21 Ordine di precedenza nell’intersezione n. 637 (rispetto al veicolo A)',
      italianText: `Nell'intersezione 637, per il veicolo A, A deve dare precedenza a L. Dopo L, A puo attraversare insieme a C e ha precedenza rispetto a D.`,
      farsiTranslation: `در تقاطع 637 برای وسیله A، A باید به L حق تقدم بدهد. بعد از L، A می تواند همراه C عبور کند و نسبت به D حق تقدم دارد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 5 }, (_, i) => `q_14_21_${i + 1}`)
    },
    {
      id: 'topic_14_22',
      title: '14.22 Ordine di precedenza nell’intersezione n. 638',
      italianText: `Nell'intersezione 638 B entra e si ferma al centro; poi passa R. Dopo R passano D e N insieme, e B conclude la svolta dopo N.`,
      farsiTranslation: `در تقاطع 638، B وارد می شود و در مرکز می ایستد؛ سپس R عبور می کند. بعد از R وسایل D و N با هم می روند و B بعد از N پیچیدن را تمام می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_14_22_${i + 1}`)
    },
    {
      id: 'topic_14_23',
      title: '14.23 Ordine di precedenza nell’intersezione n. 638 (rispetto al veicolo B)',
      italianText: `Nell'intersezione 638, per il veicolo B, B deve dare precedenza a N. B impegna l'incrocio prima di R, si ferma al centro e conclude la svolta dopo il passaggio di N.`,
      farsiTranslation: `در تقاطع 638 برای وسیله B، B باید به N حق تقدم بدهد. B قبل از R وارد تقاطع می شود، در مرکز می ایستد و بعد از عبور N پیچیدن را تمام می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_14_23_${i + 1}`)
    },
    {
      id: 'topic_14_24',
      title: '14.24 Ordine di precedenza nell’intersezione n. 639',
      italianText: `Nell'intersezione 639 l'ordine corretto e T e B insieme, poi A, poi C. A da precedenza al tram e a B, ma passa prima di C.`,
      farsiTranslation: `در تقاطع 639 ترتیب درست این است: T و B با هم، بعد A و بعد C. A به ترام و B حق تقدم می دهد اما قبل از C عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_14_24_${i + 1}`)
    },
    {
      id: 'topic_14_25',
      title: '14.25 Ordine di precedenza nell’intersezione n. 640',
      italianText: `Nell'intersezione 640 R passa senza dare precedenza ad altri veicoli. Dopo R passa D; B passa dopo R e D, quindi dopo tutti gli altri veicoli.`,
      farsiTranslation: `در تقاطع 640، R بدون دادن حق تقدم به وسیله دیگر عبور می کند. بعد از R، وسیله D می رود؛ B بعد از R و D، یعنی بعد از همه، عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_14_25_${i + 1}`)
    },
    {
      id: 'topic_14_26',
      title: '14.26 Ordine di precedenza nell’intersezione n. 642',
      italianText: `Nell'intersezione 642 il tram passa per primo. O deve attendere il tram e che A si porti al centro; M deve attendere il passaggio di O.`,
      farsiTranslation: `در تقاطع 642 ترام اول عبور می کند. O باید منتظر ترام و قرار گرفتن A در مرکز بماند؛ M باید منتظر عبور O باشد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_14_26_${i + 1}`)
    },
    {
      id: 'topic_14_27',
      title: '14.27 Ordine di precedenza nell’intersezione n. 643',
      italianText: `Nell'intersezione 643 l'ordine corretto e H, D, B, L. H passa per primo, D da precedenza a H, B passa prima di L e L passa per ultimo.`,
      farsiTranslation: `در تقاطع 643 ترتیب درست H، سپس D، بعد B و در پایان L است. H اول می رود و L آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 13 }, (_, i) => `q_14_27_${i + 1}`)
    },
    {
      id: 'topic_14_28',
      title: '14.28 Ordine di precedenza nell’intersezione n. 644',
      italianText: `Nell'intersezione 644 l'ordine corretto e P, D, B, L. P passa per primo, D attende P, B attende P e D, L da precedenza a B.`,
      farsiTranslation: `در تقاطع 644 ترتیب درست P، سپس D، بعد B و در پایان L است. P اول می رود، D منتظر P است، B منتظر P و D است و L به B حق تقدم می دهد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 9 }, (_, i) => `q_14_28_${i + 1}`)
    },
    {
      id: 'topic_14_29',
      title: '14.29 Ordine di precedenza nell’intersezione n. 646',
      italianText: `Nell'intersezione 646 l'ordine corretto e D, C, A, H. D entra per primo e ha precedenza su C; A ha la destra occupata e H passa per ultimo.`,
      farsiTranslation: `در تقاطع 646 ترتیب درست D، سپس C، بعد A و در پایان H است. D اول وارد می شود و نسبت به C حق تقدم دارد؛ A سمت راستش اشغال است و H آخر می رود.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_14_29_${i + 1}`)
    },
    {
      id: 'topic_14_30',
      title: '14.30 Ordine di precedenza nell’intersezione n. 647',
      italianText: `Nell'intersezione 647 l'ordine corretto e L e H insieme, poi B, poi O. B passa dopo L e H ma prima di O; O da precedenza a tutti.`,
      farsiTranslation: `در تقاطع 647 ترتیب درست L و H با هم، سپس B و بعد O است. B بعد از L و H ولی قبل از O عبور می کند؛ O به همه حق تقدم می دهد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_14_30_${i + 1}`)
    },
    {
      id: 'topic_14_31',
      title: '14.31 Ordine di precedenza nell’intersezione n. 648',
      italianText: `Nell'intersezione 648 l'ordine corretto e T, G, P, B. T passa per primo, G dopo T, P dopo T e G, e B da precedenza a tutti passando per ultimo.`,
      farsiTranslation: `در تقاطع 648 ترتیب درست T، سپس G، بعد P و در پایان B است. T اول می رود، P بعد از T و G عبور می کند و B به همه حق تقدم می دهد و آخر است.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_14_31_${i + 1}`)
    },
    {
      id: 'topic_14_32',
      title: '14.32 Ordine di precedenza nell’intersezione n. 648 (rispetto al veicolo P)',
      italianText: `Nell'intersezione 648, per il veicolo P, P deve dare precedenza a T e G. P passa dopo il tram e G, ma prima di B.`,
      farsiTranslation: `در تقاطع 648 برای وسیله P، P باید به T و G حق تقدم بدهد. P بعد از ترام و G، اما قبل از B عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_14_32_${i + 1}`)
    },
    {
      id: 'topic_14_33',
      title: '14.33 Ordine di precedenza nell’intersezione n. 650',
      italianText: `Nell'intersezione 650 l'ordine corretto e L, E, N, R. E attende L, N attende E e R attende E e N.`,
      farsiTranslation: `در تقاطع 650 ترتیب درست L، سپس E، بعد N و در پایان R است. E منتظر L، N منتظر E و R منتظر E و N می ماند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_14_33_${i + 1}`)
    },
    {
      id: 'topic_14_34',
      title: '14.34 Ordine di precedenza nell’intersezione n. 650 (rispetto al veicolo E)',
      italianText: `Nell'intersezione 650, per il veicolo E, E deve dare precedenza a L, cioe al veicolo proveniente da destra. E passa dopo L e prima dell'autocarro N; non deve dare precedenza al filobus.`,
      farsiTranslation: `در تقاطع 650 برای وسیله E، E باید به L، یعنی وسیله ای که از راست می آید، حق تقدم بدهد. E بعد از L و قبل از کامیون N عبور می کند و به اتوبوس برقی حق تقدم نمی دهد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_14_34_${i + 1}`)
    },
    {
      id: 'topic_14_35',
      title: '14.35 Ordine di precedenza nell’intersezione n. 651 (rispetto al veicolo D)',
      italianText: `Nell'intersezione 651, per il veicolo D, D passa per primo. D non deve dare precedenza ad alcun veicolo, nemmeno al veicolo A.`,
      farsiTranslation: `در تقاطع 651 برای وسیله D، D اول عبور می کند. D به هیچ وسیله ای، حتی A، حق تقدم نمی دهد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_14_35_${i + 1}`)
    },
    {
      id: 'topic_14_36',
      title: '14.36 Ordine di precedenza nell’intersezione n. 651 (rispetto al veicolo A)',
      italianText: `Nell'intersezione 651, per il veicolo A, A passa per ultimo. Prima di entrare deve attendere, nell'ordine, D, E e S.`,
      farsiTranslation: `در تقاطع 651 برای وسیله A، A آخر عبور می کند. قبل از ورود باید به ترتیب منتظر D، E و S بماند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 7 }, (_, i) => `q_14_36_${i + 1}`)
    },
    {
      id: 'topic_14_37',
      title: '14.37 Ordine di precedenza nell’intersezione n. 652',
      italianText: `Nell'intersezione 652 l'ordine corretto e H, A, F, L. H passa per primo; A attende H, F attende A e L attende A e F passando per ultimo.`,
      farsiTranslation: `در تقاطع 652 ترتیب درست H، سپس A، بعد F و در پایان L است. H اول می رود و L آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_14_37_${i + 1}`)
    },
    {
      id: 'topic_14_38',
      title: '14.38 Ordine di precedenza nell’intersezione n. 654',
      italianText: `Nell'intersezione 654 l'ordine corretto e C, R, A, H. C passa per primo, R attende C, A attende C e R, H attende tutti e passa per ultimo.`,
      farsiTranslation: `در تقاطع 654 ترتیب درست C، سپس R، بعد A و در پایان H است. C اول می رود، R منتظر C است، A منتظر C و R است و H آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_14_38_${i + 1}`)
    },
    {
      id: 'topic_14_39',
      title: '14.39 Ordine di precedenza nell’intersezione n. 655',
      italianText: `Nell'intersezione 655 l'ordine corretto e S, A, E, R. S passa prima di tutti, A da precedenza a S e R passa per ultimo.`,
      farsiTranslation: `در تقاطع 655 ترتیب درست S، سپس A، بعد E و در پایان R است. S قبل از همه می رود، A به S حق تقدم می دهد و R آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_14_39_${i + 1}`)
    },
    {
      id: 'topic_14_40',
      title: '14.40 Ordine di precedenza nell’intersezione n. 657',
      italianText: `Nell'intersezione 657 l'ordine corretto e R, A, C. R non deve dare precedenza ad alcun veicolo, A passa dopo R e C da precedenza ad A.`,
      farsiTranslation: `در تقاطع 657 ترتیب درست R، سپس A و بعد C است. R به هیچ وسیله ای حق تقدم نمی دهد، A بعد از R می رود و C به A حق تقدم می دهد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_14_40_${i + 1}`)
    },
    {
      id: 'topic_14_41',
      title: '14.41 Ordine di precedenza nell’intersezione n. 659',
      italianText: `Nell'intersezione 659 l'ordine corretto e R, A, C. R non deve dare precedenza, A passa dopo R e prima di C, C passa dopo A.`,
      farsiTranslation: `در تقاطع 659 ترتیب درست R، سپس A و بعد C است. R حق تقدم نمی دهد، A بعد از R و قبل از C می رود و C بعد از A عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_14_41_${i + 1}`)
    },
    {
      id: 'topic_14_42',
      title: '14.42 Ordine di precedenza nell’intersezione n. 660',
      italianText: `Nell'intersezione 660 l'ordine corretto e H, D, B. H non deve dare precedenza, D da precedenza a H e B passa per ultimo.`,
      farsiTranslation: `در تقاطع 660 ترتیب درست H، سپس D و بعد B است. H حق تقدم نمی دهد، D به H حق تقدم می دهد و B آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_14_42_${i + 1}`)
    },
    {
      id: 'topic_14_43',
      title: '14.43 Ordine di precedenza nell’intersezione n. 661',
      italianText: `Nell'intersezione 661 l'ordine corretto e E, C, L. E non deve dare precedenza, C da precedenza a E e L attende E e C.`,
      farsiTranslation: `در تقاطع 661 ترتیب درست E، سپس C و بعد L است. E حق تقدم نمی دهد، C به E حق تقدم می دهد و L منتظر E و C می ماند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 8 }, (_, i) => `q_14_43_${i + 1}`)
    },
    {
      id: 'topic_14_44',
      title: '14.44 Ordine di precedenza nell’intersezione n. 662',
      italianText: `Nell'intersezione 662 l'ordine corretto e A, E, B. A non deve dare precedenza, E passa dopo A ma prima di B, e B passa per ultimo.`,
      farsiTranslation: `در تقاطع 662 ترتیب درست A، سپس E و بعد B است. A حق تقدم نمی دهد، E بعد از A ولی قبل از B می رود و B آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 10 }, (_, i) => `q_14_44_${i + 1}`)
    },
    {
      id: 'topic_14_45',
      title: '14.45 Ordine di precedenza nell’intersezione n. 663',
      italianText: `Nell'intersezione 663 l'ordine corretto e R, B, D, T. T passa per ultimo.`,
      farsiTranslation: `در تقاطع 663 ترتیب درست R، سپس B، بعد D و در پایان T است. T آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 3 }, (_, i) => `q_14_45_${i + 1}`)
    },
    {
      id: 'topic_14_46',
      title: '14.46 Ordine di precedenza nell’intersezione n. 664',
      italianText: `Nell'intersezione 664 l'ordine corretto e S, B, L, D. B deve dare precedenza a S.`,
      farsiTranslation: `در تقاطع 664 ترتیب درست S، سپس B، بعد L و در پایان D است. B باید به S حق تقدم بدهد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 4 }, (_, i) => `q_14_46_${i + 1}`)
    },
    {
      id: 'topic_14_47',
      title: '14.47 Ordine di precedenza nell’intersezione n. 665',
      italianText: `Nell'intersezione 665 l'ordine corretto e A, E, V, H, C. A passa per primo, E passa prima di H, V ha precedenza su H e C deve dare precedenza a H.`,
      farsiTranslation: `در تقاطع 665 ترتیب درست A، سپس E، بعد V، سپس H و در پایان C است. A اول می رود و C باید به H حق تقدم بدهد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 11 }, (_, i) => `q_14_47_${i + 1}`)
    },
    {
      id: 'topic_14_48',
      title: '14.48 Ordine di precedenza nell’intersezione n. 667',
      italianText: `Nell'intersezione 667 l'ordine corretto e C, A, P. A passa dopo C e P passa per ultimo.`,
      farsiTranslation: `در تقاطع 667 ترتیب درست C، سپس A و بعد P است. A بعد از C می رود و P آخر عبور می کند.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_14_48_${i + 1}`)
    },
    {
      id: 'topic_14_49',
      title: '14.49 Ordine di precedenza nell’intersezione n. 668',
      italianText: `Nell'intersezione 668 l'ordine corretto e S, N, C. N passa dopo S e prima di C; C passa per ultimo.`,
      farsiTranslation: `در تقاطع 668 ترتیب درست S، سپس N و بعد C است. N بعد از S و قبل از C عبور می کند و C آخر است.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 6 }, (_, i) => `q_14_49_${i + 1}`)
    },
    {
      id: 'topic_14_50',
      title: '14.50 Ordine di precedenza nell’intersezione n. 669',
      italianText: `Nell'intersezione 669 l'ordine corretto e C, A, L, R, E. C passa per primo, A subito dopo C, L passa prima di R ed E da precedenza a R e L.`,
      farsiTranslation: `در تقاطع 669 ترتیب درست C، سپس A، بعد L، سپس R و در پایان E است. C اول می رود، A بلافاصله بعد از C، L قبل از R عبور می کند و E به R و L حق تقدم می دهد.`,
      vocabularyIds: [
        'intersezione', 'ordine_precedenza', 'precedenza_destra', 'veicoli_rotaie', 'stop', 'dare_precedenza', 'svolta_sinistra'
      ],
      questionIds: Array.from({ length: 12 }, (_, i) => `q_14_50_${i + 1}`)
    }
  ],
  questions: [
    {
      id: 'q_14_1_1',
      italianText: 'Agli incroci è obbligatorio dare la precedenza ai veicoli circolanti su rotaie (tram e treni), salvo diversa segnalazione',
      farsiTranslation: 'صحیح: در تقاطع‌ها اجباری است حق تقدم بدهد به وسایل نقلیه ریلی (تراموا و قطارها), مگر اینکه علامت دیگری وجود داشته باشد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_1_2',
      italianText: 'È obbligatorio dare la precedenza a destra e a sinistra quando, da fermi, ci si immette nella circolazione',
      farsiTranslation: 'صحیح: اجباری است حق تقدم بدهد به راست و چپ وقتی از حالت توقف وارد جریان عبور می‌شویم',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_1_3',
      italianText: 'È obbligatorio dare la precedenza a tutti i veicoli circolanti sulle strade quando si effettua l’inversione del senso di marcia',
      farsiTranslation: 'صحیح: اجباری است حق تقدم بدهد به همه وسایل نقلیه در حال حرکت در راه‌ها هنگام دور زدن و تغییر جهت حرکت',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_1_4',
      italianText: 'È obbligatorio dare la precedenza a tutti i veicoli quando si effettua la retromarcia',
      farsiTranslation: 'صحیح: اجباری است حق تقدم بدهد به همه وسایل نقلیه هنگام عقب رفتن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_1_5',
      italianText: 'È obbligatorio dare la precedenza a destra e a sinistra quando si esce da un passo carrabile',
      farsiTranslation: 'صحیح: اجباری است حق تقدم بدهد به راست و چپ هنگام خروج از محل عبور وسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_1_6',
      italianText: 'È obbligatorio dare la precedenza a destra e a sinistra in presenza del segnale in figura (FIG 41)',
      farsiTranslation: 'صحیح: اجباری است حق تقدم بدهد به راست و چپ در حضور تابلو در شکل (شکل 41)',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_1_7',
      italianText: 'È obbligatorio dare la precedenza a destra e a sinistra in presenza del segnale in figura (FIG 44)',
      farsiTranslation: 'غلط: اجباری است حق تقدم بدهد به راست و چپ در حضور تابلو در شکل (شکل 44)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_1_8',
      italianText: 'È obbligatorio dare la precedenza a destra e a sinistra in presenza del segnale ROTATORIA',
      farsiTranslation: 'غلط: اجباری است حق تقدم بدهد به راست و چپ در حضور تابلوی میدان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_1_9',
      italianText: 'È obbligatorio dare la precedenza a tutti i veicoli circolanti negli incroci regolati da semaforo a luce gialla lampeggiante',
      farsiTranslation: 'غلط: اجباری است حق تقدم بدهد به همه وسایل نقلیه در تقاطع‌هایی که چراغ زرد چشمک‌زن دارند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_1_10',
      italianText: 'È obbligatorio dare la precedenza a tutti i veicoli circolanti quando si svolta a sinistra',
      farsiTranslation: 'غلط: اجباری است حق تقدم بدهد به همه وسایل نقلیه در حال حرکت هنگام پیچیدن به چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_1_11',
      italianText: 'È obbligatorio dare la precedenza a tutti i veicoli circolanti in presenza del segnale in figura (FIG 47)',
      farsiTranslation: 'غلط: اجباری است حق تقدم بدهد به همه وسایل نقلیه در حال حرکت در حضور تابلو در شکل (شکل 47)',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_2_1',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo R passa per primo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه R عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_2_2',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli transitano nel seguente ordine: R, D, A',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: R, D, A',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_2_3',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo D passa prima del veicolo R',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه D عبور می‌کند قبل از وسیله نقلیه R',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_2_4',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli transitano nel seguente ordine: D, A, R',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: D, A, R',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_2_5',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli A e R passano contemporaneamente',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه A و R عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_3_1',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo E transita per primo',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه E عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_3_2',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo C transita dopo il veicolo E',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه C عبور می‌کند بعد از وسیله نقلیه E',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_3_3',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura i veicoli devono transitare nel seguente ordine: E, C, M',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسایل نقلیه باید به این ترتیب عبور کنند: E, C, M',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_3_4',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo M transita per primo',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه M عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_3_5',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura i veicoli devono transitare nel seguente ordine: C, M ed E',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسایل نقلیه باید به این ترتیب عبور کنند: C, M و E',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_3_6',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura i veicoli M ed E transitano contemporaneamente',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسایل نقلیه M و E عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_4_1',
      italianText: 'Nell’intersezione in figura il veicolo T transita per primo',
      farsiTranslation: 'صحیح: در تقاطع شکل، وسیله نقلیه T عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_4_2',
      italianText: 'Nell’intersezione in figura i veicoli transitano nel seguente ordine: T, P, M',
      farsiTranslation: 'صحیح: وسایل نقلیه به این ترتیب عبور می‌کنند: T, P, M',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_4_3',
      italianText: 'Nell’intersezione in figura il veicolo M transita per ultimo',
      farsiTranslation: 'صحیح: در تقاطع شکل، وسیله نقلیه M عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_4_4',
      italianText: 'Nell’intersezione in figura il veicolo M ha la precedenza perché è in servizio pubblico',
      farsiTranslation: 'غلط: در تقاطع شکل، وسیله نقلیه M حق تقدم دارد زیرا در سرویس عمومی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_4_5',
      italianText: 'Nell’intersezione in figura i veicoli transitano nel seguente ordine: T, M, P',
      farsiTranslation: 'غلط: وسایل نقلیه به این ترتیب عبور می‌کنند: T, M, P',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_4_6',
      italianText: 'Nell’intersezione in figura il veicolo T può passare per primo, purché il veicolo M non stia svolgendo un servizio pubblico di linea',
      farsiTranslation: 'غلط: در تقاطع شکل، وسیله نقلیه T می‌تواند عبور کند اول, به شرط اینکه وسیله نقلیه M در حال انجام نباشد سرویس عمومی خطی',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_5_1',
      italianText: 'Nella situazione rappresentata in figura il veicolo B non deve dare la precedenza agli altri due veicoli',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه B نباید حق تقدم بدهد به دو وسیله نقلیه دیگر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_5_2',
      italianText: 'Nella situazione rappresentata in figura il veicolo H passa per secondo',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه H عبور می‌کند دوم',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_5_3',
      italianText: 'Nella situazione rappresentata in figura il veicolo C deve disimpegnare l’incrocio per ultimo',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه C باید تخلیه کند تقاطع آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_5_4',
      italianText: 'Nella situazione rappresentata in figura il veicolo B passa per primo',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه B عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_5_5',
      italianText: 'Nella situazione rappresentata in figura il veicolo C deve dare la precedenza al veicolo H',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه C باید به وسیله نقلیه H حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_5_6',
      italianText: 'Nella situazione rappresentata in figura il veicolo H passa per primo',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه H عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_5_7',
      italianText: 'Nella situazione rappresentata in figura passano per primi e contemporaneamente i veicoli B e C',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، عبور می‌کنند اول و همزمان وسایل نقلیه B و C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_5_8',
      italianText: 'Nella situazione rappresentata in figura il veicolo H deve impegnare l’incrocio dopo il passaggio dei veicoli B e C',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه H باید وارد شود به تقاطع بعد از عبور وسایل نقلیه B و C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_5_9',
      italianText: 'Nella situazione rappresentata in figura il veicolo H ha la precedenza sul veicolo C, in quanto è un autobus',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه H نسبت به وسیله نقلیه C حق تقدم دارد, زیرا اتوبوس است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_5_10',
      italianText: 'Nella situazione rappresentata in figura il veicolo C passa per primo',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه C عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_6_1',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo T transita per primo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه T عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_6_2',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli passano nel seguente ordine: T, L ed A, infine C',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: T, L و A, در پایان C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_7_1',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo T transita per primo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه T عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_7_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A deve attendere il transito del veicolo O',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A باید منتظر بماند عبور وسیله نقلیه O',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_7_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo O deve attendere il transito del veicolo T',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه O باید منتظر بماند عبور وسیله نقلیه T',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_7_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli transitano nell’ordine: T, O, A',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: T, O, A',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_7_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo O transita prima del veicolo A',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه O عبور می‌کند قبل از وسیله نقلیه A',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_7_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo T deve attendere il transito del veicolo O',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه T باید منتظر بماند عبور وسیله نقلیه O',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_7_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo O deve attendere il transito del veicolo A',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه O باید منتظر بماند عبور وسیله نقلیه A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_7_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo T deve attendere il transito del veicolo A',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه T باید منتظر بماند عبور وسیله نقلیه A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_7_9',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli transitano nell’ordine: T, A, O',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: T, A, O',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_7_10',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli A e T transitano contemporaneamente',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه A و T عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_8_1',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo T passa per ultimo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه T عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_8_2',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo R passa per primo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه R عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_8_3',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo A deve attendere il transito del veicolo R',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه A باید منتظر بماند عبور وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_8_4',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo T deve attendere il transito dei veicoli R ed A',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه T باید منتظر بماند عبور وسایل نقلیه R و به',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_8_5',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli transitano nell’ordine: R, A, T',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: R, A, T',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_8_6',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo T transita prima del veicolo R',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه T عبور می‌کند قبل از وسیله نقلیه R',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_8_7',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli transitano nell’ordine: R, T, A',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: R, T, A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_8_8',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli transitano nell’ordine: T, A, R',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: T, A, R',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_8_9',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo T transita prima degli altri veicoli',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه T عبور می‌کند قبل از وسایل نقلیه دیگر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_9_1',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R passa per primo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_9_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo C deve passare per ultimo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه C باید عبور کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_9_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A deve passare dopo il veicolo R',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A باید عبور کند بعد از وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_9_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A passa prima del veicolo C',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند قبل از وسیله نقلیه C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_9_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo C deve passare dopo i veicoli R e A',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه C باید عبور کند بعد از وسایل نقلیه R و به',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_9_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A, se è della polizia con i dispositivi di allarme in funzione, passa per primo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A, اگر پلیس با وسایل هشدار فعال, عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_9_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A passa per primo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_9_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A deve passare per ultimo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A باید عبور کند آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_9_9',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R deve passare dopo il veicolo A',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R باید عبور کند بعد از وسیله نقلیه A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_9_10',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R deve attraversare l’incrocio per secondo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R باید عبور کند تقاطع دوم',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_9_11',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo C passa per secondo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه C عبور می‌کند دوم',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_9_12',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli C e R passano per primi e contemporaneamente',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه C و R عبور می‌کنند اول و همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_10_1',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo B transita per primo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه B عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_10_2',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli transitano nel seguente ordine: B, T, S',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: B, T, S',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_10_3',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo S transita per ultimo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه S عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_10_4',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli transitano nel seguente ordine: S, B, T',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: S, B, T',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_10_5',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo B deve dare la precedenza al veicolo T',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه B باید به وسیله نقلیه T حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_10_6',
      italianText: 'Nell’incrocio rappresentato in figura nessuno dei veicoli deve moderare la velocità',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه باید سرعت را کم کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_10_7',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli B e S transitano contemporaneamente',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه B و S عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_11_1',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo N conclude per ultimo l’attraversamento dell’incrocio',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه N تمام می‌کند آخر عبور تقاطع',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_11_2',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N deve dare la precedenza al veicolo A',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه N باید به وسیله نقلیه A حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_11_3',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N ha la precedenza rispetto al veicolo R',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه N نسبت به وسیله نقلیه R حق تقدم دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_11_4',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N può concludere la manovra di svolta a sinistra dopo il transito dei veicoli R e A',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه N می‌تواند تمام کند مانور گردش به چپ بعد از عبور وسایل نقلیه R و به',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_11_5',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N, dopo essersi portato al centro dell’incrocio, deve attendere il transito dei veicoli R e A',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه N, بعد از رفتن در مرکز تقاطع, باید منتظر بماند عبور وسایل نقلیه R و به',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_11_6',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N attraversa per primo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه N عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_11_7',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N deve dare la precedenza al veicolo R',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه N باید به وسیله نقلیه R حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_11_8',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N ha la precedenza rispetto al veicolo A',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه N نسبت به وسیله نقلیه A حق تقدم دارد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_11_9',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N passa dopo il transito del veicolo R ma prima che transiti il veicolo A',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه N عبور می‌کند بعد از عبور وسیله نقلیه R اما قبل از اینکه عبور کند وسیله نقلیه A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_11_10',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N impegna l’incrocio per ultimo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه N وارد می‌شود به تقاطع آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_12_1',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo R deve dare la precedenza al veicolo N',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه R باید به وسیله نقلیه N حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_12_2',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo R ha la precedenza rispetto al veicolo A',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه R نسبت به وسیله نقلیه A حق تقدم دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_12_3',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo R attraversa l’incrocio dopo che il veicolo N si è fermato al centro dell’incrocio',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه R عبور می‌کند تقاطع پس از اینکه وسیله نقلیه N توقف کرده است در مرکز تقاطع',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_12_4',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo R passa prima del veicolo A',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه R عبور می‌کند قبل از وسیله نقلیه A',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_12_5',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo R conclude per primo l’attraversamento',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه R تمام می‌کند اول عبور',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_12_6',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo R deve dare la precedenza al veicolo A',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه R باید به وسیله نقلیه A حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_12_7',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo R passa per ultimo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه R عبور می‌کند آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_12_8',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo R passa dopo il transito del veicolo A',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه R عبور می‌کند بعد از عبور وسیله نقلیه A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_12_9',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo R impegna l’incrocio e si ferma al centro',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه R وارد می‌شود به تقاطع و توقف می‌کند در مرکز',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_13_1',
      italianText: 'Nella situazione rappresentata in figura il veicolo L attraversa l’incrocio per primo',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه L عبور می‌کند تقاطع اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_13_2',
      italianText: 'Nella situazione rappresentata in figura il veicolo H attraversa l’incrocio per ultimo',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه H عبور می‌کند تقاطع آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_13_3',
      italianText: 'È consentito attraversare l’incrocio in figura secondo l’ordine veicolo L, veicolo C, veicolo H',
      farsiTranslation: 'صحیح: عبور از تقاطع شکل با این ترتیب مجاز است: وسیله نقلیه L, وسیله نقلیه C, وسیله نقلیه H',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_13_4',
      italianText: 'È consentito attraversare l’incrocio in figura secondo l’ordine il veicolo C dopo il veicolo L, ma prima del veicolo H',
      farsiTranslation: 'صحیح: عبور از تقاطع شکل با این ترتیب مجاز است: وسیله نقلیه C بعد از وسیله نقلیه L, اما قبل از وسیله نقلیه H',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_13_5',
      italianText: 'È consentito attraversare l’incrocio in figura secondo l’ordine il veicolo L contemporaneamente al veicolo C, poi il veicolo H',
      farsiTranslation: 'غلط: عبور از تقاطع شکل با این ترتیب مجاز است: وسیله نقلیه L همزمان به وسیله نقلیه C, سپس وسیله نقلیه H',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_13_6',
      italianText: 'È consentito attraversare l’incrocio in figura secondo l’ordine il veicolo H, il veicolo C, il veicolo L',
      farsiTranslation: 'غلط: عبور از تقاطع شکل با این ترتیب مجاز است: وسیله نقلیه H, وسیله نقلیه C, وسیله نقلیه L',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_13_7',
      italianText: 'È consentito attraversare l’incrocio in figura secondo l’ordine il veicolo H, il veicolo L, il veicolo C',
      farsiTranslation: 'غلط: عبور از تقاطع شکل با این ترتیب مجاز است: وسیله نقلیه H, وسیله نقلیه L, وسیله نقلیه C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_13_8',
      italianText: 'È consentito attraversare l’incrocio in figura secondo l’ordine il veicolo L, il veicolo H, il veicolo C',
      farsiTranslation: 'غلط: عبور از تقاطع شکل با این ترتیب مجاز است: وسیله نقلیه L, وسیله نقلیه H, وسیله نقلیه C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_13_9',
      italianText: 'È consentito attraversare l’incrocio in figura secondo l’ordine il veicolo C, il veicolo H, il veicolo L',
      farsiTranslation: 'غلط: عبور از تقاطع شکل با این ترتیب مجاز است: وسیله نقلیه C, وسیله نقلیه H, وسیله نقلیه L',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_14_1',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo B deve attendere il transito del veicolo P',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B باید منتظر بماند عبور وسیله نقلیه P',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_14_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo P transita per primo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه P عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_14_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli transitano nell’ordine: P, B, C',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: P, B, C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_14_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo C ha la destra occupata',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه C سمت راستش اشغال است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_14_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo B transita per ultimo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B عبور می‌کند آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_14_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli transitano nell’ordine: P, C, B',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: P, C, B',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_14_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli P e C transitano contemporaneamente',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه P و C عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_14_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo P impegna l’incrocio per primo ma si deve fermare al centro di esso',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه P وارد می‌شود به تقاطع اول اما باید توقف کند در مرکز آن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_15_1',
      italianText: 'Nell’intersezione di figura il veicolo D transita prima del veicolo F',
      farsiTranslation: 'صحیح: در تقاطع شکل، وسیله نقلیه D عبور می‌کند قبل از وسیله نقلیه F',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_15_2',
      italianText: 'Nell’intersezione di figura l’ordine di transito dei veicoli è: R, D, F',
      farsiTranslation: 'صحیح: در تقاطع شکل، ترتیب عبور وسایل نقلیه این است: R, D, F',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_15_3',
      italianText: 'Nell’intersezione di figura il filobus passa per primo perché vincolato alla linea elettrica aerea',
      farsiTranslation: 'غلط: در تقاطع شکل، اتوبوس برقی عبور می‌کند اول زیرا وابسته به خط برق هوایی است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_15_4',
      italianText: 'Nell’intersezione di figura l’ordine di transito dei veicoli è: F, R, D',
      farsiTranslation: 'غلط: در تقاطع شکل، ترتیب عبور وسایل نقلیه این است: F, R, D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_16_1',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli passano nel seguente ordine: D, P, B, N',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: D, P, B, N',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_16_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo N deve passare per ultimo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه N باید عبور کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_16_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo B deve passare dopo il veicolo P',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B باید عبور کند بعد از وسیله نقلیه P',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_16_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo D passa prima degli altri veicoli',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه D عبور می‌کند قبل از وسایل نقلیه دیگر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_16_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo B passa prima del veicolo N',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B عبور می‌کند قبل از وسیله نقلیه N',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_16_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo N passa dopo il veicolo B',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه N عبور می‌کند بعد از وسیله نقلیه B',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_16_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo P può passare prima del veicolo B',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه P می‌تواند عبور کند قبل از وسیله نقلیه B',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_16_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli passano nel seguente ordine: D, B, N, P',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: D, B, N, P',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_16_9',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli passano nel seguente ordine: P, B, N, D',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: P, B, N, D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_16_10',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli D e N passano contemporaneamente',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه D و N عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_16_11',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli D e B passano contemporaneamente',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه D و B عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_16_12',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo P passa prima del veicolo B, ma dopo quello N',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه P عبور می‌کند قبل از وسیله نقلیه B, اما بعد از وسیله N',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_16_13',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura passano per primi indifferentemente i veicoli B e D',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، عبور می‌کنند اول بدون تفاوت وسایل نقلیه B و D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_17_1',
      italianText: 'Nell’intersezione di figura l’ordine di transito dei veicoli è: N, A, R',
      farsiTranslation: 'صحیح: در تقاطع شکل، ترتیب عبور وسایل نقلیه این است: N, A, R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_17_2',
      italianText: 'Nell’intersezione di figura i veicoli A ed R devono, se necessario, fermarsi',
      farsiTranslation: 'صحیح: در تقاطع شکل، وسایل نقلیه A و R در صورت لزوم باید توقف کنند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_17_3',
      italianText: 'Nell’intersezione di figura il veicolo A può transitare prima del veicolo R, ma dopo il veicolo N',
      farsiTranslation: 'صحیح: در تقاطع شکل، وسیله نقلیه A عبور کند قبل از وسیله نقلیه R, اما بعد از وسیله نقلیه N',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_17_4',
      italianText: 'Nell’intersezione di figura l’ordine di transito dei veicoli è: A, N, R',
      farsiTranslation: 'غلط: در تقاطع شکل، ترتیب عبور وسایل نقلیه این است: A, N, R',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_17_5',
      italianText: 'Nell’intersezione di figura l’ordine di precedenza dei veicoli è: N, R, A',
      farsiTranslation: 'غلط: در تقاطع شکل، ترتیب حق تقدم وسایل نقلیه این است: N, R, A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_18_1',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo A passa per primo',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_18_2',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo C deve dare la precedenza al veicolo A',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه C باید به وسیله نقلیه A حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_18_3',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo L passa per ultimo',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه L عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_18_4',
      italianText: 'Giungendo all’incrocio rappresentato in figura i veicoli devono passare nel seguente ordine: A, C, L',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسایل نقلیه باید به این ترتیب عبور کنند: A, C, L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_18_5',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo A deve attendere che siano transitati i veicoli L e C',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه A باید منتظر بماند که عبور کرده‌اند وسایل نقلیه L و C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_18_6',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo L passa per primo',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه L عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_18_7',
      italianText: 'Giungendo all’incrocio rappresentato in figura i veicoli devono passare nel seguente ordine: L, C, A',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسایل نقلیه باید به این ترتیب عبور کنند: L, C, A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_18_8',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo C deve attendere il transito del veicolo L',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه C باید منتظر بماند عبور وسیله نقلیه L',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_19_1',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo T transita per primo',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه T عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_19_2',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo A transita subito dopo il veicolo T',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند بلافاصله بعد از وسیله نقلیه T',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_19_3',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo S deve attendere il transito dei veicoli T e A',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه S باید منتظر بماند عبور وسایل نقلیه T و به',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_19_4',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura i veicoli devono transitare nel seguente ordine: T, A, S',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسایل نقلیه باید به این ترتیب عبور کنند: T, A, S',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_19_5',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo A transita per primo',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_19_6',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura i veicoli devono transitare nel seguente ordine: A, T, S',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسایل نقلیه باید به این ترتیب عبور کنند: A, T, S',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_19_7',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo S transita dopo il veicolo T, ma prima del veicolo A',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه S عبور می‌کند بعد از وسیله نقلیه T, اما قبل از وسیله نقلیه A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_19_8',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura i veicoli A e S transitano contemporaneamente dopo il passaggio del veicolo T',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسایل نقلیه A و S عبور می‌کنند همزمان بعد از عبور وسیله نقلیه T',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_20_1',
      italianText: 'Nell’attraversare l’incrocio in figura il veicolo L passa per primo',
      farsiTranslation: 'صحیح: هنگام عبور از تقاطع در شکل، وسیله نقلیه L عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_20_2',
      italianText: 'Nell’attraversare l’incrocio in figura il veicolo D è l’ultimo a passare',
      farsiTranslation: 'صحیح: هنگام عبور از تقاطع در شکل، وسیله نقلیه D آخرین وسیله‌ای است که عبور کند',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_20_3',
      italianText: 'Nell’attraversare l’incrocio in figura i veicoli C e A passano contemporaneamente dopo il veicolo L',
      farsiTranslation: 'صحیح: هنگام عبور از تقاطع در شکل، وسایل نقلیه C و به عبور می‌کنند همزمان بعد از وسیله نقلیه L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_20_4',
      italianText: 'Nell’attraversare l’incrocio in figura il veicolo A ha la precedenza sul veicolo D',
      farsiTranslation: 'صحیح: هنگام عبور از تقاطع در شکل، وسیله نقلیه A نسبت به وسیله نقلیه D حق تقدم دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_20_5',
      italianText: 'Nell’attraversare l’incrocio in figura passa per primo il veicolo più veloce',
      farsiTranslation: 'غلط: هنگام عبور از تقاطع در شکل، عبور می‌کند اول وسیله نقلیه سریع‌تر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_20_6',
      italianText: 'Nell’attraversare l’incrocio in figura il veicolo A passa per ultimo',
      farsiTranslation: 'غلط: هنگام عبور از تقاطع در شکل، وسیله نقلیه A عبور می‌کند آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_20_7',
      italianText: 'Nell’attraversare l’incrocio in figura i veicoli passano nel seguente ordine: C, A, D, L',
      farsiTranslation: 'غلط: هنگام عبور از تقاطع شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: C, A, D, L',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_20_8',
      italianText: 'Nell’attraversare l’incrocio in figura i veicoli passano nel seguente ordine: C, L, A, D',
      farsiTranslation: 'غلط: هنگام عبور از تقاطع شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: C, L, A, D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_20_9',
      italianText: 'Nell’attraversare l’incrocio in figura i veicoli D e L passano contemporaneamente prima del veicolo A',
      farsiTranslation: 'غلط: هنگام عبور از تقاطع در شکل، وسایل نقلیه D و L عبور می‌کنند همزمان قبل از وسیله نقلیه A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_21_1',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A deve dare la precedenza al veicolo L',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A باید به وسیله نقلیه L حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_21_2',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A può attraversare l’incrocio insieme al veicolo C, dopo il transito del veicolo L',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A می‌تواند عبور کند تقاطع همراه به وسیله نقلیه C, بعد از عبور وسیله نقلیه L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_21_3',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A ha la precedenza rispetto al veicolo D',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A نسبت به وسیله نقلیه D حق تقدم دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_21_4',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A deve dare la precedenza a tutti i veicoli',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A باید به همه وسایل نقلیه حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_21_5',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A passa per ultimo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A عبور می‌کند آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_22_1',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo N passa dopo il veicolo R',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه N عبور می‌کند بعد از وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_22_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo B passa dopo il veicolo N',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B عبور می‌کند بعد از وسیله نقلیه N',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_22_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo D passa dopo il veicolo R',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه D عبور می‌کند بعد از وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_22_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R passa dopo che il veicolo B si è spostato al centro dell’incrocio',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R عبور می‌کند پس از اینکه وسیله نقلیه B جابه‌جا شده است در مرکز تقاطع',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_22_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli D e N passano contemporaneamente dopo che è passato il veicolo R',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه D و N عبور می‌کنند همزمان پس از اینکه عبور کرده است وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_22_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo B nell’impegnare l’incrocio deve fermarsi al centro di esso',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B در’وارد شود تقاطع باید توقف کند در مرکز آن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_22_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R impegna l’incrocio e si ferma al centro di esso',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R وارد می‌شود به تقاطع و توقف می‌کند در مرکز آن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_22_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo N passa per primo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه N عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_22_9',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo D passa per primo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه D عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_22_10',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo D deve dare la precedenza al veicolo B',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه D باید به وسیله نقلیه B حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_22_11',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo B deve dare la precedenza al veicolo D',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B باید به وسیله نقلیه D حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_22_12',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R passa per ultimo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R عبور می‌کند آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_23_1',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo B deve dare la precedenza al veicolo N',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه B باید به وسیله نقلیه N حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_23_2',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo B impegna l’incrocio prima del veicolo R',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه B وارد می‌شود به تقاطع قبل از وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_23_3',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo B può concludere la manovra di svolta a sinistra dopo il transito del veicolo N',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه B می‌تواند تمام کند مانور گردش به چپ بعد از عبور وسیله نقلیه N',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_23_4',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo B dopo essersi portato al centro dell’incrocio, deve attendere il transito del veicolo N',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه B بعد از رفتن در مرکز تقاطع, باید منتظر بماند عبور وسیله نقلیه N',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_23_5',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo B ha la destra libera, durante tutta la manovra di svolta',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه B سمت راستش آزاد است, در تمام مدت مانور گردش',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_23_6',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo B deve impegnare per ultimo l’incrocio perché svolta a sinistra',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه B باید وارد شود به آخر تقاطع زیرا گردش به چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_23_7',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo B deve dare la precedenza al veicolo R che prosegue diritto',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه B باید به وسیله نقلیه R حق تقدم بدهد که مستقیم حرکت می‌کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_24_1',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo A deve dare la precedenza al tram e al veicolo B',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه A باید به تراموا و وسیله نقلیه B حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_24_2',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo A ha la precedenza rispetto al veicolo C',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه A نسبت به وسیله نقلیه C حق تقدم دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_24_3',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli transitano nell’ordine: T e B, A, C',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: T و B, A, C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_24_4',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli T e B possono transitare contemporaneamente',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه T و B می‌توانند عبور کند همزمان',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_24_5',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo C transita per ultimo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه C عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_24_6',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli T e C transitano contemporaneamente',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه T و C عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_24_7',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli transitano nell’ordine: T, B, C, A',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: T, B, C, A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_24_8',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo A transita per ultimo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_24_9',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli T, B, C transitano contemporaneamente',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه T, B, C عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_24_10',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo B deve dare la precedenza al veicolo A',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه B باید به وسیله نقلیه A حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_25_1',
      italianText: 'Secondo le norme di precedenza possono impegnare l’incrocio rappresentato in figura il veicolo D dopo l’attraversamento del veicolo R',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه D بعد از عبور وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_25_2',
      italianText: 'Secondo le norme di precedenza possono impegnare l’incrocio rappresentato in figura il veicolo B dopo l’attraversamento di tutti gli altri veicoli',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B بعد از عبور همه دیگروسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_25_3',
      italianText: 'Secondo le norme di precedenza possono impegnare l’incrocio rappresentato in figura il veicolo R senza dare la precedenza ad alcun veicolo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R بدون حق تقدم بدهد به هیچ وسیله نقلیه‌ای',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_25_4',
      italianText: 'Secondo le norme di precedenza possono impegnare l’incrocio rappresentato in figura il veicolo B dopo l’attraversamento dei veicoli R e D',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B بعد از عبور وسایل نقلیه R و D',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_25_5',
      italianText: 'Secondo le norme di precedenza possono impegnare l’incrocio rappresentato in figura il veicolo B contemporaneamente al veicolo R e prima di quello D',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B همزمان به وسیله نقلیه R و قبل از وسیله نقلیه D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_25_6',
      italianText: 'Secondo le norme di precedenza possono impegnare l’incrocio rappresentato in figura il veicolo D prima degli altri veicoli',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه D قبل از وسایل نقلیه دیگر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_25_7',
      italianText: 'Secondo le norme di precedenza possono impegnare l’incrocio rappresentato in figura il veicolo R dopo l’attraversamento dei veicoli B e D',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R بعد از عبور وسایل نقلیه B و D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_25_8',
      italianText: 'Secondo le norme di precedenza possono impegnare l’incrocio rappresentato in figura il veicolo B prima degli altri veicoli',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B قبل از وسایل نقلیه دیگر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_26_1',
      italianText: 'Nella situazione rappresentata in figura il tram ha la precedenza rispetto agli altri veicoli',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، تراموا نسبت به وسایل نقلیه دیگر حق تقدم دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_26_2',
      italianText: 'Nell’incrocio rappresentato in figura, tutti i veicoli devono usare prudenza nell’attraversarlo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، همه وسایل نقلیه باید با احتیاط عمل کنند در’عبور می‌کندآن',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_26_3',
      italianText: 'Nella situazione rappresentata in figura il veicolo O deve attendere il transito del tram e che il veicolo A si porti al centro',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه O باید منتظر بماند عبور تراموا و که وسیله نقلیه A برود در مرکز',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_26_4',
      italianText: 'Nella situazione rappresentata in figura il tram transita per primo',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، تراموا عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_26_5',
      italianText: 'Nella situazione rappresentata in figura il veicolo M deve attendere il transito del veicolo O',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه M باید منتظر بماند عبور وسیله نقلیه O',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_26_6',
      italianText: 'Nella situazione rappresentata in figura il veicolo M attraversa l’incrocio insieme al tram',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه M عبور می‌کند تقاطع همراه به تراموا',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_26_7',
      italianText: 'Nella situazione rappresentata in figura il veicolo A nello svoltare a sinistra ha la destra libera',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه A هنگام گردش به چپ سمت راستش آزاد است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_26_8',
      italianText: 'Nella situazione rappresentata in figura il veicolo O deve attendere che passino il tram ed il veicolo M',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه O باید منتظر بماند تا عبور کنند تراموا و وسیله نقلیه M',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_26_9',
      italianText: 'Nella situazione rappresentata in figura il veicolo O deve attendere che transitino tutti gli altri veicoli',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه O باید منتظر بماند تا عبور کنند همه دیگروسایل نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_26_10',
      italianText: 'Nella situazione rappresentata in figura il veicolo A deve dare la precedenza al tram, ma non al veicolo M',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه A باید حق تقدم بدهد به تراموا, اما نه به وسیله نقلیه M',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_26_11',
      italianText: 'Nella situazione rappresentata in figura il veicolo O deve dare la precedenza al tram ed al veicolo M',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه O باید حق تقدم بدهد به تراموا و به وسیله نقلیه M',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_27_1',
      italianText: 'Giungendo all’incrocio rappresentato in figura i veicoli passano nel seguente ordine: H, D, B, L',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: H, D, B, L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_27_2',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo H passa per primo',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه H عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_27_3',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo B passa prima del veicolo L',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه B عبور می‌کند قبل از وسیله نقلیه L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_27_4',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo D deve dare la precedenza al veicolo H',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه D باید به وسیله نقلیه H حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_27_5',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo L deve dare la precedenza al veicolo B',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه L باید به وسیله نقلیه B حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_27_6',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo L deve passare per ultimo',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه L باید عبور کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_27_7',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo D passa prima del veicolo B',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه D عبور می‌کند قبل از وسیله نقلیه B',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_27_8',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo B deve attendere il transito degli altri tre veicoli',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه B باید منتظر بماند عبور دیگران سه وسیله نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_27_9',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo H deve attendere che siano transitati i veicoli D e B',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه H باید منتظر بماند که عبور کرده‌اند وسایل نقلیه D و B',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_27_10',
      italianText: 'Giungendo all’incrocio rappresentato in figura i veicoli L e D passano contemporaneamente',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسایل نقلیه L و D عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_27_11',
      italianText: 'Giungendo all’incrocio rappresentato in figura i veicoli passano nel seguente ordine: H, D, L, B',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: H, D, L, B',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_27_12',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo B, dato che svolta a sinistra, non ha diritto di precedenza su alcun veicolo',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه B, از آنجا که گردش به چپ, نه مستقیم نسبت به وسیله نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_27_13',
      italianText: 'Giungendo all’incrocio rappresentato in figura i veicoli L e D hanno la precedenza perché non effettuano svolte',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسایل نقلیه L و D حق تقدم دارند زیرا نه گردش می‌کنند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_28_1',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo P può passare per primo',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه P می‌تواند عبور کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_28_2',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo D deve dare la precedenza al veicolo P',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه D باید به وسیله نقلیه P حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_28_3',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo B deve attendere che siano transitati i veicoli P e D',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه B باید منتظر بماند که عبور کرده‌اند وسایل نقلیه P و D',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_28_4',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo L deve dare la precedenza al veicolo B',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه L باید به وسیله نقلیه B حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_28_5',
      italianText: 'Giungendo all’incrocio rappresentato in figura i veicoli devono passare nel seguente ordine: P, D, B, L',
      farsiTranslation: 'صحیح: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسایل نقلیه باید به این ترتیب عبور کنند: P, D, B, L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_28_6',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo B deve dare la precedenza al veicolo L',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه B باید به وسیله نقلیه L حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_28_7',
      italianText: 'Giungendo all’incrocio rappresentato in figura il veicolo P deve attendere che siano transitati gli altri tre veicoli',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسیله نقلیه P باید منتظر بماند که عبور کرده‌اند سه وسیله نقلیه دیگر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_28_8',
      italianText: 'Giungendo all’incrocio rappresentato in figura i veicoli devono passare nel seguente ordine: P, D, L, B',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسایل نقلیه باید به این ترتیب عبور کنند: P, D, L, B',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_28_9',
      italianText: 'Giungendo all’incrocio rappresentato in figura i veicoli D e L passano contemporaneamente per primi',
      farsiTranslation: 'غلط: هنگام رسیدن به تقاطع نشان داده شده در شکل، وسایل نقلیه D و L عبور می‌کنند همزمان اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_29_1',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli passano nel seguente ordine: D, C, A, H',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: D, C, A, H',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_29_2',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo A ha la destra occupata',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه A سمت راستش اشغال است',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_29_3',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo D ha la precedenza sul veicolo C',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه D نسبت به وسیله نقلیه C حق تقدم دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_29_4',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo D è il primo ad impegnare l’incrocio',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه D به وارد شود تقاطع',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_29_5',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo H è l’ultimo ad attraversare l’incrocio',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه H آخرین وسیله‌ای است که عبور کند تقاطع',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_29_6',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo D deve dare la precedenza a quello C',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه D باید حق تقدم بدهد به وسیله نقلیه C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_29_7',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo C attraversa per primo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه C عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_29_8',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo A attraversa l’incrocio prima del veicolo C',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند تقاطع قبل از وسیله نقلیه C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_29_9',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli passano nel seguente ordine: C, A, H, D',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: C, A, H, D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_29_10',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli passano nel seguente ordine: H, A, C, D',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: H, A, C, D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_29_11',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli C e H passano per primi',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه C و H عبور می‌کنند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_30_1',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli L e H passano contemporaneamente per primi',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه L و H عبور می‌کنند همزمان اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_30_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli passano nel seguente ordine: L e H, B, O',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: L و H, B, O',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_30_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura, il veicolo B transita dopo i veicoli L e H',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B عبور می‌کند بعد از وسایل نقلیه L و H',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_30_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo O transita per ultimo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه O عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_30_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo B transita prima del veicolo O e dopo i veicoli L e H',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B عبور می‌کند قبل از وسیله نقلیه O و بعد از وسایل نقلیه L و H',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_30_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo O deve dare la precedenza a tutti gli altri veicoli',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه O باید حق تقدم بدهد به همه دیگروسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_30_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo O transita prima del veicolo H, ma dopo il veicolo L',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه O عبور می‌کند قبل از وسیله نقلیه H, اما بعد از وسیله نقلیه L',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_30_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo O transita prima del veicolo H, ma dopo il veicolo B',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه O عبور می‌کند قبل از وسیله نقلیه H, اما بعد از وسیله نقلیه B',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_30_9',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo B transita per primo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه B عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_30_10',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo H transita dopo il veicolo O',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه H عبور می‌کند بعد از وسیله نقلیه O',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_30_11',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli passano nel seguente ordine: B, L, O, H',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: B, L, O, H',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_30_12',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo O impegna l’incrocio per primo e si ferma al centro di esso',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه O وارد می‌شود به تقاطع اول و توقف می‌کند در مرکز آن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_31_1',
      italianText: 'Nella situazione rappresentata in figura il veicolo B deve dare la precedenza a tutti gli altri veicoli',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه B باید حق تقدم بدهد به همه دیگروسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_31_2',
      italianText: 'Nella situazione rappresentata in figura il veicolo T passa per primo',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه T عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_31_3',
      italianText: 'Nella situazione rappresentata in figura il veicolo B transita per ultimo',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه B عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_31_4',
      italianText: 'Nella situazione rappresentata in figura il veicolo P deve dare la precedenza ai veicoli T e G',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه P باید به وسایل نقلیه T و G حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_31_5',
      italianText: 'Nella situazione rappresentata in figura i veicoli transitano nell’ordine: T, G, P, B',
      farsiTranslation: 'صحیح: وسایل نقلیه به این ترتیب عبور می‌کنند: T, G, P, B',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_31_6',
      italianText: 'Nella situazione rappresentata in figura il veicolo G deve attendere il transito del veicolo T',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه G باید منتظر بماند عبور وسیله نقلیه T',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_31_7',
      italianText: 'Nella situazione rappresentata in figura il veicolo T deve attendere il transito del veicolo G',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه T باید منتظر بماند عبور وسیله نقلیه G',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_31_8',
      italianText: 'Nella situazione rappresentata in figura il veicolo G transita per primo',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه G عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_31_9',
      italianText: 'Nella situazione rappresentata in figura il veicolo B impegna per primo l’incrocio e deve fermarsi al centro di esso',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه B وارد می‌شود به اول تقاطع و باید توقف کند در مرکز آن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_31_10',
      italianText: 'Nella situazione rappresentata in figura il veicolo T impegna per primo l’incrocio, ma deve fermarsi al centro di esso',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه T وارد می‌شود به اول تقاطع, اما باید توقف کند در مرکز آن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_31_11',
      italianText: 'Nella situazione rappresentata in figura i veicoli transitano nell’ordine: T, P, G, B',
      farsiTranslation: 'غلط: وسایل نقلیه به این ترتیب عبور می‌کنند: T, P, G, B',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_31_12',
      italianText: 'Nella situazione rappresentata in figura il veicolo P transita subito dopo il veicolo T',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه P عبور می‌کند بلافاصله بعد از وسیله نقلیه T',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_32_1',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo P deve dare la precedenza ai veicoli T e G',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه P باید به وسایل نقلیه T و G حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_32_2',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo P ha la precedenza sul veicolo B',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه P نسبت به وسیله نقلیه B حق تقدم دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_32_3',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo P transita dopo il tram e il veicolo G, ma prima del veicolo B',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه P عبور می‌کند بعد از تراموا و وسیله نقلیه G, اما قبل از وسیله نقلیه B',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_32_4',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo P transita contemporaneamente al veicolo B, ma dopo il tram',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه P عبور می‌کند همزمان به وسیله نقلیه B, اما بعد از تراموا',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_32_5',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo P ha la precedenza su tutti i veicoli',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه P حق تقدم دارد نسبت به همه وسایل نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_32_6',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo P deve dare la precedenza solo al veicolo proveniente dalla sua destra',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه P باید حق تقدم بدهد فقط وسیله نقلیه نسبت بهبه راست',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_33_1',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo N deve attendere il transito del veicolo E',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه N باید منتظر بماند عبور وسیله نقلیه E',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_33_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo E deve attendere il transito del veicolo L',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه E باید منتظر بماند عبور وسیله نقلیه L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_33_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R deve attendere il transito dei veicoli E ed N',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R باید منتظر بماند عبور وسایل نقلیه E و N',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_33_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli transitano nell’ordine: L, E, N, R',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: L, E, N, R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_33_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R (filobus) ha la precedenza sugli altri veicoli',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R (اتوبوس برقی) حق تقدم دارد نسبت به دیگروسایل نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_33_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo E deve attendere il transito del veicolo R',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه E باید منتظر بماند عبور وسیله نقلیه R',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_33_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo L deve attendere il transito del veicolo R',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه L باید منتظر بماند عبور وسیله نقلیه R',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_33_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo E deve attendere il transito dei veicoli N e R',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه E باید منتظر بماند عبور وسایل نقلیه N و R',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_33_9',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo E deve attendere il transito del veicolo N',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه E باید منتظر بماند عبور وسیله نقلیه N',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_33_10',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli transitano nell’ordine: R, L, E, N',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: R, L, E, N',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_34_1',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo E deve dare la precedenza al veicolo L',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه E باید به وسیله نقلیه L حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_34_2',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo E deve dare la precedenza al veicolo proveniente dalla sua destra',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه E باید حق تقدم بدهد وسیله نقلیه نسبت بهبه راست',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_34_3',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo E non ha l’obbligo di dare la precedenza al filobus',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه E نه موظف است حق تقدم بدهد اتوبوس برقی',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_34_4',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo E passa prima dell’autocarro N, dopo il transito del veicolo L',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه E عبور می‌کند قبل از’کامیون N, بعد از عبور وسیله نقلیه L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_34_5',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo E passa dopo il filobus ma prima del veicolo N',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه E عبور می‌کند بعد از اتوبوس برقی اما قبل از وسیله نقلیه N',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_34_6',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo E deve dare la precedenza all’autocarro perché prosegue diritto',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه E باید حق تقدم بدهد به’کامیون زیرا حرکت می‌کند مستقیم',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_34_7',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo E ha la precedenza sui veicoli provenienti da destra e da sinistra',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه E حق تقدم دارد نسبت بهوسایل نقلیه آمده به راست و به چپ',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_34_8',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo E passa per primo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه E عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_35_1',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo D passa per primo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه D عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_35_2',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo D non ha l’obbligo di dare la precedenza ad alcun veicolo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه D نه موظف است حق تقدم بدهد به هیچ وسیله نقلیه‌ای',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_35_3',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo D non ha l’obbligo di dare la precedenza al veicolo A',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه D نه موظف است به وسیله نقلیه A حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_35_4',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo D passa per terzo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه D عبور می‌کند سوم',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_35_5',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo D ha l’obbligo di dare la precedenza a tutti i veicoli',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه D موظف است حق تقدم بدهد به همه وسایل نقلیه',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_35_6',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo D ha l’obbligo di dare la precedenza al veicolo E, che prosegue diritto',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه D موظف است به وسیله نقلیه E حق تقدم بدهد, که مستقیم حرکت می‌کند',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_36_1',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A passa per ultimo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_36_2',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A deve dare la precedenza ai veicoli E e S',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A باید به وسایل نقلیه E و S حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_36_3',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A prima di impegnare l’incrocio deve attendere il transito, nell’ordine, dei veicoli D, E e S',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A قبل از وارد شود تقاطع باید منتظر بماند عبور, در’, وسایل نقلیه D, E و S',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_36_4',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A ha la destra libera',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A سمت راستش آزاد است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_36_5',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A passa contemporaneamente al veicolo D',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A عبور می‌کند همزمان به وسیله نقلیه D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_36_6',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A passa dopo i veicoli E e S, ma prima del veicolo D',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A عبور می‌کند بعد از وسایل نقلیه E و S, اما قبل از وسیله نقلیه D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_36_7',
      italianText: 'Nell’incrocio rappresentato nella figura il conducente del veicolo A deve dare la precedenza solo al veicolo che prosegue diritto e non a quelli che svoltano',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، راننده وسیله نقلیه A باید حق تقدم بدهد فقط وسیله نقلیه که مستقیم حرکت می‌کند و نه به که',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_37_1',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura il veicolo F deve attendere il transito del veicolo A',
      farsiTranslation: 'صحیح: درتقاطع در شکل وسیله نقلیه F باید منتظر بماند عبور وسیله نقلیه A',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_37_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura il veicolo L deve attendere il transito dei veicoli A ed F',
      farsiTranslation: 'صحیح: درتقاطع در شکل وسیله نقلیه L باید منتظر بماند عبور وسایل نقلیه A و F',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_37_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura il veicolo A deve attendere il transito del veicolo H',
      farsiTranslation: 'صحیح: درتقاطع در شکل وسیله نقلیه A باید منتظر بماند عبور وسیله نقلیه H',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_37_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura il veicolo L deve transitare per ultimo',
      farsiTranslation: 'صحیح: درتقاطع در شکل وسیله نقلیه L باید عبور کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_37_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura il veicolo H transita per primo',
      farsiTranslation: 'صحیح: درتقاطع در شکل وسیله نقلیه H عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_37_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura i veicoli debbono transitare nell’ordine: H,A, F, L',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: H, A, F, L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_37_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura i veicoli devono transitare nell’ordine: A, F, L, H',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: A, F, L, H',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_37_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura il veicolo F deve transitare per primo',
      farsiTranslation: 'غلط: درتقاطع در شکل وسیله نقلیه F باید عبور کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_37_9',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura il veicolo H deve attendere il transito del veicolo L',
      farsiTranslation: 'غلط: درتقاطع در شکل وسیله نقلیه H باید منتظر بماند عبور وسیله نقلیه L',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_37_10',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura il veicolo H deve attendere il transito del veicolo F',
      farsiTranslation: 'غلط: درتقاطع در شکل وسیله نقلیه H باید منتظر بماند عبور وسیله نقلیه F',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_37_11',
      italianText: 'Secondo le norme di precedenza nell’incrocio in figura il veicolo A deve attendere il transito del veicolo F',
      farsiTranslation: 'غلط: درتقاطع در شکل وسیله نقلیه A باید منتظر بماند عبور وسیله نقلیه F',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_38_1',
      italianText: 'Nella situazione rappresentata in figura il veicolo A deve attendere il transito dei veicoli C ed R',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه A باید منتظر بماند عبور وسایل نقلیه C و R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_38_2',
      italianText: 'Nella situazione rappresentata in figura i veicoli transitano nell’ordine: C, R, A, H',
      farsiTranslation: 'صحیح: وسایل نقلیه به این ترتیب عبور می‌کنند: C, R, A, H',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_38_3',
      italianText: 'Nella situazione rappresentata in figura il veicolo H deve attendere il transito dei veicoli C, R, A',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه H باید منتظر بماند عبور وسایل نقلیه C, R, A',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_38_4',
      italianText: 'Nella situazione rappresentata in figura il veicolo H deve transitare per ultimo',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه H باید عبور کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_38_5',
      italianText: 'Nella situazione rappresentata in figura il veicolo R deve attendere il transito del veicolo C',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه R باید منتظر بماند عبور وسیله نقلیه C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_38_6',
      italianText: 'Nella situazione rappresentata in figura il veicolo C transita per primo',
      farsiTranslation: 'صحیح: در وضعیت نشان داده شده در شکل، وسیله نقلیه C عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_38_7',
      italianText: 'Nella situazione rappresentata in figura i veicoli transitano nell’ordine: C, R, H, A',
      farsiTranslation: 'غلط: وسایل نقلیه به این ترتیب عبور می‌کنند: C, R, H, A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_38_8',
      italianText: 'Nella situazione rappresentata in figura il veicolo C deve attendere il transito del veicolo H',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه C باید منتظر بماند عبور وسیله نقلیه H',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_38_9',
      italianText: 'Nella situazione rappresentata in figura il veicolo A deve attendere il transito del veicolo H',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه A باید منتظر بماند عبور وسیله نقلیه H',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_38_10',
      italianText: 'Nella situazione rappresentata in figura il veicolo R deve attendere il transito dei veicoli H ed A',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه R باید منتظر بماند عبور وسایل نقلیه H و به',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_38_11',
      italianText: 'Nella situazione rappresentata in figura il veicolo C deve attendere il transito dei veicoli R, A, H',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه C باید منتظر بماند عبور وسایل نقلیه R, A, H',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_38_12',
      italianText: 'Nella situazione rappresentata in figura il veicolo R deve attendere il transito del veicolo H',
      farsiTranslation: 'غلط: در وضعیت نشان داده شده در شکل، وسیله نقلیه R باید منتظر بماند عبور وسیله نقلیه H',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_39_1',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo S transita prima del veicolo R',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه S عبور می‌کند قبل از وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_39_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo S transita prima di tutti gli altri veicoli',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه S عبور می‌کند قبل از همه دیگروسایل نقلیه',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_39_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli transitano nell’ordine: S, A, E, R',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: S, A, E, R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_39_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A deve dare la precedenza al veicolo S',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A باید به وسیله نقلیه S حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_39_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R transita per ultimo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_39_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo E deve attendere il transito del veicolo R',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه E باید منتظر بماند عبور وسیله نقلیه R',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_39_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R impegna per primo l’incrocio e si ferma al centro di esso',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R وارد می‌شود به اول تقاطع و توقف می‌کند در مرکز آن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_39_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A deve transitare dopo il veicolo E',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A باید عبور کند بعد از وسیله نقلیه E',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_39_9',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A deve transitare per ultimo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A باید عبور کند آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_39_10',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli transitano nell’ordine: E, R, S, A',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: E, R, S, A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_39_11',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A deve attendere che siano transitati i veicoli S ed E',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A باید منتظر بماند که عبور کرده‌اند وسایل نقلیه S و E',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_40_1',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A transita dopo il veicolo R',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند بعد از وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_40_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R non deve dare la precedenza ad alcun veicolo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R نباید حق تقدم بدهد به هیچ وسیله نقلیه‌ای',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_40_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo C deve dare la precedenza al veicolo A',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه C باید به وسیله نقلیه A حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_40_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli transitano nel seguente ordine: R, A, C',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: R, A, C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_40_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo C non deve dare la precedenza ad alcun veicolo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه C نباید حق تقدم بدهد به هیچ وسیله نقلیه‌ای',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_40_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli R e C transitano contemporaneamente',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه R و C عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_40_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli transitano nel seguente ordine: R, C, A',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: R, C, A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_40_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R deve attendere il transito dei veicoli C e A',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R باید منتظر بماند عبور وسایل نقلیه C و به',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_41_1',
      italianText: 'Nell’incrocio rappresentato in figura, il veicolo A passa dopo il veicolo R e il veicolo C passa dopo il veicolo A',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند بعد از وسیله نقلیه R و وسیله نقلیه C عبور می‌کند بعد از وسیله نقلیه A',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_41_2',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A passa prima del veicolo C e dopo il veicolo R',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند قبل از وسیله نقلیه C و بعد از وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_41_3',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R non deve dare la precedenza ad alcun veicolo',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R نباید حق تقدم بدهد به هیچ وسیله نقلیه‌ای',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_41_4',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli passano nell’ordine: R, A, C',
      farsiTranslation: 'صحیح: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: R, A, C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_41_5',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo C non deve dare la precedenza ad alcun veicolo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه C نباید حق تقدم بدهد به هیچ وسیله نقلیه‌ای',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_41_6',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo A passa prima del veicolo R e dopo il veicolo C',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند قبل از وسیله نقلیه R و بعد از وسیله نقلیه C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_41_7',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura i veicoli passano nell’ordine: R, C, A',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: R, C, A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_41_8',
      italianText: 'Secondo le norme di precedenza nell’incrocio rappresentato in figura il veicolo R passa per ultimo',
      farsiTranslation: 'غلط: طبق مقررات حق تقدم، در تقاطع نشان داده شده در شکل، وسیله نقلیه R عبور می‌کند آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_42_1',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli disimpegnano l’incrocio nel seguente ordine: H, D, B',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب تقاطع را تخلیه می‌کنند: H, D, B',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_42_2',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo B deve passare per ultimo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه B باید عبور کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_42_3',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo H non deve dare la precedenza ad alcun veicolo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه H نباید حق تقدم بدهد به هیچ وسیله نقلیه‌ای',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_42_4',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo D deve dare la precedenza al veicolo H',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه D باید به وسیله نقلیه H حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_42_5',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo D deve attendere che il veicolo B sia transitato',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه D باید منتظر بماند که وسیله نقلیه B عبور کرده است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_42_6',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli disimpegnano l’incrocio nel seguente ordine: H, B, D',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب تقاطع را تخلیه می‌کنند: H, B, D',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_42_7',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo B ha la precedenza sul veicolo D',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه B نسبت به وسیله نقلیه D حق تقدم دارد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_42_8',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli H e B possono passare contemporaneamente',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه H و B می‌توانند عبور کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_43_1',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo E non deve dare la precedenza ad alcun veicolo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه E نباید حق تقدم بدهد به هیچ وسیله نقلیه‌ای',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_43_2',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo C deve dare la precedenza al veicolo E',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه C باید به وسیله نقلیه E حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_43_3',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo L deve attendere il transito dei veicoli E e C',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه L باید منتظر بماند عبور وسایل نقلیه E و C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_43_4',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli disimpegnano l’incrocio nel seguente ordine: E, C, L',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب تقاطع را تخلیه می‌کنند: E, C, L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_43_5',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo C deve attendere il transito del veicolo L',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه C باید منتظر بماند عبور وسیله نقلیه L',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_43_6',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo E deve passare per ultimo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه E باید عبور کند آخر',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_43_7',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli disimpegnano l’incrocio nel seguente ordine: E, L, C',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب تقاطع را تخلیه می‌کنند: E, L, C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_43_8',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli C ed E passano contemporaneamente',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه C و E عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_44_1',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo E passa dopo il veicolo A e il veicolo B passa dopo il veicolo E',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه E عبور می‌کند بعد از وسیله نقلیه A و وسیله نقلیه B عبور می‌کند بعد از وسیله نقلیه E',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_44_2',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo A non deve dare la precedenza ad alcun veicolo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه A نباید حق تقدم بدهد به هیچ وسیله نقلیه‌ای',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_44_3',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo E ha diritto di precedenza sul veicolo B',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه E مستقیم وسیله نقلیه B',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_44_4',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo E passa prima di quello B, ma dopo il veicolo A',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه E عبور می‌کند قبل از وسیله نقلیه B, اما بعد از وسیله نقلیه A',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_44_5',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo B deve passare per ultimo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه B باید عبور کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_44_6',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo B non deve dare la precedenza ad alcun veicolo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه B نباید حق تقدم بدهد به هیچ وسیله نقلیه‌ای',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_44_7',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo A deve dare la precedenza al veicolo B',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه A باید به وسیله نقلیه B حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_44_8',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo B non deve dare la precedenza al veicolo E',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه B نه باید به وسیله نقلیه E حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_44_9',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli A e B passano contemporaneamente dopo il veicolo E',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه A و B عبور می‌کنند همزمان بعد از وسیله نقلیه E',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_44_10',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli A e B passano contemporaneamente prima del veicolo E',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه A و B عبور می‌کنند همزمان قبل از وسیله نقلیه E',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_45_1',
      italianText: 'Nell’intersezione di figura il veicolo T passa per ultimo',
      farsiTranslation: 'صحیح: در تقاطع شکل، وسیله نقلیه T عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_45_2',
      italianText: 'Nell’intersezione di figura l’ordine di precedenza dei veicoli è: R, B, D, T',
      farsiTranslation: 'صحیح: در تقاطع شکل، ترتیب حق تقدم وسایل نقلیه این است: R, B, D, T',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_45_3',
      italianText: 'Nell’intersezione di figura il veicolo D transita prima del veicolo B',
      farsiTranslation: 'غلط: در تقاطع شکل، وسیله نقلیه D عبور می‌کند قبل از وسیله نقلیه B',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_46_1',
      italianText: 'Nell’intersezione di figura il veicolo B deve dare la precedenza al veicolo S',
      farsiTranslation: 'صحیح: در تقاطع شکل، وسیله نقلیه B باید به وسیله نقلیه S حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_46_2',
      italianText: 'Nell’intersezione di figura l’ordine di transito dei veicoli è: S, B, L, D',
      farsiTranslation: 'صحیح: در تقاطع شکل، ترتیب عبور وسایل نقلیه این است: S, B, L, D',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_46_3',
      italianText: 'Nell’intersezione di figura l’ordine di transito dei veicoli è: S, B, D e L contemporaneamente',
      farsiTranslation: 'غلط: در تقاطع شکل، ترتیب عبور وسایل نقلیه این است: S, B, D و L همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_46_4',
      italianText: 'Nell’intersezione di figura l’ordine di transito dei veicoli è: S e D contemporaneamente, B, L',
      farsiTranslation: 'غلط: در تقاطع شکل، ترتیب عبور وسایل نقلیه این است: S و D همزمان, B, L',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_47_1',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli disimpegnano l’incrocio nel seguente ordine: A, E, V, H, C',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب تقاطع را تخلیه می‌کنند: A, E, V, H, C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_47_2',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo V ha la precedenza sul veicolo H',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه V نسبت به وسیله نقلیه H حق تقدم دارد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_47_3',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo C deve dare la precedenza al veicolo H',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه C باید به وسیله نقلیه H حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_47_4',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo E passa prima del veicolo H',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه E عبور می‌کند قبل از وسیله نقلیه H',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_47_5',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo H passa dopo i veicoli A, E, V',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه H عبور می‌کند بعد از وسایل نقلیه A, E, V',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_47_6',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo A passa per primo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_47_7',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli disimpegnano l’incrocio nel seguente ordine: A, H, C, E, V',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب تقاطع را تخلیه می‌کنند: A, H, C, E, V',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_47_8',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli disimpegnano l’incrocio nel seguente ordine: A, E, C, V, H',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب تقاطع را تخلیه می‌کنند: A, E, C, V, H',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_47_9',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo V deve attendere che siano transitati i veicoli A, E, H',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه V باید منتظر بماند که عبور کرده‌اند وسایل نقلیه A, E, H',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_47_10',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli A, V e C passano contemporaneamente',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه A, V و C عبور می‌کنند همزمان',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_47_11',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo V passa dopo i veicoli C e H',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه V عبور می‌کند بعد از وسایل نقلیه C و H',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_48_1',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli passano nel seguente ordine: C, A, P',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: C, A, P',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_48_2',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo A passa dopo il veicolo C',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند بعد از وسیله نقلیه C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_48_3',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo P passa per ultimo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه P عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_48_4',
      italianText: 'Nell’incrocio rappresentato in figura i veicoli passano nel seguente ordine: P, C, A',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: P, C, A',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_48_5',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo P passa prima del veicolo C',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه P عبور می‌کند قبل از وسیله نقلیه C',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_48_6',
      italianText: 'Nell’incrocio rappresentato in figura il veicolo P passa per primo perché ha la destra libera',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه P عبور می‌کند اول زیرا سمت راستش آزاد است',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_49_1',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli passano nel seguente ordine: S, N, C',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: S, N, C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_49_2',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo C transita per ultimo',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه C عبور می‌کند آخر',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_49_3',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N transita dopo il veicolo S e prima del veicolo C',
      farsiTranslation: 'صحیح: در تقاطع نشان داده شده در شکل، وسیله نقلیه N عبور می‌کند بعد از وسیله نقلیه S و قبل از وسیله نقلیه C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_49_4',
      italianText: 'Nell’incrocio rappresentato nella figura i veicoli passano nel seguente ordine: C, N, S',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسایل نقلیه به این ترتیب عبور می‌کنند: C, N, S',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_49_5',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo N transita dopo il veicolo C e dopo del veicolo S',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه N عبور می‌کند بعد از وسیله نقلیه C و بعد از وسیله نقلیه S',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_49_6',
      italianText: 'Nell’incrocio rappresentato nella figura il veicolo C transita per primo',
      farsiTranslation: 'غلط: در تقاطع نشان داده شده در شکل، وسیله نقلیه C عبور می‌کند اول',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_50_1',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura i veicoli devono transitare nel seguente ordine: C, A, L, R, E',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسایل نقلیه باید به این ترتیب عبور کنند: C, A, L, R, E',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_50_2',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo C transita per primo',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه C عبور می‌کند اول',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_50_3',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo A transita subito dopo il veicolo C',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند بلافاصله بعد از وسیله نقلیه C',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_50_4',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo E deve dare la precedenza ai veicoli R e L',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه E باید به وسایل نقلیه R و L حق تقدم بدهد',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_50_5',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo A transita prima del veicolo L',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه A عبور می‌کند قبل از وسیله نقلیه L',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_50_6',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo L transita prima del veicolo R',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه L عبور می‌کند قبل از وسیله نقلیه R',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_50_7',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo L transita dopo il veicolo A',
      farsiTranslation: 'صحیح: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه L عبور می‌کند بعد از وسیله نقلیه A',
      correctAnswer: 'Vero'
    },
    {
      id: 'q_14_50_8',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo E deve dare la precedenza al veicolo A',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه E باید به وسیله نقلیه A حق تقدم بدهد',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_50_9',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura i veicoli devono transitare nel seguente ordine: E, C, A, L, R',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسایل نقلیه باید به این ترتیب عبور کنند: E, C, A, L, R',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_50_10',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura il veicolo A deve attendere il passaggio del veicolo E',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسیله نقلیه A باید منتظر بماند عبور وسیله نقلیه E',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_50_11',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura qualunque veicolo può impegnare l’incrocio e fermarsi al centro di esso',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، هر وسیله نقلیه‌ای می‌تواند وارد شود به تقاطع و توقف کند در مرکز آن',
      correctAnswer: 'Falso'
    },
    {
      id: 'q_14_50_12',
      italianText: 'Dovendo attraversare l’incrocio rappresentato in figura i veicoli C e R transitano contemporaneamente dopo il passaggio del veicolo A',
      farsiTranslation: 'غلط: برای عبور از تقاطع نشان داده شده در شکل، وسایل نقلیه C و R عبور می‌کنند همزمان بعد از عبور وسیله نقلیه A',
      correctAnswer: 'Falso'
    }
  ]
};
