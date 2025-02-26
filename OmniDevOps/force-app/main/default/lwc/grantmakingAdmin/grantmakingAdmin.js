import { LightningElement, wire, api, track } from 'lwc';

export default class InAppLanding extends LightningElement {
    @api welcome_text = "Explore Grants Management Admin";
    @api no_record_loan_application = false;
    @api no_record_account = false;

    accountId;
    loanApplicationId;

    get pass_false() {
        return false;
    }

    get pass_true() {
        return true;
    }

}