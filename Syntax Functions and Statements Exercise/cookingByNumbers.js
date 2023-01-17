function solve(...params){
    let result = Number(params[0]);
    let commands = params.slice(1);

    for (const command of commands) {
        execute(command);
    }

    function execute(command){
        switch(command){
            case 'chop':
                result /= 2;
                console.log(result);
                break;
            case 'dice':
                result = Math.sqrt(result);
                console.log(result);
                    break;
            case 'spice':
                result += 1;
                console.log(result);
                break;
            case 'bake':
                result *= 3;
                console.log(result);
                break;
            case 'fillet':
                result *= 0.8;
                console.log(result);
                break;
        }
    }
}


solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
