function addition(){
    var value1 = [myI.value || myJ.value] 
        if (myI.value=="" || myJ.value==""){ 
          display.innerText = "Kindly Input a Value"
      } else {
        display.innerText = ""
      myTable.innerHTML ="";
          for (let i = 1; i<= Number(myI.value); i++) {
            add = `<tr class="border border-gray-700 hover:bg-orange-700">`
  
            for (let j = 1; j<= Number(myJ.value); j++) { 
              add += `<td class="border border-gray-700 hover:bg-orange-700">${j}+${i}=${j+i}</td>`
       }
            add += "</tr>"
            myTable.innerHTML += add
            console.log(addition())
      } 
    }
  }
      function subtraction(){
        var value1 = [myI.value || myJ.value] 
        if (myI.value=="" || myJ.value==""){ 
          display.innerText = "Kindly Input a Value"
      } else {
        display.innerText = ""
          myTable.innerHTML ="";
           for (let i = 1; i<= Number(myI.value); i++) {
            sub = `<tr class="border border-gray-700 hover:bg-orange-700 ">`
           for (let j = 1; j<=  Number(myJ.value); j++) {
            sub += `<td class="border border-gray-700 hover:bg-orange-700 ">${j}-${i}=${j-i}</td>`
           }
            sub += "</tr>"
            myTable.innerHTML += sub
            console.log(subtraction)
        }
        }
      }
  
       function multiplication(){
        var value1 = [myI.value || myJ.value] 
        if (myI.value=="" || myJ.value==""){ 
          display.innerText = "Kindly Input a Value"
      } else {
        display.innerText = ""
          myTable.innerHTML ="";
           for (var i = 1; i<= Number(myJ.value); i++) {
            mul = `<tr class="border border-gray-700 hover:bg-orange-700">`                                                  
            for (let j = 1; j <= Number(myI.value); j++) {  
             mul += `<td class="border border-gray-700 hover:bg-orange-700" >${j}*${i}=${j*i}</td>`
            } 
            `</tr>`
            myTable.innerHTML += mul
                 
          }
        }  
      }
        
       function division(){
        var value1 = [myI.value || myJ.value] 
        if (myI.value=="" || myJ.value==""){ 
          display.innerText = "Kindly Input a Value"
          alert("Kindly Input a Value")
      } else {
         display.innerText = ""
        myTable.innerHTML ="";
           for (var i = 1; i<= Number(myJ.value); i++) {
            div = `<tr class="border border-gray-700 hover:bg-orange-200">`
            for (let j = 0; j <= Number(myJ.value); j++) {
              div += `<td class="border border-gray-700 hover:bg-orange-700">${j}/${i}=${parseFloat(j/i).toFixed(2)}</td>`
            }
              `</tr>`
              myTable.innerHTML += div
        }
      }
    }