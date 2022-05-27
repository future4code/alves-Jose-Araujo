```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const totalCarrosVendidosComissao = valorTotalVendas/100 * 5
  const salarioTotal = (2000 + totalCarrosVendidosComissao) + qtdeCarrosVendidos * 100

  return salarioTotal
}
```
