export interface Stage {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  badge: string;
}

export interface HadithItem {
  id: string;
  stageId: 'pra-nikah' | 'akad' | 'domestik' | 'finansial' | 'keintiman' | 'konflik' | 'perceraian' | 'pengasuhan';
  theme: string;
  pertemuan?: number;
  title: string;
  rawi: string;
  kitab: string;
  noHadis: string;
  matnArab: string;
  terjemahan: string;
  pemaknaanKonvensional: {
    ringkasan: string;
    poin: string[];
  };
  pemaknaanMubadalah: {
    ringkasan: string;
    illatHukum: string;
    poinKesalingan: string[];
    aplikasiHariIni: string[];
  };
  pilarTerkait: ('Mitsaqan Ghalizhan' | 'Zawaj' | "Mu'asyarah bi al-Ma'ruf" | 'Tasyawur' | 'Taradhin')[];
  tags: string[];
  quoteSnippet: string;
}

export const STAGES: Stage[] = [
  {
    id: 'pra-nikah',
    title: '1. Pra-Nikah & Khithbah',
    icon: 'Sparkles',
    tagline: 'Memilih Pasangan atas Dasar Akhlak, Kafa\'ah Takwa & Persetujuan Sukarela',
    badge: 'Fondasi Awal'
  },
  {
    id: 'akad',
    title: '2. Akad, Mahar & Perjanjian',
    icon: 'ScrollText',
    tagline: 'Mitsaqan Ghalizhan: Komitmen Janji Setara, Mahar Berkah & Syarat Perkawinan',
    badge: 'Ikatan Suci'
  },
  {
    id: 'domestik',
    title: '3. Keseharian & Kerja Domestik',
    icon: 'Home',
    tagline: 'Khidmah al-Bayt: Meneladani Nabi Bekerjasama Mengurus Rumah Tangga',
    badge: 'Keseharian Pasutri'
  },
  {
    id: 'finansial',
    title: '4. Finansial, Nafkah & Harta',
    icon: 'Wallet',
    tagline: 'Kemitraan Ekonomi: Nafkah Layak, Apresiasi Istri Bekerja & Larangan Menahan Harta',
    badge: 'Dapur & Rezeki'
  },
  {
    id: 'keintiman',
    title: '5. Keintiman & Hak Reproduksi',
    icon: 'HeartHandshake',
    tagline: 'Mula\'abah: Saling Membahagiakan Tanpa Pemaksaan (Consent) & Hak Reproduksi',
    badge: 'Relasi Ranjang'
  },
  {
    id: 'konflik',
    title: '6. Resolusi Konflik & Anti-KDRT',
    icon: 'ShieldAlert',
    tagline: 'Mengendalikan Marah, Mediasi Hakam & Menolak Segala Bentuk Kekerasan',
    badge: 'Manajemen Krisis'
  },
  {
    id: 'perceraian',
    title: '7. Perceraian & Gugat Khulu\'',
    icon: 'Scale',
    tagline: 'Tasrihun bi Ihsan: Gugat Cerai Istri yang Dilindungi, Larangan Talak Bida\'i & Masa Iddah',
    badge: 'Pascaperkawinan'
  },
  {
    id: 'pengasuhan',
    title: '8. Pengasuhan Anak & Hadhanah',
    icon: 'Users',
    tagline: 'Tarbiyah & Hadhanah: Hak Asuh Ibu, Kehangatan Ayah & Keadilan Antaranak',
    badge: 'Amanah Generasi'
  }
];

export const HADITHS_DATA: HadithItem[] = [
  // ==========================================
  // KLASTER 1: PRA-NIKAH & KHITHBAH
  // ==========================================
  {
    id: 'hadis-empat-kriteria',
    stageId: 'pra-nikah',
    theme: 'Kriteria Memilih Pasangan',
    pertemuan: 5,
    title: 'Empat Kriteria Memilih Pasangan: Menjadikan Karakter Agama Sebagai Fondasi',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari',
    noHadis: 'No. 5146',
    matnArab: 'تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ: لِمَالِهَا، وَلِحَسَبِهَا، وَجَمَالِهَا، وَلِدِينِهَا، فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ',
    terjemahan: 'Seorang perempuan biasanya dinikahi karena empat hal: karena hartanya, karena garis keturunannya (status sosial), karena parasnya yang rupawan, dan karena komitmen agamanya. Maka pilihlah yang memiliki komitmen agama (akhlak), niscaya kamu akan beruntung.',
    pemaknaanKonvensional: {
      ringkasan: 'Dipahami satu arah hanya sebagai instruksi bagi laki-laki dalam menilai calon istri. Kata "din" sering disempitkan sekadar performa ibadah ritual lahiriah (busana, hafalan, kesalehan simbolik).',
      poin: [
        'Laki-laki diposisikan sebagai subjek yang memilih, perempuan sebagai objek yang diperiksa.',
        'Mengesankan harta dan nasab sebagai anjuran, padahal redaksinya deskriptif tentang kebiasaan umum manusia.',
        'Jarang ditarik sebagai hak setara bagi perempuan dalam memilih calon suami.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Kriteria ini berlaku resiprokal: sebagaimana laki-laki mencari istri dengan karakter akhlak yang baik (dzatu din/khuluq), perempuan pun berhak mencari suami yang berakhlak mulia (dzu din/khuluq) yang mampu memperlakukan pasangan secara bermartabat.',
      illatHukum: 'Kelanggengan hubungan ditopang oleh kualitas karakter dan kedewasaan relasi, bukan fisik atau materi yang fana.',
      poinKesalingan: [
        'Hak memilih dan menimbang calon berlaku setara bagi laki-laki dan perempuan.',
        '"Din" bukan sekadar simbol ritual, melainkan bagaimana seseorang mengelola emosi dan menghormati sesama.',
        'Keluarga berperan sebagai ruang tasyawur (musyawarah), bukan pemaksa kehendak.'
      ],
      aplikasiHariIni: [
        'Periksa bagaimana calon pasangan memperlakukan ibunya, pekerja rumah tangga, dan orang yang tidak berkuasa atas dirinya.',
        'Lakukan pertukaran informasi dua arah secara jujur: riwayat kesehatan, visi keluarga, dan rencana pembagian peran.'
      ]
    },
    pilarTerkait: ['Zawaj', 'Taradhin', 'Tasyawur'],
    tags: ['Kriteria Pasangan', 'Pra-Nikah', 'Kesepadanan Takwa', 'Taaruf'],
    quoteSnippet: 'Agama yang sejati dalam pernikahan bukan sekadar simbol kesalehan lahiriah, melainkan kematangan akhlak dalam memperlakukan pasangan hidup secara bermartabat.'
  },
  {
    id: 'hadis-khansa-tolak-nikah-paksa',
    stageId: 'pra-nikah',
    theme: 'Hak Persetujuan Perempuan & Menolak Kawin Paksa',
    pertemuan: 5,
    title: 'Pembatalan Nikah Paksa Khansa binti Khidzam: Hak Prerogatif Persetujuan Mempelai',
    rawi: 'Khansa binti Khidzam al-Anshariyyah ra',
    kitab: 'Sahih al-Bukhari',
    noHadis: 'No. 5138',
    matnArab: 'أَنَّ أَبَاهَا زَوَّجَهَا وَهِيَ ثَيِّبٌ فَكَرِهَتْ ذَلِكَ، فَأَتَتْ رَسُولَ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَرَدَّ نِكَاحَهُ',
    terjemahan: 'Bahwa ayahnya telah menikahkan dirinya (dengan seorang laki-laki), padahal ia berstatus janda dan ia tidak menyukai pernikahan tersebut. Maka ia mendatangi Rasulullah ﷺ, lalu beliau membatalkan (memfasakh) akad pernikahan tersebut.',
    pemaknaanKonvensional: {
      ringkasan: 'Sebagian ulama membatasi hak penolakan ini hanya untuk janda (tsayyib), sementara perawan (bikr) dianggap masih boleh dipaksa oleh wali mujbir (ayah/kakek).',
      poin: [
        'Mempertahankan konsep hak paksa wali (ijbar) atas anak gadis.',
        'Memandang perempuan muda belum cakap menentukan masa depannya sendiri.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Preseden pembatalan nikah oleh Nabi ﷺ menegaskan bahwa akad nikah adalah perjanjian suci (mitsaqan ghalizhan) yang menuntut kerelaan penuh (taradhin) dari kedua mempelai yang akan menjalaninya. Pemaksaan dari siapa pun, termasuk orang tua, membatalkan esensi kerelaan akad.',
      illatHukum: 'Pernikahan yang dibangun di atas paksaan bertentangan dengan tujuan mawaddah wa rahmah.',
      poinKesalingan: [
        'Hak menentukan pasangan hidup berada di tangan yang bersangkutan, baik laki-laki maupun perempuan, janda maupun perawan.',
        'Wali bertindak sebagai pelindung dan pendamping musyawarah, bukan pemilik tubuh anak.',
        'Dalam hukum Indonesia, persetujuan kedua mempelai adalah syarat sah perkawinan (UU Perkawinan No. 1/1974 & KHI).'
      ],
      aplikasiHariIni: [
        'Hentikan segala bentuk perjodohan paksa atau pernikahan di bawah tekanan keluarga.',
        'Dengarkan secara saksama suara dan kerelaan anak perempuan sebelum menetapkan lamaran.'
      ]
    },
    pilarTerkait: ['Taradhin', 'Mitsaqan Ghalizhan', 'Tasyawur'],
    tags: ['Nikah Paksa', 'Hak Perempuan', 'Wali Mujbir', 'Persetujuan Mempelai'],
    quoteSnippet: 'Rasulullah ﷺ membatalkan pernikahan yang dipaksakan orang tua, menegaskan bahwa kerelaan mempelai adalah kunci sahnya ikatan perkawinan.'
  },
  {
    id: 'hadis-izin-gadis-janda',
    stageId: 'pra-nikah',
    theme: 'Izin dan Konfirmasi Persetujuan Calon Mempelai',
    title: 'Konfirmasi Persetujuan Calon Mempelai: Larangan Menikahkan Tanpa Izin Terbuka',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 5136, Muslim No. 1419',
    matnArab: 'لَا تُنْكَحُ الأَيِّمُ حَتَّى تُسْتَأْمَرَ، وَلَا تُنْكَحُ البِكْرُ حَتَّى تُسْتَأْذَنَ. قَالُوا: يَا رَسُولَ اللَّهِ، وَكَيْفَ إِذْنُهَا؟ قَالَ: أَنْ تَسْكُتَ',
    terjemahan: 'Janganlah seorang janda dinikahkan sampai ia dimintai perintahnya (persetujuan tegasnya), dan janganlah seorang gadis dinikahkan sampai dimintai izinnya. Para sahabat bertanya: "Wahai Rasulullah, bagaimana bentuk izinnya?" Beliau menjawab: "Jika ia diam (karena malu, namun tidak menolak)."',
    pemaknaanKonvensional: {
      ringkasan: 'Diamnya gadis dipahami sebagai persetujuan otomatis, sehingga jika seorang gadis menangis atau diam karena tertekan, tetap dianggap telah menyetujui.',
      poin: [
        'Mengabaikan tekanan psikologis di mana gadis diam karena rasa takut pada keluarga.',
        'Menempatkan persetujuan sebatas formalitas tanpa dialog mendalam.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ mengajarkan kehati-hatian tertinggi agar perempuan tidak dikorbankan. Diam hanya menjadi tanda izin jika suasana bebas dari intimidasi dan keterpaksaan. Jika ada keraguan atau penolakan lisan, diam tersebut gugur dan tidak dapat dijadikan dasar akad.',
      illatHukum: 'Kepastian persetujuan sukarela (taradhin) sebelum ikatan suci diresmikan.',
      poinKesalingan: [
        'Mempelai laki-laki dan perempuan sama-sama harus menyatakan kesediaannya secara merdeka.',
        'Masyarakat modern menuntut izin yang lugas, tertulis, dan bebas manipulasi di hadapan penghulu/KUA.'
      ],
      aplikasiHariIni: [
        'Pastikan calon pengantin perempuan ditanya secara privat tanpa intervensi pihak luar yang menekannya.',
        'Bangun keterbukaan sejak dini antara orang tua dan anak dalam mendiskusikan calon pasangan.'
      ]
    },
    pilarTerkait: ['Taradhin', 'Tasyawur'],
    tags: ['Izin Menikah', 'Persetujuan Mempelai', 'Hak Perempuan'],
    quoteSnippet: 'Tidak sah menikahkan seseorang sebelum meminta kerelaannya; pernikahan suci berdiri di atas persetujuan yang merdeka, bukan kepatuhan yang dipaksakan.'
  },
  {
    id: 'hadis-barirah-mughits',
    stageId: 'pra-nikah',
    theme: 'Hak Otonomi Memilih & Menolak Cinta Pasangan',
    title: 'Kisah Barirah & Mughits: Nabi ﷺ Tidak Memaksakan Cinta yang Tidak Diridhai',
    rawi: 'Ibnu Abbas ra',
    kitab: 'Sahih al-Bukhari',
    noHadis: 'No. 5283',
    matnArab: 'فَقَالَ لَهَا النَّبِيُّ ﷺ: لَوْ رَاجَعْتِهِ؟ قَالَتْ: يَا رَسُولَ اللَّهِ، تَأْمُرُنِي؟ قَالَ: إِنَّمَا أَنَا أَشْفَعُ. قَالَتْ: لَا حَاجَةَ لِي فِيهِ',
    terjemahan: 'Nabi ﷺ berkata kepada Barirah (yang memilih berpisah setelah merdeka, sementara suaminya Mughits menangis memohon): "Seandainya engkau mau rujuk kepadanya?" Barirah bertanya: "Wahai Rasulullah, apakah engkau memerintahkanku (sebagai wahyu)?" Nabi menjawab: "Aku hanya memberi syafaat (anjuran/saran)." Barirah menjawab tegas: "Aku tidak membutuhkan dirinya lagi."',
    pemaknaanKonvensional: {
      ringkasan: 'Kerap dikaji sebatas bab fiqh khiyar kemerdekaan budak (khiyarul \'itq) tanpa melihat dimensi hak otonomi cinta seorang perempuan.',
      poin: [
        'Dianggap sebagai kasus khusus budak perempuan yang dimerdekakan.',
        'Jarang ditarik sebagai prinsip bahwa cinta dan kelangsungan pernikahan tidak boleh dipaksakan.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ membedakan secara tegas antara perintah syariat yang mengikat dan anjuran empati manusiawi. Ketika Barirah menolak rujuk karena sudah tidak memiliki kecocokan rasa hati, Nabi ﷺ menghormati keputusannya dan tidak memaksakannya.',
      illatHukum: 'Pernikahan tidak dapat dipaksakan berjalan jika salah satu pihak mengalami ketidaknyamanan batin yang mendalam.',
      poinKesalingan: [
        'Hak menolak dan hak memilih pasangan adalah hak asasi perempuan yang diakui syariat.',
        'Rasa cinta dan kenyamanan psikologis tidak bisa dituntut dengan ancaman dosa.',
        'Bahkan seorang Nabi tidak memaksakan hak asasi perempuan dalam urusan jodoh.'
      ],
      aplikasiHariIni: [
        'Hormati hak seseorang untuk mengakhiri ta\'aruf atau menolak lamaran tanpa perlu menyudutkan atau mempermalukannya.',
        'Sadari bahwa ikatan rumah tangga tanpa kenyamanan rasa hati berpotensi melahirkan kezaliman harian.'
      ]
    },
    pilarTerkait: ['Taradhin', 'Zawaj'],
    tags: ['Barirah', 'Hak Menolak', 'Otonomi Perempuan', 'Khiyar'],
    quoteSnippet: 'Ketika Barirah menolak kembali kepada suaminya, Rasulullah ﷺ menghormati keputusannya, menegaskan bahwa cinta dan pernikahan tidak boleh dipaksakan.'
  },
  {
    id: 'hadis-mulaabah-jabir',
    stageId: 'pra-nikah',
    theme: 'Konsep Saling Membahagiakan',
    pertemuan: 5,
    title: 'Konsep Mula\'abah: Saling Menyenangkan Sejak Awal Niat Menikah',
    rawi: 'Jabir bin Abdillah ra',
    kitab: 'Sahih Muslim',
    noHadis: 'No. 4184',
    matnArab: 'قَالَ رَسُولُ اللَّهِ ﷺ: يَا جَابِرُ، أَفَلَا تَزَوَّجْتَ بِكْرًا تُلاَعِبُكَ وَتُلاَعِبُهَا؟',
    terjemahan: 'Rasulullah ﷺ berkata kepadaku: "Wahai Jabir, mengapa tidak menikahi gadis (perawan) sehingga ia bisa bersenang-senang denganmu (tula\'ibuka) dan engkau pun bisa bersenang-senang dengannya (tula\'ibuha)?"',
    pemaknaanKonvensional: {
      ringkasan: 'Sering dipotong sepihak untuk menganjurkan menikahi perawan dan mendiskreditkan janda, dengan fokus semata pada kepuasan seksual laki-laki.',
      poin: [
        'Kerap diterjemahkan sepotong ("agar ia menyenangkanmu") tanpa menerjemahkan "dan kamu menyenangkannya".',
        'Mengabaikan konteks jawaban Jabir yang kemudian diterima Nabi: Jabir memilih janda demi mengasuh adik-adiknya yang yatim.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Redaksi "tula\'ibuka wa tula\'ibuha" membuktikan bahwa kesenangan dalam pernikahan bersifat resiprokal sejak awal: pasutri dituntut saling membahagiakan, bukan satu pihak melayani dan pihak lain hanya dilayani.',
      illatHukum: 'Tujuan pernikahan adalah mewujudkan kebahagiaan bersama (mula\'abah) dan sakinah, bukan hierarki status sosial.',
      poinKesalingan: [
        'Nabi ﷺ sendiri menikahi Khadijah ra yang berstatus janda dan lebih tua 15 tahun sebagai cinta paling mendalam sepanjang hayat beliau.',
        'Status perawan/janda atau perjaka/duda bukan penentu kemuliaan seseorang; yang utama adalah kapasitas membangun cinta dan kemaslahatan rumah tangga.'
      ],
      aplikasiHariIni: [
        'Menghilangkan stigma terhadap perempuan atau laki-laki yang berstatus janda atau duda.',
        'Fokus menilai kecocokan visi hidup, selera humor yang tidak merendahkan, dan kesiapan saling mendukung.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Zawaj', 'Taradhin'],
    tags: ['Mulaabah', 'Kesetaraan Pasangan', 'Status Pernikahan'],
    quoteSnippet: 'Kebahagiaan pernikahan terwujud saat kedua insan saling berikhtiar membahagiakan satu sama lain: ia bersenang-senang denganmu, dan kamu pun bersenang-senang dengannya.'
  },

  // ==========================================
  // KLASTER 2: AKAD, MAHAR & PERJANJIAN
  // ==========================================
  {
    id: 'hadis-syarat-akad',
    stageId: 'akad',
    theme: 'Perjanjian Perkawinan (Prenuptial Agreement)',
    pertemuan: 6,
    title: 'Pemenuhan Syarat Akad: Kewajiban Mengikat Janji Pernikahan',
    rawi: 'Uqbah bin Amir ra',
    kitab: 'Sahih al-Bukhari',
    noHadis: 'No. 2760',
    matnArab: 'أَحَقُّ الشُّرُوطِ أَنْ تُوفُوا بِهِ مَا اسْتَحْلَلْتُمْ بِهِ الْفُرُوجَ',
    terjemahan: 'Syarat-syarat perjanjian yang paling wajib kalian penuhi adalah syarat yang dengannya kalian menghalalkan hubungan pernikahan.',
    pemaknaanKonvensional: {
      ringkasan: 'Kerap dipersempit hanya seputar keabsahan syarat teknis rukun akad (ijab-qabul, mahar, saksi) tanpa memberi ruang kesepakatan tertulis bagi perempuan.',
      poin: [
        'Dipandang tabu jika calon istri mengajukan syarat-syarat tertulis menjelang akad.',
        'Dianggap bahwa seluruh hak berada di tangan suami setelah ijab kabul selesai.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Hadis ini adalah dasar legal syariat bagi keabsahan perjanjian perkawinan (syuruth an-nikah). Syarat yang disepakati bersama bersifat mengikat secara hukum bagi kedua mempelai.',
      illatHukum: 'Menjaga kepastian komitmen dan melindungi hak-hak rentan agar tidak terzalimi setelah berlangsungnya ikatan akad.',
      poinKesalingan: [
        'Calon istri dan calon suami sama-sama berhak merumuskan poin perjanjian pra-nikah (komitmen tidak poligami, izin studi/karier, pembagian harta).',
        'Pelanggaran atas syarat pernikahan adalah pengkhianatan atas nama Allah yang dengannya hubungan itu dihalalkan.',
        'Mazhab Hanbali mewajibkan seluruh syarat yang disepakati untuk dipenuhi selama tidak menghalalkan yang haram.'
      ],
      aplikasiHariIni: [
        'Membuat perjanjian perkawinan di hadapan Notaris/KUA untuk meneguhkan kejelasan hak nafkah, pembagian harta bersama, dan komitmen anti-kekerasan.',
        'Menjadikan musyawarah pra-akad sebagai sarana menguji komitmen integritas calon pasangan.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', 'Tasyawur', 'Taradhin'],
    tags: ['Perjanjian Kawin', 'Akad Nikah', 'Syarat Sah', 'Komitmen'],
    quoteSnippet: 'Perjanjian yang paling suci dan wajib ditepati adalah janji yang diucapkan saat menghalalkan ikatan cinta perkawinan.'
  },
  {
    id: 'hadis-mahar-berkah',
    stageId: 'akad',
    theme: 'Filosofi Mahar Memudahkan Perkawinan',
    title: 'Mahar yang Membawa Berkah: Larangan Memberatkan & Mengomersialisasikan Perkawinan',
    rawi: 'Aisyah ra',
    kitab: 'Musnad Ahmad',
    noHadis: 'No. 24595',
    matnArab: 'إِنَّ أَعْظَمَ النِّكَاحِ بَرَكَةً أَيْسَرُهُ مَئُونَةً',
    terjemahan: 'Sesungguhnya pernikahan yang paling agung keberkahannya adalah yang paling mudah (ringan) biayanya (maharnya).',
    pemaknaanKonvensional: {
      ringkasan: 'Sering dipakai untuk menekan pihak perempuan agar menerima mahar serendah mungkin tanpa menimbang hak perlindungan ekonominya.',
      poin: [
        'Membaca hadis hanya sebagai tuntutan kepada calon istri.',
        'Tidak mengimbangi dengan anjuran bagi calon suami untuk bersikap dermawan sesuai kelapangan hartanya.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Esensi hadis ini adalah penolakan atas budaya gengsi, komersialisasi jodoh, dan adat yang memberatkan anak muda untuk menikah. Mahar adalah simbol penghormatan cinta, bukan harga beli (*tsaman*) atas tubuh perempuan.',
      illatHukum: 'Menghilangkan hambatan sosial-finansial agar pernikahan yang sah dan sehat mudah terlaksana.',
      poinKesalingan: [
        'Pihak keluarga tidak boleh membebankan mahar/hantaran yang melampaui kemampuan calon pengantin.',
        'Pria yang berkecukupan tetap dianjurkan memberi mahar yang pantas dan memuliakan calon istrinya.',
        'Mahar adalah hak milik mutlak istri, bukan milik orang tua atau keluarga.'
      ],
      aplikasiHariIni: [
        'Sepakati mahar yang bermakna dan terjangkau tanpa terjebak persaingan gengsi adat atau status sosial.',
        'Fokuskan dana pernikahan pada tabungan kehidupan nyata setelah perkawinan, bukan kemewahan sehari.'
      ]
    },
    pilarTerkait: ['Taradhin', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Mahar Berkah', 'Akad Nikah', 'Pernikahan Sederhana', 'Kemudahan Syariat'],
    quoteSnippet: 'Keberkahan pernikahan tidak diukur dari mahalnya pesta, melainkan dari kemudahan dan ketulusan komitmen untuk saling memuliakan.'
  },
  {
    id: 'hadis-mahar-cincin-besi-quran',
    stageId: 'akad',
    theme: 'Mahar Non-Materiil & Edukatif',
    title: 'Mahar Cincin Besi & Hafalan Surah: Menghargai Nilai Pengetahuan & Integritas',
    rawi: 'Sahl bin Sa\'ad ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 5087, Muslim No. 1425',
    matnArab: 'فَقَالَ: الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ... قَالَ: مَعِي سُورَةُ كَذَا وَسُورَةُ كَذَا، قَالَ: قَدْ مَلَّكْتُكَهَا بِمَا مَعَكَ مِنَ القُرْآنِ',
    terjemahan: 'Nabi ﷺ bersabda kepada pria yang hendak menikah namun miskin: "Carilah mahar walau hanya cincin dari besi." Ketika ia tetap tidak memilikinya, Nabi bertanya: "Surah apa yang kau hafal?" Ia menjawab: "Surah ini dan itu." Nabi bersabda: "Aku nikahkan engkau dengannya dengan mahar mengajarkan surah Al-Qur\'an yang kau miliki."',
    pemaknaanKonvensional: {
      ringkasan: 'Dijadikan dalil fiqh tentang bolehnya mahar berupa jasa pengajaran Al-Qur\'an ketika uang tidak tersedia.',
      poin: [
        'Fokus pada hukum sah/batalnya mahar non-materi.',
        'Jarang ditarik sebagai komitmen pendidikan berkelanjutan dalam keluarga.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ membuktikan bahwa kekurangan modal materiil tidak menghalangi seseorang menikah jika ia memiliki kekayaan karakter, ilmu, dan komitmen mendidik. Mahar berupa pengajaran Al-Qur\'an menempatkan relasi pasutri sebagai majelis belajar bersama.',
      illatHukum: 'Mahar sebagai ikrar kesiapan membimbing dan mendampingi pasangan menuju kebaikan dunia-akhirat.',
      poinKesalingan: [
        'Investasi ilmu dan kebaikan akhlak lebih bernilai tinggi daripada harta benda.',
        'Suami dan istri saling mengedukasi dan bertumbuh dalam kecerdasan spiritual bersama.'
      ],
      aplikasiHariIni: [
        'Jadikan komitmen saling mengajarkan kebaikan dan ilmu sebagai bagian dari janji kehidupan rumah tangga.',
        'Jangan membatalkan niat baik pernikahan semata-mata karena keterbatasan nominal materiil di awal.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', 'Zawaj'],
    tags: ['Mahar Quran', 'Akad Nikah', 'Pendidikan Pasutri', 'Integritas'],
    quoteSnippet: 'Ketika harta tiada, Nabi ﷺ menikahkan sahabat dengan mahar ilmu Al-Qur\'an: menegaskan bahwa nilai tertinggi manusia terletak pada pengetahuan dan integritasnya.'
  },

  // ==========================================
  // KLASTER 3: KESEHARIAN & KHIDMAH DOMESTIK
  // ==========================================
  {
    id: 'hadis-khidmah-ahlihi',
    stageId: 'domestik',
    theme: 'Pembagian Kerja Rumah Tangga (Khidmah al-Bayt)',
    title: 'Keteladanan Nabi ﷺ: Menjahit Baju dan Melayani Keperluan Rumah Tangga',
    rawi: 'Aisyah ra (dituturkan kepada Urwah & Al-Aswad)',
    kitab: 'Sahih al-Bukhari & Musnad Ahmad',
    noHadis: 'Bukhari No. 680, Ahmad No. 24902',
    matnArab: 'كَانَ يَكُونُ فِي مِهْنَةِ أَهْلِهِ تَعْنِي خِدْمَةَ أَهْلِهِ، فَإِذَا حَضَرَتِ الصَّلَاةُ خَرَجَ إِلَى الصَّلَاةِ... يَخْصِفُ نَعْلَهُ، وَيُرَقِّعُ ثَوْبَهُ، وَيَحْلِبُ شَاتَهُ',
    terjemahan: 'Nabi ﷺ biasa membantu pekerjaan keluarganya — melayani kebutuhan keluarganya. Apabila telah masuk waktu shalat, beliau bergegas keluar untuk shalat... Beliau memperbaiki sandalnya sendiri, menambal bajunya, dan memerah susu kambingnya sendiri.',
    pemaknaanKonvensional: {
      ringkasan: 'Hanya dibaca sebagai akhlak kesunahan/zuhud pribadi Nabi, namun dalam fatwa fiqh praktis pekerjaan domestik tetap dipaksakan sebagai tugas kodrati istri.',
      poin: [
        'Laki-laki yang mengerjakan urusan dapur atau mencuci sering dianggap "takut istri" atau direndahkan maskulinitasnya.',
        'Mengabaikan fakta bahwa mayoritas fuqaha (Syafi\'i & Hanbali) justru tidak mewajibkan istri mencuci baju dan memasak.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Kerja domestik adalah ruang kemitraan (musyarakah) dan tolong-menolong (ta\'awun). Nabi ﷺ sebagai manusia termulia dan pemimpin umat mempraktikkan langsung khidmah al-bayt tanpa merasa gengsi.',
      illatHukum: 'Rumah tangga adalah ruang hidup bersama; kenyamanan dan kebersihannya adalah tanggung jawab bersama sesuai kelapangan waktu masing-masing.',
      poinKesalingan: [
        'Tidak ada jenis kelamin dalam pekerjaan rumah: menyapu, mencuci, dan memasak adalah keterampilan hidup dasar manusia.',
        'Suami yang membantu istri di rumah sedang mengamalkan sunnah fi\'liyyah Nabi ﷺ secara nyata.',
        'Ketika istri ikut lelah bekerja mencari nafkah, pembagian kerja domestik menjadi kewajiban etis yang tak terelakkan.'
      ],
      aplikasiHariIni: [
        'Buat pembagian tugas rumah tangga yang adil dan disepakati bersama pasangan (giliran mencuci piring, menjaga anak, merapikan rumah).',
        'Hentikan ejekan budaya yang menertawakan suami yang cekatan mengerjakan pekerjaan rumah tangga.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Zawaj', 'Tasyawur'],
    tags: ['Kerja Domestik', 'Khidmah al-Bayt', 'Sunnah Nabi di Rumah', 'Kemitraan'],
    quoteSnippet: 'Bekerja membersihkan rumah dan melayani keluarga bukanlah tanda kelemahan, melainkan kemuliaan akhlak yang dicontohkan langsung oleh Rasulullah ﷺ.'
  },
  {
    id: 'hadis-tidak-mencela-makanan',
    stageId: 'domestik',
    theme: 'Etika Menghargai Upaya Pasangan',
    title: 'Adab Berkeluarga: Menahan Diri dari Mencela Masakan & Jerih Payah Pasangan',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari',
    noHadis: 'No. 5409',
    matnArab: 'مَا عَابَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ طَعَامًا قَطُّ، إِنِ اشْتَهَاهُ أَكَلَهُ، وَإِنْ كَرِهَهُ تَرَكَهُ',
    terjemahan: 'Nabi ﷺ sama sekali tidak pernah mencela makanan. Jika beliau menyukainya, beliau memakannya; dan jika beliau tidak menyukainya, beliau meninggalkannya (tanpa mencelanya).',
    pemaknaanKonvensional: {
      ringkasan: 'Ditempatkan hanya dalam bab adab makan pribadi secara umum agar tidak menghina rezeki Allah.',
      poin: [
        'Jarang ditarik ke dalam dinamika psikologis relasi pasutri di meja makan.',
        'Banyak suami menganggap sah memarahi istri jika hidangan tidak sesuai selera.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Prinsip kaff al-adza (menahan diri dari menyakiti) berlaku pada komentar lisan di ranah domestik. Menghargai jerih payah pasangan yang sudah lelah menyiapkan hidangan adalah pilar keharmonisan.',
      illatHukum: 'Menjaga kehormatan dan perasaan pasangan; celaan atas kerja rumah tangga adalah benih kekerasan verbal.',
      poinKesalingan: [
        'Jika tidak berselera, tahan lisan dari kata-kata yang menjatuhkan martabat pasangan.',
        'Saling memuji dan berterima kasih atas setiap usaha pasangan merawat rumah tangga.',
        'Berlaku dua arah: istri pun menahan diri dari mencela nafkah atau pemberian suami yang sedang terbatas.'
      ],
      aplikasiHariIni: [
        'Ucapkan terima kasih dan puji pasangan atas makanan atau bantuan yang telah disiapkannya.',
        'Bicarakan preferensi selera secara santai dan penuh kelembutan di waktu yang tenang.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Taradhin'],
    tags: ['Apresiasi Pasangan', 'Adab Lisan', 'Kaff al-Adza'],
    quoteSnippet: 'Menahan lisan dari celaan dan menghargai jerih payah pasangan adalah sedekah akhlak yang menjaga kehangatan rumah tangga.'
  },
  {
    id: 'hadis-lomba-lari-aisyah',
    stageId: 'domestik',
    theme: 'Keakraban, Rekreasi & Humor Pasutri',
    title: 'Lomba Lari Nabi & Aisyah: Menumbuhkan Canda, Kesenangan & Rekreasi Bersama',
    rawi: 'Aisyah ra',
    kitab: 'Sunan Abu Dawud & Musnad Ahmad',
    noHadis: 'Abu Dawud No. 2578, Ahmad No. 24164',
    matnArab: 'سَابَقَنِي النَّبِيُّ ﷺ فَسَبَقْتُهُ، فَلَمَّا رَهِقَنِي اللَّحْمُ سَابَقَنِي فَسَبَقَنِي، فَقَالَ: هَذِهِ بِتِلْكَ',
    terjemahan: 'Nabi ﷺ pernah mengajakku berlomba lari, dan aku berhasil mengalahkan beliau. Selang beberapa tahun ketika tubuhku sudah lebih berisi, beliau mengajakku berlomba lari kembali dan beliau mengalahkanku. Beliau tertawa seraya berkata: "Kemenangan ini adalah balasan atas kekalahanku yang dulu!"',
    pemaknaanKonvensional: {
      ringkasan: 'Dikutip sebatas bukti kelembutan dan keramahan pribadi Nabi terhadap istrinya yang masih muda.',
      poin: [
        'Jarang dijadikan pedoman fiqh keluarga tentang pentingnya alokasi waktu hiburan bersama.',
        'Agama kerap dicitrakan kaku dan melarang tawa di dalam rumah tangga.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ mencontohkan bahwa pernikahan yang sehat membutuhkan keakraban emosional, olahraga, rekreasi, dan humor yang sehat. Pasutri bukan sekadar mitra kerja formal hak-kewajiban, melainkan sahabat karib yang saling menikmati waktu bersama.',
      illatHukum: 'Merawat cinta (mawaddah) dan menghindarkan kejenuhan rutinitas rumah tangga.',
      poinKesalingan: [
        'Kedua belah pihak berhak atas waktu bersenang-senang dan rekreasi yang menyegarkan jiwa.',
        'Pemimpin rumah tangga tidak boleh bersikap feodal, kaku, atau dingin kepada pasangannya.'
      ],
      aplikasiHariIni: [
        'Jadwalkan kencan atau aktivitas santai berdua tanpa gangguan gawai untuk menyegarkan hubungan.',
        'Bangun budaya bercanda dan tertawa bersama di rumah tanpa merendahkan kekurangan fisik pasangan.'
      ]
    },
    pilarTerkait: ['Zawaj', "Mu'asyarah bi al-Ma'ruf", 'Taradhin'],
    tags: ['Keakraban Pasutri', 'Humor Rumah Tangga', 'Rekreasi', 'Mawaddah'],
    quoteSnippet: 'Rasulullah ﷺ berlomba lari dan bercanda dengan istrinya: membuktikan bahwa kehangatan tawa dan rekreasi bersama adalah pilar penting ketenteraman rumah tangga.'
  },
  {
    id: 'hadis-shalat-malam-bersama',
    stageId: 'domestik',
    theme: 'Kemitraan Spiritual Pasutri',
    pertemuan: 3,
    title: 'Saling Membangunkan Shalat Malam: Sinergi Spiritual yang Setara & Simetris',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sunan Abu Dawud',
    noHadis: 'No. 1310',
    matnArab: 'رَحِمَ اللَّهُ رَجُلًا قَامَ مِنَ اللَّيْلِ فَصَلَّى وَأَيْقَظَ امْرَأَتَهُ، فَإِنْ أَبَتْ نَضَحَ فِي وَجْهِهَا المَاءَ. رَحِمَ اللَّهُ امْرَأَةً قَامَتْ مِنَ اللَّيْلِ فَصَلَّتْ وَأَيْقَظَتْ زَوْجَهَا، فَإِنْ أَبَى نَضَحَتْ فِي وَجْهِهِ المَاءَ',
    terjemahan: 'Semoga Allah merahmati seorang laki-laki yang bangun malam untuk shalat lalu membangunkan istrinya; jika istrinya enggan, ia memercikkan air ke wajahnya. Dan semoga Allah merahmati seorang perempuan yang bangun malam untuk shalat lalu membangunkan suaminya; jika suaminya enggan, ia memercikkan air ke wajah suaminya.',
    pemaknaanKonvensional: {
      ringkasan: 'Ditempatkan dalam bab keutamaan shalat tahajud sunnah tanpa dihubungkan dengan model kesetaraan relasi rumah tangga.',
      poin: [
        'Diposisikan murni ritual pribadi.',
        'Tidak dianalisis sebagai model ideal hubungan resiprokal tanpa hierarki.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Redaksi hadis ini disusun secara simetris sempurna: tindakan suami kepada istri identik dengan tindakan istri kepada suami, dan doa rahmat Allah dianugerahkan setara kepada keduanya. Mengajak pada kebaikan (amar ma\'ruf) adalah hak dan kewajiban bersama, bukan hak eksklusif suami atas istri.',
      illatHukum: 'Kerjasama menuju kesalehan spiritual berbasis cinta dan kebersamaan.',
      poinKesalingan: [
        'Tidak ada pihak yang mendominasi dalam urusan ketaatan kepada Allah: istri berhak mengingatkan suami, suami berhak mengingatkan istri.',
        'Bercandaan memercikkan air mencerminkan kelembutan dan keintiman yang hangat.'
      ],
      aplikasiHariIni: [
        'Jadikan ibadah dan amal kebajikan sebagai proyek kolaborasi bersama pasangan.',
        'Saling mendukung ketika salah satu pihak merasa futur (lemah semangat) dalam beribadah.'
      ]
    },
    pilarTerkait: ['Zawaj', 'Tasyawur'],
    tags: ['Kemitraan Spiritual', 'Shalat Malam', 'Kesalingan Simetris', 'Sakinah'],
    quoteSnippet: 'Allah merahmati suami yang membangunkan istrinya untuk ibadah, dan Allah merahmati istri yang membangunkan suaminya: kesetaraan sempurna dalam meraih rida Ilahi.'
  },

  // ==========================================
  // KLASTER 4: FINANSIAL & NAFKAH
  // ==========================================
  {
    id: 'hadis-hindun-nafkah',
    stageId: 'finansial',
    theme: 'Standar Kecukupan Nafkah (Kisah Hindun)',
    title: 'Nafkah Bil Ma\'ruf: Hak Kecukupan Hidup dan Larangan Kekikiran Pasangan',
    rawi: 'Aisyah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 5364, Muslim No. 1714',
    matnArab: 'قَالَتْ هِنْدُ: يَا رَسُولَ اللَّهِ، إِنَّ أَبَا سُفْيَانَ رَجُلٌ شَحِيحٌ، وَلَيْسَ يُعْطِينِي مَا يَكْفِينِي وَوَلَدِي إِلَّا مَا أَخَذْتُ مِنْهُ وَهُوَ لَا يَعْلَمُ، فَقَالَ: خُذِي مَا يَكْفِيكِ وَوَلَدَكِ بِالْمَعْرُوفِ',
    terjemahan: 'Hindun berkata: "Wahai Rasulullah, Abu Sufyan adalah laki-laki yang kikir; ia tidak memberiku nafkah yang mencukupi aku dan anakku, kecuali apa yang kuambil tanpa sepengetahuannya." Maka Nabi ﷺ bersabda: "Ambillah apa yang mencukupi dirimu dan anakmu secara ma\'ruf (patut dan wajar)."',
    pemaknaanKonvensional: {
      ringkasan: 'Hanya dijadikan dalil fiqh kebolehan istri mengambil uang suami yang pelit secara diam-diam sebatas kebutuhan makan pokok.',
      poin: [
        'Tidak menelaah akar masalah penelantaran finansial sebagai salah satu bentuk kezaliman.',
        'Nafkah sering dipahami sebatas uang saku sepihak, bukan instrumen kecukupan hidup bermartabat.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nafkah adalah hak perlindungan dan kecukupan yang patut (bil ma\'ruf), bukan instrumen dominasi. Suami yang menahan nafkah padahal mampu sedang berbuat zalim, dan syariat melindungi pihak yang rentan.',
      illatHukum: 'Jaminan keberlangsungan hidup dan martabat anggota keluarga adalah amanah yang wajib ditunaikan.',
      poinKesalingan: [
        'Standar nafkah harus proporsional sesuai kelapangan rezeki dan kebutuhan nyata keluarga.',
        'Istri berhak menuntut transparansi keuangan demi kecukupan gizi dan pendidikan anak.',
        'Prinsip "bil ma\'ruf" menuntut kejujuran: tidak mengambil berlebihan secara boros, dan tidak menahan secara kikir.'
      ],
      aplikasiHariIni: [
        'Buka dialog anggaran keluarga yang transparan: pemasukan, pengeluaran rutin, dan tabungan masa depan.',
        'Pahami bahwa menahan nafkah secara sengaja untuk mengendalikan pasangan adalah bentuk kekerasan ekonomi.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Mitsaqan Ghalizhan', 'Taradhin'],
    tags: ['Nafkah Wajib', 'Kekerasan Ekonomi', 'Kecukupan Hidup', 'Bil Maruf'],
    quoteSnippet: 'Nafkah dalam Islam adalah instrumen kasih sayang dan perlindungan martabat, bukan alat transaksi untuk membeli kepatuhan.'
  },
  {
    id: 'hadis-zainab-istri-bekerja',
    stageId: 'finansial',
    theme: 'Kontribusi Finansial Istri & Kepemilikan Harta Mandiri',
    title: 'Hadis Zainab ats-Tsaqafiyah: Apresiasi Dua Pahala bagi Istri yang Menafkahi Keluarga',
    rawi: 'Zainab istri Ibnu Mas\'ud ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 1466, Muslim No. 1000',
    matnArab: 'أَنَّهَا سَأَلَتِ النَّبِيَّ ﷺ: أَيُجْزِئُ عَنِّي أَنْ أُنْفِقَ عَلَى زَوْجِي وَأَيْتَامٍ فِي حِجْرِي؟ فَقَالَ النَّبِيُّ ﷺ: لَهَا أَجْرَانِ: أَجْرُ القَرَابَةِ وَأَجْرُ الصَّدَقَةِ',
    terjemahan: 'Zainab bertanya kepada Nabi ﷺ: "Apakah berpahala sedekah bagiku jika aku menafkahkan hartaku untuk suamiku (Ibnu Mas\'ud yang miskin) dan anak-anak yatim dalam asuhanku?" Nabi ﷺ bersabda: "Bagi perempuan itu dua pahala: pahala hubungan kekerabatan dan pahala sedekah."',
    pemaknaanKonvensional: {
      ringkasan: 'Dipahami sebatas hukum bolehnya istri kaya bersedekah kepada kerabat dan suaminya yang tidak mampu.',
      poin: [
        'Jarang dihubungkan dengan realitas istri pekerja dan pencari nafkah di zaman sekarang.',
        'Kadang suami merasa gengsi atau justru menyepelekan penghasilan istri.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Islam mengakui kemandirian finansial perempuan sejak abad ke-7. Ketika istri ikut menafkahi keluarga, ia adalah mitra mulia dengan pahala berlipat, dan suami wajib menghormatinya secara penuh.',
      illatHukum: 'Apresiasi atas kerjasama (ta\'awun) dalam menanggung beban kehidupan rumah tangga bersama.',
      poinKesalingan: [
        'Harta hasil kerja istri adalah miliknya sendiri secara penuh; suami tidak berhak mengambilnya tanpa kerelaan.',
        'Jika istri menyumbangkan uangnya untuk rumah tangga, posisinya adalah kemitraan yang menuntut suami mengganti kontribusi itu dengan bantuan domestik yang setara.',
        'Menghapus anggapan bahwa harga diri suami jatuh ketika istri berpenghasilan lebih besar.'
      ],
      aplikasiHariIni: [
        'Apresiasi dan dukung karier atau usaha mandiri pasangan.',
        'Bangun komunikasi keuangan berbasis sinergi, bukan kompetisi gengsi pendapatan.'
      ]
    },
    pilarTerkait: ['Zawaj', "Mu'asyarah bi al-Ma'ruf", 'Taradhin'],
    tags: ['Istri Bekerja', 'Kemandirian Finansial', 'Pahala Sedekah', 'Kerjasama Pasutri'],
    quoteSnippet: 'Ketika seorang istri turut menopang perekonomian rumah tangga, ia bukan sekadar penolong, melainkan mitra mulia yang dianugerahi ganjaran cinta dan sedekah berlipat.'
  },
  {
    id: 'hadis-suapan-makanan-sedekah',
    stageId: 'finansial',
    theme: 'Nafkah Batiniah & Afeksi Material',
    title: 'Suapan Makanan Bernilai Sedekah: Menyatukan Dimensi Nafkah Lahir & Afeksi Hati',
    rawi: 'Sa\'ad bin Abi Waqqash ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 56, Muslim No. 1628',
    matnArab: 'وَإِنَّكَ لَنْ تُنْفِقَ نَفَقَةً تَبْتَغِي بِهَا وَجْهَ اللَّهِ إِلَّا أُجِرْتَ عَلَيْهَا، حَتَّى مَا تَجْعَلُ فِي فَمِ امْرَأَتِكَ',
    terjemahan: 'Sesungguhnya tidaklah engkau mengeluarkan suatu nafkah demi mengharap rida Allah, melainkan engkau pasti diberi pahala atasnya, bahkan sampai suapan makanan yang engkau letakkan di mulut istrimu.',
    pemaknaanKonvensional: {
      ringkasan: 'Dikutip dalam bab keutamaan niat ikhlas dalam memberikan nafkah keluarga agar berpahala sedekah.',
      poin: [
        'Sering dipahami sebatas transfer uang atau belanja bulanan semata.',
        'Mengabaikan dimensi bahasa cinta (*gesture*) yang dicontohkan dalam redaksi hadis.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ mengajarkan bahwa nafkah bukan sekadar transfer rupiah yang dingin, melainkan ekspresi cinta dan keintiman emosional. Suapan makanan melambangkan kepedulian, kelembutan, dan pemuliaan pasangan hidup.',
      illatHukum: 'Menghadirkan kehangatan batiniah dalam setiap pemenuhan kebutuhan lahiriah.',
      poinKesalingan: [
        'Pemberian nafkah harus disertai dengan tutur kata yang manis dan sikap yang menghargai, bukan dengan gerutu atau rasa berkuasa.',
        'Istri dan suami saling menyuapi dan melayani dengan penuh kerelaan.'
      ],
      aplikasiHariIni: [
        'Biasakan makan bersama pasangan dan tunjukkan perhatian kecil seperti menyendokkan hidangan.',
        'Jangan pernah menyertakan ungkapan merendahkan saat menyerahkan nafkah kepada pasangan.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Zawaj'],
    tags: ['Nafkah Afeksi', 'Bahasa Cinta', 'Sedekah Keluarga', 'Kehangatan'],
    quoteSnippet: 'Nafkah bukan sekadar angka transaksi; bahkan sebutir suapan yang engkau berikan dengan penuh cinta ke mulut pasanganmu bernilai sedekah agung di sisi Allah.'
  },

  // ==========================================
  // KLASTER 5: KEINTIMAN & HAK REPRODUKSI
  // ==========================================
  {
    id: 'hadis-ajakan-ranjang-mubadalah',
    stageId: 'keintiman',
    theme: 'Etika Hubungan Ranjang & Kerelaan Seksual',
    title: 'Pembacaan Kritis Hadis "Ajakan Ranjang": Meluruskan Pemahaman Marital Consent',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 5193, Muslim No. 1436',
    matnArab: 'إِذَا دَعَا الرَّجُلُ امْرَأَتَهُ إِلَى فِرَاشِهِ فَأَبَتْ أَنْ تَجِيءَ فَبَاتَ غَضْبَانَ عَلَيْهَا لَعَنَتْهَا المَلَائِكَةُ حَتَّى تُصْبِحَ',
    terjemahan: 'Apabila seorang laki-laki mengajak istrinya ke tempat tidur lalu sang istri enggan untuk datang hingga suaminya tidur dalam keadaan marah, maka para malaikat melaknatnya sampai pagi.',
    pemaknaanKonvensional: {
      ringkasan: 'Sering dipahami secara tekstual dan menakut-nakuti: istri wajib melayani suami kapan pun dan dalam kondisi apa pun, bahkan saat sakit atau trauma, melegitimasi pemaksaan seksual.',
      poin: [
        'Memosisikan tubuh perempuan sebagai objek pemuas hasrat sepihak.',
        'Mengabaikan kondisi fisik istri (kelelahan kerja domestik/kantor, haid, sakit fisik, atau depresi mental).',
        'Tidak membahas kewajiban suami memenuhi kebutuhan biologis istri secara setara.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Kecaman dalam hadis ini berlaku pada penolakan tanpa udzur yang didasari niat menghukum/memeras pasangan saat hubungan normal. Hubungan intim harus dilandasi pilar taradhin (saling rela) dan kaidah la dharara wa la dhirar (tidak boleh membahayakan/menyakiti).',
      illatHukum: 'Larangan menggunakan keintiman sebagai alat manipulasi jahat; namun memaksakan seks saat pasangan tidak siap secara fisik/psikis adalah kezaliman nyata.',
      poinKesalingan: [
        'Nafkah batin adalah hak timbal balik: suami juga berdosa besar jika menelantarkan hasrat biologis istrinya (seperti dalam kasus ilā\').',
        'Jika pasangan sedang sakit, sangat lelah, atau tidak nyaman, pasangan lain wajib berempati dan menahan diri.',
        'Seksualitas dalam Islam adalah ibadah yang harus dinikmati bersama, bukan ajang penaklukan kekuasaan tubuh.'
      ],
      aplikasiHariIni: [
        'Komunikasikan keinginan dan batasan keintiman secara terbuka dan santun tanpa rasa takut.',
        'Pahami bahwa keintiman yang berkualitas bermula dari kelembutan hati dan suasana emosional yang terjaga sepanjang hari.'
      ]
    },
    pilarTerkait: ['Taradhin', "Mu'asyarah bi al-Ma'ruf", 'Zawaj'],
    tags: ['Keintiman', 'Marital Consent', 'Hak Seksual', 'Taradhin'],
    quoteSnippet: 'Keintiman dalam ikatan suci pernikahan adalah anugerah kasih sayang untuk dinikmati bersama dengan kerelaan, bukan penaklukan sepihak atas tubuh pasangan.'
  },
  {
    id: 'hadis-rahasia-ranjang',
    stageId: 'keintiman',
    theme: 'Menjaga Privasi & Kehormatan Pasangan',
    title: 'Amanah Ranjang: Larangan Keras Mengumbar Rahasia dan Aib Pasangan',
    rawi: 'Abu Sa\'id al-Khudri ra',
    kitab: 'Sahih Muslim',
    noHadis: 'No. 1437',
    matnArab: 'إِنَّ مِنْ أَشَرِّ النَّاسِ عِنْدَ اللَّهِ مَنْزِلَةً يَوْمَ الْقِيَامَةِ، الرَّجُلَ يُفْضِي إِلَى امْرَأَتِهِ وَتُفْضِي إِلَيْهِ، ثُمَّ يَنْشُرُ سِرَّهَا',
    terjemahan: 'Sesungguhnya manusia yang paling buruk kedudukannya di sisi Allah pada hari kiamat adalah laki-laki yang bergaul intim dengan istrinya dan istri bergaul intim dengannya, kemudian salah satunya menyebarkan rahasia pasangannya.',
    pemaknaanKonvensional: {
      ringkasan: 'Larangan menceritakan detail hubungan seks suami-istri kepada orang luar.',
      poin: [
        'Fokus pada aib hubungan badan semata.',
        'Kerap luput menyadari relevansinya di era media sosial dan oversharing digital saat ini.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Redaksi hadis ini menggunakan struktur resiprokal simetris: "yufdhi ilaiha wa tufdhi ilaihi". Keduanya sama-sama bersatu dalam privasi, maka keduanya memikul amanah mutlak saling menjaga rahasia tubuh, kekurangan, dan aib pasangannya.',
      illatHukum: 'Menjaga kemuliaan mitsaqan ghalizhan dan melindungi privasi martabat kemanusiaan pasangan.',
      poinKesalingan: [
        'Suami dan istri adalah "pakaian" satu sama lain (QS. Al-Baqarah: 187): pakaian berfungsi menutup aurat dan menghangatkan.',
        'Dosa terburuk di sisi Allah adalah meruntuhkan kehormatan pasangan sendiri di depan teman tongkrongan atau di media sosial.',
        'Berlaku setara: istri dilarang mencela fisik/kekurangan suami, suami dilarang membocorkan rahasia istri.'
      ],
      aplikasiHariIni: [
        'Jangan pernah menjadikan kekurangan fisik atau dinamika ranjang pasangan sebagai bahan lelucon di ruang publik/grup chat.',
        'Selesaikan ketidakpuasan intim melalui komunikasi berdua atau konselor profesional bersertifikat, bukan dengan curhat di media sosial.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Privasi', 'Amanah', 'Menjaga Aib', 'Etika Ranjang'],
    quoteSnippet: 'Pasangan sejati adalah pelindung rahasia yang saling menutupi kekurangan, bukan pembocor aib yang meruntuhkan martabat pasangannya di hadapan dunia.'
  },
  {
    id: 'hadis-izin-kb-azl',
    stageId: 'keintiman',
    theme: 'Hak Reproduksi & Pengaturan Kehamilan',
    title: 'Pengaturan Kelahiran (\'Azl): Hak Bersama Menentukan Jarak Kelahiran & Kesehatan Reproduksi',
    rawi: 'Jabir bin Abdillah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 5209, Muslim No. 1440',
    matnArab: 'كُنَّا نَعْزِلُ عَلَى عَهْدِ رَسُولِ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَالقُرْآنُ يَنْزِلُ',
    terjemahan: 'Kami terbiasa melakukan \'azl (sanggama terputus / metode kontrasepsi alami) pada masa Rasulullah ﷺ, sementara Al-Qur\'an masih turun (dan syariat tidak melarangnya).',
    pemaknaanKonvensional: {
      ringkasan: 'Sebagian kalangan menolak KB dengan alasan menghambat rezeki atau melanggar anjuran memperbanyak keturunan.',
      poin: [
        'Membaca anjuran banyak anak secara kuantitas tanpa menimbang kualitas gizi dan kesehatan ibu.',
        'Sering mengabaikan hak persetujuan istri dalam keputusan memiliki anak.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Fuqaha mazhab klasik (seperti Syafi\'i dan Hanbali) menetapkan bahwa \'azl (kontrasepsi) menuntut izin dan kerelaan istri karena menyangkut hak kenikmatan dan hak reproduksi tubuhnya. Pengaturan kehamilan demi menjaga kesehatan fisik dan psikologis ibu adalah perwujudan prinsip kemaslahatan.',
      illatHukum: 'Melindungi keselamatan ibu dari bahaya kehamilan berjarak terlalu rapat (*la dharara wa la dhirar*).',
      poinKesalingan: [
        'Keputusan memiliki anak dan jarak kelahiran harus dimusyawarahkan berdua (*tasyawur*).',
        'Laki-laki tidak boleh memaksakan kehamilan berturut-turut yang merusak kesehatan reproduksi istri.'
      ],
      aplikasiHariIni: [
        'Gunakan metode keluarga berencana (KB) yang aman dan disepakati bersama pasangan.',
        'Prioritaskan pemulihan fisik dan mental ibu pascamelahirkan sebelum merencanakan kehamilan berikutnya.'
      ]
    },
    pilarTerkait: ['Tasyawur', 'Taradhin', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Keluarga Berencana', 'Hak Reproduksi', 'Kesehatan Ibu', 'Azl'],
    quoteSnippet: 'Mengatur jarak kelahiran demi menjaga kesehatan dan kebahagiaan ibu adalah ikhtiar syar\'i yang disepakati bersama dalam musyawarah cinta.'
  },

  // ==========================================
  // KLASTER 6: RESOLUSI KONFLIK & ANTI-KDRT
  // ==========================================
  {
    id: 'hadis-larangan-mencambuk-istri',
    stageId: 'konflik',
    theme: 'Anti-Kekerasan Dalam Rumah Tangga (KDRT)',
    title: 'Kecaman Hipokrisi KDRT: Larangan Menyakiti Pasangan yang Digauli',
    rawi: 'Abdullah bin Zam\'ah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 5204, Muslim No. 2855',
    matnArab: 'لَا يَجْلِدُ أَحَدُكُمُ امْرَأَتَهُ جَلْدَ الْعَبْدِ، ثُمَّ لَعَلَّهُ يُعَانِقُهَا فِي آخِرِ الْيَوْمِ',
    terjemahan: 'Janganlah salah seorang di antara kalian mencambuk (memukul) istrinya seperti mencambuk budak, lalu bisa jadi di penghujung hari ia merangkul (menggauli) istrinya tersebut!',
    pemaknaanKonvensional: {
      ringkasan: 'Sering dipahami permisif: seolah-olah memukul itu boleh asalkan "tidak sekeras mencambuk budak" atau menggunakan batasan "pukulan yang tidak melukai" (ghairu mubarrih).',
      poin: [
        'Memberi celah legitimasi kekerasan fisik ringan atas nama mendidik istri.',
        'Mengabaikan rasa trauma psikologis mendalam yang dialami korban pemukulan.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ mengecam keras kontradiksi dan hipokrisi perlakuan: bagaimana mungkin seseorang menyakiti tubuh pasangannya di siang hari, lalu mengharapkan cinta dan kehangatan dari tubuh yang sama di malam hari? Pemukulan adalah pengingkaran atas cinta.',
      illatHukum: 'Penolakan mutlak atas dehumanisasi dan kekerasan dalam ikatan perkawinan.',
      poinKesalingan: [
        'Istri bukan hamba sahaya, melainkan syaqaiq (belahan yang setara).',
        'Kekerasan fisik, caci maki verbal, dan ancaman psikologis menghancurkan rasa aman yang menjadi syarat utama sakinah.',
        'Mubadalah menuntut penyelesaian perselisihan dengan kepala dingin dan ishlah, bukan dengan kekerasan.'
      ],
      aplikasiHariIni: [
        'Pahami bahwa KDRT dalam bentuk apa pun adalah pelanggaran syariat dan hukum positif (UU PKDRT).',
        'Ambil jeda (time-out) ketika emosi sedang memuncak; jangan mengambil tindakan fisik atau menjatuhkan kata-kata talak saat marah.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Mitsaqan Ghalizhan', 'Zawaj'],
    tags: ['Anti-KDRT', 'Pencegahan Kekerasan', 'Keadilan Pasutri', 'Komunikasi Damai'],
    quoteSnippet: 'Bagaimana mungkin seseorang menyakiti tubuh orang yang dicintainya, lalu mengharapkan kehangatan dan ketulusan dari raga yang sama?'
  },
  {
    id: 'hadis-nabi-tidak-pernah-memukul',
    stageId: 'konflik',
    theme: 'Teladan Nabi Tanpa Kekerasan',
    title: 'Kesaksian Aisyah ra: Teladan Tertinggi Nabi ﷺ Sama Sekali Tidak Pernah Memukul',
    rawi: 'Aisyah ra',
    kitab: 'Sahih Muslim',
    noHadis: 'No. 2328',
    matnArab: 'مَا ضَرَبَ رَسُولُ اللَّهِ ﷺ شَيْئًا قَطُّ بِيَدِهِ، وَلَا امْرَأَةً، وَلَا خَادِمًا، إِلَّا أَنْ يُجَاهِدَ فِي سَبِيلِ اللَّهِ',
    terjemahan: 'Rasulullah ﷺ sama sekali tidak pernah memukul apa pun dengan tangannya: tidak pernah memukul perempuan (istri), dan tidak pula memukul pelayan, kecuali ketika berjihad di jalan Allah.',
    pemaknaanKonvensional: {
      ringkasan: 'Dipandang sebatas keutamaan pribadi Nabi (fadhail), sementara norma hukum fiqh tetap mempertahankan opsi memukul istri yang nusyuz.',
      poin: [
        'Memisahkan akhlak kenabian dari kaidah operasional hukum keluarga.',
        'Membiarkan tradisi pemukulan terus dinormalisasi di masyarakat.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Praktik hidup Nabi ﷺ adalah penafsir tertinggi atas Al-Qur\'an. Fakta bahwa beliau seumur hidup tidak pernah memukul membuktikan bahwa jalan terbaik seorang mukmin adalah menolak kekerasan sepenuhnya.',
      illatHukum: 'Meneladani Nabi ﷺ adalah standar tertinggi kesempurnaan iman; orang yang memukul bukan orang yang terbaik.',
      poinKesalingan: [
        'Rasulullah bersabda tegas: "Kalian tidak akan mendapati orang-orang yang suka memukul itu sebagai orang terbaik di antara kalian" (HR. Abu Dawud No. 2146).',
        'Menyelesaikan perselisihan keluarga menuntut kedewasaan akal dan dialog (tasyawur), bukan tangan besi.'
      ],
      aplikasiHariIni: [
        'Jadikan aturan tegas dalam rumah tangga: tidak boleh ada kontak fisik agresif dalam bentuk apa pun saat bertengkar.',
        'Libatkan penengah yang adil (hakam) atau konselor pernikahan jika konflik menemui jalan buntu.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Tasyawur', 'Zawaj'],
    tags: ['Akhlak Kenabian', 'Anti-Kekerasan', 'Keteladanan Rasul', 'Kedamaian Rumah'],
    quoteSnippet: 'Teladan Rasulullah ﷺ yang paling nyata di rumah adalah tidak pernah mengayunkan tangan untuk menyakiti perempuan atau siapa pun yang berada di dekatnya.'
  },
  {
    id: 'hadis-menahan-marah',
    stageId: 'konflik',
    theme: 'Manajemen Emosi dalam Konflik',
    title: 'Kekuatan Sejati Adalah Menahan Diri: Pengendalian Diri saat Amarah Memuncak',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 6114, Muslim No. 2609',
    matnArab: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ',
    terjemahan: 'Bukanlah orang yang kuat itu yang pandai bergulat (menang secara fisik), melainkan orang yang kuat adalah yang mampu mengendalikan dirinya ketika sedang marah.',
    pemaknaanKonvensional: {
      ringkasan: 'Ditempatkan dalam bab adab akhlak umum dalam pergaulan sosial.',
      poin: [
        'Jarang ditarik ke dalam penanganan pertengkaran suami-istri.',
        'Banyak pihak merasa sah membentak pasangan dengan dalih "sedang emosi".'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Rumah tangga adalah ruang di mana ego paling sering teruji. Menahan amarah dan tidak mengeluarkan kata-kata keji adalah benteng yang menjaga perjanjian kokoh (mitsaqan ghalizhan) agar tidak koyak.',
      illatHukum: 'Mencegah kerusakan permanen relasi akibat keputusan impulsif saat emosi membara.',
      poinKesalingan: [
        'Kekuatan suami atau istri bukan pada kemampuan mendominasi atau membentak pasangan.',
        'Mampu mendengarkan dan menunda respons saat marah adalah kedewasaan spiritual tertinggi.'
      ],
      aplikasiHariIni: [
        'Terapkan sunnah Nabi saat marah: diam, berwudhu, atau duduk/berbaring.',
        'Jangan pernah menjatuhkan talak atau ancaman perpisahan saat sedang dikuasai amarah.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Mitsaqan Ghalizhan'],
    tags: ['Manajemen Emosi', 'Pengendalian Marah', 'Anti-KDRT Verbal'],
    quoteSnippet: 'Kekuatan sejati dalam rumah tangga bukan pada seberapa keras suaramu membentak, melainkan seberapa tangguh engkau mengendalikan amarahmu demi menjaga cinta.'
  },

  // ==========================================
  // KLASTER 7: PERCERAIAN & GUGAT KHULU'
  // ==========================================
  {
    id: 'hadis-khulu-jamilah-tsabit',
    stageId: 'perceraian',
    theme: 'Gugat Cerai Istri (Khulu\') Tanpa Perlu Menuduh Aib',
    title: 'Khulu\' Jamilah binti Abdillah: Hak Gugat Cerai Istri yang Tidak Lagi Merasa Bahagia',
    rawi: 'Ibnu Abbas ra',
    kitab: 'Sahih al-Bukhari',
    noHadis: 'No. 5273',
    matnArab: 'أَنَّ امْرَأَةَ ثَابِتِ بْنِ قَيْسٍ أَتَتِ النَّبِيَّ ﷺ فَقَالَتْ: يَا رَسُولَ اللَّهِ، ثَابِتُ بْنُ قَيْسٍ مَا أَعْتِبُ عَلَيْهِ فِي خُلُقٍ وَلَا دِينٍ، وَلَكِنِّي أَكْرَهُ الكُفْرَ فِي الإِسْلَامِ. فَقَالَ: أَتَرُدِّينَ عَلَيْهِ حَدِيقَتَهُ؟ قَالَتْ: نَعَمْ. قَالَ: اقْبَلِ الحَدِيقَةَ وَطَلِّقْهَا تَطْلِيقَةً',
    terjemahan: 'Istri Tsabit bin Qais (Jamilah) mendatangi Nabi ﷺ lalu berkata: "Wahai Rasulullah, aku tidak mencela Tsabit dalam hal akhlak maupun agamanya, tetapi aku khawatir kufur (tidak bisa menunaikan hak suami dengan tulus) dalam Islam." Nabi bertanya: "Maukah engkau mengembalikan kebun yang ia berikan kepadamu (sebagai mahar)?" Ia menjawab: "Ya." Maka Nabi ﷺ bersabda kepada Tsabit: "Terimalah kebun itu, dan ceraikanlah ia satu kali talak."',
    pemaknaanKonvensional: {
      ringkasan: 'Sebagian kalangan menganggap gugat cerai perempuan sebagai tindakan tabu dan aib, serta mengancam perempuan dengan hadis ancaman bau surga tanpa konteks.',
      poin: [
        'Membuat perempuan merasa berdosa besar ketika ingin keluar dari pernikahan yang menyiksa batinnya.',
        'Mengabaikan kebijaksanaan Nabi yang mempermudah proses khulu\'.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Hadis ini adalah tonggak agung keadilan hukum Islam bagi perempuan. Tsabit adalah sahabat saleh tanpa cela moral, namun ketika sang istri merasa tidak ada lagi getaran cinta dan kenyamanan psikologis, Nabi ﷺ mengabulkan perceraian tersebut tanpa mencela atau menghakimi sang istri.',
      illatHukum: 'Melindungi perempuan dari keterpaksaan hidup bersama pasangan yang tidak mampu ia cintai, demi mencegah kezaliman batin.',
      poinKesalingan: [
        'Sebagaimana laki-laki memiliki hak talak, perempuan memiliki instrumen hak gugat cerai (khulu\' & fasakh).',
        'Pemberian tebusan (iwadh/pengembalian mahar) diselesaikan secara adil tanpa memeras pihak perempuan.',
        'Dalam KHI dan Peradilan Agama di Indonesia, gugat cerai istri adalah instrumen sah yang dilindungi hukum.'
      ],
      aplikasiHariIni: [
        'Hentikan stigma buruk terhadap perempuan yang mengajukan cerai gugat di Pengadilan Agama.',
        'Selesaikan perpisahan secara ksatria dan bermartabat tanpa dendam (*tasrihun bi ihsan*).'
      ]
    },
    pilarTerkait: ['Taradhin', 'Zawaj'],
    tags: ['Khulu', 'Gugat Cerai', 'Hak Perempuan', 'Tasrih bi Ihsan', 'Peradilan Agama'],
    quoteSnippet: 'Rasulullah ﷺ mengabulkan gugat cerai istri Tsabit tanpa mencelanya: membuktikan bahwa Islam tidak membiarkan perempuan terkurung dalam pernikahan yang menyiksa jiwanya.'
  },
  {
    id: 'hadis-talak-saat-haid-ibnu-umar',
    stageId: 'perceraian',
    theme: 'Larangan Talak Bida\'i (Mentalak saat Haid)',
    title: 'Kasus Ibnu Umar: Larangan Menjatuhkan Talak Saat Istri Haid Demi Menjaga Kestabilan Jiwa',
    rawi: 'Abdullah bin Umar ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 5251, Muslim No. 1471',
    matnArab: 'أَنَّهُ طَلَّقَ امْرَأَتَهُ وَهِيَ حَائِضٌ، فَسَأَلَ عُمَرُ النَّبِيَّ ﷺ فَقَالَ: مُرْهُ فَلْيُرَاجِعْهَا، ثُمَّ لِيُمْسِكْهَا حَتَّى تَطْهُرَ، ثُمَّ تَحِيضَ، ثُمَّ تَطْهُرَ، ثُمَّ إِنْ شَاءَ أَمْسَكَ بَعْدُ، وَإِنْ شَاءَ طَلَّقَ قَبْلَ أَنْ يَمَسَّ',
    terjemahan: 'Ibnu Umar mentalak istrinya saat sedang haid. Umar menanyakan hal itu kepada Nabi ﷺ, maka beliau marah dan bersabda: "Perintahkan dia untuk merujuk istrinya, lalu tahanlah sampai ia suci, lalu haid lagi, lalu suci kembali. Setelah itu jika ia ingin tetap mempertahankannya silakan, dan jika ingin mentalaknya, talaklah dalam keadaan suci sebelum ia menggaulinya."',
    pemaknaanKonvensional: {
      ringkasan: 'Dianalisis sebatas teknis fiqh pembagian talak sunni dan talak bida\'i, serta perdebatan apakah talak saat haid itu sah atau batal.',
      poin: [
        'Fokus pada hukum sah/jatuhnya talak.',
        'Kurang mendalami alasan psikologis dan perlindungan perempuan di balik larangan tersebut.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ melarang talak dijatuhkan saat istri haid karena masa haid adalah masa di mana kondisi hormonal dan psikologis perempuan sedang rentan, serta masa iddahnya akan bertambah panjang dan merugikannya. Perintah merujuk dan menunggu memberi jeda waktu panjang agar suami berpikir jernih dan amarahnya mereda.',
      illatHukum: 'Mencegah talak tergesa-gesa dan melindungi perempuan dari beban psikologis masa iddah yang berlarut-larut.',
      poinKesalingan: [
        'Laki-laki tidak boleh menggunakan hak talak secara sembarangan atau seenak hatinya.',
        'Syariat memberikan mekanisme penundaan agar peluang ishlah (damai kembali) tetap terbuka lebar.'
      ],
      aplikasiHariIni: [
        'Pahami bahwa talak bukan urusan sepele yang bisa diucapkan saat emosi memuncak.',
        'Dalam hukum Indonesia, perceraian hanya sah jika diikrarkan di depan sidang Pengadilan Agama setelah upaya mediasi gagal.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Talak Bidai', 'Haid', 'Perlindungan Perempuan', 'Masa Iddah'],
    quoteSnippet: 'Nabi ﷺ melarang keras mentalak istri di masa haid: syariat melindungi kestabilan psikologis perempuan dan mencegah keputusan cerai yang didorong emosi sesaat.'
  },
  {
    id: 'hadis-talak-tiga-sekaligus',
    stageId: 'perceraian',
    theme: 'Kecaman Talak Tiga Sekaligus',
    title: 'Kemarahan Nabi ﷺ atas Talak Tiga Sekaligus: Larangan Mempermainkan Kitabullah',
    rawi: 'Mahmud bin Labid ra',
    kitab: 'Sunan an-Nasa\'i',
    noHadis: 'No. 3401',
    matnArab: 'أُخْبِرَ رَسُولُ اللَّهِ ﷺ عَنْ رَجُلٍ طَلَّقَ امْرَأَتَهُ ثَلَاثَ تَطْلِيقَاتٍ جَمِيعًا، فَقَامَ غَضْبَانَ ثُمَّ قَالَ: أَيُلْعَبُ بِكِتَابِ اللَّهِ وَأَنَا بَيْنَ أَظْهُرِكُمْ؟',
    terjemahan: 'Diberitahukan kepada Rasulullah ﷺ tentang seorang laki-laki yang mentalak istrinya tiga talak sekaligus dalam satu waktu. Maka beliau berdiri dalam keadaan sangat marah lalu bersabda: "Apakah Kitabullah (hukum Allah) dipermainkan, padahal aku masih berada di tengah-tengah kalian?!"',
    pemaknaanKonvensional: {
      ringkasan: 'Perdebatan tajam fiqh klasik: apakah talak tiga sekaligus jatuh tiga (pendapat jumhur mazhab klasik) atau jatuh satu (pendapat Ibnu Taimiyyah dan diadopsi KHI Indonesia).',
      poin: [
        'Perdebatan sering mengabaikan kemarahan moral Nabi atas arogansi suami.',
        'Sebagian pihak masih menganggap sah melontarkan "talak 3" dalam sekali ucap.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Kemarahan Nabi ﷺ membuktikan bahwa syariat murka terhadap arogansi patriarkal yang mempermainkan hukum pernikahan untuk meneror dan membuang istri dalam sekejap. Al-Qur\'an mengatur talak terjadi bertahap (marratan) untuk membuka ruang refleksi dan rekonsiliasi.',
      illatHukum: 'Menolak kekerasan verbal dan memastikan proses perpisahan berjalan secara adil dan bermartabat.',
      poinKesalingan: [
        'Hukum Indonesia (KHI Pasal 115) sejalan dengan semangat hadis ini: ucapan talak di luar sidang pengadilan tidak memiliki akibat hukum pembubaran perkawinan.',
        'Kedua belah pihak wajib menghormati proses hukum resmi dan tidak bertindak sewenang-wenang.'
      ],
      aplikasiHariIni: [
        'Jangan pernah menjadikan kata talak sebagai senjata ancaman dalam pertengkaran rumah tangga.',
        'Selesaikan persoalan perceraian melalui jalur mediasi resmi di Pengadilan Agama.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Talak Tiga', 'Anti-Arogansi', 'Hukum Perceraian', 'KHI'],
    quoteSnippet: 'Rasulullah ﷺ bangkit dengan penuh amarah terhadap orang yang menjatuhkan talak tiga sekaligus: "Apakah Kitabullah dipermainkan?!" — kecaman atas arogansi dalam rumah tangga.'
  },

  // ==========================================
  // KLASTER 8: PENGASUHAN ANAK & HADHANAH
  // ==========================================
  {
    id: 'hadis-hak-asuh-ibu',
    stageId: 'pengasuhan',
    theme: 'Hak Asuh Anak Pasca-Perceraian (Hadhanah)',
    title: 'Hak Asuh Ibu Pasca-Cerai: Perlindungan Ikatan Kelekatan Ibu & Anak',
    rawi: 'Abdullah bin Amr ra',
    kitab: 'Sunan Abu Dawud & Musnad Ahmad',
    noHadis: 'Abu Dawud No. 2276, Ahmad No. 6707',
    matnArab: 'أَنَّ امْرَأَةً قَالَتْ: يَا رَسُولَ اللَّهِ، إِنَّ ابْنِي هَذَا كَانَ بَطْنِي لَهُ وِعَاءً، وَثَدْيِي لَهُ سِقَاءً، وَحِجْرِي لَهُ حِوَاءً، وَإِنَّ أَبَاهُ طَلَّقَنِي وَأَرَادَ أَنْ يَنْتَزِعَهُ مِنِّي، فَقَالَ: أَنْتِ أَحَقُّ بِهِ مَا لَمْ تَنْكِحِي',
    terjemahan: 'Seorang perempuan berkata: "Wahai Rasulullah, anakku ini dahulu perutkulah wadahnya, air susukulah minumannya, dan pangkuankulah tempat perlindungannya. Namun ayahnya telah menceraikanku dan hendak merampas anak ini dariku." Maka Rasulullah ﷺ bersabda kepadanya: "Engkau lebih berhak atas hak asuhnya selama engkau belum menikah lagi."',
    pemaknaanKonvensional: {
      ringkasan: 'Dijadikan dalil fiqh bahwa hak asuh anak kecil (mumayyiz) berada pada ibu, namun gugur jika ibu menikah lagi.',
      poin: [
        'Kerap diinterpretasikan kaku bahwa pernikahan baru ibu otomatis menggugurkan hak asuh tanpa menimbang kemaslahatan anak.',
        'Sering dijadikan alat mantan suami untuk menekan mantan istri.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ mengakui kelelahan reproduktif dan kelekatan emosional ibu yang tak tertandingi (rahim, menyusui, merawat). Prinsip utama hadhanah adalah kepentingan terbaik bagi anak (the best interest of the child); anak tidak boleh dirampas sebagai objek sengketa dendam mantan pasangan.',
      illatHukum: 'Menjamin stabilitas psikologis dan perlindungan anak usia dini di bawah asuhan sosok yang paling telaten.',
      poinKesalingan: [
        'Meskipun hak asuh berada pada ibu, kewajiban nafkah pemeliharaan anak tetap berada di pundak ayah.',
        'Ayah tidak boleh menggunakan nafkah sebagai senjata untuk menyandera anak atau menyakiti mantan istrinya.',
        'KHI Pasal 105 menetapkan pemeliharaan anak yang belum mumayyiz adalah hak ibunya.'
      ],
      aplikasiHariIni: [
        'Jauhkan anak dari perselisihan pascaperceraian; terapkan pola asuh bersama (*co-parenting*) yang damai.',
        'Penuhi nafkah anak secara rutin tanpa harus ditagih berulang kali oleh mantan istri.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Zawaj'],
    tags: ['Hak Asuh', 'Hadhanah', 'Ibu & Anak', 'Nafkah Anak', 'Co-Parenting'],
    quoteSnippet: 'Perutkulah wadahnya, air susukulah minumannya, dan pangkuankulah perlindungannya: Nabi ﷺ melarang anak dirampas paksa dari pelukan kasih sayang ibunya.'
  },
  {
    id: 'hadis-kehangatan-ayah',
    stageId: 'pengasuhan',
    theme: 'Kelekatan Emosional Ayah & Anak',
    title: 'Kehangatan Figur Ayah: Mencium Anak sebagai Cerminan Rahmat Allah',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 5997, Muslim No. 2318',
    matnArab: 'قَبَّلَ رَسُولُ اللَّهِ ﷺ الحَسَنَ بْنَ عَلِيٍّ وَعِنْدَهُ الأَقْرَعُ بْنُ حَابِسٍ، فَقَالَ الأَقْرَعُ: إِنَّ لِي عَشَرَةً مِنَ الوَلَدِ مَا قَبَّلْتُ مِنْهُمْ أَحَدًا، فَنَظَرَ إِلَيْهِ رَسُولُ اللَّهِ ﷺ ثُمَّ قَالَ: مَنْ لَا يَرْحَمُ لَا يُرْحَمُ',
    terjemahan: 'Rasulullah ﷺ mencium cucunya (Hasan bin Ali), di dekat beliau ada Al-Aqra\' bin Habis. Al-Aqra\' berkata: "Aku punya sepuluh orang anak, namun tak seorang pun yang pernah kucium." Rasulullah ﷺ memandangnya lalu bersabda: "Barangsiapa yang tidak menyayangi, niscaya ia tidak akan disayangi."',
    pemaknaanKonvensional: {
      ringkasan: 'Anjuran bersikap lembut kepada balita secara umum.',
      poin: [
        'Sering mengabaikan kritik Nabi terhadap konsep maskulinitas dingin dan berjarak.',
        'Budaya kerap menganggap tugas mengasihi dan memeluk anak adalah urusan ibu semata.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ merombak total paradigma kebapakan: kehangatan fisik, pelukan, dan ciuman kasih sayang dari ayah adalah kebutuhan dasar jiwa anak, bukan tanda kelemahan pria.',
      illatHukum: 'Menumbuhkan kesehatan mental generasi melalui ekspresi cinta kasih (rahmah) yang seimbang dari ayah dan ibu.',
      poinKesalingan: [
        'Pengasuhan anak adalah proyek kemitraan berdua: ayah hadir bukan hanya sebagai pencari nafkah, tetapi sebagai pelindung emosional.',
        'Seorang ayah yang dingin dan kaku sedang memutus rantai rahmat Allah dalam keluarganya.',
        'Kerjasama mengasuh anak meringankan beban psikologis ibu dan mempererat ikatan pasutri.'
      ],
      aplikasiHariIni: [
        'Luangkan waktu berkualitas setiap hari untuk bermain, memeluk, dan mendengarkan cerita anak.',
        'Hilangkan gengsi maskulinitas: peluk anak laki-laki maupun perempuan Anda dengan penuh kasih.'
      ]
    },
    pilarTerkait: ['Zawaj', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Parenting', 'Peran Ayah', 'Kasih Sayang Anak', 'Kesehatan Mental'],
    quoteSnippet: 'Kelembutan seorang ayah dalam memeluk dan mencium anaknya adalah pintu turunnya rahmat dan kasih sayang Allah ke dalam rumah.'
  },
  {
    id: 'hadis-keadilan-anak',
    stageId: 'pengasuhan',
    theme: 'Keadilan Tanpa Diskriminasi Gender Anak',
    title: 'Keadilan Orang Tua: Perintah Tegas Memperlakukan Semua Anak secara Setara',
    rawi: 'An-Nu\'man bin Basyir ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 2587, Muslim No. 1623',
    matnArab: 'أَعْطَانِي أَبِي عَطِيَّةً... فَقَالَ رَسُولُ اللَّهِ ﷺ: أَكُلَّ وَلَدِكَ أَعْطَيْتَهُ هَذَا؟ قَالَ: لَا، قَالَ: فَاتَّقُوا اللَّهَ وَاعْدِلُوا بَيْنَ أَوْلَادِكُمْ',
    terjemahan: 'Ayahku memberiku suatu hadiah... Rasulullah ﷺ bertanya: "Apakah semua anakmu engkau beri hal serupa?" Ayahku menjawab: "Tidak." Maka beliau bersabda: "Bertakwalah kepada Allah, dan berlaku adillah di antara anak-anak kalian!"',
    pemaknaanKonvensional: {
      ringkasan: 'Kewajiban adil dalam pemberian hibah harta kepada anak-anak agar tidak iri hati.',
      poin: [
        'Kerap dibatasi pada aspek materi uang dan tanah warisan semata.',
        'Kurang dikaitkan dengan keadilan afeksi emosional dan kesempatan pendidikan.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Perintah keadilan ini bersifat komprehensif: adil dalam fasilitas, kasih sayang, dan kesempatan hidup tanpa membedakan anak laki-laki atau anak perempuan, anak sulung atau anak bungsu.',
      illatHukum: 'Mencegah luka batin, kecemburuan toksik, dan diskriminasi gender sejak dalam keluarga.',
      poinKesalingan: [
        'Ayah dan ibu bermusyawarah dalam setiap keputusan penting yang menyangkut masa depan anak.',
        'Menghapus tradisi mengutamakan pendidikan anak laki-laki di atas anak perempuan.',
        'Membiasakan budaya kesetaraan sejak dini agar anak kelak menjadi pasangan hidup yang adil.'
      ],
      aplikasiHariIni: [
        'Beri kesempatan pendidikan dan dukungan cita-cita yang setara kepada anak perempuan dan laki-laki.',
        'Hindari membanding-bandingkan kepintaran atau karakter antaranak di dalam rumah.'
      ]
    },
    pilarTerkait: ['Zawaj', 'Tasyawur'],
    tags: ['Keadilan Anak', 'Kesetaraan Gender Anak', 'Parenting Islami'],
    quoteSnippet: 'Berlaku adil kepada setiap anak dalam kasih sayang dan kesempatan adalah fondasi melahirkan generasi yang berjiwa damai dan berintegritas.'
  },
  {
    id: 'hadis-memuliakan-anak-perempuan',
    stageId: 'pengasuhan',
    theme: 'Memuliakan Anak Perempuan',
    title: 'Keutamaan Merawat Anak Perempuan: Perisai dari Siksa Api Neraka',
    rawi: 'Aisyah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    noHadis: 'Bukhari No. 5995, Muslim No. 2629',
    matnArab: 'مَنِ ابْتُلِيَ مِنْ هَذِهِ البَنَاتِ بِشَيْءٍ فَأَحْسَنَ إِلَيْهِنَّ، كُنَّ لَهُ سِتْرًا مِنَ النَّارِ',
    terjemahan: 'Barangsiapa yang diuji dengan mengasuh anak-anak perempuan, lalu ia memperlakukan mereka dengan baik (penuh kasih sayang dan pendidikan), niscaya anak-anak perempuan itu akan menjadi penghalang baginya dari api neraka.',
    pemaknaanKonvensional: {
      ringkasan: 'Keutamaan bersabar mengasuh anak perempuan di masa Jahiliyah yang mengubur anak perempuan hidup-hidup.',
      poin: [
        'Kerap dianggap masa lalu yang sudah tidak relevan lagi.',
        'Kurang dikaitkan dengan perjuangan melawan pernikahan dini dan diskriminasi anak perempuan saat ini.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ secara revolusioner merombak budaya patriarki Arab yang menganggap kelahiran anak perempuan sebagai kesialan. Merawat, mendidik, dan memuliakan anak perempuan hingga mandiri ditempatkan sebagai tiket spiritual tertinggi menuju surga.',
      illatHukum: 'Menghapuskan diskriminasi gender dan menjamin pemuliaan martabat perempuan sejak usia anak.',
      poinKesalingan: [
        'Anak perempuan memiliki hak yang sama atas gizi terbaik, pendidikan tinggi, dan perlindungan masa depan.',
        'Menikahkan anak perempuan di bawah umur demi melepaskan beban ekonomi keluarga bertentangan keras dengan hadis ini.'
      ],
      aplikasiHariIni: [
        'Dukung pendidikan anak perempuan hingga jenjang tertinggi sesuai minat dan potensinya.',
        'Lindungi anak perempuan dari bahaya perkawinan usia anak dan kekerasan seksual.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Mitsaqan Ghalizhan'],
    tags: ['Anak Perempuan', 'Pencegahan Perkawinan Anak', 'Pendidikan Perempuan', 'Pemuliaan'],
    quoteSnippet: 'Siapa yang merawat dan mendidik anak-anak perempuannya dengan baik, anak-anak itu akan menjadi perisai baginya dari api neraka: Islam memuliakan anak perempuan setara.'
  }
];

export const PILAR_SAKINAH = [
  {
    title: 'Mitsaqan Ghalizhan',
    arabic: 'مِيثَاقًا غَلِيظًا',
    surah: 'QS. An-Nisa: 21',
    meaning: 'Ikatan perjanjian yang kokoh dan suci di hadapan Allah, menuntut amanah serta komitmen saling menjaga sepanjang hayat.'
  },
  {
    title: 'Zawaj',
    arabic: 'زَوْج',
    surah: 'QS. Ar-Rum: 21',
    meaning: 'Prinsip berpasangan dan kebermitraan yang setara; menolak hubungan hierarkis atasan-bawahan atau penindasan sepihak.'
  },
  {
    title: "Mu'asyarah bi al-Ma'ruf",
    arabic: 'مُعَاشَرَةٌ بِالْمَعْرُوفِ',
    surah: 'QS. An-Nisa: 19',
    meaning: 'Saling memperlakukan dengan baik, patut, dan bermartabat dalam tutur kata, pembagian tugas, hingga keintiman.'
  },
  {
    title: 'Tasyawur',
    arabic: 'تَشَاوُر',
    surah: 'QS. Al-Baqarah: 233',
    meaning: 'Kebiasaan saling bermusyawarah dan berdialog secara terbuka dalam mengambil segala keputusan rumah tangga.'
  },
  {
    title: 'Taradhin',
    arabic: 'تَرَاضٍ',
    surah: 'QS. Al-Baqarah: 233',
    meaning: 'Saling memberi kenyamanan dan kerelaan tulus dari kedua belah pihak; menolak segala bentuk paksaan atau manipulasi.'
  }
];
