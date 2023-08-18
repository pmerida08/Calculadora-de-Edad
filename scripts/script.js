const button = document.getElementById("submit");


button.addEventListener('click', function(){
    let ages = document.getElementById("lifetime");
    const dateBirth = new Date(document.getElementById("date").value);
    const now = new Date();

    const yearBirth = dateBirth.getFullYear();
    const monthBirth = dateBirth.getMonth() + 1;
    const dayBirth = dateBirth.getDate();


    const day = now.getDate() - dayBirth;
    const month = now.getMonth() - monthBirth + 1;
    const year = now.getFullYear() - yearBirth;

    
    ages.innerHTML = `You have ${year} years, ${month} months and ${day} days old`
})

