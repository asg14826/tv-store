$(() => {
    let tvStoers = [
        { id: 1, image: 'tv-1.jpeg', name: "alam", adress: 'menachem-begin-3', city: 'tlv', price: 3200, link: 'http://tinyurl.com/2c439msk', rating: 3 },
        { id: 2, image: 'tv-2.jpeg', name: "bug", adress: 'sokolov-3', city: 'tlv', price: 3000, link: 'http://tinyurl.com/2c439msk', rating: 4 },
        { id: 3, image: 'tv-3.jpeg', name: "machsanei chshmal", adress: 'hayarden-3', city: 'tlv', price: 3340, link: 'http://tinyurl.com/2c439msk', rating: 1 },
        { id: 4, image: 'tv-4.jpeg', name: "shekem-electric", adress: 'shderit-yerushalim-3', city: 'tlv', price: 3100, link: 'http://tinyurl.com/2c439msk', rating: 5 },
        { id: 5, image: 'tv-5.jpeg', name: "refaeli", adress: 'hertel-3', city: 'tlv', price: 3250, link: 'http://tinyurl.com/2c439msk', rating: 2 }
    ]

    let averagePrice = 0
    let total = 0

    //making a array of prices to work on this array sort method and to find the cheapest tv
    const pricesArr = []

    //adding new trs 
    for (let i = 0; i < tvStoers.length; i++) {
        let store = $(`<tr  id="row${i}"><td>${tvStoers[i].id}</td><td class="text-center"><img style="height: 100px;width: 100px;"src="tv-${i}.jpeg"></img></td><td id="storeName${i}" class="text-center">${tvStoers[i].name}</td><td class="text-center">${tvStoers[i].adress}</td><td class="text-center">${tvStoers[i].city}</td>
        <td id="price${i}" class="text-center">${tvStoers[i].price}</td><td class="text-center"><a href=${tvStoers[i].link} target="_blank">link</a></td>
        <td>${tvStoers[i].rating}/5</td><td><button class="btn btn-danger" id="btnDel${i}">delete</button><button class="btn btn-primary" id="btnBuy${i}">buy</button></td></tr>`)
        $('#tableBody').append(store)

        //coloring the rows accordiing to the ratings
        switch (tvStoers[i].rating) {
            case 1: $(`#row${i}`).addClass('table-danger')
                break;
            case 4:
            case 5: $(`#row${i}`).addClass('table-primary')

        }

        //adding functionality  to the delete btn 
        $(`#btnDel${i}`).click(function (e){
            $(`#row${i}`).toggle();
        })

        //adding functionality  to the buy btn 
        $(`#btnBuy${i}`).click(function (e){
            window.location.href = 'index1.html'
        })

        total += tvStoers[i].price
        averagePrice = total / tvStoers.length
        //creating the price arr
        pricesArr.push(tvStoers[i].price)

    }

    console.log(`${total} is the total of all tvs`);
    console.log(`${averagePrice} is the avg price`);

    //a function that sorts the prices of priceArr array 
    function sortThePrice(arr) {
        return arr.sort((a, b) => a - b)
    }

    //keeping in a variable the cheapest tv
    let cheapestTv = sortThePrice(pricesArr)[0];

    //finding the best deal

    function findTheBestDeal(arr) {
        for (let index = 0; index < arr.length; index++) {
            if(arr[index].price== cheapestTv){
                if(arr[index].rating >= 4){
                    return `${arr[index].id}  is the best deal`
                }
                else{
                    return "the cheapest one does not have a good rate"
                }
            }

        }
    }
    //the best deal
    console.log(findTheBestDeal(tvStoers));

})