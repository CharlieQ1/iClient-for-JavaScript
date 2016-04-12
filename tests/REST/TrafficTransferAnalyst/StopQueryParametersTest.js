module("StopQueryParameters");

test("TestConstructor", function() {
    expect(3);
    var info = new SuperMap.REST.StopQueryParameters({
        keyWord: '�찲��',
        returnPosition: true
    });
    
    ok(info !== null, 'null');
    equal(info.keyWord, '�찲��', 'info.keyWord');
    equal(info.returnPosition, true, 'info.returnPosition');
});

test("TestDestroy", function() {
    expect(3);
    var info = new SuperMap.REST.StopQueryParameters({
        keyWord: '�찲��',
        returnPosition: true
    });
    
    ok(info !== null, 'null');
    info.destroy();
    ok(info.keyWord === null, 'null');
    ok(info.returnPosition === null, 'null');
});