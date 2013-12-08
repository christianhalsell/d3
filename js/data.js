//Width and height
			var w = 500;
			var h = 100;
			var barPadding = 1;
			
			// var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
			// 				11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

			// BOOKLIST
			// 1. CROSS MY HEART (1)
			// 2. SYCAMORE ROW (6)
			// 3. TAKEDOWN TWENTY (2)
			// 4. KING AND MAXWELL (2)
			// 5. THE GOLDFINCH (6)
			// 6. DOCTOR SLEEP (10)
			// 7. THE FIRST PHONE CALL FROM HEAVEN (3)
			// 8. REMY (1)
			// 9. THE LONGEST RIDE (11)
			// 10. FOREVER US (1)
			// 11. DARK WITCH (5)
			// 12. ENDER'S GAME (20)
			// 13. DUST (3)
			// 14. THE HUSBAND'S SECRET(17)
			// 15. THE SUPREME MACARONI COMPANY (1)

			var Books = function(order, name, weeks) {
				this.order = order;
				this.name = name;
				this.weeks = weeks;
			}

			var book1 = new Books("a", "Cross My Heart", 1);
			var book2 = new Books("b", "Sycamore Row", 6);
			var book3 = new Books("c", "Takedown Twenty", 2);
			var book4 = new Books("d", "King and Maxwell", 2);
			var book5 = new Books("e", "The Goldfinch", 6);
			var book6 = new Books("f", "Doctor Sleep", 10);
			var book7 = new Books("g", "The First Phone Call From Heaven", 3);
			var book8 = new Books("h", "Remy", 1);
			var book9 = new Books("i", "The Longest Ride", 11);
			var book10 = new Books("j", "Forever Us", 1);
			var book11 = new Books("k", "Dark Witch", 5);
			var book12 = new Books("l", "Ender\'s Game", 20);
			var book13 = new Books("m", "Dust", 3);
			var book14 = new Books("n", "The Husband's Secret", 17);
			var book15 = new Books("o", "The Supreme Macaroni Company", 1);

			var dataset = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15];

			function populateArray() {
				for (var i = 0; i < dataset.length; i++) {
					console.log("\"" + dataset[i].name + "\" has been on the list for " + dataset[i].weeks + " week(s)");
				}
			};

			populateArray();

			
			//Create SVG element
			var svg = d3.select("#chart")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			svg.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
			   .attr("y", function(d) {
			   		return h - (d.weeks * 4);
			   })
			   .attr("width", w / dataset.length - barPadding)
			   .attr("height", function(d) {
			   		return d.weeks * 4;
			   })
			   .attr("fill", function(d) {
					return "rgb(0, 0, " + (d.weeks * 10) + ")";
			   });

			svg.selectAll("text")
				.data(dataset)
				.enter()
				.append("text")
				.text(function(d) {
						return d.weeks;
				})
				.attr("text-anchor", "middle")
				.attr("x", function(d, i) {
						return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
				})
				.attr("y", function(d) {
						return h - (d.weeks * 4) + 14 - 20;
				})
				.attr("font-family", "sans-serif")
				.attr("font-size", "11px")
				.attr("fill", "red");

			function titleDisplay() {
				for(var i = 0; i < dataset.length; i++) {
					console.log(dataset[i].name);
					$('#titles').append("<div>" + dataset[i].order + ") " + dataset[i].name + "</div>");
				};
			};

			titleDisplay();