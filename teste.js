
const soma = function ( ...nums ) {
    let valor = 0;
    for ( let i=0; i<nums.length; i++ )
        valor += nums[i];
    return valor;
}