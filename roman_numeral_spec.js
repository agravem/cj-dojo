var romanNumeral = require('./roman_numeral');

describe('romanNumeral', function() {
  it('throws an error if no number is passed', function(){
    expect(function(){
      romanNumeral();
    }).toThrow("Expecting number");
  });

  it('returns I if number 1', function() {
    expect(romanNumeral(1)).toEqual('I');
  });

  it('returns II if number 2', function(){
    expect(romanNumeral(2)).toEqual('II');
  });

  it('returns III if number 3', function(){
    expect(romanNumeral(3)).toEqual('III');
  });

  it('returns V if number 5', function(){
    expect(romanNumeral(5)).toEqual('V');
  });

  it('returns IV if number is 4', function(){
    expect(romanNumeral(4)).toEqual('IV');
  });

  it('returns VI if number is 6', function(){
    expect(romanNumeral(6)).toEqual('VI');
  });

  it('returns VIII if number is 8', function(){
    expect(romanNumeral(8)).toEqual('VIII');
  });

  it('returns IX if number is 9', function(){
    expect(romanNumeral(9)).toEqual('IX');
  });

  it('returns X if number is 10', function(){
    expect(romanNumeral(10)).toEqual('X');
  });


});
