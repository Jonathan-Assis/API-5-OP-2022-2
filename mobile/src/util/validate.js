export const validatePassword = (senha) => {

  const hasNumber = /\d/.test(senha)
  const hasLowercase = /[a-z]/.test(senha)
  const hasUppercase = /[A-Z]/.test(senha)
  const hasSpecialChar = /[_\W]/.test(senha)
  const isLongEnough = senha.length >= 8

  const strength = (hasNumber + hasLowercase + hasUppercase + hasSpecialChar + isLongEnough) * 25

  let strengthText = ''
  if (strength === 125) {
    strengthText = 'Forte'
  }
  else if (strength > 50) {
    strengthText = 'Média'
  }
  else if (strength >= 25) {
    strengthText = 'Fraca'
  }

  return { strengthText };
};