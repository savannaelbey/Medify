import { useState, useEffect } from 'react';
import Search from './Search';

function Medicines () {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    async function getMedicines(api) {
      //valid subscription key
      const key = '9a673515a1b34ee1aa70cf84055af6f9'
      // include subscription key in header
      const requestHeader = {headers: {'subscription-key': key}}
      // include susbscription key header in API request
      const response = await fetch(api, requestHeader );
      const data = await response.json();
      console.log(data);
      console.log(data.significantLink[0].url);
      setMedicines(data.significantLink);
    }
    getMedicines(`https://api.nhs.uk/medicines`);
  }, []);

  console.log(medicines)
  return (
    <>
    <Search setSearch={setSearch} />
    <div>
        <div>
          {medicines.filter((med) =>med.name.toLowerCase().startsWith(search.toLowerCase()))
            .map((med) => (
              <div key={med.name}>
                <h3>{med.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </>
  );

}
export default Medicines;
