//find form
var wattageIncandescent = $('section.inc p:first'),
    wattageHalogen = $('section.hal p:first'),
    wattageCFL = $('section.cfl p:first'),
    wattageLED = $('section.led p:first'),
    costIncandescent = $('section.inc').find('p:last-child'),
    costHalogen = $('section.hal').find('p:last-child'),
    costCFL = $('section.cfl').find('p:last-child'),
    costLED = $('section.led').find('p:last-child');

//values ​​of coefficients
var inc_conversion = .0625,
    hal_conversion = .0450,
    cfl_conversion = .0146,
    led_conversion = .0125;

function getWattage(current_lumens, conversion) {
    return (current_lumens * conversion).toFixed(1);
}
//change in select lumens form
var $select = $('select');

function changeSelect() {
    wattageIncandescent.html(getWattage(this.value, inc_conversion));
    wattageHalogen.html(getWattage(this.value, hal_conversion));
    wattageCFL.html(getWattage(this.value, cfl_conversion));
    wattageLED.html(getWattage(this.value, led_conversion));
}

$select.on('change', changeSelect);

//change in inputs form
var $inputCost = $($('input')[0]),
    $inputUsage = $($('input')[1]);


function getCost(wattage, hoursPerDay, cost) {
    return (((wattage * 365 * hoursPerDay) / 1000) * cost / 100).toFixed(2);
}
function changeInput() {
    costIncandescent.html(getCost(wattageIncandescent.html(), $inputUsage.val(), $inputCost.val()));
    costHalogen.html(getCost(wattageHalogen.html(), $inputUsage.val(), $inputCost.val()));
    costCFL.html(getCost(wattageCFL.html(), $inputUsage.val(), $inputCost.val()));
    costLED.html(getCost(wattageLED.html(), $inputUsage.val(), $inputCost.val()));
}
//$inputCost.on('change', changeInput);
//$inputUsage.on('change', changeInput);

$('input').each(function() {
    $(this).on('change', changeInput);
});