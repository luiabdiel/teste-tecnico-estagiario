const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Questao3() {
  function sumEvenNumbers(array) {
    const evenNumbers = array.filter((number) => number % 2 === 0)
    const totalSum = evenNumbers.reduce((acc, number) => acc + number, 0)

    return totalSum
  }

  const sumOfEvens = sumEvenNumbers(numerosInteiros)

  return (
    <>
      <h1>Questão 3</h1>
      <p>
        Escreva uma função JavaScript que recebe uma matriz de números inteiros
        e retorna a soma de todos os números pares. Exiba a soma na tela.
      </p>
      <p>Soma: {sumOfEvens}</p>
    </>
  );
}
