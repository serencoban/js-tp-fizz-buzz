# FizzBuzz
> JS exercise given at HEPL

* * *

**js-tp-fizz-buzz** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

> Lors de vos cours de *web*, vous allez découvrir le langage *JavaScript* et le mettre en pratique pour apprendre à rendre vos pages web interactives.  

* * *
_FizzBuzz_ est un jeu de mots destiné aux enfants pour leur enseigner la division. Les joueurs se relaient pour compter progressivement, remplaçant tout multiple de trois par le mot _fizz_, les multiples de cinq par le mot _buzz_ et les multiples de 3 et de 5 par le mot _fizzbuzz_.



## Énoncé

Dans le cadre de ce cours, nous vous demandons d'ajouter à l’aide de JavaScript des éléments dans une liste d'éléments ordonnée qui respectent les mêmes règles.

Nous vous proposons pour plus de confort de réfléchir à vos besoins et de commencer sur une version simplifiée qui pourrait se résumer à des affichages dans la console.

Objectifs à atteindre : 

1. Supprimer par JavaScript la classe `no-js` de l'élément `body`, afin de faire disparaitre la boite de message pour les personnes n'ayant pas JavaScript activé sur leur navigateur.

2. Produire une liste ordonnée d’éléments allant de 1 à 100 bornes incluses;

3. Si le nombre que vous parcourez est divisible par 3, remplacez sa valeur par la chaine de caractère `FIZZ`;

4. Si le nombre que vous parcourez est divisible par 5, remplacez sa valeur par la chaine de caractère `BUZZ`;

5. Si le nombre que vous parcourez est divisible par 3 et par 5, remplacez sa valeur par la chaine de caractère `FIZZBUZZ`.

6. Adaptez le balisage

    1. Si ce n'est pas un multiple de 3 et/ou de 5 alors il faut produire le noeud HTML suivant

      ```html
      <li>1</li>
      ```

      `1` représente ici la valeur dynamique courante du nombre que vous parcourez, `1`,`2`,`4`,etc.

    1. Si c'est un multiple de 3, alors il faut produire le noeud HTML suivant 

      ```html
       <li class="fizz">FI<i>zz</i></li>
      ```

    1. Si c'est un multiple de 5, alors il faut produire le noeud HTML suivant  

      ```html
       <li class="buzz">BU<i>zz</i></li> 
      ```

    1. Si c'est un multiple de 3 et de 5, alors il faut produire le noeud HTML suivant 

      ```html
       <li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>
      ```



![Rendu désiré](./fizzbuzz.gif)





### Bonus 🥳

1. Retirez dans le fichier `index.html` la balise `ol` et produisez celle-ci par JavaScript. 
2. Rendez la production des noeuds infinie. Lorsque l'utilisateur a défilé l’entièreté de la page, produisez les 10 prochains noeuds en respectant les mêmes règles.
