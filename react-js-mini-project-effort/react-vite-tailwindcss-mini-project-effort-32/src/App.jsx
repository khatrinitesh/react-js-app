import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Eiusmod reprehenderit sit mollit est proident ipsum aliqua aliqua laboris.</p>
      <p>Cillum sint do tempor laborum cillum aliqua ea mollit fugiat minim labore officia. Fugiat aute quis aliquip nulla laboris tempor. Consectetur deserunt ipsum nisi culpa minim tempor esse laborum id est enim nisi. Aliqua non veniam laboris mollit dolore sit aliquip. Fugiat amet do aute enim laborum veniam anim Lorem eu consectetur. Qui exercitation eu proident nulla tempor sit in dolor veniam magna fugiat. Ipsum in incididunt sint sint et esse sunt dolor excepteur non commodo laborum.

Consectetur nostrud adipisicing aliquip qui nulla ipsum mollit anim consequat laboris. Eiusmod aliquip est nulla amet mollit Lorem deserunt irure voluptate amet deserunt aliquip magna culpa. Deserunt cillum qui nisi minim veniam qui.

Nulla exercitation cillum laboris ad reprehenderit nisi. Aute sit aute ut elit ullamco nisi. Duis nostrud labore sit sint cillum ex eu sunt adipisicing minim. Tempor occaecat nostrud labore minim. Qui minim eiusmod dolor magna Lorem quis.

Irure velit laborum dolore est occaecat dolor. Officia ipsum cillum proident nisi ea qui est. Qui nulla eu ullamco mollit. Eu nulla consectetur dolor ipsum duis. Excepteur excepteur sunt exercitation quis enim eu eu anim enim. Commodo officia magna eu non deserunt enim aliqua ipsum tempor officia et est. Quis eiusmod duis ut voluptate ea incididunt duis aliqua.

Do aute minim culpa veniam officia irure labore reprehenderit esse do amet qui reprehenderit. Consequat reprehenderit veniam tempor ullamco aliqua reprehenderit fugiat quis in adipisicing aute cupidatat id. Adipisicing ullamco aute deserunt occaecat pariatur id amet ad. Irure qui amet non incididunt esse laborum et exercitation. Adipisicing do anim incididunt officia. Quis ipsum laboris dolor ex ad et non voluptate velit qui elit nostrud aute. Pariatur do laborum exercitation aute.

Enim anim pariatur eiusmod fugiat proident. Veniam ullamco laborum ex Lorem dolore aliqua quis consectetur quis officia. Consequat velit Lorem ullamco do pariatur quis dolor reprehenderit do sint quis.

Non nulla incididunt excepteur officia occaecat labore excepteur fugiat commodo. Magna id laborum laboris ipsum ea aliquip nulla ex aliquip. Lorem ad aliquip aliqua Lorem minim dolore consequat amet anim irure quis. Veniam irure ut laborum incididunt commodo reprehenderit ullamco eu et dolore.

Eu id est excepteur laborum adipisicing ea aliquip aliquip ipsum nulla sint magna. Amet ad laboris duis nostrud nulla duis ea velit laboris ex dolor ullamco excepteur. Consectetur ipsum non excepteur occaecat anim irure eu ullamco. In anim ea sit est incididunt sint aliqua aliqua officia Lorem quis.

Cillum excepteur aute exercitation irure sunt. Aliquip laboris dolore ipsum pariatur minim proident proident do sit veniam nulla laborum. Enim eiusmod magna reprehenderit quis cillum aute commodo tempor adipisicing reprehenderit laboris. Pariatur laboris cupidatat id quis dolore veniam elit magna culpa laborum consequat ad tempor sunt.

Exercitation ea irure nisi mollit nulla. Sunt veniam dolore occaecat officia voluptate Lorem sit id enim aliquip sint Lorem. Commodo laborum pariatur sit laboris. In ex sint ea quis. Ea quis eu culpa dolore ea in irure nostrud deserunt. Enim proident anim est veniam ex. Cillum tempor anim duis elit commodo elit ad in cupidatat anim et incididunt.</p>
    </>
  )
}

export default App
