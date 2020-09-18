let arrays=[
    {
        name:"abcd",
        age:15,
        city:"india",
        salary:15000,
    },
    {
        name:"efgh",
        age:25,
        city:"africa",
        salary:1400,
    },
    {
        name:"ijkl",
        age:45,
        city:"us",
        salary:15000,
    },
    {
        name:"mnop",
        age:65,
        city:"america",
        salary:23399,
    },
    {
        name:"ssss",
        age:78,
        city:"hjjj",
        salary:45666,
    },
     
    ];
    function display(superarray) {
        let tabledata = "";
      
        superarray.forEach(function (array, index) {
          let currentrow = `<tr>
          <td>${index + 1}</td>
          <td>${array.name}</td>
          <td>${array.age}</td>
          <td>${array.city}</td>
          <td>${array.salary}</td>
          <td>
          <button onclick='deletedetail(${index})'>delete</button>
          <button onclick='showModal(${index})'>update</button>
          </td>
          </tr>`;
      
          tabledata += currentrow;
        });
      
        document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
        //   document.getElementById("tdata").innerHTML = tabledata;
      }
      
      display(arrays);
      
      function adddetail(e) {
        e.preventDefault();
        let array = {};
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let city = document.getElementById("city").value;
        let salary = document.getElementById("salary").value;
        array.name = name;
        array.age = age;
        array.city = city;
        array.salary = salary;
      
        arrays.push(array);
      
        display(arrays);
      
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("city").value = "";
        document.getElementById("salary").value = "";
      }
      
      function searchByName() {
        let searchValue = document.getElementById("searchName").value;
      
        let newdata = arrays.filter(function (array) {
          return (
            array.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
          );
        });
    
        display(newdata);
      }
      function searchByCity() {
        let searchValue = document.getElementById("searchcity").value;
      
        let newdata = arrays.filter(function (array) {
          return (
            array.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
          );
        });
    
        display(newdata);
      }

      
      function deletedetail(index) {
        arrays.splice(index, 1);
        display(arrays);
      }
      
      let updateIndex;
      
      function copydetail(index) {
        updateIndex = index;
        let array = arrays[index];
      
        document.getElementById("upname").value = array.name;
        document.getElementById("upage").value = array.age;
        document.getElementById("upcity").value = array.city;
        document.getElementById("upsalary").value = array.salary;
      }
      
      function updatedetail(e) {
        e.preventDefault();
        let array = arrays[updateIndex];
        console.log(array);
        let name = document.getElementById("upname").value;
        let age = document.getElementById("upage").value;
        let city = document.getElementById("upcity").value;
        let salary = document.getElementById("upsalary").value;
        array.name = name;
        array.age = age;
        array.city = city;
        array.salary = salary;
        console.log(array);
      
        display(arrays);
      
        // code for hiding from anywhere
        let modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";
      }
      
      function showModal(index) {
        let modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "block";
      
        copydetail(index);
      }
      
      function hideModal(event) {
        if (event.target.className == "modal") {
          let modal = document.getElementsByClassName("modal")[0];
          modal.style.display = "none";
        }
      }