let tablebody = document.getElementById("tBody");

async function Func(){ 
    let url = "https://poloniex.com/public?command=returnCurrencies";
let response = await fetch(url);
let val = await response.json();
    let keys = Object.keys(val);
    
    let object = {
        id : "",
        shortName: "",
        name : "",
        humanType : "",
        currencyType : "",
        txFee : "",
        minConf : ""
    }
    
        for(let i = 0; i < keys.length; i++){
            object.id = i;
            object.shortName = keys[i];
            object.name = val[keys[i]].name;
            object.humanType = val[keys[i]].humanType;
            object.currencyType = val[keys[i]].currencyType;
            object.txFee = parseFloat(val[keys[i]].txFee).toFixed(4);
            object.minConf = val[keys[i]].minConf;
    
        let tr = document.createElement("tr");
        tablebody.appendChild(tr);
    
        let td1 = document.createElement("td");
        td1.innerHTML = object.id;
        tr.appendChild(td1);
    
        let td2 = document.createElement("td");
        td2.innerHTML = object.shortName;
        tr.appendChild(td2);
    
        let td3 = document.createElement("td");
        td3.classList.add("name");
        td3.innerHTML = object.name;
        tr.appendChild(td3);
    
        let td4 = document.createElement("td");
        td4.innerHTML = object.humanType;
        tr.appendChild(td4);
    
        let td5 = document.createElement("td");
        td5.innerHTML = object.currencyType;
        tr.appendChild(td5);
    
        let td6 = document.createElement("td");
        td6.innerHTML = object.txFee;
        tr.appendChild(td6);
    
        let td7 = document.createElement("td");
        td7.innerHTML = object.minConf;
        tr.appendChild(td7);
    
        let td8 = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerHTML="Delete";
        btn.classList.add("delete");
        btn.addEventListener("click", function Delete() {
            let row = this.parentNode.parentNode;
            row.parentNode.removeChild(row);
            });
        td8.appendChild(btn);
        tr.appendChild(td8);

    };
}
Func();

$(function(){
    $("#search").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $("#tBody tr").filter(function() {
          $(this).toggle($(this).children('.name').text().toLowerCase().indexOf(value) > -1);
          console.log($(this).text());
        });
      });
  });