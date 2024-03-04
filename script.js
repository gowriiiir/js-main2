fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then((data)=>{
  return data.json();
})
.then((completedata)=>{
  let data1="";
  completedata.map((values)=>{
    data1+=`
    
    <div class="card">
    <img src="${values.url}" class="images" alt="img">
    <h5 class="text-center">random cat image</h5>
    </div>
    `
  })
  document.getElementById("cards").innerHTML=data1;
})
data1.className = 'col-12 col-md-12 col-lg-4'
.catch((err)=>{
  console.log(err);
})