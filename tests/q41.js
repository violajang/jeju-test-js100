const prime = 1;

function primeFunc(n) {
    for(let i=2; i<n; i++) {
        if(n%i === 0){
            console.log("NO");
            return false;
        }
    }
    if(prime === 1){
        console.log("NO");
        return false
    }
    console.log("YES");
}

primeFunc(prime)