//时间戳转换方法
const formateDate = (date) => {
    let oDate = new Date(date*1000);
    let arr = ['一', '二', '三', '四', '五', '六', '日'];
    return {
        "Y": oDate.getFullYear(), //年
        "W": arr[oDate.getDay()], //周
        "M": oDate.getMonth() + 1, // 月份
        "D": oDate.getDate(), // 日
    };
};
export default formateDate;