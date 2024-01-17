//Daftar Pendukung Ajis

alert("Lihat Daftar Pendukung Ajis ?");

let pendukung1 = {
  nik: "21221001",
  nama: "Budi",
  alamat: {
    jalan: "Jl.Lele No.1",
    kelurahan: "Meruya Ilir 1",
    kecamatan: "Kebon Jeruk 1",
    kota: "Jakarta Barat",
  },
};
let pendukung2 = {
  nik: "21221002",
  nama: "Agus",
  alamat: {
    jalan: "Jl.Lele No.2",
    kelurahan: "Meruya Ilir 2",
    kecamatan: "Kebon Jeruk 2",
    kota: "Jakarta Barat",
  },
};
let pendukung3 = {
  nik: "21221003",
  nama: "Dodi",
  alamat: {
    jalan: "Jl.Lele No.3",
    kelurahan: "Meruya Ilir 3",
    kecamatan: "Kebon Jeruk 3",
    kota: "Jakarta Barat",
  },
};
let pendukung4 = {
  nik: "21221004",
  nama: "Ujang",
  alamat: {
    jalan: "Jl.Lele No.4",
    kelurahan: "Meruya Ilir 4",
    kecamatan: "Kebon Jeruk 4",
    kota: "Jakarta Barat",
  },
};
const pendukung = [pendukung1, pendukung2, pendukung3, pendukung4];

function randomPendukung(pendukung) {
  const pengacakPendukung = Math.floor(Math.random() * pendukung.length);
  const Pendukung = pendukung[pengacakPendukung];
  return Pendukung;
}
const hasilPendukung = randomPendukung(pendukung);

const hadiah = [
  "Uang tunai 1JT Rupiah",
  "Sepeda Listrik",
  "Layanan Internet Gratis Seumur Hidup",
  "BPJS Unlimited",
];
function randomHadiah(hadiah) {
  const pengacakHadiah = Math.floor(Math.random() * hadiah.length);
  const Hadiah = hadiah[pengacakHadiah];
  return Hadiah;
}
const hasilHadiah = randomHadiah(hadiah);

alert(
  "===DAFTAR PENDUKUNG AJIS===" +
    "\nNik    : " +
    hasilPendukung.nik +
    "\nNama   : " +
    hasilPendukung.nama +
    "\nAlamat  " +
    "\n   Jalan       : " +
    hasilPendukung.alamat.jalan +
    "\n   Kelurahan   : " +
    hasilPendukung.alamat.kelurahan +
    "\n   Kecamatan   : " +
    hasilPendukung.alamat.kecamatan +
    "\n   Kota        : " +
    hasilPendukung.alamat.kota +
    "\n   Hadiah      : " +
    hasilHadiah
);
