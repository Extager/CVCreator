import FCEmail from "../features/Email";

const Email = () => {
    const { email, setEmail } = FCEmail(); 

    return (
        <div>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    );
};

export default Email;