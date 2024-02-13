function recursividade(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursividade(max);
}
recursividade(0);