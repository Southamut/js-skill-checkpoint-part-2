// เริ่มเขียนโค้ดตรงนี้
function getUsers() { 
    const Jsonplaceholder = fetch("https://jsonplaceholder.typicode.com/users")
    return Jsonplaceholder
}

async function displayUser() {
    try {
        const getData = await getUsers()
        const toDisplay = await getData.json()
        const result = toDisplay.map((data) => data.name).filter((data) => data.length > 17)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

displayUser()
