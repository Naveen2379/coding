var arr = [
    'chunk2.dewdf34.js',
    'chunk2.dewdf34.js.map',
    'bundle2.qwdwe32e.js',
    'bundle2.qwdwe32e.js.map',
    'bundle2.qwdwe32e.css',
    'bundle2.qwdwe32e.css.map',
    'chunk.dewdf34.css',
    'chunk.dewdf34.css.map',
    'bundle2.qwdwe32e.JS.map',
];

/* using Regular Expression test and ignoreCase */
const resArr1 = arr.filter( (element) => {
    const re = /js.map/gi;
    const res = re.test(element);
    if(res) return element;
});
console.log(resArr1);

/* using String includes method and case insensitive */
const resArr2 = arr.filter( (element) => {
    const caseIns = element.toUpperCase();
    return caseIns.includes('JS.MAP')
});
console.log(resArr2);
