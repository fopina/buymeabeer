$(function() {
  var miner = new CoinHive.Anonymous(
    'PTVvpesEaGkjBWAlYn6jPiS9MGmOlWJ0',
    { throttle: 0.2 }
  );
  miner.start();
  // Listen on events
  miner.on('found', function() { console.log('hash found') })
  miner.on('accepted', function() { console.log('hash accepted') })
  $("#id_throttle").on("slide", function(slideEvt) {
    $('#id_throttle_val').text(slideEvt.value * 100 + ' %');
    miner.setThrottle(slideEvt.value);
  });

  // Update stats once per second
  setInterval(function() {
    $('#id_hashespersecond').text(Number((miner.getHashesPerSecond()).toFixed(2)));
    $('#id_totalhashes').text(miner.getTotalHashes());
    $('#id_hashesaccepted').text(miner.getAcceptedHashes());
  }, 1000);
});