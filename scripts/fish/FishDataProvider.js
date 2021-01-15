
const fishCollection = [
    {
        name: "vestibulum",
        species: "lectus",
        location: "mauris ",
        length: "ultrices ",
        diet: "eros",
        image:"../images/fish-1.jpeg"

    },
    {
        name: "vestibulum",
        species: "lectus",
        location: "mauris ",
        length: "ultrices ",
        diet: "eros",
        image:"../images/fish-2.jpg"

    },
    {
        name: "vestibulum",
        species: "lectus",
        location: "mauris ",
        length: "ultrices ",
        diet: "eros",
        image:"../images/fish-3.jpeg"

    },
    {
        name: "vestibulum",
        species: "lectus",
        location: "mauris ",
        length: "ultrices ",
        diet: "eros",
        image:"../images/fish-4.jpg"

    },
    {
        name: "vestibulum",
        species: "lectus",
        location: "mauris ",
        length: "ultrices ",
        diet: "eros",
        image:"../images/fish-5.jpg"

    }
]

export const useFish = () => {
    return fishCollection.slice()
}