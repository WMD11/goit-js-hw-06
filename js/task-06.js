/* Exercițiul 6
Scrieți un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), verifică dacă numărul de caractere introduse este corect.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Numărul de caractere admis trebuie specificat în atributul data-length.
Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.
Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la fișierele sursă ale acestui exercițiu. */

const validationInput = document.getElementById('validation-input');
const validClass = 'valid';
const invalidClass = 'invalid';

validationInput.addEventListener('blur', function () {
  const inputValue = validationInput.value;
  const expectedLength = parseInt(validationInput.getAttribute('data-length'));

  if (inputValue.length === expectedLength) {
    validationInput.classList.remove(invalidClass);
    validationInput.classList.add(validClass);
  } else {
    validationInput.classList.remove(validClass);
    validationInput.classList.add(invalidClass);
  }
});