async function signIn(cpf, senha){
    return new Promise((resolve, reject) => {
        console.log(cpf,senha)
        setTimeout(() => {
            if (senha === '123' && cpf === '123') {
              resolve({
                token: 'abc123',
                cpf: '123',
              });
              console.log('Cidadão acessou com sucesso a conta!')
            } else {
              reject(new Error('Credenciais inválidas!'));
              console.log('Cidadão falhou ao acessar a conta!')
            }
          }, 1000);
        });
      };

export const authService = {signIn}