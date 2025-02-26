import { observer } from 'mobx-react-lite';
import '../../shared/styles/Input.css';
import CVStore from '../../store/CV';

const GitHub = () =>{
    return(
        <input
        type="text" 
        className='h-[4%] w-[73%]'
        placeholder='Github'
        value={CVStore.git}
        onChange={(e)=>CVStore.git = e.target.value}/>
    );
}
export default observer(GitHub);