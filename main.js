//if the dot product (ps) of two vectors v1 and v2 = 0, then they are orthogonal.

// using v1 [1,3,1] and v2 [3, -1, 0]

// (1*3)+(3*(-1))+(1*0)

// 3 - 3 = 0

function dot_product(v1, v2) {
    let ps = 0
    for (i=0; i<v1.length;i++){
        for (i=0; i<v2.length;i++){
            ps += v1[i]*v2[i]
        }
    }
    if (ps === 0){
        return 'the dot product is '+ps+' and the arrays are orthogonal'

    }else {
        return 'the dot product is '+ps+' and the arrays are not orthogonal'
    }
}

console.log(dot_product([1,3,1],[3,-1,0]))