String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.title = function(force) {
	//'examPLE'.title();      -> 'ExamPLE'
	//'examPLE'.title(true);  -> 'Example'
	return (force ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(s) { return s.toUpperCase(); });
};