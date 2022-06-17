function getAdmins(map) {
    let admins = [];
    
    for ([key, value] of map) {      
        if (value == 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

const map = new Map();

map.set('Carlos','Admin');
map.set('Matheus','User');
map.set('Marcia','Admin');
map.set('Dimitri','Admin');
map.set('Rafael','User');


console.log(getAdmins(map));
