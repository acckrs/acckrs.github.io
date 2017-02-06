var journal=[];

function addEntry(events,didITurnIntoSquirrel){
   journal.push({
       events:events,
    squirrrel:didITurnIntoSquirrel
    })
}

function phi(table){
    return (table[0]*table[3]-table[2]*table[1])/
              Math.sqrt((table[0]+table[1])*
                        (table[2]+table[3])*
                        (table[1]+table[3])*
                        (table[0]+table[2]));
}

function hasItem(event,entry){
    return entry.events.indexOf(event)!=-1;
}

function tableFor(event,journal){
    table=[0,0,0,0];
    for (var i=0;i<journal.length;i++){
        var index=0;
        if (hasItem(event,journal[i])) index+=1;
        if (journal[i].squirrrel) index+=2;
        table[index]+=1;
    }
    return table;
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

console.log(tableFor("work",journal));