import React,{useEffect,useState} from 'react';
import Card from './cardFish';
function FishDoc() {
     const [getFish,setFish] = useState([]);
        useEffect(() => {
            fishDoc()
        }, [])
     const fishDoc = async() => {
        const response = await fetch('http://acnhapi.com/v1/fish/');
        const data = await response.json();
        setFish(Object.values(data));
     }
    return (
        <div>
            <div className="row">
            {
                getFish.map(fish=>
                    <Card img={fish.icon_uri} eng={fish.name["name-USen"]} jp={fish.name["name-JPja"]} museum={fish["museum-phrase"]} rare={fish.availability["rarity"]} cj={fish["price-cj"]} price={fish.price} location={fish.availability["location"]} shadow={fish.shadow} northern={fish.availability["month-northern"]} southern={fish.availability["month-southern"]} time={fish.availability.time}/>
                    )
            }
            </div>
        </div>
    )
}

export default FishDoc
