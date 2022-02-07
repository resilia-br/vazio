/**
 * Função que soma todos os parâmetros
 * @param  {number[]} nums 
 * @returns {number}
 */
const soma = function ( ...nums ) {
    let valor = 0;
    for ( let i=0; i<nums.length; i++ )
        valor += nums[i];
    return valor;
}