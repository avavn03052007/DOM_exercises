let tongPhieu;
const phieuBau = [
  { ungCuVien: 'A', soPhieu: 50 },
  { ungCuVien: 'B', soPhieu: 30 },
  { ungCuVien: 'C', soPhieu: 20 }
];


 tongPhieu = 0;
for (const phieu of phieuBau) {
  tongPhieu += phieu.soPhieu;
}

console.log(`Tổng số phiếu: ${tongPhieu}`);


console.log("Chi tiết từng ứng cử viên:");
for (let i in phieuBau) {
  const ungCuVien = phieuBau[i].ungCuVien;
  const soPhieu = phieuBau[i].soPhieu;
  console.log(`- Ứng cử viên ${ungCuVien}: ${soPhieu} phiếu`);
}
