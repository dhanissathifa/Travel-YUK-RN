import React from "react";
import DetailTripComponent from "../Container/DetailTripContainer";

const Detail = [
    {
        package: 'Package Labuan Bajo Trip 3D2N', image: require('../../../aseets/bajo.jpg'), price: 'Start from Rp 3jutaan',
        include: 'Inclusions', includes: 'Airport / Hotel Pickup and Drop-off', includes1: 'Three Meals per Day',
        includes2: 'Paddle Boards', includes3: 'Afternoon Coffee and Snack', includes4: 'Water with refillable onboard',
        includes5: 'Snorkeling Gear', includesEnd: 'Linen and Towels'
    },
    {
        package: 'Package Labuan Bajo Trip 3D2N', image: require('../../../aseets/bajo.jpg'), price: 'Start from Rp 3jutaan',
        include: 'Inclusions', includes: 'Airport / Hotel Pickup and Drop-off', includes1: 'Three Meals per Day',
        includes2: 'Paddle Boards', includes3: 'Afternoon Coffee and Snack', includes4: 'Water with refillable onboard',
        includes5: 'Snorkeling Gear', includesEnd: 'Linen and Towels'
    },
    {
        package: 'Package Raja Ampat Trip 3D2N', image: require('../../../aseets/ampat.jpg'), price: 'Start from Rp 3jutaan',
        include: 'Inclusions', includes: 'Airport / Hotel Pickup and Drop-off', includes1: 'Three Meals per Day',
        includes2: 'Paddle Boards', includes3: 'Afternoon Coffee and Snack', includes4: 'Water with refillable onboard',
        includes5: 'Snorkeling Gear', includesEnd: 'Linen and Towels'
    },
    {
        package: 'Package Karimun Jawa Trip 3D2N', image: require('../../../aseets/karimun.jpg'), price: 'Start from Rp 3jutaan',
        include: 'Inclusions', includes: 'Airport / Hotel Pickup and Drop-off', includes1: 'Three Meals per Day',
        includes2: 'Paddle Boards', includes3: 'Afternoon Coffee and Snack', includes4: 'Water with refillable onboard',
        includes5: 'Snorkeling Gear', includesEnd: 'Linen and Towels'
    },
    {
        package: 'Package Bali Trip 3D2N', image: require('../../../aseets/bali.jpg'), price: 'Start from Rp 3jutaan',
        include: 'Inclusions', includes: 'Airport / Hotel Pickup and Drop-off', includes1: 'Three Meals per Day',
        includes2: 'Paddle Boards', includes3: 'Snorkeling Gear', includesEnd: 'Linen and Towels'
    }]
const DetailTripContainer = (props) => {
    return (
        <DetailTripComponent
        Detail = {Detail}
        {...props}/>
)}
export default DetailTripContainer;