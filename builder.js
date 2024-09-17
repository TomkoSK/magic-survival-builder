//NOTE: add ()', to the font

function rounded(num, decimal=0){
    return Math.round(num*10**decimal)/10**decimal
}

function getTooltips(stats) {
    let tooltips = []
    for(const[key, value] of Object.entries(stats)){
        if(key == "hp"){
            tooltips.push("Increase Max HP by "+value+"%")
        }
        else if(key == "hpregen"){
            tooltips.push("Increase HP Regen per sec. by "+value+"%")
        }
        else if(key=="dmgtaken"){
            tooltips.push("Decrease Damage Taken by "+value+"%")
        }
        else if(key=="evasion"){
            tooltips.push("Increase Evasion by "+value+"%")
        }
        else if (key=="movement"){
            if(value < 0){
                tooltips.push("Decrease Movement Speed by "+(-value)+"%")
            }
            else{
                tooltips.push("Increase Movement Speed by "+value+"%")
            }
        }
        else if(key=="critrate"){
            tooltips.push("Increase Critical Strike Rate by "+value+"%")
        }
        else if(key=="critstrike"){
            tooltips.push("Increase Critical Strike Multiplier by "+value+"%")
        }
        else if(key=="allmagicdmg"){
            tooltips.push("Increase All Magic Damage by "+value+"%")
        }
        else if(key=="atk"){
            tooltips.push("Increase ATK by "+value+"%")
        }
        else if(key=="amp"){
            tooltips.push("Amplify ATK by "+value+"%")
        }
        else if(key=="size"){
            tooltips.push("Increase All Magic Size by "+value+"%")
        }
        else if(key=="duration"){
            tooltips.push("Increase All Magic Duration by "+value+"%")
        }
        else if(key=="cdr"){
            if(value < 0){
                tooltips.push("Increase All Magic Cooldown by "+(-value)+"%")
            }
            else
            {
            tooltips.push("Decrease All Magic Cooldown by "+value+"%")
            }
        }
        else if(key=="mana"){
            tooltips.push("Increase Mana Acquisition by "+value+"%")
        }
        else if(key=="orbhp"){
            tooltips.push("Increase Life Orb HP Recovery by "+value+"%")
        }
        else if(key=="pickup"){
            tooltips.push("Increase Item Pickup Range by "+value+"%")
        }
    }
    return tooltips
}

function getSpecialTooltips(stats){
    let tooltips = []
    if(typeof stats == "string" || Array.isArray(stats)){
        if(Array.isArray(stats)){
            artifactName = stats[0]
        }
        else{
            artifactName = stats
        }
        if(artifactName == "hppotion"){
            tooltips.push("Recover 50% HP over 3 seconds if HP is 25% or lower")
        }
        else if(artifactName == "forcefield"){
            tooltips.push("If receiving damage, block it and become invincible for 3 seconds")
        }
        else if(artifactName == "fourleafclover"){
            tooltips.push("A Critical Strike occurs every 5 times an enemy is damaged")
        }
        else if(artifactName=="worldtreeleaf"){
            tooltips.push("Create a Life Orb near the character every 30 seconds")
        }
        else if(artifactName == "rose"){
            tooltips.push("Deal 20% additional Damage to enemies whose HP is 90% or above")
        }
        else if(artifactName == "mutagen"){
            tooltips.push("8% chance for enemies to appear with 30% less Max HP and Size")
        }
        else if(artifactName == "manashield"){
            tooltips.push("Decrease Damage Taken by 50% of the current Mana percentage")
        }
        else if(artifactName == "organicshield"){
            tooltips.push("Obtaining a Life Orb increases HP equal to the bonus Recovery")
        }
        else if(artifactName == "wraith"){
            tooltips.push("Pass through all enemies and obstacles")
        }
        else if(artifactName == "golemcore"){
            tooltips.push("The screen does not turn red even when the character is Near Death")
        }
        else if(artifactName == "celestialcalendar"){
            tooltips.push("Every 3 casts of Meteor increases the power of the next Meteor by 1.5X")
        }
        else if(artifactName == "magitechmodule"){
            tooltips.push("22% chance for an Energy Bolt to split into 2")
        }
        else if(artifactName == "circularsawblade"){
            tooltips.push("Each time an enemy is damage by Satellite, the enemy receives 0.3% additional damage")
        }
        else if(artifactName == "mimic"){
            tooltips.push("Cause an Explosion when obtaining a Treasure Chest and create 10 random items nearby")
        }
        else if(artifactName == "wizardhat"){
            tooltips.push("Increase ATK by 1% for every 3% of All Magic Cooldown")
        }
        else if(artifactName == "gravityorb"){
            tooltips.push("Push back enemies near the character every 12 seconds")
        }
        else if(artifactName == "mooncrystal"){
            tooltips.push("Permanently decrease the Movement Speed of an enemy who was first frozen by 10%")
        }
        else if(artifactName == "pandorabox"){
            tooltips.push("Cast one of the following Magic randomly: Cyclone, Meteor, Tsunami every 5 seconds")
        }
        else if(artifactName == "clockwork"){
            tooltips.push("Stop all enemies near the character for 2 seconds every 18 seconds")
        }
        else if(artifactName == "magicwand"){
            tooltips.push("Increase Spirit Damage by 7% for each Spirit")
        }
        else if(artifactName == "keyring"){
            tooltips.push("Get one chance to switch out an Artifact through a Normal Treasure Chest (Available 3 times)")
        }
        else if(artifactName == "watchereye"){
            tooltips.push("Cause a giant Explosion when obtaining a Life Orb")
        }
        else if(artifactName == "aegis"){
            tooltips.push("Amplify ATK by 3% for every 10% of Damage Taken")
        }
        else if(artifactName == "aurora"){
            tooltips.push("Create a Mana Orb (Large) near the character every 20 seconds")
        }
        else if(artifactName == "coreenergy"){
            tooltips.push("Satellites explode whenever they deal damage to enemies")
        }
        else if(artifactName == "siegehammer"){
            tooltips.push("Deal 20% Additional Damage if an attack is not a Critical Strike")
        }
        else if(artifactName == "phoenixbow"){
            tooltips.push("Deal 50% Additional Damage to an enemy directly hit by a Fireball")
            tooltips.push("Increase Fireball Penetration by 1")
        }
        else if(artifactName == "dimensionalgate"){
            tooltips.push("20% chance to cast Meteor 1 more time when cast")
        }
        else if(artifactName == "palmleaffan"){
            tooltips.push("Every 5 casts of Cyclone increases the next Cyclone's Damage and Size by 2X")
        }
        else if(artifactName == "dragonbreath"){
            tooltips.push("Each time an enemy is damaged by Incineration, the enemy receives 1% additional damage")
        }
        else if(artifactName == "snowflakecrown"){
            tooltips.push("Each Blizzard increases Damage by 1%")
        }
        else if(artifactName == "wavecalmingflute"){
            tooltips.push("Each cast of Tsunami increases Damage by 10%, and decreases Cooldown by 10%. This effect resets after stacking 4 times")
        }
        else if(artifactName == "sulfur"){
            tooltips.push("Lava Zone increases in Size by 2% every second")
        }
        else if(artifactName == "manacircuit"){
            tooltips.push("Amplify ATK by 1% whenever obtaining a Mana Orb. Stack resets every 5 seconds")
        }
        else if(artifactName == "warflag"){
            tooltips.push("Amplify ATK by 2% for every second the character stays in place. (Max Stack: 20%)")
        }
        else if(artifactName == "assassination"){
            tooltips.push("If an enemy has never received damage yet, a Critical Strike occurs")
        }
        else if(artifactName == "amplifier"){
            tooltips.push("All magic size increase rate x1.28")
        }
        else if(artifactName == "ether"){
            tooltips.push("Obtain 1% mana per second")
        }
        else if(artifactName == "deathbell"){
            tooltips.push("All enemies near the character disappear every 30 seconds")
        }
        else if(artifactName == "magicseal"){
            tooltips.push("Limit the Damage Taken in one hit to 30% of the character's Max HP")
        }
        else if(artifactName == "singularity"){
            tooltips.push("All Mana Orbs (Small) are changed to (Medium)")
        }
        else if(artifactName == "cube"){
            tooltips.push("Increase the level of all un-mastered Normal Passive Magic by 1")
        }
        else if(artifactName == "brand"){
            tooltips.push("Amplify ATK by 1% and increase Movement Speed by 1% for every 5% of HP lost")
        }
        else if(artifactName == "geometry"){
            tooltips.push("Always retrieve 100% Mana when retrieving Mana.\nGive up 1 Mana Retrieval chance")
        }
        else if(artifactName == "hunter"){
            tooltips.push("Amplify ATK by 1% for every 100 enemies killed<br>Stack resets when Amplification is at 25%")
        }
        else if(artifactName == "treasuremap"){
            tooltips.push("2 Treasure Chests are created at a random location")
        }
        else if(artifactName == "cyborg"){
            tooltips.push("Convert every 0.1% of HP Regen per sec. to 3% of ATK")
        }
        else if(artifactName == "pyramid"){
            tooltips.push("Decrease a Magic's Cooldown by 1 second if it is 5 or more seconds")
        }
        else if(artifactName == "peacetreaty"){
            tooltips.push("Decrease the amount of enemies by 15%")
        }
        else if(artifactName == "roster"){
            tooltips.push("After killing 100 enemies, any damage dealt to the next 50 instakills them")
        }
        else if(artifactName == "werewolf"){
            tooltips.push("Killing 2500 enemies activates the Berserk Rune effect")
        }
        else if(artifactName == "abyss"){
            tooltips.push("Convert every 2% of Mana Acquisition to 1% of ATK")
        }
        else if(artifactName == "goldenroulette"){
            tooltips.push("Obtain 1 random Legendary Artifact")
        }
        else if(artifactName == "jetengine"){
            tooltips.push("When moving, ATK is Amplified by 15%")
        }
        else if(artifactName == "longinusspear"){
            tooltips.push("Shoots down powerful lightning every 5 seconds")
        }
        else if(artifactName == "creation"){
            tooltips.push("Every 5th cast of a spell reduces its Cooldown by 50%")
        }
        else if(artifactName == "magicsword"){
            tooltips.push("Instakill an enemy whose HP is lower than 20%")
        }
        else if(artifactName == "accelerator"){
            tooltips.push("Decrease All Magic Cooldown by 1% for every 3% of Movement Speed Increase")
        }
        else if(artifactName == "reaperscythe"){
            tooltips.push("8% chance to instakill an enemy when dealing damage to it for the first time")
        }
        else if(artifactName == "ironmaiden"){
            tooltips.push("15% chance to cause an Explosion when killing an enemy<br>(Explosion Damage is 75% of the enemy's Max HP)")
        }
        else if(artifactName == "hydra"){
            tooltips.push("Deal 0.5% of the enemy's current HP as Additional Damage whenever dealing damage to an enemy<br>(Maximum additional damage : 30%)")
        }
        else if(artifactName == "ballista"){
            tooltips.push("Evasion is converted to Critical Strike Rate")
        }
        else if(artifactName == "merlincape"){
            tooltips.push("Amplify ATK by 33% of the current Mana percentage")
        }
        else if(artifactName == "necronomicon"){
            tooltips.push("The character's Current HP can no longer be more than 50% of Max HP")
        }
        else if(artifactName == "akashicrecord"){
            tooltips.push("Amplify ATK by 1% for every 3 levels<br>Increase Current Level and Max Level by 5")
        }
        else if(artifactName == "dna"){
            tooltips.push("Amplify ATK by 1% for every 5000 enemies killed, up to 50%")
        }
        else if(artifactName == "sacrosanct"){
            tooltips.push("When HP is 75% or higher, ATK is Amplified by 50%")
        }
        else if(artifactName == "joker"){
            tooltips.push("50% chance to stack 1 additional multiplier when landing a Critical Strike")
        }
        else if(artifactName == "titanpower"){
            tooltips.push("ATK Increase 1.5X")
        }
        else if(artifactName == "gaia"){
            tooltips.push("Increase ATK by 3% for every 20 Max HP")
        }
        else if(artifactName == "domainofpower"){
            tooltips.push("Gain 1 more Magic Combination chance")
        }
        else if(artifactName == "holychest"){
            tooltips.push("Activate a random Rune effect every 45 seconds")
        }
        else if(artifactName == "crown"){
            tooltips.push("Amplify ATK by 1% for each Epic Artifact owned<br>Amplify ATK by 5% for each Special Artifact owned")
        }
        else if(artifactName == "eclipse"){
            tooltips.push("Deal a maximum of 45% of the HP the target lost as additional Damage")
        }
        else if(artifactName == "excalibur"){
            tooltips.push("Create an Aura around the character and amplify ATK by 1% for each enemy inside the area")
        }
        else if(artifactName == "nexus"){
            tooltips.push("Choose one Attack magic and increase Damage by 200%")
        }
        else if(artifactName == "dragonheart"){
            tooltips.push("ATK Amplify 1.3X")
        }
        //special artifacts
    }
    if(typeof stats != "string"){
        let artifactSpecialStats
        if(Array.isArray(stats)){
            artifactSpecialStats = stats[1]
        }
        else{
            artifactSpecialStats = stats
        }
        for(const[key, value] of Object.entries(artifactSpecialStats)){
            if(key == "enemyhp"){
                tooltips.push("Decrease the Max HP of all enemies by "+value+"%")
            }
            else if(key == "charactersize"){
                if(value < 0){
                    tooltips.push("Decrease the character's size by "+value+"%")
                }
                else {
                    tooltips.push("Increase the character's size by "+value+"%")
                }
            }
            else if(key == "fireballcdr"){
                tooltips.push("Decrease Fireball Cooldown by "+value+"%")
            }
            else if(key == "incinerationcdr"){
                tooltips.push("Decrease Incineration Cooldown by "+value+"%")
            }
            else if(key == "thunderstormcdr"){
                tooltips.push("Decrease Thunderstorm Cooldown by "+value+"%")
            }
            else if(key == "shockcdr"){
                tooltips.push("Decrease Electric Shock Cooldown by "+value+"%")
            }
            else if(key == "blizzardcdr"){
                tooltips.push("Decrease Blizzard Cooldown by "+value+"%")
            }
            else if(key == "novacdr"){
                tooltips.push("Decrease Frost Nova Cooldown by "+value+"%")
            }
            else if(key == "spiritcount"){
                tooltips.push("Increase the number of Spirits by "+value)
            }
            else if(key == "satellitecount"){
                tooltips.push("Increase the number of Satellites by "+value)
            }
            else if(key == "raycount"){
                tooltips.push("Increase the number of Arcane Rays by "+value)
            }
            else if(key == "artifactcdr"){
                tooltips.push("Decrease All Artifact Cooldown by "+value+"%")
            }
            else if(key == "cyclonedmg"){
                tooltips.push("Increase Cyclone Damage by "+value+"%")
            }
            else if(key == "cyclonecdr"){
                tooltips.push("Decrease Cyclone Cooldown by "+value+"%")
            }
            else if(key == "magicchoice"){
                tooltips.push(value+"% increased chance to have 4 Magic choices")
            }
            else if(key == "manaorb"){
                tooltips.push("Increase Mana Orb Acquisition by "+value+"%")
            }
            else if(key == "magicboltdmg"){
                tooltips.push("Increase Magic Bolt Damage by "+value+"%")
            }
            else if(key == "magicboltcount"){
                tooltips.push("Increase the number of Magic Bolts by "+value)
            }
            else if(key == "electriczonedmg"){
                tooltips.push("Increase Electric Zone Damage by "+value+"%")
            }
            else if(key == "electriczonecdr"){
                tooltips.push("Decrease Electric Zone Damage Interval by "+value+"%")
            }
            else if(key == "satellitespeed"){
                tooltips.push("Increase Satellite Rotation Speed by "+value+"%")
            }
            else if(key == "circlecdr"){
                tooltips.push("Decrease Magic Circle Cooldown by "+value+"%")
            }
            else if(key == "runeduration"){
                tooltips.push("Increase the duration of Rune effects by "+value+"%")
            }
            else if(key == "novadmg"){
                tooltips.push("Increase Frost Nova Damage by "+value+"%")
            }
            else if(key == "enemymovement"){
                tooltips.push("Decrease the Movement Speed of all enemies by "+value+"%")
            }
            else if(key == "revive"){
                if(value == 1){
                    tooltips.push("Revive 1 more time")
                }
                else{
                    tooltips.push("Revive "+value+" more times")
                }
            }
            else if(key == "magicboltcdr"){
                tooltips.push("Decrease Magic Bolt Cooldown by "+value+"%")
            }
            else if(key == "spiritcdr"){
                tooltips.push("Decrease Spirit Cooldown by "+value+"%")
            }
            else if(key == "learnmagic"){
                tooltips.push("Learn "+value+" random Magic")
            }
            else if(key == "raydmg"){
                tooltips.push("Increase Arcane Ray Damage by "+value+"%")
            }
            else if(key == "raycdr"){
                tooltips.push("Decrease Arcane Ray Cooldown by "+value+"%")
            }
            else if(key == "fireballdmg"){
                tooltips.push("Increase Fireball Damage by "+value+"%")
            }
            else if(key == "meteordmg"){
                tooltips.push("Increase Meteor Damage by "+value+"%")
            }
            else if(key == "incinerationdmg"){
                tooltips.push("Increase Incineration Damage by "+value+"%")
            }
            else if(key == "lavazonedmg"){
                tooltips.push("Increase Lava Zone Damage by "+value+"%")
            }
            else if(key == "thunderstormdmg"){
                tooltips.push("Increase Thunderstorm Damage by "+value+"%")
            }
            else if(key == "shockdmg"){
                tooltips.push("Increase Electric Shock Damage by "+value+"%")
            }
            else if(key == "flashdmg"){
                tooltips.push("Increase Flash Shock Damage by "+value+"%")
            }
            else if(key == "blizzarddmg"){
                tooltips.push("Increase Blizzard Damage by "+value+"%")
            }
            else if(key == "tsunamidmg"){
                tooltips.push("Increase Tsunami Damage by "+value+"%")
            }
            else if(key == "energyboltdmg"){
                tooltips.push("Increase Energy Bolt Damage by "+value+"%")
            }
            else if(key == "spiritdmg"){
                tooltips.push("Increase Spirit Damage by "+value+"%")
            }
            else if(key == "satellitedmg"){
                tooltips.push("Increase Satellite Damage by "+value+"%")
            }
            else if(key == "thunderstormamount"){
                tooltips.push("Increase the number of Thunderstorms by "+value+"%")
            }
            else if(key == "meteorcdr"){
                tooltips.push("Decrease Meteor Cooldown by "+value+"%")
            }
            else if(key == "shockcount"){
                tooltips.push("Increase the number of Electric Shocks by "+value)
            }
            else if(key == "energyboltamount"){
                tooltips.push("Increase the number of Energy Bolts by "+value+"%")
            }
            else if(key == "incinerationsize"){
                tooltips.push("Increase Incineration Size by "+value+"%")
            }
            else if(key == "blizzardamount"){
                tooltips.push("Increase the number of Blizzards by "+value+"%")
            }
            else if(key == "fireballcount"){
                tooltips.push("Increase the number of Fireballs by "+value)
            }
            else if(key == "meteorcount"){
                tooltips.push("Increase the number of Meteors by "+value)
            }
            else if(key == "visionrange"){
                tooltips.push("Increase the vision range of the character by "+value+"%")
            }
            else if(key == "energyboltcount"){
                tooltips.push("Increase the number of Energy Bolts by "+value)
            }
            else if(key == "manaenemy"){
                tooltips.push("Increase Mana Acquisition from killing enemies by "+value+"%")
            }
            else if(key == "timespeed"){
                tooltips.push("Time flows "+value+"% faster")
            }
            else if(key == "gold"){
                tooltips.push("Increase Gold Acquisition by "+value+"%")
            }
            else if(key == "enemysize"){
                tooltips.push("Decrease the Size of all enemies by "+value+"%")
            }
            else if(key == "combinationdmg"){
                tooltips.push("Increase Combination Magic Damage by "+value+"%")
            }
            else if(key == "elitehp"){
                tooltips.push("Decrease the Max HP of Elite Monsters by "+value+"%")
            }
            else if(key == "treasurechest"){
                if(value == 1){
                    tooltips.push("Create "+value+" Treasure Chest nearby")
                }
                else{
                    tooltips.push("Create "+value+" Treasure Chests nearby")
                }
            }
            else if(key == "relicchest"){
                if(value == 1){
                    tooltips.push("Create "+value+" Relic Chest nearby")
                }
                else{
                    tooltips.push("Create "+value+" Relic Chests nearby")
                }
            }
            else if(key == "maxmagicdmg"){
                tooltips.push("Increase Magic Damage by "+value+"% for all max level Magic")
            }
            else if(key == "manafrequency"){
                tooltips.push("Mana Orbs are created "+value+"% more frequently")
            }
            else if(key == "maxlevel"){
                tooltips.push("Increase Max Level by "+value)
            }
            //Adding all the special stats as artifacts get added
        }
    }
    return tooltips
}


function fixTooltipPositions(){
    artifactItems.forEach((modifier)=>{
        if(modifier instanceof ClickableModifier){
            modifier.element.querySelector(".tooltip").style.left = "90%"
            if(modifier.element.querySelector(".tooltip").getBoundingClientRect().right > modifier.element.parentElement.clientWidth){
                modifier.element.querySelector(".tooltip").style.left = (modifier.element.parentElement.clientWidth-modifier.element.offsetLeft-modifier.element.querySelector(".tooltip").clientWidth)+"px"
            }
        }
    })
    magicItems.forEach((modifier)=>{
        if(modifier instanceof ClickableModifier){
            modifier.element.querySelector(".tooltip").style.left = "90%"
            if(modifier.element.querySelector(".tooltip").getBoundingClientRect().right > modifier.element.parentElement.clientWidth){
                modifier.element.querySelector(".tooltip").style.left = (modifier.element.parentElement.clientWidth-modifier.element.offsetLeft-modifier.element.querySelector(".tooltip").clientWidth)+"px"
            }
        }
    })
}

class PassiveMagic {
    constructor(name, imageUrl, circleAmount, values, stat){
        this.circleAmount = circleAmount
        this.values = values
        this.stat = stat
        let itemDiv = document.createElement("div")
        this.element = itemDiv
        itemDiv.classList.add("leftbox-item")
        itemDiv.classList.add("green-border")
        let image = document.createElement("img")
        image.src = imageUrl
        image.draggable = false
        itemDiv.appendChild(image)
        let span = document.createElement("span")
        span.innerText = name
        itemDiv.appendChild(span)
        let circleDiv = document.createElement("div")
        circleDiv.classList.add("circles")
        for(let i = 0; i < circleAmount; i++){
            let circle = document.createElement("span")
            circle.classList.add("empty")
            circleDiv.appendChild(circle)
        }
        itemDiv.appendChild(circleDiv)
        this.circleDiv = circleDiv
        let arrowDiv = document.createElement("div")
        arrowDiv.classList.add("arrows")
        let leftArrow = document.createElement("img")
        leftArrow.src = "leftarrow.png"
        arrowDiv.appendChild(leftArrow)
        let rightArrow = document.createElement("img")
        rightArrow.src = "rightarrow.png"
        arrowDiv.appendChild(rightArrow)
        itemDiv.appendChild(arrowDiv)
        document.querySelector("#leftbox-content").appendChild(itemDiv)
        this.fullCircleAmount = 0
        leftArrow.addEventListener("click", ()=>{
            this.fullCircleAmount -= 1
            if(this.fullCircleAmount < 0){
                this.fullCircleAmount = 0
            }
            this.refreshCircles()
        })
        rightArrow.addEventListener("click", ()=>{
            this.fullCircleAmount += 1
            if(this.fullCircleAmount > circleAmount){
                this.fullCircleAmount = circleAmount
            }
            this.refreshCircles()
        })
    }

    refreshCircles(){
        let circles = this.circleDiv.children
        for(let i = 0; i < this.fullCircleAmount; i++){
            let circle = circles.item(i)
            circle.removeAttribute("class")
            circle.classList.add("full")
        }
        for(let i = this.fullCircleAmount; i < this.circleAmount; i++){
            let circle = circles.item(i)
            circle.removeAttribute("class")
            circle.classList.add("empty")
        }
        calculateStats()
    }
}

class ResearchModifier {
    constructor(name, imageUrl, circleAmount, values, stat){
        this.circleAmount = circleAmount
        this.values = values
        this.stat = stat
        let itemDiv = document.createElement("div")
        this.element = itemDiv
        itemDiv.classList.add("leftbox-item")
        itemDiv.classList.add("research-border")
        let image = document.createElement("img")
        image.src = imageUrl
        image.draggable = false
        itemDiv.appendChild(image)
        let span = document.createElement("span")
        span.innerText = name
        itemDiv.appendChild(span)
        let circleDiv = document.createElement("div")
        circleDiv.classList.add("research-circles")
        for(let i = 0; i < circleAmount; i++){
            let circle = document.createElement("span")
            circle.classList.add("empty")
            circleDiv.appendChild(circle)
        }
        itemDiv.appendChild(circleDiv)
        this.circleDiv = circleDiv
        let arrowDiv = document.createElement("div")
        arrowDiv.classList.add("arrows")
        let leftArrow = document.createElement("img")
        leftArrow.src = "leftarrow.png"
        arrowDiv.appendChild(leftArrow)
        let rightArrow = document.createElement("img")
        rightArrow.src = "rightarrow.png"
        arrowDiv.appendChild(rightArrow)
        itemDiv.appendChild(arrowDiv)
        document.querySelector("#leftbox-content").appendChild(itemDiv)
        this.fullCircleAmount = 0
        leftArrow.addEventListener("click", ()=>{
            this.fullCircleAmount -= 1
            if(this.fullCircleAmount < 0){
                this.fullCircleAmount = 0
            }
            this.refreshCircles()
        })
        rightArrow.addEventListener("click", ()=>{
            this.fullCircleAmount += 1
            if(this.fullCircleAmount > circleAmount){
                this.fullCircleAmount = circleAmount
            }
            this.refreshCircles()
        })
    }

    refreshCircles(){
        let circles = this.circleDiv.children
        for(let i = 0; i < this.fullCircleAmount; i++){
            let circle = circles.item(i)
            circle.removeAttribute("class")
            circle.classList.add("full")
        }
        for(let i = this.fullCircleAmount; i < this.circleAmount; i++){
            let circle = circles.item(i)
            circle.removeAttribute("class")
            circle.classList.add("empty")
        }
        calculateStats()
    }
}

class ClickableModifier {
    constructor(name, imageUrl, statsValues, rarity, calculationOrder, specialEffects=null){
        let itemDiv = document.createElement("div")
        this.element = itemDiv
        this.active = false
        this.stats = statsValues
        this.specialEffects = specialEffects
        this.calculationOrder = calculationOrder
        this.rarity = rarity
        itemDiv.classList.add("leftbox-item")
        itemDiv.classList.add("clickable-leftbox-item")
        if(rarity == "common"){//NOTE: add rest of borders
            itemDiv.classList.add("gray-border")
        }
        else if(rarity == "rare"){
            itemDiv.classList.add("blue-border")
        }
        else if(rarity == "epic"){
            itemDiv.classList.add("purple-border")
        }
        else if(rarity == "special" || rarity == "specialmagic"){
            itemDiv.classList.add("red-border")
        }
        else if(rarity == "legendary"){
            itemDiv.classList.add("yellow-border")
        }
        let tooltip = document.createElement("span")
        tooltip.classList.add("tooltip")
        let tooltipLines
        if(specialEffects){
            tooltipLines = getSpecialTooltips(specialEffects)
            for(let line of tooltipLines){tooltip.innerHTML += line+"<br>"}
        }
        tooltipLines = getTooltips(statsValues)
        for(let line of tooltipLines){tooltip.innerHTML += line+"<br>"}
        itemDiv.appendChild(tooltip)
        let image = document.createElement("img")
        image.src = imageUrl
        image.draggable = false
        itemDiv.appendChild(image)
        let span = document.createElement("span")
        span.innerText = name
        itemDiv.appendChild(span)
        document.querySelector("#leftbox-content").appendChild(itemDiv)
        if(span.clientWidth > itemDiv.clientWidth*0.9){
            let fontSize = window.getComputedStyle(span).fontSize
            fontSize = fontSize.substring(0, fontSize.length-2)
            let startHeight = span.clientHeight
            while(span.clientWidth > itemDiv.clientWidth*0.96){
                fontSize -= 1
                span.style.fontSize = fontSize+"px"
            }
            span.style.marginTop = (startHeight-span.clientHeight)/2+"px"
        }
        itemDiv.addEventListener("click", ()=>{
            if(this.active){
                itemDiv.querySelector("img").style.opacity = 0.4
                itemDiv.querySelectorAll("span")[1].style.opacity = 0.4
                if(rarity == "common"){//NOTE: add rest of borders
                    itemDiv.style.border = "solid 2px rgba(121, 119, 120, 0.4)"
                }
                else if(rarity == "rare"){
                    itemDiv.style.border = "solid 2px rgba(47, 77, 97, 0.4)"
                }
                else if(rarity == "epic"){
                    itemDiv.style.border = "solid 2px rgba(82, 40, 90, 0.4)"
                }
                else if(rarity=="special" || rarity == "specialmagic"){
                    itemDiv.style.border = "solid 2px rgba(107, 25, 34, 0.4)"
                }
                else if(rarity=="legendary"){
                    itemDiv.style.border = "solid 2px rgba(161, 163, 51, 0.4)"
                }
                activeModifiers.splice(activeModifiers.indexOf(this), 1)
            }
            else{
                itemDiv.querySelector("img").style.opacity = 1
                itemDiv.querySelectorAll("span")[1].style.opacity = 1
                if(rarity == "common"){//NOTE: add rest of borders
                    itemDiv.style.border = "solid 2px rgba(121, 119, 120, 1)"
                }
                else if(rarity == "rare"){
                    itemDiv.style.border = "solid 2px rgba(47, 77, 97, 1)"
                }
                else if(rarity=="epic"){
                    itemDiv.style.border = "solid 2px rgba(82, 40, 90, 1)"
                }
                else if(rarity=="special" || rarity == "specialmagic"){
                    itemDiv.style.border = "solid 2px rgba(107, 25, 34, 1)"
                }
                else if(rarity=="legendary"){
                    itemDiv.style.border = "solid 2px rgba(161, 163, 51, 1)"
                }
                activeModifiers.push(this)
            }
            this.active = !this.active
            calculateStats()
        })
    }
}

const researchItems = []
const magicItems = []
const artifactItems = [] 

const arrowModifiers = []
const activeModifiers = []

calculateStats()

document.querySelector("#research-button").addEventListener("click", () => {
    document.querySelector("#research-point-count").style.display = "flex"
    researchItems.forEach((item)=>{
        item.element.style.display = "flex"
    })
    magicItems.forEach((item)=>{
        item.element.style.display = "none"
    })
    artifactItems.forEach((item)=>{
        item.element.style.display = "none"
    })
    fixTooltipPositions()
})

document.querySelector("#magic-button").addEventListener("click", () => {
    document.querySelector("#research-point-count").style.display = "none"
    researchItems.forEach((item)=>{
        item.element.style.display = "none"
    })
    magicItems.forEach((item)=>{
        item.element.style.display = "flex"
    })
    artifactItems.forEach((item)=>{
        item.element.style.display = "none"
    })
    fixTooltipPositions()
})

document.querySelector("#artifact-button").addEventListener("click", () => {
    document.querySelector("#research-point-count").style.display = "none"
    researchItems.forEach((item)=>{
        item.element.style.display = "none"
    })
    magicItems.forEach((item)=>{
        item.element.style.display = "none"
    })
    artifactItems.forEach((item)=>{
        item.element.style.display = "flex"
    })
    fixTooltipPositions()
})

researchItems.push(new ResearchModifier("Intelligence", "researchImages/intelligence.png", 5, [0, 5, 10, 15, 20, 25], "atk"))
researchItems.push(new ResearchModifier("Vitality", "researchImages/vitality.png", 5, [0, 20, 30, 40, 50, 60], "vitality"))
researchItems.push(new ResearchModifier("Mana Refining", "researchImages/manarefining.png", 6, [0, 5, 8, 11, 14, 17, 20], "mana"))
researchItems.push(new ResearchModifier("Fast Casting", "researchImages/fastcasting.png", 5, [0, 2, 4, 6, 8, 10], "cdr"))
researchItems.push(new ResearchModifier("Snipe", "researchImages/snipe.png", 5, [0, 1, 2, 3, 4, 5], "critrate"))
researchItems.push(new ResearchModifier("Resistance", "researchImages/resistance.png", 4, [0, 5, 10, 15, 20], "dmgtaken"))
researchItems.push(new ResearchModifier("Agility", "researchImages/agility.png", 4, [0, 5, 10, 15, 20], "evasion"))
researchItems.push(new ResearchModifier("Haste", "researchImages/haste.png", 4, [0, 5, 10, 15, 20], "movement"))
researchItems.push(new ResearchModifier("Regeneration", "researchImages/regeneration.png", 4, [0, 0.05, 0.1, 0.15, 0.2], "hpregen"))
researchItems.push(new ResearchModifier("Explorer", "researchImages/explorer.png", 4, [0, 20, 30, 40, 50], "pickup"))
researchItems.push(new ResearchModifier("Arcane Effuse", "researchImages/arcaneeffuse.png", 4, [0, 3, 6, 9, 12], "size"))
researchItems.push(new ResearchModifier("Concentration", "researchImages/concentration.png", 4, [0, 5, 10, 15, 20], "duration"))
researchItems.push(new ResearchModifier("Recycle", "researchImages/recycle.png", 3, [0, 10, 15, 20], "recycle"))
researchItems.push(new ResearchModifier("Analysis", "researchImages/analysis.png", 4, [0, 5, 10, 15, 20], "magicchoice"))
researchItems.push(new ResearchModifier("Blessing", "researchImages/blessing.png", 3, [0, 10, 20, 30], "runeduration"))
researchItems.push(new ResearchModifier("Awakening", "researchImages/awakening.png", 4, [0, 5, 10, 15, 20], "awakening"))
researchItems.push(new ResearchModifier("Growth", "researchImages/growth.png", 3, [0, 2, 3, 4], "growth"))
researchItems.push(new ResearchModifier("Support", "researchImages/support.png", 5, [0, 10, 20, 30, 40, 50], "support"))
researchItems.push(new ResearchModifier("Luck", "researchImages/luck.png", 4, [0, 10, 15, 20, 25], "luck"))
researchItems.push(new ResearchModifier("Loot", "researchImages/loot.png", 6, [0, 5, 8, 11, 14, 17, 20], "loot"))

magicItems.push(new PassiveMagic("Intelligence", "passiveImages/intelligence.png", 5, [0, 10, 20, 30, 40, 50], "atk"))
magicItems.push(new PassiveMagic("Fast Casting", "passiveImages/fastcasting.png", 3, [0, 5, 10, 15], "cdr"))
magicItems.push(new PassiveMagic("Vitality", "passiveImages/vitality.png", 5, [0, 20, 40, 60, 80, 100], "vitality"))
magicItems.push(new PassiveMagic("Haste", "passiveImages/haste.png", 2, [0, 10, 20], "movement"))
magicItems.push(new PassiveMagic("Arcane Effuse", "passiveImages/arcaneeffuse.png", 3, [0, 5, 10, 15], "size"))
magicItems.push(new PassiveMagic("Concentration", "passiveImages/concentration.png", 3, [0, 10, 20, 30], "duration"))
magicItems.push(new PassiveMagic("Snipe", "passiveImages/snipe.png", 3, [0, 5, 10, 15], "critrate"))
magicItems.push(new PassiveMagic("Explorer", "passiveImages/explorer.png", 3, [0, 33, 66, 99], "pickup"))

magicItems.forEach((item) => {arrowModifiers.push(item)})

magicItems.push(new ClickableModifier("Lord of Fire", "passiveImages/lordoffire.png", {}, "specialmagic", 0, {"fireballdmg" : 25, "meteordmg" : 25, "incinerationdmg" : 25, "lavazonedmg" : 25}))
magicItems.push(new ClickableModifier("Stormy Clouds", "passiveImages/stormyclouds.png", {}, "specialmagic", 0, {"thunderstormdmg" : 25, "shockdmg" : 25, "electriczonedmg" : 25, "flashdmg" : 25}))
magicItems.push(new ClickableModifier("Nature's Wrath", "passiveImages/naturewrath.png", {}, "specialmagic", 0, {"cyclonedmg" : 25, "blizzarddmg" : 25, "tsunamidmg" : 25, "novadmg" : 25}))
magicItems.push(new ClickableModifier("Energy Engineering", "passiveImages/energyengineering.png", {}, "specialmagic", 0, {"energyboltdmg" : 25, "raydmg" : 25, "spiritdmg" : 25, "satellitedmg" : 25}))
magicItems.push(new ClickableModifier("Arcana", "passiveImages/arcana.png", {"atk" : 15}, "specialmagic", 0))
magicItems.push(new ClickableModifier("Guardian Angel", "passiveImages/guardianangel.png", {"hp" : 30}, "specialmagic", 0, {"revive" : 1}))
magicItems.push(new ClickableModifier("Silent Casting", "passiveImages/silentcasting.png", {"cdr" : 7}, "specialmagic", 0))
magicItems.push(new ClickableModifier("War Magic", "passiveImages/warmagic.png", {"atk" : 8, "size" : 8}, "specialmagic", 0))
magicItems.push(new ClickableModifier("Timekeeper", "passiveImages/timekeeper.png", {"duration" : 12}, "specialmagic", 0, {"runeduration" : 12}))
magicItems.push(new ClickableModifier("Pioneer", "passiveImages/pioneer.png", {"movement" : 3, "pickup" : 50}, "specialmagic", 0))
magicItems.push(new ClickableModifier("Smite", "passiveImages/smite.png", {"critstrike" : 30}, "specialmagic", 0))
magicItems.push(new ClickableModifier("Seal", "passiveImages/seal.png", {}, "specialmagic", 0, {"enemymovement" : 8}))
magicItems.push(new ClickableModifier("Curse", "passiveImages/curse.png", {}, "specialmagic", 0, {"enemyhp" : 6}))
magicItems.push(new ClickableModifier("Chakra", "passiveImages/chakra.png", {"allmagicdmg" : 20}, "specialmagic", 0))
magicItems.push(new ClickableModifier("Mana Factory", "passiveImages/manafactory.png", {}, "specialmagic", 0, {"manafrequency" : 20}))
magicItems.push(new ClickableModifier("Doctor", "passiveImages/doctor.png", {}, "specialmagic", 0, {"maxlevel" : 3}))
magicItems.push(new ClickableModifier("Blood Magic", "passiveImages/bloodmagic.png", {"amp" : 10, "hpregen" : -0.25}, "specialmagic", 0))
magicItems.push(new ClickableModifier("Adrenaline", "passiveImages/adrenaline.png", {"atk" : 5, "critrate" : 5, "movement" : 5}, "specialmagic", 0))
magicItems.push(new ClickableModifier("Juggernaut", "passiveImages/juggernaut.png", {"atk" : 10, "dmgtaken" : 15}, "specialmagic", 0))
magicItems.push(new ClickableModifier("Priest", "passiveImages/priest.png", {"hpregen" : 0.3}, "specialmagic", 0, {"enemyhp" : 3}))
magicItems.push(new ClickableModifier("Eldritch", "passiveImages/eldritch.png", {}, "specialmagic", 0, {"elitehp" : 10}))
magicItems.push(new ClickableModifier("Noblesse", "passiveImages/noblesse.png", {}, "specialmagic", 0, {"treasurechest" : 1}))

artifactItems.push(new ClickableModifier("Blood Pack", "artifactImages/bloodpack.png", {"hp" : 30, "hpregen" : 0.3}, "common", 0))
artifactItems.push(new ClickableModifier("Shadow Cape", "artifactImages/shadowcape.png", {"evasion" : 10}, "common", 0))
artifactItems.push(new ClickableModifier("Gunpowder", "artifactImages/gunpowder.png", {"size" : 10}, "common", 0))
artifactItems.push(new ClickableModifier("Spell Bag", "artifactImages/spellbag.png", {"pickup" : 50}, "common", 0))
artifactItems.push(new ClickableModifier("Sample", "artifactImages/sample.png", {}, "common", 0, {"enemyhp" : 3}))
artifactItems.push(new ClickableModifier("Ruby", "artifactImages/ruby.png", {"atk" : 12}, "common", 0))
artifactItems.push(new ClickableModifier("Target", "artifactImages/target.png", {"critrate" : 6}, "common", 0))
artifactItems.push(new ClickableModifier("HP Potion", "artifactImages/hppotion.png", {}, "common", 0, "hppotion"))
artifactItems.push(new ClickableModifier("Broom", "artifactImages/broom.png", {"movement" : 10}, "common", 0))
artifactItems.push(new ClickableModifier("Storybook", "artifactImages/storybook.png", {}, "common", 0, {"charactersize" : -25}))
artifactItems.push(new ClickableModifier("Magic Scroll", "artifactImages/magicscroll.png", {"atk" : 10, "cdr" : 3}, "common", 0))
artifactItems.push(new ClickableModifier("Torch", "artifactImages/torch.png", {}, "common", 0, {"fireballcdr" : 15, "incinerationcdr" : 15}))
artifactItems.push(new ClickableModifier("Lightning Rod", "artifactImages/lightningrod.png", {}, "common", 0, {"thunderstormcdr" : 15, "shockcdr" : 15}))
artifactItems.push(new ClickableModifier("Snowman", "artifactImages/snowman.png", {}, "common", 0, {"blizzardcdr" : 15, "novacdr" : 15}))
artifactItems.push(new ClickableModifier("Firefly", "artifactImages/firefly.png", {}, "common", 0, {"spiritcount" : 2}))
artifactItems.push(new ClickableModifier("Glass Orb", "artifactImages/glassorb.png", {}, "common", 0, {"satellitecount" : 2}))
artifactItems.push(new ClickableModifier("Crystal Prism", "artifactImages/crystalprism.png", {}, "common", 0, {"raycount" : 2}))
artifactItems.push(new ClickableModifier("Crow", "artifactImages/crow.png", {"critrate" : 3, "critstrike" : 25}, "common", 0))
artifactItems.push(new ClickableModifier("Sapphire", "artifactImages/sapphire.png", {"mana" : 12}, "common", 0))
artifactItems.push(new ClickableModifier("Harp", "artifactImages/harp.png", {"duration" : 12}, "common", 0))
artifactItems.push(new ClickableModifier("Magic Grimoire", "artifactImages/magicgrimoire.png", {"cdr" : 5}, "common", 0))
artifactItems.push(new ClickableModifier("Cogwheel", "artifactImages/cogwheel.png", {}, "rare", 0, {"artifactcdr" : 20}))
artifactItems.push(new ClickableModifier("Hourglass", "artifactImages/hourglass.png", {"cdr" : 6}, "rare", 0))
artifactItems.push(new ClickableModifier("Force Field", "artifactImages/forcefield.png", {}, "rare", 0, "forcefield"))
artifactItems.push(new ClickableModifier("Totem", "artifactImages/totem.png", {}, "rare", 0, {"cyclonedmg" : 30, "cyclonecdr" : 10}))
artifactItems.push(new ClickableModifier("Philosopher's Stone", "artifactImages/philosopherstone.png", {"mana" : 25}, "rare", 0))
artifactItems.push(new ClickableModifier("Four-Leaf Clover", "artifactImages/fourleafclover.png", {}, "rare", 0, "fourleafclover"))
artifactItems.push(new ClickableModifier("Worldtree Leaf", "artifactImages/worldtreeleaf.png", {}, "rare", 0, "worldtreeleaf"))
artifactItems.push(new ClickableModifier("Rose", "artifactImages/rose.png", {}, "rare", 0, "rose"))
artifactItems.push(new ClickableModifier("Mortarboard", "artifactImages/mortarboard.png", {}, "rare", 0, {"magicchoice" : 33}))
artifactItems.push(new ClickableModifier("Mutagen", "artifactImages/mutagen.png", {}, "rare", 0, "mutagen"))
artifactItems.push(new ClickableModifier("Crucifix", "artifactImages/crucifix.png", {"dmgtaken" : 12, "hpregen" : 0.3}, "rare", 0))
artifactItems.push(new ClickableModifier("Lantern", "artifactImages/lantern.png", {"pickup" : 20}, "rare", 0, {"manaorb" : 10}))
artifactItems.push(new ClickableModifier("Dragonscale", "artifactImages/dragonscale.png", {"dmgtaken" : 30}, "rare", 0))
artifactItems.push(new ClickableModifier("Mana Shield", "artifactImages/manashield.png", {}, "rare", 0, "manashield"))
artifactItems.push(new ClickableModifier("Organic Shield", "artifactImages/organicshield.png", {}, "rare", 0, "organicshield"))
artifactItems.push(new ClickableModifier("Wraith", "artifactImages/wraith.png", {}, "rare", 0, "wraith"))
artifactItems.push(new ClickableModifier("Golem Core", "artifactImages/golemcore.png", {"hp" : 50}, "rare", 0, "golemcore"))
artifactItems.push(new ClickableModifier("Magic Bullet", "artifactImages/magicbullet.png", {}, "rare", 0, {"magicboltdmg" : 30, "magicboltcount" : 1}))
artifactItems.push(new ClickableModifier("Celestial Calendar", "artifactImages/celestialcalendar.png", {}, "rare", 0, "celestialcalendar"))
artifactItems.push(new ClickableModifier("Battery", "artifactImages/battery.png", {}, "rare", 0, {"electriczonedmg" : 30, "electriczonecdr" : 15}))
artifactItems.push(new ClickableModifier("Magitech Module", "artifactImages/magitechmodule.png", {}, "rare", 0, "magitechmodule"))
artifactItems.push(new ClickableModifier("Circular Sawblade", "artifactImages/circularsawblade.png", {}, "rare", 0, ["circularsawblade", {"satellitespeed" : 50}]))
artifactItems.push(new ClickableModifier("Ancient Tree Staff", "artifactImages/ancienttreestaff.png", {}, "rare", 0, {"circlecdr" : 25}))
artifactItems.push(new ClickableModifier("Harmony", "artifactImages/harmony.png", {"cdr" : 3, "duration" : 12}, "rare", 0))
artifactItems.push(new ClickableModifier("Enchant", "artifactImages/enchant.png", {"allmagicdmg" : 15}, "rare", 0))
artifactItems.push(new ClickableModifier("Spell Cape", "artifactImages/spellcape.png", {"atk" : 18}, "rare", 0))
artifactItems.push(new ClickableModifier("Breeze", "artifactImages/breeze.png", {"evasion" : 8, "movement" : 8}, "rare", 0))
artifactItems.push(new ClickableModifier("Bomb", "artifactImages/bomb.png", {"atk" : 8, "size" : 8}, "rare", 0))
artifactItems.push(new ClickableModifier("Radar", "artifactImages/radar.png", {"critrate" : 9}, "rare", 0))
artifactItems.push(new ClickableModifier("Holy Grail", "artifactImages/holygrail.png", {"hpregen" : 0.5}, "rare", 0))
artifactItems.push(new ClickableModifier("Masked Ball", "artifactImages/maskedball.png", {"critrate" : 5, "evasion" : 5}, "rare", 0))
artifactItems.push(new ClickableModifier("Stained Glass", "artifactImages/stainedglass.png", {}, "rare", 0, {"runeduration" : 25}))
artifactItems.push(new ClickableModifier("Mimic", "artifactImages/mimic.png", {}, "rare", 0, "mimic"))
artifactItems.push(new ClickableModifier("Wizard's Hat", "artifactImages/wizardhat.png", {}, "rare", 1, "wizardhat"))
artifactItems.push(new ClickableModifier("Mana Ore", "artifactImages/manaore.png", {"atk" : 25}, "epic", 0))
artifactItems.push(new ClickableModifier("Tarot Card", "artifactImages/tarotcard.png", {}, "epic", 0, {"learnmagic" : 3}))
artifactItems.push(new ClickableModifier("Gravity Orb", "artifactImages/gravityorb.png", {}, "epic", 0, "gravityorb"))
artifactItems.push(new ClickableModifier("Moon Crystal", "artifactImages/mooncrystal.png", {}, "epic", 0, ["mooncrystal", {"novadmg" : 50}]))
artifactItems.push(new ClickableModifier("Pocket Watch", "artifactImages/pocketwatch.png", {"duration" : 24}, "epic", 0))
artifactItems.push(new ClickableModifier("Pandora's Box", "artifactImages/pandorabox.png", {}, "epic", 0, "pandorabox"))
artifactItems.push(new ClickableModifier("Clockwork", "artifactImages/clockwork.png", {}, "epic", 0, "clockwork"))
artifactItems.push(new ClickableModifier("Spiderweb", "artifactImages/spiderweb.png", {}, "epic", 0, {"enemymovement" : 10}))
artifactItems.push(new ClickableModifier("Second Heart", "artifactImages/secondheart.png", {"hp" : 50}, "epic", 0, {"revive" : 1}))
artifactItems.push(new ClickableModifier("Magic Wand", "artifactImages/magicwand.png", {}, "epic", 0, ["magicwand", {"spiritcount" : 2}]))
artifactItems.push(new ClickableModifier("Keyring", "artifactImages/keyring.png", {}, "epic", 0, "keyring"))
artifactItems.push(new ClickableModifier("Ether Arrow", "artifactImages/etherarrow.png", {}, "epic", 0, {"magicboltcdr" : 20, "spiritcdr" : 20}))
artifactItems.push(new ClickableModifier("Black Cat", "artifactImages/blackcat.png", {"cdr" : 9}, "epic", 0))
artifactItems.push(new ClickableModifier("Watcher's Eye", "artifactImages/watchereye.png", {"critstrike" : 50}, "epic", 0, "watchereye"))
artifactItems.push(new ClickableModifier("Aegis", "artifactImages/aegis.png", {"dmgtaken" : 10}, "epic", 1, "aegis"))
artifactItems.push(new ClickableModifier("Aurora", "artifactImages/aurora.png", {}, "epic", 0, "aurora"))
artifactItems.push(new ClickableModifier("Core Energy", "artifactImages/coreenergy.png", {}, "epic", 0, ["coreenergy", {"satellitecount" : 2}]))
artifactItems.push(new ClickableModifier("Otherworldly Tentacle", "artifactImages/otherworldlytentacle.png", {}, "epic", 0, {"raydmg" : 55, "raycdr" : 11}))
artifactItems.push(new ClickableModifier("Siege Hammer", "artifactImages/siegehammer.png", {"critstrike" : 20}, "epic", 0, "siegehammer"))
artifactItems.push(new ClickableModifier("Cauldron", "artifactImages/cauldron.png", {}, "epic", 0, {"fireballdmg" : 35, "meteordmg" : 35, "incinerationdmg" : 35, "lavazonedmg" : 35}))
artifactItems.push(new ClickableModifier("Lightning", "artifactImages/lightning.png", {}, "epic", 0, {"thunderstormdmg" : 35, "shockdmg" : 35, "electriczonedmg" : 35, "flashdmg" : 35}))
artifactItems.push(new ClickableModifier("Weather Controller", "artifactImages/weathercontroller.png", {}, "epic", 0, {"cyclonedmg" : 35, "blizzarddmg" : 35, "tsunamidmg" : 35, "novadmg" : 35}))
artifactItems.push(new ClickableModifier("Mana Scepter", "artifactImages/manascepter.png", {}, "epic", 0, {"energyboltdmg" : 35, "raydmg" : 35, "spiritdmg" : 35, "satellitedmg" : 35}))
artifactItems.push(new ClickableModifier("Phoenix's Bow", "artifactImages/phoenixbow.png", {}, "epic", 0, "phoenixbow"))
artifactItems.push(new ClickableModifier("Mjolnir", "artifactImages/mjolnir.png", {}, "epic", 0, {"thunderstormamount" : 50}))
artifactItems.push(new ClickableModifier("Dimensional Gate", "artifactImages/dimensionalgate.png", {}, "epic", 0, ["dimensionalgate", {"meteorcdr" : 25}]))
artifactItems.push(new ClickableModifier("Palm Leaf Fan", "artifactImages/palmleaffan.png", {}, "epic", 0, "palmleaffan"))
artifactItems.push(new ClickableModifier("Electric Cable", "artifactImages/electriccable.png", {}, "epic", 0, {"shockdmg" : 50, "shockcount" : 2}))
artifactItems.push(new ClickableModifier("Machine Arm", "artifactImages/machinearm.png", {}, "epic", 0, {"energyboltdmg" : 35, "energyboltamount" : 35}))
artifactItems.push(new ClickableModifier("Dragon's Breath", "artifactImages/dragonbreath.png", {}, "epic", 0, ["dragonbreath", {"incinerationsize" : 20}]))
artifactItems.push(new ClickableModifier("Snowflake Crown", "artifactImages/snowflakecrown.png", {}, "epic", 0, ["snowflakecrown", {"blizzardamount" : 30}]))
artifactItems.push(new ClickableModifier("Wave-calming Flute", "artifactImages/wavecalmingflute.png", {}, "epic", 0, "wavecalmingflute"))
artifactItems.push(new ClickableModifier("Sulfur", "artifactImages/sulfur.png", {}, "epic", 0, ["sulfur", {"lavazonedmg" : 50}]))
artifactItems.push(new ClickableModifier("Gae Bolg", "artifactImages/gaebolg.png", {}, "epic", 0, {"flashdmg" : 100}))
artifactItems.push(new ClickableModifier("Candlestick", "artifactImages/candlestick.png", {}, "epic", 0, {"fireballcount" : 1, "meteorcount" : 1}))
artifactItems.push(new ClickableModifier("Clairvoyance", "artifactImages/clairvoyance.png", {"pickup" : 100}, "epic", 0, {"visionrange" : 10}))
artifactItems.push(new ClickableModifier("Mana Circuit", "artifactImages/manacircuit.png", {}, "epic", 0, "manacircuit"))
artifactItems.push(new ClickableModifier("Mirror", "artifactImages/mirror.png", {}, "epic", 0, {"energyboltcount" : 1, "raycount" : 1, "spiritcount" : 1, "satellitecount" : 1}))
artifactItems.push(new ClickableModifier("War Flag", "artifactImages/warflag.png", {}, "epic", 0, "warflag"))
artifactItems.push(new ClickableModifier("Exorcism", "artifactImages/exorcism.png", {}, "epic", 0, {"enemyhp" : 3, "manaenemy" : 20}))
artifactItems.push(new ClickableModifier("Assassination", "artifactImages/assassination.png", {"critstrike" : 25}, "special", 0, "assassination"))
artifactItems.push(new ClickableModifier("Amplifier", "artifactImages/amplifier.png", {}, "special", 1, "amplifier"))
artifactItems.push(new ClickableModifier("Ether", "artifactImages/ether.png", {}, "special", 0, "ether"))
artifactItems.push(new ClickableModifier("Death's Bell", "artifactImages/deathbell.png", {}, "special", 0, "deathbell"))
artifactItems.push(new ClickableModifier("Magic Seal", "artifactImages/magicseal.png", {}, "special", 0, "magicseal"))
artifactItems.push(new ClickableModifier("Space-Time Circuit", "artifactImages/spacetimecircuit.png", {}, "special", 0, {"timespeed" : 24, "gold" : 24}))
artifactItems.push(new ClickableModifier("Singularity", "artifactImages/singularity.png", {}, "special", 0, "singularity"))
artifactItems.push(new ClickableModifier("Cube", "artifactImages/cube.png", {}, "special", 0, "cube"))
artifactItems.push(new ClickableModifier("Brand", "artifactImages/brand.png", {}, "special", 0, "brand"))
artifactItems.push(new ClickableModifier("Geometry", "artifactImages/geometry.png", {}, "special", 0, "geometry"))
artifactItems.push(new ClickableModifier("Toy Castle", "artifactImages/toycastle.png", {}, "special", 0, {"enemysize" : 22, "enemyhp" : 11}))
artifactItems.push(new ClickableModifier("Hunter", "artifactImages/hunter.png", {}, "special", 0, "hunter"))
artifactItems.push(new ClickableModifier("Treasure Map", "artifactImages/treasuremap.png", {"pickup" : 30}, "special", 0, "treasuremap"))
artifactItems.push(new ClickableModifier("Cyborg", "artifactImages/cyborg.png", {}, "special", 1, "cyborg"))
artifactItems.push(new ClickableModifier("Pyramid", "artifactImages/pyramid.png", {}, "special", 0, "pyramid"))
artifactItems.push(new ClickableModifier("Strange Potion", "artifactImages/strangepotion.png", {"atk" : 35, "hp" : 35, "movement" : -10}, "special", 0, {"charactersize" : 35}))
artifactItems.push(new ClickableModifier("AI Magic", "artifactImages/aimagic.png", {"cdr" : 5}, "special", 0, {"learnmagic" : 4}))
artifactItems.push(new ClickableModifier("Dragontongue", "artifactImages/dragontongue.png", {}, "special", 0, {"combinationdmg" : 40}))
artifactItems.push(new ClickableModifier("Peace Treaty", "artifactImages/peacetreaty.png", {}, "special", 0, ["peacetreaty", {"gold" : 15}]))
artifactItems.push(new ClickableModifier("Halo", "artifactImages/halo.png", {"allmagicdmg" : 30}, "special", 0))
artifactItems.push(new ClickableModifier("Basilisk", "artifactImages/basilisk.png", {}, "special", 0, {"elitehp" : 20}))
artifactItems.push(new ClickableModifier("Roster", "artifactImages/roster.png", {}, "special", 0, "roster"))
artifactItems.push(new ClickableModifier("Werewolf", "artifactImages/werewolf.png", {"critrate" : 3}, "special", 0, "werewolf"))
artifactItems.push(new ClickableModifier("Abyss", "artifactImages/abyss.png", {}, "special", 1, "abyss"))
artifactItems.push(new ClickableModifier("Golden Roulette", "artifactImages/goldenroulette.png", {}, "special", 0, "goldenroulette"))
artifactItems.push(new ClickableModifier("Jet Engine", "artifactImages/jetengine.png", {"movement" : 5}, "special", 0, "jetengine"))
artifactItems.push(new ClickableModifier("Longinus' Spear", "artifactImages/longinusspear.png", {}, "special", 0, "longinusspear"))
artifactItems.push(new ClickableModifier("Creation", "artifactImages/creation.png", {"allmagicdmg" : 50}, "legendary", 0, "creation"))
artifactItems.push(new ClickableModifier("Uranium", "artifactImages/uranium.png", {"atk" : 100, "size" : 25, "cdr" : -10}, "legendary", 0))
artifactItems.push(new ClickableModifier("Magic Sword", "artifactImages/magicsword.png", {}, "legendary", 0, "magicsword"))
artifactItems.push(new ClickableModifier("Opulence", "artifactImages/opulence.png", {}, "legendary", 0, {"treasurechest" : 2, "relicchest" : 1}))
artifactItems.push(new ClickableModifier("Accelerator", "artifactImages/accelerator.png", {}, "legendary", 1, "accelerator"))
artifactItems.push(new ClickableModifier("Overmind", "artifactImages/overmind.png", {}, "legendary", 0, {"maxmagicdmg" : 100}))
artifactItems.push(new ClickableModifier("Genome Map", "artifactImages/genomemap.png", {}, "legendary", 0, {"enemyhp" : 20}))
artifactItems.push(new ClickableModifier("Reaper's Scythe", "artifactImages/reaperscythe.png", {}, "legendary", 0, ["reaperscythe", {"enemyhp" : 13}]))
artifactItems.push(new ClickableModifier("Iron Maiden", "artifactImages/ironmaiden.png", {}, "legendary", 0, "ironmaiden"))
artifactItems.push(new ClickableModifier("Hydra", "artifactImages/hydra.png", {}, "legendary", 0, "hydra"))
artifactItems.push(new ClickableModifier("Ballista", "artifactImages/ballista.png", {}, "legendary", 1, "ballista"))
artifactItems.push(new ClickableModifier("Merlin's Cape", "artifactImages/merlincape.png", {"amp" : 20}, "legendary", 0, "merlincape"))
artifactItems.push(new ClickableModifier("Executioner's Ax", "artifactImages/executionerax.png", {"critstrike" : 100}, "legendary", 0))
artifactItems.push(new ClickableModifier("Necronomicon", "artifactImages/necronomicon.png", {"amp" : 50}, "legendary", 0, "necronomicon"))
artifactItems.push(new ClickableModifier("Akashic Record", "artifactImages/akashicrecord.png", {}, "legendary", 0, "akashicrecord"))
artifactItems.push(new ClickableModifier("DNA", "artifactImages/dna.png", {}, "legendary", 0, "dna"))
artifactItems.push(new ClickableModifier("Sacrosanct", "artifactImages/sacrosanct.png", {"dmgtaken" : 20}, "legendary", 0, "sacrosanct"))
artifactItems.push(new ClickableModifier("Dragon's Magic", "artifactImages/dragonmagic.png", {"amp" : 32, "atk" : 32}, "legendary", 0))
artifactItems.push(new ClickableModifier("Joker", "artifactImages/joker.png", {}, "legendary", 0, "joker"))
artifactItems.push(new ClickableModifier("Titan's Power", "artifactImages/titanpower.png", {}, "legendary", 2, "titanpower"))
artifactItems.push(new ClickableModifier("Gaia", "artifactImages/gaia.png", {"hp" : 50}, "legendary", 1, "gaia"))
artifactItems.push(new ClickableModifier("Domain of Power", "artifactImages/domainofpower.png", {"cdr" : -10}, "legendary", 0, "domainofpower"))
artifactItems.push(new ClickableModifier("Holy Chest", "artifactImages/holychest.png", {}, "legendary", 0, ["holychest", {"enemyhp" : 10}]))
artifactItems.push(new ClickableModifier("Crown", "artifactImages/crown.png", {}, "legendary", 0, "crown"))
artifactItems.push(new ClickableModifier("Ouroboros", "artifactImages/ouroboros.png", {"cdr" : 15}, "legendary", 0))
artifactItems.push(new ClickableModifier("Eclipse", "artifactImages/eclipse.png", {}, "legendary", 0, "eclipse"))
artifactItems.push(new ClickableModifier("Excalibur", "artifactImages/excalibur.png", {}, "legendary", 0, "excalibur"))
artifactItems.push(new ClickableModifier("Nexus", "artifactImages/nexus.png", {}, "legendary", 0, "nexus"))
artifactItems.push(new ClickableModifier("Dragon's Heart", "artifactImages/dragonheart.png", {}, "legendary", 2, "dragonheart"))

document.querySelector("#research-button").click()

function calculateStats() {
    let stats = {"hp" : 200, "hpregen" : 0, "dmgtaken" : 1, "evasion" : 0, "movement" : 100, "critrate" : 3, "critstrike" : 200,
        "allmagicdmg" : 0, "atk" : 100, "amp" : 0, "size" : 0, "duration" : 0, "cdr" : 1, "mana" : 0, "orbhp" : 100, "pickup" : 0
    }
    let specialStats = {"unique" : []}
    
    arrowModifiers.forEach((modifier) =>{
        if(modifier.stat == "cdr"){
            let value = modifier.values[modifier.fullCircleAmount]
            stats["cdr"]*=1-value/100
        }
        else if(modifier.stat == "dmgtaken"){
            let value = modifier.values[modifier.fullCircleAmount]
            stats["dmgtaken"]*=1-value/100
        }
        else if(modifier.stat == "vitality"){
            stats["hp"]+=modifier.values[modifier.fullCircleAmount]*2
            stats["orbhp"]+=modifier.values[modifier.fullCircleAmount]/2
        }
        else{
            stats[modifier.stat] += modifier.values[modifier.fullCircleAmount]
        }
    })

    let researchPointCount = 0
    researchItems.forEach((modifier) =>{
        researchPointCount += modifier.fullCircleAmount
        if(modifier.stat == "cdr"){
            let value = modifier.values[modifier.fullCircleAmount]
            stats["cdr"]*=1-value/100
        }
        else if(modifier.stat == "dmgtaken"){
            let value = modifier.values[modifier.fullCircleAmount]
            stats["dmgtaken"]*=1-value/100
        }
        else if(modifier.stat == "vitality"){
            stats["hp"]+=modifier.values[modifier.fullCircleAmount]*2
            stats["orbhp"]+=modifier.values[modifier.fullCircleAmount]/2
        }
        else if(modifier.stat == "recycle" && modifier.fullCircleAmount > 0){
            specialStats["unique"].push("Retrieve "+modifier.values[modifier.fullCircleAmount]+"% more Mana when retrieving Mana")
        }
        else if(modifier.stat == "awakening" && modifier.fullCircleAmount > 0){
            specialStats["unique"].push("Leveling up causes an Explosion around the characyer and restores "+modifier.values[modifier.fullCircleAmount]+"% HP")
        }
        else if(modifier.stat == "growth" && modifier.fullCircleAmount > 0){
            specialStats["unique"].push("Every 20 levels increase ATK and Max HP by "+modifier.values[modifier.fullCircleAmount]+"%")
        }
        else if(modifier.stat == "support" && modifier.fullCircleAmount > 0){
            specialStats["unique"].push("Increase the amount of Mana Orbs created around the character when the game starts by "+modifier.values[modifier.fullCircleAmount]+"%")
        }
        else if(modifier.stat == "luck" && modifier.fullCircleAmount > 0){
            specialStats["unique"].push("Field items are created "+modifier.values[modifier.fullCircleAmount]+"% more often")
        }
        else if(modifier.stat == "loot" && modifier.fullCircleAmount > 0){
            specialStats["unique"].push("Treasure Chests are created "+modifier.values[modifier.fullCircleAmount]+"% more frequently")
        }
        else if((modifier.stat == "magicchoice" || modifier.stat == "runeduration") && modifier.fullCircleAmount > 0){
            if(!(modifier.stat in specialStats)){specialStats[modifier.stat] = 0}
            specialStats[modifier.stat] += modifier.values[modifier.fullCircleAmount]
        }
        else{
            stats[modifier.stat] += modifier.values[modifier.fullCircleAmount]
        }
    })
    document.querySelector(".point-count").innerText = researchPointCount

    for(let modifierOrder = 0; modifierOrder < 3; modifierOrder++){
        activeModifiers.forEach((modifier) =>{
            if(modifierOrder != modifier.calculationOrder){
                return
            }
            for(const[key, value] of Object.entries(modifier.stats)){
                if(key == "cdr" || key=="dmgtaken"){
                    stats[key]*=1-value/100
                }   
                else if(key=="hp"){
                    stats[key] += value*2
                }
                else{
                    stats[key] += value
                }
            }
            if(modifier.specialEffects){
                if(typeof modifier.specialEffects == "string" || Array.isArray(modifier.specialEffects)){
                    let artifactName 
                    if(Array.isArray(modifier.specialEffects)){
                        artifactName = modifier.specialEffects[0]
                    }
                    else{
                        artifactName = modifier.specialEffects
                    }
                    if(artifactName == "hppotion"){
                        specialStats["unique"].push("Recover 50% HP over 3 seconds if HP is 25% or lower")
                    }
                    else if(artifactName == "forcefield"){
                        specialStats["unique"].push("If receiving damage, block it and become invincible for 3 seconds")
                    }
                    else if(artifactName == "fourleafclover"){
                        specialStats["unique"].push("A Critical Strike occurs every 5 times an enemy is damaged")
                    }
                    else if(artifactName == "worldtreeleaf"){
                        specialStats["unique"].push("Create a Life Orb near the character every 30 seconds")
                    }
                    else if(artifactName == "rose"){
                        specialStats["unique"].push("Deal 20% additional Damage to enemies whose HP is 90% or above")
                    }
                    else if(artifactName == "mutagen"){
                        specialStats["unique"].push("8% chance for enemies to appear with 30% less Max HP and Size")
                    }
                    else if(artifactName == "manashield"){
                        specialStats["unique"].push("Decrease Damage Taken by 50% of the current Mana percentage")
                    }
                    else if(artifactName == "organicshield"){
                        specialStats["unique"].push("Obtaining a Life Orb increases HP equal to the bonus Recovery")
                    }
                    else if(artifactName == "wraith"){
                        specialStats["unique"].push("Pass through all enemies and obstacles")
                    }
                    else if(artifactName == "golemcore"){
                        specialStats["unique"].push("The screen does not turn red even when the character is Near Death")
                    }
                    else if(artifactName == "celestialcalendar"){
                        specialStats["unique"].push("Every 3 casts of Meteor increases the power of the next Meteor by 1.5X")
                    }
                    else if(artifactName == "magitechmodule"){
                        specialStats["unique"].push("22% chance for an Energy Bolt to split into 2")
                    }
                    else if(artifactName == "circularsawblade"){
                        specialStats["unique"].push("Each time an enemy is damage by Satellite, the enemy receives 0.3% additional damage")
                    }
                    else if(artifactName == "mimic"){
                        specialStats["unique"].push("Cause an Explosion when obtaining a Treasure Chest and create 10 random items nearby")
                    }
                    else if(artifactName=="wizardhat"){
                        stats["atk"] += Math.floor(rounded(1-stats["cdr"], 3)*100/3)
                    }
                    else if(artifactName == "gravityorb"){
                        specialStats["unique"].push("Push back enemies near the character every 12 seconds")
                    }
                    else if(artifactName == "mooncrystal"){
                        specialStats["unique"].push("Permanently decrease the Movement Speed of an enemy who was first frozen by 10%")
                    }
                    else if(artifactName == "pandorabox"){
                        specialStats["unique"].push("Cast one of the following Magic randomly: Cyclone, Meteor, Tsunami every 5 seconds")
                    }
                    else if(artifactName == "clockwork"){
                        specialStats["unique"].push("Stop all enemies near the character for 2 seconds every 18 seconds")
                    }
                    else if(artifactName == "magicwand"){
                        specialStats["unique"].push("Increase Spirit Damage by 7% for each Spirit")
                    }
                    else if(artifactName == "keyring"){
                        specialStats["unique"].push("Get one chance to switch out an Artifact through a Normal Treasure Chest (Available 3 times)")
                    }
                    else if(artifactName == "watchereye"){
                        specialStats["unique"].push("Cause a giant Explosion when obtaining a Life Orb")
                    }
                    else if(artifactName == "aegis"){
                        stats["amp"] += Math.floor(rounded(1-stats["dmgtaken"], 3)*100/10)*3
                    }
                    else if(artifactName == "aurora"){
                        specialStats["unique"].push("Create a Mana Orb (Large) near the character every 20 seconds")
                    }
                    else if(artifactName == "coreenergy"){
                        specialStats["unique"].push("Satellites explode whenever they deal damage to enemies")
                    }
                    else if(artifactName == "siegehammer"){
                        specialStats["unique"].push("Deal 20% Additional Damage if an attack is not a Critical Strike")
                    }
                    else if(artifactName == "phoenixbow"){
                        specialStats["unique"].push("Deal 50% Additional Damage to an enemy directly hit by a Fireball")
                        specialStats["unique"].push("Increase Fireball Penetration by 1")
                    }
                    else if(artifactName == "dimensionalgate"){
                        specialStats["unique"].push("20% chance to cast Meteor 1 more time when cast")
                    }
                    else if(artifactName == "palmleaffan"){
                        specialStats["unique"].push("Every 5 casts of Cyclone increases the next Cyclone's Damage and Size by 2X")
                    }
                    else if(artifactName == "dragonbreath"){
                        specialStats["unique"].push("Each time an enemy is damaged by Incineration, the enemy receives 1% additional damage")
                    }
                    else if(artifactName == "snowflakecrown"){
                        specialStats["unique"].push("Each Blizzard increases Damage by 1%")
                    }
                    else if(artifactName == "wavecalmingflute"){
                        specialStats["unique"].push("Each cast of Tsunami increases Damage by 10%, and decreases Cooldown by 10%. This effect resets after stacking 4 times")
                    }
                    else if(artifactName == "sulfur"){
                        specialStats["unique"].push("Lava Zone increases in Size by 2% every second")
                    }
                    else if(artifactName == "manacircuit"){
                        specialStats["unique"].push("Amplify ATK by 1% whenever obtaining a Mana Orb. Stack resets every 5 seconds")
                    }
                    else if(artifactName == "warflag"){
                        specialStats["unique"].push("Amplify ATK by 2% for every second the character stays in place. (Max Stack: 20%)")
                    }
                    else if(artifactName == "assassination"){
                        specialStats["unique"].push("If an enemy has never received damage yet, a Critical Strike occurs")
                    }
                    else if(artifactName == "amplifier"){
                        stats["size"]*=1.28
                    }
                    else if(artifactName == "ether"){
                        specialStats["unique"].push("Obtain 1% mana per second")
                    }
                    else if(artifactName == "deathbell"){
                        specialStats["unique"].push("All enemies near the character disappear every 30 seconds")
                    }
                    else if(artifactName == "magicseal"){
                        specialStats["unique"].push("Limit the Damage Taken in one hit to 30% of the character's Max HP")
                    }
                    else if(artifactName == "singularity"){
                        specialStats["unique"].push("All Mana Orbs (Small) are changed to (Medium)")
                    }
                    else if(artifactName == "cube"){
                        specialStats["unique"].push("Increase the level of all un-mastered Normal Passive Magic by 1")
                    }
                    else if(artifactName == "brand"){
                        specialStats["unique"].push("Amplify ATK by 1% and increase Movement Speed by 1% for every 5% of HP lost")
                    }
                    else if(artifactName == "geometry"){
                        specialStats["unique"].push("Always retrieve 100% Mana when retrieving Mana.\nGive up 1 Mana Retrieval chance")
                    }
                    else if(artifactName == "hunter"){
                        specialStats["unique"].push("Amplify ATK by 1% for every 100 enemies killed\nStack resets when Amplification is at 25%")
                    }
                    else if(artifactName == "treasuremap"){
                        specialStats["unique"].push("2 Treasure Chests are created at a random location")
                    }
                    else if(artifactName == "cyborg"){
                        stats["atk"] += stats["hpregen"]*30
                        stats["hpregen"] = 0
                    }
                    else if(artifactName == "pyramid"){
                        specialStats["unique"].push("Decrease a Magic's Cooldown by 1 second if it is 5 or more seconds")
                    }
                    else if(artifactName == "peacetreaty"){
                        specialStats["unique"].push("Decrease the amount of enemies by 15%")
                    }
                    else if(artifactName == "roster"){
                        specialStats["unique"].push("After killing 100 enemies, any damage dealt to the next 50 instakills them")
                    }
                    else if(artifactName == "werewolf"){
                        specialStats["unique"].push("Killing 2500 enemies activates the Berserk Rune effect")
                    }
                    else if(artifactName == "abyss"){
                        if(!stats["mana"] % 2 == 0){
                            stats["mana"] -= 1
                        }
                        stats["atk"] += stats["mana"]/2
                        stats["mana"] = 0
                    }
                    else if(artifactName == "goldenroulette"){
                        specialStats["unique"].push("Obtain 1 random Legendary Artifact")
                    }
                    else if(artifactName == "jetengine"){
                        specialStats["unique"].push("When moving, ATK is Amplified by 15%")
                    }
                    else if(artifactName == "longinusspear"){
                        specialStats["unique"].push("Shoots down powerful lightning every 5 seconds")
                    }
                    else if(artifactName == "creation"){
                        specialStats["unique"].push("Every 5th cast of a spell reduces its Cooldown by 50%")
                    }
                    else if(artifactName == "magicsword"){
                        specialStats["unique"].push("Instakill an enemy whose HP is lower than 20%")
                    }
                    else if(artifactName == "accelerator"){
                        let moveSpeed = stats["movement"]-100
                        while(moveSpeed % 3 != 0){
                            moveSpeed -= 1
                        }
                        let cdrValue = moveSpeed/3
                        console.log(moveSpeed, cdrValue)
                        stats["cdr"]*= 1-cdrValue/100
                    }
                    else if(artifactName == "reaperscythe"){
                        specialStats["unique"].push("8% chance to instakill an enemy when dealing damage to it for the first time")
                    }
                    else if(artifactName == "ironmaiden"){
                        specialStats["unique"].push("15% chance to cause an Explosion when killing an enemy\n(Explosion Damage is 75% of the enemy's Max HP)")
                    }
                    else if(artifactName == "hydra"){
                        specialStats["unique"].push("Deal 0.5% of the enemy's current HP as Additional Damage whenever dealing damage to an enemy\n(Maximum additional damage : 30%)")
                    }
                    else if(artifactName == "ballista"){
                        stats["critrate"] += stats["evasion"]
                        stats["evasion"] = 0
                    }
                    else if(artifactName == "merlincape"){
                        specialStats["unique"].push("Amplify ATK by 33% of the current Mana percentage")
                    }
                    else if(artifactName == "necronomicon"){
                        specialStats["unique"].push("The character's Current HP can no longer be more than 50% of Max HP")
                    }
                    else if(artifactName == "akashicrecord"){
                        specialStats["unique"].push("Amplify ATK by 1% for every 3 levels\nIncrease Current Level and Max Level by 5")
                    }
                    else if(artifactName == "dna"){
                        specialStats["unique"].push("Amplify ATK by 1% for every 5000 enemies killed, up to 50%")
                    }
                    else if(artifactName == "sacrosanct"){
                        specialStats["unique"].push("When HP is 75% or higher, ATK is Amplified by 50%")
                    }
                    else if(artifactName == "joker"){
                        specialStats["unique"].push("50% chance to stack 1 additional multiplier when landing a Critical Strike")
                    }
                    else if(artifactName == "titanpower"){
                        stats["atk"] += (stats["atk"]-100)*0.5
                    }
                    else if(artifactName == "gaia"){
                        let hp = stats["hp"]
                        while(hp % 20 != 0){
                            hp -= 1
                        }
                        stats["atk"] += hp/20*3
                    }
                    else if(artifactName == "domainofpower"){
                        specialStats["unique"].push("Gain 1 more Magic Combination chance")
                    }
                    else if(artifactName == "holychest"){
                        specialStats["unique"].push("Activate a random Rune effect every 45 seconds")
                    }
                    else if(artifactName == "crown"){
                        activeModifiers.forEach((modifier)=>{
                            if(modifier instanceof ClickableModifier){
                                if(modifier.rarity == "special"){
                                    stats["amp"] += 5
                                }
                                else if(modifier.rarity == "epic"){
                                    stats["amp"] += 1
                                }
                            }
                        })
                    }
                    else if(artifactName == "eclipse"){
                        specialStats["unique"].push("Deal a maximum of 45% of the HP the target lost as additional Damage")
                    }
                    else if(artifactName == "excalibur"){
                        specialStats["unique"].push("Create an Aura around the character and amplify ATK by 1% for each enemy inside the area")
                    }
                    else if(artifactName == "nexus"){
                        specialStats["unique"].push("Choose one Attack magic and increase Damage by 200%")
                    }
                    else if(artifactName == "dragonheart"){
                        stats["amp"]*=1.3
                    }
                    //all special artifacts like titan's will be here
                }
                if(typeof modifier.specialEffects != "string"){
                    let artifactSpecialStats
                    if(Array.isArray(modifier.specialEffects)){
                        artifactSpecialStats = modifier.specialEffects[1]
                    }
                    else{
                        artifactSpecialStats = modifier.specialEffects
                    }
                    for(const[key, value] of Object.entries(artifactSpecialStats)){
                        if(key.endsWith("cdr") || key.endsWith("hp")){
                            if(!(key in specialStats)){specialStats[key] = 1}
                            specialStats[key] *= 1-value/100
                        }
                        else{
                            if(!(key in specialStats)){specialStats[key] = 0}
                            specialStats[key] += value
                        }
                    }
                }
            }
        })
    }

    let statLists = document.querySelector("#stat-lists")
    let firstStats = statLists.children.item(0).children
    firstStats.item(0).querySelector("span").innerHTML = stats["hp"]
    firstStats.item(1).querySelector("span").innerHTML = stats["hpregen"]+"%"
    if(-100+stats["dmgtaken"]*100 >= 0){
        firstStats.item(2).querySelector("span").innerHTML = "+"+((rounded(-100+stats["dmgtaken"]*100, 1))+"%")
    }
    else{
        firstStats.item(2).querySelector("span").innerHTML = rounded(-100+stats["dmgtaken"]*100, 1)+"%"
    }
    firstStats.item(3).querySelector("span").innerHTML = stats["evasion"]+"%"
    firstStats.item(4).querySelector("span").innerHTML = stats["movement"]
    firstStats.item(5).querySelector("span").innerHTML = stats["critrate"]+"%"
    firstStats.item(6).querySelector("span").innerHTML = stats["critstrike"]+"%"
    firstStats.item(7).querySelector("span").innerHTML = stats["allmagicdmg"]+"%"
    let secondStats = statLists.children.item(1).children
    secondStats.item(0).querySelector("span").innerHTML = stats["atk"]
    secondStats.item(1).querySelector("span").innerHTML = "+"+rounded(stats["amp"], 1)+"%"
    secondStats.item(2).querySelector("span").innerHTML = "+"+stats["size"]+"%"
    secondStats.item(3).querySelector("span").innerHTML = "+"+stats["duration"]+"%"
    if(-100+stats["cdr"]*100 >= 0){
        secondStats.item(4).querySelector("span").innerHTML = "+"+((rounded(-100+stats["cdr"]*100, 1))+"%")
    }
    else{
        secondStats.item(4).querySelector("span").innerHTML = rounded(-100+stats["cdr"]*100, 1)+"%"
    }
    secondStats.item(5).querySelector("span").innerHTML = "+"+stats["mana"]+"%"
    secondStats.item(6).querySelector("span").innerHTML = rounded(stats["hp"]*0.15*stats["orbhp"]/100, 1)
    secondStats.item(7).querySelector("span").innerHTML = "+"+stats["pickup"]+"%"

    let specialList = document.querySelector("#specialbox ul")
    while(specialList.firstChild){
        specialList.removeChild(specialList.lastChild)
    }
    for(const[key, value] of Object.entries(specialStats)){
        if(key == "enemyhp"){
            let li = document.createElement("li")
            li.innerText = "Decrease the Max HP of all enemies by "+rounded(100-value*100, 1)+"%"
            specialList.appendChild(li)
        }
        else if(key=="charactersize"){
            if(value < 0){
                let li = document.createElement("li")
                li.innerText = "Decrease the character's size by "+(-value)+"%"
                specialList.appendChild(li)  
            }
            else{
                let li = document.createElement("li")
                li.innerText = "Increase the character's size by "+value+"%"
                specialList.appendChild(li)  
            }
        }
        else if(key=="fireballcdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Fireball Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="incinerationcdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Incineration Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="thunderstormcdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Thunderstorm Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="shockcdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Electric Shock Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="blizzardcdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Blizzard Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="novacdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Frost Nova Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="spiritcount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Spirits by "+value
            specialList.appendChild(li)      
        }
        else if(key=="satellitecount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Satellites by "+value
            specialList.appendChild(li)      
        }
        else if(key=="raycount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Arcane Rays by "+value
            specialList.appendChild(li)      
        }
        else if(key=="artifactcdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease All Artifact Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="cyclonedmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Cyclone Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="cyclonecdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Cyclone Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="magicchoice"){
            let li = document.createElement("li")
            li.innerText = value+"% increased chance to have 4 Magic choices"
            specialList.appendChild(li)      
        }
        else if(key=="manaorb"){
            let li = document.createElement("li")
            li.innerText = "Increase Mana Orb Acquisition by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="magicboltdmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Magic Bolt Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="magicboltcount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Magic Bolts by "+value
            specialList.appendChild(li)      
        }
        else if(key=="electriczonedmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Electric Zone Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="electriczonecdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Electric Zone Damage Interval by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="satellitespeed"){
            let li = document.createElement("li")
            li.innerText = "Increase Satellite Rotation Speed by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="circlecdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Magic Circle Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="runeduration"){
            let li = document.createElement("li")
            li.innerText = "Increase the duration of Rune effects by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="novadmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Frost Nova Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="enemymovement"){
            let li = document.createElement("li")
            li.innerText = "Decrease the Movement Speed of all enemies by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="revive"){
            let li = document.createElement("li")
            if(value == 1){
                li.innerText = "Revive 1 more time"
            }
            else{
                li.innerText = "Revive "+value+" more times"
            }
            specialList.appendChild(li)      
        }
        else if(key=="magicboltcdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Magic Bolt Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }        
        else if(key=="spiritcdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Spirit Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="learnmagic"){
            let li = document.createElement("li")
            li.innerText = "Learn "+value+" random Magic"
            specialList.appendChild(li)      
        }
        else if(key=="raydmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Arcane Ray Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="raycdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Arcane Ray Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="fireballdmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Fireball Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="meteordmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Meteor Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="incinerationdmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Incineration Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="lavazonedmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Lava Zone Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="thunderstormdmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Thunderstorm Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="shockdmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Electric Shock Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="flashdmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Flash Shock Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="blizzarddmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Blizzard Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="tsunamidmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Tsunami Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="energyboltdmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Energy Bolt Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="spiritdmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Spirit Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="satellitedmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Satellite Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="thunderstormamount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Thunderstorms by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="meteorcdr"){
            let li = document.createElement("li")
            li.innerText = "Decrease Meteor Cooldown by "+(100-value*100)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="shockcount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Electric Shocks by "+value
            specialList.appendChild(li)      
        }
        else if(key=="energyboltamount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Energy Bolts by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="incinerationsize"){
            let li = document.createElement("li")
            li.innerText = "Increase Incineration Size by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="blizzardamount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Blizzards by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="fireballcount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Fireballs by "+value
            specialList.appendChild(li)      
        }
        else if(key=="meteorcount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Meteors by "+value
            specialList.appendChild(li)      
        }
        else if(key=="visionrange"){
            let li = document.createElement("li")
            li.innerText = "Increase the vision range of the character by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="energyboltcount"){
            let li = document.createElement("li")
            li.innerText = "Increase the number of Energy Bolts by "+value
            specialList.appendChild(li)      
        }
        else if(key=="manaenemy"){
            let li = document.createElement("li")
            li.innerText = "Increase Mana Acquisition from killing enemies by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="timespeed"){
            let li = document.createElement("li")
            li.innerText = "Time flows "+value+"% faster"
            specialList.appendChild(li)      
        }
        else if(key=="gold"){
            let li = document.createElement("li")
            li.innerText = "Increase Gold Acquisition by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="enemysize"){
            let li = document.createElement("li")
            li.innerText = "Decrease the Size of all enemies by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="combinationdmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Combination Magic Damage by "+value+"%"
            specialList.appendChild(li)      
        }
        else if(key=="elitehp"){
            let li = document.createElement("li")
            li.innerText = "Decrease the Max HP of Elite Monsters by "+rounded(100-value*100, 1)+"%"
            specialList.appendChild(li)      
        }
        else if(key=="treasurechest"){
            let li = document.createElement("li")
            if(value == 1){
                li.innerText = "Create 1 Treasure Chest nearby"
            }
            else{
                li.innerText = "Create "+value+" Treasure Chests nearby"
            }
            specialList.appendChild(li)      
        }
        else if(key=="relicchest"){
            let li = document.createElement("li")
            if(value == 1){
                li.innerText = "Create 1 Relic Chest nearby"
            }
            else{
                li.innerText = "Create "+value+" Relic Chests nearby"
            }
            specialList.appendChild(li)      
        }
        else if(key=="maxmagicdmg"){
            let li = document.createElement("li")
            li.innerText = "Increase Magic Damage by "+value+"% for all max level Magic"
            specialList.appendChild(li)      
        }
        else if(key=="manafrequency"){
            let li = document.createElement("li")
            li.innerText = "Mana Orbs are created "+value+"% more frequently"
            specialList.appendChild(li)      
        }
        else if(key=="maxlevel"){
            let li = document.createElement("li")
            li.innerText = "Increase Max Level by "+value
            specialList.appendChild(li)      
        }
        //all special stats artifacts go here
    }

    for(let item of specialStats["unique"]){
        let li = document.createElement("li")
        li.innerText = item
        specialList.appendChild(li)
    }
}