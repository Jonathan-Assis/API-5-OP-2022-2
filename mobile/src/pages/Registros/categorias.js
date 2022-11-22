//example
import React from 'react';

export const op = [
    {
        key:1,
        categoria: "Eletricidade",
        subCategoria:"Fio Cortado",
        titulo: "Poste sem energia",
        descricao:"Poste sem a luz na minha rua",
        id:1,
        color: "#3429A8",
        apoio:1250,
        local:{
            latitude:-23.180828615099404,
            longitude:-45.7885929197073
        },
        data: "06/11/2022 12:30"
    },
    {
        key:2,
        categoria: "Eletricidade",
        subCategoria:"Curto Elétrico",
        titulo: "Rede elétrica",
        descricao:"Está tendo um curto elétrico, em frente a minha casa",
        id:1,
        color: "#3429A8",
        apoio:1530,
        local:{
            latitude:-23.180986109454974,
            longitude:-45.786767676472664
        },
        data: "03/11/2022 12:30"
    },
    {
        key:3,
        categoria: "Pavimentação",
        subCategoria:"Rua não asfaltada",
        titulo: "Problemas com asfalto",
        descricao:"Rua sem asfalto, tendo problemas quando chove",
        id:1,
        color: "#3429A8",
        apoio:1126,
        local:{
            latitude:-23.179758819766388,
            longitude:-45.78626576811075
        },
        data: "12/10/2022 12:30"
    },
    {
        key:4,
        categoria: "Natureza",
        subCategoria:"Árvore caída",
        titulo: "Árvore caiu no meu estabelecimento",
        descricao:"Árvore antiga teve o tronco quebrado pela idade",
        id:2,
        color: "#79D70F",
        apoio:2319,
        local:{
            latitude:-23.178517340994716,
            longitude:-45.786973871290684
        },
        data: "28/10/2022 12:30"
    },
    {
        key:5,
        categoria: "Saneamento",
        subCategoria:"Vazamento de Esgoto",
        titulo: "Boca de buero aberta",
        descricao:"há um vazamento pela boca de buero na minha rua",
        id:3,
        apoio:2013,
        color: "#00FFFF",
        local:{
            latitude:-23.181654919036717,
            longitude:-45.786207094788544
        },
        data: "25/10/2022 12:30"
    },
    {
        key:6,
        categoria: "Outros",
        subCategoria:"",
        titulo: "Problemas na calçada",
        descricao:"Calçada quebrada no trajeto da escola",
        id:4,
        apoio:1129,
        color: "#FFFFFF",
        local:{
            latitude:-23.178257208432118,
            longitude:-45.79174384474754
        },
        data: "20/10/2022 12:30"
    },
    {
        key:7,
        categoria: "Eletricidade",
        subCategoria:"Lâmpada Queimada",
        titulo: "Lâmpada não funciona a noite",
        descricao:"Um breu na minha rua, as Lâmpadas dos postes não funciona.",
        id:5,
        color: "#FFD800",
        apoio:1325,
        local:{
            latitude:-23.174543175349065,
            longitude:-45.78710798174142
        },
        data: "30/10/2022 12:30"
    },
    {
        key:8,
        categoria: "Pavimentação",
        subCategoria:"Raízes na Rua",
        titulo: "Árvore destruindo o chão",
        descricao:"árvore está quebrando o asfalto",
        id:6,
        color: "#C5C2B7",
        apoio:2089,
        local:{
            latitude:-23.17647910869031,
            longitude:-45.78310947865248
        },
        data: "30/10/2022 12:30"
    },
    {
        key:9,
        categoria: "Natureza",
        subCategoria:"Árvore com Risco de Queda",
        titulo: "Árvore está rachando a cada dia",
        descricao:"Árvore de frente ao ponto de ônibus está querendo cair",
        id:7,
        color: "#79D70F",
        apoio:2590,
        local:{
            latitude:-23.184201912567605,
            longitude:-45.78704293817282
        },
        data: "30/10/2022 12:30"
    },
    {
        key:10,
        categoria: "Saneamento",
        subCategoria:"Bueiro Entupido",
        titulo: "Esgoto vazando",
        descricao:"Bueiro entupido de lixo na minha rua",
        id:8,
        apoio:689,
        color: "#00FFFF",
        local:{
            latitude:-23.1883548504203,
            longitude:-45.785848684608936
        },
        data: "30/10/2022 12:30"
    },
    {
        key:11,
        categoria: "Outros",
        subCategoria:"",
        titulo: "Problemas na sinalização da rua",
        descricao:"Sinalização com defeito, causando acidentes.",
        id:9,
        color: "#FFFFFF",
        apoio:50,
        local:{
            latitude:-23.182283350431366,
            longitude:-45.780415870249264
        },
        data: "30/10/2022 12:30"
    }
]

export const categorias = [
    {
        key: "Meus",
        color: "#3429A8",
    },
    {
        key: "Eletricidade",
        color: "#FFD800",
    },
    {
        key: "Pavimentação",
        color: "#C5C2B7",
    },
    {
        key: "Natureza",
        color: "#79D70F",
    },
    {
        key: "Saneamento",
        color: "#00FFFF",
    },
    {
        key: "Outros",
        color: "#FFFFFF",
    }
]