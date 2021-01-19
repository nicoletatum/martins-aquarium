import { useTip } from "./TipDataProvider.js"
import { Tips } from "./Tip.js"

export const tipList = () => {
    const contentElement = document.querySelector(".containerRight")
    const tipArray = useTip()

    let tipHTMLRepresentation = "";
    for (const tip of tipArray) {
        tipHTMLRepresentation += Tips(tip)
    }
    contentElement.innerHTML +=
     `
    <article class = "containerRight">
    ${tipHTMLRepresentation}
    </article>
    `
}