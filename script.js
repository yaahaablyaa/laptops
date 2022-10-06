let laptops = [
    {
        brand: 'Samsung',
        proc: 'Core-i5',
        asccesM: 8,
        color: 'Gray',
        screen: 'FullHD',
        memory: 1000
    },
    {
        brand: 'Acer',
        proc: 'Core-i9',
        asccesM: 16,
        color: 'Black',
        screen: 'HD',
        memory: 500
    },
    {
        brand: 'Apple',
        proc: 'M1 Ultra',
        asccesM: 16,
        color: 'Gray',
        screen: 'Retina',
        memory: 1000
    },
    {
        brand: 'asus',
        proc: 'Core-i7',
        asccesM: 16,
        color: 'Blue',
        screen: 'FullHD',
        memory: 1000
    },
    {
        brand: 'Lenovo',
        proc: 'AMD Ryzen-5',
        asccesM: 32,
        color: 'black',
        screen: '2K',
        memory: 1000
    },
    {
        brand: 'Samsung',
        proc: 'Core-i5',
        asccesM: 16,
        color: 'Gray',
        screen: 'HD',
        memory: 1000
    },
    {
        brand: 'Acer',
        proc: 'Core-i9',
        asccesM: 32,
        color: 'Black',
        screen: 'HD',
        memory: 500
    },
    {
        brand: 'Apple',
        proc: 'M1 MAX',
        asccesM: 16,
        color: 'Midnight Blue',
        screen: 'Retina 4K',
        memory: 1000
    },
    {
        brand: 'Asus',
        proc: 'Core-i7',
        asccesM: 16,
        color: 'Pink',
        screen: 'fhd',
        memory: 1000
    },
    {
        brand: 'Lenovo',
        proc: 'Core-i7',
        asccesM: 32,
        color: 'Red',
        screen: 'FullHD',
        memory: 1000
    }
]

let ask = {
    brand: prompt('brand').trim(),
    proc: prompt('proc').trim(),
    asccesM: prompt('asccesM').trim(),
    color: prompt('color').trim(),
    screen: prompt('screen').trim(),
    memory: prompt('memory').trim()
}

let find = laptops.filter(item => ask.brand.toLowerCase() === item.brand.toLowerCase())
console.log(find);