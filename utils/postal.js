module.exports = function (postalCode) {
  usCode = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/
  caCode = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
  defaultCode = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/

  const codeExprs = [{expr: usCode, country: 'us'},
                     {expr: caCode, country: 'ca'},
                     {expr: defaultCode, country: 'ambiguous'}]

  for (let regex of codeExprs){
    isMatch = regex.expr.test(postalCode)
    const country = regex.country
    if (isMatch){
      return {isMatch, country,}
    }
  }
  return {isMatch: false, country: ''}
}
