import React from 'react'
import { Dimensions} from 'react-native'
import Logo from '../../assets/Logotype/LogoOP.svg'
import HomeIcon     from '../../assets/Icons/megaphone-fill'
import FormIcon     from '../../assets/Icons/journal-richtext'
import SettingsIcon from '../../assets/Icons/list-ul'

const {width, height} = Dimensions.get('screen')
const backgrounds = ['#4000FF', '#6444F0', '#55ff', '#4466EE']
//const backgrounds = ['#A5BBFF', '#DDBEFE', '#B98EFF', '#55AAAF']
const data = [
    {
        key:0,
        tela:'OP',
        titulo: 'Ocorrências Públicas',
        descricao: `Olá seja muito bem-vindo, iremos te passar alguns detalhes sobre o que o OP tem a oferecer.`,
        image: <Logo style={{width: 300, height: 300, resizeMode: 'contain' }}  />
    },
    {
        key:1,
        tela:'Reportar',
        titulo: 'Página de Reportar',
        descricao: `
        Esta página é onde você poderá reportar suas ocorrências, você selecionará uma categoria referente ao problema, e logo em sequida
        será direcionado ao formulário da ocorrência, onde você insere uma foto, seleciona a subcategoria do problema que mais se encaixa com a situação,
        informará um titulo, selecionará no mapa o local e irá descrever em detalhes sobre a situação a ser reportadas.
        `,
        image: <HomeIcon size={200} fill="#fff" />
    },
    {
        key:2,
        tela:'Chamados',
        titulo: 'Página de Chamados',
        descricao: `
        Na página de Chamados é possível visualizar seus "chamados" em aberto e de todos da região, sendo possível filtrar-los e apoiar-los para garantir uma maior visibilidade
        da ocorrência reportada, mostrando assim que está afetando cada vez mais pessoas.
        `,
        image: <FormIcon size={200} fill="#fff" />
    },
    {
        key:3,
        tela:'Opções',
        titulo: 'Página de Opções',
        descricao: `
        Na página de Opções você poderá visualizar seus dados, editar-los como por exemplo: adicionar uma foto, alterar seu nome, sua senha ou excluir sua conta.
        Também é possível visualizar novamente este tutorial clicando no botão de "Ver Tutorial" e sair da conta.  
        `,
        image: (<SettingsIcon size={200} fill="#fff" />)
    },
]
export { backgrounds, data}