import FCEmail from "../../features/Email";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'

const Email = () => {
    const { email, setEmail } = FCEmail(); 

    return (
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(CVStore.email = e.target.value)}
                className="w-[73%] h-[4%] my-[15px]"
                required
            />
        </div>
    );
};

export default observer(Email);