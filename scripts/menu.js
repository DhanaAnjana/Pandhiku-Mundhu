const VegDishes = [
    { name: "Sambar", image: "images/veg/sambar.jpg", description: "A hearty, tangy lentil stew infused with aromatic spices and vegetables, best enjoyed with steaming hot rice." },
    { name: "Rasam", image: "images/veg/rasam.jpg", description: "A soul-soothing, peppery broth bursting with the essence of tamarind, garlic, and Indian spices." },
    { name: "Kootu", image: "images/veg/kootu.jpg", description: "A comforting coconut-infused vegetable and lentil curry, subtly spiced and packed with nutrition." },
    { name: "Avial", image: "images/veg/avial.jpg", description: "A creamy, coconut-laden medley of mixed vegetables, flavored with yogurt and curry leaves." },
    { name: "Poriyal", image: "images/veg/poriyal.jpg", description: "Stir-fried veggies seasoned with mustard seeds, urad dal, and fresh coconut shavings." },
    { name: "Vatha Kuzhambu", image: "images/veg/vatha_kuzhambu.jpg", description: "A deep, smoky tamarind-based gravy with sun-dried berries (sundakkai) that tantalizes the taste buds." },
    { name: "Mor Kuzhambu", image: "images/veg/mor_kuzhambu.jpg", description: "A silky buttermilk-based curry with fried okra or ash gourd, light yet bursting with flavor." },
    { name: "Paruppu Urundai Kuzhambu", image: "images/veg/paruppu_urundai_kuzhambu.jpg", description: "Soft lentil dumplings simmered in a luscious, spiced tamarind gravy." },
    { name: "Kara Kuzhambu", image: "images/veg/kara_kuzhambu.jpg", description: "A rich, spicy tamarind curry with roasted spices, best paired with hot rice and appalam." },
    { name: "Puli Pongal", image: "images/veg/puli_pongal.jpg", description: "A tangy, spicy tamarind rice dish infused with the goodness of sesame oil and fried chilies." },
    { name: "Thengai Sadam", image: "images/veg/thengai_sadam.jpg", description: "Fragrant coconut rice, mildly spiced, with crunchy cashews and curry leaves." },
    { name: "Lemon Rice", image: "images/veg/lemon_rice.jpg", description: "Zesty rice dish with a punch of fresh lemon juice, green chilies, and mustard seeds." },
    { name: "Podi Sadam", image: "images/veg/podi_sadam.jpg", description: "Rice mixed with a coarse, spicy lentil powder, drizzled with ghee for the ultimate comfort food." },
    { name: "Thakkali Sadam", image: "images/veg/thakkali_sadam.jpg", description: "A spicy, tangy tomato rice dish cooked with whole spices and curry leaves." },
    { name: "Puliyodarai", image: "images/veg/puliyodarai.jpg", description: "Tamarind rice packed with nutty, spicy, and tangy flavors that explode in your mouth." },
    { name: "Curd Rice", image: "images/veg/curd_rice.jpg", description: "The ultimate cooling comfort food, creamy curd mixed with rice and tempered with mustard and ginger." },
    { name: "Kuzhi Paniyaram", image: "images/veg/kuzhi_paniyaram.jpg", description: "Crisp on the outside, soft on the inside—these fermented rice-lentil dumplings are a must-try!" },
    { name: "Medu Vada", image: "images/veg/medu_vada.jpg", description: "Golden, crispy lentil doughnuts with a fluffy interior, best dipped in coconut chutney." },
    { name: "Masala Dosa", image: "images/veg/masala_dosa.jpg", description: "A crispy, golden rice crepe filled with spiced potato masala, served with chutneys and sambar." },
    { name: "Ragi Kali", image: "images/veg/ragi_kali.jpg", description: "A nutritious, earthy finger millet dumpling served with spicy fish curry or ghee and jaggery." },
    { name: "Kothu Parotta (Veg)", image: "images/veg/kothu_parotta.jpg", description: "Flaky parotta shredded and stir-fried with vegetables and aromatic spices." },
    { name: "Vazhaipoo Vadai", image: "images/veg/vazhaipoo_vadai.jpg", description: "Banana blossom fritters, crunchy on the outside and packed with unique floral flavors." },
    { name: "Sundal", image: "images/veg/sundal.jpg", description: "A protein-rich snack made of tempered chickpeas laced with coconut." },
    { name: "Paasi Paruppu Payasam", image: "images/veg/paasi_paruppu_payasam.jpg", description: "A divine dessert of moong dal, jaggery, and coconut milk, slow-cooked to perfection." },
    { name: "Adhirasam", image: "images/veg/adhirasam.jpg", description: "A deep-fried, jaggery-glazed rice cake with a crispy exterior and a chewy, flavorful center." },
    {name: "Thavala Adai",image: "images/veg/thavala_adai.jpg", description: "A crispy and flavorful Tamil Nadu-style lentil pancake made with rice, toor dal, and spices."},
    {name: "Kothavarangai Poriyal", image: "images/veg/kothavarangai_poriyal.jpg", description: "A healthy stir-fry made with cluster beans, grated coconut, and tempered spices, served as a side dish."},
    {name: "Pidi Kozhukattai", image: "images/veg/pidi_kozhukattai.jpg", description: "Soft, steamed dumplings made with broken rice and spiced with mustard seeds, coconut, and curry leaves."}
];

const nonVegDishes = [
    { name: "Chettinad Chicken Curry", image: "images/nveg/chettinad_chicken_curry.jpg", description: "Fiery, peppery, and deeply aromatic—this rich chicken curry is a Tamil Nadu icon." },
    { name: "Chicken Chukka", image: "images/nveg/chicken_chukka.jpg", description: "Slow-roasted, spicy chicken fry coated in freshly ground masala and ghee." },
    { name: "Mutton Kuzhambu", image: "images/nveg/mutton_kuzhambu.jpg", description: "A robust mutton curry simmered in an intense blend of spices and coconut." },
    { name: "Nattu Kozhi Rasam", image: "images/nveg/nattu_kozhi_rasam.jpg", description: "Country chicken soup with black pepper, garlic, and herbs—a medicinal elixir!" },
    { name: "Kozhi Varuval", image: "images/nveg/kozhi_varuval.jpg", description: "Deep-fried, spice-marinated chicken with a crispy, golden crust and juicy inside." },
    { name: "Mutton Chukka", image: "images/nveg/mutton_chukka.jpg", description: "Tender mutton chunks stir-fried with fiery spices, shallots, and curry leaves." },
    { name: "Thalapakatti Biryani", image: "images/nveg/thalapakatti_biryani.jpg", description: "A legendary Dindigul-style biryani made with short-grain seeraga samba rice and exotic spices." },
    { name: "Ambur Biryani", image: "images/nveg/ambur_biryani.jpg", description: "A fragrant mutton biryani known for its mild yet deeply flavorful aroma." },
    { name: "Kari Dosai", image: "images/nveg/kari_dosai.jpg", description: "A meaty delight—a thick dosa layered with minced mutton masala and egg." },
    { name: "Madurai Bun Parotta with Salna", image: "images/nveg/bun_parotta_salna.jpg", description: "Flaky, golden parotta paired with a rich, spicy meat gravy." },
    { name: "Kothu Parotta (Chicken)", image: "images/nveg/kothu_parotta_chicken.jpg", description: "A street-food favorite—torn-up parotta scrambled with egg, chicken, and masala." },
    { name: "Era Varuval", image: "images/nveg/era_varuval.jpg", description: "Prawns marinated in a fiery spice mix and pan-fried to crisp perfection." },
    { name: "Meen Kuzhambu", image: "images/nveg/meen_kuzhambu.jpg", description: "A tangy, spicy fish curry made with tamarind and homemade masala paste." },
    { name: "Vanjaram Meen Varuval", image: "images/nveg/vanjaram_meen_varuval.jpg", description: "Kingfish steaks coated in masala and shallow-fried until crispy." },
    { name: "Nandu Rasam", image: "images/nveg/nandu_rasam.jpg", description: "A peppery crab soup loaded with bold flavors and medicinal spices." },
    { name: "Aattu Kaal Soup", image: "images/nveg/attu_kaal_soup.jpg", description: "A hearty, collagen-rich goat trotters soup with warming spices." },
    { name: "Meen Puttu", image: "images/nveg/meen_puttu.jpg", description: "Shredded fish stir-fried with coconut, chilies, and curry leaves." },
    { name: "Kaadai Fry", image: "images/nveg/kaadai_fry.jpg", description: "Deep-fried quail coated in a fiery, tangy spice rub." },
    { name: "Egg Kalakki", image: "images/nveg/egg_kalakki.jpg", description: "A soft, runny scrambled egg dish seasoned with black pepper and served hot." },
    { name: "Egg Kothu Parotta", image: "images/nveg/egg_kothu_parotta.jpg", description: "Scrambled eggs mixed with chopped parotta and a punchy masala blend." },
    { name: "Duck Roast", image: "images/nveg/duck_roast.jpg", description: "Slow-cooked, spice-rubbed duck with a crispy, caramelized skin." },
    { name: "Mutton Brain Fry", image: "images/nveg/mutton_brain_fry.jpg", description: "A creamy, rich dish where goat brain is delicately spiced and pan-fried." },
    { name: "Meen Pollichathu", image: "images/nveg/meen_pollichathu.jpg", description: "Banana leaf-wrapped, spice-marinated fish, grilled to smoky perfection." },
    { name: "Pichu Potta Kozhi", image: "images/nveg/pichu_potta_kozhi.jpg", description: "Shredded country chicken stir-fried with village-style masalas and coconut oil." },
    { name: "Mutton Kola Urundai", image: "images/nveg/mutton_kola_urundai.jpg", description: "Juicy, deep-fried mutton meatballs that explode with traditional Chettinad spices." },
    {name: "Kozhi Idicha Varuval", image: "images/nveg/kozhi_idicha_varuval.jpg", description: "A spicy, crushed chicken fry infused with freshly pounded masalas, cooked to perfection for bold flavors."},
    {name: "Sura Puttu", image: "images/nveg/sura_puttu.jpg", description: "A soft, flaky shark fish dish cooked with onions, green chilies, and coconut, a signature coastal delicacy."},
    {name: "Era Thokku", image: "images/nveg/era_thokku.jpg", description: "A rich prawn masala cooked in a thick onion-tomato gravy, infused with curry leaves and aromatic spices."}
];

document.getElementById("vegBtn").addEventListener("click", () => {
    displayDishes(VegDishes);
    setActiveButton("vegBtn");
});

document.getElementById("nonVegBtn").addEventListener("click", () => {
    displayDishes(nonVegDishes);
    setActiveButton("nonVegBtn");
});

function setActiveButton(activeId) {
    document.getElementById("vegBtn").classList.remove("active");
    document.getElementById("nonVegBtn").classList.remove("active");
    
    document.getElementById(activeId).classList.add("active");
}

function displayDishes(dishes) {
    const dishContainer = document.getElementById("dishContainer");
    dishContainer.innerHTML = ""; // Clear previous items
    dishes.forEach(dish => {
        const dishCard = document.createElement("div");
        dishCard.classList.add("dish-card");

        dishCard.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" class="dish-image">
            <div class="dish-info">
                <div class="dish-title">${dish.name}</div>
                <div class="dish-description">${dish.description}</div>
            </div>
        `;
        
        dishContainer.appendChild(dishCard);
    });
}

displayDishes(vegDishes);
setActiveButton("vegBtn");