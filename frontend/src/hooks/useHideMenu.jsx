import { useContext, useEffect } from 'react'
import { UIContext } from '../context/UIContext';

const useHideMenu = ( stateMenu ) => {
    const { showMenu } = useContext(UIContext);
    
    useEffect(()=> {
        if(stateMenu){
            showMenu(stateMenu);
        }else{
            showMenu(stateMenu);
        }
    }, [stateMenu]);
}

export default useHideMenu