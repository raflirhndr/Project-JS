//Daftar Kehadiran Guru
const absensi = prompt("Tuliskan Mapel Anda ( B.Indo, B.Ing, MTK, Programmer )", "");

let bindo = {
  nik: "001",
  nama: "Amir Daud",
  alamat: "Pamulang 1",
};
let mtk = {
  nik: "002",
  nama: "Amir Fuad",
  alamat: "Pamulang 2",
};
let programmer = {
  nik: "003",
  nama: "Amir Dudud",
  alamat: "Pamulang 3",
};
let bing = {
  nik: "004",
  nama: "Amir Mahmud",
  alamat: "Pamulang 4",
};

switch (absensi) {
  case "B.Indo":
    alert(
      "\n ===Selamat Datang=== " +
        "\n" +
        "\n Nama   : " +
        bindo.nama +
        "\n Nik     : " +
        bindo.nik +
        "\n Alamat : " +
        bindo.alamat +
        "\n" +
        "\n ===SELAMAT BERTUGAS==="
    );
    break;
  case "B.Ing":
    alert(
      "\n ===Selamat Datang=== " +
        "\n" +
        "\n Nama   : " +
        bing.nama +
        "\n Nik     : " +
        bing.nik +
        "\n Alamat : " +
        bing.alamat +
        "\n" +
        "\n ===SELAMAT BERTUGAS==="
    );
    break;
  case "MTK":
    alert(
      "\n ===Selamat Datang=== " +
        "\n" +
        "\n Nama   : " +
        mtk.nama +
        "\n Nik     : " +
        mtk.nik +
        "\n Alamat : " +
        mtk.alamat +
        "\n" +
        "\n ===SELAMAT BERTUGAS==="
    );
    break;
  case "Programmer":
    alert(
      "\n ===Selamat Datang=== " +
        "\n" +
        "\n Nama   : " +
        programmer.nama +
        "\n Nik     : " +
        programmer.nik +
        "\n Alamat : " +
        programmer.alamat +
        "\n" +
        "\n ===SELAMAT BERTUGAS==="
    );
    break;

  default:
    break;
}
