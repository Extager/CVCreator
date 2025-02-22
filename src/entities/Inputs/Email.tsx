import FCEmail from "../../features/Email";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const Email = () => {
    const { email, setEmail } = FCEmail(); 

    return (
        <div>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(CVStore.email = e.target.value)}
            />
        </div>
    );
};

export default observer(Email);