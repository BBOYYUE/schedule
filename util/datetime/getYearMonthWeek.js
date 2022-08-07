let getYearWeek = function (a, b, c) {
    // date1是当前日期  
    // date2是当年第一天  
    // d是当前日期是今年第多少天  
    // 用d + 当前年的第一天的周差距的和在除以7就是本年第几周  
    var date1 = new Date(a, parseInt(b) - 1, c),
        date2 = new Date(a, 0, 1),
        d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
    return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7);

};
let date = new Date()

const YEAR_NUMBER = date.getFullYear()
const WEEK_NUMBER = getYearWeek(date.getFullYear(), date.getMonth(), date.getDay())
export { YEAR_NUMBER, WEEK_NUMBER }
