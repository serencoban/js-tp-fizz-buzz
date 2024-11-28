(function(){
    const fizzBuzz = {
        olElement : document.getElementById('fizzbuzz'),
        windowHeight : window.innerHeight,
        start : 1,
        end : 100,  // deux variables quon va mettre à jour
        init(){   // toute les instructions
            this.gap = this.end   // il n'est pas dans la prorpiete et dans la methode init car c'est un instructions en cours
            document.documentElement.classList.add('js-enabled')
            this.generateItemElements();
            window.addEventListener('scrollend',  (evt)=>{
                this.generateLiNumberElement();
            });
        },
        toggleSum(evt){
            //qd on click sur l'item, on veut permutter 2 attribut
            [evt.currentTarget.dataset.sum , evt.currentTarget.textContent]= [evt.currentTarget.textContent , evt.currentTarget.dataset.sum];     //on click sur le li et on veut faire un truc avec le li=> evt.currenttarget
        },
        getSum(until) {
            return until * ((until+1)) / 2;
        },
        generateItemElements() {
            for (; this.start <= this.end; this.start++) {
                if (this.start % 15 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
                } else if (this.start % 5 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
                } else if (this.start % 3 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="fizz">FI<i>zz</i></li>');
                } else {
                    const liElement = document.createElement('li');
                    liElement.textContent = this.start;
                    liElement.addEventListener('click', this.toggleSum);
                    liElement.dataset.sum = this.getSum(start);
                    this.olElement.insertAdjacentElement('beforeend', liElement);
                }
            }
            this.end += this.gap;   //la fin est incrementé de 100
        },
        generateLiNumberElement() {
            const bodyHeight = document.body.clientHeight;
            const scroll = window.scrollY;
            if (scroll + this.windowHeight >= bodyHeight) {
                this.generateItemElements();
            }
        }
    };

    fizzBuzz.init();

})();