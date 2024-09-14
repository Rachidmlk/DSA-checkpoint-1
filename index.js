function readString(text) {
    var i = 0;
    var arr = [0, 1, 0];
    while (text[i] !== ".") {
        arr[0]++;
        text[i] == " " && arr[1]++;
        ((["a", "i", "o", "u", "e"]).indexOf(text[i]) != -1) && arr[2]++;
        i++;
    }
    return "length is ".concat(arr[0], ", number of words is ").concat(arr[1], ",\n    number of vowels is ").concat(arr[2]);
}
console.log(readString("hello theree."));
