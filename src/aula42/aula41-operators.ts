//Encadeamento opcional e operadorde de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'o titulo',
  texto: 'o texto'
};

console.log(documento.data?.toDateString() ?? 'NÃO EXTISTE DATA');
console.log(undefined ?? '2-eita ');
console.log(undefined ?? 'NÃO EXTISTE DATA');
console.log(null ?? 'NÃO EXTISTE DATA');
console.log(false ?? 'NÃO EXTISTE DATA');
console.log('' ?? 'NÃO EXTISTE DATA');


