/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector(".containerLeft")
    const fishes = useFish()

    let fishHTMLRepresentations = ""

    for (const fish of fishes) {
     fishHTMLRepresentations += Fish(fish)  
    
    }

    contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
        ${fishHTMLRepresentations}
        </article>
    `
}