function CalculateNetSalary(){
    const grossSalary = parseFloat(document.f1.t1.value) || 0;
    const nhif = calculateNhif(grossSalary);
    const nssf = calculateNssf(grossSalary);
    const taxableIncome = grossSalary - nssf;
    const paye = calculatePaye(taxableIncome);
    const netSalary = grossSalary - (paye + nhif + nssf);


document.f1.t2.value = nhif.toFixed(2);
document.f1.t3.value = nssf.toFixed(2);
document.f1.t4.value = taxableIncome.toFixed(2);
document.f1.t5.value = paye.toFixed(2);
document.f1.t6.value = netSalary.toFixed(2);

}
function calculateNssf(grossSalary){
    return Math.min(0.06 * grossSalary, 1080);
}

function calculatePaye(taxableIncome){
    let paye = 0;
    if(taxableIncome <= 24000){
        paye = taxableIncome *0.1;
    }else if (taxableIncome <= 32333){
        paye = 2400 +(taxableIncome - 24000) * 0.25;
    }else{
        paye = 2400 + (32333 - 24000) * 0.25 + (taxableIncome - 32333) *0.3;
    }    return paye;
}

function calculateNhif(grossSalary){
    let nhif = 0;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
    else nhif = 1700;
    return nhif;
}