const s2 = " Hello I'm vaisvik";

function countwords(str) {
    var matches = str.match(/[\w\d\’\'-]+/gi);
    console.log(matches)
    return matches ? matches.length : 0;
}
console.log(countwords(s2));