const { ObjectId, MongoClient } = require('mongodb');
const url = process.env.DB;

class TermosController {
    /*
    {
        data: string,
        versao: string,
        descr: string
    }
    */
    static async newTermo(req, res) {
        const client = new MongoClient(url);
        const data = req.body;
/* 
        let x = {
            data: new Date().toISOString(),
            versao: '1.0',
            descr: 'Termos de Uso e de Política de Privacidade/n' + 
                'A sua privacidade é importante para nós. É política do Ocorrências Públicas respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no app Ocorrências Públicas.\n' +
                'Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será utilizado. \n' +
                'Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.\n' +
                'Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. O nosso aplicativo pode ter links para sites externos que não são operados por nós. \n' +
                'Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.\n' +
                'Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.\n' +
                'O uso continuado de nosso aplicativo será considerado como aceitação de nossas práticas em torno de Aviso de Privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.\n' +
                '\n' +
                'Compromisso do Usuário: O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Ocorrências Públicas oferece no aplicativo e com caráter enunciativo, mas não limitativo: \n' +
                'A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;\n' +
                'B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, betano ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;\n' +
                'C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Ocorrências Públicas, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.\n' +
                '\n' +
                'Mais informações\n' +
                '\n' +
                'Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro seguir o bom senso, caso interaja com um dos recursos que você usa em nosso aplicativo.\n' +
                '\n' +
                'Esta política é efetiva a partir de 2 setembro 2022 10:46'
        }

        res.json(x)
 */
        /* try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('termos')
                .insertOne(data);
            
            res.json(!!result);
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
        finally {
            client.close();
        } */
    }

    static async getTermo(req, res) {
        const client = new MongoClient(url);
        const { id } = req.body;

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('termos').findOne({
                _id: new ObjectId(id)
            });

            if(!!result) {
                res.json(result);
            }
            else {
                throw 'Termos de Uso não encontrado'
            }
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
        finally {
            client.close();
        }
    }

    static async getLastTermo(req, res) {
        const client = new MongoClient(url);
        //const data = req.body;

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('termos').findOne({}, {sort:{$natural:-1}})

            if(!!result) {
                res.json(result);
            }
            else {
                throw 'Termos de Uso não encontrado'
            }
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
        finally {
            client.close();
        }
    }

    static async compairTermo(req, res) {
        const client = new MongoClient(url);
        const data = req.body;
        console.log(data)
        try {
            const opdb = client.db('opdb');
            const lastTermo = await opdb.collection('termos').findOne({}, {sort:{$natural:-1}})
            const cidadao = await opdb.collection('cidadao').findOne({
                _id: new ObjectId(data.id)
            })

            if(!!cidadao && !!lastTermo){
                let termoAtual = cidadao.termos.filter((value) => value.id.toString() == lastTermo._id.toString())
                
                if(termoAtual.length > 0){
                    res.json({
                        lastTermo: lastTermo._id.toString(),
                        termos: cidadao.termos
                    })
                }
                else {
                    res.json({termoAtual: false})
                }
            }
            else {
                throw 'Termos de Uso não encontrado'
            }         
        } 
        catch (e) {
            console.error(e)
            res.status(400).json({error: e});
        }
        finally {
            client.close();
        }

    }
}
module.exports = TermosController;