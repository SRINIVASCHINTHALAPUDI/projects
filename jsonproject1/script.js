const mainDiv = document.getElementById('main')
function fetchData ()
{
    fetch('https://dummyjson.com/recipes')
    .then(function(res) { return res.json()})
    .then(function(data) {console.log(data), displaydata(data.recipes)})

}
fetchData()
function displaydata(data)
{
    data.forEach( function (r)
      {
        const receipe = document.createElement('div');
       receipe.classList.add('receipe');
       const image = document.createElement('img')
       image.classList.add('image')
       image.src = r.image;
       image.alt = r.name;
       const title = document.createElement('h3')
       title.textContent = r.name
      const sn = document.createElement('ol')    
      sn.textContent = r.ingredients;
      const rt = document.createElement('p') 
      rt.textContent = 'rating   '+r.rating;
      const like = document.createElement('button')
      like.classList.add('like')
      like.textContent = 'like'
      const count = document.createElement('h2')
      count.textContent = '0'+'K'
      like.addEventListener("click",function(){
      let currentCount = parseInt(count.textContent);
      currentCount++;
      count.textContent = currentCount + 'k'
     
    });
       receipe.append(image,title,sn,rt,like,count)
       mainDiv.appendChild(receipe)
   });
}
