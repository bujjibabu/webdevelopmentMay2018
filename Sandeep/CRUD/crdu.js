var UserObj = new Array();
var id = UserObj.length + 1;
var editDetails =  false;
var User = {
    SNo: '',
    Name: '',
    Address: '',
    PhoneNumber: ''
  };

function view(clicked_id) {
  document.getElementById('modalName').innerHTML = "Name: " + UserObj[clicked_id - 1].Name;
  document.getElementById('modalAddress').innerHTML = "Address: " + UserObj[clicked_id - 1].Address;
  document.getElementById('modalPhone').innerHTML = "Phone Number: " + UserObj[clicked_id - 1].PhoneNumber;
}

function Update(clicked_id) {
  editDetails = false;
  var FN = document.getElementById('firstName').value;
  var LN = document.getElementById('lastName').value;
  var Name = FN + " " + LN;

  UserObj[clicked_id - 1].Name = Name;
  UserObj[clicked_id - 1].PhoneNumber = document.getElementById('phoneNumber').value;
  UserObj[clicked_id - 1].Address = document.getElementById('address').value;


  document.getElementById("results").rows[clicked_id - 1].cells[1].innerText = Name;
  document.getElementById("results").rows[clicked_id - 1].cells[2].innerText = document.getElementById('phoneNumber').value;
  document.getElementById("results").rows[clicked_id - 1].cells[3].innerText = document.getElementById('address').value;
  document.getElementById(clicked_id).setAttribute("id", "userButton");
  document.getElementById('userButton').innerHTML = "ADD USER";
  document.getElementById('userButton').setAttribute("onClick", "userInputDetails()");

}

function edit(clicked_id) {
  editDetails = true;
  document.getElementById('firstName').value = UserObj[clicked_id - 1].Name.split(" ")[0];
  document.getElementById('lastName').value = UserObj[clicked_id - 1].Name.split(" ")[1];
  document.getElementById('address').value = UserObj[clicked_id - 1].Address;
  document.getElementById('phoneNumber').value = UserObj[clicked_id - 1].PhoneNumber;
  document.getElementById('userButton').innerHTML = "UPDATE";
  document.getElementById('userButton').setAttribute("onClick", "Update(this.id);");
  document.getElementById('userButton').setAttribute("id", clicked_id);
}

function del(clicked_id) {
  document.getElementById("results").deleteRow(clicked_id - 1);
  var index = clicked_id - 1;
  if (index !== -1) {
    UserObj.splice(index, 1);
    for (var i = index; i < UserObj.length; i++) {
      UserObj[i].SNo = UserObj[i].SNo - 1;
      document.getElementById("results").rows[i].cells.item(0).innerHTML = UserObj[i].SNo + 1;
      document.getElementById("results").rows[i].cells.item(4).setAttribute("id", UserObj[i].SNo + 1);
      document.getElementById("results").rows[i].cells.item(5).setAttribute("id", UserObj[i].SNo + 1);
      document.getElementById("results").rows[i].cells.item(6).setAttribute("id", UserObj[i].SNo + 1);
    }
  }
}

function userInputDetails() {
  var FN = document.getElementById('firstName').value;
  var LN = document.getElementById('lastName').value;
  var address =  document.getElementById('address').value;
  var PhoneNumber =  document.getElementById('PhoneNumber').value;
  var Name = FN + " " + LN;
  user.SNo = UserObj.length;
  user.Name = Name;
  user.Address = address;
  user.PhoneNumber = PhoneNumber;
 /* User = {
    SNo: UserObj.length,
    Name: Name,
    Address: document.getElementById('address').value,
    PhoneNumber: document.getElementById('phoneNumber').value
  }*/
  UserObj.unshift(User);


  var table = document.getElementById("results");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);

  var rowId = UserObj.length;
  cell1.innerHTML = UserObj.length;
  cell2.innerHTML = UserObj[UserObj.length - 1].Name;
  cell3.innerHTML = UserObj[UserObj.length - 1].PhoneNumber;
  cell4.innerHTML = UserObj[UserObj.length - 1].Address;

  cell5.setAttribute("class", "glyphicon glyphicon-eye-open");
  cell5.setAttribute("onClick", "view(this.id);")
  cell5.setAttribute("data-target", "#myModal")
  cell5.setAttribute("data-toggle", "modal")
  cell5.setAttribute("id", rowId);

  cell6.setAttribute("class", "glyphicon glyphicon-pencil");
  cell6.setAttribute("onClick", "edit(this.id);")
  cell6.setAttribute("id", rowId);

  cell7.setAttribute("class", "glyphicon glyphicon-trash");
  cell7.setAttribute("onClick", "del(this.id);")
  cell7.setAttribute("id", rowId);


  row.setAttribute("id", rowId);
}