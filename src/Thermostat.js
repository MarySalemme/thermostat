function Thermostat() {
  this.temperature = 20;
  this.MINIMUM = 10;
  this.maximum = 25;
  this.powerSavingMode = true;
  this.usage = "medium-usage";
}

Thermostat.prototype.up = function() {
  if (this.temperature === this.maximum) {
    throw new Error ('Cannot raise above maximum')
  }
  this.temperature = this.temperature + 1;
}

Thermostat.prototype.down = function() {
  if (this.temperature === this.MINIMUM) {
    throw new Error ('Cannot go below minimum')
  }
  this.temperature = this.temperature - 1;
}

Thermostat.prototype.setMaxTemp = function() {
  if (this.powerSavingMode == false)  {
    this.maximum = 32;
  } else {
    this.maximum = 25;
  }
}

Thermostat.prototype.turnPowerSavingOff = function() {
  this.powerSavingMode = false;
  this.setMaxTemp();
}

Thermostat.prototype.turnPowerSavingOn = function() {
  this.powerSavingMode = true;
  this.setMaxTemp();
  this.temperature = 25;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.checkUsage = function() {
  if (this.temperature < 18) {
    this.usage = "low-usage";
  } else if (this.temperature >= 18 && this.temperature < 25) {
    this.usage = "medium-usage";
  } else {
    this.usage = "high-usage";
  }
}
