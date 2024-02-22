import React from "react";
import MortCalculations from "../../components/MortgageCalc/MortgageCalc";

const HomeCalculations = ({userInfo, userFinancialInfo, userMortgageInfo}) => {

    return (
        <div>
            <MortCalculations 
                userFinancialInfo={userFinancialInfo}
                userInfo={userInfo}
                userMortgageInfo={userMortgageInfo}/>
        </div>
    );
}

export default HomeCalculations;