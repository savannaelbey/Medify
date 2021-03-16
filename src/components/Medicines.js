import { useState, useEffect } from 'react';

function Medicines () {
  const [medicines, setMedicines] = useState([]);

  useEffect(()=>{
    async function getMedicines() {
      //valid subscription key
      const key = '9a673515a1b34ee1aa70cf84055af6f9'
      // include subscription key in header
      const header = {headers: {'subscription-key': key}}
      // include susbscription key header in API request
      const response = await fetch(`https://api.nhs.uk/medicines`, header );

      const data = await response.json();
      console.log(data);
      //console.log(data.significantLink[0].name)
      setMedicines(data.significantLink);

    }
    getMedicines();

  }, []);
  console.log(medicines)
  return (
    <div>{medicines.map((med)=> med.name)}</div>
  );

}
export default Medicines;
