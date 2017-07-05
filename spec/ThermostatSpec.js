describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a minimum temperature of 10 degrees", function() {
    expect(thermostat.MINIMUM).toEqual(10);
  });

  it ('initializes with a temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it ('initializes with a medium-usage', function() {
    expect(thermostat.usage).toEqual("medium-usage");
  });

  describe('up', function() {
    it ('increases the temperature', function() {
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25)
    });
  });

  describe('down', function() {
    it ('decreases the temperature', function() {
      thermostat.down(5)
      expect(thermostat.temperature).toEqual(15)
    });
  });

  describe('setMaxTemp', function() {
    it("sets the maximum temperature if power saving mode is on", function() {
      spyOn(thermostat, "powerSavingMode").and.returnValue(true)
      expect(thermostat.maximum).toEqual(25)
    });

    it("sets the maximum temperature if power saving mode is off", function() {
      thermostat.turnPowerSavingOff()
      thermostat.setMaxTemp()
      expect(thermostat.maximum).toEqual(32)
    });
  });

  describe('turnPowerSavingOff', function() {
    it("turns the power saving mode off", function() {
      thermostat.turnPowerSavingOff()
      expect(thermostat.powerSavingMode).toEqual(false)
    });
  });

  describe('turnPowerSavingOn', function() {
    it("turns the power saving mode on", function() {
      thermostat.turnPowerSavingOff()
      thermostat.turnPowerSavingOn()
      expect(thermostat.powerSavingMode).toEqual(true)
    });
  });

  describe('reset', function() {
    it ('resets the temperature to 20 degrees', function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('checkUsage', function() {
    it ('checks that the current energy usage is on low', function() {
      thermostat.down(5);
      thermostat.checkUsage()
      expect(thermostat.usage).toEqual("low-usage");
    });

    it ('checks that the current energy usage is on medium', function() {
      thermostat.up(4);
      thermostat.checkUsage()
      expect(thermostat.usage).toEqual("medium-usage");
    });

    it ('checks that the current energy usage is on high', function() {
      thermostat.up(7);
      thermostat.checkUsage()
      expect(thermostat.usage).toEqual("high-usage");
    });
  });
});
