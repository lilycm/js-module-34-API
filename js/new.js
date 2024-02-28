const loadPhonesData = async (searchText = 'iphone') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phonesData = data.data;
    // console.log(phonesData);

    showPhones(phonesData);
}

const showPhones = phones => {
    // console.log(phones);


    const showPhoneContainer = document.getElementById('show-phone-container');

    // clear phone container 
    showPhoneContainer.textContent = '';


    //show 12 phones
    phones = phones.slice(0, 12);


    phones.forEach(phone => {
        // console.log(phone);
        const phoneContainer = document.createElement('div');
        phoneContainer.innerHTML = `
        <div class="card bg-base-100 shadow-xl py-4">
            <figure><img src="${phone.image}"
                    alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="font-bold text-lg text-center">${phone.phone_name}</h2>
                <div class="card-actions justify-center">
                    <button class="btn bg-pink-400 text-white font-bold">Buy Now</button>
                </div>
            </div>
        </div>
        `
        showPhoneContainer.appendChild(phoneContainer);
    })
}

const handleSearchButton = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhonesData(searchText);
}

loadPhonesData();