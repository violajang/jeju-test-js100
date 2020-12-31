const unsorted = "176 156 155 165 166 169";
// const unsorted = "155 156 165 166 169 176";
let sorted = "";

sorted = (unsorted.split(" ").sort((a,b) => {
    return a - b
})).join(" ");

unsorted === sorted ? console.log("YES") : console.log("NO");