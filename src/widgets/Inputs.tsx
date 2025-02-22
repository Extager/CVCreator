import Address from "../entities/Inputs/Address";
import Description from "../entities/Inputs/Description";
import Email from "../entities/Inputs/Email";
import FirstName from "../entities/Inputs/FirstName";
import LastName from "../entities/Inputs/LastName";
import PhoneNumber from "../entities/Inputs/PhoneNumber";
import Title from "../entities/Inputs/Title";

export default function Inputs(){
    return(
        <div>
            <p>СV creator</p>
            <p>Personal information</p>
            <Title />
            <FirstName />
            <LastName />
            <Description />
            <Address />
            <Email />
            <PhoneNumber />
        </div>
    );
}