export interface Stage {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  color: string;
  badge: string;
}

export interface HadithItem {
  id: string;
  stageId: 'pra-nikah' | 'akad' | 'domestik' | 'finansial' | 'keintiman' | 'konflik' | 'pengasuhan';
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
    title: '1. Pra-Nikah & Ta\'aruf',
    icon: 'Sparkles',
    tagline: 'Memilih Pasangan atas Dasar Akhlak & Kesepadanan Takwa',
    color: '#845EC2',
    badge: 'Fondasi Awal'
  },
  {
    id: 'akad',
    title: '2. Akad & Perjanjian',
    icon: 'ScrollText',
    tagline: 'Mitsaqan Ghalizhan: Komitmen Janji Setara di Hadapan Allah',
    color: '#2C73D2',
    badge: 'Ikatan Suci'
  },
  {
    id: 'domestik',
    title: '3. Keseharian & Domestik',
    icon: 'Home',
    tagline: 'Khidmah al-Bayt: Meneladani Nabi Bekerjasama di Rumah',
    color: '#008F7A',
    badge: 'Keseharian Pasutri'
  },
  {
    id: 'finansial',
    title: '4. Finansial & Nafkah',
    icon: 'Wallet',
    tagline: 'Kemitraan Ekonomi: Nafkah Layak & Apresiasi Istri Bekerja',
    color: '#C86D51',
    badge: 'Dapur & Rezeki'
  },
  {
    id: 'keintiman',
    title: '5. Keintiman & Seksualitas',
    icon: 'HeartHandshake',
    tagline: 'Mula\'abah: Saling Membahagiakan Tanpa Pemaksaan (Consent)',
    color: '#D65DB1',
    badge: 'Relasi Ranjang'
  },
  {
    id: 'konflik',
    title: '6. Resolusi Konflik & Anti-KDRT',
    icon: 'ShieldAlert',
    tagline: 'Mengelola Marah & Menolak Segala Bentuk Kekerasan Fisik/Psikis',
    color: '#FF6F91',
    badge: 'Manajemen Krisis'
  },
  {
    id: 'pengasuhan',
    title: '7. Pengasuhan Anak',
    icon: 'Users',
    tagline: 'Tarbiyah & Kehangatan: Kemitraan Ayah-Ibu Menjaga Generasi',
    color: '#4B7BEC',
    badge: 'Amanah Anak'
  }
];

export const HADITHS_DATA: HadithItem[] = [
  // --- PRA NIKAH ---
  {
    id: 'hadis-empat-kriteria',
    stageId: 'pra-nikah',
    theme: 'Kriteria Memilih Pasangan',
    pertemuan: 5,
    title: 'Empat Kriteria Memilih Pasangan: Prioritaskan Akhlak Relasi',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari',
    noHadis: 'No. 5146',
    matnArab: 'تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ: لِمَالِهَا، وَلِحَسَبِهَا، وَجَمَالِهَا، وَلِدِينِهَا، فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ',
    terjemahan: 'Seorang perempuan biasanya dinikahi karena empat hal: karena hartanya, karena garis keturunannya (status sosial), karena parasnya yang rupawan, dan karena komitmen agamanya. Maka pilihlah yang memiliki komitmen agama (akhlak), niscaya kamu akan beruntung.',
    pemaknaanKonvensional: {
      ringkasan: 'Dipahami satu arah hanya sebagai instruksi bagi laki-laki dalam memilih istri. Kata "din" sering disempitkan sekadar performa ibadah ritual formal lahiriah (pakaian, shalat, hafalan).',
      poin: [
        'Laki-laki sebagai subjek pemilih, perempuan sebagai objek yang diperiksa.',
        'Mengesankan harta, nasab, kecantikan sebagai hal yang dianjurkan padahal redaksinya hanya deskriptif tentang kebiasaan manusia.',
        'Perempuan tidak dibahas mengenai haknya untuk memilih calon suami atas kriteria serupa.'
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
        'Periksa bagaimana calon pasangan memperlakukan ibunya, pekerja rumah tangga, dan orang yang lebih lemah darinya.',
        'Lakukan pertukaran informasi dua arah secara jujur: riwayat kesehatan, visi keluarga, dan rencana pembagian peran.'
      ]
    },
    pilarTerkait: ['Zawaj', 'Taradhin', 'Tasyawur'],
    tags: ['Taaruf', 'Kriteria Pasangan', 'Kesepadanan Takwa', 'Pra-Nikah'],
    quoteSnippet: 'Agama yang sejati dalam pernikahan bukan sekadar simbol kesalehan lahiriah, melainkan kematangan akhlak dalam memperlakukan pasangan hidup secara bermartabat.'
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
        'Status perawan/janda atau perjaka/duda bukan penentu kemuliaan seseorang; yang utama adalah kapasitas membangun cinta dan kemaslahatan rumah tangga.',
        'Hak atas kenyamanan emosional dan seksual adalah hak timbal balik kedua belah pihak.'
      ],
      aplikasiHariIni: [
        'Menghilangkan stigma terhadap perempuan atau laki-laki yang berstatus janda atau duda.',
        'Fokus menilai kecocokan visi hidup, selera humor yang tidak merendahkan, dan kesiapan saling mendukung.'
      ]
    },
    pilarTerkait: ['Mu\'asyarah bi al-Ma\'ruf', 'Zawaj', 'Taradhin'],
    tags: ['Mulaabah', 'Kesetaraan Pasangan', 'Status Pernikahan'],
    quoteSnippet: 'Kebahagiaan pernikahan terwujud saat kedua insan saling berikhtiar membahagiakan satu sama lain: ia bersenang-senang denganmu, dan kamu pun bersenang-senang dengannya.'
  },

  // --- AKAD ---
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
        'Calon istri dan calon suami sama-sama berhak merumuskan poin perjanjian pra-nikah (misal: komitmen tidak berpoligami, izin melanjutkan studi/karier, model pembagian nafkah).',
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

  // --- DOMESTIK ---
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
        'Buat pembagian tugas rumah tangga yang adil dan disepakati bersama pasangan (misal: giliran mencuci piring, menjaga anak, atau merapikan tempat tidur).',
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

  // --- FINANSIAL ---
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

  // --- KEINTIMAN ---
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

  // --- KONFLIK & ANTI KDRT ---
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
        'Ambil jeda (*time-out*) ketika emosi sedang memuncak; jangan mengambil tindakan fisik atau menjatuhkan kata-kata talak saat marah.'
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
        'Menyelesaikan perselisihan keluarga menuntut kedewasaan akal dan dialog (tasyawur), bukan tangan besi.',
        'Setiap pasangan berhak merasa terlindungi dan bebas dari ancaman teror di dalam rumahnya sendiri.'
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

  // --- PENGASUHAN ---
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
