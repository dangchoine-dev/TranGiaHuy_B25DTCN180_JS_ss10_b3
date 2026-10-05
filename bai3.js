let borrowRecords = [
    {
        recordId: "PM01",
        studentId: "SV101",
        bookTitle: "JavaScript Cơ Bản",
        borrowDays: 10,
        isReturned: false
    },
    {
        recordId: "PM02",
        studentId: "SV102",
        bookTitle: "C Programming",
        borrowDays: 16,
        isReturned: false
    },
    {
        recordId: "PM03",
        studentId: "SV103",
        bookTitle: "Database",
        borrowDays: 12,
        isReturned: false
    }
];

console.log("===== KHỞI TẠO =====");
console.log(borrowRecords);

borrowRecords.push({
    recordId: "PM04",
    studentId: "SV104",
    bookTitle: "Clean Code",
    borrowDays: 18,
    isReturned: false
});

console.log("\n===== SAU KHI THÊM PM04 =====");
console.log(borrowRecords);

console.log("\n===== TÍNH PHÍ PHẠT =====");

for (let i = 0; i < borrowRecords.length; i++) {
    let fine = 0;

    if (borrowRecords[i].borrowDays > 14) {
        fine = (borrowRecords[i].borrowDays - 14) * 5000;
    }

    borrowRecords[i].fine = fine;

    console.log(
        borrowRecords[i].recordId,
        "- Phí phạt:",
        fine.toLocaleString(),
        "VNĐ"
    );
}

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId == "PM01") {
        borrowRecords[i].isReturned = true;
    }
}

console.log("\n===== SAU KHI TRẢ PM01 =====");
console.log(borrowRecords);

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId == "PM03") {
        borrowRecords.splice(i, 1);
        break;
    }
}

console.log("\n===== SAU KHI XÓA PM03 =====");
console.log(borrowRecords);

console.log("\n" + "=".repeat(70));
console.log("              BẢNG TỔNG KẾT THƯ VIỆN");
console.log("=".repeat(70));

for (let i = 0; i < borrowRecords.length; i++) {
    console.log(
        borrowRecords[i].recordId.padEnd(8) +
        borrowRecords[i].studentId.padEnd(10) +
        borrowRecords[i].bookTitle.padEnd(22) +
        String(borrowRecords[i].borrowDays).padStart(3) + " ngày   " +
        (borrowRecords[i].isReturned ? "Đã trả" : "Chưa trả").padEnd(10) +
        String(borrowRecords[i].fine).padStart(10) + " VNĐ"
    );
}

console.log("=".repeat(70));