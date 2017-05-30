"use strict";

angular.module("main").service("CentralDataService", ["$rootScope", "OperationLogicService", function (rootScope, OperationLogicService) {

	var currentDigit = null;
	var maxJSExp = 53;

	var bundle = {

		numberStack: [],
		opStack: [],
		stack: [],
		result: null,
		currentNumber: null,
		currentOp: null

	};

	var flags = { invalidNumber: false };

	this.storeCurrentOp = function (opObject) {

		OperationLogicService.processOperation(opObject, bundle, flags);
	};

	this.storeCurrentNumber = function (num) {

		if (flags.invalidNumber) {

			return;
		}

		currentDigit = num.data;

		if (bundle.currentNumber === null) {

			bundle.currentNumber = num.data;
		} else {

			bundle.currentNumber = bundle.currentNumber.toString() + num.data;
		}

		if (bundle.currentNumber > Math.pow(2, maxJSExp) || bundle.currentNumber < -Math.pow(2, maxJSExp)) {

			bundle.currentNumber = "Number too large";

			flags.invalidNumber = true;

			rootScope.$broadcast("number:change", bundle.currentNumber);

			return;
		}

		rootScope.$broadcast("number:change", bundle.currentNumber);
	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9zZXJ2aWNlcy9jZW50cmFsRGF0YS5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJzZXJ2aWNlIiwicm9vdFNjb3BlIiwiT3BlcmF0aW9uTG9naWNTZXJ2aWNlIiwiY3VycmVudERpZ2l0IiwibWF4SlNFeHAiLCJidW5kbGUiLCJudW1iZXJTdGFjayIsIm9wU3RhY2siLCJzdGFjayIsInJlc3VsdCIsImN1cnJlbnROdW1iZXIiLCJjdXJyZW50T3AiLCJmbGFncyIsImludmFsaWROdW1iZXIiLCJzdG9yZUN1cnJlbnRPcCIsIm9wT2JqZWN0IiwicHJvY2Vzc09wZXJhdGlvbiIsInN0b3JlQ3VycmVudE51bWJlciIsIm51bSIsImRhdGEiLCJ0b1N0cmluZyIsIk1hdGgiLCJwb3ciLCIkYnJvYWRjYXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUUMsTUFBUixDQUFlLE1BQWYsRUFDRUMsT0FERixDQUNVLG9CQURWLEVBQ2dDLENBQUMsWUFBRCxFQUFlLHVCQUFmLEVBQXdDLFVBQVVDLFNBQVYsRUFBcUJDLHFCQUFyQixFQUE0Qzs7QUFFbEgsS0FBSUMsZUFBZSxJQUFuQjtBQUNBLEtBQU1DLFdBQVcsRUFBakI7O0FBRUEsS0FBTUMsU0FBUzs7QUFFZEMsZUFBYSxFQUZDO0FBR2RDLFdBQVMsRUFISztBQUlkQyxTQUFPLEVBSk87QUFLZEMsVUFBUSxJQUxNO0FBTWRDLGlCQUFlLElBTkQ7QUFPZEMsYUFBVzs7QUFQRyxFQUFmOztBQVdBLEtBQU1DLFFBQVEsRUFBQ0MsZUFBZSxLQUFoQixFQUFkOztBQUdBLE1BQUtDLGNBQUwsR0FBc0IsVUFBVUMsUUFBVixFQUFvQjs7QUFFekNiLHdCQUFzQmMsZ0JBQXRCLENBQXVDRCxRQUF2QyxFQUFpRFYsTUFBakQsRUFBeURPLEtBQXpEO0FBRUEsRUFKRDs7QUFNQSxNQUFLSyxrQkFBTCxHQUEwQixVQUFVQyxHQUFWLEVBQWU7O0FBRXhDLE1BQUlOLE1BQU1DLGFBQVYsRUFBeUI7O0FBRXhCO0FBRUE7O0FBRURWLGlCQUFlZSxJQUFJQyxJQUFuQjs7QUFFQSxNQUFJZCxPQUFPSyxhQUFQLEtBQXlCLElBQTdCLEVBQW1DOztBQUVsQ0wsVUFBT0ssYUFBUCxHQUF1QlEsSUFBSUMsSUFBM0I7QUFFQSxHQUpELE1BSU87O0FBRU5kLFVBQU9LLGFBQVAsR0FBdUJMLE9BQU9LLGFBQVAsQ0FBcUJVLFFBQXJCLEtBQWtDRixJQUFJQyxJQUE3RDtBQUVBOztBQUVELE1BQUlkLE9BQU9LLGFBQVAsR0FBdUJXLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVlsQixRQUFaLENBQXZCLElBQWdEQyxPQUFPSyxhQUFQLEdBQXVCLENBQUNXLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVlsQixRQUFaLENBQTVFLEVBQW1HOztBQUVsR0MsVUFBT0ssYUFBUCxHQUF1QixrQkFBdkI7O0FBRUFFLFNBQU1DLGFBQU4sR0FBc0IsSUFBdEI7O0FBRUFaLGFBQVVzQixVQUFWLENBQXFCLGVBQXJCLEVBQXNDbEIsT0FBT0ssYUFBN0M7O0FBRUE7QUFFQTs7QUFFRFQsWUFBVXNCLFVBQVYsQ0FBcUIsZUFBckIsRUFBc0NsQixPQUFPSyxhQUE3QztBQUVBLEVBbENEO0FBb0NBLENBN0Q4QixDQURoQyIsImZpbGUiOiJjb21tb24vc2VydmljZXMvY2VudHJhbERhdGEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1haW5cIilcblx0LnNlcnZpY2UoXCJDZW50cmFsRGF0YVNlcnZpY2VcIiwgW1wiJHJvb3RTY29wZVwiLCBcIk9wZXJhdGlvbkxvZ2ljU2VydmljZVwiLCBmdW5jdGlvbiAocm9vdFNjb3BlLCBPcGVyYXRpb25Mb2dpY1NlcnZpY2UpIHtcblx0XHRcblx0XHRsZXQgY3VycmVudERpZ2l0ID0gbnVsbDtcblx0XHRjb25zdCBtYXhKU0V4cCA9IDUzO1xuXHRcdFxuXHRcdGNvbnN0IGJ1bmRsZSA9IHtcblx0XHRcdFxuXHRcdFx0bnVtYmVyU3RhY2s6IFtdLFxuXHRcdFx0b3BTdGFjazogW10sXG5cdFx0XHRzdGFjazogW10sXG5cdFx0XHRyZXN1bHQ6IG51bGwsXG5cdFx0XHRjdXJyZW50TnVtYmVyOiBudWxsLFxuXHRcdFx0Y3VycmVudE9wOiBudWxsXG5cdFx0XG5cdFx0fTtcblx0XHRcblx0XHRjb25zdCBmbGFncyA9IHtpbnZhbGlkTnVtYmVyOiBmYWxzZX07XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5zdG9yZUN1cnJlbnRPcCA9IGZ1bmN0aW9uIChvcE9iamVjdCkge1xuXHRcdFx0XG5cdFx0XHRPcGVyYXRpb25Mb2dpY1NlcnZpY2UucHJvY2Vzc09wZXJhdGlvbihvcE9iamVjdCwgYnVuZGxlLCBmbGFncyk7XG5cdFx0XHRcblx0XHR9O1xuXHRcdFxuXHRcdHRoaXMuc3RvcmVDdXJyZW50TnVtYmVyID0gZnVuY3Rpb24gKG51bSkge1xuXHRcdFx0XG5cdFx0XHRpZiAoZmxhZ3MuaW52YWxpZE51bWJlcikge1xuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y3VycmVudERpZ2l0ID0gbnVtLmRhdGE7XG5cdFx0XHRcblx0XHRcdGlmIChidW5kbGUuY3VycmVudE51bWJlciA9PT0gbnVsbCkge1xuXHRcdFx0XHRcblx0XHRcdFx0YnVuZGxlLmN1cnJlbnROdW1iZXIgPSBudW0uZGF0YTtcblx0XHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcblx0XHRcdFx0YnVuZGxlLmN1cnJlbnROdW1iZXIgPSBidW5kbGUuY3VycmVudE51bWJlci50b1N0cmluZygpICsgbnVtLmRhdGE7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAoYnVuZGxlLmN1cnJlbnROdW1iZXIgPiBNYXRoLnBvdygyLCBtYXhKU0V4cCkgfHwgYnVuZGxlLmN1cnJlbnROdW1iZXIgPCAtTWF0aC5wb3coMiwgbWF4SlNFeHApKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRidW5kbGUuY3VycmVudE51bWJlciA9IFwiTnVtYmVyIHRvbyBsYXJnZVwiO1xuXHRcdFx0XHRcblx0XHRcdFx0ZmxhZ3MuaW52YWxpZE51bWJlciA9IHRydWU7XG5cdFx0XHRcdFxuXHRcdFx0XHRyb290U2NvcGUuJGJyb2FkY2FzdChcIm51bWJlcjpjaGFuZ2VcIiwgYnVuZGxlLmN1cnJlbnROdW1iZXIpO1xuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cm9vdFNjb3BlLiRicm9hZGNhc3QoXCJudW1iZXI6Y2hhbmdlXCIsIGJ1bmRsZS5jdXJyZW50TnVtYmVyKTtcblx0XHRcdFxuXHRcdH07XG5cdFx0XG5cdH1dKTtcbiJdfQ==
