import { faLightbulb, faPersonChalkboard, faPersonDigging, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import PipeIcon from '../../assets/Icons/Saneamento.svg'
import { Colors } from "../../styles";


export const CardHome = [
    { 
        routeParams: 'Eletricidade',
        title: 'Eletricidade',
        relations: 'Fio, Poste, Lâmpada, Semáforo...',
        icon: <FontAwesomeIcon icon={ faLightbulb } size={100} color={Colors.white}/>
    },
    { 
        routeParams: 'Natureza',
        title: 'Natureza',
        relations: 'Árvores, Raízes...',
        icon: <FontAwesomeIcon icon={ faTree } size={100} color={Colors.white} />
    },
    { 
        routeParams: 'Pavimentação',
        title: 'Pavimentação',
        relations: 'Buracos, Asfaltos, Faixas...',
        icon: <FontAwesomeIcon icon={ faPersonDigging } size={100} color={Colors.white} />
    },
    { 
        routeParams: 'Saneamento',
        title: 'Saneamento',
        relations: 'Vazamentos, Bueiros...',
        icon: <PipeIcon width="110" height="110" />
    },
    { 
        routeParams: 'Outros',
        title: 'Outros',
        relations: '',
        icon: <FontAwesomeIcon icon={ faPersonChalkboard } size={100} color={'white'} />
    }
    
]
