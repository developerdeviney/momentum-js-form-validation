console.log('Add validation!');

//Show total cost:
//Include number of days and rate per day
    //eventListner
    //Use total id in last <div></div>
    //grab value of input id "#days"
   
    const btn = document.querySelector('#submit-button')
    const entireForm = document.querySelector('#parking-form')
    const weekdayRate = 5
    const weekendRate = 7
    const tax = 1.06
    
    entireForm.addEventListener('submit', showTotalCost) 
    
    function showTotalCost (event) {
        event.preventDefault()

        const totalCostEl = document.querySelector('#total')
        let msg = document.createElement('p');
        let numDays = document.querySelector('#days').value
        let totalCost = "$" + (numDays * weekdayRate) * tax
        
        console.log(totalCost)
        msg.innerText = totalCost 
        totalCostEl.appendChild(msg)
    }
