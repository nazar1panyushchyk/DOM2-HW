const listItems = document.querySelectorAll('#categories, .item');
// console.log(`У списку ${listItems.length} категорії.`);

listItems.forEach(category => {
    const title = category.querySelector('h2').textContent;
    console.log(`Категорія:`, title);

    const itemAmount = category.querySelectorAll('ul li').length;
    console.log(`Кількість елементів:`, itemAmount);
});