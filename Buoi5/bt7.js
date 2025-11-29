let laNguyenTo;
console.log("Danh sách số nguyên tố từ 2 đến 100:");

for (let n = 2; n <= 100; n++) {
   laNguyenTo = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      laNguyenTo = false;
      break; 
    }
  }

  if (laNguyenTo) {
    console.log(n);
  }
}
