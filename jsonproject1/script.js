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
      rt.textContent = 'rating   '+r.rating
      const like = document.createElement('button')
      like.textContent = 'like'
      const dislike = document.createElement('button')
      dislike.textContent = 'unlike'
      const count = document.createElement('p')
      count.classList.add('cn')
      count.textContent = ''
     
      let countvalue = 0;
      like.addEventListener("click",function cou(){
        if (countvalue < 1){
          countvalue++;
          count.textContent ='liked'
        }
       
        
      })
      dislike.addEventListener("click",function coun(){
        if (countvalue > 0){
          countvalue--;
          count.textContent = ''
        }
      });
       receipe.append(image,title,sn,rt,like,dislike,count)
       mainDiv.appendChild(receipe)
   });
}
