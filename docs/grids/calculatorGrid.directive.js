"use strict";

angular.module("grids").directive("dhCalculatorGrid", ["$document", function ($document) {

	return {

		restrict: "E",
		templateUrl: "grids/calculatorGrid.template.html",
		link: function link(scope, element, attr) {

			var startX = 0;
			var startY = 0;
			var posX = 0;
			var posY = 0;

			var board = element.find("dh-board-grid");

			var mousemove = function mousemove(event) {

				posY = event.pageY - startY;
				posX = event.pageX - startX;

				element.css({

					top: posY + "px",
					left: posX + "px"

				});
			};

			var mouseup = function mouseup() {

				$document.off("mousemove", mousemove);
				$document.off("mouseup", mouseup);
			};

			board.css({ cursor: "pointer" });

			element.css({

				/**
     * Must make the position of the element relative for the
     * resizing to occur. It is a direct style declaration on
     * the DOM element, not through a class.
     */
				position: "relative"

			});

			board.on("mousedown", function (event) {

				event.preventDefault();

				startX = event.pageX - posX;
				startY = event.pageY - posY;

				$document.on("mousemove", mousemove);
				$document.on("mouseup", mouseup);
			});
		}
	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWRzL2NhbGN1bGF0b3JHcmlkLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwiJGRvY3VtZW50IiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZVVybCIsImxpbmsiLCJzY29wZSIsImVsZW1lbnQiLCJhdHRyIiwic3RhcnRYIiwic3RhcnRZIiwicG9zWCIsInBvc1kiLCJib2FyZCIsImZpbmQiLCJtb3VzZW1vdmUiLCJldmVudCIsInBhZ2VZIiwicGFnZVgiLCJjc3MiLCJ0b3AiLCJsZWZ0IiwibW91c2V1cCIsIm9mZiIsImN1cnNvciIsInBvc2l0aW9uIiwib24iLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVFDLE1BQVIsQ0FBZSxPQUFmLEVBQ0VDLFNBREYsQ0FDWSxrQkFEWixFQUNnQyxDQUFDLFdBQUQsRUFBYyxVQUFVQyxTQUFWLEVBQXFCOztBQUVqRSxRQUFPOztBQUVOQyxZQUFVLEdBRko7QUFHTkMsZUFBYSxvQ0FIUDtBQUlOQyxNQUpNLGdCQUlBQyxLQUpBLEVBSU9DLE9BSlAsRUFJZ0JDLElBSmhCLEVBSXNCOztBQUUzQixPQUFJQyxTQUFTLENBQWI7QUFDQSxPQUFJQyxTQUFTLENBQWI7QUFDQSxPQUFJQyxPQUFPLENBQVg7QUFDQSxPQUFJQyxPQUFPLENBQVg7O0FBRUEsT0FBTUMsUUFBUU4sUUFBUU8sSUFBUixDQUFhLGVBQWIsQ0FBZDs7QUFFQSxPQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBVUMsS0FBVixFQUFpQjs7QUFFbENKLFdBQU9JLE1BQU1DLEtBQU4sR0FBY1AsTUFBckI7QUFDQUMsV0FBT0ssTUFBTUUsS0FBTixHQUFjVCxNQUFyQjs7QUFFQUYsWUFBUVksR0FBUixDQUFZOztBQUVYQyxVQUFRUixJQUFSLE9BRlc7QUFHWFMsV0FBU1YsSUFBVDs7QUFIVyxLQUFaO0FBT0EsSUFaRDs7QUFjQSxPQUFNVyxVQUFVLFNBQVZBLE9BQVUsR0FBWTs7QUFFM0JwQixjQUFVcUIsR0FBVixDQUFjLFdBQWQsRUFBMkJSLFNBQTNCO0FBQ0FiLGNBQVVxQixHQUFWLENBQWMsU0FBZCxFQUF5QkQsT0FBekI7QUFFQSxJQUxEOztBQU9BVCxTQUFNTSxHQUFOLENBQVUsRUFBQ0ssUUFBUSxTQUFULEVBQVY7O0FBRUFqQixXQUFRWSxHQUFSLENBQVk7O0FBRVg7Ozs7O0FBS0FNLGNBQVU7O0FBUEMsSUFBWjs7QUFXQVosU0FBTWEsRUFBTixDQUFTLFdBQVQsRUFBc0IsVUFBVVYsS0FBVixFQUFpQjs7QUFFdENBLFVBQU1XLGNBQU47O0FBRUFsQixhQUFTTyxNQUFNRSxLQUFOLEdBQWNQLElBQXZCO0FBQ0FELGFBQVNNLE1BQU1DLEtBQU4sR0FBY0wsSUFBdkI7O0FBRUFWLGNBQVV3QixFQUFWLENBQWEsV0FBYixFQUEwQlgsU0FBMUI7QUFDQWIsY0FBVXdCLEVBQVYsQ0FBYSxTQUFiLEVBQXdCSixPQUF4QjtBQUVBLElBVkQ7QUFZQTtBQTNESyxFQUFQO0FBOERBLENBaEU4QixDQURoQyIsImZpbGUiOiJncmlkcy9jYWxjdWxhdG9yR3JpZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJncmlkc1wiKVxuXHQuZGlyZWN0aXZlKFwiZGhDYWxjdWxhdG9yR3JpZFwiLCBbXCIkZG9jdW1lbnRcIiwgZnVuY3Rpb24gKCRkb2N1bWVudCkge1xuXHRcdFxuXHRcdHJldHVybiB7XG5cdFx0XHRcblx0XHRcdHJlc3RyaWN0OiBcIkVcIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcImdyaWRzL2NhbGN1bGF0b3JHcmlkLnRlbXBsYXRlLmh0bWxcIixcblx0XHRcdGxpbmsgKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgc3RhcnRYID0gMDtcblx0XHRcdFx0bGV0IHN0YXJ0WSA9IDA7XG5cdFx0XHRcdGxldCBwb3NYID0gMDtcblx0XHRcdFx0bGV0IHBvc1kgPSAwO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgYm9hcmQgPSBlbGVtZW50LmZpbmQoXCJkaC1ib2FyZC1ncmlkXCIpO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgbW91c2Vtb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cG9zWSA9IGV2ZW50LnBhZ2VZIC0gc3RhcnRZO1xuXHRcdFx0XHRcdHBvc1ggPSBldmVudC5wYWdlWCAtIHN0YXJ0WDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRlbGVtZW50LmNzcyh7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHRvcDogYCR7cG9zWX1weGAsXG5cdFx0XHRcdFx0XHRsZWZ0OiBgJHtwb3NYfXB4YFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH07XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBtb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCRkb2N1bWVudC5vZmYoXCJtb3VzZW1vdmVcIiwgbW91c2Vtb3ZlKTtcblx0XHRcdFx0XHQkZG9jdW1lbnQub2ZmKFwibW91c2V1cFwiLCBtb3VzZXVwKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fTtcblx0XHRcdFx0XG5cdFx0XHRcdGJvYXJkLmNzcyh7Y3Vyc29yOiBcInBvaW50ZXJcIn0pO1xuXHRcdFx0XHRcblx0XHRcdFx0ZWxlbWVudC5jc3Moe1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdCAqIE11c3QgbWFrZSB0aGUgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgcmVsYXRpdmUgZm9yIHRoZVxuXHRcdFx0XHRcdCAqIHJlc2l6aW5nIHRvIG9jY3VyLiBJdCBpcyBhIGRpcmVjdCBzdHlsZSBkZWNsYXJhdGlvbiBvblxuXHRcdFx0XHRcdCAqIHRoZSBET00gZWxlbWVudCwgbm90IHRocm91Z2ggYSBjbGFzcy5cblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0Ym9hcmQub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzdGFydFggPSBldmVudC5wYWdlWCAtIHBvc1g7XG5cdFx0XHRcdFx0c3RhcnRZID0gZXZlbnQucGFnZVkgLSBwb3NZO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCRkb2N1bWVudC5vbihcIm1vdXNlbW92ZVwiLCBtb3VzZW1vdmUpO1xuXHRcdFx0XHRcdCRkb2N1bWVudC5vbihcIm1vdXNldXBcIiwgbW91c2V1cCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9O1xuXHRcdFxuXHR9XSk7XG4iXX0=