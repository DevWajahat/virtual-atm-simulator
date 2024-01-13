
    var pin = '1234';
    var balance_amt = 100;

    function functionAtm() {
        var pinValue = document.getElementById('pin').value;
        if (pinValue == pin) {
            showAlert('success', 'Password correct');
        } else {
            showAlert('error', 'Wrong password. Enter a valid password.');
        }
    }

    function functionAmt() {
        var enter_amt = parseFloat(document.getElementById('amount').value);
        var new_balance = 0;

        if (pinEntered()) {
            if (balance_amt >= enter_amt) {
                new_balance = balance_amt - enter_amt;
                balance_amt = new_balance; // Update balance_amt
                showAlert('success', "Please collect cash rupees " + enter_amt + ". Your new balance is " + new_balance);
            } else {
                showAlert('error', 'Insufficient balance');
            }
        }
    }

    function functionDeposit() {
        var deposit_amt = parseFloat(document.getElementById('amount').value);
        var new_balance = 0;

        if (pinEntered()) {
            new_balance = balance_amt + deposit_amt;
            balance_amt = new_balance; // Update balance_amt
            showAlert('success', 'Deposit successful. Your new balance is ' + new_balance);
        }
    }

    function functionBalanceInquiry() {
        if (pinEntered()) {
            showAlert('info', 'Your current balance is ' + balance_amt);
        }
    }

    // function functionCardMiniStatement() {
    //     if (pinEntered()) {
    //         showAlert('info', 'Card Mini Statement: No recent transactions');
    //     }
    // }

    // function functionAccountMiniStatement() {
    //     if (pinEntered()) {
    //         showAlert('info', 'Account Mini Statement: No recent transactions');
    //     }
    // }
    var transactions = []; // Array to store transactions

    function functionCardMiniStatement() {
        if (pinEntered()) {
            if (transactions.length > 0) {
                showAlert('info', 'Card Mini Statement: Recent transactions\n' + transactions.join('\n'));
            } else {
                showAlert('info', 'Card Mini Statement: No recent transactions');
            }
        }
    }
    
    function functionAccountMiniStatement() {
        if (pinEntered()) {
            if (transactions.length > 0) {
                showAlert('info', 'Account Mini Statement: Recent transactions\n' + transactions.join('\n'));
            } else {
                showAlert('info', 'Account Mini Statement: No recent transactions');
            }
        }
    }
    
    function functionAmt() {
        var enter_amt = parseFloat(document.getElementById('amount').value);
        var new_balance = 0;
    
        if (pinEntered()) {
            if (balance_amt >= enter_amt) {
                new_balance = balance_amt - enter_amt;
                balance_amt = new_balance; // Update balance_amt
                transactions.push('Withdrawal: ' + enter_amt); // Add transaction to array
                showAlert('success', "Please collect cash rupees " + enter_amt + ". Your new balance is " + new_balance);
            } else {
                showAlert('error', 'Insufficient balance');
            }
        }
    }
    
    function functionDeposit() {
        var deposit_amt = parseFloat(document.getElementById('amount').value);
        var new_balance = 0;
    
        if (pinEntered()) {
            new_balance = balance_amt + deposit_amt;
            balance_amt = new_balance; // Update balance_amt
            transactions.push('Deposit: ' + deposit_amt); // Add transaction to array
            showAlert('success', 'Deposit successful. Your new balance is ' + new_balance);
        }
    }
    
    function pinEntered() {
        var pinValue = document.getElementById('pin').value;
        if (pinValue == pin) {
            return true;
        } else {
            showAlert('error', 'Incorrect pin. Transaction cancelled.');
            return false;
        }
    }

    function showAlert(icon, text) {
        Swal.fire({
            icon: icon,
            title: 'Virtual ATM',
            text: text,
        });
    }
