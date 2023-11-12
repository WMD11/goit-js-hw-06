/* Exercițiul 1
Codul HTML conține o listă de categorii ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

Scrieți un script care:

Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
Ca rezultat, în consolă vor fi afișate astfel de mesaje: */


const categoriesList = document.getElementById("categories");
const categories = categoriesList.getElementsByClassName("item");
console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i = i + 1) {
  const category = categories[i];
  const categoryName = category.getElementsByTagName("h2")[0].innerText;
  const elements = category.getElementsByTagName("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
}