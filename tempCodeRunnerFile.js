   function prom(complete) {
      return new Promise(function(resolve, reject) {
        if(complete){
          resolve("Successful")
        }
        else {
          reject("Failure")
        }
    }); }