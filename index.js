const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Loan Calculat!');
});

app.post('/api/loan/calculate', (req, res) => {
    const { startDate, endDate, firstPaymentDate, loanAmount, interestRate } = req.body;

    // Validar dados recebidos
    if (!startDate || !endDate || !firstPaymentDate || !loanAmount || !interestRate) {
        return res.status(400).send('Todos os campos são obrigatórios.');
    }
	
    // Implementar a lógica de cálculo aqui
    const result = calculateLoan(startDate, endDate, firstPaymentDate, loanAmount, interestRate);

    res.json(result);
});

const calculateLoan = (startDate, endDate, firstPaymentDate, loanAmount, interestRate) => {
    // Implementar a lógica baseada na planilha "Calculadora_Emprestimos.xlsx"
    // Por exemplo, cálculos de parcelas, juros, etc.
    return {
        totalAmount: loanAmount, // Este é apenas um exemplo
        interestPaid: loanAmount * (interestRate / 100) // Exemplo de cálculo de juros
    };
};

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


