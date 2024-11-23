function fetchUserprofile(){
return new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve({name:"Izabella Balogh"});
    } else {
      reject("failed to load profile");
    }
  });
}

function fetchposts(userId){
  let promise = new Promise((resolve, reject) => {
    let success = true; 
    if (success) {
      resolve("fetching post was succesful.");
    } else {
      reject("failed to fetch posts.");
    }
  });
  
  promise.then(result => {
    console.log(result);
  }).catch(error => {
    console.error("Error:", error);
  });
}

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function fetchComments() {
    console.log('Comment1: awaiting comment');
    await delay(3000);  // We will use delay() function to cause a delay of 3 seconds
    console.log('Comment1 1: ending comment');
  
    console.log('Comment 2: awaiting comment');
    await delay(4000);  // We will use delay() function to cause a delay of 4 seconds
    console.log('comment2: Ending comment');
  }
  
  fetchComments();
  
  