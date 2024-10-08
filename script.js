function roundToFourSigFigs(num) {
    if (num === 0) return 0;
    const sign = Math.sign(num);
    num = Math.abs(num);
    const magnitude = Math.floor(Math.log10(num));
    const factor = Math.pow(10, magnitude - 3);
    const rounded = sign * Math.round(num / factor) * factor;

    return parseFloat(rounded.toPrecision(4));
}

function convertFromMgL() {
    let mgL = parseFloat(document.getElementById('mgL').value);
    if (isNaN(mgL)) mgL = 0;

    let molarMass = parseFloat(document.getElementById('molarMass').value);
    if (isNaN(molarMass) || molarMass === 0) molarMass = 18.01528; // Default to water

    let ionCharge = parseFloat(document.getElementById('ionCharge').value);
    if (isNaN(ionCharge) || ionCharge === 0) ionCharge = 1;

    let ppm = mgL;
    let ppb = mgL * 1000;
    let molL = mgL / 1000 / molarMass;
    let umolL = molL * 1e6;
    let ueqL = umolL * ionCharge;

    document.getElementById('ppm').value = roundToFourSigFigs(ppm);
    document.getElementById('ppb').value = roundToFourSigFigs(ppb);
    document.getElementById('molL').value = roundToFourSigFigs(molL);
    document.getElementById('umolL').value = roundToFourSigFigs(umolL);
    document.getElementById('ueqL').value = roundToFourSigFigs(ueqL);
}

function convertFromPpm() {
    let ppm = parseFloat(document.getElementById('ppm').value);
    if (isNaN(ppm)) ppm = 0;

    convertFromMgL();
}

function convertFromPpb() {
    let ppb = parseFloat(document.getElementById('ppb').value);
    if (isNaN(ppb)) ppb = 0;

    let mgL = ppb / 1000;
    document.getElementById('mgL').value = roundToFourSigFigs(mgL);
    convertFromMgL();
}

function convertFromMolL() {
    let molL = parseFloat(document.getElementById('molL').value);
    if (isNaN(molL)) molL = 0;

    let molarMass = parseFloat(document.getElementById('molarMass').value);
    if (isNaN(molarMass) || molarMass === 0) molarMass = 18.01528; // Default to water

    let mgL = molL * 1000 * molarMass;
    document.getElementById('mgL').value = roundToFourSigFigs(mgL);
    convertFromMgL();
}

function convertFromUmolL() {
    let umolL = parseFloat(document.getElementById('umolL').value);
    if (isNaN(umolL)) umolL = 0;

    let molL = umolL / 1e6;
    document.getElementById('molL').value = roundToFourSigFigs(molL);
    convertFromMolL();
}

function convertFromUeqL() {
    let ueqL = parseFloat(document.getElementById('ueqL').value);
    if (isNaN(ueqL)) ueqL = 0;

    let ionCharge = parseFloat(document.getElementById('ionCharge').value);
    if (isNaN(ionCharge) || ionCharge === 0) ionCharge = 1;

    let umolL = ueqL / ionCharge;
    document.getElementById('umolL').value = roundToFourSigFigs(umolL);
    convertFromUmolL();
}

function clearFields() {
    document.getElementById('mgL').value = '';
    document.getElementById('ppm').value = '';
    document.getElementById('ppb').value = '';
    document.getElementById('molL').value = '';
    document.getElementById('umolL').value = '';
    document.getElementById('ueqL').value = '';
    document.getElementById('molarMass').value = '18.01528';
    document.getElementById('ionCharge').value = '1';
}
