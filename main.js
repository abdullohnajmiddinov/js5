
let a = prompt('Ismingizni kiriting!')

let b = prompt('Bironta harf yozing!')

let c = a.includes(b)

if (c == true) {
   alert(`${a} isimning ichida ${b} harifi mavjud!`)
}

else {
    alert(`${a} isimning ichida ${b} harifi mavjud emas!`)
}
