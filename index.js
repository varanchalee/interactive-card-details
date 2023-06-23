$(document).ready(function () {
    addCardDetails();
});

function addCardDetails() { 
    var html = "";
    html += `
        <div class="credit-card-logo">
            <div class="card-logo"></div>
            <img src="images/card-logo.svg" alt="card logo"/>
        </div>
        <div class="credit-card-number">
            <div>0000</div>   
            <div>0000</div>
            <div>0000</div>
            <div>0000</div>
        </div>
        <div class="card-holder-info">
            <span class="holder">Jane Appleseed</span>
            <span class="expiration-date">00/00</span>
        </div>
    `
    $('.credit-card-details').html(html);

    var cvc = "";
    cvc += `<span>000</span>`
    $('.cvc').html(cvc);

    var form = "";
    form += `
        <form>
            <div class="input-box">
                <label for="input-holder-name">cardholder name</label>
                <input type="text" id="input-holder-name" name="input-holder-name"/>
            </div>
            <div class="input-box">
                <label for="input-card-number">card number</label>
                <input type="text" id="input-card-number" name="input-card-number"/>
            </div>
            <div class="input-box">
                <div class="form-date">
                    <label for="input-date">exp. date (MM/YY)</label>
                    <input type="number" id="input-date" name="input-month"/>
                    <input type="number" id="input-date" name="input-year"/>
                </div>
                <div class="form-cvc">
                    <label for="input-cvc">cvc</label>
                    <input type="number" id="input-cvc" name="input-cvc"/>
                </div>
            </div>    
        </form>
    `
    $('.show-form').html(form);
 }