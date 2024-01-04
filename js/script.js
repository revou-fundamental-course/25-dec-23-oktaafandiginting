const form = document.getElementById("bentuk-segitiga");
const results = document.getElementById("hasil");
const areaSpan = document.getElementById("luas");
const perimeterSpan = document.getElementById("keliling");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const alas = Number(document.getElementById("alas").value);
  const tinggi = Number(document.getElementById("tinggi").value);
  const s1 = Number(document.getElementById("s1").value);
  const s2 = Number(document.getElementById("s2").value);
  const s3 = Number(document.getElementById("s3").value);

  // Validasi input
  if (alas <= 0 || tinggi <= 0 || s1 <= 0 || s2 <= 0 || s1 + s2 <= alas) {
    alert("Masukan tidak valid. Masukkan nilai positif untuk alas, tinggi, dan sisi.");
    return;
  }

  // Rumus Luas dan Keliling
  const luas = 0.5 * alas * tinggi;
  const keliling = s1 + s2 + s3;

  // Menampilkan hasil perhitungan
  areaSpan.textContent = luas.toFixed(2);
  perimeterSpan.textContent = keliling.toFixed(2);

  // Menampilkan hasil div
  results.style.display = "block";
});
