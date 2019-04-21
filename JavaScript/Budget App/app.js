var budgetController = (function() {
	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var calculateTotal = function(type) {
		var sum = 0;
		data.allItems[type].forEach(function(current) {
			sum += current.value;
		});
		data.totals[type] = sum;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		},
		budget: 0,
		percentage: -1
	};

	return {
		addItem: function(type, des, val) {
			var newItem, ID;

			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else {
				ID = 0;
			}

			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			data.allItems[type].push(newItem);
			return newItem;
		},
		calculateBudget: function() {
			calculateTotal('inc');
			calculateTotal('exp');

			data.budget = data.totals.inc - data.totals.exp;

			if (data.totals.inc > 0) {
				data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
			} else {
				data.percentage = -1;
			}
		},
		getBudget: function() {
			return {
				budget: data.budget,
				totalInc: data.totals.inc,
				totalExp: data.totals.exp,
				percentage: data.percentage
			};
		}
	};
})();

var UIController = (function() {
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
		incomesContainer: '.income__list',
		expensesContainer: '.expenses__list',
		budgetLabel: '.budget__value',
		incomeLabel: '.budget__income--value',
		expensesLabel: '.budget__expenses--value',
		percentageLabel: '.budget__expenses--percentage'
	};
	
	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
			};
		},
		getDOMstrings: function() {
			return DOMstrings;
		},
		addListItem: function(obj, type) {
			var html, newHTML, element;

			if (type === 'inc') {
				element = DOMstrings.incomesContainer;
				html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			} else if (type === 'exp') {
				element = DOMstrings.expensesContainer;
				html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			}

			newHTML = html.replace('%description%', obj.description);
			newHTML = newHTML.replace('%value%', obj.value);
			newHTML = newHTML.replace('%id%', obj.id);
			document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
		},
		clearFields: function() {
			var fields;
			
			fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

			fieldsArr = Array.prototype.slice.call(fields);
			fieldsArr.forEach(function(current) {
				current.value = '';
			});

			fields[0].focus();
		},
		displayBudget: function(obj) {
			document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
			document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
			document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
			if (obj.percentage > 0) {
				document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
			} else {
				document.querySelector(DOMstrings.percentageLabel).textContent = '---';
			}
		}
	};
})();

var controller = (function(budgetCtrl, UICtrl) {
	var setupEventListeners = function() {
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event) {
			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};

	var updateBudget = function() {
		budgetCtrl.calculateBudget();
		var budget = budgetCtrl.getBudget();
		UICtrl.displayBudget(budget);
	}

	var ctrlAddItem = function() {
		var input, newItem;
		
		input = UICtrl.getInput();

		if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
			newItem = budgetCtrl.addItem(input.type, input.description, input.value);
	
			UICtrl.addListItem(newItem, input.type);
	
			UICtrl.clearFields();
	
			updateBudget();
		}
	};

	return {
		init: function() {
			setupEventListeners();
			UICtrl.displayBudget({
				budget: 0,
				totalInc: 0,
				totalExp: 0,
				percentage: 0
			});

		}
	};
})(budgetController, UIController);

controller.init();