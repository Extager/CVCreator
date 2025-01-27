import Address from "../widgets/Address"
import Description from "../widgets/Description"
import Email from "../widgets/Email"
import FirstName from "../widgets/FirstName"
import LastName from "../widgets/LastName"
import PhoneNumber from "../widgets/PhoneNumber"
import Title from "../widgets/Title"

export function App() {
  return (
    <div className="w-screen h-screen">
      <Address />
      <Description />
      <Email />
      <FirstName />
      <LastName />
      <PhoneNumber />
      <Title />
    </div>
  )
}

export default App
