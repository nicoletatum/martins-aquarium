
// import { useFishCollection } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"



export const FishList = () => {

    const contentElement = document.querySelector(".containerLeft")

    const holyFishArray = mostHolyFish()

    const soldierFishArray = soldierFish()

    const regularFishArray = nonHolyFish()

    // const fishArray = useFishCollection()
    
    let holyFishHTMLRepresentation = "";
    for (const fish of holyFishArray) {
        holyFishHTMLRepresentation += Fish(fish)  
    }

    let soldierFishHTMLRepresentation = "";
    for (const fish of soldierFishArray) {
        soldierFishHTMLRepresentation += Fish(fish)  
    }

    let regularFishHTMLRepresentation = "";
    for (const fish of regularFishArray) {
        regularFishHTMLRepresentation += soldierFish(fish)  
    }


    contentElement.innerHTML += `
        <article class="containerLeft">
            ${holyFishHTMLRepresentation}
            ${soldierFishHTMLRepresentation}
            ${regularFishHTMLRepresentation}
        </article>
    `
}