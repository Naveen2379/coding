const data = [
    {
        name: "Menu 1",
        link: "link 1",
        subitems: [
            {
                name: "Menu 2",
                link: "link 2",
                subitems: [
                    {
                        name: "Menu 3",
                        link: "link 3",
                        subitems: [
                            {
                                name: "Menu 10",
                                link: "link 10"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Menu 4",
        link: "link 4",
        subitems: [
            {
                name: "Menu 5",
                link: "link 5"
            }
        ]
    },
    {
        name: "Menu 6",
        link: "link 6"
    },
    {
        name: "Menu 7",
        link: "link 7",
        subitems: [
            {
                name: "Menu 8",
                link: "link 8",
                subitems: [
                    {
                        name: "Menu 9",
                        link: "link 9"
                    }
                ]
            }
        ]
    },
]

const namesArr = [];
function itemsReceived(items) {
    items.forEach( (item) => {
        const itemName = item?.name
        const subItems = item.subitems
        if(Array.isArray(subItems)) {
            namesArr.push(itemName)
            itemsReceived(subItems)
        }
        else {
            namesArr.push(itemName)
            //itemsReceived(subItems)
        }
    })
}

itemsReceived(data)
console.log('namesArr ', namesArr)