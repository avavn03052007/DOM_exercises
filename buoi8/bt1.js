const thuVien = {
  danhSachSach: [],

  themSach(sach) {
    this.danhSachSach.push(sach);
  },

  lietKeSach() {
    this.danhSachSach.forEach(sach => {
      console.log(` ${sach.tieuDe} - Tác giả: ${sach.tacGia} (${sach.namXuatBan})`);
    });
  },

  timSach(tieuDe) {
    const ketQua = this.danhSachSach.filter(sach => sach.tieuDe === tieuDe);
    if (ketQua.length > 0) {
      ketQua.forEach(sach => {
        console.log(` Tìm thấy: ${sach.tieuDe} - Tác giả: ${sach.tacGia} (${sach.namXuatBan})`);
      });
    } else {
      console.log(` Không tìm thấy quyển sách có tiêu đề là "${tieuDe}"`);
    }
  }
};
