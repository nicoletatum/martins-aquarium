/**
 *  Fish which renders individual fish objects as HTML
 */

export const Fish = (fish) => {
    return `
    <div class="fishCard">
    <p class="fishCard__name">${fish.name}</p>
    <p class="fishCard__species">${fish.species}</p>
    <p class="fishCard__location">${fish.location}</p>
    <p class="fishCard__length">${fish.length}</p>
    <p class="fishCard__diet">${fish.diet}</p>
    <img src="${fish.image}" alt="fish image" class="fishCard__img">
  </div>
    `
}

