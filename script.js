let idNum = 0
let expenseList = []

function clearTable() {
    const container = document.getElementById("container")
    container.innerHTML = null
}

clearTable()

function handleExpenses() {
    const expenseName = document.getElementById("name").value
    const expenseAmount = document.getElementById("amount").value
    const expense = document.getElementById("expense").value


    if (expenseAmount < 1 || expenseName === '') {
        alert("Missing Name or Expense amount is not above $1")
    } else {
        idNum = idNum + 1

        const currentExpense = {
            id: idNum,
            name: expenseName,
            amount: expenseAmount,
            expense: expense
        }

        expenseList.push(currentExpense)
        createExpenseListRow(currentExpense)
        displayTotal()
    }
}

function createExpenseListRow(currentExpense) {
    const container = document.getElementById("container")
    container.innerHTML += `
                <div class="table-row" id="${currentExpense.id}">
                    <div class="nameCol baseCol" id="displayExpenseName">${currentExpense.name}</div>
                    <div class="amountCol baseCol" id="displayExpenseAmount">$${Number(currentExpense.amount)}</div>
                    <div class="deleteCol baseCol"><input class="deleteBtn" onclick="deleteRow(${currentExpense.id})" type="button" value="delete"></div>
                </div>
    `
}

function deleteRow(idNum) {
    expenseList = expenseList.filter(expense => expense.id !== idNum)

    const row = document.getElementById(`${idNum}`)
    if (row) {
        row.remove()
    }
    
    displayTotal()
}

function displayTotal() {
    const totalAmount = expenseList.reduce((sum, expense) => {
        return sum + Number(expense.amount);
    }, 0);

    document.querySelectorAll(".total").forEach(e => {
        e.innerText = `$${totalAmount}`
    })
}