//reverse the string
let a = "omkar wagh is getting job soon in pune"
let revv = "";
for (let i = a.length - 1; i >= 0; i--) {
    revv = revv + a.charAt(i)
}
console.log(revv)

//find duplicate array
let b = [1, 2, 3, 2, 3, 2, 4]
for (let j = 0; j <= b.length - 1; j++) {
    for (let k = j + 1; k <= b.length - 1; k++) {
        if (b[j] == b[k]) {
            console.log(b[j] + " is duplicate value in array")
            break
        }
    }
}
//find vowels 
let value = "omkar ggeting% job in@ pune soon";
let value2 = value.replaceAll(" ", "");
let count = 0;
for (let g = 0; g <= value2.length - 1; g++) {
    if (value2.charAt(g) == 'a' || value2.charAt(g) == 'e' || value2.charAt(g) == 'i'
        || value2.charAt(g) == 'u' || value2.charAt(g) == 'o') {
        console.log(value2.charAt(g) + " is vowels")
    } else {
        console.log(value2.charAt(g) + " is consolent");
    }
}

//print all words in reverse but sepcial character remain on same place
let value3 = value.split(" ");
let result = ""
for (let value4 of value3) {
    let value5 = value4
    let digit = "";
    if (!/[a-zA-Z0-9]/.test(value4.charAt(value4.length - 1))) {
        value5 = value4.substring(0, value4.length - 1)
        digit = value4.substring(value4.length - 1)
    }
    let rev = ""
    for (let p = value5.length - 1; p >= 0; p--) {
        rev = rev + value5.charAt(p);
    }
    result = result + rev + digit + " "
}
console.log(result)

//see string is palidrome or not
let data = "121";
let palli = "";
for (let r = data.length - 1; r >= 0; r--) {
    palli = palli + data.charAt(r)
}
if (palli == data) {
    console.log(data + " is pallidrome string")
} else {
    console.log(data + " is not pallidrome string")
}

//print highest and lowest word from string
let word = "omkar will get job soon in pune swear"
let word2 = word.split(" ")
let min = 0;
let max = 0;
for (let d = 0; d <= word2.length - 1; d++) {
    if (word2[min].length > word2[d].length) {
        min = d;
    }
    if (word2[max].length < word2[d].length) {
        max = d;
    }
}
let minn = "";
for (let ji = word2[min].length - 1; ji >= 0; ji--) {
    minn = minn + word2[min].charAt(ji);
}
word2[min] = minn;

let maxx = "";
for (let ij = word2[max].length - 1; ij >= 0; ij--) {
    maxx = maxx + word2[max].charAt(ij);
}
word2[max] = maxx;

for (let word3 of word2) {
    console.log(word3 + " ")
}

//move all Zero to left side from array

let sd = [1, 0, 2, 0, 3, 0, 5, 0];
let rd = "";
for (let ds = 0; ds <= sd.length - 1; ds++) {
    if (sd[ds] == 0) {
        rd = rd + sd[ds] + ",";
    }
}
for (let df = 0; df <= sd.length - 1; df++) {
    if (sd[df] != 0) {
        rd = rd + sd[df] + ","
    }
}
console.log(rd)

//tommorow ==>t$mm$$r$$w

// let gh = "tommorow";
// let fd = gh.replaceAll("o","$");

//covert into lower case and reverse the each word in the array
let fi = ["omkAR", "AUToMatIOn", "TEsteR"]
let bn = ""
let bh;
for (let gt of fi) {
    for (let kl = gt.length - 1; kl >= 0; kl--) {
        bn = bn + gt.charAt(kl);
    }
    bn = bn + " "
    bh = bn.toLowerCase()
}
console.log(bh)


//swap number from array

// let nn = [2,1,4,3]
// let temp ;

// for(let we = 0;we<=nn.length-1;we+1){
//     nn[we] = nn[we+1]
//     nn[we+1] = temp
//     temp = nn[we+1]
//     console.log(temp)
// }

//replace o with incremental value $ -->tommorow ==>t$mm$$r$$$w
let au = "Tommorrow"
let count1 = -1
let output = ""
for (let ry = 0; ry <= au.length - 1; ry++) {
    if (au.charAt(ry) == "o") {
        count1++
        for (let x = 0; x <= count1; x++) {
            output = output + "$"
        }
    } else {
        output = output + au.charAt(ry);
    }
} console.log(output)

//reverse the string on its own place
let str = "omkar wagh getting job in pune soon"
let str1 = str.split(" ")
let rev = ""

for (let str2 of str1) {
    for (let aq = str2.length - 1; aq >= 0; aq--) {
        rev = rev + str2.charAt(aq)
    }
    rev = rev + " "
}
console.log(rev)

//find min and max number from array
let hj = [24, 23, 45, 678, 9, 3, 0]
let maximum = hj[0]
let minimum = hj[0]
for (let ol = 0; ol <= hj.length - 1; ol++) {
    if (hj[ol] >= maximum) {
        maximum = hj[ol]
    }
    if (hj[ol] <= minimum) {
        minimum = hj[ol]
    }
}
console.log(maximum + " is highest number")
console.log(minimum + " is lowest number")

//count the number of each character occurance in string

let fd = "omkar will get job soon in pune"
let mv = {}
for (let nj of fd) {
    if (nj != " ") {
        mv[nj] = (mv[nj] || 0) + 1
    }
}
console.log(mv)

//reverse the string from last third 
let ks = "omkar will get job soon in pune"
let ka = ks.split(" ")
let dk = ka[ka.length - 3]
let rvvv = ""

for (let rp = dk.length - 1; rp >= 0; rp--) {
    rvvv = rvvv + dk.charAt(rp)
}
console.log(rvvv)

let col = 5
let row = 4

//star pattern program
for (let ue = 0; ue <= row; ue++) {
    console.log(" ")
    for (let uo = col - ue; uo > 0; uo--) {
        console.log(" *")
    }
}

//console.log 
var dj = "omkar wagh will get job soon in pune"
console.log(4 + 5 + dj + 6 + 9)

//compare two array and get duplicate from two array

let fst = [1, 2, 3, 4, 6, 7]
let sec = [2, 1, 3, 5, 9, 6, 34]

for (let vf = 0; vf <= fst.length - 1; vf++) {
    for (let fv = 0; fv <= sec.length - 1; fv++) {
        if (fst[vf] == sec[fv]) {
            console.log(fst[vf] + " is having duplicate value in it")
            break;
        }
    }
}

// //compare two sentence and find same word from two sentence

let fsts = "omkar getting job in pune soon in qa automation core"
let secs = "omkar getting job in pune soon in qa automation selenium"

let fsts1 = fsts.split(" ")
let secs1 = secs.split(" ")
let dfg = ""
for (let cr = 0; cr < fsts1.length; cr++) {
    if (secs1.includes(fsts1[cr])) {
        dfg = dfg + secs1[cr] + " "
    }
} console.log(dfg.trim())


//Make uppercase if character is present at even position and lowercase if odd

let sk2 = "omkar wagh will get job soon in pune"
let sd3 = ""
for (let i = 0; i <= sk2.length - 1; i++) {
    if (i % 2 === 0) {
        sd3 = sd3 + sk2[i].toUpperCase()
    } else {
        sd3 = sd3 + sk2[i].toLowerCase()
    }
}
console.log(sd3)

//sort the aarray in ascending and descending order
let yu = [5, 3, 7, 9, 1, 2]
let see = yu.sort((a, b) => a - b)
console.log(see)
see = yu.sort((a, b) => b - a)
console.log(see)

//print $ number of times where o occures
let such = "tommorow"
let cou = -1
let op =""
for(let xz = 0;xz<=such.length-1;xz++){
    if(such.charAt(xz)=="o"){
        cou++
        for(let vm=0;vm<=cou;vm++){
         op=op+"$"
        }
    }else{
        op = op+such.charAt(xz)
    }
}console.log(op)
