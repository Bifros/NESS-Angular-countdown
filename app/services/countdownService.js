app.service('countdownService', function() {
  this.deadline = new Date().getTime() + 24 * 60 * 60 * 1000;
  
  this.getDisplayDeadline = function() {
    var displayDeadline = new Date(this.deadline).toLocaleString('en-us', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    return displayDeadline;
  };

  this.isFinished = function() {
    var timeLeft = this.deadline - new Date().getTime();
    return timeLeft <= 0;
  };

  this.getUpdatedCounterParts = function() {
    var timeLeft = this.deadline - new Date().getTime();

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours:  Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      sec: Math.floor((timeLeft % (1000 * 60)) / 1000)
    }
  }
  
});