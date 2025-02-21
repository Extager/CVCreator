import Address from "../entities/Address";
import Description from "../entities/Description";
import Email from "../entities/Email";
import FirstName from "../entities/FirstName";
import LastName from "../entities/LastName";
import PhoneNumber from "../entities/PhoneNumber";
import Title from "../entities/Title";

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