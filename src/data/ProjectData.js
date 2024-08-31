export const projectsData = [
  {
    id: 1,
    name: "Thana",
    shortDescription:
      "Aplikasi pengelolaan data tanah dengan integrasi ke beberapa library map seperti leafletjs, graphhopper, dll dengan core framework yaitu nextjs14 ",
    description: [
      "Aplikasi ini merupakan platform pengelolaan data tanah yang dirancang untuk memberikan kemudahan dalam mengelola, menganalisis, dan memvisualisasikan informasi tanah secara efektif. Dengan integrasi yang kuat ke berbagai library peta seperti LeafletJS dan GraphHopper, aplikasi ini memungkinkan pengguna untuk melakukan pemetaan, rute, dan analisis spasial dengan akurasi tinggi. Aplikasi ini dibangun menggunakan core framework Next.js versi 14 yang dikenal akan performa tinggi dan kemampuan render di sisi server, sehingga memberikan pengalaman pengguna yang cepat dan responsif.",
      "Untuk manajemen state global, aplikasi ini menggunakan Redux, yang memungkinkan pengelolaan data aplikasi yang terstruktur dan efisien. Sementara itu, penggunaan Express sebagai server-side framework memastikan fleksibilitas dalam penanganan API dan middleware, yang memungkinkan komunikasi data yang cepat dan aman.",
      "Desain antarmuka aplikasi didukung oleh TailwindCSS, sebuah framework CSS yang memungkinkan pembuatan UI yang modern dan responsif dengan sedikit kode. Keamanan aplikasi diperkuat dengan implementasi JWT (JSON Web Tokens) untuk autentikasi dan otorisasi, serta integrasi dengan NextAuth dan PassportJS untuk mendukung berbagai metode autentikasi yang aman.",
      "Aplikasi ini juga menggunakan Redis sebagai in-memory data store untuk caching dan penyimpanan data sementara, yang memastikan performa aplikasi tetap optimal meskipun diakses oleh banyak pengguna. Dalam hal pengelolaan waktu, MomentJS digunakan untuk menangani berbagai operasi terkait tanggal dan waktu dengan mudah.",
      "Untuk mendukung fitur interaktif, seperti menggambar dan mengedit peta, aplikasi ini mengintegrasikan Leaflet Draw. Semua data yang disimpan dikelola oleh MySQL, yang menyediakan sistem manajemen basis data yang kuat dan handal. Secara keseluruhan, aplikasi ini adalah solusi lengkap untuk pengelolaan data tanah, dari manajemen data hingga visualisasi dan analisis peta, yang didukung oleh teknologi modern dan best practices dalam pengembangan web.",
    ],
    techStack: [
      "Nextjs",
      "Leafletjs",
      "Graphhopper",
      "Redux",
      "Tailwindcss",
      "Express",
      "MySQL",
    ],
    githubUrl: {
      frontend: "https://github.com/wicahma/thana-web",
      backend: "https://github.com/wicahma/thana-backend",
    },
    webUrl: "https://phatox.vercel.app/",
    status: "active developing",
  },
  {
    id: 2,
    name: "Kwitansiku",
    shortDescription:
      "Web Application untuk mengelola data kwitansi klinik dengan fitur utama pendataan dan pencetakan bukti kwitansi untuk Pasien TKI dan Pasien Umum",
    description: [
      "Aplikasi web ini dirancang khusus untuk pengelolaan data kwitansi di lingkungan klinik, dengan fokus utama pada pencatatan dan pencetakan bukti kwitansi bagi dua kelompok pasien, yaitu Pasien Tenaga Kerja Indonesia (TKI) dan Pasien Umum. Aplikasi ini bertujuan untuk menyederhanakan proses administrasi klinik dengan menyediakan antarmuka yang intuitif dan alur kerja yang efisien.",
      "Dibangun menggunakan Vue.js sebagai kerangka kerja utama, aplikasi ini memanfaatkan keunggulan Vue dalam hal performa dan skalabilitas, memungkinkan pembuatan UI yang dinamis dan responsif. Vite digunakan sebagai bundler, yang memastikan proses build yang cepat dan efisien, sementara Vuex digunakan untuk mengelola state aplikasi secara terpusat, sehingga data dapat diakses dan dikelola dengan mudah di seluruh komponen aplikasi.",
      "Navigasi dalam aplikasi diatur menggunakan Vue Router, yang memungkinkan transisi halaman yang mulus dan navigasi yang mudah bagi pengguna. Di sisi server, aplikasi ini didukung oleh Express dan Node.js, yang menawarkan kerangka kerja backend yang ringan namun kuat untuk menangani permintaan API dan pengelolaan data.",
      "Untuk memastikan keamanan data dan autentikasi pengguna, aplikasi ini menerapkan JWT (JSON Web Tokens) untuk otorisasi dan otentikasi, serta mengintegrasikan Passport.js untuk mendukung berbagai strategi autentikasi yang aman. Redis digunakan sebagai in-memory data store untuk caching, yang membantu meningkatkan performa aplikasi dengan mempercepat akses data.",
      "Selain itu, Moment.js digunakan untuk menangani berbagai operasi terkait tanggal dan waktu dengan efisien, seperti pencatatan waktu transaksi kwitansi. Penyimpanan dan pengelolaan data utama dilakukan menggunakan PostgreSQL, yang merupakan sistem manajemen basis data relasional yang andal dan mendukung transaksi yang kompleks.",
      "Dengan kombinasi teknologi modern ini, aplikasi web ini menjadi solusi komprehensif untuk kebutuhan pengelolaan data kwitansi klinik, yang tidak hanya meningkatkan efisiensi operasional tetapi juga memastikan data pasien dikelola dengan aman dan tepat.",
    ],
    techStack: [
      "Vue Js",
      "Vite",
      "Vuex",
      "Vue Router",
      "Express",
      "Node.js",
      "PostgreSQL",
    ],
    githubUrl: {
      frontend: "https://github.com/wicahma/kwitansiku-frontend",
      backend: "https://github.com/wicahma/kwitansiku-backend",
    },
    webUrl: "https://admin.klinikgora.com/",
    status: "maintenance",
  },
];
