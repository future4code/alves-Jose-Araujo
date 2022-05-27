```
function calculaNota(ex, p1, p2) {
  let multiplicaNotas = ex * 1 + p1 * 2 + p2 * 3;
  let dividirNotas = 1 + 2 + 3;
  let resultado = multiplicaNotas / dividirNotas;

  if (resultado >= 9) {
    return `A`;
  } else if (resultado >= 7.5) {
    return `B`;
  } else if (resultado >= 6) {
    return `C`;
  } else {
    return `D`;
  }
}
```
