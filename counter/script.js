let c = 0
function incre()
{
    console.log(document.getElementById("counter"))
   if (c < 25)
   {
    c++
    document.getElementsByClassName("para")[0].textContent = c
    {
        if(c%2==0){
            document.getElementsByClassName("nt")[0].textContent = 'even'
        }
        else{
            document.getElementsByClassName("nt")[0].textContent = 'odd'
    
        }
    }
   
   }
   else
   {
    alert("cant cross 25")
   }
}
   function decre()
   {
    
        if(c>-10)
        {
            c--
        document.getElementById("count").textContent = c
        {
            if(c%2==0){
                document.getElementsByClassName("nt")[0].textContent = 'even'
            }
            else{
                document.getElementsByClassName("nt")[0].textContent = 'odd'
        
            }
        }
    
        }
        else
        {
            alert("cant cross")
        }
        
   }
   function reset()
   {
    document.getElementById("count").textContent = 0
   }
   
   
   

    
        
       
          
        
        
   
  
   
