let dssinhVien;
 dsSinhVien = [
  { hoTen: "Nguyễn Văn A", tuoi: 20, diaChi: "Hà Nội", gioiTinh: true, sdt: "0912345678" },
  { hoTen: "Trần Thị B", tuoi: 22, diaChi: "Huế", gioiTinh: false, sdt: "0987654321" },
  { hoTen: "Lê Văn C", tuoi: 21, diaChi: "Đà Nẵng", gioiTinh: true, sdt: "0909090909" }
];


const xayDungDoiTuong = sinhVien =>
  `Sinh viên ${sinhVien.hoTen} có tuổi là ${sinhVien.tuoi}, giới tính là ${sinhVien.gioiTinh ? "Nam" : "Nữ"}, địa chỉ: ${sinhVien.diaChi}`;


const inDanhSachSV = ds =>
  ds.forEach(sv => console.log(xayDungDoiTuong(sv)));


const sapXepDanhSachSV = ds =>
  [...ds].sort((a, b) => a.hoTen.localeCompare(b.hoTen));


const timSinhVienTheoSDT = (ds, sdt) => {
  const sv = ds.find(sv => sv.sdt === sdt);
  return sv || "Không tìm thấy sinh viên";
};


const themSinhVien = (ds, svMoi) => ds.push(svMoi);


const xoaSinhVienTheoTuoi = (ds, tuoi) => {
  return ds.filter(sv => sv.tuoi !== tuoi);
};
