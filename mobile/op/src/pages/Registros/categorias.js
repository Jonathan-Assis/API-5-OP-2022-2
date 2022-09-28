//example
import React from 'react';
import EnergyIcon from '../../assets/Icons/energy'
import ConstructionIcon from '../../assets/Icons/construction'
import TreeIcon from '../../assets/Icons/deciduous-tree'
import PipeIcon from '../../assets/Icons/pipeline-32-regular'

export const categorias = [
    {
        key: "Elétrico",
        label: "Poste sem energia",
        icon: <EnergyIcon size={40}/>
    },
    {
        key: "Pavimentação",
        label: "Buraco na rua",
        icon: <ConstructionIcon size={40}/>
    },
    {
        key: "Natureza",
        label: "Árvore caída",
        icon: <TreeIcon size={40} fill='white'/>
    },
    {
        key: "Esgoto",
        label: "Boca de buero aberta",
        icon: <PipeIcon size={40}/>
    }
]