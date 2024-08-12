import React from 'react'

function ProblemNo41() {
    const cities = [
        { city: "Lahore", postalCode: 10121 },
        { city: "Multan", postalCode: 10234 },
        { city: "Karachi", postalCode: 10342 },
        { city: "Islamabad", postalCode: 10454 },
        { city: "Murree", postalCode: 10527 },
      ];
  return (
    <div>
        <h3>43. Display the name of a city against the given city code (do it for 4-5 cities)</h3>
        {cities.map((item, index) => (
          <li key={index}>
            {item.city} - postalCode: {item.postalCode}
          </li>
        ))}
      
    </div>
  )
}

export default ProblemNo41
