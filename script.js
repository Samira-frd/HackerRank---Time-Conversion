

// function timeConversion(s) {
    
    // let date = new Date();
    // let h = date.getHours();
    // let m = date.getMinutes();
    // let sec = date.getSeconds();
    // let session = "AM";

    
//     s = s.split("");
//     let h = parseInt(s[0]+s[1]) ;
//     let m = parseInt(s[3]+s[4]) ;
//     let sec = parseInt(s[6]+s[7]);
//     let session = s[8]+s[9];
//     let hour = 12;
   
    
//     hour = (h<10) ? `0${h}` : h;
//     m = (m<10) ? `0${m}` : m;
//     sec = (sec<10) ? `0${sec}` : sec;
    
//     if(session === "PM" && h!==12){
//             hour = h+ 12;
//     } else if(session === "AM" && h===12){
//         hour = "00";
//     }
//     console.log(`${hour}:${m}:${sec}`);

// }

// timeConversion('12:05:45PM')


function timeConversion(s) {

    let lastTwo = s.substring(8);
    let fullTime = s.substring(0,8);
    let times = fullTime.split(':');

    if(lastTwo==="PM"){
        if(times[0] !== "12"){
            times[0] = parseInt(times[0]) + 12;
        }
    } else {
        if(times[0] === "12"){
            times[0] = "00";
        }
    }

    return times.join(':');
}

timeConversion('12:05:45PM')