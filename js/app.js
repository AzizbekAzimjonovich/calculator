const btnDiv = document.querySelector('.btnDiv');
const error = document.querySelectorAll('.error');

function ageCalculator() {
    const dayInput = document.querySelector('.day__input').value.trim();
    const dayInputF = document.querySelector('.day__input')
    const monthInput = document.querySelector('.month__input').value.trim();
    const monthInputF = document.querySelector('.month__input')
    const yearInput = document.querySelector('.year__input').value.trim();
    const yearInputF = document.querySelector('.year__input')
    const errCol = document.querySelectorAll('.errCol')
    const input = document.querySelectorAll('input')

    const dob = new Date(yearInput + '-' + monthInput + '-' + dayInput);
    const now = new Date();


    if (dayInput === "" && monthInput === "" && yearInput === "") {
        for (let i = 0; i < error.length; i++) {
            error[i].textContent = 'This field is required';
            errCol[i].style.color = 'red';
            input[i].style.border = '1px solid red';
        }
        dayInputF.focus()
        return false;
    }

    if (monthInput > 12 && isNaN(dob.getDay()) && yearInput > now.getFullYear()) {
        error[0].textContent = 'Must be a valid day';
        error[1].textContent = 'Must be a valid month';
        error[2].textContent = 'Must be a valid year';
        for (let i = 0; i < error.length; i++) {
            errCol[i].style.color = 'red';
            input[i].style.border = '1px solid red';
        }
        dayInputF.focus()
        return false;
    }


    if (monthInput > 12) {

        error[1].innerHTML = 'Must be a valid month';

        errCol[0].style.color = 'red'
        input[0].style.border = '1px solid red';

        errCol[1].style.color = 'red'
        input[1].style.border = '1px solid red';

        errCol[2].style.color = 'red'
        input[2].style.border = '1px solid red';

        monthInputF.focus()
        return false;
    }
    const kiritilganOy = parseInt(monthInput);
    const kiritilganYil = parseInt(yearInput);

    const daysInMonth = new Date(kiritilganYil, kiritilganOy, 0).getDate();

    console.log("Kiritilgan oyning kunlar soni:", daysInMonth);
    if (dayInput > daysInMonth) {
        error[0].innerHTML = 'Must be a valid day';
        for (let i = 0; i < error.length; i++) {
            errCol[i].style.color = 'red';
            input[i].style.border = '1px solid red';
        }
        dayInputF.focus();
        return false;
    }




    if (yearInput > now.getFullYear()) {

        errCol[0].style.color = 'red'
        input[0].style.border = '1px solid red';

        errCol[1].style.color = 'red'
        input[1].style.border = '1px solid red';

        errCol[2].style.color = 'red'
        input[2].style.border = '1px solid red';

        error[2].innerHTML = 'Must be a valid year';
        yearInputF.focus()
        return false;
    }




    const age_dt = new Date(now - dob);
    const years = age_dt.getFullYear() - 1970;
    const months = age_dt.getMonth();
    const days = age_dt.getDate() - 1;

    document.querySelector(".yearNum").textContent = years;
    document.querySelector(".monthNum").textContent = months;
    document.querySelector(".dayNum").textContent = days;

    dayInputF.value = "";
    monthInputF.value = "";
    yearInputF.value = "";

    errCol[0].style.color = ''
    input[0].style.border = '1px solid rgba(21, 21, 21, 0.25)';

    errCol[1].style.color = ''
    input[1].style.border = '1px solid rgba(21, 21, 21, 0.25)';

    errCol[2].style.color = ''
    input[2].style.border = '1px solid rgba(21, 21, 21, 0.25)';

    error[0].textContent = ''
    error[1].textContent = ''
    error[2].textContent = ''
}

btnDiv.addEventListener('click', ageCalculator);

