const phoneData = async (searchText = '13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    console.log(phones);
    displayPhones(phones, isShowAll);

}

const displayPhones = (phones, isShowAll) => {
    //step-one 
    const phoneContainer = document.getElementById('phone-container');

    //clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones

    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }
    console.log('is show all', isShowAll);


    //display only first 10 phones
    phones = phones.slice(0, 12);



    phones.forEach(phone => {
        // console.log(phone);

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
                    <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
    `
        //step-four append
        phoneContainer.appendChild(phoneCard);
    });

    //hide loading spiner

    loadingSpiner(false);

}

const handleShowDetail = async (id) => {
    // console.log(id);

    //load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data
    phoneDetails(phone);

}

const phoneDetails = (phone) => {
    console.log(phone);
    // show the modal
    show_details_modal.showModal();
}

const handleSearchButton = (isShowAll) => {
    loadingSpiner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    phoneData(searchText, isShowAll);
}

const loadingSpiner = (isLoading) => {
    const loadingContainer = document.getElementById('spiner-container');
    if (isLoading) {
        loadingContainer.classList.remove('hidden');
    }
    else {
        loadingContainer.classList.add('hidden');
    }
}


//handle show all button

const handleShowAll = () => {
    handleSearchButton(true);
}
phoneData();