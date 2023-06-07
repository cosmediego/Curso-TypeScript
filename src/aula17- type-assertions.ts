/** recomendado */
//Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

//non-null assertinon(!)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//HTMLeLEMENT
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();


/**Não recomendado */
const body4 = (document.querySelector('body') as unknown) as number;

//non-Null assertion(!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

