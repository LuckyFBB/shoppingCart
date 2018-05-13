new Vue({
	el: "#app",
	data: {
		"totalMoney": 100,
		"checkAllFlag": false,
		"list": [{
			"bookId": "200001",
			"bookName": "目送",
			"bookPrice": 30,
			"bookQuantity": 1,
			"bookImg": "img/book-1.jpg"
		}, {
			"bookId": "200002",
			"bookName": "偷影子的人",
			"bookPrice": 32,
			"bookQuantity": 5,
			"bookImg": "img/book-2.jpg"
		}, {
			"bookId": "200001",
			"bookName": "追风筝的人",
			"bookPrice": 51,
			"bookQuantity": 2,
			"bookImg": "img/book-3.jpg"
		}, {
			"bookId": "200001",
			"bookName": "萤火虫小巷",
			"bookPrice": 20,
			"bookQuantity": 3,
			"bookImg": "img/book-4.jpg"
		}]
	},
	filters: {
		formatMoney: function(value) {
			return "￥ " + value.toFixed(2);
		},
		totalMoney: function(value, type) {
			return "￥ " + value.toFixed(2) + type;
		}
	},
	mounted: function() {

	},
	methods: {
		changeMoney: function(product, way) {
			if (way > 0) {
				product.bookQuantity++;
			} else {
				product.bookQuantity--;
				if (product.bookQuantity < 1)
					product.bookQuantity = 1;
			}
		},
		selectedProduct: function(product) {
			if (typeof product.checked == "undefined") {
				this.$set(product, "checked", true);
			} else {
				product.checked = !product.checked;
			}
		},
		checkAll: function(flag) {
			this.checkAllFlag = flag;
			var _this = this;
			_this.list.forEach(function(product, index) {
				if (typeof product.checked == "undefined") {
					_this.$set(product, "checked", _this.checkAllFlag);
				} else {
					product.checked = _this.checkAllFlag;
				}
			})
		}
	}
});
