function array1() {
    let num = [1, 2, 3, 4, 5, "gustavo"]
    //exibir a quantidade de elementos de uma array
    console.log(num.length)
    //Exibir o primeiro elemento d array 
    console.log(num[5])
}
function array2() {
    let num = [10, 20, 30, 45, 55, 90, 80, 50, 43, 5, 432]
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            console.log(num[i])
        }
    }
}

function array3() {
    let num = [10, 20, 30, 45, 55, 90, 80, 50, 43, 5, 432]
    let maior = num[0]
    for (let i = 1; i < num.length; i++) {
        if (num[i] > maior) {
            maior = num[i]
        }
    }
    console.log(maior)
}

function array4() {

    let n1 = [1, 6, 17, 2, 0]
    let n2 = [65, 0, 7, 20, 49, 1]


    for (let p = 0; p < n1.length ; p++) {
        for(let s = 0; s < n2.length ; s++) {
            if(n1[p] == n2[s]){
                console.log(n1[p])
            }
        }
    }

}

function array5(array) {
    //vamo realizar a soma dos valores di array
    let soma = 0;
    for (let i = 0 ; i < array.length ; i++) {
        soma += array[i]
    }
    return soma     
}

document.body.onload = function() {
    let n = [2,8,0,9]
    let rs = array5(n)
    alert(rs)
    console.log(rs)
    window.document.title = rs
}
