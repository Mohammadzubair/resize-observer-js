const typeElement = document.querySelector(".typography")
// const devElement = document.querySelector(".devElement")

const myFirstObserver = new ResizeObserver((enteries) => {
  const typeElementStyles = enteries[0]
  const isBigger = typeElementStyles.contentRect.width < 150
  typeElementStyles.target.style.backgroundColor = isBigger ? "black" : "white"
  typeElementStyles.target.style.color = isBigger ? "white" : "black"
  console.log(isBigger)
  console.log(typeElementStyles)
})

myFirstObserver.observe(typeElement)
// myFirstObserver.observe(devElement)