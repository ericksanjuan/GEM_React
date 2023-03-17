// const plantZones = {
//     4:{Frost_free_Growing_Season: "Jun 10 - Oct 4", 
//         Wording: "States that belong to USDA hardiness zone 4 are parts of Alaska, Arizona, Colorado, Idaho, Iowa, Maine, Michigan, Minnesota, Montana, Nebraska, Nevada, New Hampshire, New Mexico, New York, North Dakota, Oregon, Utah, Vermont, Washington, Wisconsin, Wyoming.",
//         color: "violet",
//         Trees_and_Shrubs: ["Alderman plum", "Alexander apple", "Buartnut", "Butternut", "Ewing Blue plum", "Nova Pear", "Railroad Apple", "Summercrisp Pear", "Trent Apple", "American Cranberry Bush"], 
//         Tree_Image1: "images/Tree_Zone3_8_Butternut.png", 
//         Tree_Image2: "images/Tree_Zone4_American_Cranberry.png", 
//         Ornamental_Image1: "images/Ornamental_Zone3_8_Hosta.png", 
//         Ornamental_Image2: "images/Orn_Zone4_Iris.png", 
//         Vegetable_Image1: "images/Veg_Zone3_9_Pumpkin.png", 
//         Vegetable_Image2: "images/veg_Zone4_BeeBalm.png", 
//         Ornamentals: ["Coneflower", "Daylily", "Iris", "Phlox", "Plantain Lily (Hostas)"], 
//         Vegetables_and_Herbs: ["Eggplant", "Melons", "Okra", "Pumpkins", "Angelica", "Bee Balm", "Garden Sage", "Lemon Balm", "Mountain Mint", "Thyme", "Winter Savory"]},
//     5:{Frost_free_Growing_Season: "Apr 25 - Oct 13", 
//         Wording: "Portions of Alaska, Arizona, California, Colorado, Connecticut, Rhode Island, Idaho, Illinois, Indiana, Iowa, Kansas, Maine, Maryland, Massachusetts, Michigan, Minnesota, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Mexico, New York, North Carolina, Ohio, Oregon, Pennsylvania, Tennessee, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, and Wyoming are under hardiness zone 5.",
//         color: "lightblue",
//         Trees_and_Shrubs: ["Harrow Delight pear", "Honeycrisp apple", "Native pawpaw trees", "Pink Lady apple", "Snow Beauty peach", "Superior plum", "Warren pear"], 
//         Tree_Image1: "images/Tree_Zone5_WarrenPear.png", 
//         Tree_Image2: "images/Tree_Zone3_8_HoneyCrisp.png", 
//         Ornamental_Image1: "images/Orn_Zone5_BlackEyedSusan.png", 
//         Ornamental_Image2: "images/Orn_Zone5_RussianSage.png", 
//         Vegetable_Image1: "images/Veg_Zone5_Lettuce.png", 
//         Vegetable_Image2: "images/Veg_Zone5_Radish.png", 
//         Ornamentals: ["Baptisia", "Black-eyed Susan", "Campanula", "Cinquefoil", "Russian Sage"], 
//         Vegetables_and_Herbs: ["Kale", "Lettuce", "Radishes", "Spinach", "Winter greens"]},
//     6:{Frost_free_Growing_Season: "Apr 22 - Oct 5", 
//         Wording: "Zone 6 is composed of Alaska, Arizona, California, Colorado, Connecticut, Rhode Island, Georgia, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Maine, Maryland, Massachusetts, Michigan, Missouri, Montana, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, Ohio, Oklahoma, Oregon, Pennsylvania, Tennessee, Texas, Utah, Virginia, Washington, West Virginia, and Wyoming.",
//         color: "green",
//         Trees_and_Shrubs: ["Jefferson Hazelnut", "Late Crawford", "Loring", "Madison", "Nectar", "Red Globe", "Cherry laurel"], 
//         Tree_Image1: "images/Tree_Zone6_JeffersonHazelnut.png", 
//         Tree_Image2: "images/Tree_Zone6_CherryLaurel.png", 
//         Ornamental_Image1: "images/Orn_Zone6_FloribundaRose.png", 
//         Ornamental_Image2: "images/Orn_Zone6_FloweringFern.png", 
//         Vegetable_Image1: "images/Veg_Zone6_Oregano.png", 
//         Vegetable_Image2: "images/Veg_Zone6_BushBeans.png", 
//         Ornamentals: ["False sunflower", "Floribunda rose", "Flowering fern", "Japanese Bottlebrush", "Ladys Mantle", "Sedum"], 
//         Vegetables_and_Herbs: ["Bush beans", "Butter lettuce", "Indeterminate tomatoes", "Longer season melons", "Winter squash", "Borage", "Coriander", "Dill", "False chamomile", "Oregano"]},
//     7:{Frost_free_Growing_Season: "Apr 11 - Nov 1", 
//         Wording: "Alabama, Arizona, Arkansas, California, Colorado, Connecticut, Rhode Island, Delaware, Georgia, Idaho, Illinois, Kansas, Kentucky, Maryland, Massachusetts, Mississippi, Missouri, Nevada, New Jersey, New Mexico, New York, North Carolina, Oklahoma, Oregon, Pennsylvania, South Carolina, Tennessee, Texas, Utah, Virginia, Washington, West Virginia are part of Zone 7.",
//         color: "lightgreen",
//         Trees_and_Shrubs: ["Bing cherry", "Blue Java banana", "Contender peach", "Cortland apple", "Fuji apple", "Fuyu persimmon", "Granny Smith apple", "Moorpark apricot", "Ozark plum", "Parker pear", "Rainier Sweet cherry", "Red Gold nectarine", "Scout apricot", "Stella cherry", "Turkey fig", "Wide variety of mulberries", "elderberries, and pawpaw trees"], 
//         Tree_Image1: "images/Tree_Zone7_BlueJavaBanana.png", 
//         Tree_Image2: "images/Tree_Zone7_MulberryTree.png", 
//         Ornamental_Image1: "images/Orn_Zone7_forgetmenot.png", 
//         Ornamental_Image2: "images/Orn_Zone7_Peony.png", 
//         Vegetable_Image1: "images/Veg_Zone7_Arugula.png", 
//         Vegetable_Image2: "images/Veg_Zone7_HotPeppers.png", 
//         Ornamentals: ["Butterfly weed", "Candytuft", "Chrysanthemum", "Clematis", "Forget-me-not", "Four Oclock", "Painted daisy", "Peony"], 
//         Vegetables_and_Herbs: ["Arugula", "Hot peppers", "Long growing season vegetables", "Sweet peppers", "Turnips", "Feverfew", "Marjoram", "Rue", "Sage", "Tarragon"]},
//     8:{Frost_free_Growing_Season: "Mar 3 - Nov 25", 
//         Wording: "Remaining areas of Alabama, Arizona, Arkansas, California, Florida, Georgia, Louisiana, Maryland, Mississippi, Nevada, New Mexico, North Carolina, Oklahoma, Oregon, South Carolina, Tennessee, Texas, Utah, Virginia, and Washington are under Zone 8.",
//         color: "yellow",
//         Trees_and_Shrubs: ["Abacá banana", "Alma fig", "Anna apple", "Bronze banana", "Bryan apricot", "Clementine tangerine", "Darjeeling banana", "Gala apple", "Jujube varieties", "Kumquat and Limequat varieties", "Marsh grapefruit", "Meyer lemon", "Montmorency cherry", "Multiple varieties of peaches and plums", "Ruby grapefruit", "Washington orange"], 
//         Tree_Image1: "images/Tree_Zone8_MeyerLemon.png", 
//         Tree_Image2: "images/Tree_Zone8_Clementine.png", 
//         Ornamental_Image1: "images/Orn_Zone8_Phlox.png", 
//         Ornamental_Image2: "images/Orn_Zone8_AsiaticLily.png", 
//         Vegetable_Image1: "images/Veg_Zone8_Watermelon.png", 
//         Vegetable_Image2: "images/Veg_Zone3_9_Sage.png", 
//         Ornamentals: ["Asiatic lily", "Hardy geranium", "Lantana", "Mexican petunia", "Phlox"], 
//         Vegetables_and_Herbs: ["Bolt-resistant lettuce varieties", "Cantaloupe", "Field peas", "Hot peppers", "Okra", "Tomatoes", "Watermelon", "Bay laurel", "Marjoram", "Mexican oregano", "Rosemary", "Sage"]},
//     9:{Frost_free_Growing_Season: "Year Round as frosts are not an issue in this zone", 
//         Wording: "If you’re living in locations like Alabama, Arizona, California, Florida, Georgia, Hawaii, Louisiana, Mississippi, Nevada, New Mexico, Oregon, South Carolina, Texas, Utah, or Washington, these are the right plants to cultivate.",
//         color: "orange",
//         Trees_and_Shrubs: ["Avocado", "Calamondin", "Giant pummelo", "Hardy kiwi", "Mandarin orange", "Olives", "Passionfruit", "Starfruit", "Trifoliate orange"], 
//         Tree_Image1: "images/Tree_Zone9_AvocadoTree.png", 
//         Tree_Image2: "images/Tree_Zone9_HardyKiwi.png", 
//         Ornamental_Image1: "images/Orn_Zone9_Hydrangea.png",
//         Ornamental_Image2: "images/Orn_Zone9_Rhododendrons.png", 
//         Vegetable_Image1: "images/Veg_Zone9_Broccoli.png", 
//         Vegetable_Image2: "images/Veg_Zone9_Basil.png", 
//         Ornamentals: ["Black-eyed Susan", "Canna", "Dahlia", "Hydrangea", "Rhododendrons", "Wisteria", "Zinnia"], 
//         Vegetables_and_Herbs: ["Broccoli", "Brussels sprouts", "Cabbage", "Cauliflower", "Greens", "Spinach", "Basil", "Bay laurel", "Chives", "Coriander", "Lemon thyme", "Marjoram", "Mint"]},
//     10:{Frost_free_Growing_Season: "Year Round as frosts are not an issue in this zone", 
//         Wording: "Arizona, California, Florida, Hawaii, Louisiana, Nevada, and Texas are the few states that experience the climate in Zone 10. You can select plants to grow in these areas in the list below:",
//         color: "red",
//         Trees_and_Shrubs: ["Strawberry tree", "Mexican orange", "Zealand daisy bush", "Royal palm"], 
//         Tree_Image1: "images/Tree_Zone10_RoyalPalm.png", 
//         Tree_Image2: "images/Tree_Zone10_StrawberryTree.png", 
//         Ornamental_Image1: "images/Orn_Zone10_AfricanLily.png", 
//         Ornamental_Image2: "images/Orn_Zone10_Geranium.png", 
//         Vegetable_Image1: "images/Veg_Zone10_Peanuts.png", 
//         Vegetable_Image2: "images/Veg_Zone10_Tomatillos.png", 
//         Ornamentals: ["Aeoniums", "Agave", "African lily", "Delta maidenhair fern", "Floss flower", "Geraniums", "Hummingbird mint", "Ornamental onion", "Peruvian lily", "Various aloes"], 
//         Vegetables_and_Herbs: ["Bitter melon", "Jicama", "Peanuts", "Malabar spinach", "Tomatillos"]}};
 
        
// const firstImage = document.querySelector('img[alt="firstPic"]'),
//       secondImage = document.querySelector('img[alt="secondPic"]');

// function header(zone) {
// var colorBox = document.getElementById("color-box");
// let backColor = plantZones[zone].color;
// colorBox.textContent= "Trees and Shrubs for " + zone
// colorBox.style.backgroundColor = backColor;
// }                

// const $searchButton = document.querySelector('button'),
//     zoneValue = document.querySelector('input#zoneNum');

// $searchButton.addEventListener('click', function(e) {
//      e.preventDefault();
//     const inputValue = zoneValue.value;
//     // console.log(inputValue);
//     header(inputValue);
//     addWording(inputValue);
//     vList(inputValue);
//     renderImages(inputValue);
//     renderFrost(inputValue);
      
// })

// function vList(zone) {
//     // const veggies = plantZones[zone].Vegetables_and_Herbs
//     const trees = plantZones[zone].Trees_and_Shrubs
// for(let i =0; i < trees.length; i++) {
//     var li = document.createElement("li");
//   var text = document.createTextNode(trees[i]);
//   li.appendChild(text);
//   document.getElementById("myUl").appendChild(li);
// }
// }

// function renderImages(zone) {
//     let image1 = plantZones[zone]. Tree_Image1,
//     image2 = plantZones[zone]. Tree_Image2;
//     firstImage.src = image1;
//     secondImage.src = image2;

// }

// function renderFrost(zone){
//     let frosty = plantZones[zone].Frost_free_Growing_Season;
//     console.log(frosty)
//     let p = document.createElement("p")
//     var text = document.createTextNode('Frost Free Growing Season: '+ frosty);
//     p.appendChild(text);
//     document.getElementById("myUl").prepend(p);
// }


// function addWording(zone) {
//     var info = document.createElement("p");
//     var words = document.createTextNode(plantZones[zone].Wording);
//     info.prepend(words);
//     document.getElementById("myUl").prepend(info);

// }
function Page () {

return (
    <>
    <div className="treeImages">
        <p className="frostFreeZone"/>
        <img src="" alt="firstPic"/>
        <img src="" alt="secondPic"/>
        <ul className="trees"></ul>
    </div>
    <div className="VegetableImages">
        <p className="frostFreeZone"/>
        <img src="" alt="firstPic"/>
        <img src="" alt="secondPic"/>
        <ul className="trees"></ul>
    </div>
    <div className="OrnamentalImages">
        <p className="frostFreeZone"/>
        <img src="" alt="firstPic"/>
        <img src="" alt="secondPic"/>
        <ul className="trees"></ul>
    </div>
    </>       
        )
}
export default Page