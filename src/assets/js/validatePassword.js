export default (password) => {
  const isNotEmpty = {
    valid: password.length > 0,
    error: 'empty'
  }
  const isLengthGtr6 = {
    valid: password.length >= 6,
    error: 'length'
  }
  const hasNumber = {
    valid: /[0-9]/.test(password),
    error: 'number'
  }
  const hasSpecial = {
    valid: /[!@#%^&*()]/.test(password),
    error: 'special'
  }

  return {
    isInvalid: !(isLengthGtr6.valid && hasNumber.valid && hasSpecial.valid),
    // Only one error needs to be returned. By leveraging how OR statements return left value if truthy, the code gives priority to left most error
    errorType: !isNotEmpty.valid
      ? isNotEmpty.error
      : false || !isLengthGtr6.valid
      ? isLengthGtr6.error
      : false || !hasNumber.valid
      ? hasNumber.error
      : false || !hasSpecial.valid
      ? hasSpecial.error
      : false
  }
}
