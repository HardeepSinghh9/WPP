// const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thurasday", "friday", "saturday"];

// const today = new Date();

// const day = weekdays[today.getDay()];

// let hours =today.getHours();
// let minutes =today.getMinutes();
// let seconds =today.getSeconds();
// const ampm =hours >= 12 ? 'PM' : 'AM';
// hours = hours%12;
// hours = hours ? hours : 12;

// console.log(`today is : ${day}.`);
// console.log(`current time is : ${hours} :${minutes} :${seconds} ${ampm}`);
// console.log(today);

function add0(value) {
    if(value<10){
        return `0${value}`;
    }else{
        return value;
    }
}

function displaydaytime() {
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[now.getDay()];
    
    let hours = now.getHours();
    const minutes = add0(now.getMinutes());
    const seconds = add0(now.getSeconds());
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const format = add0(hours);
    
    console.log(`Today is: ${day}.`);
    console.log(`Current time is: ${format} : ${minutes} : ${seconds} ${ampm}`);
}

displaydaytime();

