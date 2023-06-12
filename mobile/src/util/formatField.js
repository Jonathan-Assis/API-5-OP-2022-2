import { useState } from 'react'

const useFormattedCPF = (cpf = '') => {
  const [formattedField, setFormattedField] = useState(cpf)
  const [cpfNumbers, setCpfNumbers] = useState(cpf)

  const setCpf = (text) => {
    const onlyNumbers = text.replace(/\D/g, '')
    setCpfNumbers(onlyNumbers)
    setFormattedField(formatCPF(onlyNumbers))
  };

  const formatCPF = (numbers) => {
    let formatField = numbers;

    if (formatField.length > 3 && formatField.length <= 6) {
      formatField = formatField.replace(/(\d{3})(\d)/, '$1.$2');
    } else if (formatField.length > 6 && formatField.length <= 9) {
      formatField = formatField.replace(/(\d{3})(\d{3})(\d)/, '$1.$2.$3');
    } else if (formatField.length > 9) {
      formatField = formatField.replace(/(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
    }

    return formatField
  }

  return [formattedField, cpfNumbers, setCpf]
};

export { useFormattedCPF }