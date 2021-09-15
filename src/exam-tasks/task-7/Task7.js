/* Task 7
Įsivaizduokite, kad papasakojate žemiau pateiktą JOKE kolegai, kuris nėra dirbęs
su React.js ir jis nesijuokia, nes nesuprata jo. Paaiškinkite žemiau jį jam

JOKE:
Why couldn’t the React component understand the joke? 
Because it didn’t get the context.

Jūsų paaiškinimas:
Reactas yra component based JavaScript biblioteka. Joje puslapis kuriamas iš atskirų dalelių/komponentų. Jeigu nutinka taip, kad komponentai turi dalintis kokiais nors duomenimis - būtina naudoti Reactui būdingus duomenų perdavimų tarp komponentų būdus. Vienas iš jų ir yra context (įsivaizduokim jį kaip krepšelį į kurį sudedi duomenis ir perduodi reikiamą informaciją). Tam, kad vaikinis komponentas "suprastų" ir galėtų naudoti tėviniame komponente esančius duomenis, tėviniame komponenente reikia sukurti tam kontekstą (createContext()) ir paversti tuos duomenis globaliais. Vaikinis komponentas, kuriam tų duomenų reikia, privalo duomenis pasiimti su useContext bei atitinkamai juos išsiskleisti (pasiimti iš krepšelio ir išsidėlioti ant stalo bei naudoti pagal poreikį). 
*/
