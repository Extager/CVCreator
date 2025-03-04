import Address from "../entities/Inputs/Address";
import Description from "../entities/Inputs/Description";
import Email from "../entities/Inputs/Email";
import FirstName from "../entities/Inputs/FirstName";
import LastName from "../entities/Inputs/LastName";
import PhoneNumber from "../entities/Inputs/PhoneNumber";
import Title from "../entities/Inputs/Title";
import AddExp from "../entities/AddExp";
import Image from "../entities/Inputs/Image";
import Birth from "../entities/Inputs/Birth";
import Objective from "../entities/Inputs/Objective";
import AddProj from "../entities/AddProj";
import Skills from "../entities/Skills";
import AddInfo from "../entities/Inputs/AddInfo";

export default function Inputs(){
    return(
        <div className="flex flex-col w-[50vw] h-screen py-5">
            <p className="text-3xl font-medium text-center mb-[2.625rem]">СV Creator</p>
            <div className="px-[5.188rem]">
                <p className="text-2xl mb-5">Personal information</p>
                <Title />
                <FirstName />
                <LastName />
                <Description />
                <Address />
                <Email />
                <PhoneNumber />
                <Image />
                <Birth />
                <Objective />
                <AddInfo />
                <Skills />
                <p className="text-2xl mt-10">Work Experience</p>
            </div>
                <AddExp />
                <p className="text-2xl mt-10 px-[5.188rem]">Projects</p>
                <AddProj />
        </div>
    );
}