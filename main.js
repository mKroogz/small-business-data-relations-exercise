const container = document.querySelector(".container")

const empCardFactory = empData => {
    return `
    <article class="employee">
    <header class="employee__name">
        <h1>${empData.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${empData.department.name} department
    </section>
    <section class="employee__computer">
        Currently using a ${empData.computer.type}
    </section>
    </article>`
}

const getLinkedData = () => {
    return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
    .then(resp => resp.json())
}

const printToDOM = employees => {
    employees.forEach(emp => {
        const empCard = empCardFactory(emp)
        container.innerHTML += empCard;  
    })
}

getLinkedData().then(printToDOM)