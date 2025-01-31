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

export function App() {
  
  return (
    <div className="h-screen flex ml-[83px]">
      <div className="w-[50vw] bg-[#242424]">
        <CVCreator />
        <PersonalInfo />
        <div className="flex flex-col ">
          <Title />
          <FirstName />
          <LastName />
          <Address />
          <Description />
          <Email />
          <PhoneNumber />

        </div>

      </div>
      <div className="w-[50%]">
        <CV />
      </div>
    </div>
  )
}

export default App
