```
function calculaPrecoTotal(quantidade) {
  let totalCompra
  if (quantidade < 12) {
    totalCompra = quantidade * 1.30
  } else {
    totalCompra = quantidade * 1
  }
  return totalCompra
}
```
