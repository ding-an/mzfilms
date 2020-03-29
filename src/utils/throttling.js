export default (func, wait) => {
    let pre = Date.now();
    return function (...args) {
        let now = Date.now();
        if (now - pre >= wait) {
            func.apply(this, args);
            pre = Date.now();
        }
    };
}