const phoneData = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    console.log(phones);
    displayPhones(phones);

}

const displayPhones = phones => {
    //step-one 
    const phoneContainer = document.getElementById('phone-container');

    //clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones

    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length>12){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }


    //display only first 10 phones
    phones = phones.slice(0, 12);






    phones.forEach(phone => {
        console.log(phone)

        //step-two create a div
        const phoneCard = document.createElement('div');

        //step-three set innerHTML
        phoneCard.classList = `card bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
            <figure><img src="${phone.image}" alt="Phones" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
    `
        //step-four append
        phoneContainer.appendChild(phoneCard);
    });

}

const handleSearchButton = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    phoneData(searchText);
}

// phoneData()