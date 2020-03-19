export default (str) => {
    return str.replace(/(^\s*)|(\s*$)/g, "")
}