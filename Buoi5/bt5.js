let tienVay,letsoDu,letnam;
tienVay;
const laiSuat = 0.05; 


do {
  tienVay = parseFloat(prompt("Nhập số tiền vay ban đầu (USD):"));
} while (isNaN(tienVay) || tienVay <= 100 || tienVay >= 1000);

 soDu = tienVay;
 nam = 1;

console.log(`Số tiền vay ban đầu: $${tienVay.toFixed(2)}`);
console.log("Bảng số dư theo từng năm:");

while (nam <= 10) {
  soDu = soDu * (1 + laiSuat); 
  console.log(`Năm ${nam}: $${soDu.toFixed(2)}`);

  if (soDu > 2 * tienVay) {
    console.log("Số dư đã vượt quá gấp đôi số tiền vay ban đầu. Kết thúc tính toán.");
    break;
  }

  nam++;
}
