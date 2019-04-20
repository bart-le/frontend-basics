var budgetController = (function() {

})();

var UIController = (function() {
	return {
		getInput: function() {
			return {
				type: document.querySelector('.add__type').value,
				description: document.querySelector('.add__description').value,
				value: document.querySelector('.add__value').value
			};
		}
	};
})();

var controller = (function(budgetCtrl, UICtrl) {
	var ctrlAddItem = function() {
		var input = UICtrl.getInput();
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event) {
		if (event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();
		}
	});
})(budgetController, UIController);