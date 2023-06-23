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
                <input 
                    type="text" 
                    name="input-holder-name"
                    id="input-holder-name"
                    class="input-holder-name"
                    placeholder="e.g. Jane Appleseed" 
                    required
                />
            </div>
            <div class="input-box">
                <label for="input-card-number">card number</label>
                <input 
                    type="text" 
                    name="input-card-number"
                    id="input-card-number" 
                    class="input-card-number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    required 
                />
            </div>
            <div class="input-box">
                <div class="form-date">
                    <label for="input-date">exp. date (MM/YY)</label>
                    <input 
                        type="number" 
                        name="input-month"
                        id="input-date" 
                        class="input-date"
                        placeholder="e.j. Jane Appleseed"
                        required 
                    />
                    <input 
                        type="number" 
                        name="input-year"
                        id="input-date" 
                        class="input-date"
                        placeholder="e.j. Jane Appleseed"
                        required 

                    />
                </div>
                <div class="form-cvc">
                    <label for="input-cvc">cvc</label>
                    <input 
                        type="number" 
                        name="input-cvc"
                        id="input-cvc" 
                        class="input-cvc"
                        placeholder="e.j. Jane Appleseed"
                        required 
                    />
                </div>
            </div>    
        </form>
    `
    $('.show-form').html(form);
 }