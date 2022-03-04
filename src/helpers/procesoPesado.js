export const procesoPesado = (iteraciones) => {
  for (let index = 1; index <= iteraciones; index++) {
    console.log(`${index} - Ahi vamos...`);
  }

  return `${iteraciones} iteraciones realizadas.`;
};
