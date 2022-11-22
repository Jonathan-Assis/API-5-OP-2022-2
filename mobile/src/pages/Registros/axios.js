//example
import React from 'react';

export const oc = [
    {
        _id:0,
        CPF:1,
        local:{
            latitude:-23.180828615099404,
            longitude:-45.7885929197073
        },
        categoria: "Eletricidade",
        descricao:"Poste sem a luz na minha rua",
        subCategoria:"Fio Cortado",
        titulo: "Poste sem energia",
        data: "06/11/2022 12:30",
        apoio:1250,
    },
    {
        _id:1,
        CPF:1,
        local:{
            latitude:-23.180986109454974,
            longitude:-45.786767676472664
        },
        categoria: "Eletricidade",
        descricao:"Está tendo um curto elétrico, em frente a minha casa",
        subCategoria:"Curto Elétrico",
        titulo: "Rede elétrica",
        data: "03/11/2022 12:30",
        apoio:1530,
    },
    {
        _id:2,
        CPF:2,
        local:{
            latitude:-23.179758819766388,
            longitude:-45.78626576811075
        },
        categoria: "Pavimentação",
        descricao:"Rua sem asfalto, tendo problemas quando chove",
        subCategoria:"Rua não asfaltada",
        titulo: "Problemas com asfalto",
        data: "12/10/2022 12:30",
        apoio:1126,
    },
    {
        _id:3,
        CPF:2,
        local:{
            latitude:-23.178517340994716,
            longitude:-45.786973871290684
        },
        categoria: "Natureza",
        descricao:"Árvore antiga teve o tronco quebrado pela idade",
        subCategoria:"Árvore caída",
        titulo: "Árvore caiu no meu estabelecimento",
        data: "28/10/2022 12:30",
        apoio:2319,
    },
    {
        _id:4,
        CPF:2,
        local:{
            latitude:-23.181654919036717,
            longitude:-45.786207094788544
        },
        categoria: "Saneamento",
        descricao:"há um vazamento pela boca de buero na minha rua",
        subCategoria:"Vazamento de Esgoto",
        titulo: "Boca de buero aberta",
        data: "25/10/2022 12:30",
        apoio:2013,
    },
    {
        _id:5,
        CPF:2,
        local:{
            latitude:-23.178257208432118,
            longitude:-45.79174384474754
        },
        categoria: "Outros",
        descricao:"Calçada quebrada no trajeto da escola",
        subCategoria:"",
        titulo: "Problemas na calçada",
        data: "20/10/2022 12:30",
        apoio:1129,
    },
    {
        _id:6,
        CPF:1,
        local:{
            latitude:-23.174543175349065,
            longitude:-45.78710798174142
        },
        categoria: "Eletricidade",
        descricao:"Um breu na minha rua, as Lâmpadas dos postes não funciona.",
        subCategoria:"Lâmpada Queimada",
        titulo: "Lâmpada não funciona a noite",
        data: "30/10/2022 12:30",
        apoio:1325,
    },
    {
        _id:7,
        CPF:2,
        local:{
            latitude:-23.17647910869031,
            longitude:-45.78310947865248
        },
        categoria: "Pavimentação",
        descricao:"árvore está quebrando o asfalto",
        subCategoria:"Raízes na Rua",
        titulo: "Árvore destruindo o chão",
        data: "30/10/2022 12:30",
        apoio:2089,
    },
    {
        _id:8,
        CPF:2,
        local:{
            latitude:-23.184201912567605,
            longitude:-45.78704293817282
        },
        categoria: "Natureza",
        descricao:"Árvore de frente ao ponto de ônibus está querendo cair",
        subCategoria:"Árvore com Risco de Queda",
        titulo: "Árvore está rachando a cada dia",
        data: "30/10/2022 12:30",
        apoio:2590,
    },
    {
        _id:9,
        CPF:2,
        local:{
            latitude:-23.1883548504203,
            longitude:-45.785848684608936
        },
        categoria: "Saneamento",
        subCategoria:"Bueiro Entupido",
        descricao:"Bueiro entupido de lixo na minha rua",
        titulo: "Esgoto vazando",
        data: "30/10/2022 12:30",
        apoio:689,
    },
    {
        _id:10,
        CPF:2,
        local:{
            latitude:-23.182283350431366,
            longitude:-45.780415870249264
        },
        categoria: "Outros",
        descricao:"Sinalização com defeito, causando acidentes.",
        subCategoria:"",
        titulo: "Problemas na sinalização da rua",
        data: "30/10/2022 12:30",
        apoio:50,
    }
]

export const categoria = [
    {   _id:2,
        tipo: "Eletricidade",
        color: "#FFD800",
    },
    {   _id:3,
        tipo: "Pavimentação",
        color: "#C5C2B7",
    },
    {   _id:4,
        tipo: "Natureza",
        color: "#79D70F",
    },
    {   _id:5,
        tipo: "Saneamento",
        color: "#00FFFF",
    },
    {   _id:6,
        tipo: "Outros",
        color: "#FFFFFF",
    }
]