/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector(".containerLeft")
    const fishArray = useFish()
    // const fishes = useFish()
    
    let fishHTMLRepresentations = ""

    for (const fishObj of fishArray) {
     fishHTMLRepresentations += Fish(fishObj)  
    
    }

    contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
        ${fishHTMLRepresentations}
        </article>
    `
}