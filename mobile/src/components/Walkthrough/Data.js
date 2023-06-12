import React from 'react'
import Logo from '../../assets/Logotype/LogoOP.svg'
import HomeIcon     from '../../assets/Icons/megaphone-fill'
import FormIcon     from '../../assets/Icons/journal-richtext'
import SettingsIcon from '../../assets/Icons/list-ul'

const backgrounds = ['#500FFF', '#6444F0', '#55ff', '#4444EE']
//const backgrounds = ['#A5BBFF', '#DDBEFE', '#B98EFF', '#55AAAF']
const data = [
    {
        key:0,
        tela:'OP',
        titulo: 'Ocorrências Públicas',
        descricao: `Olá seja muito bem-vindo, iremos te passar alguns detalhes sobre o que o OP tem a lhe oferecer.
        Mas não se preocupe este tutorial ficará disponível na página de "Opções".`,
        image: <Logo style={{color:'#fff' ,width: 300, height: 300, resizeMode: 'contain' }}  />
    },
    {
        key:1,
        tela:'Reportar',
        titulo: 'Página de Reportar',
        descricao: `Aqui você poderá reportar suas ocorrências, selecionando uma categoria referente ao problema, e logo em seguida preencher o formulário da ocorrência, onde você poderá inserir uma foto, subcategoria do problema que mais se encaixa com a situação, informará um titulo, selecionará no mapa o local e irá descrever em detalhes sobre a situação.`,
        image: <HomeIcon size={200} fill="#fff" />
    },
    {
        key:2,
        tela:'Chamados',
        titulo: 'Página de Chamados',
        descricao: `Aqui será possível visualizar seus "Chamados" reportados que estão em aberto e de todos da região, sendo possível filtrar-los e visualizar-los.`,
        image: <FormIcon size={200} fill="#fff" />
    },
    {
        key:3,
        tela:'Opções',
        titulo: 'Página de Opções',
        descricao: `Aqui você poderá visualizar seus dados cadastrais, editar-los como por exemplo: adicionar uma foto, alterar seu nome, sua senha ou até mesmo excluir sua conta.`,
        image: (<SettingsIcon size={200} fill="#fff" />)
    },
]
export { backgrounds, data}