/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        species: "asdfs",
        location: "sdfsaf",
        length: "dkjkl",
        diet: "crustaceans"

    }
]
export const useFish = () => {
    return fishCollection.slice()
}