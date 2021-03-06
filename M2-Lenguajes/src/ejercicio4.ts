interface Books {
    title: string,
    isRead: boolean
}
const books: Books[] = [
    { title: "Harry Potter y la piedra filosofal",isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(book: Books[], titleToSearch: string) {
    const bookIsRead = book.some(b => b.title === titleToSearch && b.isRead)
    return bookIsRead;
}

console.log(`Ejercicio 4, libro 1: ${isBookRead(books, "Devastación")}`); // true
console.log(`Ejercicio 4, libro 2: ${isBookRead(books, "Canción de hielo y fuego")}`); // false
console.log(`Ejercicio 4, libro 3: ${isBookRead(books, "Los Pilares de la Tierra")}`); // false