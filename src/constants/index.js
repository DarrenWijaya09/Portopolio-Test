export const myProjects = [
    {
      id: 1,
      title: "Website BOSALKES",
      description:
        "Website toko alat kesehatan medis dengan fitur katalog produk, informasi perusahaan, dan kontak.",
      subDescription: [
        "Dibangun menggunakan Laravel dan Blade Template.",
        "Memiliki fitur Home, Katalog Produk, Tentang Kami, dan Hubungi Kami.",
        "Tampilan responsif menggunakan TailwindCSS.",
        "Footer dikustomisasi agar menampilkan identitas BOSALKES.",
      ],
      href: "https://github.com/DarrenWijaya09/porjek-pkl-bosalkes",
      logo: "",
      image: "/assets/projects/BOSALKES.png",
      tags: [
        { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
        { id: 2, name: "PHP", path: "/assets/logos/php.svg" },
        { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      ],
    },
    {
      id: 2,
      title: "Pelaporan Pengaduan Masyarakat",
      description:
        "Aplikasi pengaduan masyarakat berbasis web dengan peran admin, petugas, dan masyarakat.",
      subDescription: [
        "Menggunakan Laravel untuk backend dengan arsitektur MVC.",
        "Terdapat form pengaduan untuk masyarakat serta dashboard admin.",
        "Fitur autentikasi berbeda untuk admin, petugas, dan masyarakat.",
        "Struktur folder dipisah agar rapi untuk bagian citizen.",
      ],
      href: "https://github.com/DarrenWijaya09/pengaduan-masyarakat",
      logo: "",
      image: "/assets/projects/pengaduan-rakyat.png",
      tags: [
        { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
        { id: 2, name: "PHP", path: "/assets/logos/php.svg" },
        { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      ],
    },
    {
      id: 3,
      title: "Website Webinar",
      description:
        "Website pendaftaran webinar dengan dua tampilan: user dan admin.",
      subDescription: [
        "Landing page menampilkan galeri, harga seminar, dan form pendaftaran.",
        "Admin dapat melihat peserta, update status pembayaran, dan mengatur jadwal event.",
        "Perbedaan admin & user hanya dengan email domain, tanpa role tambahan.",
        "Dibuat dengan Laravel 11 dan TailwindCSS.",
      ],
      href: "",
      logo: "",
      image: "/assets/projects/webinar.png",
      tags: [
        { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
        { id: 2, name: "PHP", path: "/assets/logos/php.svg" },
        { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      ],
    },
    {
      id: 4,
      title: "Manajemen Data Siswa & UKS",
      description:
        "Sistem manajemen UKS untuk data kesehatan siswa, stok obat, dan konsultasi.",
      subDescription: [
        "Admin dapat mengelola data siswa, riwayat medis, stok obat, dan jadwal petugas UKS.",
        "User (siswa) bisa akses riwayat kunjungan, edukasi kesehatan, dan konsultasi online.",
        "Dilengkapi notifikasi peringatan dini untuk penyakit di sekolah.",
        "Dibangun dengan Laravel, MySQL, dan TailwindCSS.",
      ],
      href: "https://github.com/DarrenWijaya09/uks-sekolah",
      logo: "",
      image: "/assets/projects/uks.png",
      tags: [
        { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
        { id: 2, name: "MySQL", path: "/assets/logos/MySQL.svg" },
        { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      ],
    },
    {
      id: 5,
      title: "Weather App (BMKG KW)",
      description:
        "Aplikasi cuaca sederhana untuk menampilkan informasi perkiraan cuaca.",
      subDescription: [
        "Menampilkan data cuaca real-time menggunakan API.",
        "UI dibuat sederhana agar mudah digunakan.",
        "Dibuat sebagai latihan project web frontend.",
        "Menyediakan data temperatur dan kondisi cuaca.",
      ],
      href: "",
      logo: "",
      image: "/assets/projects/bmkg.png",
      tags: [
        { id: 1, name: "JavaScript", path: "/assets/logos/javascript.svg" },
        { id: 3, name: "CSS", path: "/assets/logos/css3.svg" },
      ],
    },
    {
      id: 6,
      title: "Landing Page PT Mitra Graha Intinusa",
      description:
        "Website landing page untuk PT Mitra Graha Intinusa sebagai profil perusahaan.",
      subDescription: [
        "Menampilkan informasi perusahaan secara profesional.",
        "Terdapat bagian tentang perusahaan, layanan, dan kontak.",
        "Menggunakan Laravel sebagai backend untuk fleksibilitas.",
        "Desain modern dengan TailwindCSS.",
      ],
      href: "https://github.com/LionyRamli/PT-MITRA-GRAHA-INTINUSA",
      logo: "",
      image: "/assets/projects/PT.png",
      tags: [
        { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
        { id: 2, name: "HTML", path: "/assets/logos/html5.svg" },
        { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      ],
    },
    {
      id: 7,
      title: "Website Perpustakaan Digital",
      description:
        "Sistem manajemen perpustakaan untuk mengelola data buku, anggota, dan peminjaman.",
      subDescription: [
        "Fitur CRUD buku, anggota, dan peminjaman.",
        "Tersedia pencarian buku dengan filter kategori.",
        "Menggunakan Laravel untuk backend dan autentikasi.",
        "Dirancang responsif dengan TailwindCSS.",
      ],
      href: "https://github.com/DarrenWijaya09/Perpustakaan",
      logo: "",
      image: "/assets/projects/perpus.png",
      tags: [
        { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
        { id: 2, name: "MySQL", path: "/assets/logos/MySQL.svg" },
        { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      ],
    },    
  ];
  

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/088299764025",
    icon: "/assets/socials/whatsApp.svg",
    iconLight: "assets/whatsApp-black.svg", // untuk light mode
    iconDark: "assets/whatsApp-white.svg",
  },
  {
    name: "Linkedin",
    href: "",
    icon: "/assets/socials/linkedIn.svg",
    iconLight: "assets/linkedIn-black.svg", // untuk light mode
    iconDark: "assets/linkedIn-white.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dar._.renn/",
    icon: "/assets/socials/instagram.svg",
    iconLight: "assets/instagram-black.svg", // untuk light mode
    iconDark: "assets/instagram-white.svg",
  },
];

export const experiences = [
  {
    title: "Belajar Dasar Pemrograman",
    job: "Self-Learning",
    date: "2020-2022",
    contents: [
      "Mempelajari dasar-dasar HTML, CSS, dan JavaScript.",
      "Belajar menggunakan Bootstrap untuk membuat tampilan website responsif.",
      "Mengerjakan proyek latihan sederhana seperti halaman profil, galeri gambar, dan form interaktif.",
      "Mendalami konsep dasar desain menggunakan Adobe Photoshop dan Adobe Premiere Pro."
    ],
  },
  {
    title: "Front-End Developer (Advance)",
    job: "Personal & School Projects",
    date: "2022-2023",
    contents: [
      "Mendesain antarmuka interaktif menggunakan HTML, CSS, JavaScript, dan React.",
      "Mengimplementasikan efek animasi dan 3D interaktif menggunakan Three.js dan Framer Motion.",
      "Membuat halaman edukasi interaktif untuk proyek manajemen data siswa, termasuk fitur konsultasi kesehatan dan peringatan dini penyakit.",
      "Menerapkan AJAX untuk fitur Load More pada halaman notifikasi kesehatan."
    ],
  },
  {
    title: "Back-End Developer (Advance)",
    job: "School & External Projects",
    date: "2023-2024",
    contents: [
      "Mengembangkan berbagai aplikasi berbasis Laravel dan PHP dengan database MySQL.",
      "Mengerjakan proyek untuk sekolah dan klien eksternal dengan fokus pada keamanan dan performa aplikasi.",
      "Mengembangkan API untuk integrasi aplikasi pihak ketiga.",
      "Membangun sistem pelaporan pengaduan masyarakat dengan autentikasi multi-role.",
      "Mengelola hosting dan deployment proyek di server live."
    ],
  },
  {
    title: "Full-Stack Web Developer",
    job: "Freelance",
    date: "2024-Present",
    contents: [
      "Membangun dan mengelola berbagai website menggunakan Laravel, PHP, MySQL, dan Tailwind CSS.",
      "Membuat website e-commerce sederhana dengan fitur katalog produk, keranjang belanja, dan sistem checkout.",
      "Mendesain dan mengembangkan website BOSALKES untuk katalog alat kesehatan, termasuk halaman Tentang Kami dan Hubungi Kami.",
      "Membuat aplikasi informasi cuaca sederhana berbasis BMKG API menggunakan Laravel.",
      "Berinteraksi langsung dengan klien untuk memahami kebutuhan proyek dan memberikan solusi terbaik."
    ],
  },
];

export const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "Aku belum pernah melihat hal seperti ini sebelumnya. Luar biasa. Aku menyukainya.",
      img: "https://robohash.org/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "Aku tidak tahu harus berkata apa. Aku terkesima. Ini luar biasa.",
      img: "https://robohash.org/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "Aku tidak bisa berkata apa-apa. Ini luar biasa. Aku menyukainya.",
      img: "https://robohash.org/john",
    },
    {
      name: "Alice",
      username: "@alice",
      body: "Ini jelas hal terbaik yang pernah aku alami. Sangat direkomendasikan!",
      img: "https://robohash.org/alice",
    },
    {
      name: "Bob",
      username: "@bob",
      body: "Kerja yang luar biasa! Perhatian terhadap detailnya fenomenal.",
      img: "https://robohash.org/bob",
    },
    {
      name: "Charlie",
      username: "@charlie",
      body: "Ini melebihi semua harapanku. Sangat menakjubkan!",
      img: "https://robohash.org/charlie",
    },
    {
      name: "Dave",
      username: "@dave",
      body: "Sungguh menakjubkan. Keputusan terbaik yang aku buat belakangan ini.",
      img: "https://robohash.org/dave",
    },
    {
      name: "Eve",
      username: "@eve",
      body: "Senang sekali aku menemukan ini. Ini telah mengubah segalanya untukku.",
      img: "https://robohash.org/eve",
    },
  ];
  