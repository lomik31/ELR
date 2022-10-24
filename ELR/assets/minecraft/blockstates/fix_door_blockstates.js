const doorMaterial = "acacia";
const fs = require('fs');
let name;

file = require(`./${doorMaterial}_door.json`);
for (let i of Object.keys(file.variants)) {
    name = `minecraft:block/${doorMaterial}_door_`;
    if (i.includes("half=lower")) {
        if (i.includes("open=true")) {
            if (i.includes("hinge=left")) name += `bottom_right`
            else if (i.includes("hinge=right")) name += `bottom_left`
        }
        else continue
    }
    else if (i.includes("half=upper")) {
        if (i.includes("open=true")) {
            if (i.includes("hinge=left")) name += `top_right`
            else if (i.includes("hinge=right")) name += `top_left`
        }
        else continue
    }
    file.variants[i].model = name;
}
fs.writeFile(`./${doorMaterial}_door.json`, JSON.stringify(file, null, "    "), (err) => {if (err) console.error(err)});