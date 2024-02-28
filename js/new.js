const loadPhoneData = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = () => {

    const showPhoneContainer = document.getElementById('show-phone-container');

    phones.foreach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');

    })
}

loadPhoneData();