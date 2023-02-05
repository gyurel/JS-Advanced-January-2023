function validate(requestObj){
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const {method, uri, version, message} = requestObj;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    const uriRegEx = /^([\w.])+$|^\*$/;
    const messageRegEx = /^[^<>\\&'"]*$/;

    let errorMessage = (errorProperty) => 
    `Invalid request header: Invalid ${errorProperty}`;

    if(!requestObj.hasOwnProperty('method')){
        throw new Error(errorMessage("Method"));
    }

    if(!validMethods.includes(method)){
        throw new Error(errorMessage("Method"));
    }

    if(!requestObj.hasOwnProperty('uri') || !uriRegEx.test(uri)){
        throw new Error(errorMessage("URI"));
    }

    if(!requestObj.hasOwnProperty('version') || !validVersions.includes(version)){
        throw new Error(errorMessage("Version"));
    }

    if(!requestObj.hasOwnProperty('message') || !messageRegEx.test(message)){
        throw new Error(errorMessage("Message"));
    }

    return requestObj;
}


validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '',
  });
  