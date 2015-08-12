module.exports= Status;

function Status () {
  this.type = 'status';
  this.state = 'OK';
  this.updated = new Date();
}