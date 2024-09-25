function isLegal(age: number){
    if(age > 18){
        return true
    }
    else{
        return false;
    }
}

if(isLegal(20)){
    console.log("You are legal person for voting");
}
else{
    console.log("You are not legal for voting");
}