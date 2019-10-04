module.exports = function (postalCode) {
    usCode = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
    caCode = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
    defaultCode = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;

    const codeExprs = [usCode, caCode, defaultCode];

    for (let regex of codeExprs){
        isMatch = regex.test(postalCode);
        if (isMatch){
            return isMatch;
        }
    }
    return false;
}
