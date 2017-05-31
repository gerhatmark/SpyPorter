var price = 2000;
var total_price = null;
var currency = "HUF";
var name = "SpyPorter Board Game";
var qty = document.getElementById('qty1').value;

function ellenorzes() {

    if (document.getElementById('qty1').checked) {
        qty = document.getElementById('qty1').value;
        console.log(qty);

    } else if (document.getElementById('qty2').checked) {
        qty = document.getElementById('qty2').value;
        console.log(qty);

    } else {
        qty = document.getElementById('qty3').value;
        console.log(qty);

    }
}
// Render the PayPal button

paypal.Button.render({

    // Set your environment

    env: 'sandbox', // sandbox | production

    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create

    client: {
        sandbox: 'AbOALK2CzT6HSFNMUECudG9lay_ZQn9MALqT5zxW5CyQJl5NpgCN93-Woxq1yYIODa1zIEnj_Lfjwoy8'
    },


    // Set to 'Pay Now'

    commit: true,

    // Wait for the PayPal button to be clicked

    payment: function(actions) {


        total_price = price * qty;
        // Make a client-side call to the REST api to create the payment

        console.log("Ár: " + price)
        console.log("Mennyiség: " + qty)
        console.log("Végleges ár: " + total_price)
        console.log("Pénznem" + currency)

        return actions.payment.create({

            transactions: [{

                amount: {
                    total: total_price,
                    currency: currency
                },

                item_list: {
                    items: [{
                        quantity: qty,
                        name: name,
                        price: price,
                        currency: currency
                    }]

                }

            }]

        });

    },


    // Wait for the payment to be authorized by the customer

    onAuthorize: function(data, actions) {

        // Execute the payment

        return actions.payment.execute().then(function() {


            window.location.replace("#");

        });
    },

    onCancel: function(data, actions) {
        window.location.replace("#");
    }

}, '#paypal-button-container');