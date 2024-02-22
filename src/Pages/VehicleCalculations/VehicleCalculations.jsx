import React from 'react';
import VehicleLoanCalculations from '../../components/VehicleLoanCalculations/VehicleLoanCalculations';
const VehicleCalculations = ({userInfo, userFinancialInfo, userMortgageInfo, userVehicleInfo}) => {
    return (
        <div>
            <VehicleLoanCalculations
                userFinancialInfo={userFinancialInfo}
                userInfo={userInfo}
                userMortgageInfo={userMortgageInfo}
                userVehicleInfo={userVehicleInfo}/>
        </div>
    );
}

export default VehicleCalculations;