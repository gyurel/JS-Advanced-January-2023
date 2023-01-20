function solve(obj){
    if(obj['dizziness']){
        obj['levelOfHydrated'] = obj['levelOfHydrated'] + 0.1 * obj['weight'] * obj['experience'];
        obj['dizziness'] = false;
        // console.log(obj);
        return obj;
    }else{
        return obj;
        // console.log(obj);
    }
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
    );

solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
    );

solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  );
