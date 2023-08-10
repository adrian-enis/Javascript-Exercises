/**Escribe una función que determine si un número es capicúa */
{
  function capicúa(num){
    let strNum = num.toString()
    let strNumInverted = strNum.split("").reverse().join("")
    return strNum === strNumInverted
  }

  console.log(capicúa("oso"))
}