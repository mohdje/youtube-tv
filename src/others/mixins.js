export const DeferredMethodMixin = {
	data() {
		return {
			lastCallTime: null
		}
	},
	methods: {
		deferMethod(waitingTime, callback) {
			this.lastCallTime = Date.now();
			setTimeout(() => {
				if (Date.now() > this.lastCallTime + waitingTime) {
					callback();
				}
			}, waitingTime + 500);
		}
	}
}