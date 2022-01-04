// use local storage as your db for now
const addToDb = id => {
  
  const exists = getDb();
  let loggedIn = id;
  
  //console.log(loggedIn);
  updateDb(loggedIn);
}

const getDb = () => localStorage.getItem('loggedIn');

const updateDb = loggedIn => {
  localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const loggedIn = JSON.parse(exists);
    delete loggedIn[id];
    updateDb(loggedIn);
  }
}

const getLoggedIn = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearLoggedIn = () => {
  localStorage.removeItem('loggedIn');
}


//product
function shortListProduct( id, userEmail){
  //console.log(id, userEmail);
  
  let a = [];

  a.push(id);
  let x = JSON.parse(localStorage.getItem(userEmail));

  a = a.concat(x);

  localStorage.setItem(userEmail, JSON.stringify(a));

}

function match( userEmail,id){

  let x = JSON.parse(localStorage.getItem(userEmail));

  for( let i =0; i<x.length; i++){
    if( x[i]===id)
    return true;
  }
  return false;
}

function sortation( email,data){

  console.log(email);
  console.log();
  let store = localStorage.getItem(email);
  if(store === null){
    return data;
  }else{

    for( let i=0; i<data.length; i++){
       if( match(email,data[i]._id)){
         delete data[i];
       }
    }
    return data;
  }
  
  
}

export { addToDb, removeFromDb as deleteFromDb, shortListProduct,sortation, clearLoggedIn, getLoggedIn }




