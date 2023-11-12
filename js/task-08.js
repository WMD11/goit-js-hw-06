/* Exercițiul 8
Scrieți un script de control al formularului de login.
Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
La trimiterea formularului, pagina nu trebuie să se reîncarce.
Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosiți proprietatea elements.
Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.
 */

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[name="email"]');
    const password = loginForm.querySelector('input[name="password"]');
    if (email.value === "" || password.value === "") {
        alert('Please enter a value!');
    } else {
        alert('The form has been successfully saved!');
        console.log(`This form has a username of: ${email.value} and a password: ${password.value}`);
    }
    email.value = "";
    password.value = "";
});