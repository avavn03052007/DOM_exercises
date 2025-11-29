let diemCauThu,lettong;
 diemCauThu = [12, 8, 15, 20, 5, 18, 22, 10, 7, 14];
 tong = 0;

for (let i = 0; i < diemCauThu.length; i++) {
  tong += diemCauThu[i];
}

console.log("Tổng điểm của đội là:", tong);

if (tong > 100) {
  console.log("Đội thắng!");
}