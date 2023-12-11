let employeeData=JSON.parse(localStorage.getItem('employeeData'))||[];

function submitForm(){
    const name=document.getElementById('name').value;
    const department=document.getElementById('department').value;
    const designation=document.getElementById('designation').value;
    const phonenumber=document.getElementById('phonenumber').value;
    const dob=document.getElementById('dob').value;
    const salary=document.getElementById('salary').value;
    const address=document.getElementById('address').value;
    
    const newEmployee={ name,department,designation,phonenumber,dob,salary,address };
    employeeData.push(newEmployee);

    document.getElementById('employeeForm').reset();

    updateTable();

    localStorage.setItem('employeeData',JSON.stringify(employeeData));
}

function updateTable(){
    const tableBody=document.querySelector('#employeeTable tbody');
    tableBody.innerHTML='';


    employeeData.forEach((employee) => {
        const row = tableBody.insertRow();

        for (const key in employee) {
            const cell=row.insertCell();
            cell.textContent=employee[key];
        }
    });
    document.getElementById('tableContainer').style.display = 'block';

}

function clearLocalStorage(){
    localStorage.clear();

    updateTable();
}
updateTable();