function readString(text: string): string {
    
    let i: number = 0
    let arr = [0, 1, 0]
    while (text[i] !== "."){
        arr[0]++
        text[i] == " " && arr[1]++
       ((["a", "i", "o", "u", "e"]).indexOf(text[i])!= -1) && arr[2]++
        i++

    }
    return `length is ${arr[0]}, number of words is ${arr[1]},
    number of vowels is ${arr[2]}`
}
console.log(readString("hello theree."))

