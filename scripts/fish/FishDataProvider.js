
const fishCollection = [
    {
        name: "vestibulum",
        species: "lectus",
        location: "mauris ",
        length: 4,
        diet: "ultrices ",
        image:"../images/fish-1.jpeg"

    },
    {
        name: "vestibulum",
        species: "lectus",
        location: "mauris ",
        length: 2,
        diet: "ultrices ",
        image:"../images/fish-2.jpg"

    },
    {
        name: "vestibulum",
        species: "lectus",
        location: "mauris ",
        length: 7,
        diet: "ultrices ",
        image:"../images/fish-3.jpeg"

    },
    {
        name: "vestibulum",
        species: "lectus",
        location: "mauris ",
        length: 12,
        diet: "eros",
        image:"../images/fish-4.jpg"

    },
    {
        name: "vestibulum",
        species: "lectus",
        location: "mauris ",
        length: 3,
        diet: "ultrices ",
        image:"../images/fish-5.jpg"

    }
]

export const useFish = () => {
    return fishCollection.slice();
}

export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0){
            // console.log(fish)
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    const soldiers = []

    for (const fish of fishCollection){
        if (fish.length % 5 === 0){
            // console.log(fish)
            soldiers.push(fish)
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []

    for (const fish of fishCollection){
        if (fish.length % 3 !== 0 && fish.length %5 !== 0){
            // console.log(fish)
            regularFish.push(fish)
        }
    }

    return regularFish
}