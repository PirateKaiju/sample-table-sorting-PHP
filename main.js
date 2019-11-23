
/*let sampledata = [
    ["JJJJ", 100, 15],
    ["AAAA", 200, 13],
    ["BBBB", 90, 15]
];*/

//For this example, this is valid
let sampledata = []; 

function fetchUsersTable(){

    
    return fetch("get_table.php").then((response) => {
        //sampledata = JSON.parse(response);
        //response.json().then((data) => {
            //This is also a promise and will process the response data
           // sampledata = data;
            //console.log(sampledata);
        //});
        return response.json();

    });

    
}

function eraseTable(){
    document.getElementById("usertable").innerHTML = "";
}

function drawTable(data){

    let table = document.createElement("table");

    data.forEach(element => {
        let row = document.createElement("tr");
        element.forEach(value => {

            let cell = document.createElement("td");
            cell.innerText = value;

            row.appendChild(cell);

        });

        table.appendChild(row);
    });

    eraseTable();

    document.getElementById("usertable").appendChild(table);

}

function sortByName(data){
    data.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }

        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    })
    //document.getElementById("usertable").innerHTML = json.Parse(data);
    return data;
}

function sortByMoney(data){

    data.sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        }

        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    })

    return data;

}

window.onload = function(){
    //Hardcoded

    document.getElementById("sortname").onclick = function(){
        let smp = sortByName(sampledata);
        //alert(smp);
        drawTable(smp);
    }

    document.getElementById("sortmoney").onclick = function(){
        let smp = sortByMoney(sampledata);
        //alert(smp);
        drawTable(smp);
    }

    this.fetchUsersTable().then((result) => {
        //console.log(result);
        sampledata = result;
        drawTable(result);
    });
    //this.drawTable(sampledata);
    /*let promise = new this.Promise((resolve, reject) =>{
        
        fetchUsersTable();
        
        if(true){
            resolve("Ok");
        }

        reject("Error");

    }).then( function(result){

        console.log(sampledata);
    
        drawTable(sampledata);
    
    });*/
}