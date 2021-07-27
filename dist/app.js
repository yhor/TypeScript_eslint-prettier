"use strict";
let asd = '';
asd = 'adad2123124';
function tmdduf() {
    // console.log('asdasd');
    return Promise.resolve('a');
}
tmdduf()
    .then((a) => {
    console.log(a);
    console.log(asd);
    return a;
})
    .then((a) => {
    console.log(a);
    return a;
})
    .then((a) => {
    console.log(a);
    return a;
});
//# sourceMappingURL=app.js.map