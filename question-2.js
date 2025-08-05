const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
result = students
  .filter((personData) => personData.score > 50) 
  .map((personData) => personData.score *= 1.1) 
  .reduce((acc, curr) => acc + curr, 0)
  .toFixed(1)
console.log(`Total score is ${result}`)