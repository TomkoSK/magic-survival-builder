var ENABLED_OUTLINE;
var DISABLED_FILTER;

if(window.innerWidth <= 768){
ENABLED_OUTLINE = "green solid 1.5px";
DISABLED_FILTER = "blur(4.5px)";
}
else{
ENABLED_OUTLINE = "green solid 3px";
DISABLED_FILTER = "blur(9px)";
}

var usedMagic = {"magicBolt" : false, "fireball" : false, "thunderstorm" : false, "meteror" : false, "cyclone" : false, "electricShock" : false, 
"energyBolt" : false, "incineration" : false, "blizzard" : false, "tsunami" : false, "spirit" : false, "satellite" : false, "arcaneRay" : false,
"electricZone" : false, "frostNova" : false, "lavaZone" : false, "shield" : false, "cloaking" : false, "magicCircle" : false, "armageddon" : false,
"flashShock" : false, "intelligence" : false
}

function onResize(){
    var element = document.querySelector("main");
    var width = 0;
    if(window.innerWidth <= 768){
        while(width <= window.innerWidth){
            width += 128;
        }
        width -= 128;
        element.style.width = width+"px";
    }
    else{
        while(width <= window.innerWidth){
            width += 255;
        }
        width -= 255;
        element.style.width = width+"px";
    }
}

window.addEventListener("resize", onResize);
onResize();

function getName(element) {
    var fullPath = element.src;
    var filename = fullPath.replace(/^.*[\\\/]/, '').split(".")[0];
    return filename;
}

function setMagic(magicName, value){
    switch(magicName){
        case "empyreanWrath":
            usedMagic["thunderstorm"] = value;
            usedMagic["meteor"] = value;
            break
        case "telekineticSword":
            usedMagic["spirit"] = value;
            usedMagic["electricShock"] = value;
            break
        case "crazedSpray":
            usedMagic["energyBolt"] = value;
            usedMagic["spirit"] = value;
            break
        case "terraCurrent":
            usedMagic["arcaneRay"] = value;
            usedMagic["electricShock"] = value;
            break
        case "warClimate":
            usedMagic["blizzard"] = value;
            usedMagic["meteror"] = value;
            break
        case "demonEquation":
            usedMagic["fireball"] = value;
            usedMagic["energyBolt"] = value;
            break
        case "frenzy":
            usedMagic["flashShock"] = value;
            usedMagic["magicBolt"] = value;
            break
        case "ghastlyRampage":
            usedMagic["fireball"] = value;
            usedMagic["satellite"] = value;
            break
        case "reaction":
            usedMagic["energyBolt"] = value;
            usedMagic["shield"] = value;
            break
        case "vortex":
            usedMagic["satellite"] = value;
            usedMagic["cyclone"] = value;
            break
        case "breathOfFire":
            usedMagic["incineration"] = value;
            usedMagic["arcaneRay"] = value;
            break
        case "etherBlaze":
            usedMagic["blizzard"] = value;
            usedMagic["incineration"] = value;
            break
        case "orbitalStrike":
            usedMagic["blizzard"] = value;
            usedMagic["thunderstorm"] = value;
            break
        case "neutronGeneration":
            usedMagic["cyclone"] = value;
            usedMagic["satellite"] = value;
            break
        case "winterStorm":
            usedMagic["blizzard"] = value;
            usedMagic["fireball"] = value;
            break
        case "plasmaRay":
            usedMagic["arcaneRay"] = value;
            usedMagic["satellite"] = value;
            break
        case "lightningBolts":
            usedMagic["thunderstorm"] = value;
            usedMagic["electricShock"] = value;
            break
        case "photonExplosion":
            usedMagic["shield"] = value;
            usedMagic["armageddon"] = value;
            break
        case "inferno":
            usedMagic["incineration"] = value;
            usedMagic["lavaZone"] = value;
            break
        case "lightningCalibration":
            usedMagic["electricZone"] = value;
            usedMagic["satellite"] = value;
            break
        case "furnace":
            usedMagic["lavaZone"] = value;
            usedMagic["meteor"] = value;
            break
        case "currentOverload":
            usedMagic["electricShock"] = value;
            usedMagic["spirit"] = value;
            break
        case "greatFlood":
            usedMagic["tsunami"] = value;
            usedMagic["cyclone"] = value;
            break
        case "snowflakeBlossom":
            usedMagic["frostNova"] = value;
            usedMagic["tsunami"] = value;
            break
        case "rulerOfStorms":
            usedMagic["cyclone"] = value;
            usedMagic["magicBolt"] = value;
            break
        case "overmind":
            usedMagic["intelligence"] = value;
            usedMagic["magicCircle"] = value;
            break
        case "perpetualEngine":
            usedMagic["magicCircle"] = value;
            usedMagic["intelligence"] = value;
            break
        case "gateOfCreation":
            usedMagic["intelligence"] = value;
            usedMagic["magicCircle"] = value;
            break
        case "originExplosion":
            usedMagic["energyBolt"] = value;
            usedMagic["fireball"] = value;
            break
        case "prismSpray":
            usedMagic["arcaneRay"] = value;
            usedMagic["magicBolt"] = value;
            break
        case "greatRift":
            usedMagic["frostNova"] = value;
            usedMagic["meteor"] = value;
            break
        case "hyperion":
            usedMagic["satellite"] = value;
            usedMagic["meteor"] = value;
            break
        case "avatar":
            usedMagic["magicBolt"] = value;
            usedMagic["spirit"] = value;
            break
        case "heartOfLightning":
            usedMagic["electricShock"] = value;
            usedMagic["energyBolt"] = value;
            break
        case "greatImpact":
            usedMagic["meteor"] = value;
            usedMagic["blizzard"] = value;
            break
        case "frozenHeart":
            usedMagic["electricZone"] = value;
            usedMagic["frostNova"] = value;
            break
        case "meisnerEffect":
            usedMagic["electricZone"] = value;
            usedMagic["electricShock"] = value;
            break
        case "energyBombardment":
            usedMagic["arcaneRay"] = value;
            usedMagic["flashShock"] = value;
            break
        case "superCyclone":
            usedMagic["cyclone"] = value;
            usedMagic["electricZone"] = value;
            break
        case "teleport":
            usedMagic["cloaking"] = value;
            usedMagic["shield"] = value;
            break
        case "flameStorm":
            usedMagic["meteor"] = value;
            usedMagic["incineration"] = value;
            break
        case "pyrotechnics":
            usedMagic["magicBolt"] = value;
            usedMagic["energyBolt"] = value;
            break
        case "manaSpear":
            usedMagic["spirit"] = value;
            usedMagic["flashShock"] = value;
            break
        case "gate":
            usedMagic["flashShock"] = value;
            usedMagic["spirit"] = value;
            break
        case "magneticField":
            usedMagic["satellite"] = value;
            usedMagic["electricZone"] = value;
            break
        case "blackDeath":
            usedMagic["fireball"] = value;
            usedMagic["magicBolt"] = value;
            break
    }
}

function updateMagic(){
    var images = document.querySelectorAll("img");
    images.forEach((element) => {
        if(element.style.outline != ENABLED_OUTLINE){
            var magicName = getName(element);
            switch(magicName){
                case "empyreanWrath":
                    if(usedMagic["thunderstorm"] || usedMagic["meteor"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "telekineticSword":
                    if(usedMagic["spirit"] || usedMagic["electricShock"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "crazedSpray":
                    if(usedMagic["energyBolt"] || usedMagic["spirit"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "terraCurrent":
                    if(usedMagic["arcaneRay"] || usedMagic["electricShock"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "warClimate":
                    if(usedMagic["blizzard"] || usedMagic["meteror"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "frenzy":
                    if(usedMagic["flashShock"] || usedMagic["magicBolt"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "ghastlyRampage":
                    if(usedMagic["fireball"] || usedMagic["satellite"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "reaction":
                    if(usedMagic["energyBolt"] || usedMagic["shield"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "vortex":
                    if(usedMagic["satellite"] || usedMagic["cyclone"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "breathOfFire":
                    if(usedMagic["incineration"] || usedMagic["arcaneRay"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "etherBlaze":
                    if(usedMagic["blizzard"] || usedMagic["incineration"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "orbitalStrike":
                    if(usedMagic["blizzard"] || usedMagic["thunderstorm"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "neutronGeneration":
                    if(usedMagic["cyclone"] || usedMagic["satellite"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "winterStorm":
                    if(usedMagic["blizzard"] || usedMagic["fireball"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "plasmaRay":
                    if(usedMagic["arcaneRay"] || usedMagic["satellite"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "lightningBolts":
                    if(usedMagic["thunderstorm"] || usedMagic["electricShock"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "photonExplosion":
                    if(usedMagic["shield"] || usedMagic["armageddon"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "inferno":
                    if(usedMagic["incineration"] || usedMagic["lavaZone"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "lightningCalibration":
                    if(usedMagic["electricZone"] || usedMagic["satellite"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "furnace":
                    if(usedMagic["lavaZone"] || usedMagic["meteor"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "currentOverload":
                    if(usedMagic["electricShock"] || usedMagic["spirit"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "greatFlood":
                    if(usedMagic["tsunami"] || usedMagic["cyclone"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "snowflakeBlossom":
                    if(usedMagic["frostNova"] || usedMagic["tsunami"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "rulerOfStorms":
                    if(usedMagic["cyclone"] || usedMagic["magicBolt"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "overmind":
                    if(usedMagic["intelligence"] || usedMagic["magicCircle"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "perpetualEngine":
                    if(usedMagic["magicCircle"] || usedMagic["intelligence"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "gateOfCreation":
                    if(usedMagic["intelligence"] || usedMagic["magicCircle"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "originExplosion":
                    if(usedMagic["energyBolt"] || usedMagic["fireball"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "prismSpray":
                    if(usedMagic["arcaneRay"] || usedMagic["magicBolt"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "greatRift":
                    if(usedMagic["frostNova"] || usedMagic["meteor"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "hyperion":
                    if(usedMagic["satellite"] || usedMagic["meteor"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "avatar":
                    if(usedMagic["magicBolt"] || usedMagic["spirit"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "heartOfLightning":
                    if(usedMagic["electricShock"] || usedMagic["energyBolt"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "greatImpact":
                    if(usedMagic["meteor"] || usedMagic["blizzard"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "frozenHeart":
                    if(usedMagic["electricZone"] || usedMagic["frostNova"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "meisnerEffect":
                    if(usedMagic["electricZone"] || usedMagic["electricShock"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "energyBombardment":
                    if(usedMagic["arcaneRay"] || usedMagic["flashShock"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "superCyclone":
                    if(usedMagic["cyclone"] || usedMagic["electricZone"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "teleport":
                    if(usedMagic["cloaking"] || usedMagic["shield"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "flameStorm":
                    if(usedMagic["meteor"] || usedMagic["incineration"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "pyrotechnics":
                    if(usedMagic["magicBolt"] || usedMagic["energyBolt"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "manaSpear":
                    if(usedMagic["spirit"] || usedMagic["flashShock"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "gate":
                    if(usedMagic["flashShock"] || usedMagic["spirit"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "magneticField":
                    if(usedMagic["satellite"] || usedMagic["electricZone"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
                case "blackDeath":
                    if(usedMagic["fireball"] || usedMagic["magicBolt"]){element.style.filter = DISABLED_FILTER;}
                    else{element.style.filter = "";}
                    break
            }
        }
    });
}

var images = document.querySelectorAll("img");
images.forEach((element) => {
    element.addEventListener("click", () => {
        if(element.style.filter == DISABLED_FILTER){return};
        if(element.style.outline == ENABLED_OUTLINE){
            setMagic(getName(element), false);
            element.style.outline = "";
            updateMagic();
        }
        else{
            element.style.outline = ENABLED_OUTLINE;
            setMagic(getName(element), true)
            updateMagic();
        }
    });
});