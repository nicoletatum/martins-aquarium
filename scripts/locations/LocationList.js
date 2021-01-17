import { Location } from "./Location.js"
import { useLocation } from "./LocationDataProvider.js"

export const locationList = () => {
    const contentElement = document.querySelector(".containerLeft")
    const locationArray = useLocation()

    let locationHTMLRepresentation = "";
    for (const location of locationArray){
        locationHTMLRepresentation +=Location(location)
    }
    contentElement.innerHTML +=`
    <article class="containerLeft">
    ${locationHTMLRepresentation}
    <article>
    `
}