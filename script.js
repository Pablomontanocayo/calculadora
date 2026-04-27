document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator-form');
    const resultContainer = document.getElementById('result-container');
    
    const totalCostsDisplay = document.getElementById('total-costs-display');
    const finalPriceDisplay = document.getElementById('final-price-display');
    const netProfitDisplay = document.getElementById('net-profit-display');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values
        const productCost = parseFloat(document.getElementById('product-cost').value) || 0;
        const shippingCost = parseFloat(document.getElementById('shipping-cost').value) || 0;
        const otherCosts = parseFloat(document.getElementById('other-costs').value) || 0;
        const profitMargin = parseFloat(document.getElementById('profit-margin').value) || 0;

        // Calculate
        const totalCosts = productCost + shippingCost + otherCosts;
        
        // Markup over costs
        const markupPrice = totalCosts * (1 + (profitMargin / 100));
        const netProfit = markupPrice - totalCosts;

        // Format to currency (Neutral)
        const formatCurrency = (amount) => {
            return '$ ' + amount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        // Update UI
        totalCostsDisplay.textContent = formatCurrency(totalCosts);
        finalPriceDisplay.textContent = formatCurrency(markupPrice);
        netProfitDisplay.textContent = formatCurrency(netProfit);

        // Show results
        resultContainer.classList.remove('hidden');
        // Small delay to trigger CSS transition
        setTimeout(() => {
            resultContainer.classList.add('show');
        }, 10);
    });
});


