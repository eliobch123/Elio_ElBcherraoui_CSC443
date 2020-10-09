const change_text = (x, y) => {
    if (change_text.invocations == undefined)
        change_text.invocations = 0;
    else change_text.invocations++;

    if (change_text.invocations % 2 == 0)
        document.getElementById("towrite").innerHTML += "hello!";
    else document.getElementById("towrite").innerHTML += "well done!";
};
const change_days = (x, y) => {
    if (change_days.invocations == undefined) change_days.invocations = 0;
    else change_days.invocations++;

    if (change_days.invocations == 7) change_days.invocations = 0;

    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    document.getElementById("towrite1").innerHTML =
        days[change_days.invocations];
};
const change_month = (x, y) => {
    if (change_month.invocations == undefined)
        change_month.invocations = 0;
    else change_month.invocations++;

    if (change_month.invocations == 12) change_month.invocations = 0;

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Nomvember",
        "December",
    ];
    document.getElementById("towrite2").innerHTML = months[change_month.invocations];
};
