let dai,rong,cao;
function tinhTheHinh(chieuDai, chieuRong, chieuCao) {
  return chieuDai * chieuRong * chieuCao;
}

dai, rong, cao;

do {
  dai = parseFloat(prompt("Nhập chiều dài:"));
} while (isNaN(dai) || dai <= 0);

do {
  rong = parseFloat(prompt("Nhập chiều rộng:"));
} while (isNaN(rong) || rong <= 0);

do {
  cao = parseFloat(prompt("Nhập chiều cao:"));
} while (isNaN(cao) || cao <= 0);

console.log(`Thể tích hình hộp là: ${tinhTheHinh(dai, rong, cao)}`);
