export function logarTempoDeExecucao(){

    return function(target: any, propertyKey: String, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){
            console.log('====================')
            console.log(`Parametos passados para o metodo ${propertyKey}: ${JSON.stringify(args)}`);            
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O retorno do metodo ${propertyKey} é ${JSON.stringify(retorno)}`);
            console.log(`O metodo ${propertyKey} demorou ${t2 - t1} ms`);
            return retorno;
        }

        return descriptor;

    }
}