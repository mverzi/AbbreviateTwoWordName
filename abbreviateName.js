/**
 * This function abbreviates a name to the initials of the first two words
 * @param {string} name 
 * @returns string abbreviation
 */
function abbrevName(name){
    name = name.split(' ')
    return name[0].substring(0,1).toUpperCase() + '.' + name[1].substring(0,1).toUpperCase()
  }