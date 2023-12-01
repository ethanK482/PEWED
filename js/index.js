const selectE = document.querySelector("#form_select");
const priceE = document.querySelector('.form_price')
const formE = document.querySelector('#order_form')
const totalE = document.querySelector('.total_order')
selectE.onchange = ()=>{
    if(selectE.selectedIndex){
        switch(selectE.value){
            case 'muine':{
                priceE.innerHTML = "100$/Person"
                break;
            }
            case 'camau':{
                priceE.innerHTML = "150$/Person"
                break;
            }
            case 'vungtau':{
                priceE.innerHTML = "90$/Person"
                break;
            }

            case 'dalat':{
                priceE.innerHTML = "120$/Person"
                break;
            }
            case 'hotram':{
                priceE.innerHTML = "110$/Person"
                break;
            }
        }
    }else{
        priceE.innerHTML = ""
    }
}
formE.onsubmit = (event)=>{
    event.preventDefault();
    const formData = new FormData(formE)
    const order = Object.fromEntries(formData);

    switch(order.tours){
        case 'muine':{
           totalE.innerHTML = "Total amount:" + 100 * order.quantity 
            break;
        }
        case 'camau':{
           totalE.innerHTML = "Total amount:" + 150 * order.quantity 
            break;
        }
        case 'vungtau':{
           totalE.innerHTML = "Total amount:" + 90 * order.quantity 
            break;
        }

        case 'dalat':{
           totalE.innerHTML = "Total amount:" + 120 * order.quantity 
            break;
        }
        case 'hotram':{
           totalE.innerHTML = "Total amount:" + 110 * order.quantity 
            break;
        }
    }

}