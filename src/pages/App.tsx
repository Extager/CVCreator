import Address from "../widgets/Address"
import Description from "../widgets/Description"
import Email from "../widgets/Email"
import FirstName from "../widgets/FirstName"
import LastName from "../widgets/LastName"
import PhoneNumber from "../widgets/PhoneNumber"
import Title from "../widgets/Title"
import CV from "../shared/ui/CV/UICV"
import CVCreator from "../shared/ui/CV/CVCreator"
import PersonalInfo from "../shared/ui/CV/PersonalInfo"
import UIImage from "../shared/ui/inputs/UIImage"

export function App() {
  
  return (
    <div className="h-screen flex ">
      <div className="bg-[#242424] w-[50vw]">
        <div className="ml-[4rem] flex flex-col">
          <CVCreator />
          <PersonalInfo />
          <div className="flex flex-col">
            <Title />
            <FirstName />
            <LastName />
            <Address />
            <Description />
            <Email />
            <PhoneNumber />
            <UIImage />
          </div>

        </div>

      </div>
      <div className="w-[50%] flex ">
        <CV />
      </div>
    </div>
  )
}

export default App
