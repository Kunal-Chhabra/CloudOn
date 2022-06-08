const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function thisFileUpload()
{
	var x=document.getElementById('file').value;
	console.log(x);

	document.getElementById('file').click();
}


//drag drop
var input = document.getElementById( 'file' );
 var infoArea = document.getElementById( 'path' );

 input.addEventListener( 'change', showFileName );

 function showFileName( event ) { 

//   // the change event gives us the input it occurred in

   var input = event.srcElement; 

//   // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.

   var fileName = input.files[0].name; 

//   // use fileName however fits your app best, i.e. add it into a div

  infoArea.textContent = 'File name: ' + fileName;

 }


// Drag and Drop
var dropzone = document.getElementById("dropzone");
var listing = document.getElementById("path");

function scanAndLogFiles(item, container) {
  var elem = document.createElement("li");
  elem.innerHTML = item.name;
  container.appendChild(elem);

  if (item.isDirectory) {
    var directoryReader = item.createReader();
    var directoryContainer = document.createElement("ul");
    container.appendChild(directoryContainer);

    directoryReader.readEntries(function(entries) {
      entries.forEach(function(entry) {
        scanAndLogFiles(entry, directoryContainer);
      });
    });
  }
}

dropzone.addEventListener(
  "dragover",
  function(event) {
    event.preventDefault();
  },
  false
);

dropzone.addEventListener(
  "drop",
  function(event) {
    var items = event.dataTransfer.items;

    event.preventDefault();
    listing.innerHTML = "";

    for (var i = 0; i < items.length; i++) {
      var item = items[i].webkitGetAsEntry();

      if (item) {
        scanAndLogFiles(item, listing);
      }
    }
  },
  false
);

// Create  Folder
// function createFolder(){
// 	var inp=document.createElement('div');
// 	inp.innerHTML();
// }

// const html = document.documentElement;
// const body = document.body;
// import { constants } from './constants.js'
const constants = {
	
  }
  
  const form = document.getElementById("fo");
  console.log(form);
  
  function createFolder() {
	  var data=new Date();
	try
	{
	 fetch("http://localhost:57927/api/Upload", {
	   body: JSON.stringify({
		// "folderName": form.value,
		// "createdBy": 1,
		// "isDeleted": 0
		"fName":form.value,
		"createdBy": sessionStorage.getItem("id"),
		"createdAt": data.toISOString(),
		"isDeleted": null,
	  }),
	   method: 'POST',
	   headers: {
		'Content-Type': 'application/json'
	  },
	 }).then((folderCreateResponse) => {
		console.log(folderCreateResponse);
		 listFolders();
	 });
	}
	catch(err)
	{
	  console.log(err);
	}
  }
  
  function listFolders() {
	try
	{
	  var create = document.getElementById("mainn");
	  create.innerHTML = '';
	fetch("http://localhost:57927/api/Upload/"+sessionStorage.getItem("id"), {
	  method: 'GET'
	})
	.then(response => response.json())
	.then((folders) => {
	  console.log(folders);
	  folders.forEach(folder => {
		// debugger;
		var create = document.getElementById("mainn");

		var createChild=document.createElement("div");
  
	   
  
		createChild.classList.add("abc2");
  
		var div1 = document.createElement("div");
  
		div1.classList.add("abc");
  
	   
  
		// var img1 = document.createElement("img");
  
	   
  
		let con='';
  
		con += "<i class='bx bxs-folder-open'></i>";
  
		con += "<br/><p style='color:black'><b>";
  
		con += folder.fName+"<b><p>";
  
	   
  
  
  
		div1.innerHTML=con;
  
		var div2 = document.createElement("span");
  
		let con2='';
  
		con2+=`<button class='btn btn-success'  onclick="openfile(${folder.id})">Open folder</button>&nbsp;`;
  
		con2+=`<button class='btn btn-danger' onclick='deletefolder(${folder.id})' >Delete</button>`;
		div2.classList.add("btn123");
  
		div2.innerHTML=con2;
		// div.innerHTML = folder.fName;
  
	   createChild.appendChild(div1);
  
	   createChild.appendChild(div2);
  
	   create.append(createChild);
	  });
	})
	
	}
	catch(err)
	{
	  console.log(err);
	}
  }
  
  function onLoad() {
	listFolders();
  }
  
  onLoad();
  function openfile(folderid){
sessionStorage.setItem("folderid",folderid);
	window.location.href="file.html";
	
			}
			function deletefolder(){
			}
			function deletefolder(folder) {
                
				var raw = "";
				var requestOptions = {
				  method: 'DELETE',
				  body: raw,
				  redirect: 'follow'
				  
				  };
				  
				  let deleteurl = "http://localhost:57927/api/Upload/" + folder;
				  fetch(deleteurl,requestOptions)
				  .then(response=>response.text())
				  .then(result => console.log(result))
				  .catch(error => console.log('error', error));
				   location.reload();  
				  }
				  function logout(){
					  sessionStorage.clear();
					  window.location.href="index.html";
				  }



				  function search1() {
					try
					{
					  
					  var id=document.getElementById("search")
					  if(id.value=="")
					  {
						  location.reload();
					  }
					  else{
					  var create = document.getElementById("mainn");
					  create.innerHTML = '';
					fetch("http://localhost:57927/api/Upload/folder/"+sessionStorage.getItem("id")+"/"+id.value, {
					  method: 'GET'
					})
					.then(response => response.json())
					.then((folders) => {
					  console.log(folders);
					  folders.forEach(folder => {
						var create = document.getElementById("mainn");

						var createChild=document.createElement("div");
				  
					   
				  
						createChild.classList.add("abc2");
				  
						var div1 = document.createElement("div");
				  
						div1.classList.add("abc");
				  
					   
				  
						// var img1 = document.createElement("img");
				  
					   
				  
						let con='';
				  
						con += "<i class='bx bxs-folder-open'></i>";
				  
						con += "<br/><p style='color:black'><b>";
				  
						con += folder.fName+"<b><p>";
				  
					   
				  
				  
				  
						div1.innerHTML=con;
				  
						var div2 = document.createElement("span");
				  
						let con2='';
				  
						con2+=`<button class='btn btn-success'  onclick="openfile(${folder.id})">Open folder</button>&nbsp;`;
				  
						con2+=`<button class='btn btn-danger' onclick='deletefolder(${folder.id})' >Delete</button>`;
						div2.classList.add("btn123");
				  
						div2.innerHTML=con2;
						// div.innerHTML = folder.fName;
				  
					   createChild.appendChild(div1);
				  
					   createChild.appendChild(div2);
				  
					   create.append(createChild);
					});
					})
					
					}
				}
					catch(err)
					{
					  console.log(err);
					}
				}
				  









				  