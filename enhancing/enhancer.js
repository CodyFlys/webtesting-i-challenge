module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  if(item.enhancement == 20){
    console.log("ITS ALREADY MAXED, SORRY!")
    return item
  } else if(item.enhancement <= 19){
    item.enhancement = item.enhancement + 1;
    return item
  }
}

function fail(item) {
  if(item.enhancement < 15){
    item.durability = item.durability - 5;
    console.log("durability -5", item)
    return item
  } else if(item.enhancement >= 15){
    item.durability = item.durability - 10;
    console.log("durability -10", item)
    return item
  } else if(item.enhancement > 16){
    item.enhancement = item.enhancement - 1;
    console.log("Enhancement -1", item)
    return item
  }
}

function repair(item) {
  const newItem = item;
  newItem.durability = 100;
  return { ...newItem };
}

function get(item) {
  return { ...item };
}
