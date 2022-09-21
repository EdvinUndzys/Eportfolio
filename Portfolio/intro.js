let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{E_}", ms: 100 },
    { t: "{ED_}", ms: 100 },
    { t: "{EDV_}", ms: 100 },
    { t: "{EDVI_}", ms: 100 },
    { t: "{EDVIN_}", ms: 100 },
    { t: "{EDVIN__}", ms: 100 },
    { t: "{EDVIN_U_}", ms: 100 },
    { t: "{EDVIN_UN_}", ms: 100 },
    { t: "{EDVIN_UND_}", ms: 100 },
    { t: "{EDVIN_UNDZ_}", ms: 200 },
    { t: "{EDVIN_UNDZY_}", ms: 200 },
    { t: "{EDVIN_UNDZYS_}", ms: 200 },
    { t: "{EDVIN_UNDZYS }", ms: 200 },
    { t: "{EDVIN_UNDZYS_}", ms: 200 },
    { t: "{EDVIN_UNDZYS}", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();