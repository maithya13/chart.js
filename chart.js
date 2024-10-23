const ctx = document.getElementById('expenseByCategory').getContext('2d');
const expenseByCategory = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Food', 'Transport', 'Accommodation'],
        datasets: [{
            data: [500, 300, 400],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    }
});
