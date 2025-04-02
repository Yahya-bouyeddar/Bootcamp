// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // reponse :  => inside the funcOne function 3


// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
// //  => reponse : on peut pas réassigné un const apres sa declaration 

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() 
// // =>reponse : inside the funcThree function 0 car a intialisé par 0


// funcTwo()

// // => reponse : a prend 5 

// funcThree()

// // =>reponse : inside the funcThree function 5


// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// // 
// // funcThree() => // =>reponse : inside the funcThree function 0
// funcTwo() 
// // erreur 

// funcThree()
// // erreur


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()

//   // Définit `window.a` à "hello"
// funcFive()

//  // Affiche "hello" car `a` est maintenant une propriété globale de `window`

// //#4

// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // => reponse :  Affiche "test", car la variable `a` dans funcSix() masque la variable globale `a`.

// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// // il va afficher test aussi 

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console


// // =>in the if block 5
// // =>outside of the if block 2
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?

// // =>in the if block 5
// // =>outside of the if block 2
