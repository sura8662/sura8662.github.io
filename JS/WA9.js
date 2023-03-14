const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const storyText = "It is 94°F outside, so :insertx: wants to open a lemonade stand. He asks his friend Dave to buy a few pounds of lemons. Dave, however, shows up at :inserty: with 300 pounds worth. Upon seeing a truckload of lemons, :insertx: :insertz:. When Dave gave him lemons, :insertx: couldn't make lemonade.";

const insertX = ["Joe", "Brendan", "Welty"];
const insertY = ["the cul-de-sac", "the roundabout", "the street corner"];
const insertZ = ["bows out", "packs it in", "throws in the towel"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:",xItem);
    newStory = newStory.replaceAll(":inserty:",yItem);
    newStory = newStory.replaceAll(":insertz:",zItem);

    if (customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replaceAll("Dave", name);
    }

    if (document.getElementById("uk").checked) {
        const weight = `${Math.round(300 * 0.0714)} stone`;
        const temperature = `${Math.round(((94 - 32) * 5) / 9)}°C`;
        newStory = newStory.replaceAll("94°F", temperature);
        newStory = newStory.replaceAll("300 pounds", weight);
        newStory = newStory.replaceAll("pounds", "stone");
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}