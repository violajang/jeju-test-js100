const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const month = "5";
const date = "5";

function solution(a,b){
    const theDay = new Date(`2020-${a}-${b}`);
    theDay.getDay()
    console.log(day[theDay.getDay()]);
}
solution(month, date)