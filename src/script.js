/*
document.documentElement.classList.add('js-enabled');
const olElement = document.getElementById('fizzbuzz');

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {    // (i % 15 === 0)
        olElement.insertAdjacentHTML('beforeend', '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
    } else if (i % 5 === 0) {
        olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
    } else if (i % 3 === 0) {
        olElement.insertAdjacentHTML('beforeend', '<li class="fizz">FI<i>zz</i></li>');
    } else {
        olElement.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
    }
}
*/
(function (){
    const fizzBuzzApp ={
        olElement: document.getElementById('fizzbuzz'),
        init() {
            document.documentElement.classList.add('js-enabled');
            this.generateList();
        },
        generateList(){
            for (let i = 1; i <= 100; i++) {
                if (i % 3 === 0 && i % 5 === 0) {    // (i % 15 === 0)
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
                } else if (i % 5 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
                } else if (i % 3 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="fizz">FI<i>zz</i></li>');
                } else {
                    this.olElement.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
                }
            }
        }

    }
    fizzBuzzApp.init();
})();