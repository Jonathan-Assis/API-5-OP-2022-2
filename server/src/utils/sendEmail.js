const nodemailer = require('nodemailer');
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb+srv://root:root@cluster0.a0mnjqy.mongodb.net/opdb')
const opdb = client.db('opdb');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nox20231@gmail.com',
    pass: 'cdgofazxmdgqywbc'
  }
});

async function main() {
  const emails = (await opdb.collection('cidadao').find().toArray()).map(cidadao => cidadao.email);

  const mailOptions = {
    from: 'nox20231@gmail.com',
    to: emails.join(','),
    subject: 'Alerta de vazamento de dados',
    html: '<body> <div style="background-color: #ffcccc; border: 1px solid #ff0000; padding: 15px; border-radius: 25px; width: 500px; " >' +
      '<p><strong>ALERTA DE VAZAMENTO DE DADOS:</strong></p>' +
      '<p>Caro usuário, infelizmente detectamos um vazamento de dados em nossos sistemas. Um terceiro não autorizado acessou seu nome, CPF, endereço de email e senha.</p>' +
      '<p>Estamos agindo rapidamente para proteger sua conta. Por favor, altere suas senhas imediatamente!</p>' +
      '<div><center><strong>Em caso de dúvidas, fique a vontade de entrar em contato!</center></strong></div></div></body>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
main().finally(() => client.close());

